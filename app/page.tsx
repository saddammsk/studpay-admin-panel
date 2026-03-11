import TopBar from "./components/common/TopBar";
import DashboardStats from "./components/dashboard/DashboardStats";
import AviPipelineFunnel from "./components/dashboard/AviPipelineFunnel";
import MonthlyLoanOverview from "./components/dashboard/MonthlyLoanOverview";
import { fetchData } from "./lib/useFetch";
import { LiveEvents } from "./components/dashboard/LiveEvents";
import { FourEyesApprovalQueue } from "./components/dashboard/FourEyesApprovalQueue";
import RiskFraudAlerts from "./components/dashboard/Riskfraudalerts";
import RecentTransactionsCard from "./components/dashboard/RecentTransections";
import RecentTransactionsList from "./components/dashboard/Recenttransactionslist";
import StudSafeAlerts from "./components/dashboard/StudSafeAlerts";
import TablesOfOpportunities from "./components/dashboard/Tablesofopportunities";

export default async function DashboardPage() {
  const stats = await fetchData("/api/dashboard");

  return (
    <div className="dashboard-bg bg-blue-2800">
      <TopBar />

      <DashboardStats stats={stats} />

      <AviPipelineFunnel />

      <MonthlyLoanOverview />

      <div className="flex-1">
        <div className="mt-8 5xl:flex grid 4xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start gap-3">
          <LiveEvents />

          <FourEyesApprovalQueue />

          <RiskFraudAlerts />
        </div>
        <div className="mt-8 grid 4xl:grid-cols-3 md:grid-cols-2 grid-cols-1 4xl:gap-6 gap-4 items-start">
          <RecentTransactionsCard />

          <RecentTransactionsList />

          <div className="flex-1">
            <StudSafeAlerts />

            <TablesOfOpportunities />
          </div>
        </div>
      </div>
    </div>
  );
}
