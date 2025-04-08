'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { services } from '@/app/services/data';

type ServiceSelectionProps = {
  selectedService: string;
  setSelectedService: (id: string) => void;
  onNext: () => void;
};

export default function ServiceSelection({
  selectedService,
  setSelectedService,
  onNext
}: ServiceSelectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedService(service.id)}
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${selectedService === service.id
              ? 'border-primary bg-primary/5'
              : 'hover:border-primary/50'}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
                <p className="mt-2 font-semibold">{service.price}</p>
              </div>
              {selectedService === service.id && (
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" />
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={onNext}
          disabled={!selectedService}
          className={`px-4 py-2 rounded-md transition-colors ${selectedService
            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
            : 'bg-muted text-muted-foreground cursor-not-allowed'}`}
        >
          Continue
        </button>
      </div>
    </motion.div>
  );
}
