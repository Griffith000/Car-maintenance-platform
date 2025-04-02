import { PrismaClient, Vehicle, RegTypes } from "@/app/generated/prisma/client";
import { withAccelerate } from '@prisma/extension-accelerate'
import { NextResponse, NextRequest } from "next/server";
import { CreateVehicleDto } from "@/app/helpers/userspace/vehicle/create-vehicle.dto";
import { validate } from "@/app/helpers/shared/validate";

export const dynamic = 'force-static'

// setting up the prisma client
const prisma = new PrismaClient().$extends(withAccelerate())

/**
 * @openapi
 * /api/v1/userspace/vehicle:
 *   get:
 *     summary: Get all available car details (id)
 *     responses:
 *       200:
 *         description: List of Car Details
 *         content:
 *           application/json:
 *             examples:
 *               vehicle-list:
 *                  summary: The list of available cars
 *                  value:
 *                    - vehicleId: "123412342341234234"
 *                      registration: "234TUN1234"
 *                      registrationType: "TUN"
 *                    - vehicleId: "123412342341234234"
 *                      location: "France"
 *       500:
 *         description: 
 *         content:
 *           application/json:
 *             example:
 *               error: Internal server error
 */

export async function GET() {
  let listOfVehicles: Vehicle[];
  try {
    listOfVehicles = await prisma.vehicle.findMany({});
  } catch {
    console.log("Something went wrong with our services (Error: COULDNT_GET_VEHICLES\)");
    return NextResponse.json({
      Message: "Error retrieving vehicles"
    }, {
      status: 500
    })
  }
  return NextResponse.json(listOfVehicles)
}

export async function POST(request: NextRequest) {
  let prismaOutput;
  try {
    let validatedResponse = validate(CreateVehicleDto, await request.json());
    if ( validatedResponse.local === true ) {
      validatedResponse.registration = undefined;
      validatedResponse.registrationType = undefined;
    } else if (validatedResponse.local === false){
      validatedResponse.location = undefined;
    }

    prismaOutput = await prisma.vehicle.create({
      data: {
        vin: validatedResponse.vin as string,
        local: validatedResponse.local,
        registration: validatedResponse.registration ?? "",
        location: validatedResponse.location ?? "",
        reservation: {}
      }
    })

  } catch(e) {
    console.log("Internal Server Error")
    return NextResponse.json({
      Message: "Internal Server Error",
      errorMessage: e
    }, {
      status: 500
    })
  }
  return NextResponse.json(prismaOutput)
}
