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
    ]

  });
};
