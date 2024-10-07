const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
      allureWriter(on, config);
      return config;
    },
    specPattern: "cypress/e2e/Features/*.feature",
  },
});
