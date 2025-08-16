import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../styles/globals.scss';

const inter = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Next js Blog Website',
  description: 'A simple blog built with Next.js and SCSS.',
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: '0', padding: '0' }}>
        {children}
      </body>
    </html>
  );
}