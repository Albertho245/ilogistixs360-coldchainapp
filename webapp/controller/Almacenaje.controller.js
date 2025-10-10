sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("COLDCHAINAPP.controller.Almacenaje", {

    onInit: function () {
      MessageToast.show("Cargando datos de Almacenaje...");
    },

    onNavBack: function () {
      this.getOwnerComponent().getRouter().navTo("RouteInicio");
    },

    onNavToDistribucion: function () {
      this.getOwnerComponent().getRouter().navTo("RouteDistribucion");
    }

  });
});
