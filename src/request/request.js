import axios from "axios";

const BASE_URL = "https://cledson2503.c41.integrator.host/app";
//const BASE_URL = "http://localhost:55505";

export function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/sign_up`, body);
  return promise;
}

export function postSignIn(body) {
  const promise = axios.post(`${BASE_URL}/sign_in`, body);
  return promise;
}

export function checker(token) {
  const promise = axios.get(`${BASE_URL}/checker`, {
    headers: {
      token,
    },
  });
  return promise;
}

export function get_produtos() {
  const promise = axios.get(`${BASE_URL}/produtos`);
  return promise;
}

export function get_categorias() {
  const promise = axios.get(`${BASE_URL}/categoria`);
  return promise;
}
