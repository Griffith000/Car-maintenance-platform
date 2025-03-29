'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';

const serviceTypes = [
  {
    id: 'regular',
    title: 'Regular Service',
    description: 'Complete vehicle maintenance service',
    price: '£149',
    icon: '🔧'
  },
  {
    id: 'comprehensive',
    title: 'Comprehensive Service',
    description: 'Full diagnostic check and maintenance',
    price: '£299',
    icon: '🚗'
  },
  {
    id: 'diagnostic',
    title: 'Diagnostic Check',
    description: 'Complete vehicle health check',
    price: '£89',
    icon: '🔍'
  }
];

export function ServiceBookingForm() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    vehicle: '',
    name: '',
    email: '',
    phone: ''
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            key="step1"
            {...fadeInUp}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Select Your Vehicle</h2>
            <Input
              placeholder="Enter your vehicle model"
              value={formData.vehicle}
              onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
              className="w-full"
            />
            <Button 
              onClick={() => setStep(2)}
              className="w-full"
              disabled={!formData.vehicle}
            >
              Continue
            </Button>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            {...fadeInUp}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Choose Service Type</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {serviceTypes.map((service) => (
                <Card
                  key={service.id}
                  className={`p-4 cursor-pointer transition-all ${
                    selectedService === service.id ? 'border-primary' : ''
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <h3 className="font-bold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <p className="font-bold mt-2">{service.price}</p>
                </Card>
              ))}
            </div>
            <Button 
              onClick={() => setStep(3)}
              className="w-full"
              disabled={!selectedService}
            >
              Continue
            </Button>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3"
            {...fadeInUp}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Select Appointment Date</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
            <Button 
              onClick={() => setStep(4)}
              className="w-full"
              disabled={!date}
            >
              Continue
            </Button>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            key="step4"
            {...fadeInUp}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="space-y-4">
              <Input
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <Input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <Button 
              onClick={() => setStep(5)}
              className="w-full"
              disabled={!formData.name || !formData.email || !formData.phone}
            >
              Review Booking
            </Button>
          </motion.div>
        );
      case 5:
        return (
          <motion.div
            key="step5"
            {...fadeInUp}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Booking Summary</h2>
            <Card className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Vehicle</p>
                  <p className="font-medium">{formData.vehicle}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Service Type</p>
                  <p className="font-medium">
                    {serviceTypes.find(s => s.id === selectedService)?.title}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium">{date ? format(date, 'PPP') : ''}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">{formData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{formData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{formData.phone}</p>
                </div>
              </div>
              <Button className="w-full">Confirm Booking</Button>
            </Card>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="space-y-8"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold">Book Your Renault Service</h1>
          <p className="text-muted-foreground">
            Keep your Renault in perfect condition with our professional service
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= i ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}
              >
                {i}
              </div>
              {i < 5 && (
                <div
                  className={`w-12 h-1 ${
                    step > i ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {renderStep()}
      </motion.div>
    </div>
  );
}
