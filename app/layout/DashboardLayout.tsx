"use client";

import Sidebar from "@/app/components/Sidebar";
import TopBar from "@/app/components/TopBar";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isAuthRoute = pathname?.startsWith("/auth");

  return (
    <main>
      {isAuthRoute ? (
        <div className="flex-1">{children}</div>
      ) : (
        <div className="flex-1">
          <Sidebar />
          <div className="font-neulis-sans lg:pl-64 pt-19.25">
            <div className="md:p-6 p-4">
              <TopBar />
              {children}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default DashboardLayout;
