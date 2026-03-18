import SettingsTopBar from '@/app/components/Settings/SettingsTopBar';
import React from 'react';

export default function UserLayout({
      children,
}: {
      children: React.ReactNode;
}) {
      return (
            <div className="flex-1">
                  <SettingsTopBar />
                  {children}
            </div>
      );
}