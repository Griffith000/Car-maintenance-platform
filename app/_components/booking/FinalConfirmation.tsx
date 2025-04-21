'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '@/app/data/services';
import { useBookingStore } from '@/app/stores/bookingStore';
import { useUserStore } from '@/app/stores/userStore';
import { Card, CardContent } from '@/components/ui/card';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';
import { useState } from 'react';
import { RepairStatus } from '@prisma/client';

export default function FinalConfirmation() {
  const {
    selectedService,
    vehicleData,
    selectedDate,
    contactDetails,
    setStep,
  } = useBookingStore();
  
  const { userId } = useUserStore();

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
    
      const reservationData = {
        vehicleId: vehicleData?.vin,
        date: selectedDate,   
        baseFee: 0,
        repairStatus: RepairStatus.PENDING,
        mobilePhone: contactDetails.phone,
        userId: userId || 1 
      };

      console.log('Submitting reservation with data:', reservationData);
      const response = await axios.post('/api/v1/userspace/reservation', reservationData);
      return response.data;
    },
    onSuccess: () => {
      toast.success('Booking submitted successfully!');
      setStep(6); 
    },
    onError: (err: any) => {
      toast.error(err.message || 'An error occurred during booking submission');
    }
  });

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
          {isPending ? 'Processing...' : 'Confirm Booking'}
        </Button>
      </div>
    </motion.div>
  );
}
