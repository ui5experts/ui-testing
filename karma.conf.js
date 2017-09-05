// karma.conf.js
module.exports = function(config) {
  config.set({

    frameworks: ['qunit','openui5'],


    openui5: {
      path: 'https://sapui5.hana.ondemand.com/resources/sap-ui-core.js',
      useMockServer: true
    },


    client: {
      openui5: {
        config: {
          theme: 'sap_belize',
          resourceRoots: {
            'ui5experts.ui-testing': '/base/webapp',
            'test.unit': '/base/webapp/test/unit'
          }
        },
        mockserver: {
          config: {
            autoRespond: true
          },
          rootUri: '',
          metadataURL: '/base/webapp/localService/metadata.xml',
          mockdataSettings: {

          }
        }
      }
    },


    // list of files / patterns to load in the browser
    files: [
      {
        pattern: 'webapp/test/unit/allTests.js',
        watched: true,
        included: true,
        served: true
      },
      {
        pattern: 'webapp/**',
        watched: true,
        included: false,
        served: true
      }
    ],


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // use '--browsers ChromeHeadless' to override from CLI
    browsers: ['Chrome'],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'webapp/!(test)/**/*.js': ['coverage'], // exclude tests from coverage
      'webapp/*.js': ['coverage']
    },


    // test results reporter to use
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // 'progress' = default test result output to console
    reporters: ['progress', 'junit', 'coverage'],


    junitReporter: {
      outputDir: 'build/reports/unit',
      useBrowserName: false
    },


    coverageReporter: {
      includeAllSources: true,
      dir: 'build/reports/coverage'
    }

  });
};
