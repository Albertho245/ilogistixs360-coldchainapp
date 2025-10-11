sap.ui.define([
  "sap/ui/model/json/JSONModel"
], function (JSONModel) {
  "use strict";

  return {
    createTransporteModel: function () {
      const FLEET_SIZE = 4;
      const ENTREGAS_TOTALES = 24;

      const oData = {
        _meta: { FLEET_SIZE, ENTREGAS_TOTALES },

        resumen: {
          entregasTotales: ENTREGAS_TOTALES,
          entregasPendientes: 3,
          entregasFallidas: 0
        },

        sistema: {
          temperatura: "4°C",
          clima: "Estable",
          sensoresActivos: 4
        },

        // ← nuevos nodos coherentes
        entregas: {
          camionesActivos: 2,
          entregasEnProceso: 2,
          monitoreo: "Las entregas están siendo monitoreadas mediante GPS en tiempo real."
        },

        vehiculos: {
          vehiculosOK: 3,
          mantenimiento: FLEET_SIZE - 3,
          detalle: "Los vehículos se inspeccionan antes de cada envío para asegurar condiciones óptimas."
        },

        rutas: {
          estables: 2,
          demoras: 0,
          detalle: "El sistema analiza tráfico y clima para ajustar las rutas automáticamente."
        },

        ubicacion: {
          direccion: "CDMX – Sucursal Centro → Sucursal Sur",
          estado: "En ruta óptima",
          tiempoEstimado: "22 min",
          mapa: "img/map-placeholder.png"
        }
      };

      return new JSONModel(oData);
    }
  };
});
