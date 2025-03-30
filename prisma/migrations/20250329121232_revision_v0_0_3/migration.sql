/*
  Warnings:

  - The primary key for the `Diagnostic` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `diagnostic_id` on the `Diagnostic` table. All the data in the column will be lost.
  - You are about to drop the column `reservation_id` on the `Diagnostic` table. All the data in the column will be lost.
  - You are about to drop the column `responsible_id` on the `Diagnostic` table. All the data in the column will be lost.
  - You are about to drop the column `mechanic_id` on the `HeadMechanic` table. All the data in the column will be lost.
  - The primary key for the `Mechanic` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `diagnosticDiagnostic_id` on the `Mechanic` table. All the data in the column will be lost.
  - You are about to drop the column `mechanic_id` on the `Mechanic` table. All the data in the column will be lost.
  - You are about to drop the column `pay_per_hour` on the `Mechanic` table. All the data in the column will be lost.
  - You are about to drop the column `repairRepair_id` on the `Mechanic` table. All the data in the column will be lost.
  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `post_id` on the `Post` table. All the data in the column will be lost.
  - The primary key for the `Repair` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `repair_id` on the `Repair` table. All the data in the column will be lost.
  - You are about to drop the column `reservation_id` on the `Repair` table. All the data in the column will be lost.
  - You are about to drop the column `responsible_id` on the `Repair` table. All the data in the column will be lost.
  - You are about to drop the column `total_repair_hours` on the `Repair` table. All the data in the column will be lost.
  - The primary key for the `RepairPart` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `part_id` on the `RepairPart` table. All the data in the column will be lost.
  - You are about to drop the column `repair_id` on the `RepairPart` table. All the data in the column will be lost.
  - You are about to drop the column `vendor_id` on the `RepairPart` table. All the data in the column will be lost.
  - The primary key for the `Reservation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `base_fee` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `mobile_phone` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `repair_status` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `reservation_id` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `vehicule_id` on the `Reservation` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `registration_type` on the `Vehicule` table. All the data in the column will be lost.
  - The primary key for the `Vendor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `vendor_id` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `vendor_shop_address` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `vendor_shop_name` on the `Vendor` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[mechanicId]` on the table `HeadMechanic` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `reservationId` to the `Diagnostic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responsibleId` to the `Diagnostic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mechanicId` to the `HeadMechanic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mechanicId` to the `Mechanic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payPerHour` to the `Mechanic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reservationId` to the `Repair` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responsibleId` to the `Repair` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalRepairHours` to the `Repair` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partId` to the `RepairPart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobilePhone` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vehiculeId` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendorId` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendorShopAddress` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendorShopName` to the `Vendor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Diagnostic" DROP CONSTRAINT "Diagnostic_reservation_id_fkey";

-- DropForeignKey
ALTER TABLE "Diagnostic" DROP CONSTRAINT "Diagnostic_responsible_id_fkey";

-- DropForeignKey
ALTER TABLE "HeadMechanic" DROP CONSTRAINT "HeadMechanic_mechanic_id_fkey";

-- DropForeignKey
ALTER TABLE "Mechanic" DROP CONSTRAINT "Mechanic_diagnosticDiagnostic_id_fkey";

-- DropForeignKey
ALTER TABLE "Mechanic" DROP CONSTRAINT "Mechanic_repairRepair_id_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Repair" DROP CONSTRAINT "Repair_reservation_id_fkey";

-- DropForeignKey
ALTER TABLE "Repair" DROP CONSTRAINT "Repair_responsible_id_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_vehicule_id_fkey";

-- DropIndex
DROP INDEX "HeadMechanic_mechanic_id_key";

-- AlterTable
ALTER TABLE "Diagnostic" DROP CONSTRAINT "Diagnostic_pkey",
DROP COLUMN "diagnostic_id",
DROP COLUMN "reservation_id",
DROP COLUMN "responsible_id",
ADD COLUMN     "diagnosticId" SERIAL NOT NULL,
ADD COLUMN     "reservationId" INTEGER NOT NULL,
ADD COLUMN     "responsibleId" INTEGER NOT NULL,
ADD CONSTRAINT "Diagnostic_pkey" PRIMARY KEY ("diagnosticId");

-- AlterTable
ALTER TABLE "HeadMechanic" DROP COLUMN "mechanic_id",
ADD COLUMN     "mechanicId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Mechanic" DROP CONSTRAINT "Mechanic_pkey",
DROP COLUMN "diagnosticDiagnostic_id",
DROP COLUMN "mechanic_id",
DROP COLUMN "pay_per_hour",
DROP COLUMN "repairRepair_id",
ADD COLUMN     "diagnosticDiagnosticId" INTEGER,
ADD COLUMN     "mechanicId" INTEGER NOT NULL,
ADD COLUMN     "payPerHour" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "repairRepairId" INTEGER,
ADD CONSTRAINT "Mechanic_pkey" PRIMARY KEY ("mechanicId");

-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
DROP COLUMN "post_id",
ADD COLUMN     "postId" SERIAL NOT NULL,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("postId");

-- AlterTable
ALTER TABLE "Repair" DROP CONSTRAINT "Repair_pkey",
DROP COLUMN "repair_id",
DROP COLUMN "reservation_id",
DROP COLUMN "responsible_id",
DROP COLUMN "total_repair_hours",
ADD COLUMN     "repairId" SERIAL NOT NULL,
ADD COLUMN     "reservationId" INTEGER NOT NULL,
ADD COLUMN     "responsibleId" INTEGER NOT NULL,
ADD COLUMN     "totalRepairHours" INTEGER NOT NULL,
ADD CONSTRAINT "Repair_pkey" PRIMARY KEY ("repairId");

-- AlterTable
ALTER TABLE "RepairPart" DROP CONSTRAINT "RepairPart_pkey",
DROP COLUMN "part_id",
DROP COLUMN "repair_id",
DROP COLUMN "vendor_id",
ADD COLUMN     "partId" TEXT NOT NULL,
ADD COLUMN     "repairId" INTEGER[],
ADD COLUMN     "vendorId" INTEGER[],
ADD CONSTRAINT "RepairPart_pkey" PRIMARY KEY ("partId");

-- AlterTable
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_pkey",
DROP COLUMN "base_fee",
DROP COLUMN "mobile_phone",
DROP COLUMN "repair_status",
DROP COLUMN "reservation_id",
DROP COLUMN "vehicule_id",
ADD COLUMN     "baseFee" DOUBLE PRECISION,
ADD COLUMN     "mobilePhone" VARCHAR(8) NOT NULL,
ADD COLUMN     "repairStatus" "RepairStatus",
ADD COLUMN     "reservationId" SERIAL NOT NULL,
ADD COLUMN     "vehiculeId" TEXT NOT NULL,
ADD CONSTRAINT "Reservation_pkey" PRIMARY KEY ("reservationId");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "user_id",
ADD COLUMN     "userId" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("userId");

-- AlterTable
ALTER TABLE "Vehicule" DROP COLUMN "registration_type",
ADD COLUMN     "registrationType" "RegTypes";

-- AlterTable
ALTER TABLE "Vendor" DROP CONSTRAINT "Vendor_pkey",
DROP COLUMN "vendor_id",
DROP COLUMN "vendor_shop_address",
DROP COLUMN "vendor_shop_name",
ADD COLUMN     "vendorId" INTEGER NOT NULL,
ADD COLUMN     "vendorShopAddress" TEXT NOT NULL,
ADD COLUMN     "vendorShopName" TEXT NOT NULL,
ADD CONSTRAINT "Vendor_pkey" PRIMARY KEY ("vendorId");

-- CreateIndex
CREATE UNIQUE INDEX "HeadMechanic_mechanicId_key" ON "HeadMechanic"("mechanicId");

-- AddForeignKey
ALTER TABLE "Mechanic" ADD CONSTRAINT "Mechanic_diagnosticDiagnosticId_fkey" FOREIGN KEY ("diagnosticDiagnosticId") REFERENCES "Diagnostic"("diagnosticId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mechanic" ADD CONSTRAINT "Mechanic_repairRepairId_fkey" FOREIGN KEY ("repairRepairId") REFERENCES "Repair"("repairId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeadMechanic" ADD CONSTRAINT "HeadMechanic_mechanicId_fkey" FOREIGN KEY ("mechanicId") REFERENCES "Mechanic"("mechanicId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_vehiculeId_fkey" FOREIGN KEY ("vehiculeId") REFERENCES "Vehicule"("vin") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diagnostic" ADD CONSTRAINT "Diagnostic_responsibleId_fkey" FOREIGN KEY ("responsibleId") REFERENCES "HeadMechanic"("mechanicId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diagnostic" ADD CONSTRAINT "Diagnostic_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("reservationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repair" ADD CONSTRAINT "Repair_responsibleId_fkey" FOREIGN KEY ("responsibleId") REFERENCES "HeadMechanic"("mechanicId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repair" ADD CONSTRAINT "Repair_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("reservationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
