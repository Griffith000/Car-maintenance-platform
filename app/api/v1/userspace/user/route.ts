import { PrismaClient, User, RegTypes } from "@/app/generated/prisma/client";
import { withAccelerate } from '@prisma/extension-accelerate'
import { NextResponse, NextRequest } from "next/server";
import { CreateUserDto } from "@/app/helpers/userspace/user/create-user.dto";
import { validate } from "@/app/helpers/shared/validate";

export const dynamic = 'force-static'

/**
 * @openapi
 * /api/v1/userspace/user:
 *   get:
 *     summary: Get all available user details
 *     responses:
 *       200:
 *         description: List of Car Details
 *         content:
 *           application/json:
 *             examples:
 *               user-list:
 *                  summary: The list of available cars
 *                  value:
 *                   - userId: "12345678"
 *                     username: "Griffith00"
 *                     email: "ahmed@gmail.com"
 *                     phone: "21467333"
 *                   - userId: "12873412"
 *                     username: "SlamZDank"
 *                     email: "khalil@gmail.com"
 *                     phone: "1234123"
 *       500:
 *         description: 
 *         content:
 *           application/json:
 *             example:
 *               error: Internal server error
 */
// setting up the prisma client
const prisma = new PrismaClient().$extends(withAccelerate())

export async function GET() {
  let listOfUsers: User[];
  try {
    listOfUsers = await prisma.user.findMany({});
  } catch {
    console.log("Internal Server Error");
    return NextResponse.json({
      Message: "Internal Server Error"
    }, {
  status: 500
    })
  }
  return NextResponse.json(listOfUsers)
}

export async function POST(request: NextRequest) { // to rewrite
  // this will create a new user taking the request as an argument (TODO)
  // to implement the verification of an email in here
  let prismaOutput;
  try {
    let validatedResponse = validate(CreateUserDto, await request.json())
    prismaOutput = await prisma.user.create({
      data: {
        username: validatedResponse.username,
        email: validatedResponse.email,
        phone: validatedResponse.phone,
        role: validatedResponse.role,
      }
    })
  } catch (error) {
    console.log("Internal Server Error")
    return NextResponse.json({
      Message: "Internal server Error",
      errorMessage: error
    }, {
        status: 500
      })
  }
}



