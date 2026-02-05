"use client";

import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import TopBar from "@/app/components/TopBar";

const DashboardShell = ({ children }: { children: React.ReactNode }) => {
     const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

     return (
          <>
               <Sidebar
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
               />

               <div className="font-neulis-sans lg:pl-64 pt-19.25">
                    <div className="md:p-6 p-4">
                         <TopBar onMenuClick={() => setSidebarOpen(prev => !prev)} />
                         {children}
                    </div>
               </div>
          </>
     );
};

export default DashboardShell;
