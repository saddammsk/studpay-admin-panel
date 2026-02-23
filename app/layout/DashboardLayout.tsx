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
          <div className="font-neulis-sans xl:pl-72 lg:pl-62.5 pt-22.5">
            <div className="xl:p-8 p-4"> 
              {children}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default DashboardLayout;
