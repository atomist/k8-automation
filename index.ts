/*
 * Copyright © 2020 Atomist, Inc.
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

import {
    configure,
    K8sContainerFulfiller,
    k8sGoalSchedulingSupport,
} from "@atomist/sdm-core";
import { runningInK8s } from "@atomist/sdm-core/lib/goal/container/util";
import { gcpSupport } from "@atomist/sdm-pack-gcp";
import {
    k8sSupport,
    kubernetesDeployFulfiller,
} from "@atomist/sdm-pack-k8s";
import * as _ from "lodash";
import { safeBucketName } from "./lib/bucket";

/**
 * Provide a default configuration for this SDM.
 */
export const configuration = configure(async sdm => {
    if (runningInK8s()) {
        process.env.ATOMIST_GOAL_SCHEDULER = "kubernetes";
        sdm.addExtensionPacks(
            gcpSupport(),
            k8sGoalSchedulingSupport(),
            k8sSupport({ registerCluster: true }),
        );
        const defaultCfg = {
            cluster: {
                workers: 1,
            },
            logging: {
                color: false,
                level: "debug",
            },
            sdm: {
                goal: {
                    timeout: 1000 * 60 * 20,
                },
                k8s: {
                    job: {
                        cleanupInterval: 1000 * 60 * 10,
                    },
                },
                cache: {
                    bucket: safeBucketName(sdm.configuration.name),
                    enabled: true,
                    path: "k8s-sdm-cache",
                },
            },
        };
        _.defaultsDeep(sdm.configuration, defaultCfg);
    } else {
        const defaultCfg = {
            sdm: {
                cache: {
                    enabled: true,
                    path: "/tmp/k8s-sdm-cache",
                },
            },
        };
        _.defaultsDeep(sdm.configuration, defaultCfg);
    }

});

/**
 * Fulfill containers goals sent to this SDM.
 */
export const containerFulfill = K8sContainerFulfiller;
/**
 * Fulfill Kubernetes deploy goals sent to this SDM.
 */
export const kubernetesDeployFulfill = kubernetesDeployFulfiller();
