class CrearPronosticoMasivo {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(pronosticos) {
    return this.repository.createMasivo(pronosticos);
  }
}

export default CrearPronosticoMasivo;
