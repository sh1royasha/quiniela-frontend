export default class ObtenerPronosticosPorUsuario {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(idUsuario) {
    return this.repository.getByUsuario(idUsuario);
  }
}
