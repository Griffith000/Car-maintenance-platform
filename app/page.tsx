import { ServiceBookingForm } from '@/app/_components/service-booking-form';
import Hero from './_components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-background dark:bg-background-dark">
      <Hero/>
      <ServiceBookingForm />
    </main>
  );

}
