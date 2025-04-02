import { PrismaClient, Vehicle, RegTypes, Reservation } from "@/app/generated/prisma/client";
import { withAccelerate } from '@prisma/extension-accelerate'
import { NextResponse, NextRequest } from "next/server";
import { CreateReservationDto } from "@/app/helpers/userspace/reservation/create-reservation.dto";
import { validate } from "@/app/helpers/shared/validate";

/**
 * @openapi
 * /api/v1/userspace/reservation:
 *   get:
 *     summary: Get all available reservation details (id)
 *     responses:
 *       200:
 *         description: List of reservation Details
 *         content:
 *           application/json:
 *             examples:
 *               reservations-list:
 *                  summary: The list of available reservations
 *                  value:
 *                    - reservationId: "1"
 *                      mobilePhone: "23466237"
 *                      date: "some date that i need to test"
 *                      baseFee: 85.34
 *                      repairStatus: "SUCCESS"
 *                      vehicleId: "123412342341234234"
 *                    - reservationId: "63"
 *                      mobilePhone: "25532433"
 *                      date: "some date that i need to test"
 *                      baseFee: 1238.34
 *                      repairStatus: "SUCCESS"
 *                      vehicleId: "123423455553322"
 *                    - reservationId: "23"
 *                      mobilePhone: "23466237"
 *                      date: "some date that i need to test"
 *                      baseFee: 80
 *                      repairStatus: "DIAGNOSTIC"
 *                      vehicleId: "23435552324456"
 *       500:
 *         description: 
 *         content:
 *           application/json:
 *             example:
 *               error: Internal server error
 *   post:
 *     summary: Add a new reservation to a database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - mobilePhone
 *               - date
 *               - vehicleId
 *             properties:
 *               mobilePhone:
 *                 type: string 
 *               date:
 *                 type: string 
 *               basefee:
 *                 type: number 
 *               registrationType:
 *                 type: string
 *                 enum: ["DIAGNOSTIC", "REPAIR", "SUCCESS", "FAILURE"]
 *               vehicleId:
 *                 type: string
 *                 minlength: 17
 *                 maxlength: 17
 *                 pattern: "^[A-HJ-NPR-Z0-9]{17}$"
 *     responses:
 *       201:
 *         description: Reservation booked successfully
 *         content:  
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
  return NextResponse.json({data: 
    { message: "Reservation Booked Successflly" }
  })
}
