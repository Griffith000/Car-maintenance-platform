'use client';

import { create } from 'zustand';
import { ContactFormValues } from '@/app/services/schemas';
import { VehicleVerification } from '@/app/services/schemas';

interface BookingState {
  step: number;
  selectedService: string;
  vehicleData: VehicleVerification | null;
  selectedDate: Date | undefined;
  isLoading: boolean;
  formSubmitted: boolean;
  contactDetails: ContactFormValues | null;
  isForeignCar: boolean;
  selectedVehicle: string | null;
  // Actions
  setStep: (step: number) => void;
  setSelectedService: (serviceId: string) => void;
  setSelectedVehicle: (vehicleId: string) => void;
  setVehicleData: (data: VehicleVerification) => void;
  setSelectedDate: (date: Date | undefined) => void;
  setIsLoading: (isLoading: boolean) => void;
  setFormSubmitted: (submitted: boolean) => void;
  setContactDetails: (details: ContactFormValues | null) => void;
  setIsForeignCar: (isForeign: boolean) => void;
  resetStore: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  step: 1,
  selectedService: '',
  vehicleData: null,
  selectedDate: undefined,
  isLoading: false,
  formSubmitted: false,
  contactDetails: null,
  isForeignCar: false,
  selectedVehicle: null,
  setStep: (step) => set({ step }),
  setSelectedService: (serviceId) => set({ selectedService: serviceId }),
  setSelectedVehicle: (vehicleId) => set({ selectedVehicle: vehicleId }),
  setVehicleData: (data) => set({ vehicleData: data }),
  setSelectedDate: (date) => set({ selectedDate: date }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setFormSubmitted: (submitted) => set({ formSubmitted: submitted }),
  setContactDetails: (details) => set({ contactDetails: details }),
  setIsForeignCar: (isForeign) => set({ isForeignCar: isForeign }),
  resetStore: () => set({
    step: 1,
    selectedService: '',
    vehicleData: null,
    selectedDate: undefined,
    isLoading: false,
    formSubmitted: false,
    contactDetails: null,
    isForeignCar: false,
  }),
}));

export function useBookingStoreSelector<T>(selector: (state: BookingState) => T) {
  return useBookingStore(selector);
}
