'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const carImages = [

  {

    url: "https://images.unsplash.com/photo-1582639510494-c80b5de9f148",

    alt: "Renault Alpine"

  },

  {

    url: "https://images.unsplash.com/photo-1582639510494-c80b5de9f148",

    alt: "Renault Clio"

  },

  {

    url: "https://images.unsplash.com/photo-1582639510494-c80b5de9f148",

    alt: "Renault Megane"

  },

  {

    url: "https://images.unsplash.com/photo-1582639510494-c80b5de9f148",

    alt: "Renault Sport"

  },

  {

    url: "https://images.unsplash.com/photo-1582639510494-c80b5de9f148",

    alt: "Renault Dacia"

  },

];

export function CarSlider() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="relative overflow-hidden py-10 bg-background"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-4"
        animate={{
          x: isPaused ? 0 : [0, -1920],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...carImages, ...carImages].map((image, index) => (
          <motion.div
            key={index}
            className={cn(
              "relative min-w-[300px] h-[200px] rounded-lg overflow-hidden",
              "transform transition-transform hover:scale-105"
            )}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              loading="lazy"

             />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-white font-medium">{image.alt}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
