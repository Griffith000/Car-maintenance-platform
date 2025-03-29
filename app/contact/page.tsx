'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitContact } from '../actions/contact';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full text-foreground dark:text-foreground disabled:bg-disabled disabled:text-disabled" disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useFormState(submitContact, null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-background dark:bg-background-dark min-h-screen pt-20">
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="container mx-auto px-4 py-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have questions about our services? We're here to help and answer any question you might have.
        </p>
      </motion.div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-semibold text-foreground dark:text-foreground mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial="initial"
                  animate="animate"
                  variants={fadeIn}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground dark:text-foreground">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className="bg-background dark:bg-background-dark rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-foreground dark:text-foreground mb-6">
              Send us a Message
            </h2>

            <form action={formAction} className="space-y-6">
              {state?.error && (
                <div className="p-3 rounded-md bg-red-50 dark:bg-red-900 text-red-500 dark:text-red-500 text-sm">
                  {state.error}
                </div>
              )}
              {state?.success && (
                <div className="p-3 rounded-md bg-green-50 dark:bg-green-900 text-green-500 dark:text-green-500 text-sm">
                  {state.message}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-foreground dark:text-foreground">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    className="w-full text-foreground dark:text-foreground"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-foreground dark:text-foreground">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    className="w-full text-foreground dark:text-foreground"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground dark:text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full text-foreground dark:text-foreground"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground dark:text-foreground">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full text-foreground dark:text-foreground"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground dark:text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="w-full min-h-[120px] text-foreground dark:text-foreground"
                />
              </div>

              <SubmitButton />
            </form>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ delay: 0.6 }}
        className="bg-background dark:bg-background-dark py-12 mt-12"
      >
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Visit Our Service Center
            </h2>
            <p className="text-gray-300 dark:text-gray-500 max-w-2xl mx-auto">
              Experience top-notch Renault service at our state-of-the-art facility.
              Our expert technicians are ready to assist you with all your automotive needs.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    content: "123 Service Street, Automotive District, City, 12345"
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: "+1 (555) 123-4567"
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "service@renaultcenter.com"
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 3:00 PM"
  }
];
