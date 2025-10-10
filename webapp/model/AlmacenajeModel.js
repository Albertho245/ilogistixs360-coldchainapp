sap.ui.define(["sap/ui/model/json/JSONModel"], function (JSONModel) {
  "use strict";

  return {
    createAlmacenajeModel: function () {
      const oData = {
        recepcion: {
          descripcion: "Los productos son verificados y registrados al llegar al almacén mediante código de barras o escaneo RFID.",
          estado: "Completa",
          estadoColor: "Success"
        },
        temperatura: {
          actual: "2°C",
          estadoColor: "Success",
          sistema: "Estable",
          sistemaColor: "Success",
          descripcion: "Los sensores reportan en tiempo real para garantizar condiciones óptimas."
        },
        inventario: {
          ubicaciones: "14",
          stock: "85%",
          estadoColor: "Success",
          descripcion: "El sistema mantiene actualizado el stock, ubicación y fechas de vencimiento."
        }
      };
      return new JSONModel(oData);
    }
  };
});
