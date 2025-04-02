import { string, z } from "zod"
import { Vehicle } from "@/app/generated/prisma/client"

export const CreateVehicleDto = z.object({
  vin: z.string().min(17).max(17).regex(new RegExp("^[A-HJ-NPR-Z0-9]{17}$")),
  local: z.coerce.boolean(),
  // might need to add the regex for registration but im too lazy to do that now
  registration: z.string().optional(),
  registrationType: z.enum([
    "TUN",
    "RS",
    "TRAC",
    "PAT",
    "CMD",
    "CD",
    "MD",
    "MC",
    "CC",
    "REM",
    "AA",
    "ES",
    "PE",
    "IT",
  ]).optional(),
  location: z.string().optional()
})
