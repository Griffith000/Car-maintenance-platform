'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '@/app/data/services';
import { ContactFormValues, VehicleVerification } from '@/app/services/schemas';

type BookingConfirmationProps = {
  selectedService: string;
  vehicleData: VehicleVerification | null;
  selectedDate: Date | undefined;
  contactDetails: ContactFormValues;
  onReset: () => void;
};

export default function BookingConfirmation({
  selectedService,
  vehicleData,
  selectedDate,
  contactDetails,
  onReset
}: BookingConfirmationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center">
          <ShieldCheck className="h-10 w-10 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">Booking Confirmed!</h3>
        <p className="text-muted-foreground">
          Your appointment has been scheduled. You will receive a confirmation email shortly.
        </p>
      </div>

      <div className="border rounded-lg p-4 space-y-4">
        <div>
          <h4 className="font-medium text-sm text-muted-foreground">Service</h4>
          <p className="font-medium">{services.find(s => s.id === selectedService)?.name || 'Service'}</p>
        </div>

        <div>
          <h4 className="font-medium text-sm text-muted-foreground">Vehicle</h4>
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
            <p className="font-medium">No vehicle data</p>
          )}
        </div>

        <div>
          <h4 className="font-medium text-sm text-muted-foreground">Appointment</h4>
          <p className="font-medium">
            {selectedDate
              ? `${selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`
              : 'Date not selected'}
          </p>
        </div>

        <div>
          <h4 className="font-medium text-sm text-muted-foreground">Contact Information</h4>
          <p className="font-medium">{contactDetails.name}</p>
          <p className="text-sm text-muted-foreground">{contactDetails.email}</p>
          <p className="text-sm text-muted-foreground">{contactDetails.phone}</p>
        </div>
      </div>

      <Button onClick={onReset} className="w-full">
        Book Another Service
      </Button>
    </motion.div>
  );
}
