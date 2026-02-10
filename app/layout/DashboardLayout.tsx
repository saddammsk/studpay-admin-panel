"use client";


import { usePathname } from "next/navigation";
import Sidebar from "../components/common/Sidebar";
import TopBar from "../components/common/TopBar";

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
