import axiosInstance from "../libs/AxiosInstance";

export const getAllEmployees = async () => {
    try {
      const { data } = await axiosInstance.get("/employee/all");
      return data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  };

  export const deleteEmployee = async (id: string) => {
    try {
      const { data } = await axiosInstance.delete(`/employee/${id}`);
  
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  };
  