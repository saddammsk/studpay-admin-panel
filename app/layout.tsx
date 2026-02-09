import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import DashboardLayout from "./layout/DashboardLayout";
import ReduxProvider from "./store/ReduxProvider";

export const metadata: Metadata = {
  title: "StudPay",
  description: "StudPay is a platform for managing student payments and invoices",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  className={`bg-gray-1500 ${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <ReduxProvider>
        <DashboardLayout>{children}</DashboardLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
