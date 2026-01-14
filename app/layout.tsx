import { Suspense } from 'react';

import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';

import './globals.css';
import ThemeRegistry from '@/lib/mui/theme-registry';

export const metadata = {
  title: 'Filjumar - Fullstack Web Developer',
  description: '',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const RouteProgress = dynamic(
  () => import('@/components/shared/RouteProgress')
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.variable}>
      <body suppressHydrationWarning>
        <ThemeRegistry>
          <Suspense fallback={<RouteProgress />}>
            {/* <RouteProgress /> */}
            {children}
          </Suspense>
        </ThemeRegistry>
      </body>
    </html>
  );
}
