import axios from "axios";

//export const BASE_URL = "https://cledson2503.c41.integrator.host/app";
export const BASE_URL = "http://localhost:55505";

export function get_ranking() {
  const promise = axios.get(`${BASE_URL}/ranking`);
  return promise;
}

export function valorFrete(body) {
  const promise = axios.post(`${BASE_URL}/frete`,body);
  return promise;
}

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

export function get_produto(id) {
  const promise = axios.get(`${BASE_URL}/produto/${id}`);
  return promise;
}

export function get_categorias() {
  const promise = axios.get(`${BASE_URL}/categoria`);
  return promise;
}

export function cad_produtos(formData) {
  console.log(formData);
  const promise = axios.post(`${BASE_URL}/produtos`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return promise;
}
