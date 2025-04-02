import { PrismaClient, Vehicle, RegTypes, Reservation } from "@/app/generated/prisma/client";
import { withAccelerate } from '@prisma/extension-accelerate'
import { NextResponse, NextRequest } from "next/server";
import { CreateReservationDto } from "@/app/helpers/userspace/reservation/create-reservation.dto";
import { validate } from "@/app/helpers/shared/validate";

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



// setting up the prisma client
const prisma = new PrismaClient().$extends(withAccelerate())


export async function GET() {
  let listOfReservations: Reservation[];
  try {
    listOfReservations = await prisma.reservation.findMany({});
  } catch {
    console.error("Internal Server Error");
    return NextResponse.json({
      Message: "Internal Server Error"
    }, {
      status: 500
    })
  }
  return NextResponse.json(listOfReservations)
}

export async function POST(request: NextRequest) {
  let prismaOutput;
  try {
    let validatedResponse = validate(CreateReservationDto, await request.json());

    prismaOutput = await prisma.reservation.create({
      data: {
        mobilePhone: validatedResponse.mobilePhone,
        date: validatedResponse.date,
        baseFee: validatedResponse.baseFee ?? 0,
        repairStatus: validatedResponse.repairStatus,
        vehicleId: validatedResponse.vehicleId
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
