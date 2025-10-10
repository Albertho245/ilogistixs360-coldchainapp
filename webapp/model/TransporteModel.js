sap.ui.define([
  "sap/ui/model/json/JSONModel"
], function (JSONModel) {
  "use strict";

  return {
    createTransporteModel: function () {
      const oData = {
        resumen: {
          entregasTotales: 24,
          entregasPendientes: 5,
          entregasFallidas: 1
        },
        sistema: {
          temperatura: "4°C",
          conexion: "Estable",
          sensoresActivos: 4
        },
        ubicacion: {
          direccion: "Av. Central #120, CDMX",
          estado: "En ruta",
          tiempoEstimado: "35 min"
        }
      };
      return new JSONModel(oData);
    }
  };
});
