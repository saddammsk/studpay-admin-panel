"use client";

import { useBlockedStore } from "@/app/store/zustand/UseAVIBlockedStore";
import BlockedTable from "@/app/components/BlockedTable";
import CustomSelect from "@/app/components/CustomSelect";


const stats = [
  { label: "Total AUM", value: "82.656,00 €", subtitle: "Total AUM", color: "text-[#0F1729]" },
  { label: "Pending Payouts", value: "20.664,00 €", subtitle: "To be released this month", color: "text-[#0F1729]" },
  { label: "Active Accounts", value: "8", subtitle: "In pipeline", color: "text-[#0F1729]" },
  { label: "Number of the Refund Request", value: "4", subtitle: "This month", color: "text-red-600" },
  { label: "AVI Issued", value: "2", subtitle: "This month", color: "text-[#0F1729]" },
];



const BlockedPage = () => {

  const { search, statusFilter, setSearch, setStatusFilter, setCountryFilter, countryFilter ,resetFilters } = useBlockedStore();

  const hasFilters = search !== "" || statusFilter !== "All";

  return (
    <div>
      <div className="grid 2xl:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="border border-gray-200 rounded-lg bg-white shadow-sm p-4 hover:shadow-md transition-shadow duration-200">
            <span className="block text-[#737B8C] font-normal text-xs leading-4 mb-1 tracking-[0.6px] uppercase">{s.label}</span>
            <h4 className={`block font-bold md:text-2xl text-xl leading-8 ${s.color}`}>{s.value}</h4>
            <p className="block text-[#737B8C] font-normal text-xs leading-4 mt-1">{s.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 border border-gray-200 bg-white rounded-lg p-4">
        <div className="2xl:flex items-center gap-3">
          <div className="relative flex-1 w-full 2xl:mb-0 mb-4">
            <input
              type="text"
              className="text-sm transition duration-300 font-normal text-[#0F1729] placeholder:text-[#737B8C] px-4 pl-10 h-10 bg-[#F8F9FB] border border-gray-200 rounded-md w-full outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100"
              placeholder="Search by name, ID, email, or university..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-3 text-[#737B8C]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div className="2xl:flex items-center grid sm:grid-cols-4 grid-cols-2 gap-3">
            <div className="2xl:w-40 w-full">
               <CustomSelect
                  value={countryFilter}
                  className="h-10"
                  onChange={setCountryFilter}
                  options={[
                  { label: "All Countries", value: "All Countries" },
                  { label: "Nigeria", value: "Nigeria" },
                  { label: "Germany", value: "Germany" },
                  ]}
                  />
            </div>
            <div className="2xl:w-44 w-full">
              <CustomSelect
                value={statusFilter}
                className="h-10"
                onChange={setStatusFilter}
                options={[
                  { label: "All Statuses", value: "All" },
                  { label: "Payment Pending", value: "Payment Pending" },
                  { label: "Funds Received", value: "Funds Received" },
                  { label: "Locked", value: "Locked" },
                  { label: "AVI Issued", value: "AVI Issued" },
                ]}
              />
            </div>

            <div className="relative 2xl:w-36 w-full">
              <input type="date" className="text-sm date-input transition duration-300 font-normal text-[#0F1729] px-3 h-10 bg-[#F8F9FB] border border-gray-200 rounded-md w-full outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100" />
            </div>
            <div className="relative 2xl:w-36 w-full">
              <input type="date" className="text-sm date-input transition duration-300 font-normal text-[#0F1729] px-3 h-10 bg-[#F8F9FB] border border-gray-200 rounded-md w-full outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100" />
            </div>

            {hasFilters && (
              <button type="button" onClick={resetFilters} className="flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-700 px-3 h-10 rounded-md hover:bg-red-50 transition-colors whitespace-nowrap">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <BlockedTable />
      </div>
    </div>
  );
};

export default BlockedPage;