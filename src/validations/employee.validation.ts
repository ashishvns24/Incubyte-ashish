import { z } from "zod";

export const employeeSchema = z.object({
  fullName: z.string().min(1),
  jobTitle: z.string().min(1),
  country: z.string().min(1),
  salary: z.number().positive()
});