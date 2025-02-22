import { TEmployee } from '@/src/types'
import { Tooltip } from '@heroui/tooltip'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaEdit, FaEnvelope, FaMapMarkerAlt, FaPhone, FaTrashAlt, FaUserCircle } from 'react-icons/fa'
import ConfirmationModal from '../modal/ConfirmationModal'

export default function EmployeeCard({ employee }: { employee: TEmployee }) {
    const router = useRouter();

    return (
        <section key={employee.id} className="shadow-lg rounded-lg overflow-hidden bg-white">
            <div className="flex items-center px-6 py-4 bg-gray-600">
                {employee.imageUrl ? (
                    <Image
                        alt={employee.name}
                        className="w-12 h-12 rounded-full object-cover"
                        height={48}
                        src={employee.imageUrl || "https://www.gravatar.com/avatar/?d=mp"}
                        width={48}
                    />
                ) : (
                    <FaUserCircle className="w-12 h-12 text-white" />
                )}
                <div className="ml-4">
                    <h2 className="text-lg font-semibold text-white">
                        {employee.name}
                    </h2>
                    <span className="text-blue-100 text-sm">
                        Status: {employee.status}
                    </span>
                </div>

                <div className="ml-auto flex            ">
                    {/* Edit Button */}
                    <Tooltip content="Edit Employee">
                        <button
                            onClick={() => router.push(`/update-employee/${employee.id}?redirect=/employee-list`)}
                            className="text-white p-2 rounded-full hover:bg-gray-500 focus:outline-none transition-all"
                        >
                            <FaEdit size={18} />
                        </button>
                    </Tooltip>

                    {/* Delete Button */}
                    <ConfirmationModal
                        employeeId={employee.id}
                        modalTitle={
                            <Tooltip color="danger" content="Delete Employee">
                                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                    <FaTrashAlt size={18} />
                                </span>
                            </Tooltip>
                        }
                    />
                </div>
            </div>

            <div className="px-6 py-4">
                <div className="space-y-2">
                    <div className="flex items-center gap-x-2 text-gray-700">
                        <FaEnvelope className="h-4 w-4" />
                        <span className="text-sm">{employee.email}</span>
                    </div>

                    <div className="flex items-center gap-x-2 text-gray-700">
                        <FaPhone className="h-4 w-4" />
                        <span className="text-sm">{employee.phone}</span>
                    </div>

                    <div className="flex items-center gap-x-2 text-gray-700">
                        <FaMapMarkerAlt className="h-4 w-4" />
                        <span className="text-sm">{employee.address}</span>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>
                            Created: {new Date(employee.createdAt).toLocaleDateString()}
                        </span>
                        <span>
                            Updated: {new Date(employee.updatedAt).toLocaleDateString()}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
