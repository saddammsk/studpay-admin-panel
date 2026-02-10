import { AnalyticsOverview } from "./components/dashboard/AnalyticsOverview";
import DashboardStats from "./components/dashboard/DashboardStats";
import { RecentActivity } from "./components/dashboard/RecentActivity";



export default function DashboardPage() {
  
const today = new Date().toLocaleDateString('en-US');


  return (
    <div className="dashboard-bg">
      <div className="banner-bg mb-8 shadow-3xl rounded-2xl md:p-6 p-4 pb-4 md:flex-nowrap flex-wrap flex items-center justify-between">
        <div>
          <h1 className="text-white xl:text-[57px] md:text-[40px] text-[24px] font-normal md:leading-16">Welcome back, Admin!</h1>
          <p className="md:text-lg text-base font-normal md:leading-7 text-white-1000">{"Here's what's"} happening with StudPay today</p>
        </div>
        <div className="md:text-end md:mt-0 mt-5">
          <span className="block text-sm font-normal leading-5 text-purple-1000">{"Today's Date"}</span>
          <h6 className="text-xl font-normal leading-7 text-white">{today}</h6>
        </div>
      </div>

      <DashboardStats/>

      <AnalyticsOverview/>
 
      <RecentActivity/>


    </div>
  );
}
