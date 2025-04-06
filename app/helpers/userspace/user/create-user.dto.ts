import { z } from "zod"
import { Roles } from "@/app/generated/prisma/client"

export const CreateUserDto = z.object({
  username: z.string().min(5),
  email: z.string().email(),
  phone: z.string(),
  role: z.nativeEnum(Roles),
  image: z.string().optional()
})
