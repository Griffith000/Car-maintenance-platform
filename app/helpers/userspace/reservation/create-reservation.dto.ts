import { z } from "zod"
import { RepairStatus } from "@prisma/client"

// the setter is maybe needed for setting the final price
// nah we may just raw dog it to make it only available in a backend route
export const CreateReservationDto = z.object({
  mobilePhone: z.string(),
  date: z.string().datetime(),
  baseFee: z.number().optional(),
  repairStatus: z.nativeEnum(RepairStatus).optional(),
  vehicleId: z.string().min(17).max(17).regex(new RegExp("^[A-HJ-NPR-Z0-9]{17}$")),
  userId: z.number(),
}) 
