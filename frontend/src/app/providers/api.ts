import axios, { AxiosError } from "axios";
import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

import type { ApiError } from '@/shared/types/api';

export const apiClient: AxiosInstance = axios.create({
  baseURL: "/",
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError<ApiError>): Promise<AxiosError<ApiError>> =>
    Promise.reject(error)
);


apiClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError<ApiError>): Promise<never> => {
    console.error("API Error:", error.response?.data?.message || error.message);
    return Promise.reject(error);
  }
);
