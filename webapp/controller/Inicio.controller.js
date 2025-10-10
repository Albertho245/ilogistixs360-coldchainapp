sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel"
], function (Controller, UIComponent, JSONModel) {
  "use strict";

  return Controller.extend("COLDCHAINAPP.controller.Inicio", {

    onInit: function () {
      console.log("✅ Vista de Inicio cargada correctamente");

      // Modelo de tiles
      const aTiles = [
        {
          header: "Transporte",
          subheader: "Gestión de rutas",
          icon: "sap-icon://shipping-status",
          route: "RouteTransporte"
        },
        {
          header: "Fabricación",
          subheader: "Control de producción",
          icon: "sap-icon://factory",
          route: "RouteFabricacion"
        },
        {
          header: "Almacenaje",
          subheader: "Control de inventarios",
          icon: "sap-icon://inventory",
          route: "RouteAlmacenaje"
        },
        {
          header: "Distribución",
          subheader: "Gestión de entregas",
          icon: "sap-icon://journey-arrive",
          route: "RouteDistribucion"
        },
        {
          header: "Consumo",
          subheader: "Punto final de la cadena",
          icon: "sap-icon://meal",
          route: "RouteConsumo"
        }
      ];

      const oModel = new JSONModel({ tiles: aTiles });
      this.getView().setModel(oModel, "inicio");
    },

    onTilePress: function (oEvent) {
      const oTile = oEvent.getSource().getBindingContext("inicio").getObject();
      const oRouter = UIComponent.getRouterFor(this);

      if (oTile && oTile.route) {
        oRouter.navTo(oTile.route);
      } else {
        console.warn("⚠️ Ruta no definida:", oTile);
      }
    }

  });
});
