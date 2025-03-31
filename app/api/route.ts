import { PrismaClient } from '../generated/prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate'
import { NextResponse } from 'next/server';

export const dynamic = 'force-static'

const prisma = new PrismaClient().$extends(withAccelerate())

// these are some test functions to get used to api calling in nextjs.
// this is where we store some api calls that are availabe in general
//
//
// SEEDING THE SLAMA WAY
export async function GET(request: Request) {
  console.log("testing this is a pain")
  try {
    await prisma.user.create({
      data: {
        username: "notSOJohnen",
        email: "ahmedJohnny@gmail.com",
      }
    })
  } catch {
    console.log("welp very sad")
    return NextResponse.json({
      Message: "Error, we didn't add to the database, server error!"
    }, { status: 500 })
  }
  console.log("Added the user to the database")
  return NextResponse.json({
    Message: "Successfully added to the database."

  })
}
// to figure out once i have set up the prisma orm
