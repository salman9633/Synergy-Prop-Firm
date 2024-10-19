import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import logo from '@/./assets/synergy-logo.png'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Synergy Prop Firm",
  description: "Synergy Prop Firm",
  icons:'https://res.cloudinary.com/delmsjmlq/image/upload/v1729373347/6_klwgxa.png'
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
        {children}
      </body>
    </html>
  );
}
