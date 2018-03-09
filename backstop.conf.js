module.exports = {
  "id": "UI-Testing",
  "viewports": [
    // see https://sapui5.hana.ondemand.com/sdk/#docs/api/symbols/sap.ui.Device.media.RANGESETS.html
    {
      "label": "Phone",
      "width": 320,
      "height": 480
    },
    {
      "label": "Tablet",
      "width": 1023,
      "height": 768
    },
    {
      "label": "Desktop",
      "width": 1439,
      "height": 1080
    },
    {
      "label": "LargeDesktop",
      "width": 1920,
      "height": 1080
    }
  ],
  "onBeforeScript": "chromy/onBefore.js",
  "onReadyScript": "chromy/onReady.js",
  "scenarios": [
    {
      "label": "Home",
      "url": "http://localhost:8001/test/flpSandboxMockServer.html?serverDelay=0#UITesting-display",
      "readySelector": "#application-UITesting-display"
    },
    // {
    //   "label": "Detail",
    //   "url": "http://localhost:8001/test/flpSandboxMockServer.html?serverDelay=0#UITesting-display&/Travels/7726398",
    //   "readySelector": "#application-UITesting-display"
    // },
    // {
    //   "label": "Empty",
    //   "url": "http://localhost:8001/test/flpSandboxMockServer.html?serverDelay=0#UITesting-display&/Travels",
    //   "readySelector": "#application-UITesting-display"
    // },
    // {
    //   "label": "NotFound",
    //   "url": "http://localhost:8001/test/flpSandboxMockServer.html?serverDelay=0#UITesting-display&/Travels/666",
    //   "readySelector": "#application-UITesting-display"
    // },
    // {
    //   "label": "Detail-Attachments",
    //   "url": "http://localhost:8001/test/flpSandboxMockServer.html?serverDelay=0#UITesting-display&/Travels/7726398",
    //   "readySelector": "#application-UITesting-display-component---detail--page",
    //   "clickSelector": ".sapMITBFilter:nth-child(2)"
    // },
  ],
  "paths": {
    "bitmaps_reference": "backstop/bitmaps_reference",
    "bitmaps_test": "backstop/bitmaps_test",
    "engine_scripts": "backstop/engine_scripts",
    "html_report": "build/reports/backstop/html",
    "ci_report": "build/reports/backstop"
  },
  "ci": {
    "format": "junit" ,
    "testReportFileName": "ui-testing-xunit",
    "testSuiteName" :  "backstopJS"
  },
  "report": ["CI"], // ["browser"]
  "engine": "chrome",
  "engineFlags": [],
  "debug": false,
  "debugWindow": false
};
