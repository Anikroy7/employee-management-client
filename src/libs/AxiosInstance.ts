import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_API}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});


export default axiosInstance;
