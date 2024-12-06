import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const nunito = localFont({
  src: './fonts/Nunito-VariableFont_wght.ttf',
  variable: '--font-nunito',
  weight: '400 500 600 700 800 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/logo.png" />
      </head>
      <body className={`${nunito.variable}`}>{children}</body>
    </html>
  );
}
