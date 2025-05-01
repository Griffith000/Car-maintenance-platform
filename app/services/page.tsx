import ServiceBookingClient from './ServiceBookingClient';

export default function ServiceBookingPage() {
  return (
    // Full viewport height container with centered content
    <div className="min-h-screen flex flex-col items-center justify-center py-10 pt-24">
      {/* Content container with max width */}
      <div className="max-w-5xl w-full mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8">Book Your Car Service</h1>
        <p className="text-muted-foreground mb-10">
          Schedule maintenance or repair services for your vehicle with our easy booking system.
        </p>
        
        {/* Centered child component container */}
        <div className="flex justify-center">
          <ServiceBookingClient />
        </div>
      </div>
    </div>
  );
}
