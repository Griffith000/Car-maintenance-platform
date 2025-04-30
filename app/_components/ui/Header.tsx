'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/themeToggle';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { UserAvatar } from './UserAvatar';
import { useUserStore } from '@/app/stores/userStore';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { userId } = useUserStore();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-sm dark:bg-background/80"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">

            <Image
              src="/images/renault-logo.jpg"
              alt="Renault light Logo"
              width={40}
              height={40}
              className="object-contain"
              priority

            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-destructive  hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-destructive hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-destructive hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-destructive hover:text-primary transition-colors">
              Contact
            </Link>
            {!userId ? (
              <Link href="/login" className="text-destructive hover:text-primary transition-colors">
                Login
              </Link>
            ) : (
              <Link href="/protected" className="text-destructive hover:text-primary transition-colors">
                Reservations
              </Link>
            )}
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <UserAvatar />
           
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden mt-4"
            >
              <div className="flex flex-col space-y-3 pb-4">
                <Link
                  href="/"
                  className="px-2 py-2 text-foreground/80 hover:bg-accent rounded-md transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="px-2 py-2 text-foreground/80 hover:bg-accent rounded-md transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="px-2 py-2 text-foreground/80 hover:bg-accent rounded-md transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="px-2 py-2 text-foreground/80 hover:bg-accent rounded-md transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/login"
                  className="px-2 py-2 text-foreground/80 hover:bg-accent rounded-md transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
