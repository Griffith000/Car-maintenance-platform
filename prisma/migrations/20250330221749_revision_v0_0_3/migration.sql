/*
  Warnings:

  - You are about to drop the column `registation` on the `Vehicule` table. All the data in the column will be lost.
  - Added the required column `registration` to the `Vehicule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicule" DROP COLUMN "registation",
ADD COLUMN     "registration" TEXT NOT NULL;
