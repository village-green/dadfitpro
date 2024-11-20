"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { signOut } from '@/lib/firebase/auth';
import { Users, ShoppingBag, FileText, Settings } from 'lucide-react';

export default function AdminDashboard() {
  const { user, loading, isAdmin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      router.push('/admin/signin');
    }
  }, [user, loading, isAdmin, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const handleSignOut = async () => {
    await signOut();
    router.push('/admin/signin');
  };

  const menuItems = [
    { icon: Users, label: 'Manage Users', href: '/admin/users' },
    { icon: ShoppingBag, label: 'Products', href: '/admin/products' },
    { icon: FileText, label: 'Stories', href: '/admin/stories' },
    { icon: Settings, label: 'Settings', href: '/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-muted p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <Card
              key={item.label}
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => router.push(item.href)}
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-semibold">{item.label}</h2>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}