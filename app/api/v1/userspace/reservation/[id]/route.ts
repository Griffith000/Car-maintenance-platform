// to set up auth js
import { Reservation } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextRequest, NextResponse } from "next/server";

// import prisma from "@/lib/prisma"

import prisma from "@/lib/prisma"
/**
 * @openapi
 * /api/v1/userspace/reservation/{id}:
 *   get:
 *     summary: Get reservation details by the id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The registration ID
 *     responses:
 *       200:
 *         description: Reservation Details
 *         content:
 *           application/json:
 *             examples:
 *               Reservation-Details:
 *                 summary: Local Reservation Details
 *                 value:
 *                   reservationId: "23"
 *                   mobilePhone: "23466237"
 *                   date: "some date that i need to test"
 *                   baseFee: 80
 *                   repairStatus: "DIAGNOSTIC"
 *                   vehicleId: "23435552324456" 
 *       404:
 *         description: Not found
 *         content:
 *           application/json:
 *             example:
 *               error: Reservation Not Found
 *   delete:
 *     summary: Delete a reservation by Id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Reservation ID number
 *     responses:
 *       200:
 *         description: Reservation deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               reservationId: "43"
 *               mobilePhone: "98772833"
 *               date: "some date that i need to test"
 *               baseFee: 90.234 
 *               repairStatus: "FAILURE"
 *               vehicleId: "123456789234" 
 *       404:
 *         description: Vehicle not found
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 error: "Reservation Not Found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               Message: "Internal Server Error"
 *               error: "Error details"
 * 
 *   patch:
 *     summary: Update reservation detail (only baseFee)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Resservation ID number
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - baseFee 
 *             properties:
 *               baseFee:
 *                 type: number 
 *     responses:
 *       200:
 *         description: Reservation updated successfully
 *         content:
 *           application/json:
 *             example: 
 *               reservationId: "66"
 *               mobilePhone: "54327238"
 *               date: "some date that i need to test"
 *               baseFee: 93.560
 *               repairStatus: "DIAGNOSTIC"
 *               vehicleId: "12345678923412344" 
 *       404:
 *         description: Reservation not found
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 error: "Reservation not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               Message: "Internal Server Error"
 *               error: "Error details"
 */

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }) {
  // this is where the authentication is needed
  let searchedReservation: Reservation | null;
  const { id } = await params;
  try {
    searchedReservation = await prisma.reservation.findFirstOrThrow({
      where: {
        reservationId: parseInt(id)
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

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  let reservationToDelete: Reservation | null = null;
  const { id } = await params;
  try {
    reservationToDelete = await prisma.reservation.delete({
      where: {
        reservationId: parseInt(id)
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


export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  let updatedReservation: Reservation | null = null;
  const { id } = await params
  try {
    const validateData: Reservation | null = await request.json()
    const { id } = await params;
    if (validateData === null || !validateData.baseFee) {
      return NextResponse.json({
        data: { error: "Missing required fields" }
      }, { status: 400 });
    }
    updatedReservation = await prisma.reservation.update({
      where: {
        reservationId: parseInt(id)
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
