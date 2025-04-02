// to set up auth js with the user
import { Prisma, PrismaClient, User } from "@/app/generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate"
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient().$extends(withAccelerate())


// we might use zod for form validation and requestValidation

/**
 * @openapi
 * /api/v1/userspace/user/{id}:
 *   get:
 *     summary: Get user credentials by id
 *     parameters:
 *       - in: path
 *         name: id  # Must match {id} in the path
 *         schema:
 *           type: string  # Changed to string (VINs are alphanumeric)
 *         required: true
 *         description: The user identifier
 *     responses:
 *       200:
 *         description: User details
 *         content:
 *           application/json:
 *             examples:
 *               user:
 *                 summary: User details (Minimal)
 *                 value:
 *                   userId: "12345678"
 *                   username: "Griffith00"
 *                   email: "ahmed@gmail.com"
 *                   phone: "21467333"
 *       404:
 *         description: Not found
 *         content:
 *           application/json:
 *             example:
 *               error: User Not Found
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               error: Internal Server Error
 */

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }) {
  // this is where the authentication is needed
  let searchedUser: User | null;
  try {
    searchedUser = await prisma.user.findFirst({
      where: {
        userId: parseInt(params.id)
      }
    })
  } catch {
    console.log("Error with specific car retrieval Error")
    return NextResponse.json({
      error: "Internal Server Error"
    }, {
      status: 500
    })
  }

  return NextResponse.json(
    {
      data: searchedUser ?? {
        error: "User Not Found"
      }
    },
    { status: searchedUser ? 200 : 404 }
  );
}

export async function DELETE(
  { params }: { params: { id: number } }
) {
  let userToDelete: User | null;
  try {
    userToDelete = await prisma.user.delete({
      where: {
        userId: params.id
      }
    })
  } catch (e) {
    console.log("Internal Server Error")
    return NextResponse.json({
      error: "Internal Server Error"
    }, {
        status: 500
      })
  }
  if (userToDelete === null) {
    return NextResponse.json({
      message: "User not found"
    }, {
        status: 404
      })
  }
}

/* patch needs to be made functional later
export async function PATCH(request: NextRequest, { params }: { params: {id: number }}){
  const newUserCredentials: User | null = await request.json();

  let userToPatch: User | null;
  try{
    userToPatch = await prisma.user.update({
      where: {
        userId: params.id
      },
      data: {
        // TODO, USE ZOD
      }
    })
  }
} 
*/
