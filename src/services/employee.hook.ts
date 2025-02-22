import { FieldValues } from "react-hook-form";

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

export const createEmployee = async (employeeData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/employee/create", employeeData);

    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const getSingleEmployee = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/employee/${id}`);

    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const updateEmployee = async (id: string, employeeData: FieldValues) => {
  try {
    const { data } = await axiosInstance.patch(
      `/employee/update/${id}`,
      employeeData,
    );

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
