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

import { k8sContainerFulfiller } from "@atomist/sdm-core/lib/goal/container/k8s";
import { configure } from "@atomist/sdm-core/lib/machine/configure";
import { k8sGoalSchedulingSupport } from "@atomist/sdm-core/lib/pack/k8s/goalScheduling";
import { gcpSupport } from "@atomist/sdm-pack-gcp/lib/gcp";
import { kubernetesDeployFulfiller } from "@atomist/sdm-pack-k8s/lib/deploy/fulfiller";
import { k8sSupport } from "@atomist/sdm-pack-k8s/lib/k8s";
import { machineOptions } from "./lib/configure";

/**
 * Provide a default configuration for this SDM.
 */
export const configuration = configure(async sdm => {
    sdm.addExtensionPacks(
        gcpSupport(),
        k8sGoalSchedulingSupport(),
        k8sSupport({ registerCluster: true }),
    );
}, machineOptions);

/**
 * Fulfill containers goals sent to this SDM.
 */
export const containerFulfill = k8sContainerFulfiller();

/**
 * Fulfill Kubernetes deploy goals sent to this SDM.
 */
export const kubernetesDeployFulfill = kubernetesDeployFulfiller();
