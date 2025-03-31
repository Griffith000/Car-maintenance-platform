// to set up auth js
import { PrismaClient, Vehicle } from "@/app/generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate"
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient().$extends(withAccelerate())


// to test swagger documentation
/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }) {
  // this is where the authentication is needed
  let searchedCar: Vehicle | null;
  try {
    searchedCar = await prisma.vehicle.findFirst({
      where: {
        vin: params.id
      }
    })
  } catch {
    console.log("Error with specific car retrieval Error")
    return NextResponse.json({
      Message: "Error creating the vehicule"
    }, {
      status: 500
    })
  }

  return NextResponse.json(
    { data: searchedCar ?? {} },
    { status: searchedCar ? 200 : 404 }
  );
}

