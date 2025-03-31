'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export default function Hero() {
  const router = useRouter();
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const features = [
    { title: "Expert Technicians", description: "Factory-trained specialists for your Renault" },
    { title: "Genuine Parts", description: "Original Renault parts with full warranty" },
    { title: "Modern Equipment", description: "State-of-the-art diagnostic technology" },
    { title: "Quick Service", description: "Efficient maintenance with minimal wait time" },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Hero Section with Animated Car Silhouette */}
      <div className="relative h-[90vh] overflow-hidden bg-gradient-to-b from-background to-background/80 dark:from-background-dark dark:to-background-dark/90">
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute h-full w-full opacity-[0.02] dark:opacity-[0.05]"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {[...Array(100)].map((_, i) => (
              <line
                key={i}
                x1={i}
                y1="0"
                x2={i}
                y2="100"
                strokeWidth="0.1"
                stroke="currentColor"
              />
            ))}
            {[...Array(100)].map((_, i) => (
              <line
                key={i + 100}
                x1="0"
                y1={i}
                x2="100"
                y2={i}
                strokeWidth="0.1"
                stroke="currentColor"
              />
            ))}
          </svg>
        </div>

        <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-between pt-24 pb-10">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 z-10 space-y-6"
          >
            <Badge variant="outline" className="px-4 py-1 mb-4 border-yellow-400 text-yellow-400">
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Premium Car Maintenance
              </motion.span>
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Expert Renault Service{" "}
              <motion.span 
                className="text-yellow-400 inline-block"
                animate={{ 
                  scale: [1, 1.03, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                You Can Trust
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Professional maintenance and repair services for your Renault vehicle. 
              Book your appointment today and experience excellence in automotive care.
            </motion.p>
            
            <motion.div 
              className="py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center space-x-2"
                >
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-medium">{features[currentFeature].title}</h3>
                    <p className="text-sm text-muted-foreground">{features[currentFeature].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  onClick={() => router.push('/booking')}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-8 py-6 shadow-lg"
                >
                  Book Your Service Now
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => router.push('/services')}
                  className="border-2 text-lg px-8 py-6"
                >
                  View Services
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Animated Car */}
          <motion.div 
            className="lg:w-1/2 relative mt-12 lg:mt-0 z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative h-[350px] w-full">
              {/* Car Silhouette with Animation */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="h-72 w-72 opacity-80 text-foreground"
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M20 8l-1.5-1.5C17.5 5.5 16 5 14.5 5h-5C8 5 6.5 5.5 5.5 6.5L4 8M19 17h2v-6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v6h2m0 0h14M5 11V5m14 6V5M7 17a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      opacity: 1,
                      transition: { duration: 2, ease: "easeInOut" }
                    }}
                  />
                </svg>
                
                
                {/* Animated particles/sparks around the car */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-yellow-400"
                    style={{
                      width: Math.random() * 4 + 2,
                      height: Math.random() * 4 + 2,
                    }}
                    animate={{
                      x: Math.random() * 300 - 150,
                      y: Math.random() * 300 - 150,
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: Math.random() * 2 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </motion.div>
              
              {/* Circular rings around the car */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/10"
                  style={{
                    width: `${(i + 1) * 20}%`,
                    height: `${(i + 1) * 20}%`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: [0.1, 0.3, 0.1], 
                    scale: 1,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Service Highlights Section */}
      <div className="bg-muted/50 dark:bg-muted-dark/30 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-2">Premium Renault Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our certified technicians provide comprehensive care for your vehicle</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Diagnostic Services",
                description: "Computer-aided diagnostics to identify and resolve issues",
                icon: (
                  <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                )
              },
              {
                title: "Engine Service",
                description: "Complete engine maintenance, repair and optimization",
                icon: (
                  <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              {
                title: "Maintenance Schedule",
                description: "Manufacturer-recommended service intervals for optimal performance",
                icon: (
                  <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                )
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="p-6 h-full border-foreground/10 hover:border-yellow-400/50 transition-colors duration-300 bg-background/50 backdrop-blur-sm dark:bg-background-dark/50">
                  <motion.div 
                    className="mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-background dark:bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {[...Array(10)].map((_, i) => (
              <motion.circle
                key={i}
                cx={Math.random() * 100}
                cy={Math.random() * 100}
                r={Math.random() * 5 + 1}
                fill="currentColor"
                initial={{ opacity: 0.1 }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Premium Renault Service?</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Schedule your appointment today and let our expert technicians take care of your vehicle.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button 
                size="lg"
                onClick={() => router.push('/booking')}
                className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-10 py-6 shadow-lg"
              >
                Book Your Service Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-2 h-2 bg-foreground/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
