import Link from "next/link";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const data = [62000, 75000, 78000, 70000, 90000, 95000, 110000];
const labels2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const blueData = [120, 150, 190, 140, 200, 230, 260];
const orangeData = [40, 30, 50, 20, 35, 30, 25];
interface Transaction {
  name: string;
  description: string;
  amount: string;
  time: string;
  status: "completed" | "pending" | "failed";
}

const transactions: Transaction[] = [
  { name: "John Smith", description: "Tuition Payment", amount: "€2,450", time: "2 hours ago", status: "completed" },
  { name: "Maria Garcia", description: "Living Allowance", amount: "€1,200", time: "4 hours ago", status: "pending" },
  { name: "David Chen", description: "Book Allowance", amount: "€850", time: "6 hours ago", status: "completed" },
  { name: "Sarah Johnson", description: "Semester Fee", amount: "€3,200", time: "8 hours ago", status: "failed" },
  { name: "Ahmed Hassan", description: "Lab Fee", amount: "€500", time: "12 hours ago", status: "completed" },
];

const statusColors: Record<Transaction["status"], string> = {
  completed: "bg-green-1200 text-green-1100",
  pending: "bg-yellow-1000 text-brown-1000",
  failed: "bg-red-1000 text-white-1100",
};
type DocumentItem = {
  id: number;
  name: string;
  document: string;
  time: string;
  bgColor: string;
};

const documents: DocumentItem[] = [
  {
    id: 1,
    name: "Emma Wilson",
    document: "Bank Statement",
    time: "2 days ago",
    bgColor: "bg-red-1100",
  },
  {
    id: 2,
    name: "Emma Wilson",
    document: "Bank Statement",
    time: "2 days ago",
    bgColor: "bg-yellow-1000",
  },
  {
    id: 4,
    name: "Emma Wilson",
    document: "Bank Statement",
    time: "2 days ago",
    bgColor: "bg-red-1100",
  },
  {
    id: 3,
    name: "Emma Wilson",
    document: "Bank Statement",
    time: "2 days ago",
    bgColor: "bg-white-1000",
  },
  {
    id: 5,
    name: "Emma Wilson",
    document: "Bank Statement",
    time: "2 days ago",
    bgColor: "bg-red-1100",
  },
];
export default function Home() {
  return (
    <div className="dashboard-bg">
      <div className="banner-bg mb-8 shadow-3xl rounded-2xl md:p-6 p-4 pb-4 md:flex-nowrap flex-wrap flex items-center justify-between">
        <div>
          <h1 className="text-white xl:text-[57px] md:text-[40px] text-[24px] font-normal md:leading-16">Welcome back, Admin!</h1>
          <p className="md:text-lg text-base font-normal md:leading-7 text-white-1000">Here's what's happening with StudPay today</p>
        </div>
        <div className="md:text-end md:mt-0 mt-5">
          <span className="block text-sm font-normal leading-5 text-purple-1000">Today's Date</span>
          <h6 className="text-xl font-normal leading-7 text-white">5/24/2025</h6>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <div className="line-bg rounded-full h-8 w-1 block"></div>
        <h4 className="text-2xl font-normal leading-8 text-blue-1100">Key Performance Indicators</h4>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
        <div className="shadow-4xl border border-gray-1600 rounded-xl bg-white 2xl:p-6 p-4 flex items-start justify-between">
          <div className="">
            <h6 className="text-sm font-medium leading-5 mb-2 text-gray-1100">Total Active Students</h6>
            <span className="block text-2xl font-bold leading-8 text-blue-1200 mb-1">24,563</span>
            <h6 className="text-sm font-medium leading-5 text-green-1000">+12% from last month</h6>
          </div>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-1300">
            <img src="/images/user-icon.svg" className="gray-icon w-6 h-6" alt=""></img>
          </div>
        </div>
        <div className="shadow-4xl border border-gray-1600 rounded-xl bg-white 2xl:p-6 p-4 flex items-start justify-between">
          <div className="">
            <h6 className="text-sm font-medium leading-5 mb-2 text-gray-1100">Verified Users</h6>
            <span className="block text-2xl font-bold leading-8 text-blue-1200 mb-1">22,481</span>
            <h6 className="text-sm font-medium leading-5 text-green-1000">+8% from last month</h6>
          </div>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-1300">
            <img src="/images/tick-circle.svg" className="gray-icon w-6 h-6" alt=""></img>
          </div>
        </div>
        <div className="shadow-4xl border border-gray-1600 rounded-xl bg-white 2xl:p-6 p-4 flex items-start justify-between">
          <div className="">
            <h6 className="text-sm font-medium leading-5 mb-2 text-gray-1100">Total Amount Blocked in AVI</h6>
            <span className="block text-2xl font-bold leading-8 text-blue-1200 mb-1">€12.4M</span>
            <h6 className="text-sm font-medium leading-5 text-green-1000">+5% from last month</h6>
          </div>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-1300">
            <img src="/images/shield-icon.svg" className="gray-icon w-6 h-6" alt=""></img>
          </div>
        </div>
        <div className="shadow-4xl border border-gray-1600 rounded-xl bg-white 2xl:p-6 p-4 flex items-start justify-between">
          <div className="">
            <h6 className="text-sm font-medium leading-5 mb-2 text-gray-1100">Monthly Disbursement Volume</h6>
            <span className="block text-2xl font-bold leading-8 text-blue-1200 mb-1">€3.8M</span>
            <h6 className="text-sm font-medium leading-5 text-green-1000">+15% from last month</h6>
          </div>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-1300">
            <img src="/images/euro-icon.svg" className="gray-icon w-6 h-6" alt=""></img>
          </div>
        </div>
        <div className="shadow-4xl border border-gray-1600 rounded-xl bg-white 2xl:p-6 p-4 flex items-start justify-between">
          <div className="">
            <h6 className="text-sm font-medium leading-5 mb-2 text-gray-1100">New Subscriptions This Week</h6>
            <span className="block text-2xl font-bold leading-8 text-blue-1200 mb-1">1,247</span>
            <h6 className="text-sm font-medium leading-5 text-green-1000">+23% from last week</h6>
          </div>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-1300">
            <img src="/images/user-plus-icon.svg" className="gray-icon w-6 h-6" alt=""></img>
          </div>
        </div>
        <div className="shadow-4xl border border-gray-1600 rounded-xl bg-white 2xl:p-6 p-4 flex items-start justify-between">
          <div className="">
            <h6 className="text-sm font-medium leading-5 mb-2 text-gray-1100">Documents Pending Review</h6>
            <span className="block text-2xl font-bold leading-8 text-blue-1200 mb-1">156</span>
            <h6 className="text-sm font-medium leading-5 text-green-1000">-8% from yesterday</h6>
          </div>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-1300">
            <img src="/images/kyc-icon.svg" className="gray-icon w-6 h-6" alt=""></img>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-4 mt-8">
        <div className="line-bg rounded-full h-8 w-1 block"></div>
        <h4 className="text-2xl font-normal leading-8 text-blue-1100">Analytics Overview</h4>
      </div>
      <div className="grid md:grid-cols-2 xl:gap-8 gap-4">
        <div className="shadow-4xl border border-gray-1600 rounded-xl bg-white xl:p-6 p-4">
          <h4 className="text-lg font-normal leading-7 mb-7 tracking-[-0.45px] text-blue-1200">Monthly Transaction Volume</h4>
          <LineChart labels={labels} data={data} />

        </div>
        <div className="shadow-4xl border border-gray-1600 rounded-xl bg-white xl:p-6 p-4">
          <h4 className="text-lg font-normal leading-7 mb-7 tracking-[-0.45px] text-blue-1200">Monthly Transaction Volume</h4>
          <BarChart labels={labels2} blueData={blueData} orangeData={orangeData} />
        </div>
      </div>
      <div className="flex items-center gap-2 mb-4 mt-8">
        <div className="line-bg rounded-full h-8 w-1 block"></div>
        <h4 className="text-2xl font-normal leading-8 text-blue-1100">Recent Activity</h4>
      </div>
      <div className="grid md:grid-cols-2 xl:gap-8 gap-4">
        <div className="shadow-4xl border border-gray1600 rounded-xl bg-white xl:p-6 p-4">
          <h4 className="text-lg font-normal leading-7 mb-6 tracking-[-0.45px] text-gray-900">
            Latest Transactions
          </h4>

          <div className="flex flex-col gap-3">
            {transactions.map((tx, idx) => (
              <div
                key={idx}
                className="border border-gray1600 rounded-lg p-3 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <h6 className="text-base font-normal leading-6 text-black-1200 mb-1">
                    {tx.name}
                  </h6>
                  <span className="block text-sm font-normal leading-5 text-gray-1100">
                    {tx.description}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-end">
                    <h6 className="text-base font-normal leading-6 text-black-1200 mb-1">
                      {tx.amount}
                    </h6>
                    <span className="block text-sm font-normal leading-5 text-gray-1200">
                      {tx.time}
                    </span>
                  </div>
                  <div
                    className={`text-xs font-normal leading-4 py-0.75 px-2.75 rounded-full ${statusColors[tx.status]}`}
                  >
                    {tx.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="shadow-4xl border border-gray1600 rounded-xl bg-white xl:p-6 p-4">
          <h4 className="text-lg font-normal leading-7 mb-6 tracking-[-0.45px] text-black-1200">
            Documents Pending Review
          </h4>
          <div className="space-y-4">
            {documents.map((item) => (
              <div
                key={item.id}
                className="border border-gray1600 rounded-lg p-3 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`${item.bgColor} rounded-lg w-8 h-8 flex items-center justify-center`}
                  >
                    <img src="/images/red-file.svg" alt="" />
                  </div>

                  <div>
                    <h6 className="text-base font-normal leading-6 text-blue-1200">
                      {item.name}
                    </h6>

                    <span className="block text-sm mb-1.5 font-normal leading-5 text-gray-1100">
                      {item.document}
                    </span>

                    <div className="flex items-center gap-1">
                      <img src="/images/timer-gray.svg" alt="" />
                      <h6 className="text-xs font-normal leading-4 text-gray-1200">
                        {item.time}
                      </h6>
                    </div>
                  </div>
                </div>

                <Link
                  href="/"
                  className="text-blue-1000 text-sm font-normal leading-5 py-2 px-3 inline-block border border-blue-1000 rounded-md"
                >
                  Review
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
