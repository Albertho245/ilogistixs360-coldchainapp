sap.ui.define([
  "sap/ui/model/json/JSONModel"
], function (JSONModel) {
  "use strict";

  return {
    createConsumoModel: function () {
      const oData = {
        calidad: {
          satisfaccion: "Alta",
          reportes: "Sin Incidencias",
          descripcion: "Monitoreo de retroalimentación y evaluación post-consumo."
        },
        trazabilidad: {
          lote: "#LOTE-45782",
          ubicacionFinal: "CDMX – Tienda 24",
          descripcion: "El sistema registra el destino final para garantizar trazabilidad completa."
        },
        encuestas: {
          recibidas: 134,
          promedio: "4.8 / 5",
          descripcion: "Datos utilizados para mejorar futuras cadenas de suministro."
        }
      };

      return new JSONModel(oData);
    }
  };
});
