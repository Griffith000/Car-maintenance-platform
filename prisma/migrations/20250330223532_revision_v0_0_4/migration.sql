/*
  Warnings:

  - You are about to drop the column `vehiculeId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the `Vehicule` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `vehicleId` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_vehiculeId_fkey";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "vehiculeId",
ADD COLUMN     "vehicleId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Vehicule";

-- CreateTable
CREATE TABLE "Vehicle" (
    "vin" TEXT NOT NULL,
    "local" BOOLEAN NOT NULL,
    "registration" TEXT NOT NULL,
    "registrationType" "RegTypes",
    "location" TEXT,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("vin")
);

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("vin") ON DELETE RESTRICT ON UPDATE CASCADE;
