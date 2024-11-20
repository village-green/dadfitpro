"use client";

import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase/config';
import { checkIsAdmin } from '@/lib/firebase/admin';

export function useAuth() {
  const [user, loading, error] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCheckingAdmin, setIsCheckingAdmin] = useState(true);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (user) {
        try {
          const adminStatus = await checkIsAdmin(user.uid);
          setIsAdmin(adminStatus);
        } catch (error) {
          console.error('Error checking admin status:', error);
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
      setIsCheckingAdmin(false);
    };

    checkAdminStatus();
  }, [user]);

  return {
    user,
    loading: loading || isCheckingAdmin,
    error,
    isAdmin,
    isAuthenticated: !!user,
  };
}