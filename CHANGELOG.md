# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased](https://github.com/atomist/k8s-sdm/compare/1.6.1...HEAD)

### Added

-   Create fulfiller sdm. [b57f514](https://github.com/atomist/k8s-sdm/commit/b57f514964ccc8f15242f66c1b408de07ffcacdb)
-   Add spec for sync under gvisor sandbox. [0243457](https://github.com/atomist/k8s-sdm/commit/0243457a0a836c4d50e4cacc9a691c0787ff6312)
-   Add runtimeClassName to gvisor spec. [0cff79a](https://github.com/atomist/k8s-sdm/commit/0cff79a6eb07a9cd1434431ef128c3577cf9de7a)
-   Update Atomist dependencies and changelog. [2083efa](https://github.com/atomist/k8s-sdm/commit/2083efa6d8f41cd124caa21885823fa6a593df72)

### Changed

-   Give access to namespace when namespace-scoped. [d77b829](https://github.com/atomist/k8s-sdm/commit/d77b829ff90446db5da8f52723ade2a4b860ce22)
-   Set default workers to 1. [4f79a26](https://github.com/atomist/k8s-sdm/commit/4f79a26c555ddc8b1de7831e6b17b6b5bcdd25d4)
-   Expose fulfilled goals in atomist.yaml. [8675ffc](https://github.com/atomist/k8s-sdm/commit/8675ffc4d8f154ec08b0093ccce0c7bba732536d)
-   Print schedulers when k8s not found. [2723e33](https://github.com/atomist/k8s-sdm/commit/2723e33b732065761877babf3a0e6a34b4db9d73)
-   Execute goal if already scheduled. [257bd02](https://github.com/atomist/k8s-sdm/commit/257bd02404f4754dd0935a9ae5717d458c2432c6)
-   Persist removal of callback to goal event data. [8c2ab16](https://github.com/atomist/k8s-sdm/commit/8c2ab162443ddcf4790b5bfa17b89b620de96879)
-   Filter out sdm init containers. [c0a6b5e](https://github.com/atomist/k8s-sdm/commit/c0a6b5e631d0cd7bcb7c4f9c0c9feda9b7ddadd0)
-   Prefer container security context. [3cb1d2d](https://github.com/atomist/k8s-sdm/commit/3cb1d2d6c01ce5b2600df16e9df48463c8b73c1c)
-   Set defaultMode for k8s-sdm secret to 292. [af45b9d](https://github.com/atomist/k8s-sdm/commit/af45b9d4349fa493d020b2b0233f70ad9d5317a3)
-   Pure TypeScript, custom bucket, no logging. [05ee473](https://github.com/atomist/k8s-sdm/commit/05ee473a3958918050e891233974ad5fdee6a7bd)
-   Rearrange SDM configuration. [83691ec](https://github.com/atomist/k8s-sdm/commit/83691ecbb93c1b698348c6ebf9eaf15e4079ea7f)
-   Update sdm-pack-gcp. [97f3733](https://github.com/atomist/k8s-sdm/commit/97f37335f3d613dd331826ef7bae32321ae08ff7)
-   Give k8s-sdm more time to start up, remove fsgroup. [c20924f](https://github.com/atomist/k8s-sdm/commit/c20924f74b980d2f8d30ed95b75200d38bde20c8)
-   Improve local cache path and TypeScript config. [47680c7](https://github.com/atomist/k8s-sdm/commit/47680c77c742b9d3bc49e9495674715e12d3e0f2)

### Removed

-   Remove useless config default. [c628759](https://github.com/atomist/k8s-sdm/commit/c6287597cc7505ab9ec75de742a35a3bada58276)
-   Remove unused lodash import. [4073851](https://github.com/atomist/k8s-sdm/commit/4073851cee87307d2f2bb21e9bf1861bd9100b09)

### Fixed

-   Update sdm-pack-k8s for multi-spec yaml fix. [d375bab](https://github.com/atomist/k8s-sdm/commit/d375bab99583f59f2a49084633baab44576bfc57)
-   Update sdm-pack-k8s for scope fix. [005c8e6](https://github.com/atomist/k8s-sdm/commit/005c8e69685c7e08c2432b0cce2acc0ab441313f)
-   Update sdm-pack-k8s for namespace fix. [6b26526](https://github.com/atomist/k8s-sdm/commit/6b2652681aba245e76db7344de3d4d9e999ba528)
-   Ensure ATOMIST_GOAL_SCHEDULER set in k8s. [b424f00](https://github.com/atomist/k8s-sdm/commit/b424f0086d1d6839921bebb7a00c96bda2702255)
-   Fix multi-callback and goal state. [2902ff3](https://github.com/atomist/k8s-sdm/commit/2902ff32753ae1702e84519ebed5e9f4f96f4504)
-   Properly add extension packs. [067de0b](https://github.com/atomist/k8s-sdm/commit/067de0b7f43a95772ff254e981d3c8742dfcca5b)
-   Update sdm-pack-k8s for FulfillGoalOnRequested fix. [2e9d8a1](https://github.com/atomist/k8s-sdm/commit/2e9d8a1bf28ddc3c2e9ce0b95e9e1a723ee3eff3)

## [1.6.1](https://github.com/atomist/k8s-sdm/compare/1.6.0...1.6.1) - 2019-09-27

### Fixed

-   Update sdm-pack-k8s to remove error when sync repo not set and improve error & log messages. [8296445](https://github.com/atomist/k8s-sdm/commit/82964457944083d21b70e1c08567cdfb260b7728)

## [1.6.0](https://github.com/atomist/k8s-sdm/compare/1.5.0...1.6.0) - 2019-09-26

### Changed

-   Support multi-document YAML specs. [3f0085c](https://github.com/atomist/k8s-sdm/commit/3f0085cd32a7ab50de9fe077e1eb6bd59a054786)

### Fixed

-   Fix interval sync when commands not added. [f3e3ac9](https://github.com/atomist/k8s-sdm/commit/f3e3ac9676381a9cc3fca809baf5f4ad30a2f111)

## [1.5.0](https://github.com/atomist/k8s-sdm/compare/1.4.0...1.5.0) - 2019-08-15

### Changed

-   Run sync in worker. [84f01d3](https://github.com/atomist/k8s-sdm/commit/84f01d30af7bc40422ed981b68b5ebcdd27c8399)
-   Update Docker base image to sdm-base 0.3.0. [323672c](https://github.com/atomist/k8s-sdm/commit/323672ce426e5692544b62e86c2c4bbb6549dc18)

## [1.4.0](https://github.com/atomist/k8s-sdm/compare/1.3.0...1.4.0) - 2019-08-09

### Changed

-   Update to sdm-pack-k8s 1.8.0. [1a38f4c](https://github.com/atomist/k8s-sdm/commit/1a38f4c2254361a59517ea4b8b68b57710aa81e0)

## [1.3.0](https://github.com/atomist/k8s-sdm/compare/1.2.1...1.3.0) - 2019-08-02

### Added

-   Provide GitOps/sync RBAC cluster role. [#24](https://github.com/atomist/k8s-sdm/issues/24)

### Changed

-   Make YAML the default spec format. [f06d43e](https://github.com/atomist/k8s-sdm/commit/f06d43e52a2b645ab24da734841d809a32c52b8f)

### Fixed

-   Fix humio integration. [4579bc6](https://github.com/atomist/k8s-sdm/commit/4579bc6d9b12071afd742ba5c193de8e7097b758)

## [1.2.1](https://github.com/atomist/k8s-sdm/compare/1.2.0...1.2.1) - 2019-06-04

### Fixed

-   Incorporate shutdown fixes from dependencies.

## [1.2.0](https://github.com/atomist/k8s-sdm/compare/1.1.1...1.2.0) - 2019-05-21

### Added

-   Sync-to-repo mode from sdm-pack-k8s.

## [1.1.1](https://github.com/atomist/k8s-sdm/compare/1.1.0...1.1.1) - 2019-04-17

### Fixed

-   Incorporate fixes from dependencies.

## [1.1.0](https://github.com/atomist/k8s-sdm/compare/1.0.5...1.1.0) - 2019-04-02

### Changed

-   Update Kubernetes resources for atomist user. [#21](https://github.com/atomist/k8s-sdm/issues/21)

## [1.0.5](https://github.com/atomist/k8s-sdm/compare/1.0.4...1.0.5) - 2019-04-02

## [1.0.4](https://github.com/atomist/k8s-sdm/compare/1.0.3...1.0.4) - 2019-03-12

### Changed

-   Add jobs to (cluster) role. [c4847fc](https://github.com/atomist/k8s-sdm/commit/c4847fcca4f3d4ed9cd9e13942ff170cfb6f4695)

## [1.0.3](https://github.com/atomist/k8s-sdm/compare/1.0.2...1.0.3) - 2019-02-13

### Changed

-   Update Atomist dependencies.

## [1.0.2](https://github.com/atomist/k8s-sdm/compare/1.0.1...1.0.2) - 2019-02-12

### Changed

-   Update sdm-pack-k8s and kubernetes client. [93770dd](https://github.com/atomist/k8s-sdm/commit/93770dd94847ff57e1e3bb8a12b09f95fdf6b312)

## [1.0.1](https://github.com/atomist/k8s-sdm/compare/1.0.0...1.0.1) - 2019-02-07

### Changed

-   Updated @atomist/sdm-pack-k8s to fix some bugs.

## [1.0.0](https://github.com/atomist/k8s-sdm/compare/0.9.0...1.0.0) - 2019-02-06

### Changed

-   Update Atomist dependencies.
-   Prepare for 1.0.0 release.
-   Improve README.
-   Update package scripts.
-   Convert to k8-sdm. [#16](https://github.com/atomist/k8s-sdm/issues/16)
-   **BREAKING** Migrate to k8s-sdm. [#18](https://github.com/atomist/k8s-sdm/issues/18)

### Fixed

-   Ensure running instance has unique name enhancement. [#17](https://github.com/atomist/k8s-sdm/issues/17)

## [0.9.0](https://github.com/atomist/k8s-sdm/compare/0.8.0...0.9.0) - 2018-08-04

### Changed

-   Update Atomist package dependencies.
-   Update TypeScript package dependencies.
-   Migrate from teamIds to workspaceIds.
-   **BREAKING** Removing the last rule from an ingress now returns an
-   Default endpoint protocol is smarter, using "https" if tlsSecret

## [0.8.0](https://github.com/atomist/k8s-sdm/compare/0.7.3...0.8.0) - 2018-05-18

### Added

-   Support replicas in SDM goal data
-   Helm charts
-   Support for TLS secrets in ingress
-   URL when updating goal status
-   Support to run in and only deploy to specific namespaces

### Fixed

-   Always use supplied deployment patch, even when patching
-   Make SdmGoal description more user friendly
-   Added metadata to patches so specs can reference its fields

## [0.7.3](https://github.com/atomist/k8s-sdm/compare/0.7.2...0.7.3) - 2018-05-01

### Changed

-   Remove async/await

## [0.7.2](https://github.com/atomist/k8s-sdm/compare/0.7.1...0.7.2) - 2018-04-27

### Changed

-   Remove environment variables from deployment spec template

## [0.7.1](https://github.com/atomist/k8s-sdm/compare/0.7.0...0.7.1) - 2018-04-27

### Changed

-   Use standard merge when combining default and provided Kubernetes

## [0.7.0](https://github.com/atomist/k8s-sdm/compare/0.6.3...0.7.0) - 2018-04-18

### Changed

-   **BREAKING** Migrate from GitHub commit statuses to SDM goals [#12](https://github.com/atomist/k8s-sdm/issues/12)
-   **BREAKING** Convert KubeUndeploy to a command handler
-   **BREAKING** Custom configuration is now obtained from the SDM

### Removed

-   **BREAKING** Support for Google Container Builder

### Fixed

-   Always check for existing resources [#8](https://github.com/atomist/k8s-sdm/issues/8)
-   Always update goal [#9](https://github.com/atomist/k8s-sdm/issues/9)
-   Support deploying arbitrary containers [#10](https://github.com/atomist/k8s-sdm/issues/10)
-   Use hostname in ingress rule [#11](https://github.com/atomist/k8s-sdm/issues/11)

## [0.6.3](https://github.com/atomist/k8s-sdm/compare/0.6.2...0.6.3) - 2018-04-05

### Added

-   Debug statement

## [0.6.2](https://github.com/atomist/k8s-sdm/compare/0.6.1...0.6.2) - 2018-04-05

### Changed

-   Updated to @atomist/automation-client@0.12.1

## [0.6.1](https://github.com/atomist/k8s-sdm/compare/0.6.0...0.6.1) - 2018-03-30

### Changed

-   Added hostname to logzio metadata
-   Moved logzio token config to custom from logging.custom

## [0.6.0](https://github.com/atomist/k8s-sdm/compare/0.5.3...0.6.0) - 2018-03-28

### Added

-   `imagePullSecret` and `namespace` custom configuration

### Changed

-   Updated to new automation-client configuration

### Fixed

-   Logzio configuration

## [0.5.3](https://github.com/atomist/k8s-sdm/compare/0.5.2...0.5.3) - 2018-03-05

### Changed

-   Attempt to always include error information on failure of build

### Fixed

-   Support GitHub.com owners and repositories that do not conform to

## [0.5.2](https://github.com/atomist/k8s-sdm/compare/0.5.1...0.5.2) - 2018-03-03

### Added

-   Retry to Kubernetes API calls

## [0.5.1](https://github.com/atomist/k8s-sdm/compare/0.5.0...0.5.1) - 2018-03-02

### Added

-   More logging

## [0.5.0](https://github.com/atomist/k8s-sdm/compare/0.4.0...0.5.0) - 2018-03-02

### Added

-   Kubernetes resource specifications and deployment instructions
-   Rate limiting annotations to ingress controllers

### Changed

-   Use sdm.atomist.io for endpoint hostname

## [0.4.0](https://github.com/atomist/k8s-sdm/compare/0.3.0...0.4.0) - 2018-03-02

### Added

-   Set ATOMIST_ENVIRONMENT variable in deployment pod container [#7](https://github.com/atomist/k8s-sdm/issues/7)
-   Un-deploy handler [#6](https://github.com/atomist/k8s-sdm/issues/6)

## [0.3.0](https://github.com/atomist/k8s-sdm/compare/0.2.6...0.3.0) - 2018-03-01

### Changed

-   Minor update to repo-image deployment pod template annotation
-   Add environment to pod k8vent annotation

## [0.2.6](https://github.com/atomist/k8s-sdm/compare/0.2.5...0.2.6) - 2018-02-27

### Fixed

-   No longer lose host from ingress rules

## [0.2.5](https://github.com/atomist/k8s-sdm/compare/0.2.4...0.2.5) - 2018-02-26

### Changed

-   Moved deployment annotations to pod
-   Return signed URL to build logs rather than console URL

## [0.2.4](https://github.com/atomist/k8s-sdm/compare/0.2.3...0.2.4) - 2018-02-24

### Fixed

-   Build status description/URL mixup

## [0.2.3](https://github.com/atomist/k8s-sdm/compare/0.2.2...0.2.3) - 2018-02-24

### Fixed

-   ingress-nginx configuration

## [0.2.2](https://github.com/atomist/k8s-sdm/compare/0.2.1...0.2.2) - 2018-02-23

### Fixed

-   Fix reference to build status in log message

## [0.2.1](https://github.com/atomist/k8s-sdm/compare/0.2.0...0.2.1) - 2018-02-23

### Fixed

-   Do not fork bomb builds

## [0.2.0](https://github.com/atomist/k8s-sdm/compare/0.1.1...0.2.0) - 2018-02-23

### Added

-   Update deploy commit status with state and endpoint URL

### Changed

-   Use nginx-ingress rather than default for GKE
-   Get branch from commit status context

## [0.1.1](https://github.com/atomist/k8s-sdm/compare/0.1.0...0.1.1) - 2018-02-22

### Fixed

-   Use secret aware start script

## [0.1.0](https://github.com/atomist/k8s-sdm/tree/0.1.0) - 2018-02-22

### Added

-   Google Container Builder CI [#3](https://github.com/atomist/k8s-sdm/issues/3)
-   GKE deployment [#1](https://github.com/atomist/k8s-sdm/issues/1)
