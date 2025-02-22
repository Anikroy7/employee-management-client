"use client";

import { Avatar } from "@heroui/avatar";
import { Chip } from "@heroui/chip";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Tooltip } from "@heroui/tooltip";
import { NextPage } from "next";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";

import { TEmployee } from "@/src/types";
import { useGetAllEmployees, useUpdateEmployee } from "@/src/hooks/employee.hook";
import ConfirmationModal from "@/src/components/modal/ConfirmationModal";
import {
  DeleteIcon,
  EditIcon,
  HouseIcon,
  SearchIcon,
  UsersIcon,
} from "@/src/components/icons";
import { Input } from "@heroui/input";
import { MdFilterList } from "react-icons/md";
import { Select, SelectItem } from "@heroui/select";
import useDebounce from "@/src/hooks/debounce.hook";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";

const Page: NextPage = () => {
  const { mutate: handleGetAllEmployees, data, isPending } = useGetAllEmployees();
  const {mutate:updateEmployeeStatus, isPending:updatePending}= useUpdateEmployee()
  const router = useRouter();
  const { watch, register } = useForm()
  const searchField = watch('search');
  const statusField = watch('status');
  const searchValue = useDebounce(searchField, 500);
  const statusValue = useDebounce(statusField, 500);

  useEffect(() => {
    handleGetAllEmployees({ searchTerm: searchValue || '', status: statusValue || '' });
  }, [searchValue, statusValue]);

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }
  const handleChangeStatus= async (id: string, status: string) => {

  }
  const employees = data?.data?.data || [];

  return (
    <>
      <div className="container mx-auto p-6">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold"> </h1>
            <Link href="/add-employee">
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
              <span>Table</span>
            </li>
          </ul>


          {/* Add searching and filtering section */}
          <div className="my-6">
            <h3 className="text-xl font-semibold mb-4">
              All Employees With Card View
            </h3>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div className="flex-[70%]">
                <Input
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
                  {...register('search')}
                />
              </div>

              <div className="flex-[30%] relative">
                <MdFilterList className="absolute top-1/2 transform -translate-y-1/2 text-gray-500" size={37} />

                <Select
                  labelPlacement="outside"
                  className="w-full pl-10"
                  placeholder="Filter by status"
                  {...register('status')}
                >
                  <SelectItem key="ACTIVE">Active</SelectItem>
                  <SelectItem key="BLOCKED">Blocked</SelectItem>
                </Select>
              </div>

            </div>
          </div>
        </div>

        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>IMAGE</TableColumn>
            <TableColumn>NAME</TableColumn>
            <TableColumn>EMAIL</TableColumn>
            <TableColumn>ADDRESS</TableColumn>
            <TableColumn>PHONE</TableColumn>
            <TableColumn>STATUS</TableColumn>
            <TableColumn>ACTIONS</TableColumn>
          </TableHeader>
          {employees.length > 0 ? (
            <TableBody>
              {employees.map((employee: TEmployee) => (
                <TableRow key={employee.id}>
                  <TableCell>
                    {<Avatar size="md" src={employee.imageUrl} />}
                  </TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.address}</TableCell>
                  <TableCell>{employee.phone}</TableCell>
                  <TableCell>
                    <Chip
                      className="capitalize"
                      color={
                        employee.status === "ACTIVE" ? "success" : "danger"
                      }
                      size="sm"
                      variant="flat"
                    >
                      {employee.status}
                    </Chip>
                  </TableCell>
                  <TableCell>
                    <div className="relative flex items-center">
                      {/* Change Status Dropdown */}
                      <Popover placement="bottom">
                        <PopoverTrigger>
                          <Button isIconOnly variant="light" className="text-lg text-primary cursor-pointer active:opacity-50">
                            <HiOutlineSwitchHorizontal size={22} />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div className="p-3 space-y-2">
                            <p className="text-sm font-semibold">Change Status To</p>
                            {
                              employee.status === "ACTIVE" ? (
                                <Button
                                  color="danger"
                                  fullWidth
                                  variant="flat"
                                  size="sm"
                                onClick={() => handleChangeStatus(employee.id, "blocked")}
                                >
                                  Blocked
                                </Button>
                              ) : (
                                <Button
                                  color="success"
                                  fullWidth
                                  variant="flat"
                                  size="sm"
                                onClick={() => handleChangeStatus(employee.id, "active")}
                                >
                                  Active
                                </Button>
                              )
                            }
                           
                          </div>
                        </PopoverContent>
                      </Popover>

                      {/* Edit Employee */}
                      <Tooltip content="Edit Employee">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                          <EditIcon onClick={() => router.push(`/update-employee/${employee.id}`)} />
                        </span>
                      </Tooltip>



                      {/* Delete Employee */}
                      <ConfirmationModal
                        employeeId={employee.id}
                        modalTitle={
                          <Tooltip color="danger" content="Delete Employee">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                              <DeleteIcon />
                            </span>
                          </Tooltip>
                        }
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody emptyContent={"No employee found to display."}>
              {[]}
            </TableBody>
          )}
        </Table>
      </div>
    </>
  );
};

export default Page;
