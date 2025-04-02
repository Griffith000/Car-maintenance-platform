import { PrismaClient, Vehicle, RegTypes, Reservation } from "@/app/generated/prisma/client";
import { withAccelerate } from '@prisma/extension-accelerate'
import { NextResponse, NextRequest } from "next/server";
import { CreateReservationDto } from "@/app/helpers/userspace/reservation/create-reservation.dto";
import { validate } from "@/app/helpers/shared/validate";
import { vehicles } from "@/app/services/data";

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
