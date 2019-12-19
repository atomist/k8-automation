/*
 * Copyright © 2019 Atomist, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { logger } from "@atomist/automation-client";
import {
    ExecuteGoal,
    GoalScheduler,
    GoalWithFulfillment,
    SdmGoalState,
    ServiceRegistrationGoalDataKey,
} from "@atomist/sdm";
import {
    Container,
    GoalMaker,
    K8sContainerRegistration,
    KubernetesGoalScheduler,
} from "@atomist/sdm-core";
import {
    executeK8sJob,
    k8sFulfillmentCallback,
} from "@atomist/sdm-core/lib/goal/container/k8s";
import * as stringify from "json-stringify-safe";
import * as _ from "lodash";

/**
 * Create goal that can fulfill container goals.  It will fulfill
 * those container goals by constructing a job spec from the container
 * goal data and submitting that spec to the Kubernetes API.
 */
export const containerDeploy: GoalMaker = async sdm => {
    const goalName = "container-deploy";
    return new GoalWithFulfillment({ displayName: goalName, uniqueName: goalName })
        .with({
            goalExecutor: containerExecutor,
            name: `${goalName}-executor`,
        });
};

/**
 * If running as isolated goal, use [[executeK8sJob]] to execute the
 * goal.  Otherwise, schedule the goal execution as a Kubernetes job
 * using [[scheduleK8sjob]].
 */
const containerExecutor: ExecuteGoal = gi => (process.env.ATOMIST_ISOLATED_GOAL) ? executeK8sJob()(gi) : scheduleK8sJob(gi);

/**
 * Get container registration from goal event data, use
 * [[k8sFulfillmentcallback]] to get a goal event schedulable by a
 * [[KubernetesGoalScheduler]], then schedule the goal using that
 * scheduler.
 */
const scheduleK8sJob: ExecuteGoal = async gi => {
    const { goalEvent } = gi;
    if (!goalEvent || !goalEvent.data) {
        throw new Error(`Goal ${goalEvent.uniqueName} requesting fulfillment has no data element`);
    }
    let goalEventData: any;
    try {
        goalEventData = JSON.parse(goalEvent.data);
    } catch (e) {
        throw new Error(`Failed to parse goal ${goalEvent.uniqueName} event data: ${goalEvent.data}`);
    }
    const containerReg: K8sContainerRegistration = goalEventData["@atomist/sdm/container"];
    if (!containerReg) {
        throw new Error(`Goal ${goalEvent.uniqueName} event data has no container spec: ${goalEvent.data}`);
    }

    containerReg.input = containerReg.input || [];
    containerReg.output = containerReg.output || [];
    if (goalEventData["@atomist/sdm/input"]) {
        containerReg.input.push(...goalEventData["@atomist/sdm/input"]);
    }
    if (goalEventData["@atomist/sdm/output"]) {
        containerReg.output.push(...goalEventData["@atomist/sdm/output"]);
    }

    const goalSchedulers: GoalScheduler[] = toArray(gi.configuration.sdm.goalScheduler);
    const k8sScheduler = goalSchedulers.find(gs => gs instanceof KubernetesGoalScheduler) as KubernetesGoalScheduler;
    if (!k8sScheduler) {
        throw new Error(`Failed to find KubernetesGoalScheduler in goal schedulers: ${stringify(goalSchedulers)}`);
    }

    // the k8sFulfillmentCallback may already have been called, so wipe it out
    delete goalEventData[ServiceRegistrationGoalDataKey];
    goalEvent.data = JSON.stringify(goalEventData);

    try {
        logger.debug(`BEFORE:${goalEvent.data}`);
        const schedulableGoalEvent = await k8sFulfillmentCallback(gi.goal as Container, containerReg)(goalEvent, gi);
        const scheduleResult = await k8sScheduler.schedule({ ...gi, goalEvent: schedulableGoalEvent });
        if (scheduleResult.code) {
            return { ...scheduleResult, message: `Failed to schedule container goal ${goalEvent.uniqueName}: ${scheduleResult.message}` };
        }
        schedulableGoalEvent.state = SdmGoalState.in_process;
        logger.debug(`AFTER:${schedulableGoalEvent.data}`);
        return schedulableGoalEvent;
    } catch (e) {
        const message = `Failed to schedule container goal ${goalEvent.uniqueName} as Kubernetes job: ${e.message}`;
        gi.progressLog.write(message);
        return { code: 1, message };
    }
};

function toArray<T>(a: T | T[] | undefined): T[] {
    if (a) {
        if (Array.isArray(a)) {
            return a;
        } else {
            return [a];
        }
    } else {
        return [];
    }
}
