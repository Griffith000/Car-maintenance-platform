'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ContactFormValues } from './schemas';
import { useBookingStore } from '@/app/stores/bookingStore';
import ServiceCard from '@/app/_components/ui/ServiceCard';
import { CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import axios from 'axios';
import lazy from 'next/dynamic';

const ServiceSelection = lazy(() => import('../_components/booking/ServiceSelection'));
const VehicleVerification = lazy(() => import('../_components/booking/VehicleVerification'));
const DateSelection = lazy(() => import('../_components/ui/calendar/DateSelection'));
const ContactForm = lazy(() => import('../_components/forms/ContactForm'));
const OtpVerification = lazy(() => import('../_components/forms/OtpVerification'));
const FinalConfirmation = lazy(() => import('../_components/booking/FinalConfirmation'));
const BookingSummary = lazy(() => import('../_components/booking/BookingSummary'));


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
  
  const [phoneVerified, setPhoneVerified] = useState(false);

  const handleContactSubmit = (data: ContactFormValues) => {
    setIsLoading(true);
    
    setContactDetails(data);
    setFormSubmitted(true);
    setStep(6);

    // ADD OTP in an update
    
    // axios.post('/api/v1/send-otp', {
    //   phoneNumber: data.phone,
    //   })
    //   .then((response) => response.data)
    //   .then((result) => {
    //     if (result.success) {
    //       toast.success('Verification code sent to your phone');
    //       setFormSubmitted(true);
    //       setStep(5);
    //     } else {
    //       toast.error(result.message || 'Failed to send verification code');
    //     }
    //   })
    //   .catch((error) => {
    //     toast.error('Failed to send verification code. Please try again.');
    //     console.error('Error sending OTP:', error);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };
  
  const handleOtpVerificationSuccess = () => {
    setPhoneVerified(true);
    setStep(6);
  };
  
  const handleResendOtp = async () => {
    if (!contactDetails) return Promise.reject('No contact details found');
    
    return axios.post('/api/v1/send-otp', {
      phoneNumber: contactDetails.phone,
    })
      .then((response) => response.data)
      .then((result) => {
        if (result.success) {
          return Promise.resolve();
        } else {
          return Promise.reject(result.message || 'Failed to send verification code');
        }
      });
  };

  const resetForm = () => {
    resetStore();
  };

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
    <div className="space-y-8 container mx-auto px-4 w-full h-full">
      {/* Step Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex justify-center mb-8 w-full overflow-x-auto py-4"
      >
        <div className="flex items-center justify-center min-w-max">
          {[1, 2, 3, 4, 5, 6, 7].map((stepNumber) => (
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
              
              {stepNumber < 7 && (
                <div 
                  className={`w-12 h-1 mx-2 ${
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
        className="w-full max-w-4xl mx-auto px-4"
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
              className="py-4"
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

              {step === 5 && contactDetails && (
                <OtpVerification
                  phoneNumber={contactDetails.phone}
                  onVerificationSuccess={handleOtpVerificationSuccess}
                  onResendOtp={handleResendOtp}
                />
              )}

              {step === 6 && (
                <FinalConfirmation />
              )}

              {step === 7 && contactDetails && (
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
      return 'Phone Verification';
    case 6:
      return 'Booking Confirmation';
    case 7:
      return 'Booking Summary';
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
      return 'Enter the verification code sent to your phone';
    case 6:
      return 'Confirm your service appointment details';
    case 7:
      return 'Your service appointment has been confirmed';
    default:
      return undefined;
  }
}
