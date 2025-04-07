import { Vehicle } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
import { CreateVehicleDto } from "@/app/helpers/userspace/vehicle/create-vehicle.dto";
import { validate } from "@/app/helpers/shared/validate";
import prisma from "@/lib/prisma"

export const dynamic = 'force-static'

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
 *                 summary: The list of available cars
 *                 value:
 *                   - vehicleId: "123412342341234234"
 *                     registration: "234TUN1234"
 *                     registrationType: "TUN"
 *                   - vehicleId: "123412342341234234"
 *                     location: "France"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Internal server error
 *   post:
 *     summary: Add a new vehicle to a database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - vin
 *               - local
 *             properties:
 *               vin:
 *                 type: string
 *                 minLength: 17
 *                 maxLength: 17
 *                 pattern: "^[A-HJ-NPR-Z0-9]{17}$"
 *               local:
 *                 type: boolean
 *               registration:
 *                 type: string
 *               registrationType:
 *                 type: string
 *                 enum: [TUN, RS, TRAC, PAT, CMD, CD, MD, MC, CC, REM, AA, ES, PE, IT]
 *               location:
 *                 type: string
 *     responses:
 *       201:
 *         description: Vehicle created successfully
 *         content:  # Optional but recommended
 *           application/json:
 *             example:
 *               success: true
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
    if (!validatedResponse.local) {
      validatedResponse.registration = undefined;
      validatedResponse.registrationType = undefined;
    } else if (validatedResponse.local) {
      validatedResponse.location = undefined;
    }
    
    console.log(validatedResponse.registrationType);

    prismaOutput = await prisma.vehicle.create({
      data: {
        vin: validatedResponse.vin as string,
        local: validatedResponse.local,
        registration: validatedResponse.registration ?? "",
        registrationType: validatedResponse.registrationType,
        location: validatedResponse.location ?? "",
        reservation: {}
      }
    })

  } catch (error) {
    console.log("Internal Server Error")
    return NextResponse.json({
      Message: "Internal Server Error",
      errorMessage: error
    }, {
      status: 500
    })
  }
  return NextResponse.json(prismaOutput)
}
