'use client'
import { useAppSelector } from '@/app/store/hooks';
import BarChart from '../BarChart'
import LineChart from '../LineChart'
import { RootState } from '@/app/store/store';


export const AnalyticsOverview = () => {

    const { revenueChart, verificationChart } = useAppSelector(
    (state: RootState) => state.dashboard.analytics
  );


  return (
    <div className='w-full'>
           <div className="flex items-center gap-2 mb-4 mt-8">
        <div className="line-bg-2 rounded-full h-8 w-1 block"></div>
        <h4 className="text-2xl font-normal leading-8 text-blue-1100">Analytics Overview</h4>
      </div>
      <div className="grid md:grid-cols-2 xl:gap-8 gap-4">
        <div className="shadow-4xl border border-gray-1600 rounded-xl bg-white xl:p-6 p-4">
          <h4 className="text-lg font-normal leading-7 mb-7 tracking-[-0.45px] text-blue-1200">Monthly Transaction Volume</h4>
        <LineChart
        data={revenueChart}
        datasets={[
          {
            key: "revenue",
            label: "Revenue",
            borderColor: "#2563EB",
            backgroundColor: "#2563EB33",
          },
        ]}
      />


        </div>
        <div className="shadow-4xl border border-gray-1600 rounded-xl bg-white xl:p-6 p-4">
          <h4 className="text-lg font-normal leading-7 mb-7 tracking-[-0.45px] text-blue-1200">Student Verification Status</h4>
          <BarChart
            data={verificationChart}
            datasets={[
              { key: "thisMonth", label: "This Month", color: "#2196f3" },
              { key: "lastMonth", label: "Last Month", color: "#ff9800" },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
