import { PrismaClient } from '@prisma/client/extension';
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

await prisma.user.findMany({
  where: {
    email: {
      contains: "alice@prisma.io",
    },
  },
  cacheStrategy: { ttl: 60 }, // set up caching for better performance
});

// to figure out once i have set up the prisma orm
