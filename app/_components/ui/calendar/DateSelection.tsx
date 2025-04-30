'use client';

import { useState, useEffect } from 'react';
import { useBookingStore } from '@/app/stores/bookingStore';
import { useUserStore } from '@/app/stores/userStore';
import { Button } from '@/components/ui/button';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';
import { useMutation, useQuery } from '@tanstack/react-query';
import Loading from '@/app/_components/ui/calendar/loading';
import axios from 'axios';
import { bookingStore } from '@/app/stores/bookingStore';


type EventData = {
  title: string;
  description: string;
  start: string;
  end: string;
  vehicleId: string;
  userId: number | null;
  mobilePhone?: string;
  baseFee?: number;
};

export default function DateSelection() {
  const { selectedDate, setSelectedDate, setStep, selectedVehicle } = useBookingStore(); 
  const { userId } = useUserStore();
  const {vehicleData}= useBookingStore();
  const vehicleId = vehicleData?.vin;
  const [holidays, setHolidays] = useState<any[]>([]);
  
  // Define the addEvent mutation outside of event handlers
  const addEventMutation = useMutation({
    mutationFn: async (eventData: EventData) => {
      console.log('Sending event data:', JSON.stringify(eventData));
      try {
        const response = await axios.post('/api/v1/calendar/add-event', eventData);
        console.log('Server response:', response.data);
        return response.data;
      } catch (error: any) {
        console.error('Axios error details:', error.response?.data || 'No response data');
        throw error;
      }
    },
    onSuccess: (data) => {
      console.log('Event created:', data);
    },
    onError: (error) => {
      console.error('Error creating event:', error);
      setSelectedDate(undefined);
    }
  });
  
  const handleNext = () => {
    if (selectedDate) {
      setStep(4);
    }
  };
  const isHoliday = (date: Date) => {
    return holidays.some(holiday => {
      const holidayDate = new Date(holiday.start);
      return holidayDate.getDate() === date.getDate() &&
        holidayDate.getMonth() === date.getMonth() &&
        holidayDate.getFullYear() === date.getFullYear();
    });
  };

  
  useEffect(() => {
    if (selectedDate) {
      // In a real app, this would be fetched from your API
    } else {
    }
  }, [selectedDate]);



  const handleDateSelect = async (info: any) => {
    const startDate = new Date(info.startStr);
    const endDate = new Date(info.endStr);
    
    // Don't allow past dates or holidays
    const date1 = new Date(startDate);
    if (date1.setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0) && !isHoliday(date1)) {
      // Set the selected date in the booking store
      setSelectedDate(startDate);
      
      try {
        // Create a temporary event for the selected timeslot
        console.log('User ID from store:', userId, 'type:', typeof userId);
        console.log('Vehicle ID from store:', selectedVehicle, 'type:', typeof selectedVehicle);
        
        const eventData: EventData = {
          title: 'Your Appointment',
          description: 'Tentative booking',
          start: info.startStr,
          end: info.endStr,
          vehicleId: vehicleId || '',
          userId: userId,
          mobilePhone: "+21600000000", // Default phone number
          baseFee: 0 // Default base fee
        };
        
        console.log('Final event data:', eventData);
        
        // Use the mutation defined at the component level
        addEventMutation.mutate(eventData, {
          onSuccess: () => {
            console.log('Event created successfully');
          },
          onError: (err) => {
            console.log('Error creating calendar event:', err);
          }
        });
      } catch (error) {
        console.error('Error creating calendar event:', error);
        setSelectedDate(undefined);
      }
    }
  };


  // Calculate next 60 days as valid dates
  const validRange = { 
    start: new Date(),
    end: new Date(new Date().setDate(new Date().getDate() + 60))
  };

  // Only allow booking on weekdays (excluding holidays)
  const isDateSelectable = (dateStart: Date, dateEnd: Date) => {
    const oneHour = 60 * 60 * 1000;
    const day = dateStart.getDay();
    const diffInMs = dateEnd.getTime() - dateStart.getTime();
    const diffInH = Math.round(diffInMs / oneHour)
    // 0 = Sunday, 6 = Saturday
    const criteria = day !== 0 && day !== 6 && !isHoliday(dateStart) && diffInH === 1;

    if (!criteria) {
      setSelectedDate(undefined);
    }

    return criteria
  };

  const removeSelection = (info: any) => {
    // Safely handle cases where jsEvent might be null
    if (!info || !info.jsEvent) {
      setSelectedDate(undefined);
      return;
    }
    
    // Get the target element
    const element = info.jsEvent.target;
    
    // If the user clicked on a time slot or event, clear the selection
    if (element && (element.className === "fc-event-time" || element.closest('.fc-event'))) {
      setSelectedDate(undefined);   
    }
  }

  // Define a query for reservation events outside the getEvents function
  const { data: reservationEvents = [] } = useQuery({
    queryKey: ['reservations'],
    queryFn: async () => {
      try {
        const response = await fetch('/api/v1/calendar/get-events');
        const data = await response.json();
        return data.success ? data.events : [];
      } catch (error) {
        console.error("Error fetching reservation events:", error);
        return [];
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Get events for the calendar
  const getEvents = () => {
    // Combine holidays and reservations
    const holidayEvents = holidays.map((holiday) => ({
      title: holiday.summary || 'Holiday',
      start: holiday.start,
      end: holiday.end,
      allDay: true,
      display: 'background',
      backgroundColor: 'rgba(239, 68, 68, 0.1)', // red-500 with opacity
      classNames: 'holiday-event',
    }));
    
    // Transform reservation events for display
    const bookedSlots = (reservationEvents || []).map((event: any) => ({
      ...event,  // This already has id, start, end
      title: event.title || 'Reserved',
      color: '#3b82f6', // Blue color for reservations
      className: 'reserved-timeslot',
      display: 'block'
    }));
    
    // Highlight the user's selected slot if it exists
    interface UserSelectionEvent {
      title: string;
      start: string;
      end: string;
      color: string;
      className: string;
    }
    
    let userSelection: UserSelectionEvent[] = [];
    if (selectedDate) {
      const selectionEnd = new Date(selectedDate);
      selectionEnd.setHours(selectionEnd.getHours() + 1);
      
      userSelection = [{
        title: 'Your Selection',
        start: selectedDate.toISOString(),
        end: selectionEnd.toISOString(),
        color: '#10b981', // Green color for user selection
        className: 'user-selection'
      }];
    }
    
    return [...holidayEvents, ...bookedSlots, ...userSelection];
  };
  // loading

  // Fetch holidays from Google Calendar
  const { isPending, isError, error } = useQuery({
    queryKey: ["holidays"],
    queryFn: async () => {
      try {
        const response = await fetch('/api/v1/holidays');
        const data = await response.json();
        if (data?.holidays) {
          const holidayDates = data.holidays;
          setHolidays(holidayDates);
        }
        return data?.holidays || [];
      } catch (error) {
        console.error('Error fetching holidays:', error);
        return [];
      }
    }
  })
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div >
      <style jsx global>{`
        .holiday-event {
          pointer-events: none;
        }
        .fc .fc-day-disabled {
          background: rgba(239, 68, 68, 0.1);
          cursor: not-allowed;
        }
        .fc .fc-day-today {
          background: rgba(var(--primary), 0.1) !important;
        }
        .fc .fc-day-future:not(.fc-day-disabled):hover {
          background: rgba(var(--primary), 0.05);
        }
        .fc .selected-date {
          background: rgba(var(--primary), 0.15) !important;
          font-weight: bold;
        }
        .fc .user-selection {
          background-color: rgba(16, 185, 129, 0.2) !important;
          border-color: rgba(16, 185, 129, 0.5) !important;
          color: #047857 !important;
          font-weight: bold;
        }
        .fc .reserved-timeslot {
          background-color: rgba(59, 130, 246, 0.2) !important;
          border-color: rgba(59, 130, 246, 0.5) !important;
          color: #1d4ed8 !important;
          cursor: not-allowed;
        }
        .fc .fc-timegrid-slot {
          height: 42px !important;
        }
        .fc {
          padding: 15px;
        }

      `}</style>

      <div className="flex items-center gap-2 mb-2">
        <Calendar className="h-5 w-5 text-primary" />
        <h3 className="font-medium">Select a Date</h3>
      </div>
      {isPending ? <Loading /> : (
        <Card className="border shadow-sm">
          <CardContent className="p-0">
          
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                contentHeight="auto"
                allDaySlot={false}
                eventStartEditable={false}
                eventDurationEditable={false}
                slotLabelFormat={{
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false
                }}
                eventTimeFormat={{
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false
                }}
                headerToolbar={{
                  left: 'prev,next',
                  center: '',
                  right: 'today',
                }}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                selectConstraint={{
                  startTime: '09:00',
                  endTime: '19:00'
                }}
                slotDuration="01:00:00"
                snapDuration="01:00:00"
                slotMinTime="09:00:00"
                slotMaxTime="19:00:00"
                dragScroll={false}
                selectOverlap={false}
                validRange={validRange}
                selectAllow={(selectInfo) => {
                  // First check if the date is selectable (not a holiday, weekend, etc)
                  if (!isDateSelectable(selectInfo.start, selectInfo.end)) {
                    return false;
                  }
                  
                  // Then check if the time slot is already reserved
                  const reservedSlots = reservationEvents || [];
                  const isReserved = reservedSlots.some((event: any) => {
                    const eventStart = new Date(event.start);
                    const eventEnd = new Date(event.end);
                    return (
                      (selectInfo.start >= eventStart && selectInfo.start < eventEnd) ||
                      (selectInfo.end > eventStart && selectInfo.end <= eventEnd) ||
                      (selectInfo.start <= eventStart && selectInfo.end >= eventEnd)
                    );
                  });
                  
                  return !isReserved;
                }}
                unselect={removeSelection}

                select={handleDateSelect}
                events={getEvents()}
                dayCellDidMount={(arg) => {
                  // Add disabled class to holiday dates
                  if (isHoliday(arg.date)) {
                    arg.el.classList.add('fc-day-disabled');
                  }
                  // Add selected class to the selected date
                  if (selectedDate &&
                    arg.date.getDate() === selectedDate.getDate() &&
                    arg.date.getMonth() === selectedDate.getMonth() &&
                    arg.date.getFullYear() === selectedDate.getFullYear()) {
                    arg.el.classList.add('selected-date');
                  }
                }}
              />

          </CardContent>
        </Card>
      )}


      <div className="flex justify-end mt-6">
        <Button
          onClick={handleNext}
          disabled={!selectedDate}
          className="flex items-center gap-2"
        >
          Next
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

    </div>
  );
}
