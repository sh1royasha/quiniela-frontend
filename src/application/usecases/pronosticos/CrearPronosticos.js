class CrearPronostico {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(data) {
    return this.repository.create(data);
  }
}

export default CrearPronostico;
