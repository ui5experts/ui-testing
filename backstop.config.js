module.exports = {
  "id": "ui-testing",
  "viewports": [
    {
      "label": "phone",
      "width": 320,
      "height": 480
    },
    {
      "label": "tablet",
      "width": 1024,
      "height": 768
    },
    {
      "label": "desktop",
      "width": 1920,
      "height": 1080
    }
  ],
  "onBeforeScript": "chromy/onBefore.js",
  "onReadyScript": "chromy/onReady.js",
  "scenarios": [
    {
      "label": "Empty",
      "url": "http://localhost:3000/test/flpSandboxMockServer.html?serverDelay=0#UITesting-display&/Travels",
      "readySelector": "#application-UITesting-display-component---notFound"
    },
    // {
    //   "label": "NotFound",
    //   "url": "http://localhost:3000/test/flpSandboxMockServer.html?serverDelay=0#UITesting-display&/Travels/666",
    //   "readySelector": "#application-UITesting-display-component---detailObjectNotFound"
    // },
    {
      "label": "Detail",
      "url": "http://localhost:3000/test/flpSandboxMockServer.html?serverDelay=0#UITesting-display&/Travels/7726398",
      "readySelector": "#application-UITesting-display-component---detail--page"
    },
    // {
    //   "label": "Detail-Attachments",
    //   "url": "http://localhost:3000/test/flpSandboxMockServer.html?serverDelay=0#UITesting-display&/Travels/7726398",
    //   "readySelector": "#application-UITesting-display-component---detail--page",
    //   "clickSelector": ".sapMITBFilter:nth-child(2)"
    // }
  ],
  "paths": {
    "bitmaps_reference": "backstop/bitmaps_reference",
    "bitmaps_test": "backstop/bitmaps_test",
    "engine_scripts": "backstop/engine_scripts",
    "html_report": "build/reports/backstop/html",
    "ci_report": "build/reports/backstop"
  },
  "ci": {
    "format" :  "junit" ,
    "testReportFileName": "ui-testing-xunit",
    "testSuiteName" :  "backstopJS"
  },
  "report": ["browser"],
  "engine": "chrome",
  "engineFlags": [],
  "debug": false,
  "debugWindow": false
};
