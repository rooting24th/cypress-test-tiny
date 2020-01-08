const cypress = require("cypress");
cypress
  .run({
    browser: "chrome"
  })
  .then(results => {
    console.log(
      "cypress.run resolved despite failures and results.runs is undefined (type is RunResult[])",
      results.runs
    );
  });
