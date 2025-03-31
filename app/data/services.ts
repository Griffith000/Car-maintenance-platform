import { Service } from './types';

export const services: Service[] = [
  { id: 'oil-change', name: 'Oil Change', description: 'Regular oil change service for your vehicle', price: '$49.99' },
  { id: 'brake-service', name: 'Brake Service', description: 'Inspection and replacement of brake components', price: '$129.99' },
  { id: 'tire-rotation', name: 'Tire Rotation', description: 'Rotate tires to ensure even wear and extend tire life', price: '$39.99' },
  { id: 'full-inspection', name: 'Full Inspection', description: 'Comprehensive vehicle inspection', price: '$89.99' },
  { id: 'ac-service', name: 'AC Service', description: 'Air conditioning system check and recharge', price: '$79.99' },
];

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};

export const getServices = () => services;
