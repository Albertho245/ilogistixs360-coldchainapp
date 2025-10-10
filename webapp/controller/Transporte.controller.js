sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("COLDCHAINAPP.controller.Transporte", {

    onNavBack: function () {
      this.getOwnerComponent().getRouter().navTo("RouteInicio");
    },

    onViewStock: function () {
      MessageToast.show("Cargando información de stock...");
    },

    onRegisterSale: function () {
      MessageToast.show("Abriendo formulario de venta...");
    },

    onRefreshStatus: function () {
      MessageToast.show("Actualizando datos del transporte...");
    }

  });
});

