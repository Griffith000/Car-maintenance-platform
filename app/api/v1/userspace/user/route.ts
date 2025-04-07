import { User } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
import { CreateUserDto } from "@/app/helpers/userspace/user/create-user.dto";
import { validate } from "@/app/helpers/shared/validate";

import prisma from '@/lib/prisma'

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
 *   post:
 *     summary: Add a new user to a database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *             properties:
 *               username:
 *                 type: string
 *                 minLength: 5 
 *               email:
 *                 type: string 
 *               phone: 
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [admin, peasant]
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:  
 *           application/json:
 *             example:
 *               success: true
 */


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
  try {
    let validatedResponse = validate(CreateUserDto, await request.json())
    await prisma.user.create({
      data: {
        username: validatedResponse.username,
        email: validatedResponse.email,
        phone: validatedResponse.phone,
        role: validatedResponse.role,
        image: validatedResponse.image,
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
  return NextResponse.json({
    data: {
      success: true
    }
  })
}
