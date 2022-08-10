const { defineConfig } = require('cypress');
const { GoogleSocialLogin } = require('cypress-social-logins').plugins;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        GoogleSocialLogin: GoogleSocialLogin,
      });
    },
    baseUrl: 'http://localhost:3000',
    chromeWebSecurity: false,
  },

  watchForFileChanges: true,

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
