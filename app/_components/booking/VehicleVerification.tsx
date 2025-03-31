'use client';

import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { AnimatePresence, motion } from 'framer-motion';
import { useBookingStore } from '@/app/stores/bookingStore';
import { VehicleVerification as VehicleVerificationType } from '@/app/services/schemas';
import VehicleVerificationForm from '@/app/_components/forms/VehicleVerificationForm';

export default function VehicleVerification() {
  const { setVehicleData, setStep, setIsForeignCar, isForeignCar } = useBookingStore();

  const handleVehicleSubmit = (data: VehicleVerificationType) => {
    setVehicleData(data);
    setStep(2); // Move to service selection step
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end space-x-2 mb-6">
        <Switch 
          id="isForeign" 
          checked={isForeignCar} 
          onCheckedChange={setIsForeignCar} 
          aria-label="Toggle foreign vehicle"
        />
        <Label htmlFor="isForeign" className="text-sm font-medium">
          {isForeignCar ? 'Foreign Vehicle' : 'Local Vehicle'}
        </Label>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
        
          key={isForeignCar ? 'foreign' : 'local'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <VehicleVerificationForm
            onSubmit={handleVehicleSubmit}
            isForeignCar={isForeignCar}
          />
        </motion.div>
      </AnimatePresence>

      <div className="text-sm text-muted-foreground mt-4">
        {isForeignCar ? (
          <p>For foreign vehicles, please provide your VIN and the country/region where your vehicle is registered.</p>
        ) : (
          <p>For local vehicles, please provide your VIN and registration number.</p>
        )}
      </div>
    </div>
  );
}
