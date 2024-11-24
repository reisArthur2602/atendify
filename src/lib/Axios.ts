import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});

api.interceptors.response.use(null, (error) => {
    
    if (error instanceof AxiosError && error.response)
        return Promise.reject(error.response.data.message);
    
    return Promise.reject("Ops! Acho que algo deu errado...");
});

// api.interceptors.request.use((request) => {
//     request.headers.Authorization = `Bearer ${}`;
//     return request;
//   });
