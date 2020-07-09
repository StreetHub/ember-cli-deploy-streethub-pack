# ember-cli-deploy-streethub-pack
[![](https://ember-cli-deploy.github.io/ember-cli-deploy-version-badges/plugins/ember-cli-deploy-s3.svg)](http://ember-cli-deploy.github.io/ember-cli-deploy-version-badges/)


An ember-cli-deploy plugin pack to deploy Streethub's applications

## Installation

```bash
$ ember install ember-cli-deploy
$ ember install ember-cli-deploy-streethub-pack
```

The necessary set of plugins will be available to ember-cli-deploy and an example `config/deploy.js` file will be generated for you to customize with information for your deployment environments.

## What is a plugin pack?

A "plugin pack" is a concept supported by ember-cli-deploy that allows a single addon to make multiple plugins available by adding a single direct dependency to your project.

## What plugins are made available?

- ember-cli-deploy-build
- ember-cli-deploy-display-revisions
- ember-cli-deploy-gzip
- ember-cli-deploy-manifest
- ember-cli-deploy-revision-data
- ember-cli-deploy-s3
- ember-cli-deploy-s3-index
- ember-cli-deploy-sentry
- ember-cli-deploy-slack
