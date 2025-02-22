import React from 'react'

const EmployeeCardSkeleton = () => (
    <div className="p-4 bg-white rounded-lg shadow-md animate-pulse">
        <div className="w-full h-40 bg-gray-300 rounded-lg" />

        <div className="mt-4 h-5 w-3/4 bg-gray-300 rounded-md" />
        <div className="mt-2 h-4 w-2/3 bg-gray-300 rounded-md" />

        <div className="mt-2 h-4 w-1/2 bg-gray-300 rounded-md" />

        <div className="mt-2 h-4 w-1/3 bg-gray-300 rounded-md" />

        <div className="flex justify-between mt-4">
            <div className="h-6 w-16 bg-gray-300 rounded-md" />
            <div className="flex gap-2">
                <div className="h-6 w-6 bg-gray-300 rounded-md" />
                <div className="h-6 w-6 bg-gray-300 rounded-md" />
            </div>
        </div>
    </div>
);


export default EmployeeCardSkeleton;