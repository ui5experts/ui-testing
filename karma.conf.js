// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['openui5'],

    openui5: {
      path: 'http://path/to/sap-ui-core.js',
      useMockServer: false
    },

    client: {
      openui5: {
        config: {
          theme: 'sap_belize'
        },
        mockserver: {
          config: {
            autoRespond: true
          },
          rootUri: '/my/service/',
          metadataURL: '/base/test/mock.xml',
          mockdataSettings: {

          }
        }
      }
    }
  });
};
