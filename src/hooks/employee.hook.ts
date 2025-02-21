import { useQuery } from "@tanstack/react-query";
import { getAllEmployees } from "../services/employee.hook";

export const useGetAllEmployees = () => {
    return useQuery({
      queryKey: ["GET_ALL_EMPLOYEE"],
      queryFn: async () => {
        const response = await getAllEmployees();
        return response;
      },
    });
  };