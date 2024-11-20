"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './useAuth';

export function useAdminProtected() {
  const { user, loading, isAdmin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      router.push('/admin/signin');
    }
  }, [user, loading, isAdmin, router]);

  return { user, loading, isAdmin };
}