
import Sidebar from "@/app/components/Sidebar";
import TopBar from "@/app/components/TopBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
     return (
          <>
          <Sidebar />

          <div className="font-neulis-sans lg:pl-64 pt-19.25">
               <div className="md:p-6 p-4">
                    <TopBar />
                    {children}
               </div>
          </div>
          </>
     );
};

export default DashboardLayout;
