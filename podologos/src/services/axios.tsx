import axios from "axios";

export function getAPIClient(ctx?: any) {
  axios.defaults.withCredentials = true;

  const api = axios.create({
    baseURL: "https://podologos-back-ecbm.onrender.com",
  });

  return api;
}
