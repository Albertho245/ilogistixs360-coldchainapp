sap.ui.define([
  "sap/ui/core/UIComponent",
  "COLDCHAINAPP/model/models"
], function (UIComponent, models) {
  "use strict";

  return UIComponent.extend("COLDCHAINAPP.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      // Inicializar el componente base
      UIComponent.prototype.init.apply(this, arguments);

      // Modelos globales
      try {
        this.setModel(models.createDeviceModel(), "device");

        if (models.createTransporteModel) {
          this.setModel(models.createTransporteModel(), "transporte");
        }
        if (models.createFabricacionModel) {
          this.setModel(models.createFabricacionModel(), "fabricacion");
        }
        if (models.createDistribucionModel) {
          this.setModel(models.createDistribucionModel(), "distribucion");
        }
        if (models.createConsumoModel) {
          this.setModel(models.createConsumoModel(), "consumo");
        }
        if (models.createAlmacenajeModel) {
          this.setModel(models.createAlmacenajeModel(), "almacenaje");
        }
      } catch (err) {
        console.error("Error al inicializar modelos globales:", err);
      }

      // Inicializar router
      this.getRouter().initialize();
      console.log("✅ COLDCHAINAPP Component inicializado correctamente");
    }
  });
});
