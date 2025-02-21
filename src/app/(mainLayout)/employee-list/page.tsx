"use client"
import { useGetAllEmployees } from "@/src/hooks/employee.hook";
import { NextPage } from "next";

const Page:NextPage = () => {
  const {data, isLoading}= useGetAllEmployees();
  console.log(data, isLoading)
  return <div>Employees lists Page</div>
}

export default Page