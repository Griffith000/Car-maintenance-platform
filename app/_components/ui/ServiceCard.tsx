'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type ServiceCardProps = {
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
};

export default function ServiceCard({ title, description, footer, children }: ServiceCardProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle className="text-2xl text-center">{title}</CardTitle>}
          {description && <CardDescription className="text-center">{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent>
        {children}
      </CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}
