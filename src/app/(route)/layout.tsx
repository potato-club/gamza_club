import type { Metadata } from 'next';
import '../_styles/globals.css';
import localFont from 'next/font/local';
import QueryProvider from '../_components/provider/QueryProvider';

const pretendard = localFont({
  src: '../../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 200 300 400 500 600 700 800 900',
  variable: '--font-pretendard',
});

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
      <body className={pretendard.className} suppressHydrationWarning={true}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
