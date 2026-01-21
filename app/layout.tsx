// app/layout.tsx
import type { Metadata } from 'next';
// import roboto from '@/lib/fonts';           // ← import here
import './globals.css';
import { roboto } from '@/lib/fonts';

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
    <html lang="en" className={roboto.className}>   {/* ← apply here */}
      <body className={roboto.className}>
        {/* Navbar, main content, etc. */}
        {children}
      </body>
    </html>
  );
}