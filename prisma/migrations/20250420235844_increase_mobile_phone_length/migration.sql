/*
  Warnings:

  - You are about to alter the column `vehicleId` on the `Reservation` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(17)`.
  - The primary key for the `Vehicle` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `vin` on the `Vehicle` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(17)`.

*/
-- AlterEnum
ALTER TYPE "RepairStatus" ADD VALUE 'PENDING';

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_vehicleId_fkey";

-- AlterTable
ALTER TABLE "Reservation" ALTER COLUMN "mobilePhone" SET DATA TYPE VARCHAR(15),
ALTER COLUMN "vehicleId" SET DATA TYPE VARCHAR(17);

-- AlterTable
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_pkey",
ALTER COLUMN "vin" SET DATA TYPE VARCHAR(17),
ADD CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("vin");

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("vin") ON DELETE RESTRICT ON UPDATE CASCADE;
