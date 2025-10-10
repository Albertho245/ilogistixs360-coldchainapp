sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("COLDCHAINAPP.controller.Fabricacion", {

    onNavBack: function () {
      this.getOwnerComponent().getRouter().navTo("RouteInicio");
    },
    
    onIniciarLote: function () {
      MessageToast.show("Nuevo lote de producción iniciado.");
    },

    onControlCalidad: function () {
      MessageToast.show("Iniciando control de calidad...");
    }

  });
});
