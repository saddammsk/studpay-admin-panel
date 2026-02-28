import type { Metadata } from "next";
import { Public_Sans, Inter } from "next/font/google";
import "./globals.css";
import DashboardLayout from "./layout/DashboardLayout";
import ReduxProvider from "./store/ReduxProvider";

export const metadata: Metadata = {
  title: "StudPay",
  description: "StudPay is a platform for managing student payments and invoices",
};

  
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  className={`bg-gray-1500 ${inter.variable} ${publicSans.variable} antialiased`}
      >
        <ReduxProvider>
        <DashboardLayout>{children}</DashboardLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
