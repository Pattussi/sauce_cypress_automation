const { defineConfig } = require("cypress");
const { merge } = require("mochawesome-merge");
const generator = require("mochawesome-report-generator");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    video: true,
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
      on("after:run", async () => {
        const jsonReport = await merge({ files: ["cypress/reports/*.json"] });
        await generator.create(jsonReport, {
          reportDir: "cypress/reports/html",
          reportTitle: "Relatório de Testes SauceDemo"
        });
      });
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true
  }
});
