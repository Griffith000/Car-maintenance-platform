// to set up auth js
import { PrismaClient, Vehicle } from "@/app/generated/prisma/client";
import { PrismaClientKnownRequestError } from "@/app/generated/prisma/client/runtime/library";
import { validate } from "@/app/helpers/shared/validate";
import { UpdateVehicleDto } from "@/app/helpers/userspace/vehicle/dto/update-vehicle.dto";
import { withAccelerate } from "@prisma/extension-accelerate"
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient().$extends(withAccelerate())

// to test swagger documentation
/**
 * @openapi
 * /api/v1/userspace/vehicle/{id}:
 *   get:
 *     summary: Get car details by the VIN (id)
 *     parameters:
 *       - in: path
 *         name: id  # Must match {id} in the path
 *         schema:
 *           type: string  # Changed to string (VINs are alphanumeric)
 *         required: true
 *         description: The VIN of a registered vehicle
 *     responses:
 *       200:
 *         description: Car Details
 *         content:
 *           application/json:
 *             examples:
 *               vehicle-local:
 *                 summary: Local Vehicle Details
 *                 value:
 *                   vehicleId: "123412342341234234"
 *                   registration: "234TUN1234"
 *                   registrationType: "TUN"
 *               vehicle-foreign:
 *                 summary: Foreign Vehicle Details
 *                 value:
 *                   vehicleId: "123412342341234234"
 *                   location: "France"
 *       404:
 *         description: Not found
 *         content:
 *           application/json:
 *             example:
 *               error: Vehicle Not Found
 */

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }) {
  // this is where the authentication is needed
  let searchedCar: Vehicle | null;
  try {
    searchedCar = await prisma.vehicle.findFirstOrThrow({
      where: {
        vin: params.id
      }
    })
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            data: { error: "Vehicle Not Found" }
          }, { status: 404 });
      }
    }
    console.log("Internal Server Error");
    return NextResponse.json({
      Message: "Internal Server Error",
      error: error
    }, {
      status: 500
    })
  }
}

export async function DELETE({ params }: {params: {id: string}}){
  let vehicleToDelete: Vehicle | null;
  try {
    vehicleToDelete = await prisma.vehicle.findFirstOrThrow({
      where: {
        vin: params.id
      }
    })
  } catch(error){
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            data: { error: "Vehicle Not Found" }
          }, { status: 404 });
      }
    }
    console.log("Internal Server Error");
    return NextResponse.json({
      Message: "Internal Server Error",
      error: error
    }, {
      status: 500
    })
  }
  return NextResponse.json(vehicleToDelete) 
}


export async function PATCH(){}
