import { PrismaClient } from '../generated/prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient().$extends(withAccelerate())

export async function GET(request: Request) {
  console.log("testing this is a pain")
  await prisma.user.create({
    data: {
      name: "Johhny",
      email: "ahmedJohnny@gmail.com",
    }
  })
  console.log("Added the user to the database")
  return JSON.stringify({
    Message: "Success!"
  })
}
// to figure out once i have set up the prisma orm
