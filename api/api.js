import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const APIx = axios.create({ baseURL: baseUrl, timeout: 15000 });

APIx.interceptors.request.use((req) => {
  if (localStorage.getItem("accessToken")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
  }
  return req;
});
export const API = APIx;
