import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Header from '@/app/components/Header';

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mansfield Cat Rescue",
  description: "Mansfield Cat Rescue is a volunteer only, UK-registered charity operating Mansfield, Nottinghamshire",
  // TODO: "og:image" thumbnail? "twitter:card" social media links?
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
