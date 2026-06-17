import ApiClient from "./ApiClient.js";

export default class PronosticoRepository {
  async getAll() {
    return ApiClient.get("/pronosticos");
  }

  async create(data) {
    return ApiClient.post("/pronosticos", data);
  }

  async getByUsuario(idUsuario) {
    return ApiClient.get(`/pronosticos/usuario/${idUsuario}`);
  }
}
