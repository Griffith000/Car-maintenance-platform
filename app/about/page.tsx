'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">

      <section className="relative h-[40vh] bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
          <Image
            src="/images/renault-hero.jpg"
            alt="Renault Workshop"
            fill
            className="object-cover mix-blend-overlay"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Trusted Renault Service Partner
            </h1>
            <p className="text-xl text-gray-200">
              Dedicated to excellence in Renault vehicle maintenance and repair since 2010
            </p>
          </motion.div>
        </div>
      </section>


      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8">
              Founded with a passion for automotive excellence, our journey began with a simple mission:
              to provide exceptional service for Renault vehicles. Today, we're proud to be one of the
              most trusted names in Renault maintenance and repair.
            </p>
          </motion.div>
        </div>
      </section>


      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Meet Our Expert Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Certifications</h2>
            <p className="text-lg text-gray-600 mb-8">
              We maintain the highest standards of service quality through continuous training
              and certification programs. Our team is certified by Renault and follows the latest
              industry standards.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.2 }
                    }
                  }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 mb-4">
                    <Image
                      src={cert.icon}
                      alt={cert.name}
                      width={80}
                      height={80}
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-900">{cert.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Expert Technicians",
    description: "Our certified technicians have years of experience with Renault vehicles.",
    icon: <span className="text-2xl">🔧</span>
  },
  {
    title: "Genuine Parts",
    description: "We use only authentic Renault parts for all repairs and replacements.",
    icon: <span className="text-2xl">⚙️</span>
  },
  {
    title: "Modern Facility",
    description: "State-of-the-art diagnostic and repair equipment for precise service.",
    icon: <span className="text-2xl">🏢</span>
  }
];

const team = [
  {
    name: "John Smith",
    role: "Master Technician",
    image: "https://i.pravatar.cc/400?img=1"
  },
  {
    name: "Sarah Johnson",
    role: "Service Advisor",
    image: "https://i.pravatar.cc/400?img=2"
  },
  {
    name: "Mike Wilson",
    role: "Diagnostic Specialist",
    image: "https://i.pravatar.cc/400?img=3"
  },
  {
    name: "Emma Davis",
    role: "Customer Relations",
    image: "https://i.pravatar.cc/400?img=4"
  }
];

const certifications = [
  {
    name: "Renault Certified",
    icon: "https://placehold.co/80x80/FFD700/000000.png?text=RC"
  },
  {
    name: "ASE Certified",
    icon: "https://placehold.co/80x80/4169E1/FFFFFF.png?text=ASE"
  },
  {
    name: "ISO 9001",
    icon: "https://placehold.co/80x80/228B22/FFFFFF.png?text=ISO"
  },
  {
    name: "Master Guild",
    icon: "https://placehold.co/80x80/8B4513/FFFFFF.png?text=MG"
  }
];
