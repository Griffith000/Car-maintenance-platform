'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, AlertCircle, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '@/app/data/services';
import { useBookingStore } from '@/app/stores/bookingStore';
import { useUserStore } from '@/app/stores/userStore';
import { Card, CardContent } from '@/components/ui/card';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { User, Vehicle } from '@prisma/client';
import { toast } from 'sonner';
import { useState } from 'react';
import { RepairStatus } from '@prisma/client';
import { Play } from 'next/font/google';

export default function FinalConfirmation() {
  const {
    selectedService,
    vehicleData,
    selectedDate,
    contactDetails,
    setStep,
  } = useBookingStore();

  const {
    userId,
    email,
    name,
    // image, something 
  } = useUserStore();

  const [isEditing, setIsEditing] = useState({
    vehicle: false,
    service: false,
    date: false,
    contact: false
  });

  const serviceName = services.find(s => s.id === selectedService)?.name || 'Service';

  const formattedDate = selectedDate
    ? `${selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}, ${selectedDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`
    : 'Date not selected';


  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      if (!contactDetails) {
        throw new Error('Contact details are missing');
      }

      // upon clicking on the button the application needs to create
      // a new user if the field is empty, create a new vehicle if the 
      // field is empty, and assign their keys to the reservation data

      const a_user = await axios.get(`/api/v1/userspace/user/${userId}`)
        .then((ax_resp) => {
          // Return existing user if found
          return ax_resp.data;
        })
        .catch(async (error) => {
          if (error.response?.status === 404) {
            // Create new user only if not found
            const userData: User = {
              userId: userId ?? 0,
              email: email ?? "error@error.com",
              role: "PEASANT",
              image: null,
              username: "johnny doe", 
              phone: "123456778" 
            };

            try {
              console.log("Creating new user in database");
              const response = await axios.post("/api/v1/userspace/user", userData);
              return response.data; 
            } catch (postError) {
              console.error("User creation failed:", postError);
              throw new Error("Failed to create new user"); 
            }
          }
          // Re-throw other errors
          throw error;
        });


      const a_car = await axios.get(`/api/v1/userspace/vehicle/${vehicleData?.vin}`)
        .then(async (ax_resp) => {
          return ax_resp.data;
        })
        .catch(async (error) => {
          if (error.response?.status === 404) {
            // Create new vehicle only on 404 error
            const vehicleDetails: Vehicle = {
              vin: vehicleData?.vin ?? "",
              local: vehicleData?.type === "local",
              registration: vehicleData?.registrationType,
              registrationType: "TUN", // Default value
              location: null,
            };

            try {
              console.log("Posting new vehicle details");
              const response = await axios.post("/api/v1/userspace/vehicle", vehicleDetails);
              return response.data;
            } catch (postError) {
              console.error("Failed to add vehicle:", postError);
              throw postError; // Re-throw to handle in outer catch
            }
          }
          throw error;
        });



      const reservationData = {
        vehicleId: vehicleData?.vin,
        date: selectedDate,
        baseFee: 0, // selected price for the vehicle type
        // to add vehicle repair type to the data base and the api endpoint
        // optional payment using
        repairStatus: RepairStatus.PENDING,
        mobilePhone: contactDetails.phone,
        userId: userId || 1,
      };

      console.log('Submitting reservation with data:', reservationData);
      const response = await axios.post('/api/v1/userspace/reservation', reservationData);

      // After successful reservation, add the event to the calendar
      if (response.data && response.data.reservationId) {
        // Calculate appointment end time (1 hour after start)
        const endDate = new Date(selectedDate!.getTime() + (60 * 60 * 1000)); // Add 1 hour

        // Create calendar event
        const calendarEventData = {
          title: `${serviceName} Appointment`,
          description: `Vehicle: ${vehicleData?.vin}\nContact: ${contactDetails.name} (${contactDetails.phone})`,
          startTime: selectedDate!.toISOString(),
          endTime: endDate.toISOString(),
          vehicleId: vehicleData?.vin,
          userId: userId || 1,
          reservationId: response.data.reservationId
        };

        // Add event to calendar
        const calendarResponse = await axios.post('/api/v1/calendar/add-event', calendarEventData);
        console.log('Calendar event created:', calendarResponse.data);
      }

      return response.data;
    },
    onSuccess: (data) => {
      toast.success('Booking submitted successfully!');
      // Optional: Add to Google Calendar URL
      if (selectedDate) {
        const endDate = new Date(selectedDate.getTime() + (60 * 60 * 1000)); // Add 1 hour
        const googleCalendarUrl = createGoogleCalendarUrl({
          title: `${serviceName} Appointment`,
          description: `Vehicle: ${vehicleData?.vin}`,
          location: 'Car Maintenance Center',
          startDate: selectedDate,
          endDate: endDate
        });

        // Store URL for later use or display
        localStorage.setItem('lastBookingGoogleCalendarUrl', googleCalendarUrl);
      }

      setStep(7); // Move to summary step
    },
    onError: (err: any) => {
      toast.error(err.message || 'An error occurred during booking submission');
    }
  });

  // Helper to create Google Calendar URL
  const createGoogleCalendarUrl = ({
    title,
    description,
    location,
    startDate,
    endDate
  }: {
    title: string;
    description: string;
    location: string;
    startDate: Date;
    endDate: Date;
  }) => {
    const formatDate = (date: Date) => date.toISOString().replace(/-|:|\.\d+/g, '');

    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: title,
      details: description,
      location: location,
      dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  };

  const handleEditStep = (step: number) => {
    setStep(step);
  };

  const handleConfirmBooking = () => {
    if (!contactDetails || !selectedService || !vehicleData || !selectedDate) {
      toast.error('Please complete all required information');
      return;
    }

    mutate();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center">
          <ClipboardCheck className="h-10 w-10 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">Review Your Booking</h3>
        <p className="text-muted-foreground">
          Please confirm your booking details before finalizing your appointment.
        </p>
      </div>

      <div className="space-y-4">
        {/* Service Information */}
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Selected Service</h4>
                <p className="font-medium">{serviceName}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleEditStep(2)}
              >
                Edit
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Vehicle Information */}
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Vehicle Details</h4>
                {vehicleData ? (
                  <div>
                    <p className="font-medium">VIN: {vehicleData.vin}</p>
                    {vehicleData.type === 'local' ? (
                      <p className="text-sm text-muted-foreground">Registration: {vehicleData.registrationNumber}</p>
                    ) : (
                      <p className="text-sm text-muted-foreground">Location: {vehicleData.location}</p>
                    )}
                  </div>
                ) : (
                  <p className="font-medium text-amber-500">No vehicle data</p>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleEditStep(1)}
              >
                Edit
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Appointment Information */}
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Appointment Date & Time</h4>
                <p className="font-medium">{formattedDate}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleEditStep(3)}
              >
                Edit
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Contact Information</h4>
                {contactDetails ? (
                  <div>
                    <p className="font-medium">{contactDetails.name}</p>
                    <p className="text-sm text-muted-foreground">{contactDetails.email}</p>
                    <p className="text-sm text-muted-foreground">{contactDetails.phone}</p>
                    {contactDetails.message && (
                      <p className="text-sm text-muted-foreground mt-1">Note: {contactDetails.message}</p>
                    )}
                  </div>
                ) : (
                  <p className="font-medium text-amber-500">Contact information missing</p>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleEditStep(4)}
              >
                Edit
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Warning message if any data is missing */}
      {(!contactDetails || !selectedService || !vehicleData || !selectedDate) && (
        <div className="flex items-center gap-2 p-3 bg-amber-50 text-amber-800 rounded-md border border-amber-200">
          <AlertCircle className="h-5 w-5" />
          <p className="text-sm">Some required information is missing. Please go back and complete all steps.</p>
        </div>
      )}

      <div className="flex gap-4 pt-2">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => handleEditStep(4)}
        >
          Go Back
        </Button>
        <Button
          className="flex-1"
          onClick={handleConfirmBooking}
          disabled={isPending || !contactDetails || !selectedService || !vehicleData || !selectedDate}
        >
          {isPending ? <Loader className="animate-spin h-4 w-4" /> : 'Confirm Booking'}
        </Button>
      </div>
    </motion.div>
  );
}
