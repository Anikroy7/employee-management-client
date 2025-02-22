"use client";
import { NextPage } from "next";
import Link from "next/link";
import { Button } from "@heroui/button";
import { FaPlus } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";
import { TEmployee } from "@/src/types";
import { HouseIcon, SearchIcon, UsersIcon } from "@/src/components/icons";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import EmployeeCard from "@/src/components/card/EmployeeCard";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useDebounce from "@/src/hooks/debounce.hook";
import { useGetAllEmployees, useGetAllEmployeesWithFilter } from "@/src/hooks/employee.hook";
import { useRouter } from "next/navigation";

const Page: NextPage = () => {
  const [employees, setEmployees] = useState<TEmployee[]>([]);
  const { data: allEmployeeData } = useGetAllEmployees({});
  const { mutate: handleGetAllEmployeesWithFilter, data, isPending } = useGetAllEmployeesWithFilter();
  const router = useRouter();
  const { watch, register } = useForm()
  const searchField = watch('search');
  const statusField = watch('status');
  const searchValue = useDebounce(searchField, 500);
  const statusValue = useDebounce(statusField, 500);

  useEffect(() => {
    handleGetAllEmployeesWithFilter({ searchTerm: searchValue || '', status: statusValue || '' });
  }, [searchValue, statusValue]);

  useEffect(() => {
    if (allEmployeeData) {
      setEmployees(allEmployeeData.data.data)
    }
  }, [allEmployeeData]);

  useEffect(() => {
    if (data) {
      setEmployees([])
      setEmployees(data?.data?.data || [])
    }
  }, [data]);

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }
  // const employees = data?.data?.data;

  return (
    <div className="container mx-auto p-6">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold"> </h1>
          <Link href="/add-employee?redirect=/employee-list">
            <Button className="flex items-center gap-2 my-3 w-full rounded-md bg-default-900 text-default">
              <FaPlus size={16} /> Add Employee
            </Button>
          </Link>
        </div>
        <ul className="flex my-4">
          <li className="flex gap-2">
            <HouseIcon />
            <Link href={"/"}>
              <span>Home</span>
            </Link>
            <span> / </span>{" "}
          </li>

          <li className="flex gap-2">
            <UsersIcon />
            <span>Employees</span>
            <span> / </span>{" "}
          </li>
          <li className="flex gap-2">
            <span>List</span>
          </li>
        </ul>
      </div>


      {/* Add searching and filtering section */}
      <div className="my-6">
        <h3 className="text-xl font-semibold mb-4">
          All Employees With Card View
        </h3>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div className="flex-[70%]">
            <Input
              {...register('search')}
              classNames={{
                base: "w-full h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Type to search employee via name or email..."
              size="sm"
              startContent={<SearchIcon size={18} />}
              type="search"
            />
          </div>

          <div className="flex-[30%] relative">
            <MdFilterList className="absolute top-1/2 transform -translate-y-1/2 text-gray-500" size={37} />

            <Select
              {...register('status')}
              labelPlacement="outside"
              className="w-full pl-10"
              placeholder="Filter by status"
              aria-label="Filter by status"
            >
              <SelectItem key="">ALL</SelectItem>
              <SelectItem key="ACTIVE">Active</SelectItem>
              <SelectItem key="BLOCKED">Blocked</SelectItem>
            </Select>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees?.map((employee: TEmployee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default Page;
