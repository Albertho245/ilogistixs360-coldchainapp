sap.ui.define([
  "sap/ui/model/json/JSONModel",
  "sap/ui/Device",
  "COLDCHAINAPP/model/TransporteModel",
  "COLDCHAINAPP/model/FabricacionModel",
  "COLDCHAINAPP/model/DistribucionModel",
  "COLDCHAINAPP/model/ConsumoModel",
  "COLDCHAINAPP/model/AlmacenajeModel"
], function (JSONModel, Device, TransporteModel, FabricacionModel, DistribucionModel, ConsumoModel, AlmacenajeModel) {
  "use strict";

  return {
    createDeviceModel: function () {
      const oModel = new JSONModel(Device);
      oModel.setDefaultBindingMode("OneWay");
      return oModel;
    },

    createTransporteModel: function () {
      return TransporteModel.createTransporteModel();
    },
    createFabricacionModel: function () {
      return FabricacionModel.createFabricacionModel();
    },
    createDistribucionModel: function () {
      return DistribucionModel.createDistribucionModel();
    },
    createConsumoModel: function () {
      return ConsumoModel.createConsumoModel();
    },
    createAlmacenajeModel: function () {
      return AlmacenajeModel.createAlmacenajeModel();
    }
  };
});
