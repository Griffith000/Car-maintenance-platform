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
    
    // Validate required fields
    if (!eventData.title || !eventData.start || !eventData.end) {
      return NextResponse.json(
        { success: false, message: "Missing required event data" },
        { status: 400 }
      );
    }
    
    // Validate user ID
    if (!eventData.userId) {
      return NextResponse.json(
        { success: false, message: "User ID is required" },
        { status: 400 }
      );
    }
    
    // Validate vehicle ID
    if (!eventData.vehicleId) {
      return NextResponse.json(
        { success: false, message: "Vehicle ID is required" },
        { status: 400 }
      );
    }
    
    // Check for time conflict with existing events in the database
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
    const newEvent = await prisma.reservation.create({
      data: {
        mobilePhone: eventData.mobilePhone || "+21600000000", // Default placeholder phone
        date: new Date(eventData.start),
        vehicleId: eventData.vehicleId,
        userId: eventData.userId,
        repairStatus: "PENDING",
        baseFee: eventData.baseFee,
        
      }
    });
    
    // Format the event for FullCalendar
    const formattedEvent: CalendarEvent = {
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
    };
    
    return NextResponse.json({
      success: true,
      event: formattedEvent,
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
