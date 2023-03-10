import axios from "axios";
export const axiosClient = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    Accept: "application/json",
  },
  xsrfCookieName: "XSRF-TOKEN", // mặc định
  xsrfHeaderName: "X-XSRF-TOKEN",
});
