import { z } from "zod"
import { RegTypes } from "@prisma/client"

export const UpdateVehicleDto = z.object({
  vin: z.string().min(17).max(17).regex(new RegExp("^[A-HJ-NPR-Z0-9]{17}$")).optional(),
  local: z.coerce.boolean().optional(),
  // might need to add the regex for registration but im too lazy to do that now
  registration: z.string().optional(),
  registrationType: z.nativeEnum(RegTypes).optional(),
  location: z.string().optional()
})
