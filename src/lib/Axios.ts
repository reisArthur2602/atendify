import axios, { AxiosError } from "axios";
import { tokenUtils } from "../utils/token";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});

api.interceptors.response.use(null, (error) => {
  if (error instanceof AxiosError && error.response)
    return Promise.reject(error.response.data.message);

  return Promise.reject("Ops! Acho que algo deu errado...");
});

const token = tokenUtils.get();

if (token) {
  api.interceptors.request.use((request) => {
    request.headers.Authorization = `Bearer ${tokenUtils.get()}`;
    return request;
  });
}
