'use client';

import { motion } from 'framer-motion';
import { User, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormValues, contactFormSchema } from '../../services/schemas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useUserStore } from '@/app/stores/userStore';
import { useEffect } from 'react';

type ContactFormProps = {
  onSubmit: (data: ContactFormValues) => void;
};

export default function ContactForm({
  onSubmit,
}: ContactFormProps) {
  
  const contactForm = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    mode: 'onChange', 
  });

  const { name, email } = useUserStore();
  
  // Sync form defaults with user store
  useEffect(() => {
    contactForm.reset({
      ...contactForm.getValues(),
      name: name || contactForm.getValues('name'),
      email: email || contactForm.getValues('email'),
    });
  }, [name, email]);

  const handleSubmit = contactForm.handleSubmit((data) => {
    if (!contactForm.formState.isValid) {
      toast.error('Please fill in all required fields');
      return;
    }
    onSubmit(data);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-4"
    >
      <div className="grid gap-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-lg font-medium">Contact Information</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                {...contactForm.register('name')}
              />
              {contactForm.formState.errors.name && (
                <p className="text-sm text-red-500 text-destructive">{contactForm.formState.errors.name.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...contactForm.register('email')}
              />
              {contactForm.formState.errors.email && (
                <p className="text-sm text-red-500 text-destructive">{contactForm.formState.errors.email.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                placeholder="Enter your phone number"
                {...contactForm.register('phone')}
              />
              {contactForm.formState.errors.phone && (
                <p className="text-sm text-red-500 text-destructive">{contactForm.formState.errors.phone.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                <Label htmlFor="message">Additional Information (Optional)</Label>
              </div>
              <Textarea
                id="message"
                placeholder="Any specific details about your vehicle or service needs"
                className="min-h-[100px]"
                {...contactForm.register('message')}
              />
            </div>

            <div className="flex justify-end mt-6">
              <Button
                type="submit"
                disabled={!contactForm.formState.isValid}
              >
                Submit Booking
              </Button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
