/* jshint node: true */

module.exports = function (deployTarget) {
  var ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
  }

  if (deployTarget === 'staging') {
    ENV.build = {
      environment: 'staging',
      outputPath: 'dist'
    };
    ENV.s3 = {
      accessKeyId: process.env.DEPLOY_STAGING_AWS_KEY,
      secretAccessKey: process.env.DEPLOY_STAGING_AWS_SECRET,
      bucket: '<staging-bucket>',
      region: '<region>',
      prefix: '<project>'
    };
    ENV['s3-index'] = {
      accessKeyId: process.env.DEPLOY_STAGING_AWS_KEY,
      secretAccessKey: process.env.DEPLOY_STAGING_AWS_SECRET,
      bucket: '<staging-bucket>',
      region: '<region>',
      allowOverwrite: true,
      prefix: '<project>'
    };

    // Uncomment if this project is using ember-cli-sentry
    // ENV.sentry = {
    //   publicUrl: '<website-url>',
    //   sentryUrl: '<sentry-url>',
    //   sentryOrganizationSlug: '<sentry-organisation>',
    //   sentryProjectSlug: '<sentry-project>',
    //   sentryApiKey: '<sentry-api-key>'
    // }

    ENV.slack = {
      webhookURL: process.env.SLACK_DEPLOY_WEBHOOK,
      channel: '#logs',
      username: 'wooosh!',
      didDeploy: function (context) {
        return function (slack) {
          return slack.notify({
            text: 'New deploy: <staging-url>!'
          });
        };
      }
    };
  }
  if (deployTarget === 'production') {
    ENV.build = {
      environment: 'production',
      outputPath: 'dist'
    };
    ENV.s3 = {
      accessKeyId: process.env.DEPLOY_PROD_AWS_KEY,
      secretAccessKey: process.env.DEPLOY_PROD_AWS_SECRET,
      bucket: '<production-bucket>',
      region: '<region>',
      prefix: '<project>'
    };
    ENV['s3-index'] = {
      accessKeyId: process.env.DEPLOY_PROD_AWS_KEY,
      secretAccessKey: process.env.DEPLOY_PROD_AWS_SECRET,
      bucket: '<production-bucket>',
      region: '<region>',
      allowOverwrite: true,
      prefix: '<project>'
    };
    ENV.slack = {
      webhookURL: process.env.SLACK_DEPLOY_WEBHOOK,
      channel: '#logs',
      username: 'wooosh!',
      didDeploy: function (context) {
        return function (slack) {
          return slack.notify({
            text: 'New deploy: <production-url>!'
          });
        };
      }
    };
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
