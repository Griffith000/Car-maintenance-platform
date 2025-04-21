'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ContactFormValues } from './schemas';
import { useBookingStore } from '@/app/stores/bookingStore';
import ServiceCard from '@/app/_components/ui/ServiceCard';
import ServiceSelection from '@/app/_components/booking/ServiceSelection';
import VehicleVerification from '@/app/_components/booking/VehicleVerification';
import DateSelection from '@/app/_components/ui/calendar/DateSelection';
import ContactForm from '@/app/_components/forms/ContactForm';
import FinalConfirmation from '@/app/_components/booking/FinalConfirmation';
import { CheckCircle } from 'lucide-react';
import BookingSummary from '../_components/booking/BookingSummary';


export default function ServiceBookingClient() {
  const {
    step,
    selectedService,
    vehicleData,
    selectedDate,
    contactDetails,
    setStep,
    setSelectedService,
    setVehicleData,
    setSelectedDate,
    setIsLoading,
    setFormSubmitted,
    setContactDetails,
    resetStore,
  } = useBookingStore();

  const handleContactSubmit = (data: ContactFormValues) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setContactDetails(data);
      setFormSubmitted(true);
      setIsLoading(false);
      setStep(5); // Move to confirmation step
    }, 1500);
  };

  const resetForm = () => {
    resetStore();
  };

  // Animation variants for smooth page transitions
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const transition = { 
    duration: 0.4, 
    ease: [0.43, 0.13, 0.23, 0.96]
  };

  return (
    <div className="space-y-8">
      {/* Step Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex justify-center mb-8"
      >
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <motion.div
                initial={false}
                animate={{
                  scale: step === stepNumber ? 1.1 : 1,
                  transition: { duration: 0.3 }
                }}
              >
                <button 
                  onClick={() => stepNumber < step && setStep(stepNumber)}
                  disabled={stepNumber > step}
                  className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
                    stepNumber === step
                      ? 'bg-primary text-primary-foreground'
                      : stepNumber < step
                      ? 'bg-primary/20 text-primary cursor-pointer'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {stepNumber < step ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <span className="text-sm font-medium">{stepNumber}</span>
                  )}
                </button>
              </motion.div>
              
              {stepNumber < 5 && (
                <div 
                  className={`w-16 h-1 mx-1 ${
                    stepNumber < step ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Step Description */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-6"
      >
        <h2 className="text-2xl font-bold">{getStepTitle(step)}</h2>
        <p className="text-muted-foreground mt-1">{getStepDescription(step)}</p>
      </motion.div>

      {/* Service Card */}
      <motion.div
        layout
        className="w-full max-w-4xl mx-auto"
      >
        <ServiceCard>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={transition}
              className="py-2"
            >
              {step === 1 && (
                <VehicleVerification />
              )}

              {step === 2 && (
                <ServiceSelection />
              )}

              {step === 3 && (
                <DateSelection />
              )}


              {step === 4 && (
                <ContactForm
                  onSubmit={handleContactSubmit}
              
                />
              )}

              {step ===5 && (
                <FinalConfirmation />
              )}


              {step === 6 && contactDetails && (
                <BookingSummary
                  selectedService={selectedService}
                  vehicleData={vehicleData}
                  selectedDate={selectedDate}
                  contactDetails={contactDetails}
                  onReset={resetForm}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </ServiceCard>
      </motion.div>
    </div>
  );
}

function getStepTitle(step: number): string {
  switch (step) {
    case 1:
      return 'Vehicle Verification';
    case 2:
      return 'Select Service';
    case 3:
      return 'Choose Date & Time';
    case 4:
      return 'Contact Information';
    case 5:
      return 'Booking Confirmation';
    default:
      return 'Book Your Service';
  }
}

function getStepDescription(step: number): string | undefined {
  switch (step) {
    case 1:
      return 'Verify your vehicle details to continue';
    case 2:
      return 'Choose the service you need for your vehicle';
    case 3:
      return 'Select a convenient date and time for your appointment';
    case 4:
      return 'Provide your contact information to complete the booking';
    case 5:
      return 'Your service appointment has been confirmed';
    default:
      return undefined;
  }
}
