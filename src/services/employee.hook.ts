import axiosInstance from "../libs/AxiosInstance";

export const getAllEmployees = async () => {
    try {
      const { data } = await axiosInstance.get("/employee/all");
      return data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  };