import TopBar from "./components/common/TopBar";
import { AnalyticsOverview } from "./components/dashboard/AnalyticsOverview";
import DashboardStats from "./components/dashboard/DashboardStats";
import { RecentActivity } from "./components/dashboard/RecentActivity";



export default function DashboardPage() {
  
const today = new Date().toLocaleDateString('en-US');

  return (
    <div className="dashboard-bg">
       <TopBar />

      <DashboardStats/>

      <AnalyticsOverview/>
 
      <RecentActivity/>


    </div>
  );
}
