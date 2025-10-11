sap.ui.define([], function () {
  "use strict";

  /**
   * 🌐 Simulador de APIs externas (Google Maps, NextBillion.ai, Mapbox, Geoapify)
   * para iLogistixs 360 – ColdChainApp
   */

  const ApiSim = {
    // 🔹 Simular clima en la ruta
    getWeatherData: async function () {
      return new Promise((resolve) => {
        setTimeout(() => {
          const temp = (Math.random() * 6 + 2).toFixed(1); // entre 2°C y 8°C
          const states = ["Soleado", "Nublado", "Lluvia ligera", "Frío estable"];
          const state = states[Math.floor(Math.random() * states.length)];

          resolve({
            temperatura: `${temp}°C`,
            estado: state,
            humedad: `${Math.floor(Math.random() * 40) + 40}%`,
          });
        }, 800);
      });
    },

    // 🔹 Simular estado de tráfico
    getTrafficData: async function () {
      return new Promise((resolve) => {
        setTimeout(() => {
          const congestion = ["Fluido", "Moderado", "Pesado"];
          const selected = congestion[Math.floor(Math.random() * congestion.length)];

          resolve({
            nivel: selected,
            velocidadPromedio: `${Math.floor(Math.random() * 20) + 40} km/h`,
            demoraEstim: `${Math.floor(Math.random() * 15) + 5} min`,
          });
        }, 900);
      });
    },

    // 🔹 Simular optimización de ruta (NextBillion.ai)
    getRouteOptimization: async function () {
      return new Promise((resolve) => {
        setTimeout(() => {
          const rutas = [
            {
              id: "RUTA-01",
              origen: "Centro de Distribución CDMX",
              destino: "Sucursal Norte",
              distancia: "18.6 km",
              tiempo: "27 min",
              eficiencia: "Alta",
            },
            {
              id: "RUTA-02",
              origen: "Sucursal Norte",
              destino: "Sucursal Centro",
              distancia: "9.4 km",
              tiempo: "14 min",
              eficiencia: "Media",
            },
            {
              id: "RUTA-03",
              origen: "Sucursal Centro",
              destino: "Sucursal Sur",
              distancia: "15.2 km",
              tiempo: "22 min",
              eficiencia: "Alta",
            },
          ];

          resolve(rutas[Math.floor(Math.random() * rutas.length)]);
        }, 1000);
      });
    },

    /**
     * 🔹 Obtener mapa real desde Geoapify (con tu API Key de iLogistixs360)
     */
    getMapPreviewURL: async function () {
      return new Promise((resolve) => {
        setTimeout(() => {
          try {
            const apiKey = "001a37c903384bfdadb3d43dd5227260"; 
            const lat = 19.4326;
            const lon = -99.1332;
            const estilos = [
              "klokantech-basic",
              "dark-matter-yellow-roads",
              "osm-carto",
              "positron"
            ];
            const estilo = estilos[Math.floor(Math.random() * estilos.length)];

            // URL real del mapa estático desde Geoapify
            const url = `https://maps.geoapify.com/v1/staticmap?style=${estilo}&width=900&height=500&center=lonlat:${lon},${lat}&zoom=12&marker=lonlat:${lon},${lat};color:%23ff6600;size:large&apiKey=${apiKey}`;

            resolve(url);
          } catch (err) {
            console.warn("⚠️ No se pudo cargar el mapa, usando imagen de respaldo:", err);
            resolve("img/map-placeholder.png"); // fallback local
          }
        }, 700);
      });
    }
  };

  return ApiSim;
});
