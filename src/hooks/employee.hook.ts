import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEmployee, getAllEmployees } from "../services/employee.hook";
import { queryClient } from "../libs/providers";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";

export const useGetAllEmployees = () => {
    return useQuery({
      queryKey: ["GET_ALL_EMPLOYEE"],
      queryFn: async () => {
        const response = await getAllEmployees();
        return response;
      },
    });
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
  