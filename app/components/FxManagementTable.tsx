"use client";

import { useFxStore } from "@/app/store/zustand/useFxManagementStore";
import ToggleSwitch from "./ToggleSwitch";
import Pagination from "./FXManagement/Pagination";
import EditModal from "./FXManagement/Editmodal";

type PaymentStatus = "Basic" | "Premium" | "VIP";

const statusConfig: Record<PaymentStatus, string> = {
  Basic: "bg-blue-50 text-blue-700",
  Premium: "bg-green-50 text-green-700",
  VIP: "bg-amber-50 text-amber-700",
};

const formatMarkup = (v: string) => `${Number(v).toFixed(2)}%`;
const formatSpread = (v: string) => (v ? `+${Number(v).toFixed(2)}%` : "—");
const formatLimit = (v: string) =>
  v ? `$${Number(v).toLocaleString("en-US")}` : "—";

export default function FxManagementTable() {
  const {
    payments,
    tablePage,
    tablePageSize,
    totalTablePages,
    paginatedPayments,
    setTablePage,
    toggleWeekend,
    openEdit,
  } = useFxStore();

  const rows = paginatedPayments();
  const total = payments.length;
  const pages = totalTablePages();

  return (
    <>
      <div className="mt-6 bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-200">
          <h4 className="text-gray-900 text-base font-semibold leading-6">
            Markup &amp; Fee Engine
          </h4>
          <p className="text-gray-500 text-sm leading-5 mt-0.5">
            Configure conversion rules by user plan
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                {["Currency Pair", "User Plan", "Markup %", "Weekend Rule", "Weekend Spread", "Daily Limit"].map(
                  (heading) => (
                    <th
                      key={heading}
                      className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide"
                    >
                      {heading}
                    </th>
                  )
                )}
                <th className="px-5 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/60 transition-colors">
                  <td className="px-5 py-4 text-sm font-medium text-blue-600">
                    {item.currency}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusConfig[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-700">
                    {formatMarkup(item.markup)}
                  </td>
                  <td className="px-5 py-4">
                    <ToggleSwitch
                      checked={item.weekendRule}
                      onChange={() => toggleWeekend(item.id)}
                    />
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-500">
                    {formatSpread(item.spread)}
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-700">
                    {formatLimit(item.limit)}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => openEdit(item.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                        aria-label={`Edit ${item.currency} ${item.status}`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M11.5 2.5a1.414 1.414 0 0 1 2 2L5 13H2v-3L11.5 2.5z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {pages > 1 && (
          <div className="border-t border-gray-200">
            <Pagination
              page={tablePage}
              totalPages={pages}
              totalItems={total}
              pageSize={tablePageSize}
              onPageChange={setTablePage}
            />
          </div>
        )}
      </div>

      <EditModal />
    </>
  );
}