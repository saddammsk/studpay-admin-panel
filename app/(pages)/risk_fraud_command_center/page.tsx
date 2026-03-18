'use client'
import TopBar from "@/app/components/common/TopBar";
import Link from "next/link";
import Image from "next/image";
import StatsCards from "@/app/components/StatsCards";
import AlertsTable from "@/app/components/AlertsTable";
import { useRiskFraudStore } from "@/app/store/zustand/useRiskFraudStore";

export default function RiskFraudPage() {
  const { search, setSearch, filteredAlerts } = useRiskFraudStore();
  const total = filteredAlerts().length;

  return (
    <>
      <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
        <TopBar />
        <div className="p-6">
          <div className="flex items-center justify-between flex-wrap gap-5 mb-6">
            <div className="xl:flex-1">
              <h6 className="text-xl font-bold leading-7 text-black-1600">
                Risk & Fraud Command Center
              </h6>
              <p className="text-sm font-normal leading-5 text-gray-1900">
                Real-time monitoring and management of fraud alerts and risk assessments
              </p>
            </div>
            <Link
              href="/"
              className="text-sm font-medium leading-5 text-blue-1300 py-2 px-4 border border-gray-3600 bg-white-1100 rounded-md flex items-center gap-2"
            >
              <img src="/images/refresh-icon.svg" alt="" />
              Refresh
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-4 mb-6">
            <StatsCards />
          </div>

          <div className="bg-white rounded-lg p-4 flex items-center gap-3">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-sm font-normal font-neulis-sans text-gray-1900 placeholder:text-gray-1900 px-4 pl-10 h-10 bg-white border border-gray-3600 rounded-md w-full outline-0"
                placeholder="Search metrics..."
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-3">
                <Image src="../images/search-icon.svg" width={16} height={16} alt="" />
              </div>
            </div>
            <Link
              href="/"
              className="text-sm font-medium leading-5 text-blue-1300 py-2 px-4 border border-gray-3600 bg-white-1100 rounded-md flex items-center gap-2"
            >
              <img src="/images/refresh-icon.svg" alt="" />
              Filters
            </Link>
          </div>

          {/* Table header */}
          <div className="flex items-center mt-4 flex-wrap gap-4 justify-between">
            <h4 className="text-lg leading-7 font-semibold text-blue-1300">Live Risk Ledger</h4>
            <p className="text-sm font-normal leading-5 text-gray-1900">
              Showing {total} of {total} alerts
            </p>
          </div>

          <AlertsTable />
        </div>
      </div>
    </>
  );
}