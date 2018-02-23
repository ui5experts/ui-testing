sap.ui.define([
  "sap/m/Text",
  "ui5experts/ui-testing/model/formatter"
], function (Text, formatter) {
  "use strict";

  QUnit.module("formatter - Currency value");

  QUnit.test("Should round down a 3 digit number", function (assert) {
    assert.strictEqual(formatter.currencyValue("3.123"), "3.12", "The rounding was correct");
  });

  QUnit.test("Should round up a 3 digit number", function (assert) {
    assert.strictEqual(formatter.currencyValue("3.128"), "3.13", "The rounding was correct");
  });

  QUnit.test("Should round a negative number", function (assert) {
    assert.strictEqual(formatter.currencyValue("-3"), "-3.00", "The rounding was correct");
  });

  QUnit.test("Should round an empty string", function (assert) {
    assert.strictEqual(formatter.currencyValue(""), "", "The rounding was correct");
  });

  QUnit.test("Should round a zero", function (assert) {
    assert.strictEqual(formatter.currencyValue("0"), "0.00", "The rounding was correct");
  });

});
