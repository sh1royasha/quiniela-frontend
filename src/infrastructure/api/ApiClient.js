const API_URL = "https://api-supabase-0ymf.onrender.com/api";

export default class ApiClient {
  static async get(endpoint) {
    const response = await fetch(`${API_URL}${endpoint}`);

    return response.json();
  }

  static async post(endpoint, body) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return response.json();
  }
}
