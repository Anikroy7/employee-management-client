"use client";

import { Controller, useFormContext } from "react-hook-form";
import React from "react";
import { Input } from "@heroui/input";

import { IInput } from "@/src/types";

interface IProps extends IInput {}
const EMInput = React.memo(function NBInput({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
  disabled = false,
}: IProps) {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  const errorMessage = errors?.[name]?.message as string | undefined;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Input
          {...field}
          errorMessage={errorMessage || ""}
          isDisabled={disabled}
          isInvalid={!!errors?.[name]}
          label={label}
          required={required}
          size={size}
          type={type}
          variant={variant}
        />
      )}
    />
  );
});

export default EMInput;
