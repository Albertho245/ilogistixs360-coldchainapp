sap.ui.define([
  "sap/ui/model/json/JSONModel"
], function (JSONModel) {
  "use strict";

  return {
    createDistribucionModel: function () {
      const oData = {
        conductor: {
          nombre: "Luis Martínez",
          unidad: "Camión #12",
          placa: "TRK-4521",
          rutaAsignada: "Ruta CDMX Norte 01",
          fecha: "2025-10-12"
        },
        resumen: {
          totalParadas: 5,
          completadas: 2,
          pendientes: 3,
          progreso: "40%"
        },
        // Posición actual simulada (Centro CDMX)
        posicionActual: { lat: 19.4326, lng: -99.1332 },
        mapaEmbed: "",
        destinoActual: {},
        paradas: [
          {
            id: "P001",
            cliente: "Farmacia del Sol",
            direccion: "Av. Universidad 1450, CDMX",
            horaEstimada: "09:30",
            estado: "Pendiente",
            estadoColor: "Warning",
            lat: 19.3612,
            lng: -99.1623
          },
          {
            id: "P002",
            cliente: "Supermercado AhorraMás",
            direccion: "Calle Reforma 512, CDMX",
            horaEstimada: "10:10",
            estado: "En Progreso",
            estadoColor: "Information",
            lat: 19.4336,
            lng: -99.1412
          },
          {
            id: "P003",
            cliente: "Laboratorio MédicaPlus",
            direccion: "Insurgentes 900, CDMX",
            horaEstimada: "11:05",
            estado: "Completado",
            estadoColor: "Success",
            lat: 19.4218,
            lng: -99.1671
          },
          {
            id: "P004",
            cliente: "Clínica La Esperanza",
            direccion: "Av. Central 230, CDMX",
            horaEstimada: "12:15",
            estado: "Pendiente",
            estadoColor: "Warning",
            lat: 19.4854,
            lng: -99.0967
          },
          {
            id: "P005",
            cliente: "Farmacia Moderna",
            direccion: "Eje 6 Sur 345, CDMX",
            horaEstimada: "13:20",
            estado: "Pendiente",
            estadoColor: "Warning",
            lat: 19.3615,
            lng: -99.1184
          }
        ]
      };

      const oModel = new JSONModel(oData);
      oModel.setDefaultBindingMode("TwoWay");
      return oModel;
    }
  };
});
