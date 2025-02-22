import type { NextPage } from "next";

import { FaUsers } from "react-icons/fa";

const Page: NextPage = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className=" rounded-2xl shadow-xl p-8 space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <FaUsers className="w-10 h-10 text-blue-600" />
            <h1 className="text-3xl font-bold ">
              Welcome to Employee Management System
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold ">Quick Overview</h2>
              <div className=" p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="">Total Employees</span>
                  <span className="text-blue-600 font-semibold">150</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="">Departments</span>
                  <span className="text-blue-600 font-semibold">8</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold ">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-600 transition-colors">
                  View Employees
                </button>
                <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-green-600 transition-colors">
                  Add Employee
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-xl">
            <h3 className="text-lg font-semibold  mb-4">Recent Updates</h3>
            <p className="">
              Welcome to your employee management dashboard. Here you can manage
              your workforce, track performance, and handle administrative tasks
              efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
