import { z } from "zod";

export const UpdateUserDto = z.object({
  username: z.string().min(5).optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  role: z.enum([
    "ADMIN",
    "PEASANT"
  ]).optional()
})
