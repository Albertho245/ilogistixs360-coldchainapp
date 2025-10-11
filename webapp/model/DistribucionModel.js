sap.ui.define([
  "sap/ui/model/json/JSONModel"
], function (JSONModel) {
  "use strict";

  return {
    createDistribucionModel: function () {
      const oData = {
        entregas: {
          camionesActivos: 3,
          entregasEnProceso: 12,
          monitoreo: "Las entregas están siendo monitoreadas mediante GPS en tiempo real."
        },
        vehiculos: {
          vehiculosOK: 2,
          mantenimiento: 1,
          detalle: "Los vehículos se inspeccionan antes de cada envío para asegurar condiciones óptimas."
        },
        rutas: {
          estables: 9,
          demoras: 2,
          detalle: "El sistema analiza tráfico y clima para ajustar las rutas automáticamente."
        }
      };
      return new JSONModel(oData);
    }
  };
});
