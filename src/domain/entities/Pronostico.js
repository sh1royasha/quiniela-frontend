class Pronostico {
  constructor({ id, usuarioId, partidoId, golesLocal, golesVisitante }) {
    this.id = id;
    this.usuarioId = usuarioId;
    this.partidoId = partidoId;
    this.golesLocal = golesLocal;
    this.golesVisitante = golesVisitante;
  }
}

export default Pronostico;
