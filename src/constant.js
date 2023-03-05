import axios from "axios";
export const axiosClient = axios.create({
  baseURL: "https://project.ewallet.vn/e-wallet/public/api",
  headers: {
    Accept: "application/json",
  },
});
