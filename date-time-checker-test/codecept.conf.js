const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    WebDriver: {
      url: "http://localhost:3000/",
      browser: "chrome",
      smartWait: 5000,
      restart: false,
      windowSize: "1200x900",
      desiredCapabilities: {
        chromeOptions: {
          args: ["--headless", "--disable-gpu", "--window-size=1200,900"],
        },
      },
    },
  },
  include: {
    I: "./steps_file.js",
  },
  bootstrap: null,
  mocha: {},
  name: "CodeceptJs",
};