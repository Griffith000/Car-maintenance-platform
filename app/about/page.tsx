'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CarSlider } from '@/components/car-slider';
import { Card, CardContent } from '@/components/ui/card';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-background">
        <div className="absolute inset-0">
          <Image
            src="/images/renault-hero.jpg"
            alt="Renault Workshop"
            fill
            className="object-cover opacity-60 dark:opacity-40"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Your Trusted Renault Service Partner
            </h1>
            <p className="text-xl text-muted-foreground">
              Dedicated to excellence in Renault vehicle maintenance and repair since 2010
            </p>
          </motion.div>
        </div>
      </section>

      {/* Car Slider Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 mb-8">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8 text-foreground"
          >
            Our Renault Expertise
          </motion.h2>
        </div>
        <CarSlider />
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Card className="h-full bg-card hover:bg-accent/5 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We strive to provide exceptional service for all Renault vehicles, combining technical expertise 
              with customer-focused care. Our commitment to quality and innovation ensures your vehicle 
              receives the best possible maintenance and care.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Expert Technicians",
    description: "Our certified technicians have years of specialized experience with Renault vehicles."
  },
  {
    title: "Genuine Parts",
    description: "We use only authentic Renault parts to ensure optimal performance and reliability."
  },
  {
    title: "Modern Facilities",
    description: "State-of-the-art diagnostic equipment and maintenance facilities for precise service."
  }
];
