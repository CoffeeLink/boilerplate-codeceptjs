exports.config = {
  output: "./output",
  helpers: {
    Puppeteer: {
      url: "http://localhost",
      show: true,
      windowSize: "1600x1000",
      chrome: {
        args: ["--no-sandbox", "--root"],
        // executablePath: "/your_path_chromium_file/Chromium.app/Contents/MacOS/Chromium" --> uncomment this part if you use ARM arch like macbook with m1 processor
      },
    },
  },
  include: {
    I: "./steps_file.js",
    filter_element: "./pages/filter_element.js",
    utils: "./utils/utils.js",
    constant: "./utils/constant.js",
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: "./features/*/*.feature",
    steps: "./step_definitions/*/*.steps.js",
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    retryFailedStep: {
      enabled: true,
    },
  },
  tests: "./*_test.js",
  name: "codecept-aa",
};
