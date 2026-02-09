import BarChart from '../BarChart'
import LineChart from '../LineChart'

const chartDataRevenue = [
  { month: "Jan", revenue: 62000 },
  { month: "Feb", revenue: 75000 },
  { month: "Mar", revenue: 78000 },
  { month: "Apr", revenue: 70000 },
  { month: "May", revenue: 90000 },
  { month: "Jun", revenue: 95000 },
  { month: "Jul", revenue: 110000 },
];

const chartData = [
  { month: "Jan", thisMonth: 120, lastMonth: 40 },
  { month: "Feb", thisMonth: 150, lastMonth: 30 },
  { month: "Mar", thisMonth: 190, lastMonth: 50 },
  { month: "Apr", thisMonth: 140, lastMonth: 20 },
  { month: "May", thisMonth: 200, lastMonth: 35 },
  { month: "Jun", thisMonth: 230, lastMonth: 30 },
  { month: "Jul", thisMonth: 260, lastMonth: 25 },
];

export const AnalyticsOverview = () => {
  return (
    <div className='w-full'>
           <div className="flex items-center gap-2 mb-4 mt-8">
        <div className="line-bg rounded-full h-8 w-1 block"></div>
        <h4 className="text-2xl font-normal leading-8 text-blue-1100">Analytics Overview</h4>
      </div>
      <div className="grid md:grid-cols-2 xl:gap-8 gap-4">
        <div className="shadow-4xl border border-gray-1600 rounded-xl bg-white xl:p-6 p-4">
          <h4 className="text-lg font-normal leading-7 mb-7 tracking-[-0.45px] text-blue-1200">Monthly Transaction Volume</h4>
          <LineChart
        data={chartDataRevenue}
        datasets={[{ key: "revenue", label: "Revenue", borderColor: "#2563EB", backgroundColor: "#2563EB33" }]}
      />

        </div>
        <div className="shadow-4xl border border-gray-1600 rounded-xl bg-white xl:p-6 p-4">
          <h4 className="text-lg font-normal leading-7 mb-7 tracking-[-0.45px] text-blue-1200">Student Verification Status</h4>
          <BarChart
            data={chartData}
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
