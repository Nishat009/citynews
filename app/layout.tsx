// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { robotoCondensed } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'The Downtown',
  description: 'News & Opinion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={robotoCondensed.className}>   {/* ← apply here */}
      <body className={robotoCondensed.className}>
        {/* Navbar, main content, etc. */}
        {children}
      </body>
    </html>
  );
}