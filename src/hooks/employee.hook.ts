import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";

import {
  createEmployee,
  deleteEmployee,
  getAllEmployees,
  getSingleEmployee,
  updateEmployee,
} from "../services/employee.hook";
import { queryClient } from "../libs/providers";

export const useCreateEmployee = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_EMPLOYEE"],
    mutationFn: async (employeeData) => {
      return await createEmployee(employeeData);
    },
    onSuccess: (data) => {
      if (data) {
        toast.success(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetAllEmployees = (params: FieldValues) => {
  return useQuery({
    queryKey: ["GET_ALL_EMPLOYEE"],
    queryFn: async () => {
      const response = await getAllEmployees(params);

      return response;
    },
  });
};


export const useGetAllEmployeesWithFilter = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["GET_ALL_EMPLOYEE_WITH_FILTER"],
    mutationFn: async (filters) => {
      return await getAllEmployees(filters);
    },
    onSuccess: (data) => {
      if (data) {
        return;
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });;
};

export const useDeleteEmployee = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["DELETE_EMPLOYEE"],
    mutationFn: async ({ id }) => {
      return await deleteEmployee(id);
    },
    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries({ queryKey: ["GET_ALL_EMPLOYEE"] });
        queryClient.invalidateQueries({ queryKey: ["GET_SINGLE_EMPLOYEE"] });

        toast.success(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetSinglEmployee = (id: string) => {
  return useQuery({
    queryKey: ["GET_SINGLE_EMPLOYEE"],
    queryFn: async () => {
      const response = await getSingleEmployee(id);

      return response;
    },
  });
};


export const useUpdateEmployee = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["UPDATE_EMPLOYEE"],
    mutationFn: async (data) => {
      const { employeeData, id } = data;

      return await updateEmployee(id, employeeData);
    },
    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries({ queryKey: ["GET_ALL_EMPLOYEE"] });
        toast.success(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
