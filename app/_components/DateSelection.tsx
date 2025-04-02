'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useBookingStore } from '@/app/stores/bookingStore';
import { Button } from '@/components/ui/button';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function DateSelection() {
  const { selectedDate, setSelectedDate, setStep } = useBookingStore();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [holidays, setHolidays] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Generate time slots from 9am to 11pm
  const generateTimeSlots = () => {
    const slots: string[] = [];
    for (let hour = 9; hour < 23; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      slots.push(`${hour.toString().padStart(2, '0')}:30`);
    }
    return slots;
  };

  // Check if a date is a holiday
  const isHoliday = (date: Date) => {
    return holidays.some(holiday => {
      const holidayDate = new Date(holiday.start);
      return holidayDate.getDate() === date.getDate() &&
             holidayDate.getMonth() === date.getMonth() &&
             holidayDate.getFullYear() === date.getFullYear();
    });
  };

  // Simulate available time slots for the selected date
  useEffect(() => {
    if (selectedDate) {
      // In a real app, this would be fetched from your API
      const times = generateTimeSlots();
      setAvailableTimes(times);
    } else {
      setAvailableTimes([]);
    }
    setSelectedTime(null);
  }, [selectedDate]);

  // Fetch holidays from Google Calendar
  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await fetch('/api/holidays');
        const data = await response.json();
        
        if (data.holidays) {
          const holidayDates = data.holidays;
          setHolidays(holidayDates);
        }
      } catch (error) {
        console.error('Error fetching holidays:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHolidays();
  }, []);

  const handleDateSelect = (info: any) => {
    const date = new Date(info.dateStr);
    // Don't allow past dates or holidays
    if (date.setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0) && !isHoliday(date)) {
      setSelectedDate(date);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    
    if (selectedDate) {
      const dateWithTime = new Date(selectedDate);
      const [hours, minutes] = time.split(':').map(Number);
      dateWithTime.setHours(hours, minutes);
      setSelectedDate(dateWithTime);
    }
  };

  const handleNext = () => {
    console.log('handleNext called', { selectedDate, selectedTime });
    if (selectedDate && selectedTime) {
      console.log('Proceeding to next step');
      setStep(4);
    }
  };

  // Calculate next 60 days as valid dates
  const validRange = {
    start: new Date(),
    end: new Date(new Date().setDate(new Date().getDate() + 60))
  };

  // Only allow booking on weekdays (excluding holidays)
  const isDateSelectable = (date: Date) => {
    const day = date.getDay();
    // 0 = Sunday, 6 = Saturday
    return day !== 0 && day !== 6 && !isHoliday(date);
  };

  // Get events for the calendar
  const getEvents = () => {
    return holidays.map((holiday) => ({
      title: holiday.summary || 'Holiday',
      start: holiday.start,
      end: holiday.end,
      allDay: true,
      display: 'background',
      backgroundColor: 'rgba(239, 68, 68, 0.1)', // red-500 with opacity
      classNames: 'holiday-event',
      extendedProps: {
        isHoliday: true
      }
    }));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
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
      `}</style>

      <div className="flex items-center gap-2 mb-2">
        <Calendar className="h-5 w-5 text-primary" />
        <h3 className="font-medium">Select a Date</h3>
      </div>
      
      <Card className="border shadow-sm">
        <CardContent className="p-0">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            selectConstraint={{
              startTime: '09:00',
              endTime: '23:00'
            }}
            slotMinTime="09:00:00"
            slotMaxTime="23:00:00"
            selectOverlap={false}
            validRange={validRange}
            selectAllow={(selectInfo) => isDateSelectable(selectInfo.start)}
            dateClick={handleDateSelect}
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

      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="font-medium">Select a Time</h3>
            </div>
            
            <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
              {availableTimes.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  className={`w-full ${selectedTime === time ? 'bg-primary text-primary-foreground' : ''}`}
                  onClick={() => handleTimeSelect(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button
              onClick={handleNext}
              disabled={!selectedDate || !selectedTime}
              className="flex items-center gap-2"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
