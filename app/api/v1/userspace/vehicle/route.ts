import { PrismaClient, Vehicle, RegTypes } from "@/app/generated/prisma/client";
import { withAccelerate } from '@prisma/extension-accelerate'
import { NextResponse, NextRequest } from "next/server";

export const dynamic = 'force-static'

// setting up the prisma client
const prisma = new PrismaClient().$extends(withAccelerate())

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
  let response: Vehicle | null = null;
  try {
    // if the local variable is set to true, make location input and the registration type is null, if the registration is 
    response = await prisma.vehicle.create({
      data: {
        vin: "1726384236123413",
        local: true,
        registration: "TUN MY ASS",
        registrationType: RegTypes.TUN,
        location: "France",
        reservation: {}
      }
    })
  } catch {
    console.log("Error creating the vehicule")
    return NextResponse.json({
      Message: "Error creating the vehicule"
    }, {
        status: 500
      })
  }
  return NextResponse.json({data: response})
}


/**
 * @openapi
 * tags:
 *   - name: Vehicles
 *     description: 🏎 Car registration and details
 *   - name: Users
 *     description: 🚴🏻 User account management
 *   - name: Reservation
 *     description: ⏰ make and manage reservations
 */


/**
 * @openapi
 * /api/v1/userspace/vehicle/{id}:
 *   get:
 *     tags: [Vehicles]  # <-- Assign to category
 *     summary: Get car details by VIN
 */
