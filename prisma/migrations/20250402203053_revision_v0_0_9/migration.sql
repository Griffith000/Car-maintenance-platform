-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('PEASANT', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Roles" NOT NULL DEFAULT 'PEASANT';
