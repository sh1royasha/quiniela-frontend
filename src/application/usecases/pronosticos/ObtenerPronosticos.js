class ObtenerPronosticos {
  constructor(repository) {
    this.repository = repository;
  }

  async execute() {
    return this.repository.getAll();
  }
}

export default ObtenerPronosticos;
