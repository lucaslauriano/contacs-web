'use client';
import { ReactNode } from 'react';
import Head from 'next/head';

import { AuthProvider } from '@/contexts/AuthContext';
import './globals.css';

interface IProps {
  children: ReactNode;
}
export default function RootLayout({ children }: IProps) {
  return (
    <html lang='en'>
      <Head>
        <title>Home</title>
      </Head>
      <body>
        <AuthProvider>
          <div>{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
