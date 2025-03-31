export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
}

export interface Vehicle {
  id: string;
  name: string;
  year: string;
}

export interface BookingData {
  service: Service;
  vehicle: Vehicle;
  date: Date;
  contact: ContactFormValues;
  isForeignCar: boolean;
  vinNumber: string;
  registrationNumber?: string;
  location?: string;
}
