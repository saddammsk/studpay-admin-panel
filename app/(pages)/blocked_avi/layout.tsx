import TopBarBlock from '@/app/components/common/TopBarBlock';
import React from 'react';

export default function UserLayout({
      children,
}: {
      children: React.ReactNode;
}) {
      return (
            <div className="flex-1">
                  <TopBarBlock />
                  {children}
            </div>
      );
}