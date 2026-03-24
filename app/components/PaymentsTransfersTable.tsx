"use client";

import { useMemo, useRef, useEffect } from "react";
import { usePaymentsStore } from "@/app/store/zustand/Usepaymentsstore";
import type { PaymentStatus, RiskLevel, TransactionType, Provider, SortField } from "@/app/store/zustand/Usepaymentsstore";

const statusStyles: Record<PaymentStatus, { pill: string; dot: string }> = {
  Completed: { pill: "bg-emerald-50 text-emerald-600 border border-emerald-200", dot: "bg-emerald-500" },
  Pending: { pill: "bg-amber-50 text-amber-600 border border-amber-200", dot: "bg-amber-500" },
  "On Hold": { pill: "bg-slate-100 text-slate-500 border border-slate-200", dot: "bg-slate-400" },
  Failed: { pill: "bg-red-50 text-red-500 border border-red-200", dot: "bg-red-500" },
  Refunded: { pill: "bg-blue-50 text-blue-500 border border-blue-200", dot: "bg-blue-400" },
};

const riskStyles: Record<RiskLevel, { pill: string; icon: string }> = {
  Low: { pill: "bg-emerald-50 text-emerald-600", icon: "✓" },
  Medium: { pill: "bg-amber-50 text-amber-600", icon: "!" },
  High: { pill: "bg-red-50 text-red-500", icon: "⊗" },
};

const typeStyles: Record<TransactionType, { pill: string; icon: string }> = {
  Card: { pill: "bg-violet-50 text-violet-600 border border-violet-100", icon: "▭" },
  P2P: { pill: "bg-cyan-50 text-cyan-600 border border-cyan-100", icon: "⇄" },
  FX: { pill: "bg-indigo-50 text-indigo-600 border border-indigo-100", icon: "⊕" },
  Fee: { pill: "bg-slate-50 text-slate-500 border border-slate-100", icon: "≡" },
};

const providerStyles: Record<Provider, string> = {
  Stripe: "text-violet-600 border border-violet-100 bg-violet-50",
  Adyen: "text-emerald-600 border border-emerald-100 bg-emerald-50",
};

const columns: { label: string; field: SortField | null }[] = [
  { label: "Transaction ID", field: "txnId" },
  { label: "Student", field: null },
  { label: "Type", field: null },
  { label: "Amount", field: "amountRaw" },
  { label: "Date & Time", field: "datetime" },
  { label: "Status", field: "status" },
  { label: "Risk", field: "risk" },
  { label: "Last Admin Action", field: null },
  { label: "Provider", field: null },
];

function IndeterminateCheckbox({
  checked,
  indeterminate,
  onChange,
}: {
  checked: boolean;
  indeterminate: boolean;
  onChange: () => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  return (
    <input
      ref={ref}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="w-4 h-4 rounded border-slate-300 accent-violet-600 cursor-pointer"
    />
  );
}

export default function PaymentsTransfersTable() {
  const transactions = usePaymentsStore((s) => s.transactions);
  const page = usePaymentsStore((s) => s.page);
  const pageSize = usePaymentsStore((s) => s.pageSize);
  const sortField = usePaymentsStore((s) => s.sortField);
  const sortDir = usePaymentsStore((s) => s.sortDir);
  const search = usePaymentsStore((s) => s.search);
  const filterProvider = usePaymentsStore((s) => s.filterProvider);
  const filterCurrency = usePaymentsStore((s) => s.filterCurrency);
  const filterRisk = usePaymentsStore((s) => s.filterRisk);
  const filterStatus = usePaymentsStore((s) => s.filterStatus);
  const openMenu = usePaymentsStore((s) => s.openMenu);

  const setPage = usePaymentsStore((s) => s.setPage);
  const setSort = usePaymentsStore((s) => s.setSort);
  const setOpenMenu = usePaymentsStore((s) => s.setOpenMenu);
  const toggleRow = usePaymentsStore((s) => s.toggleRow);
  const toggleAll = usePaymentsStore((s) => s.toggleAll);

  const filtered = useMemo(() => {
    return transactions
      .filter((t) => {
        const q = search.toLowerCase();
        const matchSearch =
          q === "" ||
          t.txnId.toLowerCase().includes(q) ||
          t.student.name.toLowerCase().includes(q) ||
          t.student.email.toLowerCase().includes(q);
        const matchProvider = filterProvider === "All Providers" || t.provider === filterProvider;
        const matchCurrency = filterCurrency === "All Currencies" || t.currency === filterCurrency;
        const matchRisk = filterRisk === "All Levels" || t.risk === filterRisk;
        const matchStatus = filterStatus === "Status" || t.status === filterStatus;
        return matchSearch && matchProvider && matchCurrency && matchRisk && matchStatus;
      })
      .sort((a, b) => {
        const dir = sortDir === "asc" ? 1 : -1;
        if (sortField === "amountRaw") return (a.amountRaw - b.amountRaw) * dir;
        return (a[sortField] as string).localeCompare(b[sortField] as string) * dir;
      });
  }, [transactions, search, filterProvider, filterCurrency, filterRisk, filterStatus, sortField, sortDir]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);
  const filteredIds = useMemo(() => filtered.map((t) => t.id), [filtered]);
  const allSelected = filtered.length > 0 && filtered.every((t) => t.selected);
  const someSelected = filtered.some((t) => t.selected);
  const isIndeterminate = someSelected && !allSelected;

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px]">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="w-10 px-4 py-3">
                <IndeterminateCheckbox
                  checked={allSelected}
                  indeterminate={isIndeterminate}
                  onChange={() => toggleAll(filteredIds, allSelected)}
                />
              </th>
              {columns.map(({ label, field }) => (
                <th
                  key={label}
                  onClick={() => field && setSort(field)}
                  className={`px-4 py-3 text-left text-[11px] font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap select-none ${field ? "cursor-pointer hover:text-slate-600" : ""}`}
                >
                  <span className="inline-flex items-center">
                    {label}
                    {field && (
                      <span className="ml-1 inline-flex flex-col gap-px opacity-40">
                        <span className={`block w-0 h-0 border-l-[4px] border-r-[4px] border-b-[5px] border-transparent border-b-current ${sortField === field && sortDir === "asc" ? "!opacity-100" : ""}`} />
                        <span className={`block w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-transparent border-t-current ${sortField === field && sortDir === "desc" ? "!opacity-100" : ""}`} />
                      </span>
                    )}
                  </span>
                </th>
              ))}
              <th className="px-4 py-3 w-10" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={11} className="px-4 py-16 text-center text-sm text-slate-400">
                  No transactions found.
                </td>
              </tr>
            ) : (
              paginated.map((t) => (
                <tr
                  key={t.id}
                  className={`group hover:bg-slate-50/70 transition-colors ${t.selected ? "bg-violet-50/40" : ""}`}
                >
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={t.selected}
                      onChange={() => toggleRow(t.id)}
                      className="w-4 h-4 rounded border-slate-300 accent-violet-600 cursor-pointer"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <span className="font-mono text-[12.5px] font-medium text-slate-700">{t.txnId}</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="font-medium text-sm text-slate-800 leading-tight">{t.student.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{t.student.email}</div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md ${typeStyles[t.type].pill}`}>
                      <span className="text-[11px]">{typeStyles[t.type].icon}</span>
                      {t.type}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="font-mono text-sm font-semibold text-slate-800">{t.amount}</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-slate-700 tabular-nums">{t.datetime.split(" ")[0]}</div>
                    <div className="font-mono text-[11px] text-slate-400">{t.datetime.split(" ")[1]}</div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[t.status].pill}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${statusStyles[t.status].dot}`} />
                      {t.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-md ${riskStyles[t.risk].pill}`}>
                      <span className="text-[10px] font-bold">{riskStyles[t.risk].icon}</span>
                      {t.risk}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-slate-500 max-w-[180px] truncate block">{t.lastAdminAction}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-md ${providerStyles[t.provider]}`}>
                      {t.provider}
                    </span>
                  </td>
                  <td className="px-4 py-4 relative">
                    <button
                      onClick={() => setOpenMenu(openMenu === t.id ? null : t.id)}
                      className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="5" cy="12" r="1.5" />
                        <circle cx="12" cy="12" r="1.5" />
                        <circle cx="19" cy="12" r="1.5" />
                      </svg>
                    </button>
                    {openMenu === t.id && (
                      <div className="absolute right-4 top-12 z-20 w-44 bg-white border border-slate-200 rounded-xl shadow-lg py-1.5">
                        {["View Details", "Flag for Review", "Freeze Account", "Download Receipt"].map((action) => (
                          <button
                            key={action}
                            onClick={() => setOpenMenu(null)}
                            className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                          >
                            {action}
                          </button>
                        ))}
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="px-4 py-3 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-slate-400">
          Showing {filtered.length === 0 ? 0 : (page - 1) * pageSize + 1}–{Math.min(page * pageSize, filtered.length)} of {filtered.length} transactions
        </p>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
            className="h-8 px-3 text-xs font-medium border border-slate-200 rounded-lg text-slate-500 hover:bg-white hover:text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`h-8 w-8 text-xs font-medium rounded-lg border transition-colors ${page === p ? "bg-slate-800 text-white border-slate-800" : "border-slate-200 text-slate-500 hover:bg-white hover:text-slate-700"}`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages || totalPages === 0}
            className="h-8 px-3 text-xs font-medium border border-slate-200 rounded-lg text-slate-500 hover:bg-white hover:text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      </div>

      {openMenu !== null && (
        <div className="fixed inset-0 z-10" onClick={() => setOpenMenu(null)} />
      )}
    </div>
  );
}