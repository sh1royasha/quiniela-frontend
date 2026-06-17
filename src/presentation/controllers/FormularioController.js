import UsuarioRepository from "../../infrastructure/api/UsuarioRepository.js";

import PartidoRepository from "../../infrastructure/api/PartidoRepository.js";

import PronosticoRepository from "../../infrastructure/api/PronosticoRepository.js";

import ObtenerUsuarios from "../../application/usecases/usuarios/ObtenerUsuarios.js";

import ObtenerPartidosCaptura from "../../application/usecases/partidos/ObtenerPartidosCaptura.js";

import CrearPronosticoMasivo from "../../application/usecases/pronosticos/CrearPronosticoMasivo.js";

import { renderUsuarios } from "../components/UsuarioSelect.js";

import { renderPartidos } from "../components/PartidoForm.js";

const usuarioRepository = new UsuarioRepository();

const partidoRepository = new PartidoRepository();

const pronosticoRepository = new PronosticoRepository();

export async function iniciarFormulario() {
  const usuarios = await new ObtenerUsuarios(usuarioRepository).execute();

  renderUsuarios(usuarios);

  const partidos = await new ObtenerPartidosCaptura(
    partidoRepository,
  ).execute();

  renderPartidos(partidos);

  document
    .getElementById("btnGuardar")
    .addEventListener("click", guardarPronosticos);
}

async function guardarPronosticos() {
  const idUsuario = document.getElementById("usuarioSelect").value;

  if (!idUsuario) {
    alert("Seleccione un usuario");
    return;
  }

  const locales = document.querySelectorAll(".goles-local");

  const visitas = document.querySelectorAll(".goles-visita");

  const pronosticos = [];

  locales.forEach((local, index) => {
    const visita = visitas[index];

    if (local.value === "" || visita.value === "") {
      return;
    }

    pronosticos.push({
      ID_USUARIO: Number(idUsuario),

      ID_PARTIDO: Number(local.dataset.id),

      GOLES_LOCAL: Number(local.value),

      GOLES_VISITA: Number(visita.value),
    });
  });

  if (pronosticos.length === 0) {
    alert("Capture al menos un pronóstico");
    return;
  }

  await new CrearPronosticoMasivo(pronosticoRepository).execute(pronosticos);

  alert(`${pronosticos.length} pronósticos guardados`);
}
