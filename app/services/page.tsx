'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Textarea } from '@/components/ui/textarea';
import { Check, ChevronRight, Car, Calendar as CalendarIcon, User, MessageSquare } from 'lucide-react';

const services = [
  { id: 'oil-change', name: 'Oil Change', description: 'Regular oil change service for your vehicle', price: '$49.99' },
  { id: 'brake-service', name: 'Brake Service', description: 'Inspection and replacement of brake components', price: '$129.99' },
  { id: 'tire-rotation', name: 'Tire Rotation', description: 'Rotate tires to ensure even wear and extend tire life', price: '$39.99' },
  { id: 'full-inspection', name: 'Full Inspection', description: 'Comprehensive vehicle inspection', price: '$89.99' },
  { id: 'ac-service', name: 'AC Service', description: 'Air conditioning system check and recharge', price: '$79.99' },
];

const vehicles = [
  { id: 'clio', name: 'Renault Clio', year: '2018-2023' },
  { id: 'megane', name: 'Renault Megane', year: '2016-2023' },
  { id: 'captur', name: 'Renault Captur', year: '2019-2023' },
  { id: 'kadjar', name: 'Renault Kadjar', year: '2015-2023' },
  { id: 'scenic', name: 'Renault Scenic', year: '2016-2023' },
];

const ServiceBookingPage = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '', message: '' });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleContactInfoChange = (field: string, value: string) => {
    setContactInfo({ ...contactInfo, [field]: value });
  };

  const handleSubmit = () => {
    // I would submit the form data to your backend here
    console.log({
      service: selectedService,
      vehicle: selectedVehicle,
      date: selectedDate,
      contactInfo,
    });
    setStep(4); // Move to confirmation step
  };

  const isStepComplete = () => {
    switch (step) {
      case 1:
        return selectedService !== '';
      case 2:
        return selectedVehicle !== '' && selectedDate !== undefined;
      case 3:
        return contactInfo.name !== '' && contactInfo.email !== '' && contactInfo.phone !== '';
      default:
        return false;
    }
  };

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Book Your Service</h1>


        <div className="flex justify-between mb-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted -translate-y-1/2 z-0"></div>

          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative z-10 flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${i <= step ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'} transition-colors duration-300`}
              >
                {i < step ? <Check className="w-5 h-5" /> : i}
              </div>
              <span className={`mt-2 text-sm ${i <= step ? 'text-foreground' : 'text-muted-foreground'}`}>
                {i === 1 ? 'Service' : i === 2 ? 'Schedule' : i === 3 ? 'Contact' : 'Confirm'}
              </span>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {step === 1 && (
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-primary" />
                    Select a Service
                  </CardTitle>
                  <CardDescription>
                    Choose the service you need for your vehicle
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedService === service.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
                        onClick={() => setSelectedService(service.id)}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">{service.name}</h3>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                          </div>
                          <div className="text-primary font-medium">{service.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button
                    onClick={handleNext}
                    disabled={!isStepComplete()}
                    className="gap-2"
                  >
                    Next <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}

            {step === 2 && (
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    Vehicle & Schedule
                  </CardTitle>
                  <CardDescription>
                    Select your vehicle and preferred appointment date
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-3">Select Your Vehicle</h3>
                    <div className="grid gap-3">
                      {vehicles.map((vehicle) => (
                        <div
                          key={vehicle.id}
                          className={`p-3 border rounded-lg cursor-pointer transition-all ${selectedVehicle === vehicle.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
                          onClick={() => setSelectedVehicle(vehicle.id)}
                        >
                          <h3 className="font-medium">{vehicle.name}</h3>
                          <p className="text-sm text-muted-foreground">Year: {vehicle.year}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-3">Select Appointment Date</h3>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="border rounded-md p-3"
                      disabled={(date) => {
                        // Disable past dates and weekends
                        const day = date.getDay();
                        return date < new Date() || day === 0 || day === 6;
                      }}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!isStepComplete()}
                    className="gap-2"
                  >
                    Next <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}

            {step === 3 && (
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Contact Information
                  </CardTitle>
                  <CardDescription>
                    Provide your contact details for confirmation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={contactInfo.name}
                        onChange={(e) => handleContactInfoChange('name', e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={contactInfo.email}
                        onChange={(e) => handleContactInfoChange('email', e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        value={contactInfo.phone}
                        onChange={(e) => handleContactInfoChange('phone', e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        Additional Information (Optional)
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Any special requests or information about your vehicle"
                        value={contactInfo.message}
                        onChange={(e) => handleContactInfoChange('message', e.target.value)}
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!isStepComplete()}
                    className="gap-2"
                  >
                    Submit Booking
                  </Button>
                </CardFooter>
              </Card>
            )}

            {step === 4 && (
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-center text-primary">
                    Booking Confirmed!
                  </CardTitle>
                  <CardDescription className="text-center">
                    Your service appointment has been scheduled
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="py-6 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Check className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-center mb-6">
                      Thank you for booking with us! We've sent a confirmation to your email.
                      Our team will contact you shortly to confirm your appointment.
                    </p>

                    <div className="w-full max-w-sm mx-auto bg-muted/30 rounded-lg p-4 mb-4">
                      <h3 className="font-medium mb-2">Booking Details:</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Service:</span>
                          <span>{services.find(s => s.id === selectedService)?.name}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Vehicle:</span>
                          <span>{vehicles.find(v => v.id === selectedVehicle)?.name}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Date:</span>
                          <span>{selectedDate?.toLocaleDateString()}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Name:</span>
                          <span>{contactInfo.name}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button
                    onClick={() => setStep(1)}
                    variant="outline"
                  >
                    Book Another Service
                  </Button>
                </CardFooter>
              </Card>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServiceBookingPage;
