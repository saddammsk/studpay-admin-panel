/* eslint-disable react-hooks/static-components */
"use client";
import Image from "next/image";
import CustomSelect from "@/app/components/CustomSelect";
import { useAccountDetailStore } from "@/app/store/zustand/useAccountDetailStore";
import type { PaymentStatus } from "@/app/store/zustand/useAccountDetailStore";

const statusConfig: Record<PaymentStatus, string> = {
  Debit:  "bg-red-1300/10 border-red-1300/20 text-red-1300",
  Credit: "bg-lightgreen18 border-lightgreen17/20 text-lightgreen17",
  Hold:   "bg-yellow-1100/10 border-yellow-1100/20 text-yellow-1100",
};

const amountColor: Record<PaymentStatus, string> = {
  Debit:  "text-red-1300",
  Credit: "text-lightgreen17",
  Hold:   "text-yellow-1100",
};

type Col = "date" | "description" | "status" | "amountRaw" | "fee" | "balance";

const SortIcon = ({ active, dir }: { active: boolean; dir: "asc" | "desc" }) => (
  <span className="inline-flex flex-col gap-[1px] ml-1 align-middle" style={{ opacity: active ? 1 : 0.3 }}>
    <span className="text-[7px] leading-none" style={{ opacity: active && dir === "asc"  ? 1 : 0.4 }}>▲</span>
    <span className="text-[7px] leading-none" style={{ opacity: active && dir === "desc" ? 1 : 0.4 }}>▼</span>
  </span>
);

export default function AccountLedgerTable() {
  const {
    simpleFilters,
    setSimpleFilter,
    resetSimpleFilters,
    simpleSortKey,
    simpleSortDir,
    setSimpleSort,
    simplePage,
    simpleTotalPages,
    setSimplePage,
    simplePaginated,
    simpleFilteredSorted,
  } = useAccountDetailStore();

  const rows  = simplePaginated();
  const total = simpleFilteredSorted().length;
  const pages = simpleTotalPages();

  const hasFilters = simpleFilters.search || simpleFilters.type !== "All Types";

  const Th = ({ label, col }: { label: string; col: Col }) => (
    <th
      onClick={() => setSimpleSort(col as keyof typeof rows[0])}
      className="px-4 py-3 text-left text-gray-1900 font-inter font-semibold text-sm leading-5 cursor-pointer select-none whitespace-nowrap"
    >
      {label}
      <SortIcon active={simpleSortKey === col} dir={simpleSortDir} />
    </th>
  );

  return (
    <div>
      <div className="mt-6 bg-white border border-gray-3600 rounded-lg overflow-hidden">

        {/* ── Header ── */}
        <div className="py-4 px-6 bg-gray-6200/30 border-b border-solid border-gray-3600 rounded-t-lg flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-3 justify-between">
          <div>
            <h4 className="text-black-2000 text-lg leading-7 font-semibold">Account Ledger</h4>
            <p className="text-SteelGray text-sm leading-5 font-normal">Complete transaction history</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-SteelGray text-sm leading-5">{total} transactions</p>
            {hasFilters && (
              <button
                onClick={resetSimpleFilters}
                className="text-xs text-red-1300 underline hover:opacity-70 transition"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* ── Filter Bar ── */}
        <div className="bg-gray-6200/20 border-b border-solid border-gray-3600 px-4 py-3 flex sm:flex-row flex-col items-center gap-3">
          <div className="relative flex-1 w-full">
            <input
              type="text"
              value={simpleFilters.search}
              onChange={(e) => setSimpleFilter("search", e.target.value)}
              placeholder="Search description, date..."
              className="text-sm text-gray-1900 placeholder:text-SteelGray px-4 pl-9 h-9 bg-gray-1500 border border-gray-3600 rounded-md w-full outline-0"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-3">
              <Image src="/icons/search-dark.svg" width={16} height={16} alt="" />
            </div>
          </div>
          <div className="sm:w-36 w-full">
            <CustomSelect
              className="w-full bg-gray-1500 border border-gray-3600"
              value={simpleFilters.type}
              onChange={(value: string) => setSimpleFilter("type", value)}
              options={[
                { label: "All Types", value: "All Types" },
                { label: "Credit",    value: "Credit"    },
                { label: "Debit",     value: "Debit"     },
                { label: "Hold",      value: "Hold"      },
              ]}
            />
          </div>
        </div>

        {/* ── Table ── */}
        <div className="overflow-x-auto">
          <table className="4xl:w-full w-187.5">
            <thead>
              <tr className="bg-gray-6200/50 border-b border-solid border-gray-3600">
                <Th label="Date"        col="date"        />
                <Th label="Description" col="description" />
                <Th label="Type"        col="status"      />
                <Th label="Amount"      col="amountRaw"   />
                <Th label="Fee"         col="fee"         />
                <Th label="Balance"     col="balance"     />
              </tr>
            </thead>

            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-SteelGray text-sm">
                    No transactions match your filters.
                  </td>
                </tr>
              ) : (
                rows.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray1600 hover:bg-gray1700/50 transition last:border-b-0"
                  >
                    <td className="p-4 text-gray-1900 text-xs leading-4 font-normal whitespace-nowrap">
                      {item.date}
                      <span className="block">{item.time}</span>
                    </td>
                    <td className="p-4">
                      <h4 className="text-blue1700 text-sm leading-5 font-normal">
                        {item.description}
                      </h4>
                      {item.subdescription && (
                        <div className="text-blue-1400 text-xs leading-4 flex items-center gap-1 mt-0.5">
                          <span className="flex items-center justify-center w-1.5 h-1.5 rounded-full bg-blue-1400 shrink-0" />
                          {item.subdescription}
                        </div>
                      )}
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex gap-1.5 items-center rounded-full justify-center font-inter font-bold text-xs leading-4 border border-solid px-2.5 h-5 ${statusConfig[item.status]}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`text-sm leading-5 font-bold ${amountColor[item.status]}`}>
                        {item.amount}
                      </span>
                    </td>
                    <td className="p-4 text-gray-1900 text-sm leading-5 font-normal">
                      {item.fee}
                    </td>
                    <td className="p-4">
                      <span className="text-blue1700 text-sm leading-5 font-bold">{item.balance}</span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* ── Pagination ── */}
        <div className="bg-gray-7500/30 rounded-b-lg border-t border-solid border-gray-3600 px-4 py-3">
          <div className="flex sm:flex-row flex-col sm:gap-0 gap-3 items-center justify-between">
            <p className="text-gray-1900 font-inter font-normal sm:text-sm text-xs leading-5">
              Showing {rows.length > 0 ? (simplePage - 1) * 6 + 1 : 0}–{Math.min(simplePage * 6, total)} of {total} transactions
            </p>
            {pages > 1 && (
              <ul className="flex items-center gap-2">
                <li>
                  <button
                    onClick={() => setSimplePage(simplePage - 1)}
                    disabled={simplePage === 1}
                    className="disabled:opacity-40 border border-solid border-gray-3600 bg-gray-1500 rounded-md h-9 w-10.5 inline-flex items-center justify-center hover:bg-gray-2000 transition"
                  >
                    <Image src="/icons/left-arrow.svg" width={16} height={16} alt="" />
                  </button>
                </li>
                {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
                  <li key={p}>
                    <button
                      onClick={() => setSimplePage(p)}
                      className={`text-sm font-medium border rounded-md h-9 w-9 inline-flex items-center justify-center transition ${
                        p === simplePage
                          ? "bg-blue1700 border-blue1700 text-white"
                          : "text-black-2000 border-grey-5400 bg-gray-1500 hover:bg-blue1700 hover:text-white"
                      }`}
                    >
                      {p}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => setSimplePage(simplePage + 1)}
                    disabled={simplePage === pages}
                    className="disabled:opacity-40 border border-solid border-gray-3600 bg-gray-1500 rounded-md h-9 w-10.5 inline-flex items-center justify-center hover:bg-gray-2000 transition"
                  >
                    <Image src="/icons/right-arrow2.svg" width={16} height={16} alt="" />
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}