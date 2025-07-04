// to set up auth js
import { Vehicle } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { validate } from "@/app/helpers/shared/validate";
import { UpdateVehicleDto } from "@/app/helpers/userspace/vehicle/dto/update-vehicle.dto";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma"

// to test swagger documentation
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
 *   delete:
 *     summary: Delete a vehicle by VIN
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Vehicle VIN number
 *     responses:
 *       200:
 *         description: Vehicle deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               vin: "1HGBH41JXMN109186"
 *               registration: "234TUN1234"
 *               registrationType: "TUN"
 *       404:
 *         description: Vehicle not found
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 error: "Vehicle Not Found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               Message: "Internal Server Error"
 *               error: "Error details"
 * 
 *   patch:
 *     summary: Update vehicle details
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Vehicle VIN number
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - local
 *             properties:
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
 *       200:
 *         description: Vehicle updated successfully
 *         content:
 *           application/json:
 *             example:
 *               vin: "1HGBH41JXMN109186"
 *               registration: "234TUN1234"
 *               registrationType: "TUN"
 *               location: "France"
 *       404:
 *         description: Vehicle not found
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 error: "Vehicle not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               Message: "Internal Server Error"
 *               error: "Error details"
 */

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  // this is where the authentication is needed
  let searchedVehicle: Vehicle | null;
  const { id } = await params
  // console.log(params.id)
  try {
    searchedVehicle = await prisma.vehicle.findFirstOrThrow({
      where: {
        vin: decodeURIComponent(id)
      }
    })
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            data: { error: "Vehicle Not Found" }
          }, { status: 404 });
      }
    }

    console.log(error);

    return NextResponse.json({
      Message: "Internal Server Error",
      error: error
    }, {
      status: 500
    })
  }
  return NextResponse.json(searchedVehicle)
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  let vehicleToDelete: Vehicle | null;
  const { id } = await params;
  try {
    vehicleToDelete = await prisma.vehicle.delete({
      where: {
        vin: decodeURIComponent(id)
      }
    })
  } catch (error) {
    console.log(error)
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            data: { error: "Vehicle Not Found" }
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
  return NextResponse.json(vehicleToDelete)
}


export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  let vehicle: Vehicle | null = null;
  const { id } = await params; 
  try {
    const validateData = validate(UpdateVehicleDto, await request.json())
    vehicle = await prisma.vehicle.update({
      where: {
        vin: decodeURIComponent(id)
      },
      data: {
        ...validateData
      }
    })
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        console.log("Vehicle not found");
        return NextResponse.json({
          data: {
            error: "Vehicle not found"
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
    return NextResponse.json(vehicle)
  }
}
