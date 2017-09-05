sap.ui.define([
  "ui5experts/ui-testing/model/GroupSortState",
  "sap/ui/model/json/JSONModel"
], function (GroupSortState, JSONModel) {
  "use strict";

  QUnit.module("GroupSortState - grouping and sorting", {
    beforeEach: function () {
      this.oModel = new JSONModel({});
      // System under test
      this.oGroupSortState = new GroupSortState(this.oModel, function () {
      });
    }
  });

  QUnit.test("Should always return a sorter when sorting", function (assert) {
    // Act + Assert
    assert.strictEqual(this.oGroupSortState.sort("EstimatedCost/Value").length, 1, "The sorting by EstimatedCost/Value returned a sorter");
    assert.strictEqual(this.oGroupSortState.sort("TripActivityName").length, 1, "The sorting by TripActivityName returned a sorter");
  });

  QUnit.test("Should return a grouper when grouping", function (assert) {
    // Act + Assert
    assert.strictEqual(this.oGroupSortState.group("EstimatedCost/Value").length, 1, "The group by EstimatedCost/Value returned a sorter");
    assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
  });


  QUnit.test("Should set the sorting to EstimatedCost/Value if the user groupes by EstimatedCost/Value", function (assert) {
    // Act + Assert
    this.oGroupSortState.group("EstimatedCost/Value");
    assert.strictEqual(this.oModel.getProperty("/sortBy"), "EstimatedCost/Value", "The sorting is the same as the grouping");
  });

  QUnit.test("Should set the grouping to None if the user sorts by TripActivityName and there was a grouping before", function (assert) {
    // Arrange
    this.oModel.setProperty("/groupBy", "EstimatedCost/Value");

    this.oGroupSortState.sort("TripActivityName");

    // Assert
    assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
  });
});
