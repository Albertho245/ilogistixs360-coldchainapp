sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "COLDCHAINAPP/model/DistribucionModel",
  "sap/m/MessageToast"
], function (Controller, DistribucionModel, MessageToast) {
  "use strict";

  return Controller.extend("COLDCHAINAPP.controller.Distribucion", {

    onInit: function () {
      const oModel = DistribucionModel.createDistribucionModel();
      this.getView().setModel(oModel, "distribucion");

      this._currentStopIndex = 0;
      this._updateCurrentStopPanel();
    },

    // === Actualiza el panel de destino actual y el mapa ===
    _updateCurrentStopPanel: function () {
      const oModel = this.getView().getModel("distribucion");
      const aParadas = oModel.getProperty("/paradas");
      const i = this._currentStopIndex;

      if (i < aParadas.length) {
        const oDestino = aParadas[i];
        oModel.setProperty("/destinoActual", oDestino);

        const oPos = oModel.getProperty("/posicionActual");

        // Token público de Mapbox (gratis)
        const token = "pk.eyJ1IjoiYWxiZXJ0aG8yNDUiLCJhIjoiY21nb202NTNnMXA2ZjJsb2tkeDU3Z2c1MCJ9.drFyempCBAUgwqhZt92UFA";

        // Coordenadas
        const latOrigen = oPos.lat;
        const lngOrigen = oPos.lng;
        const latDestino = oDestino.lat;
        const lngDestino = oDestino.lng;

        // Línea azul simulando la ruta (path)
        const path = `path-5+007AFF-0.9(${lngOrigen},${latOrigen};${lngDestino},${latDestino})`;

        // Centrado entre los puntos (aproximado)
        const latCenter = (latOrigen + latDestino) / 2;
        const lngCenter = (lngOrigen + lngDestino) / 2;

        // Zoom ideal para vista urbana (CDMX)
        const zoom = 11;

        // Construir URL compacta y sin saltos
        const mapUrl =
          "https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/" +
          path + "," +
          "pin-s-car+285A98(" + lngOrigen + "," + latOrigen + ")," +
          "pin-s-a+E74C3C(" + lngDestino + "," + latDestino + ")" +
          "/" + lngCenter + "," + latCenter + "," + zoom +
          "/800x300?access_token=" + token;

        // Insertar en iframe
        const iframeHTML =
          "<iframe width='100%' height='300' style='border:0; border-radius:12px'" +
          " src='" + mapUrl + "' allowfullscreen loading='lazy'></iframe>";

        oModel.setProperty("/mapaEmbed", iframeHTML);
      } else {
        oModel.setProperty("/destinoActual", null);
        oModel.setProperty("/mapaEmbed", "");
        MessageToast.show("¡Todas las entregas completadas!");
      }
    },

    // === Marcar la parada actual como completada ===
    onCompletarEntrega: function () {
      const oModel = this.getView().getModel("distribucion");
      const i = this._currentStopIndex;
      const aParadas = oModel.getProperty("/paradas");

      if (i < aParadas.length) {
        aParadas[i].estado = "Completado";
        aParadas[i].estadoColor = "Success";
        oModel.setProperty("/paradas", aParadas);

        this._currentStopIndex++;
        this._updateCurrentStopPanel();

        MessageToast.show("Entrega completada. Siguiente destino asignado.");
      }
    },

    onNavBack: function () {
      window.history.go(-1);
    }
  });
});
