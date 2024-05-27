import axios from "axios";
import Router from "next/router";

export function getAPIClient(ctx?: any) {
  axios.defaults.withCredentials = true;

  const api = axios.create({
    baseURL: "https://schoolme-f3eb9aadec9b.herokuapp.com",
  });

  return api;
}
