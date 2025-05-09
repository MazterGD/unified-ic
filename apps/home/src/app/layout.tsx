import type { Metadata } from 'next';
import { Open_Sans, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Discover | IC 2025',
  description: 'AIESEC International Congress 2025 Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${openSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header transparent={true} />
        {children}
      </body>
    </html>
  );
}
