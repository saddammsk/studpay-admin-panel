import TopBarFinancingGuaranty from '@/app/components/common/TopBarFinancingGuaranty';
import React from 'react';

export default function UserLayout({
      children,
}: {
      children: React.ReactNode;
}) {
      return (
            <div className="flex-1">
                  <TopBarFinancingGuaranty />
                  {children}
            </div>
      );
}