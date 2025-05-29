'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, type ReactNode } from 'react';
import{ReactQueryDevtools} from "@tanstack/react-query-devtools"
import {Toaster} from 'sonner';

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (

    <QueryClientProvider client={queryClient}>
      <Toaster />
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>


  );
}