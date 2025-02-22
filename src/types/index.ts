import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TEmployee = {
  id: string;
  address: string;
  createdAt: string;
  email: string;
  imageUrl: string;
  name: string;
  phone: string;
  status: string;
  updatedAt: string;
};

export interface IInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  disabled?: boolean;
  defaultValue?: string;
}
