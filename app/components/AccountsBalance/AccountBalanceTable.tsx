"use client";
import Image from "next/image";
import CustomSelect from "@/app/components/CustomSelect";
import { useMasterAccountsStore } from "@/app/store/zustand/useMasterAccountsStore";
import type { PaymentStatus, RiskStatus } from "@/app/store/zustand/useMasterAccountsStore";
import { useRouter } from "next/navigation";

const statusConfig: Record<PaymentStatus, { dot: string; badge: string }> = {
  Active:  { dot: "bg-green57",      badge: "bg-lightgreen18 border-lightgreen17/20 text-lightgreen17" },
  Pending: { dot: "bg-yellow-1100",  badge: "bg-yellow-1100/10 border-yellow-1100/20 text-yellow-1100" },
  Frozen:  { dot: "bg-red-1300",     badge: "bg-red-1300/10 border-red-1300/20 text-red-1300" },
};

const riskConfig: Record<RiskStatus, string> = {
  Low:    "bg-green57/10 text-green57",
  Medium: "bg-yellow-1100/10 text-yellow-1100",
  High:   "bg-red-1300/10 text-red-1300",
};

// type SortableCol = "userid" | "student" | "balance" | "status" | "risk" | "reconciliation";

// const SortIndicator = ({ active, dir }: { active: boolean; dir: "asc" | "desc" }) => (
//   <span className="inline-flex flex-col gap-[1px] ml-1 align-middle" style={{ opacity: active ? 1 : 0.3 }}>
//     <span className="text-[8px] leading-none" style={{ opacity: active && dir === "asc" ? 1 : 0.5 }}>▲</span>
//     <span className="text-[8px] leading-none" style={{ opacity: active && dir === "desc" ? 1 : 0.5 }}>▼</span>
//   </span>
// );

export default function AccountBalanceTable() {
  const {
    filters, setFilter, resetFilters,
    sortKey, sortDir, setSort,
    page, totalPages, setPage,
    paginated, filteredSorted,
  } = useMasterAccountsStore();

  const rows = paginated();
  const total = filteredSorted().length;
  const pages = totalPages();
  const router = useRouter()

  const hasActiveFilters =
    filters.search ||
    filters.currency !== "All Countries" ||
    filters.status !== "All Status" ||
    filters.risk !== "All Risk";

  // const Th = ({ label, col }: { label: string; col: SortableCol }) => (
  //   <th
  //     onClick={() => setSort(col)}
  //     className="px-4 py-3 text-left text-SteelGray font-inter font-semibold text-xs leading-4 uppercase cursor-pointer select-none whitespace-nowrap"
  //   >
  //     {label}
  //     <SortIndicator active={sortKey === col} dir={sortDir} />
  //   </th>
  // );


 const handleDLink = (e: React.MouseEvent, id: string | number) => {
  const target = e.target as HTMLElement;
if (target.closest("button, a, input")) return;
  router.push(`/accounts_balance/${id}`);
};

  return (
    <div>
      <div className="mt-6 bg-white border border-gray-3600 rounded-lg overflow-x-auto">

        <div className="p-4 flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between">
          <div>
            <h4 className="text-black-2000 text-lg leading-7 font-semibold">Master Accounts Ledger</h4>
            <p className="text-SteelGray text-sm leading-5 font-normal">Click any row to view detailed 360° Account Profile</p>
          </div>
          <div className="relative max-w-52.75 w-full">
            <CustomSelect
              className="w-full pl-9 bg-gray-6600 border border-gray-1000"
              options={[
                { label: "Export Master Ledger", value: "Export Master Ledger" },
                { label: "Export as CSV",         value: "csv" },
                { label: "Export as PDF",         value: "pdf" },
              ]}
            />
            <span className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-3">
              <Image src="/icons/download-icon.svg" width={16} height={16} alt="" />
            </span>
          </div>
        </div>

        <div className="bg-gray-2000 border-t border-b border-solid border-grey-5400 p-4 flex xl:flex-row flex-col flex-wrap items-center gap-3">
          <div className="flex-1 flex items-center gap-3 w-full">
            <div className="relative flex-1 w-full">
              <input
                type="text"
                value={filters.search}
                onChange={(e) => setFilter("search", e.target.value)}
                className="text-sm font-normal text-SteelGray placeholder:text-SteelGray px-4 pl-9 h-10 bg-gray-1500 border border-grey-5400 rounded-md w-full outline-0"
                placeholder="Search by User ID, Student Name..."
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-3">
                <Image src="/icons/search-dark.svg" width={16} height={16} alt="" />
              </div>
            </div>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-xs text-red-1300 underline hover:opacity-70 transition whitespace-nowrap"
              >
                Clear
              </button>
            )}
            <button className="flex items-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2076_9634)">
                  <path d="M14.6663 2H1.33301L6.66634 8.30667V12.6667L9.33301 14V8.30667L14.6663 2Z" stroke="#737B8C" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_2076_9634">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>

          <div className="xl:flex grid sm:grid-cols-4 grid-cols-2 xl:w-auto w-full items-center gap-3">
        
            <div className="relative xl:w-28 w-full">
              <CustomSelect
                className="w-full bg-gray-1500 border border-grey-5400"
                value={filters.status}
                onChange={(value: string) => setFilter("status", value)}
                options={[
                  { label: "All Status", value: "All Status" },
                  { label: "Active",     value: "Active" },
                  { label: "Frozen",     value: "Frozen" },
                  { label: "Pending",    value: "Pending" },
                ]}
              />
            </div>
            <div className="relative xl:w-28 w-full">
              <CustomSelect
                className="w-full bg-gray-1500 border border-grey-5400"
                value={filters.risk}
                onChange={(value: string) => setFilter("risk", value)}
                options={[
                  { label: "All Risk", value: "All Risk" },
                  { label: "Low",      value: "Low" },
                  { label: "Medium",   value: "Medium" },
                  { label: "High",     value: "High" },
                ]}
              />
            </div>

                <div className="relative">
              <CustomSelect
                className="w-full bg-gray-1500 border pr-10 border-grey-5400"
                value={filters.currency}
                onChange={(value: string) => setFilter("currency", value)}
                options={[
                  { label: "All Countries", value: "All Countries" },
                  { label: "EUR", value: "EUR" },
                  { label: "USD", value: "USD" },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="5xl:w-full w-325">
              <thead>
              <tr className="bg-gray-1800">
                <th className="px-4 py-3 text-left text-SteelGray font-inter font-semibold text-xs leading-4 uppercase">User ID</th>
                <th className="px-4 py-3 text-left text-SteelGray font-inter font-semibold text-xs leading-4 uppercase">Student Name</th>
                <th className="px-4 py-3 text-left text-SteelGray font-inter font-semibold text-xs leading-4 uppercase">Currency</th>
                <th className="px-4 py-3 text-left text-SteelGray font-inter font-semibold text-xs leading-4 uppercase">Total Balance</th>
                <th className="px-4 py-3 text-left text-SteelGray font-inter font-semibold text-xs leading-4 uppercase">Available</th>
                <th className="px-4 py-3 text-left text-SteelGray font-inter font-semibold text-xs leading-4 uppercase">On Hold</th>
                <th className="px-4 py-3 text-left text-SteelGray font-inter font-semibold text-xs leading-4 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-SteelGray font-inter font-semibold text-xs leading-4 uppercase">Risk</th>
                <th className="px-4 py-3 text-left text-SteelGray font-inter font-semibold text-xs leading-4 uppercase">Last Reconciliation</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>

            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={10} className="px-4 py-12 text-center text-SteelGray text-sm">
                    No accounts match your filters.
                  </td>
                </tr>
              ) : (
                rows.map((item) => (
                  <tr
                    key={item.id}
                    onClick={(e) => handleDLink(e, item.id)}
                    className="border-b border-gray1600 hover:bg-gray1700/50 transition last:border-b-0 cursor-pointer"
                  >
                    <td className="px-4 py-5 text-black-2000 text-[13.8px] leading-5 font-medium whitespace-nowrap">
                      {item.userid}
                    </td>
                    <td className="px-4 py-5">
                      <h4 className="text-black-2000 text-sm leading-5 font-medium whitespace-nowrap">{item.student.name}</h4>
                      <p className="text-SteelGray text-xs leading-4 font-normal">{item.student.email}</p>
                    </td>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-1.5">
                        <Image src={item.currency.flag} width={40} height={20} alt={item.currency.name} />
                        <span className="inline-flex items-center text-black-2000 text-xs leading-4 font-medium bg-gray-2000 rounded-md h-5 px-2">
                          {item.currency.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-black-2000 text-sm leading-5 font-medium whitespace-nowrap">
                      {item.balance}
                    </td>
                    <td className="px-4 py-5 text-lightgreen17 text-sm leading-5 font-normal whitespace-nowrap">
                      {item.available}
                    </td>
                    <td className="px-4 py-5 text-SteelGray text-sm leading-5 font-normal whitespace-nowrap">
                      {item.hold}
                    </td>
                    <td className="px-4 py-5">
                      <span className={`inline-flex gap-1.5 items-center rounded-full justify-center font-inter font-medium text-xs leading-4 px-2.5 h-5 border ${statusConfig[item.status].badge}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${statusConfig[item.status].dot}`} />
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-5">
                      <span className={`font-inter font-normal text-xs leading-4 rounded-md px-2 h-6 gap-1.5 inline-flex items-center justify-center ${riskConfig[item.risk]}`}>
                        {item.risk}
                      </span>
                    </td>
                    <td className="px-4 py-5 text-SteelGray text-sm leading-5 font-normal whitespace-nowrap">
                      {item.reconciliation}
                    </td>
                    
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-7500/30 rounded-b-lg border-t border-solid border-gray-3600 px-4 py-3">
          <div className="flex sm:flex-row flex-col sm:gap-0 gap-4 items-center justify-between">
            <p className="text-gray-1900 font-inter font-normal sm:text-sm text-xs leading-5">
              Showing {rows.length > 0 ? (page - 1) * 8 + 1 : 0}–{Math.min(page * 8, total)} of {total} accounts
            </p>
            <ul className="flex items-center gap-2">
              <li>
                <button
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                  className="text-blue-1300 disabled:opacity-50 sm:text-sm text-xs leading-5 font-normal border border-solid border-gray-3600 bg-gray-1500 rounded-md h-9 w-10.5 inline-flex items-center justify-center hover:bg-gray-2000 transition"
                >
                  <Image src="/icons/left-arrow.svg" width={16} height={16} alt="" />
                </button>
              </li>
              {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
                <li key={p}>
                  <button
                    onClick={() => setPage(p)}
                    className={`sm:text-sm text-xs leading-5 font-normal border border-solid rounded-md h-9 w-9 inline-flex items-center justify-center transition ${
                      p === page
                        ? "bg-lightgreen17 border-lightgreen17 text-white"
                        : "text-black-2000 border-grey-5400 bg-gray-1500 hover:bg-lightgreen17 hover:text-white"
                    }`}
                  >
                    {p}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setPage(page + 1)}
                  disabled={page === pages}
                  className="text-blue-1300 disabled:opacity-50 sm:text-sm text-xs leading-5 font-normal border border-solid border-gray-3600 bg-gray-1500 rounded-md h-9 w-10.5 inline-flex items-center justify-center hover:bg-gray-2000 transition"
                >
                  <Image src="/icons/right-arrow2.svg" width={16} height={16} alt="" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}