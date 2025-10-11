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
      const oModel = this.getOwnerComponent().getModel("distribucion");

      // Simular cambios de entregas en proceso cada 5 segundos
      setInterval(() => {
        let entregas = oModel.getProperty("/entregas/entregasEnProceso");
        if (entregas > 0) {
          entregas -= 1;
        } else {
          entregas = 12; // Reinicia el ciclo
        }
        oModel.setProperty("/entregas/entregasEnProceso", entregas);
      }, 5000);

      // Simular cambios de rutas con demoras cada 6 segundos
      setInterval(() => {
        let demoras = Math.floor(Math.random() * 3); // 0 a 2 demoras
        oModel.setProperty("/rutas/demoras", demoras);
      }, 6000);

      // Simular un vehículo en mantenimiento aleatoriamente
      setInterval(() => {
        const vehiculosOK = Math.floor(Math.random() * 3) + 1;
        const mantenimiento = 4 - vehiculosOK;
        oModel.setProperty("/vehiculos/vehiculosOK", vehiculosOK);
        oModel.setProperty("/vehiculos/mantenimiento", mantenimiento);
      }, 7000);

      MessageToast.show("📦 Monitoreando Distribución en tiempo real...");
    }

  });
});
