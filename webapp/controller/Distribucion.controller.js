sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("COLDCHAINAPP.controller.Distribucion", {

    onNavBack: function () {
      this.getOwnerComponent().getRouter().navTo("RouteInicio");
    },

    onInit: function () {
      MessageToast.show("Monitoreando Distribución en tiempo real...");
    }

  });
});
