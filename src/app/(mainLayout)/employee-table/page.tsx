"use client"

import { DeleteIcon, EditIcon, HouseIcon, UsersIcon } from "@/src/components/icons";
import ConfirmationModal from "@/src/components/modal/ConfirmationModal";
import { useGetAllEmployees } from "@/src/hooks/employee.hook";
import { TEmployee } from "@/src/types";
import { Avatar } from "@heroui/avatar";
import { Chip } from "@heroui/chip";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/table";
import { Tooltip } from "@heroui/tooltip";
import { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
  const { data, isLoading } = useGetAllEmployees();
  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  }
  const employees = data?.data?.data || [];

  return (
    <>
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
            <span>Table</span>
          </li>
        </ul>

        <h3 className="text-xl font-semibold my-6">All Employees With Table View</h3>
        {

        }
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>IMAGE</TableColumn>
            <TableColumn>NAME</TableColumn>
            <TableColumn>EMAIL</TableColumn>
            <TableColumn>ADDRESS</TableColumn>
            <TableColumn>PHONE</TableColumn>
            <TableColumn>STATUS</TableColumn>
            <TableColumn>ACTIVE</TableColumn>
          </TableHeader>
          {
            employees.length > 0 ? <TableBody>
              {
                employees.map((employee: TEmployee) => <TableRow key={employee.id}>
                  <TableCell>
                    {
                      <Avatar size="md" src={employee.imageUrl} />
                    }
                  </TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.address}</TableCell>
                  <TableCell>{employee.phone}</TableCell>
                  <TableCell>
                    <Chip className="capitalize" color={employee.status === "ACTIVE" ? "success" : "danger"} size="sm" variant="flat">
                      {employee.status}
                    </Chip>
                  </TableCell>
                  <TableCell>
                    <div className="relative flex items-center gap-2">
                      <Tooltip content="Edit user">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                          <EditIcon />
                        </span>
                      </Tooltip>
                      <ConfirmationModal
                        employeeId={employee.id}
                        modalTitle={<Tooltip color="danger" content="Delete employee">
                          <span className="text-lg  text-danger cursor-pointer active:opacity-50">
                            <DeleteIcon />
                          </span>
                        </Tooltip>}
                      />

                    </div>
                  </TableCell>
                </TableRow>)
              }
            </TableBody> : <TableBody emptyContent={"No employee found to display."}>{[]}</TableBody>

          }

        </Table>
      </div>
    </>
  );
}
export default Page;