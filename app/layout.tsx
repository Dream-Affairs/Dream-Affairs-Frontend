import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Providers from './Providers';

const workSans = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dream Affairs',
  description: 'For all things dreamy and romantic, plan your dream wedding with us.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <Providers>
          {children} <Toaster />
        </Providers>
      </body>
    </html>
  );
}
