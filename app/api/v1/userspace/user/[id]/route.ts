// to set up auth js with the user
import { Prisma, PrismaClient, User } from "@/app/generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate"
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient().$extends(withAccelerate())

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
      Message: "Error creating the user"
    }, {
      status: 500
    })
  }

  return NextResponse.json(
    { data: searchedUser ?? {} },
    { status: searchedUser ? 200 : 404 }
  );
}



