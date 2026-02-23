import TopBarUser from '@/app/components/common/TopBarUser';
import React from 'react';

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