import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  start: string; 
  end: string;   
  vehicleId?: string;
  userId?: string;
  reservationId?: number;
  extendedProps?: Record<string, any>;
}

export async function POST(request: Request) {
  try {
    const eventData = await request.json();
    console.log('Received event data:', eventData);
    
    if (!eventData.title || !eventData.start || !eventData.end) {
      return NextResponse.json(
        { success: false, message: "Missing required event data" },
        { status: 400 }
      );
    }
    
    if (!eventData.userId) {
      return NextResponse.json(
        { success: false, message: "User ID is required" },
        { status: 400 }
      );
    }
    
    if (!eventData.vehicleId) {
      return NextResponse.json(
        { success: false, message: "Vehicle ID is required" },
        { status: 400 }
      );
    }
    
    const existingEvents = await prisma.reservation.findMany({
      where: {
        OR: [
          {
            date: {
              gte: new Date(eventData.start),
              lte: new Date(eventData.end)
            }
          }
        ]
      }
    });
    
    if (existingEvents.length > 0) {
      return NextResponse.json(
        { success: false, message: "Time slot already booked" },
        { status: 409 }
      );
    }
    
    // Create event in the database with proper FullCalendar compatible format
    /*const newEvent = await prisma.reservation.create({
      data: {
        mobilePhone: eventData.mobilePhone || "+21600000000", 
        date: new Date(eventData.start),
        vehicleId: eventData.vehicleId, // this is also a problem
        userId: eventData.userId, // this is a problem
        repairStatus: "PENDING",
        baseFee: eventData.baseFee,
      } // this has a foreign key constraint
    }); // this needs to be removed and readded to the confirmation diaglog actions
    
    // Format the event for FullCalendar
    /*const formattedEvent: CalendarEvent = {
      id: newEvent.reservationId.toString(),
      title: eventData.title || 'Appointment',
      description: eventData.description || '',
      start: newEvent.date.toISOString(),
      // Set end time to 1 hour after start time
      end: new Date(newEvent.date.getTime() + 60 * 60 * 1000).toISOString(),
      vehicleId: newEvent.vehicleId,
      userId: newEvent.userId.toString(),
      extendedProps: {
        description: eventData.description || '',
        mobilePhone: newEvent.mobilePhone
      }
    };*/
    
    return NextResponse.json({
      success: true,
      event: null, // testing its supporsed to be formatedevent
      message: "Event created successfully"
    });
  } catch (error) {
    console.error("Error creating calendar event:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create calendar event" },
      { status: 500 }
    );
  }
}
