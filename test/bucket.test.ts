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

import * as assert from "power-assert";
import { safeBucketName } from "../lib/bucket";

describe("bucket", () => {

    describe("safeBucketName", () => {

        it("should return the default bucket name", () => {
            [undefined, ""].forEach(n => {
                const b = safeBucketName(n);
                const e = "atomist-k8s-sdm";
                assert(b === e);
            });
        });

        it("should pad short names", () => {
            [
                { b: "a", e: "a00" },
                { b: "ab", e: "ab0" },
                { b: "abc", e: "abc" },
                { b: "abcd", e: "abcd" },
                { b: "0", e: "000" },
                { b: "97", e: "970" },
            ].forEach(n => {
                const b = safeBucketName(n.b);
                assert(b === n.e);
            });
        });

        it("should truncate a long name", () => {
            const n = "some-very-long-bucket-name-that-is-too-long-to-be-an-actual-bucket-name-for-gcs";
            const b = safeBucketName(n);
            const e = "some-very-long-bucket-name-that-is-too-long-to-be-an-actual-buc";
            assert(b === e);
        });

        it("should return valid names", () => {
            [
                { b: "@atomist/k8s-sdm", e: "atomist-k8s-sdm" },
                { b: "@@@atomist//k8s--sdm@@", e: "atomist-k8s-sdm" },
                { b: "ABC", e: "abc" },
                { b: "192.168.0.1", e: "192-168-0-1" },
                { b: "www.atomist.com", e: "www-atomist-com" },
            ].forEach(n => {
                const b = safeBucketName(n.b);
                assert(b === n.e);
            });
        });

        it("should remove google", () => {
            [
                { b: "googfoo", e: "atmfoo" },
                { b: "goog", e: "atm" },
                { b: "GOOG", e: "atm" },
                { b: "some-google-bucket", e: "some-atomist-bucket" },
                { b: "some-g00gle-bucket", e: "some-atomist-bucket" },
                { b: "Some-g0oGlE-bucKet", e: "some-atomist-bucket" },
            ].forEach(n => {
                const b = safeBucketName(n.b);
                assert(b === n.e);
            });
        });

    });

});
