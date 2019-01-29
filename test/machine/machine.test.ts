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

import * as assert from "power-assert";
import {
    machine,
} from "../../lib/machine/machine";

describe("machine", () => {

    it("should create a k8 SDM", () => {
        const sdm = machine({ name: "k8s-sdm-test" } as any);
        assert(sdm);
        assert(sdm.extensionPacks.some(p => p.name === "@atomist/sdm-pack-k8s"));
    });

});
