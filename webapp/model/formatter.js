sap.ui.define([
  "sap/ui/core/ValueState"
], function (
  ValueState
) {

  "use strict";

  return {

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
