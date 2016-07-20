/* jshint node: true */

module.exports = function(deployTarget) {
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
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        bucket: '<staging-bucket>',
        region: '<region>',
        prefix: '<project>'
    };
    ENV['s3-index'] = {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        bucket: '<staging-bucket>',
        region: '<region>',
        allowOverwrite: true,
        prefix: '<project>'
    };
    ENV.slack = {
      webhookURL: process.env.SLACK_DEPLOY_WEBHOOK,
      channel: '#logs',
      username: 'wooosh!',
      didDeploy: function(context) {
        return function(slack) {
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
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        bucket: '<production-bucket>',
        region: '<region>',
        prefix: '<project>'
    };
    ENV['s3-index'] = {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        bucket: '<production-bucket>',
        region: '<region>',
        allowOverwrite: true,
        prefix: '<project>'
    };
    ENV.slack = {
      webhookURL: process.env.SLACK_DEPLOY_WEBHOOK,
      channel: '#logs',
      username: 'wooosh!',
      didDeploy: function(context) {
        return function(slack) {
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



/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build = {
        environment: 'staging',
        outputPath: 'dist'
    };

    ENV.s3 = {
        accessKeyId: '<aws-staging-access-key>',
        secretAccessKey: '<aws-staging-secret-access-key>',
        bucket: '<aws-staging-bucket>',
        region: '<aws-region>',
        prefix: '<project>'
    };
    ENV['s3-index'] = {
        accessKeyId: '<aws-staging-access-key>',
        secretAccessKey: '<aws-staging-secret-access-key>',
        bucket: '<aws-staging-bucket>',
        region: '<aws-region>',
        prefix: '<project>',
        allowOverwrite: true
    };
    ENV.slack = {
      webhookURL: process.env.SLACK_DEPLOY_WEBHOOK,
      channel: '#logs',
      username: 'wooosh!',
      didDeploy: function(context) {
        return function(slack) {
          return slack.notify({
            text: 'New deploy: <project>!'
          });
        };
      }
    }
  }

  if (deployTarget === 'production') {
    ENV.build = {
        environment: 'production',
        outputPath: 'dist'
    };

    ENV.s3 = {
        accessKeyId: '<aws-production-secret-access-key>',
        secretAccessKey: '<aws-production-secret-access-key>',
        bucket: '<aws-production-bucket>',
        region: '<aws-region>',
        prefix: '<project>'
    };
    ENV['s3-index'] = {
        accessKeyId: '<aws-production-secret-access-key>',
        secretAccessKey: '<aws-production-secret-access-key>',
        bucket: '<aws-production-bucket>',
        region: '<aws-region>',
        prefix: '<project>',
        allowOverwrite: true
    };
    ENV.slack = {
      webhookURL: process.env.SLACK_DEPLOY_WEBHOOK,
      channel: '#logs',
      username: 'wooosh!',
      didDeploy: function(context) {
        return function(slack) {
          return slack.notify({
            text: 'New deploy: <production-url>!'
          });
        };
      }
    }
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
