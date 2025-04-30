import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { Reservation } from "@prisma/client";

interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  start: string;
  end: string;
  vehicleId?: string;
  userId?: string;
  extendedProps?: Record<string, any>;
}

export async function GET(request: Request) {
  let dbEvents;
  try {
    const session = await auth();
    const url = new URL(request.url);
    const startDate = url.searchParams.get('start');
    const endDate = url.searchParams.get('end');
    
    let whereConditions: any = {};
    
    if (startDate && endDate) {
      whereConditions.AND = [
        { start: { gte: new Date(startDate) } },
        { end: { lte: new Date(endDate) } }
      ];
    }
    
    const dbEvents = await prisma.reservation.findMany({
      where: whereConditions,
      orderBy: { date: 'asc' },
      include: {
        vehicle: true
      }
    });

    console.log(dbEvents);
    // before doing the fullcalendar stuff
    debugger;
    
    // Format events for FullCalendar
    const events = dbEvents.map((event: Reservation & { vehicle: { vin: string } }) => ({
      id: event.reservationId.toString(),
      title: `Reserved`,
      description: `Repair status: ${event.repairStatus}`,
      start: event.date.toISOString(),
      end: new Date(event.date.getTime() + 60 * 60 * 1000).toISOString(),
      vehicleId: event.vehicleId,
      userId: event.userId.toString(),
      extendedProps: {
        description: `Repair status: ${event.repairStatus}`,
        mobilePhone: event.mobilePhone,
        // Add flag to highlight the user's own events
        isCurrentUserEvent: session?.user?.id === event.userId.toString()
      }
    }));
    
    return NextResponse.json({
      success: true,
      events
    });
  } catch (error) {
    console.log(dbEvents);
    console.log(error)
    return NextResponse.json(
      { success: false, message: "Failed to fetch calendar events" },
      { status: 500 }
    );
  }
}
