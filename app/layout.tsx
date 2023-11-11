import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const workSans = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dream Affairs',
  description: 'For all things dreamy and romantic, plan your dream wedding with us.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        {children} <Toaster />
      </body>
    </html>
  );
}
