import axios from "axios";

export const API = axios.create({
  baseURL: " https://faq-crud.onrender.com/api",
});

export const AUTH = axios.create({
  baseURL: "https://dummyjson.com",
});
