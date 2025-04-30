'use client';

import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Car, AlertCircle } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {Trash} from 'lucide-react';  
import axios from 'axios';
import { toast } from 'sonner';



import React from 'react'
import Loading from '../ui/calendar/loading';

export default function UserVehicules() {

    const {isPending, isError, error} = useQuery({
        queryKey: ['vehicles'],
        queryFn: async () => {
          const response = await axios.get('/api/v1/vehicles');
          return response.data;
        }

      });

      if (isPending) return <Loading />;
      if (isError) return <div>Error: {error.message}</div>;
  return (
    <div>
        <Card>
            <CardHeader>
                <CardTitle>My Vehicles</CardTitle>
                <CardDescription>
                    
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    
                </div>
            </CardContent>
            <CardFooter>
                <Button variant="outline" size="sm">
                    Add Vehicle
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
