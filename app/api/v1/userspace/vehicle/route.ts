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
  // this will create a new vehicle taking the request as an argument (TODO)
  let response: Vehicle | null = validate(CreateVehicleDto, await request.json());
  try {
    // if the local variable is set to true, make location input and the registration type is null, if the registration is 
    const data: Vehicle = await request.json()
    if (!data.vin || !data.local) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    console.log(data.vin, data.vin)
    

    // initiates a new route
    response = await prisma.vehicle.create({
      data: {
        vin: data.vin as string,
        local: data.local,
        registration: data.registration ?? "",
        location: data.location ?? "",
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
  return NextResponse.json({ data: response })
}
