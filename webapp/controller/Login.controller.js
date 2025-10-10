sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("COLDCHAINAPP.controller.Login", {

    onInit: function () {
      // Limpiar cualquier sesión anterior
      localStorage.removeItem("coldUser");
    },

    onInputChange: function () {
      const sUser = this.byId("usernameInput").getValue().trim();
      const sPass = this.byId("passwordInput").getValue().trim();
      const oButton = this.byId("loginButton");

      if (oButton) {
        oButton.setEnabled(sUser.length > 0 && sPass.length > 0);
      }
    },

    onLoginPress: function () {
      const sUser = this.byId("usernameInput").getValue().trim();
      const sPass = this.byId("passwordInput").getValue().trim();

      // Validar credenciales simuladas
      if (sUser === "Admin" && sPass === "1234") {
        // Guardar sesión simulada
        localStorage.setItem("coldUser", JSON.stringify({
          username: sUser,
          role: "admin",
          loginTime: new Date().toISOString()
        }));

        MessageToast.show("Bienvenido " + sUser);

        // Navegar a la vista de inicio
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteInicio", {}, true); // el 'true' reemplaza la vista actual
      } else {
        MessageToast.show("Usuario o contraseña incorrectos");
      }
    }

  });
});
