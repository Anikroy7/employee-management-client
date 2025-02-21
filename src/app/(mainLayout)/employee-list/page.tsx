"use client"
import { HouseIcon, UsersIcon } from "@/src/components/icons";
import { useGetAllEmployees } from "@/src/hooks/employee.hook";
import { TEmployee } from "@/src/types";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUserCircle } from 'react-icons/fa';

const Page: NextPage = () => {
  const { data, isLoading } = useGetAllEmployees();

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  }
  const employees = data?.data?.data;
  return (
    <div className="container mx-auto p-6">
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

      <h3 className="text-xl font-semibold my-6">All Employees With Card View</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees?.map((employee:TEmployee) => (
          <div key={employee.id} className="shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center px-6 py-4 bg-gray-600">
              {employee.imageUrl ? (
                <Image
                  className="w-16 h-16 rounded-full object-cover"
                  width={64}
                  height={64}
                  src={employee.imageUrl || 'https://www.gravatar.com/avatar/?d=mp'}
                  alt={employee.name}
                />
              ) : (
                <FaUserCircle className="w-16 h-16 text-white" />
              )}
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-white">{employee.name}</h2>
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
                  <span>Created: {new Date(employee.createdAt).toLocaleDateString()}</span>
                  <span>Updated: {new Date(employee.updatedAt).toLocaleDateString()}</span>
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