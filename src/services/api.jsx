// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `api_github` // Adicionar token do github
  }
});

export default api;
