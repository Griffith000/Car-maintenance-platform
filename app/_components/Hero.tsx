'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div className="absolute inset-0">
        <Image
          src="/images/renault-hero.jpg"
          alt="Renault Service Center"
          fill
          className="object-cover filter scale-105"
          priority
        />
        {/* Enhanced overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 dark:from-black/80 dark:via-black/60 dark:to-black/80 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          Expert Renault Service <br />
          <span className="text-yellow-400">You Can Trust</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
          Professional maintenance and repair services for your Renault vehicle. 
          Book your appointment today and experience excellence in automotive care.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            size="lg"
            onClick={() => router.push('/booking')}
            className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-8 py-6"
          >
            Book Your Service Now
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-2 h-2 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
