"use client";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/button";
import { FaPlus } from "react-icons/fa";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserCircle,
} from "react-icons/fa";
import { MdFilterList } from "react-icons/md";
import { TEmployee } from "@/src/types";
import { useGetAllEmployees } from "@/src/hooks/employee.hook";
import { HouseIcon, SearchIcon, UsersIcon } from "@/src/components/icons";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";

const Page: NextPage = () => {
  const { data, isLoading } = useGetAllEmployees();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }
  const employees = data?.data?.data;

  return (
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
              labelPlacement="outside"
              className="w-full pl-10" // Ensure space for the icon
              placeholder="Filter by status"
            >
              <SelectItem key="active">Active</SelectItem>
              <SelectItem key="blocked">Blocked</SelectItem>
            </Select>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees?.map((employee: TEmployee) => (
          <div
            key={employee.id}
            className="shadow-lg rounded-lg overflow-hidden"
          >
            <div className="flex items-center px-6 py-4 bg-gray-600">
              {employee.imageUrl ? (
                <Image
                  alt={employee.name}
                  className="w-16 h-16 rounded-full object-cover"
                  height={64}
                  src={
                    employee.imageUrl || "https://www.gravatar.com/avatar/?d=mp"
                  }
                  width={64}
                />
              ) : (
                <FaUserCircle className="w-16 h-16 text-white" />
              )}
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-white">
                  {employee.name}
                </h2>
                <span className="text-blue-100 text-sm">
                  Status: {employee.status}
                </span>
              </div>
            </div>

            <div className="px-6 py-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <FaEnvelope className="h-5 w-5" />
                  <span className="px-2 text-sm">{employee.email}</span>
                </div>

                <div className="flex items-center">
                  <FaPhone className="h-5 w-5" />
                  <span className="px-2 text-sm">{employee.phone}</span>
                </div>

                <div className="flex items-center">
                  <FaMapMarkerAlt className="h-5 w-5" />
                  <span className="px-2 text-sm">{employee.address}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between text-sm">
                  <span>
                    Created: {new Date(employee.createdAt).toLocaleDateString()}
                  </span>
                  <span>
                    Updated: {new Date(employee.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
