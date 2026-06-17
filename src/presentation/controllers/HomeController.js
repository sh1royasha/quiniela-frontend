import UsuarioRepository from "../../infrastructure/api/UsuarioRepository.js";

import PronosticoRepository from "../../infrastructure/api/PronosticoRepository.js";

import ObtenerUsuarios from "../../application/usecases/usuarios/ObtenerUsuarios.js";

import ObtenerPronosticosPorUsuario from "../../application/usecases/pronosticos/ObtenerPronosticosPorUsuario.js";

import { renderUsuarios } from "../components/UsuarioList.js";

import { renderPronosticos } from "../components/PronosticoList.js";

const usuarioRepository = new UsuarioRepository();

const pronosticoRepository = new PronosticoRepository();

export async function iniciar() {
  const usuarios = await new ObtenerUsuarios(usuarioRepository).execute();

  renderUsuarios(usuarios, cargarPronosticos);
}

async function cargarPronosticos(idUsuario, nombre) {
  document.getElementById("nombreUsuario").textContent =
    `Pronósticos de ${nombre}`;

  const pronosticos = await new ObtenerPronosticosPorUsuario(
    pronosticoRepository,
  ).execute(idUsuario);

  renderPronosticos(pronosticos);
}
