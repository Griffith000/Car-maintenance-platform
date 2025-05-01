import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import { calendar_v3 } from 'googleapis';

const calendar = google.calendar('v3');

// Initialize the Google Calendar API client
const getAuth = () => {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    throw new Error('Missing Google Calendar credentials. Please check GOOGLE_CLIENT_EMAIL and GOOGLE_PRIVATE_KEY in .env.local');
  }

  console.log('Initializing Google Calendar API with client_email:', clientEmail);
  
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
  });

  return auth;
};

export async function GET() {
  try {
    const calendarId = process.env.GOOGLE_CALENDAR_ID;
    if (!calendarId) {
      throw new Error('Calendar ID not found. Please check GOOGLE_CALENDAR_ID in .env.local');
    }

    // console.log('Using calendar ID:', calendarId);
    
    const auth = getAuth();
    const now = new Date();
    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(now.getMonth() + 3);

    // console.log('Fetching events from:', now.toISOString(), 'to:', threeMonthsFromNow.toISOString());

    // First, let's get calendar details
    const calendarResponse = await calendar.calendars.get({
      auth,
      calendarId
    });

    // console.log('Calendar Details:', {
    //   summary: calendarResponse.data.summary,
    //   description: calendarResponse.data.description,
    //   timeZone: calendarResponse.data.timeZone
    // });

    // Now fetch the events
    const response = await calendar.events.list({
      auth,
      calendarId,
      timeMin: now.toISOString(),
      timeMax: threeMonthsFromNow.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
      showDeleted: false
    });

    // console.log('API Response:', {
    //   itemsCount: response.data.items?.length || 0,
    //   items: response.data.items?.map(item => ({
    //     summary: item.summary,
    //     start: item.start,
    //     end: item.end
    //   }))
    // });

    const holidays = response.data.items?.map((event: calendar_v3.Schema$Event) => ({
      start: event.start?.dateTime || event.start?.date,
      end: event.end?.dateTime || event.end?.date,
      summary: event.summary,
    })) || [];

    // console.log('Found holidays:', holidays);

    return NextResponse.json({ 
      holidays,
      calendarInfo: {
        summary: calendarResponse.data.summary,
        description: calendarResponse.data.description,
        timeZone: calendarResponse.data.timeZone
      }
    });
  } catch (error) {
    console.error('Error fetching holidays:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      hasClientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
      hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY
    });
    
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to fetch holidays',
        details: {
          calendarId: process.env.GOOGLE_CALENDAR_ID,
          hasClientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
          hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY
        }
      },
      { status: 500 }
    );
  }
}
