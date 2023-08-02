import axios from "axios";

export const BASE_URL = process.env.REACT_APP_SERVIDOR;

export function get_ranking() {
  const promise = axios.get(`${BASE_URL}/ranking`);
  return promise;
}
export function venda() {
  const promise = axios.post(`${BASE_URL}/venda`);
  return promise;
}
export function valorFrete(body) {
  const promise = axios.post(`${BASE_URL}/frete`, body);
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

export function get_cliente(id) {
  const promise = axios.get(`${BASE_URL}/cliente/${id}`);
  return promise;
}

export function get_categorias() {
  const promise = axios.get(`${BASE_URL}/categoria`);
  return promise;
}

export function cad_produtos(formData) {
  const promise = axios.post(`${BASE_URL}/produtos`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return promise;
}
export function postPreferencia(body) {
  const promise = axios.post(`${BASE_URL}/preferencia`, body);
  return promise;
}
