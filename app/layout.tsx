import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { EmailModal } from '@/components/email-modal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DadFitPro - Home Fitness for Busy Dads',
  description: 'Transform your body and life with home workouts using adjustable dumbbells. Perfect for busy dads who want to look and feel amazing.',
  keywords: 'dad fitness, home workouts, adjustable dumbbells, busy dad workout, father fitness',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <EmailModal />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}