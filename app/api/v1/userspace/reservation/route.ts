import { Reservation } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
import { CreateReservationDto } from "@/app/helpers/userspace/reservation/create-reservation.dto";
import { validate } from "@/app/helpers/shared/validate";
import { auth } from "@/auth"
import prisma from "@/lib/prisma";

// import prisma from "@/lib/prisma"

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
 *               baseFee:
 *                 type: number 
 *               repairStatus:
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
    const reqBody = await request.json();
    // console.log(reqBody)
    let validatedResponse = validate(CreateReservationDto, reqBody);
    // console.log(validatedResponse)

    try {
      prismaOutput = await prisma.reservation.create({
        data: {
          // TODO: add the service selected by the user
          mobilePhone: validatedResponse.mobilePhone,
          date: validatedResponse.date,
          baseFee: validatedResponse.baseFee ?? 0,
          repairName: validatedResponse.repairName ?? "testRepair", // added the repair name string to the creation 
         repairStatus: validatedResponse.repairStatus,
          vehicleId: validatedResponse.vehicleId,
          userId: validatedResponse.userId //TODO: you should also handle the case when the user is not logged in
        }
      })
    } catch (error) {
      // Type the Prisma error correctly
      const prismaError = error as { name: string; code?: string; message: string };
      
      console.error("Prisma Error:", prismaError.name, prismaError.code);
      console.error("Error message:", prismaError.message);
      
      // Check for common Prisma errors
      if (prismaError.code === 'P2002') {
        return NextResponse.json({
          Message: "A reservation with this information already exists",
          error: prismaError.message
        }, { status: 409 }); // Conflict
      } else if (prismaError.code === 'P2003') {
        return NextResponse.json({
          Message: "Foreign key constraint failed. User or another referenced entity doesn't exist",
          error: prismaError.message
        }, { status: 400 }); // Bad Request
      }
      
      throw error; // Re-throw to be caught by outer catch
    }

  } catch (error) {
    console.error("Internal Server Error Details:", error);
    return NextResponse.json({
      Message: "Internal Server Error",
      errorMessage: error instanceof Error ? error.message : String(error)
    }, {
      status: 500
    })
  }
  return NextResponse.json({
    data:
      { message: "Reservation Booked Successflly" }
  })
}
