// to set up auth js
import { PrismaClient, Reservation } from "@/app/generated/prisma/client";
import { PrismaClientKnownRequestError } from "@/app/generated/prisma/client/runtime/library";
import { withAccelerate } from "@prisma/extension-accelerate"
import { NextRequest, NextResponse } from "next/server";

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

const prisma = new PrismaClient().$extends(withAccelerate())

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }) {
  // this is where the authentication is needed
  let searchedReservation: Reservation | null;
  try {
    searchedReservation = await prisma.reservation.findFirstOrThrow({
      where: {
        reservationId: parseInt(params.id)
      }
    })
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            data: { error: "Reservation Not Found" }
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
  return NextResponse.json(searchedReservation)
}

export async function DELETE({ params }: { params: { id: string } }) {
  let reservationToDelete: Reservation | null = null;
  try {
    reservationToDelete = await prisma.reservation.delete({
      where: {
        reservationId: parseInt(params.id)
      }
    })
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            data: { error: "Reservation Not Found" }
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
  return NextResponse.json(reservationToDelete)
}


export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  let updatedReservation: Reservation | null = null;
  try {
    const validateData: Reservation | null = await request.json()
    if (validateData === null || !validateData.baseFee) {
      return NextResponse.json({
        data: { error: "Missing required fields" }
      }, { status: 400 });
    }
    updatedReservation = await prisma.reservation.update({
      where: {
        reservationId: parseInt(params.id)
      },
      data: {
        baseFee: validateData.baseFee
      }
    })
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        console.log("Reservation not found");
        return NextResponse.json({
          data: {
            error: "Reservation not found"
          }
        }, { status: 404 })
      }
      console.log("Internal Server Error");
      return NextResponse.json({
        Message: "Internal Server Error",
        error: error
      }, {
        status: 500
      })
    }
  } finally {
    return NextResponse.json(updatedReservation)
  }
}
