class ObtenerPartidosCaptura {
  constructor(repository) {
    this.repository = repository;
  }

  async execute() {
    return this.repository.getCaptura();
  }
}

export default ObtenerPartidosCaptura;
