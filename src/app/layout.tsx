import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './_styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gamza',
  description: 'Hansei Gamza club website',
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
