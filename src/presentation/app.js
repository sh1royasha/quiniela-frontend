import { iniciar } from "./controllers/HomeController.js";
import { iniciarFormulario } from "./controllers/FormularioController.js";

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.id;

  console.log(`Página actual: ${page}`);
  switch (page) {
    case "home-page":
      iniciar();
      break;

    case "formulario-page":
      iniciarFormulario();
      break;
  }
});
