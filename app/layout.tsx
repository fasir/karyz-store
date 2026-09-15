import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Karyz | Make your store yours',
  description: 'Build a beautiful online store for your brand with Karyz.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
