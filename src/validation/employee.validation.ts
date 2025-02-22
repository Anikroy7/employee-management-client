import { z } from "zod";

export const employeeValidationSchema = z.object({
  name: z
    .string({
      message: "Name is requierd",
    })
    .min(1, {
      message: "Name must be provided",
    }),
  email: z
    .string({
      message: "Email is requierd",
    })
    .email({
      message: "Invalid email format",
    })
    .min(1, {
      message: "Email must be provided",
    }),
  address: z
    .string({
      message: "Address is requierd",
    })
    .min(1, {
      message: "Address must be provided",
    }),
  phone: z
    .string({
      message: "PHone is requierd",
    })
    .regex(/^(?:\+8801[3-9]\d{8}|01[3-9]\d{8})$/, {
      message: "Invalid phone number",
    }),
  image: z.string().optional(),
});
