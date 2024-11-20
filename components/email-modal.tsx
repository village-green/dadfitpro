"use client";

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Mail } from 'lucide-react';

export function EmailModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (!storedEmail) {
      setOpen(true);
    }
  }, []);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      localStorage.setItem('userEmail', email);
      toast({
        title: "Welcome to DadFitPro!",
        description: "Get ready to transform your life with our expert fitness guidance.",
      });
      setOpen(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    // Only allow closing if we have a stored email
    if (localStorage.getItem('userEmail')) {
      setOpen(newOpen);
    }
  };

  return (
    <Dialog 
      open={open} 
      onOpenChange={handleOpenChange}
      modal={true}
    >
      <DialogContent 
        className="sm:max-w-md"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        showCloseButton={false}
      >
        <DialogHeader>
          <div className="mx-auto p-3 rounded-full bg-primary/10 mb-4">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-center text-2xl">Welcome to DadFitPro</DialogTitle>
          <DialogDescription className="text-center">
            Join thousands of dads who've transformed their lives with our expert fitness guidance. Enter your email to get started.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className={`w-full ${!isValid && email ? 'border-red-500' : ''}`}
              autoFocus
              required
            />
            {!isValid && email && (
              <p className="text-sm text-red-500">Please enter a valid email address</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={!isValid}>
            Start My Transformation
          </Button>

          <div className="space-y-2 text-center">
            <p className="text-sm text-muted-foreground">
              Get exclusive access to:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Custom workout plans</li>
              <li>✓ Expert nutrition advice</li>
              <li>✓ Success stories from real dads</li>
              <li>✓ Special equipment discounts</li>
            </ul>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}