sap.ui.define([
  "sap/ui/core/ValueState"
], function (
  ValueState
) {

  "use strict";

  return {
    /**
     * Rounds the currency value to 2 digits
     *
     * @public
     * @param {string} sValue value to be formatted
     * @returns {string} formatted currency value with 2 digits
     */
    currencyValue: function (sValue) {
      if (!sValue) {
        return "";
      }

      return parseFloat(sValue).toFixed(2);
    },


    state: function (sState) {
      switch (sState) {
        case "Rejected": return ValueState.Error;
        case "Approved": return ValueState.Success;
        default: return ValueState.None;
      }
    },


    stateIcon: function (sState) {
      switch (sState) {
        case "Rejected": return "sap-icon://decline";
        case "Approved": return "sap-icon://accept";
        default: return "sap-icon://pending";
      }
    }
  };

});
