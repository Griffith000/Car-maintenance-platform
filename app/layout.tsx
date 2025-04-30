import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryClientProvider from "./query-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react";
import UserStoreSync from "@/app/_components/UserStoreSync"; 
import lazy from "next/dynamic";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Maintenance Platform",
  description: "A platform for managing car maintenance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

const Header = lazy(() => import("@/app/_components/ui/Header"));
const Footer = lazy(() => import("@/app/_components/ui/Footer"));

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SessionProvider> 
          <QueryClientProvider>
            <UserStoreSync />
            <Header />
            {children}
            <Footer />
          </QueryClientProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
