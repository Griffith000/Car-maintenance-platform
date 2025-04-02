import { z } from "zod";
import { Roles } from "@/app/generated/prisma/client";

export const UpdateUserDto = z.object({
  username: z.string().min(5).optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  role: z.nativeEnum(Roles).optional()
})
