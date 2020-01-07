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

/**
 * Make bucket name safe for Google Cloud Storage.
 * https://cloud.google.com/storage/docs/naming
 */
export function safeBucketName(bucket: string | undefined): string {
    if (!bucket) {
        return "atomist-k8s-sdm";
    }
    const safeBucket = bucket.toLowerCase().replace(/[^-A-Za-z0-9]+/g, "-").replace(/-+/g, "-").replace(/^-/, "");
    const legalBucket = safeBucket.replace(/^goog/i, "atm").replace(/g[o0][o0]gle/ig, "atomist");
    const lengthBucket = legalBucket.substring(0, 63).replace(/-$/, "");
    if (lengthBucket.length < 3) {
        return lengthBucket + "0".repeat(3 - lengthBucket.length);
    }
    return lengthBucket;
}
