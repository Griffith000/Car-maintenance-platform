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

  // Simulate available time slots for the selected date
  useEffect(() => {
    if (selectedDate) {
      // In a real app, this would be fetched from an API
      const times = [
        '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
        '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'
      ];
      setAvailableTimes(times);
    } else {
      setAvailableTimes([]);
    }
    setSelectedTime(null);
  }, [selectedDate]);

  const handleDateSelect = (info: any) => {
    const date = new Date(info.dateStr);
    // Don't allow past dates
    if (date.setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0)) {
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

  // Only allow booking on weekdays (optional)
  const isDateSelectable = (date: Date) => {
    const day = date.getDay();
    // 0 = Sunday, 6 = Saturday
    return day !== 0 && day !== 6;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
     
      
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
              right: 'dayGridMonth,timeGridWeek'
            }}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            events={[]} // In a real app, you would put unavailable slots here
            dateClick={handleDateSelect}
            validRange={validRange}
            height="auto"
            selectAllow={(selectInfo) => isDateSelectable(selectInfo.start)}
            dayCellClassNames={(arg) => {
              if (selectedDate && 
                  arg.date.getDate() === selectedDate.getDate() && 
                  arg.date.getMonth() === selectedDate.getMonth() && 
                  arg.date.getFullYear() === selectedDate.getFullYear()) {
                return ['bg-primary/15', 'text-primary-foreground', 'font-bold'];
              }
              return [];
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
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <h3 className="font-medium">
              Available Times for {selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </h3>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
            {availableTimes.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                className="h-10"
                onClick={() => handleTimeSelect(time)}
              >
                {time}
              </Button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-4"
          >
            <Button 
              onClick={handleNext} 
              disabled={!selectedTime}
              className="w-full group"
            >
              <span className="flex items-center gap-2">
                Continue to Contact Information
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
