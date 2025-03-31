'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { VehicleVerification, vehicleVerificationSchema } from '@/app/services/schemas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check } from 'lucide-react';

export default function VehicleVerificationForm({
  onSubmit,
  isForeignCar
}: {
  onSubmit: (data: VehicleVerification) => void;
  isForeignCar: boolean;
}) {
  // Use the correct type based on whether it's a foreign or local car
  type FormType = VehicleVerification;
  
  const vehicleForm = useForm<FormType>({
    resolver: zodResolver(vehicleVerificationSchema),
    defaultValues: {
      type: isForeignCar ? 'foreign' : 'local',
      vin: '',
      ...(isForeignCar ? { location: '' } : { registrationNumber: '' }),
    } as FormType,
    mode: 'onChange',
  });

  // Helper to safely check if a field exists and has errors
  const hasError = (field: string) => {
    return field in vehicleForm.formState.errors;
  };

  // Helper to get error message if exists
  const getErrorMessage = (field: string) => {
    if (hasError(field)) {
      return vehicleForm.formState.errors[field as keyof FormType]?.message;
    }
    return undefined;
  };

  // Helper to get field value
  const getFieldValue = (field: string) => {
    return vehicleForm.getValues(field as any);
  };

  // Helper for form state styling
  const getFormState = (field: string) => {
    return hasError(field) ? 'border-destructive focus-visible:ring-destructive' : '';
  };

  const handleSubmit = vehicleForm.handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* VIN Number - Required for both local and foreign cars */}
      <div className="grid gap-2">
        <Label htmlFor="vin">VIN Number <span className="text-destructive">*</span></Label>
        <div className="relative">
          <Input
            id="vin"
            placeholder="Enter your VIN number (17 characters)"
            className={getFormState('vin')}
            {...vehicleForm.register('vin', {
              onChange: () => {
                vehicleForm.trigger('vin');
              }
            })}
          />
          {getFieldValue('vin') && 
           typeof getFieldValue('vin') === 'string' && 
           (getFieldValue('vin')?.length ?? 0) > 0 && 
           !getErrorMessage('vin') && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
              <Check className="h-4 w-4" />
            </span>
          )}
        </div>
        {getErrorMessage('vin') && (
          <p className="text-sm text-red-500 text-destructive">{getErrorMessage('vin')}</p>
        )}
      </div>

      {/* Foreign Car - Location */}
      {isForeignCar && (
        <div className="grid gap-2">
          <Label htmlFor="location">Vehicle Location <span className="text-destructive">*</span></Label>
          <div className="relative">
            <Input
              id="location"
              placeholder="Enter country/region where vehicle is registered"
              className={getFormState('location')}
              {...vehicleForm.register('location', {
                onChange: () => {
                  vehicleForm.trigger('location');
                }
              })}
            />
            {getFieldValue('location') && 
             typeof getFieldValue('location') === 'string' && 
             (getFieldValue('location')?.length ?? 0) > 0 && 
             !getErrorMessage('location') && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
                <Check className="h-4 w-4" />
              </span>
            )}
          </div>
          {getErrorMessage('location') && (
            <p className="text-sm text-red-500 text-destructive">{getErrorMessage('location')}</p>
          )}
        </div>
      )}

      {/* Local Car - Registration Number */}
      {!isForeignCar && (
        <div className="grid gap-2">
          <Label htmlFor="registration">Registration Number <span className="text-destructive">*</span></Label>
          <div className="relative">
            <Input
              id="registration"
              placeholder="Enter your registration number"
              className={getFormState('registrationNumber')}
              {...vehicleForm.register('registrationNumber', {
                onChange: () => {
                  vehicleForm.trigger('registrationNumber');
                }
              })}
            />
            {getFieldValue('registrationNumber') && 
             typeof getFieldValue('registrationNumber') === 'string' && 
             (getFieldValue('registrationNumber')?.length ?? 0) > 0 && 
             !getErrorMessage('registrationNumber') && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
                <Check className="h-4 w-4" />
              </span>
            )}
          </div>
          {getErrorMessage('registrationNumber') && (
            <p className="text-sm text-red-500 text-destructive">{getErrorMessage('registrationNumber')}</p>
          )}
        </div>
      )}

      <Button type="submit" className="w-full" >
        Continue
      </Button>
    </form>
  );
}
