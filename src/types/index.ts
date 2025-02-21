import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export type TEmployee = {
  id:string;
  address: string;
  createdAt: string;
  email: string;
  imageUrl: string;
  name: string;
  phone: string;
  status: string;
  updatedAt: string;
}