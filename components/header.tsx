"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dumbbell, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Workouts', path: '/workouts' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled || !isHome
          ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className={cn(
              "flex items-center space-x-2 transition-colors",
              isScrolled || !isHome ? "text-foreground" : "text-white"
            )}
          >
            <Dumbbell className="h-8 w-8" />
            <span className="font-bold text-xl">DadFitPro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isScrolled || !isHome ? "text-foreground" : "text-white",
                  pathname === item.path && "text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              className={cn(
                "transition-colors",
                !isScrolled && isHome && "bg-white text-gray-900 hover:bg-white/90"
              )}
              asChild
            >
              <Link href="/products">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className={cn(
              "md:hidden",
              isScrolled || !isHome ? "text-foreground" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "block px-3 py-2 text-base font-medium rounded-md",
                    pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full" asChild>
                  <Link href="/products">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}