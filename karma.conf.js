// Setup ChromeHeadless
// see https://github.com/karma-runner/karma-chrome-launcher
const ChromiumRevision = require('puppeteer/package.json').puppeteer.chromium_revision;
const Downloader = require('puppeteer/utils/ChromiumDownloader');
const revisionInfo = Downloader.revisionInfo(Downloader.currentPlatform(), ChromiumRevision);

process.env.CHROME_BIN = revisionInfo.executablePath;


module.exports = function(config) {
  config.set({

    basePath: 'webapp',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['qunit', 'openui5'],


    openui5: {
      path: 'https://sapui5.hana.ondemand.com/resources/sap-ui-core.js',
      useMockServer: true
    },


    // plugin settings
    client: {
      openui5: {
        config: {
          theme: 'sap_belize',
          resourceRoots: {
            'ui5experts.ui-testing': '/base',
            'test.unit': '/base/test/unit'
          }
        },
        mockserver: {
          config: {
            autoRespond: true
          },
          rootUri: '',
          metadataURL: '/base/localService/metadata.xml',
          mockdataSettings: {

          }
        }
      },

      qunit: {
        showUI: true,
        testTimeout: 3000
      }
    },


    // list of files / patterns to load in the browser
    files: [
      {
        pattern: 'test/unit/allTests.js',
        watched: true,
        included: true,
        served: true
      },
      {
        pattern: '**',
        watched: true,
        included: false,
        served: true
      }
    ],


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // use '--browsers ChromeHeadless' to override from CLI
    browsers: ['Chrome'],


    customLaunchers: {
      Chrome_without_security: {
        base: 'Chrome',
        flags: ['--disable-web-security']
      }
    },


    // test results reporter to use
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // 'progress' = default test result output to console
    reporters: ['progress', 'junit', 'coverage'],


    junitReporter: {
      outputDir: '../build/reports/unit',
      useBrowserName: false
    },


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '!(test)/**/*.js': ['coverage'], // exclude tests from coverage
      '*.js': ['coverage']
    },


    coverageReporter: {
      includeAllSources: true,
      dir: '../build/reports/coverage'
    }


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    // singleRun: false // use '--single-run' to override from CLI

  });
};
