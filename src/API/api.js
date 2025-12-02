import axios from "axios";
import useAuthStore from "../store/authStore";

export const API = axios.create({
  baseURL: "https://faq-crud.onrender.com/api",
});

export const AUTH = axios.create({
  baseURL: "https://dummyjson.com",
});

AUTH.interceptors.request.use(
  (config) => {
    const { token } = useAuthStore.getState();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

AUTH.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logOut();
      console.log(
        "Unauthorized yoki token expired, foydalanuvchi logout qilindi"
      );
    }
    return Promise.reject(error);
  }
);
