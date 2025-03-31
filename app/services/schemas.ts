import * as z from 'zod';

export const vehicleFormSchema = z.object({
  vinNumber: z.string()
    .min(17, 'VIN must be exactly 17 characters')
    .max(17, 'VIN must be exactly 17 characters')
    .refine(val => /^[A-HJ-NPR-Z0-9]{17}$/i.test(val), {
      message: 'Invalid VIN format. VIN should be 17 alphanumeric characters (excluding I, O, Q)'
    }),
  registrationNumber: z.string().optional(),
  location: z.string().optional(),
}).refine(data => {
  // For local cars, registration is required
  if (!data.location && !data.registrationNumber) {
    return false;
  }
  return true;
}, {
  message: 'Registration number is required for local vehicles',
  path: ['registrationNumber'],
}).refine(data => {
  // For foreign cars, location is required
  if (data.location === '' && !data.registrationNumber) {
    return false;
  }
  return true;
}, {
  message: 'Location is required for foreign vehicles',
  path: ['location'],
});

export type VehicleFormValues = z.infer<typeof vehicleFormSchema>;

// Vehicle verification schema with discriminated union for different vehicle types
export const vehicleVerificationSchema = z.discriminatedUnion('type', [
  // Foreign vehicle schema
  z.object({
    type: z.literal('foreign'),
    vin: z.string()
      .min(17, 'VIN must be exactly 17 characters')
      .max(17, 'VIN must be exactly 17 characters')
      .refine(val => /^[A-HJ-NPR-Z0-9]{17}$/i.test(val), {
        message: 'Invalid VIN format. VIN should be 17 alphanumeric characters (excluding I, O, Q)'
      }),
    location: z.string().min(1, 'Location is required for foreign vehicles')
  }),
  // Local vehicle schema
  z.object({
    type: z.literal('local'),
    vin: z.string()
      .min(17, 'VIN must be exactly 17 characters')
      .max(17, 'VIN must be exactly 17 characters')
      .refine(val => /^[A-HJ-NPR-Z0-9]{17}$/i.test(val), {
        message: 'Invalid VIN format. VIN should be 17 alphanumeric characters (excluding I, O, Q)'
      }),
    registrationNumber: z.string().min(1, 'Registration number is required for local vehicles')
  })
]);

export type VehicleVerification = z.infer<typeof vehicleVerificationSchema>;

// Service selection schema
export const serviceSelectionSchema = z.object({
  serviceType: z.string().min(1, 'Please select a service'),
  serviceDescription: z.string().optional()
});

export type ServiceSelection = z.infer<typeof serviceSelectionSchema>;

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required')
    .max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required')
    .refine(val => /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i.test(val), {
      message: 'Please enter a valid phone number'
    }),
  message: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// Booking form schema
export const bookingSchema = z.object({
  date: z.date(),
  time: z.string(),
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required')
});

export type BookingForm = z.infer<typeof bookingSchema>;
