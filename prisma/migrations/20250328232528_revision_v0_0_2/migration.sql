/*
  Warnings:

  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Post` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "RegTypes" AS ENUM ('TUN', 'RS', 'TRAC', 'PAT', 'CMD', 'CD', 'MD', 'MC', 'CC', 'REM', 'AA', 'ES', 'PE', 'IT');

-- CreateEnum
CREATE TYPE "RepairStatus" AS ENUM ('DIAGNOSTIC', 'REPAIR', 'SUCCESS', 'FAILURE');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
DROP COLUMN "id",
ADD COLUMN     "post_id" SERIAL NOT NULL,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("post_id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "user_id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");

-- CreateTable
CREATE TABLE "Vehicule" (
    "vin" TEXT NOT NULL,
    "local" BOOLEAN NOT NULL,
    "registation" TEXT NOT NULL,
    "registration_type" "RegTypes",
    "location" TEXT,

    CONSTRAINT "Vehicule_pkey" PRIMARY KEY ("vin")
);

-- CreateTable
CREATE TABLE "Mechanic" (
    "mechanic_id" INTEGER NOT NULL,
    "pay_per_hour" DOUBLE PRECISION NOT NULL,
    "diagnosticDiagnostic_id" INTEGER,
    "repairRepair_id" INTEGER,

    CONSTRAINT "Mechanic_pkey" PRIMARY KEY ("mechanic_id")
);

-- CreateTable
CREATE TABLE "HeadMechanic" (
    "mechanic_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Reservation" (
    "reservation_id" SERIAL NOT NULL,
    "mobile_phone" VARCHAR(8) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "base_fee" DOUBLE PRECISION,
    "repair_status" "RepairStatus",
    "vehicule_id" TEXT NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("reservation_id")
);

-- CreateTable
CREATE TABLE "Diagnostic" (
    "diagnostic_id" SERIAL NOT NULL,
    "responsible_id" INTEGER NOT NULL,
    "reservation_id" INTEGER NOT NULL,

    CONSTRAINT "Diagnostic_pkey" PRIMARY KEY ("diagnostic_id")
);

-- CreateTable
CREATE TABLE "Repair" (
    "repair_id" SERIAL NOT NULL,
    "responsible_id" INTEGER NOT NULL,
    "reservation_id" INTEGER NOT NULL,
    "total_repair_hours" INTEGER NOT NULL,

    CONSTRAINT "Repair_pkey" PRIMARY KEY ("repair_id")
);

-- CreateTable
CREATE TABLE "RepairPart" (
    "part_id" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "repair_id" INTEGER[],
    "vendor_id" INTEGER[],

    CONSTRAINT "RepairPart_pkey" PRIMARY KEY ("part_id")
);

-- CreateTable
CREATE TABLE "Vendor" (
    "vendor_id" INTEGER NOT NULL,
    "vendor_shop_name" TEXT NOT NULL,
    "vendor_shop_address" TEXT NOT NULL,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("vendor_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HeadMechanic_mechanic_id_key" ON "HeadMechanic"("mechanic_id");

-- AddForeignKey
ALTER TABLE "Mechanic" ADD CONSTRAINT "Mechanic_diagnosticDiagnostic_id_fkey" FOREIGN KEY ("diagnosticDiagnostic_id") REFERENCES "Diagnostic"("diagnostic_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mechanic" ADD CONSTRAINT "Mechanic_repairRepair_id_fkey" FOREIGN KEY ("repairRepair_id") REFERENCES "Repair"("repair_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeadMechanic" ADD CONSTRAINT "HeadMechanic_mechanic_id_fkey" FOREIGN KEY ("mechanic_id") REFERENCES "Mechanic"("mechanic_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_vehicule_id_fkey" FOREIGN KEY ("vehicule_id") REFERENCES "Vehicule"("vin") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diagnostic" ADD CONSTRAINT "Diagnostic_responsible_id_fkey" FOREIGN KEY ("responsible_id") REFERENCES "HeadMechanic"("mechanic_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diagnostic" ADD CONSTRAINT "Diagnostic_reservation_id_fkey" FOREIGN KEY ("reservation_id") REFERENCES "Reservation"("reservation_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repair" ADD CONSTRAINT "Repair_responsible_id_fkey" FOREIGN KEY ("responsible_id") REFERENCES "HeadMechanic"("mechanic_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repair" ADD CONSTRAINT "Repair_reservation_id_fkey" FOREIGN KEY ("reservation_id") REFERENCES "Reservation"("reservation_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
