sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "COLDCHAINAPP/model/models"
], function (UIComponent, JSONModel, models) {
  "use strict";

  return UIComponent.extend("COLDCHAINAPP.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      // Inicializar el componente base
      UIComponent.prototype.init.apply(this, arguments);

      // ============================================================
      // 🧩 CARGA DE MODELOS GLOBALES
      // ============================================================
      try {
        // Modelo de dispositivo (responsividad)
        this.setModel(models.createDeviceModel(), "device");

        // Modelos por módulo
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

        // ============================================================
        // 🌐 NUEVO: Cargar modelo global con datos simulados
        // ============================================================
        var oGlobalModel = new JSONModel();
        oGlobalModel.loadData("model/data.json");
        this.setModel(oGlobalModel, "global");

        console.log("✅ Modelo global cargado desde model/data.json");
      } catch (err) {
        console.error("❌ Error al inicializar modelos globales:", err);
      }

      // ============================================================
      // 🚀 Inicializar router
      // ============================================================
      this.getRouter().initialize();
      console.log("✅ COLDCHAINAPP Component inicializado correctamente");
    }
  });
});
