sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "COLDCHAINAPP/model/apiSim"
], function (Controller, MessageToast, apiSim) {
  "use strict";

  function randInt(min, max) { // ambos inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return Controller.extend("COLDCHAINAPP.controller.Transporte", {

    onInit: async function () {
      this._oModel = this.getOwnerComponent().getModel("transporte");
      MessageToast.show("Monitoreando transporte en tiempo real...");
      await this._updateFromAPIs();
      this._timer = setInterval(this._updateFromAPIs.bind(this), 6000);
    },

    onExit: function () {
      if (this._timer) clearInterval(this._timer);
    },

    async _updateFromAPIs() {
      const oModel = this._oModel;
      const meta = oModel.getProperty("/_meta");
      const FLEET = meta?.FLEET_SIZE || 4;
      const TOTAL = meta?.ENTREGAS_TOTALES || 24;

      try {
        const [clima, trafico, ruta, mapa] = await Promise.all([
          apiSim.getWeatherData(),
          apiSim.getTrafficData(),
          apiSim.getRouteOptimization(),
          apiSim.getMapPreviewURL()
        ]);

        // Vehículos & flota
        const vehiculosOK = randInt(2, FLEET);
        const camionesActivos = randInt(1, vehiculosOK);
        const demoras = randInt(0, camionesActivos);
        const estables = camionesActivos - demoras;

        const enProceso = camionesActivos;
        const pendientes = enProceso; // 1 entrega/vehículo para simplificar
        const fallidas = demoras === 0 ? 0 : randInt(0, Math.min(1, demoras));

        // Actualizaciones coherentes
        oModel.setProperty("/vehiculos/vehiculosOK", vehiculosOK);
        oModel.setProperty("/vehiculos/mantenimiento", FLEET - vehiculosOK);

        oModel.setProperty("/entregas/camionesActivos", camionesActivos);
        oModel.setProperty("/entregas/entregasEnProceso", enProceso);

        oModel.setProperty("/rutas/estables", estables);
        oModel.setProperty("/rutas/demoras", demoras);

        oModel.setProperty("/resumen/entregasTotales", TOTAL);
        oModel.setProperty("/resumen/entregasPendientes", pendientes);
        oModel.setProperty("/resumen/entregasFallidas", fallidas);

        // Sistema/ubicación
        oModel.setProperty("/sistema/temperatura", clima.temperatura);
        oModel.setProperty("/sistema/clima", clima.estado);
        oModel.setProperty("/sistema/sensoresActivos", randInt(3, 6));

        oModel.setProperty("/ubicacion/estado", estables >= demoras ? "En ruta óptima" : "Ruta alternativa");
        oModel.setProperty("/ubicacion/tiempoEstimado", ruta.tiempo);
        oModel.setProperty("/ubicacion/direccion", `${ruta.origen} → ${ruta.destino}`);
        oModel.setProperty("/ubicacion/mapa", mapa);

      } catch (e) {
        // Mantén el UI estable si falla alguna llamada simulada
        /* eslint-disable no-console */
        console.warn("Actualización simulada falló:", e);
      }
    },

    // === Acciones ===
    onNavBack: function () {
      this.getOwnerComponent().getRouter().navTo("RouteInicio");
    },

    onViewStock: function () {
      sap.m.MessageToast.show("Cargando información de stock...");
    },

    onRegisterSale: function () {
      sap.m.MessageToast.show("Abriendo formulario de venta...");
    },

    onRefreshStatus: async function () {
      sap.m.MessageToast.show("Actualizando datos del transporte...");
      await this._updateFromAPIs();
    },

    // === Formatter usado por el ProgressIndicator ===
    formatProgress: function (iRestantes) {
      const total = this._oModel?.getProperty("/resumen/entregasTotales") || 1;
      const completadas = Math.max(0, total - (iRestantes || 0));
      return Math.round((completadas / total) * 100);
    }

  });
});
