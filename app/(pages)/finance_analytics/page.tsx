'use client';
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/ui/Button";
import SparklineChart from "@/app/components/SparklineChart";
import ToggleSwitch from "@/app/components/ui/ToggleSwitch";
import TopBar from "@/app/components/common/TopBar";
import RevenueChart2 from "@/app/components/RevenueChart2";
import FinanceDonutChart from "@/app/components/FinanceDonutChart";
import ProgressBar from "@/app/components/ProgressBar";
import UniversityTable from "@/app/components/UniversityTable";
import { useFinanceAnalyticsStore } from "@/app/store/zustand/useFinanceAnalyticsStore";
import { DateRangePicker } from "@/app/components/DateRangePicker";

function SearchDropdown() {
  const { searchQuery, searchResults, setSearchQuery } = useFinanceAnalyticsStore();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        useFinanceAnalyticsStore.setState({ searchResults: [] });
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="text-sm font-normal font-neulis-sans text-gray-1400 placeholder:text-gray-1400 px-4 pl-10 h-9 bg-white border border-gray1600 rounded-xl w-full outline-0"
        placeholder="Search metrics..."
      />
      <div className="absolute top-1/2 -translate-y-1/2 left-3">
        <Image src="/images/search-icon.svg" width={16} height={16} alt="" />
      </div>
      {searchResults.length > 0 && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-1000 rounded-xl shadow-13xl z-30 overflow-hidden">
          {searchResults.map((r) => (
            <button
              key={r}
              onClick={() => setSearchQuery(r)}
              className="w-full text-left px-4 py-2 text-sm text-black-1600 hover:bg-gray-50 capitalize transition-colors"
            >
              {r}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FinanceAnalytics() {
  const {
    forecastEnabled, toggleForecast,
    dateFrom, setDateFrom,
    dateTo, setDateTo,
    resetFilters, exportReport,
    avgLTV, avgCAC, ltvCacRatio,
  } = useFinanceAnalyticsStore();

  return (
    <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
      <TopBar />
      <div className="flex xl:flex-nowrap flex-wrap xl:gap-0 gap-4 items-center bg-white justify-between 2xl:p-8 p-4">
        <div className="xl:flex-1">
          <h6 className="text-2xl font-bold leading-7 text-black-1600">Finance Analytics</h6>
          <p className="text-sm font-normal leading-5 text-gray-1900">Executive Dashboard • Real-time Insights</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <SearchDropdown />

       <DateRangePicker
       />

          <button
            type="button"
            onClick={resetFilters}
            title="Reset filters"
            className="bg-gray-1800 border border-gray-1000 w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <img src="/images/recycle-icon2.svg" alt="Reset" />
          </button>

          <button
            type="button"
            onClick={exportReport}
            className="text-white flex items-center gap-2 justify-center font-medium bg-lightgreen17 py-2.5 px-4 rounded-md hover:opacity-90 transition-opacity text-sm"
          >
            <img src="/images/export-icon.svg" alt="" />
            Export Report
          </button>
        </div>
      </div>

      <div className="xl:p-8 p-4">
        <div className="flex items-center gap-2">
          <span className="bg-lightgreen17 rounded-full block w-1 h-5" />
          <h6 className="text-lg font-bold leading-7 text-black-1600">Golden Metrics</h6>
          <span className="text-xs font-normal leading-4 text-gray-1900 block">Updated 2 min ago</span>
        </div>
        <div className="grid 2xl:grid-cols-4 md:grid-cols-2 gap-4 mt-4 mb-6">
          <div className="bg-white/80 border justify-between border-white/20 shadow-13xl rounded-2xl 4xl:p-5 p-3 flex items-start">
            <div>
              <span className="block text-sm font-medium leading-5 text-gray-1900 mb-1">Gross Merchandise Value</span>
              <h4 className="4xl:text-[30px] text-[20px] font-bold mt-1 mb-2 leading-9 text-black-1600">€12.4M</h4>
              <div className="flex items-center gap-1.5">
                <img src="/images/trend-up.svg" alt="" />
                <h6 className="text-sm font-semibold leading-5 text-green-2600">+18.5% vs last month</h6>
              </div>
            </div>
            <SparklineChart dataPoints={[5, 6, 7, 6.5, 8, 7.5, 9]} color="#22c55e" />
          </div>
          <div className="bg-white/80 border justify-between border-white/20 shadow-13xl rounded-2xl 4xl:p-5 p-3 flex items-start">
            <div>
              <span className="block text-sm font-medium leading-5 text-gray-1900 mb-1">Net Revenue</span>
              <h4 className="4xl:text-[30px] text-[20px] font-bold mt-1 mb-2 leading-9 text-black-1600">€2.8M</h4>
              <div className="flex items-center gap-1.5">
                <img src="/images/trend-up.svg" alt="" />
                <h6 className="text-sm font-semibold leading-5 text-green-2600">+12.3% vs last month</h6>
              </div>
            </div>
            <SparklineChart dataPoints={[3, 4, 3.5, 5, 5.5, 6, 7]} color="#22c55e" />
          </div>
          <div className="bg-white/80 border justify-between border-white/20 shadow-13xl rounded-2xl 4xl:p-5 p-3 flex items-start">
            <div>
              <span className="block text-sm font-medium leading-5 text-gray-1900 mb-1">Burn Rate vs Runway</span>
              <h4 className="4xl:text-[30px] text-[20px] font-bold mt-1 mb-2 leading-9 text-black-1600">18 months</h4>
              <div className="flex items-center gap-1.5">
                <img src="/images/minus-icon2.svg" alt="" />
                <h6 className="text-sm font-semibold leading-5 text-gray-1900">€420K/mo burn rate</h6>
              </div>
            </div>
            <SparklineChart dataPoints={[8, 7, 7.5, 6.8, 7, 6.5, 6]} color="#94a3b8" />
          </div>
          <div className="bg-white/80 border justify-between border-white/20 shadow-13xl rounded-2xl 4xl:p-5 p-3 flex items-start">
            <div>
              <span className="block text-sm font-medium leading-5 text-gray-1900 mb-1">Default Rate</span>
              <h4 className="4xl:text-[30px] text-[20px] font-bold mt-1 mb-2 leading-9 text-black-1600">2.4%</h4>
              <div className="flex items-center gap-1.5">
                <img src="/images/trend-up.svg" alt="" />
                <h6 className="text-sm font-semibold leading-5 text-green-2600">-0.3% improvement</h6>
              </div>
            </div>
            <SparklineChart dataPoints={[4, 3.8, 3.5, 3.2, 3, 2.8, 2.4]} color="#22c55e" />
          </div>
        </div>

        <div className="bg-white/80 border border-white/20 shadow-13xl rounded-2xl py-8 px-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <img src="/images/trend-up.svg" className="w-5 h-5" alt="" />
                <h4 className="text-lg font-bold leading-7 text-black-1600">Interactive Cash Flow</h4>
              </div>
              <p className="text-sm font-normal text-gray-1900">Inflow vs Outflow Analysis</p>
            </div>
            <div className="flex items-start gap-14">
              <div className="text-end">
                <h6 className="text-xs leading-4 font-normal text-gray-1900">Net Cash Flow</h6>
                <span className="block text-lg font-bold leading-7 text-green-2600">€4.9M</span>
              </div>
              <div className="flex items-center gap-[14px]">
                <h6 className="text-xs leading-4 font-medium text-gray-1900">Forecast</h6>
                <ToggleSwitch enabled={forecastEnabled} setEnabled={toggleForecast} />
              </div>
            </div>
          </div>
          <div>
            <RevenueChart2 />
            <div className="flex items-center justify-center gap-2.5">
              <div className="flex items-center gap-1">
                <img src="/images/inflow.svg" alt="" />
                <h6 className="text-sm font-medium leading-5 text-black-1600">Inflow (Rent, Insurance, Marketplace)</h6>
              </div>
              <div className="flex items-center gap-1">
                <img src="/images/outflow.svg" alt="" />
                <h6 className="text-sm font-medium leading-5 text-black-1600">Outflow (Vendor Payments, Refunds)</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="grid 2xl:grid-cols-2 gap-4 mt-4 mb-6">
          <div className="bg-white/80 border border-white/20 shadow-13xl rounded-2xl 4xl:p-6 p-4">
            <div className="flex items-center mb-6 gap-2">
              <img src="/images/chart-icon.svg" alt="" />
              <h6 className="text-lg font-bold leading-7 text-black-1600">Geographic Transaction Heatmap</h6>
            </div>
            <FinanceDonutChart />
          </div>
          <div className="bg-white/80 border border-white/20 shadow-13xl rounded-2xl 4xl:p-6 p-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <img src="/images/globe-green.svg" alt="" />
                  <h6 className="text-lg font-bold leading-7 text-black-1600">Revenue Distribution</h6>
                </div>
                <p className="text-sm font-normal leading-5 text-gray-1900">Transaction volume by country</p>
              </div>
              <div className="text-end">
                <h6 className="text-xs leading-4 font-normal text-gray-1900">Total Volume</h6>
                <h6 className="text-2xl font-bold leading-7 text-black-1600">€10.1M</h6>
              </div>
            </div>
            <div className="card-bg rounded-2xl 4xl:p-6 p-3 grid md:grid-cols-3 gap-3">
              <div className="bg-lightgreen17/20 border-2 border-green-2700 rounded-xl 4xl:p-4 p-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold leading-8 block text-black-1600">DE</span>
                  <div className="flex items-center gap-1">
                    <img src="/images/trend-up.svg" alt="" />
                    <h6 className="text-xs font-semibold leading-[18px] text-green-2600">18.5%</h6>
                  </div>
                </div>
                <h6 className="text-sm font-medium leading-5 mb-1 text-black-1600">Germany</h6>
                <span className="text-lg mb-2 font-bold leading-8 block text-black-1600">€4.3M</span>
                <ProgressBar value={100} className="h-1.5" barColor="bg-lightgreen17" bgColor="bg-white/80" />
              </div>
              <div className="bg-lightgreen17/20 border-2 border-green-2700 rounded-xl 4xl:p-4 p-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold leading-8 block text-black-1600">FR</span>
                  <div className="flex items-center gap-1">
                    <img src="/images/trend-up.svg" alt="" />
                    <h6 className="text-xs font-semibold leading-[18px] text-green-2600">24.2%</h6>
                  </div>
                </div>
                <h6 className="text-sm font-medium leading-5 mb-1 text-black-1600">France</h6>
                <span className="text-lg mb-2 font-bold leading-8 block text-black-1600">€2.2M</span>
                <ProgressBar value={50} className="h-1.5" barColor="bg-lightgreen17" bgColor="bg-white/80" />
              </div>
              <div className="bg-yellow-1100/20 border-2 border-yellow-1800 rounded-xl 4xl:p-4 p-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold leading-8 block text-black-1600">AT</span>
                  <div className="flex items-center gap-1">
                    <img src="/images/trend-up3.svg" alt="" />
                    <h6 className="text-xs font-semibold leading-[18px] text-yellow-1900">24.2%</h6>
                  </div>
                </div>
                <h6 className="text-sm font-medium leading-5 mb-1 text-black-1600">Austria</h6>
                <span className="text-lg mb-2 font-bold leading-8 block text-black-1600">€1.4M</span>
                <ProgressBar value={50} className="h-1.5" barColor="bg-yellow-1800" bgColor="bg-white/80" />
              </div>
              <div className="bg-yellow-1100/20 border-2 border-yellow-1800 rounded-xl 4xl:p-4 p-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold leading-8 block text-black-1600">NL</span>
                  <div className="flex items-center gap-1">
                    <img src="/images/trend-up3.svg" alt="" />
                    <h6 className="text-xs font-semibold leading-[18px] text-yellow-1900">31.5%</h6>
                  </div>
                </div>
                <h6 className="text-sm font-medium leading-5 mb-1 text-black-1600">Netherlands</h6>
                <span className="text-lg mb-2 font-bold leading-8 block text-black-1600">€980K</span>
                <ProgressBar value={20} className="h-1.5" barColor="bg-yellow-1800" bgColor="bg-white/80" />
              </div>
              <div className="bg-gray-1900/20 border-2 border-green-2800 rounded-xl 4xl:p-4 p-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold leading-8 block text-black-1600">ES</span>
                  <div className="flex items-center gap-1">
                    <img src="/images/trend-up4.svg" alt="" />
                    <h6 className="text-xs font-semibold leading-[18px] text-green-2900">45.2%</h6>
                  </div>
                </div>
                <h6 className="text-sm font-medium leading-5 mb-1 text-black-1600">Spain</h6>
                <span className="text-lg mb-2 font-bold leading-8 block text-black-1600">€720K</span>
                <ProgressBar value={20} className="h-1.5" barColor="bg-gray-1900" bgColor="bg-white/80" />
              </div>
              <div className="bg-gray-1900/20 border-2 border-green-2800 rounded-xl 4xl:p-4 p-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold leading-8 block text-black-1600">IT</span>
                  <div className="flex items-center gap-1">
                    <img src="/images/trend-up4.svg" alt="" />
                    <h6 className="text-xs font-semibold leading-[18px] text-green-2900">28.9%</h6>
                  </div>
                </div>
                <h6 className="text-sm font-medium leading-5 mb-1 text-black-1600">Italy</h6>
                <span className="text-lg mb-2 font-bold leading-8 block text-black-1600">€540K</span>
                <ProgressBar value={20} className="h-1.5" barColor="bg-gray-1900" bgColor="bg-white/80" />
              </div>
            </div>
            <div className="flex mt-6 items-center justify-center 4xl:gap-8 gap-2">
              <div className="flex items-center gap-2">
                <div className="bg-lightgreen17 w-4 h-4 rounded-full block" />
                <h6 className="text-sm font-normal leading-5 text-gray-1900">High Volume (&gt;€2M)</h6>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-yellow-1800 w-4 h-4 rounded-full block" />
                <h6 className="text-sm font-normal leading-5 text-gray-1900">Medium (€1-2M)</h6>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-2800 w-4 h-4 rounded-full block" />
                <h6 className="text-sm font-normal leading-5 text-gray-1900">Emerging (&lt;€1M)</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/80 border border-white/20 shadow-13xl rounded-2xl p-6">
          <div className="flex md:flex-nowrap flex-wrap gap-4 items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2">
                <img src="/images/users-green.svg" alt="" />
                <h6 className="text-lg font-bold leading-7 text-black-1600">Unit Economics by University</h6>
              </div>
              <p className="text-sm font-normal leading-5 text-gray-1900">LTV (Lifetime Value) vs CAC (Customer Acquisition Cost)</p>
            </div>
            <div className="bg-gray-1600 rounded-xl py-2 px-4 flex items-center">
              <div className="text-center border-r border-gray-1000 pr-6">
                <h6 className="text-xs leading-4 font-normal text-gray-1900">Avg LTV</h6>
                <h6 className="text-lg font-bold leading-7 text-green-2600">{avgLTV()}</h6>
              </div>
              <div className="text-center border-r border-gray-1000 px-6">
                <h6 className="text-xs leading-4 font-normal text-gray-1900">Avg CAC</h6>
                <h6 className="text-lg font-bold leading-7 text-red-1300">{avgCAC()}</h6>
              </div>
              <div className="text-center pl-6">
                <h6 className="text-xs leading-4 font-normal text-gray-1900">LTV:CAC</h6>
                <h6 className="text-lg font-bold leading-7 text-black-1600">{ltvCacRatio()}</h6>
              </div>
            </div>
          </div>
          <UniversityTable />
        </div>
      </div>
    </div>
  );
}