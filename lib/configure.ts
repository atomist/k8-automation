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

import { SoftwareDeliveryMachineConfiguration } from "@atomist/sdm";
import {
    ConfigureMachineOptions,
    LocalSoftwareDeliveryMachineConfiguration,
} from "@atomist/sdm-core";
import { runningInK8s } from "@atomist/sdm-core/lib/goal/container/util";
import * as _ from "lodash";
import { safeBucketName } from "./bucket";

/** SDM options. */
export const machineOptions: ConfigureMachineOptions = {
    preProcessors: [
        configureSdm,
    ],
};

/** Provide SDM configuration. */
async function configureSdm(cfg: LocalSoftwareDeliveryMachineConfiguration): Promise<LocalSoftwareDeliveryMachineConfiguration> {
    const defaultConfig: SoftwareDeliveryMachineConfiguration = {
        cluster: {
            workers: 1,
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
                enabled: true,
            },
        },
    };
    let cacheConfig: SoftwareDeliveryMachineConfiguration;
    if (runningInK8s()) {
        process.env.ATOMIST_GOAL_SCHEDULER = "kubernetes";
        if (cfg.logging) {
            cfg.logging.color = false;
        }
        cacheConfig = {
            sdm: {
                cache: {
                    bucket: safeBucketName(cfg.name),
                    path: "k8s-sdm-cache",
                },
            },
        };
    } else {
        cacheConfig = {
            sdm: {
                cache: {
                    path: "/tmp/k8s-sdm-cache",
                },
            },
        };
    }
    return _.defaultsDeep(cfg, cacheConfig, defaultConfig);
}
