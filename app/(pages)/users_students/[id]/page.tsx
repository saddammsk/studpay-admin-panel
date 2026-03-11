import FlowMatchTable from '@/app/components/FlowMatchTable';
import UserStats from "@/app/components/UsersStudent/UserStats";
import ActiveRiskFlags from "@/app/components/UsersStudent/ActiveRiskFlags";
import RecentActivity from "@/app/components/UsersStudent/RecentActivity";
import RecentAuditTrail from "@/app/components/UsersStudent/RecentAuditTrail";
import AdminActions from "@/app/components/UsersStudent/AdminActions";
import RecurringPulse from "@/app/components/UsersStudent/RecurringPulse";
import { Metadata } from 'next';


 export const metadata: Metadata = {
  title: " User Details - StudPay",
  description: "StudPay is a platform for managing student payments and invoices",
};

const UserDetailPage = () => {

  return (
    <>
    <div className='font-inter'>

      <div className='flex xl:flex-row flex-col items-start gap-4'>

        <div className='xl:w-[calc(100%-300px)] w-full'>

          <UserStats/>

          <ActiveRiskFlags/>
         
          <RecentActivity/>

          <RecentAuditTrail/>

        </div>

        <AdminActions/>

      </div>

      <div className='py-4 space-y-6'>

        <RecurringPulse />
    
        <FlowMatchTable />
        
      </div>

    </div>
    </>
  );
};

export default UserDetailPage;
