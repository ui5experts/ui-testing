# Preparation

* Clone project
* open in WebStorm
* set node_modules to ignored
* install ui5-schemas


# Introduction

* Clone project from github

`$ npm install`

* SAP Web IDE Template
* show test
* show mock data
* show server.js
* show package.json and main script


# Install

`$ npm install`

`$ npm install -g backstopjs` 


# Initialize

## `$ backstop init`

Creates a config file (`backstop.json`) and backstop directory (`backstop_data`).

Prefer using a `*.js` file and therefore rename `backstop.json` to `backstop.config.js` and prefix with `module
.exports = `. This allows for a more flexible use esp. when being used in a CI build later on. Allows for 
modularization, comments, runtime-adaption, ...

Run with `$ backstop test --config=./backstop.config.js`

Add `backstop_data/bitmaps_test` to `gitignore`

## Install locally

`$ npm install -save-dev backstopjs`

Run init from local install
`$ node ./node_modules/backstopjs/cli/index.js init`

## npm scripts

```json
{
  "scripts": {
    "backstop": "backstop test --config=./backstop.config.js",
    "backstop-approve": "backstop approve --config=./backstop.config.js",
    "backstop-openReport": "backstop openReport --config=./backstop.config.js"
  }
}
```

Run with ``$ npm run -s backstop``


# Configure

* adapt id `UI-Testing`
* adapt viewports
  * [see sap.ui.Device.media.RANGESETS](https://sapui5.hana.ondemand.com/sdk/#docs/api/symbols/sap.ui.Device.media.RANGESETS.html)
  ```json
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
  ```
* adapt scenarios
  ```json
  {
    "label": "Home",
    "url": "http://localhost:8000/test/flpSandboxMockServer.html#UITesting-display"
  },
  {
    "label": "Travel Detail",
    "url": "http://localhost:8000/test/flpSandboxMockServer.html#UITesting-display&/Travels/5166245"
  }
  ```
* provide [advanced config](https://github.com/garris/BackstopJS#advanced-scenarios) to make sure application has loaded
  * use `readySelector` (optional)
  ```json
  {
    "readySelector": "#application-UITesting-display",
    "readySelector": "#application-UITesting-display .sapMSplitContainerDetail",
    "readySelector": "#application-UITesting-display-component---detail"
  }
  ```
  * add `serverDelay=0` to urls to prevent mock server delay

# Define reference

`$ npm run -s backstop-approve`

Check: `$ npm run -s backstop`


# Show failure


# CI


test different themes
scripting tests
formatter
test vs. production
run in FF and Chrome
ui5 versions
consistent language



## Limitations and Problems

* Animations can distort results (play with `misMatchThreshold`)
* No of screenshots grows quickly, can get messy
* Slow
