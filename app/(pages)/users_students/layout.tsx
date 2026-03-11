import TopBarUser from '@/app/components/common/TopBarUser';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: " Users / Students - StudPay",
  description: "StudPay is a platform for managing student payments and invoices",
};

export default function UserLayout({
      children,
}: {
      children: React.ReactNode;
}) {
      return (
            <div className="flex-1">
                  <TopBarUser />
                  {children}
            </div>
      );
}