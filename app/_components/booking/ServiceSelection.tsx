'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useBookingStore } from '@/app/stores/bookingStore';
import { Button } from '@/components/ui/button';
import { services } from '@/app/services/data';
import { Card, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ServiceSelection() {
  const { selectedService, setSelectedService, setStep } = useBookingStore();

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleNext = () => {
    if (selectedService) {
      setStep(3);
    }
  };

  // Animation variants for the card container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Animation variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="h-full"
          >
            <Card
              className={`cursor-pointer h-full flex flex-col transition-all duration-200 ${
                selectedService === service.id
                  ? 'ring-2 ring-primary shadow-md'
                  : 'hover:border-primary/50'
              }`}
              onClick={() => handleServiceSelect(service.id)}
            >
              <CardContent className="pt-6 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-lg font-semibold">{service.name}</div>
                  <Badge variant="outline" className="bg-primary/10">
                    {service.duration}
                  </Badge>
                </div>
                <CardDescription>{service.description}</CardDescription>
                
                <div className="mt-4 font-medium text-lg">
                  {service.price}
                </div>
              </CardContent>
              <CardFooter className="border-t bg-muted/20 flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{service.category}</span>
                {selectedService === service.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="h-6 w-6 rounded-full bg-primary flex items-center justify-center"
                  >
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </motion.div>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        <Button 
          onClick={handleNext} 
          disabled={!selectedService}
          className="w-full mt-6 gap-2"
        >
          Continue to Date Selection
          <ArrowRight className="h-4 w-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
