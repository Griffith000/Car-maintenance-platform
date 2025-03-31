import ServiceBookingClient from './ServiceBookingClient';

export default function ServiceBookingPage() {
  return (
    <div className="container py-10 pt-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Book Your Car Service</h1>
        <p className="text-center text-muted-foreground mb-10">
          Schedule maintenance or repair services for your vehicle with our easy booking system.
        </p>
        <ServiceBookingClient />
      </div>
    </div>
  );
}
