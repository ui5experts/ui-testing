jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
  "sap/ui/test/Opa5",
  "ui5experts/ui-testing/test/integration/pages/Common",
  "sap/ui/test/opaQunit",
  "ui5experts/ui-testing/test/integration/pages/App",
  "ui5experts/ui-testing/test/integration/pages/Browser",
  "ui5experts/ui-testing/test/integration/pages/Master",
  "ui5experts/ui-testing/test/integration/pages/Detail",
  "ui5experts/ui-testing/test/integration/pages/NotFound"
], function (Opa5, Common) {
  "use strict";
  Opa5.extendConfig({
    arrangements: new Common(),
    viewNamespace: "ui5experts.ui-testing.view."
  });

  sap.ui.require([
    "ui5experts/ui-testing/test/integration/NavigationJourneyPhone",
    "ui5experts/ui-testing/test/integration/NotFoundJourneyPhone",
    "ui5experts/ui-testing/test/integration/BusyJourneyPhone"
  ], function () {
    QUnit.start();
  });
});
