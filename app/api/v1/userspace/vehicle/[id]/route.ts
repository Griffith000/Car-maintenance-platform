// to set up auth js
import { PrismaClient, Vehicle } from "@/app/generated/prisma/client";
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
    searchedCar = await prisma.vehicle.findFirst({
      where: {
        vin: params.id
      }
    })
  } catch {
    console.log("Error with specific car retrieval Error")
    return NextResponse.json({
      Message: "Error getting the vehicle"
    }, {
      status: 500
    })
  }

  return NextResponse.json(
    { data: searchedCar ?? {
      error: "Vehicle Not Found"
    } },
    { status: searchedCar ? 200 : 404 }
  );
}

