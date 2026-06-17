import ApiClient from "./ApiClient.js";

export default class UsuarioRepository {
  async getAll() {
    return ApiClient.get("/usuarios");
  }
}
