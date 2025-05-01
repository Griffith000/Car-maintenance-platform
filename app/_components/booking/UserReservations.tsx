'use client';

import { useMutation, useQuery ,useQueryClient} from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Car, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {Trash} from 'lucide-react';  
import axios from 'axios';
import { toast } from 'sonner';

interface Reservation {
  reservationId: number;
  date: string;
  mobilePhone: string;
  repairStatus: string;
  baseFee: number;
  vehicleId: string;
  vehicle?: {
    vin: string;
    local: boolean;
    registration?: string;
    registrationType?: string;
  };
}

interface UserReservationsProps {
  userId: string;
}
const fetchUserReservations = async (userId: string) => {
  const response = await axios.get(`/api/v1/userspace/reservation/user/${userId}`);
  return response.data;
};

export default function UserReservations({ userId }: UserReservationsProps) {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['userReservations', userId],
    queryFn: () => fetchUserReservations(userId),
    staleTime: 1000 * 60 * 5, // this code is used to prevent the user from fetching the reservations too often it is set to 5 minutes

  });



  const deleteMutation = useMutation({
    mutationFn: async (reservationId: number) => {
      const response = await axios.delete(`/api/v1/userspace/reservation/${reservationId}`);
      return response.data;
    },
    onSuccess: () => {
      toast.success('Reservation canceled successfully!');
      queryClient.invalidateQueries({ queryKey: ['userReservations', userId] });
    },
    onError: (err: any) => {
      toast.error('Failed to cancel reservation: ' + (err instanceof Error ? err.message : 'Unknown error occurred'));
    }
  });

  const handleDelete = (reservationId: number) => {
    deleteMutation.mutate(reservationId);
  };

 
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'DIAGNOSTIC':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
      case 'REPAIR':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      case 'SUCCESS':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'FAILURE':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4 space-x-4 flex justify-center items-center h-[50vh]">
       <Loader2 className="animate-spin h-8 w-8 text-gray-500 dark:text-gray-400" />
      </div>
    );
  }

  if (isError) {
    return (
      <Card className="bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800">
        <CardHeader>
          <div className="flex items-center">
            <AlertCircle className="text-red-500 mr-2 h-5 w-5" />
            <CardTitle>Error Loading Reservations</CardTitle>
          </div>
          <CardDescription>
            We encountered a problem fetching your reservations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-red-700 dark:text-red-400">
            {error instanceof Error ? error.message : 'Unknown error occurred'}
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </CardFooter>
      </Card>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Card className="text-center p-8">
        <CardHeader>
          <CardTitle>No Reservations Found</CardTitle>
          <CardDescription>
            You don't have any maintenance reservations yet.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="mb-6">Would you like to schedule a maintenance appointment for your vehicle?</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/services">Book a Service</Link>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 space-x-6 flex flex-wrap p-10"
    >
      {data.map((reservation: Reservation) => (
        <motion.div
          
          key={reservation.reservationId}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="overflow-hidden">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Reservation #{reservation.reservationId}</CardTitle>
                  <CardDescription>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2 ${getStatusColor(reservation.repairStatus)}`}>
                      {reservation.repairStatus}
                    </span>
                  </CardDescription>
                </div>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(reservation.reservationId)}>
                  <Trash className="h-4 w-4" />
                </Button>
                {reservation.baseFee > 0 && (
                  <div className="bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-md">
                    <span className="text-sm font-medium text-primary">
                      ${reservation.baseFee.toFixed(2)}
                    </span>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{formatDate(reservation.date)}</span>
                </div>
                <div className="flex items-center">
                  <Car className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>VIN: {reservation.vehicleId}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Duration: 1 hour</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
