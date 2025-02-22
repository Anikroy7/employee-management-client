"use client";

import { Avatar } from "@heroui/avatar";
import { Badge } from "@heroui/badge";
import { Button } from "@heroui/button";
import { Suspense, use, useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { MdClose, MdOutlineAttachment } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";

import { defaultImageUrl } from "../constants";

import { employeeValidationSchema } from "@/src/validation/employee.validation";
import { useCreateEmployee } from "@/src/hooks/employee.hook";
import useImagePreview from "@/src/hooks/imagePreview.hook";
import EMInput from "@/src/components/form/EMInput";
import EMForm from "@/src/components/form/EMForm";
import uploadImage from "@/src/utils/uploadImage";
import { useSearchParams } from "next/navigation";

function AddEmployeeForm() {
  const { mutate: handleCreateEmployee, data } = useCreateEmployee();
  const { image, avatarPreview, handleAvatarChange, handleRemoveImage } =
    useImagePreview();
  let imageUrl = defaultImageUrl;
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);
  const onSubmit = async (data: FieldValues) => {
    if (image) {
      imageUrl = await uploadImage(image);
    }
    handleCreateEmployee({ ...data, imageUrl });
  };

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="w-[70%] p-6 rounded-lg shadow-lg">
        <h4 className="text-center font-bold ">Add Employee</h4>
        <EMForm
          resolver={zodResolver(employeeValidationSchema)}
          onSubmit={onSubmit}
        >
          <div className="py-3">
            <EMInput label="Name" name="name" size="sm" />
          </div>

          <div className="py-3">
            <EMInput label="Email" name="email" size="sm" />
          </div>
          <div className="py-3">
            <EMInput label="Address" name="address" size="sm" />
          </div>
          <div className="py-3">
            <EMInput label="Phone" name="phone" size="sm" />
          </div>

          {/* //Image upload */}
          <div className="mt-4">
            <label className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-5\800 transition duration-300 ease-in-out ">
              <div className="flex flex-col items-center justify-center">
                {/* Attachment Icon from React Icons */}
                <MdOutlineAttachment className="w-8 h-8 text-gray-400" />
                <span className="text-sm font-medium text-gray-500">
                  click to upload{" "}
                  <span className="text-red-300">( If Required )</span>
                </span>
              </div>
              <input
                className="hidden"
                type="file"
                onChange={handleAvatarChange}
              />
            </label>
          </div>
          <div className="my-3 flex flex-wrap gap-5">
            {image && (
              <Badge
                className="cursor-pointer"
                color="danger"
                content={<MdClose className="text-white " />}
                size="lg"
                onClick={() => handleRemoveImage()}
              >
                <Avatar
                  className="h-40 w-40"
                  radius="md"
                  src={avatarPreview as string}
                />
              </Badge>
            )}
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 text-default"
            size="lg"
            type="submit"
          >
            Add
          </Button>
        </EMForm>
      </div>
    </section>
  );
}

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddEmployeeForm />
    </Suspense>
  );
};

export default Page;
