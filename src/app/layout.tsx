import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const geistSans = Roboto_Condensed({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "400"
});

const geistMono = Roboto_Condensed({
  variable: "--font-geist-mono",
  subsets: ["latin"],
    weight: "400"
});

export const metadata: Metadata = {
  title: "Taxi-Forfait",
  description: "Votre taxi, à votre façon",
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
