import PronosticoRepository from "../../infrastructure/api/PronosticoRepository.js";

import ObtenerPronosticos from "../../application/usecases/pronosticos/ObtenerPronosticos.js";

const repository = new PronosticoRepository();

export async function cargarPronosticos() {
  const useCase = new ObtenerPronosticos(repository);

  const pronosticos = await useCase.execute();

  return pronosticos;
}
