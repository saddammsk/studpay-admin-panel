"use client";
import Image from "next/image";
import CustomSelect from "@/app/components/CustomSelect";
import FinancingGuarantyTable from "@/app/components/FinancingGuarantyTable";
import { useFinancingGuarantyStore } from "@/app/store/zustand/useFinancingGuarantyStore";

const UsersStudentsPage = () => {
  const { filters, setFilter, resetFilters, filteredGuarantees } =
    useFinancingGuarantyStore();

  const results = filteredGuarantees();

  return (
    <div>
      {/* ── Stat Cards ── */}
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4">
        <div className="bg-white flex items-start justify-between shadow-4xl border border-solid border-gray-3600 rounded-xl p-6">
          <div className="flex-1 w-full">
            <span className="text-gray-1900 text-sm leading-5 block">Active Guarantees</span>
            <div className="flex items-end gap-2 my-1">
              <h4 className="flex items-center text-blue-1300 text-[30px] font-bold leading-7.5">847</h4>
              <p className="flex items-center text-lightgreen17 text-xs leading-4">+12%</p>
            </div>
            <p className="text-gray-1900 text-sm leading-4 block">Total live guarantees protecting loans</p>
          </div>
          <span className="w-11 h-11 flex items-center justify-center rounded-xl bg-rosepink22">
            <Image src="/images/sheild-green.svg" width={20} height={20} alt="" />
          </span>
        </div>

        <div className="bg-white flex items-start justify-between shadow-4xl border border-solid border-gray-3600 rounded-xl p-6">
          <div className="flex-1 w-full">
            <span className="text-gray-1900 text-sm leading-5 block">Pending Approvals</span>
            <div className="flex items-end gap-2 my-1">
              <h4 className="flex items-center text-blue-1300 text-[30px] font-bold leading-7.5">23</h4>
              <p className="flex items-center text-red1600 text-xs leading-4">8%</p>
            </div>
            <p className="text-gray-1900 text-sm leading-4 block">New guarantor applications waiting</p>
          </div>
          <span className="w-11 h-11 flex items-center justify-center rounded-xl bg-rosepink22">
            <Image src="/images/clock-yellow.svg" width={20} height={20} alt="" />
          </span>
        </div>

        <div className="bg-white flex items-start justify-between shadow-4xl border border-solid border-gray-3600 rounded-xl p-6">
          <div className="flex-1 w-full">
            <span className="text-gray-1900 text-sm leading-5 block">Claim Risk</span>
            <div className="flex items-end gap-2 my-1">
              <h4 className="flex items-center text-blue-1300 text-[30px] font-bold leading-7.5">€127,450</h4>
              <p className="flex items-center text-red1600 text-xs leading-4">5%</p>
            </div>
            <p className="text-gray-1900 text-sm leading-4 block">Total at-risk value (late payments)</p>
          </div>
          <span className="w-11 h-11 flex items-center justify-center rounded-xl bg-rosepink22">
            <Image src="/images/warning.svg" width={20} height={20} alt="" />
          </span>
        </div>
      </div>

      <div className="bg-white border my-6 border-gray-1000 rounded-lg p-4">
        <div className="flex flex-wrap items-center gap-3 4xl:flex-1">

          {/* Search */}
          <div className="relative sm:max-w-[384px] max-w-full w-full">
            <input
              type="text"
              value={filters.search}
              onChange={(e) => setFilter("search", e.target.value)}
              className="text-sm font-normal text-gray-1900 placeholder:text-gray-1900 px-4 pl-10 h-10 bg-gray-6600 border border-gray-1000 rounded-md w-full outline-0"
              placeholder="Search by ID, student or guarantor name..."
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-3">
              <Image src="/images/search-icon.svg" width={16} height={16} alt="" />
            </div>
          </div>

          {/* Guaranty Type */}
          <div className="relative sm:w-45 w-full">
            <CustomSelect
              className="w-full text-center bg-gray-6600 border border-gray-1000"
              value={filters.guarantyType}
              onChange={(value: string) => setFilter("guarantyType", value)}
              options={[
                { label: "Guaranty Type", value: "Guaranty Type" },
                { label: "Financial", value: "Financial" },
                { label: "Rental", value: "Rental" },
              ]}
            />
            <span className="absolute top-1/2 -translate-y-1/2 left-3 w-4 h-4 flex items-center justify-center">
              <Image src="/images/filter.svg" width={16} height={16} alt="" />
            </span>
          </div>

          {/* University / Country */}
          <div className="relative sm:w-45 w-full">
            <CustomSelect
              className="w-full bg-gray-6600 border border-gray-1000"
              value={filters.universityCountry}
              onChange={(value: string) => setFilter("universityCountry", value)}
              options={[
                { label: "University/Country", value: "University/Country" },
                { label: "Germany",     value: "Germany" },
                { label: "France",      value: "France" },
                { label: "Italy",       value: "Italy" },
                { label: "UK",          value: "UK" },
                { label: "Netherlands", value: "Netherlands" },
                { label: "Poland",      value: "Poland" },
                { label: "Spain",       value: "Spain" },
                { label: "Denmark",     value: "Denmark" },
                { label: "Romania",     value: "Romania" },
              ]}
            />
          </div>

          {/* Status */}
          <div className="relative sm:w-45 w-full">
            <CustomSelect
              className="w-full bg-gray-6600 border border-gray-1000"
              value={filters.status}
               onChange={(value: string) => setFilter("status", value)}
              options={[
                { label: "Status",  value: "Status" },
                { label: "Active",  value: "Active" },
                { label: "Pending", value: "Pending" },
                { label: "Expired", value: "Expired" },
                { label: "Claimed", value: "Claimed" },
              ]}
            />
          </div>

          {/* Clear */}
          <button
            onClick={resetFilters}
            className="text-sm text-red1600 underline hover:opacity-70 transition"
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col sm:items-center mb-3 justify-between">
        <h6 className="text-lg font-bold leading-7 text-blue-1300">Guarantor & Contract Ledger</h6>
        <p className="text-sm font-normal text-gray-1200">
          Showing {results.length} of 847 guarantees
        </p>
      </div>

      <FinancingGuarantyTable data={results} />
    </div>
  );
};

export default UsersStudentsPage;