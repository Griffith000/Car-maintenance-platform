import { z } from "zod"

export const CreateUserDto = z.object({
  username: z.string().min(5),
  email: z.string().email().optional(),
  phone: z.string(),
  role: z.enum ([
    "ADMIN",
    "PEASANT"
  ])
})
