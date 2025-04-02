// do not forget that the backend admin can specify dates in which the reservation is off globally (in case there are holidays) 
//

import { Prisma, PrismaClient, User } from "@/app/generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
