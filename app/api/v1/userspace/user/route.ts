import { PrismaClient, User, RegTypes } from "@/app/generated/prisma/client";
import { withAccelerate } from '@prisma/extension-accelerate'
import { NextResponse, NextRequest } from "next/server";

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
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export async function GET() {
  let listOfUsers: User[];
  try {
    listOfUsers = await prisma.user.findMany({});
  } catch {
    console.log("Something went wrong with our services (Error: COULDNT_GET_USERS\)");
    return NextResponse.json({
      Message: "Error retrieving Users"
    }, {
      status: 500
    })
  }
  return NextResponse.json(listOfUsers)
}

export async function POST(request: NextRequest) {
  // this will create a new user taking the request as an argument (TODO)
  // to implement the verification of an email in here
  let response: User | null = null;
  if (EMAIL_REGEX.test("string@jmail.com") === false) {
    return NextResponse.json({ data: { Message: "Email is in the wrong format. exiting..." }}, { status: 400 })
  }

  try {
    // if the local variable is set to true, make location input and the registration type is null, if the user is 
    response = await prisma.user.create({
      data: {
        username: "larry evil",
        email: "someone@gmail.com",
        phone: "777777777"
      }
    })
  } catch {
    console.log("Error creating the user")
    return NextResponse.json({
      Message: "Error creating the user"
    }, {
      status: 500
    })
  }
  return NextResponse.json({ data: response })
}
