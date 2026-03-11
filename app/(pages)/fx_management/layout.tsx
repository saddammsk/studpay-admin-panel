import TopBarFinance from '@/app/components/common/TopBarFinance';
import React from 'react';

export default function UserLayout({
      children,
}: {
      children: React.ReactNode;
}) {
      return (
            <div className="flex-1">
                  <TopBarFinance />
                  {children}
            </div>
      );
}