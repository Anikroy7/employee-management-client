import axios from "axios";
import envConfig from "../config/envConfig";

const axiosInstance = axios.create({
  baseURL: `${envConfig.baseApi}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});


export default axiosInstance;
