'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Shield, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import axios from 'axios';

interface OtpVerificationProps {
  phoneNumber: string;
  onVerificationSuccess: () => void;
  onResendOtp: () => Promise<void>;
}
const sidCode = process.env.TWILIO_VERIFY_SERVICE_SID;
export default function OtpVerification({
  phoneNumber,
  onVerificationSuccess,
  onResendOtp
}: OtpVerificationProps) {
  const [otpValues, setOtpValues] = useState<string[]>(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0 && !canResend) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [countdown, canResend]);
  
  // Focus the first input on initial load
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const formatPhoneNumber = (phone: string) => {
    // Basic formatter for display purposes
    if (phone.length <= 4) return phone;
    const lastFour = phone.slice(-4);
    return `****-${lastFour}`;
  };
  
  const handleInputChange = (index: number, value: string) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;
    
    // Update the OTP values array
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    
    // Auto-focus next input if value is entered
    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace to move to previous input
    if (e.key === 'Backspace' && !otpValues[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const combinedOtp = otpValues.join('');
    if (combinedOtp.length !== 6) {
      toast.error('Please enter a valid 6-digit OTP');
      return;
    }

    setIsVerifying(true);
    try {
     const response= await axios.post('/api/v1/verify-otp', {
      phoneNumber,
      otpCode: combinedOtp
    });

      const {data} = response;
      
      if (data.success) {
        toast.success('Phone number verified successfully!');
        onVerificationSuccess();
      } else {
        toast.error(data.message || 'Invalid OTP. Please try again.');
      }
    } catch (error) {
      toast.error('Verification failed. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendOtp = async () => {
    if (!canResend) return;
    
    try {
      setCanResend(false);
      await onResendOtp();
      setCountdown(60);
      toast.success('New OTP sent to your phone');
    } catch (error) {
      toast.error('Failed to resend OTP. Please try again.');
      setCanResend(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6 max-w-md mx-auto"
    >
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center mb-2">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl">Verification Code</CardTitle>
          <CardDescription>
            We've sent a code to {formatPhoneNumber(phoneNumber)}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div>
                <div className="flex justify-center space-x-2">
                  {otpValues.map((value, index) => (
                    <Input
                      key={index}
                      ref={(el) => { inputRefs.current[index] = el }}
                      value={value}
                      onChange={e => handleInputChange(index, e.target.value)}  
                      onKeyDown={e => handleKeyDown(index, e)}
                      className="h-12 w-12 text-center text-lg font-semibold"
                      inputMode="numeric"
                      autoComplete={index === 0 ? "one-time-code" : undefined}
                      pattern="[0-9]*"
                      maxLength={1}
                    />
                  ))}
                </div>
              </div>
              
              <Button 
                type="submit"
                className="w-full" 
                disabled={otpValues.join('').length !== 6 || isVerifying}
              >
                {isVerifying ? (
                  <div className="flex items-center">
                    <div className="animate-spin mr-2 h-4 w-4 border-2 border-primary border-opacity-50 border-t-transparent rounded-full"></div>
                    Verifying
                  </div>
                ) : (
                  <div className="flex items-center">
                    Verify Code
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-2 pt-0">
          <div className="text-sm text-center text-muted-foreground">
            {canResend ? (
              <span>Didn't receive the code?</span>
            ) : (
              <span className="flex items-center justify-center">
                <Clock className="h-3 w-3 mr-1" />
                Resend available in {countdown}s
              </span>
            )}
          </div>
          <Button
            type="button"
            variant="ghost"
            onClick={handleResendOtp}
            disabled={!canResend}
            className="text-primary"
            size="sm"
          >
            Resend Code
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
