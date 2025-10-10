sap.ui.define([
  "sap/ui/model/json/JSONModel"
], function (JSONModel) {
  "use strict";

  return {
    createFabricacionModel: function () {
      const oData = {
        produccion: {
          lotesProducidos: 12,
          lotesEnProceso: 3,
          lotesRechazados: 1
        },
        planta: {
          temperatura: "2°C",
          maquinasActivas: "5/6",
          ultimaInspeccion: "Hace 2h"
        }
      };

      return new JSONModel(oData);
    }
  };
});