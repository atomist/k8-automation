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

import { Configuration } from "@atomist/automation-client";
import { configureHumio } from "@atomist/automation-client-ext-humio";
import { configureLogzio } from "@atomist/automation-client-ext-logzio";
import { k8sGoalSchedulingSupport } from "@atomist/sdm-core";
import { runningInK8s } from "@atomist/sdm-core/lib/goal/container/util";
import { gcpSupport } from "@atomist/sdm-pack-gcp";
import { k8sSupport } from "@atomist/sdm-pack-k8s";
import * as _ from "lodash";

export const K8sSupport = async (cfg: Configuration) => {
    if (runningInK8s()) {
        const defaultCfg = {
            cluster: {
                workers: 2,
            },
            sdm: {
                k8s: {
                    job: {
                        cleanupInterval: 1000 * 60 * 10,
                    },
                },
                cache: {
                    bucket: "atm-demo-sdm-goal-cache-demo",
                    path: "demo-sdm-cache",
                },
                extensionPacks: [
                    gcpSupport(),
                    k8sGoalSchedulingSupport(),
                    k8sSupport({ registerCluster: true }),
                ],
            },
        };
        cfg.postProcessors = cfg.postProcessors || [];
        cfg.postProcessors.push(
            configureHumio,
            configureLogzio,
        );
        return _.defaultsDeep(cfg, defaultCfg);
    } else {
        const defaultCfg = {
            sdm: {
                cache: {
                    path: "/tmp/cache",
                },
            },
        };
        return _.defaultsDeep(cfg, defaultCfg);
    }
};
