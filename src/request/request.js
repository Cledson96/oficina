import axios from "axios";

const BASE_URL = "http://localhost:5000";

export function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/sign_up`, body);
  return promise;
}
