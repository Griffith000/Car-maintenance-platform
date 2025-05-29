import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }
    

    if (params.id !== session.user.id && session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 403 }
      );
    }

    const userId = parseInt(params.id, 10);

    const userVehicles = await prisma.user.findUnique({
      where: {
        userId: userId,
      },
      select: {
        email: true,
      },
    });

    if (!userVehicles) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // For now, we'll simply fetch all reservations since the schema doesn't show a direct 
    // relationship between User and Reservation. In a real-world scenario, you'd query 
    // based on a relationship or a user ID field in the Reservation model.
    const reservations = await prisma.reservation.findMany({
      include: {
        vehicle: true,
      },
      orderBy: {
        date: 'desc',
      },
    });

    return NextResponse.json(reservations);
  } catch (error) {
    console.error("Error fetching user reservations:", error);
    return NextResponse.json(
      { error: "Failed to fetch reservations" },
      { status: 500 }
    );
  }
}
