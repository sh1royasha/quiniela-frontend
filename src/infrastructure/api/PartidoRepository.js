import ApiClient from "./ApiClient.js";

class PartidoRepository {
  async getAll() {
    return ApiClient.get("/partidos");
  }

  async getCaptura() {
    return ApiClient.get("/partidos/captura");
  }

  async getById(id) {
    return ApiClient.get(`/partidos/${id}`);
  }
}

export default PartidoRepository;
