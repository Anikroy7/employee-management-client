import { TEmployee } from '@/src/types'
import Image from 'next/image'
import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaUserCircle } from 'react-icons/fa'

export default function EmployeeCard({ employee }: { employee: TEmployee }) {
    return (
            <section
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
            </section>
    )
}
