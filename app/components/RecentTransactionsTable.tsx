"use client";

import { Link2, Copy, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { UsecryptoWalletstore } from "@/app/store/zustand/UsecryptoWalletstore";

const riskBadge: Record<string, string> = {
  Low: "bg-green-3500/10 text-green-3500 border-green-3500/30",
  Medium: "bg-yellow-1100/10 text-yellow-1100 border-yellow-1100/30",
  High: "bg-red-1300/10 text-red-1300 border-red-1300/30",
  None: "bg-gray-100 text-gray-400 border-gray-200",
};

const typeBadge: Record<string, string> = {
  Incoming: "bg-green-3500/10 text-green-3500",
  Outgoing: "bg-red-1300/10 text-red-1300",
  Internal: "bg-blue-1300/10 text-blue-1300",
};

export default function TransactionTable() {
  const txSearch = UsecryptoWalletstore((s) => s.txSearch);
  const txRiskFilter = UsecryptoWalletstore((s) => s.txRiskFilter);
  const txTypeFilter = UsecryptoWalletstore((s) => s.txTypeFilter);
  const getFilteredTxHistory = UsecryptoWalletstore((s) => s.getFilteredTxHistory);

  const rows = getFilteredTxHistory();

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-left text-gray-1900 border-b border-grey-5400">
          <tr>
            <th className="py-3 px-4 font-normal">Txn Hash</th>
            <th className="font-normal">From</th>
            <th className="font-normal">To</th>
            <th className="font-normal">Amount</th>
            <th className="font-normal">Type</th>
            <th className="font-normal">Risk</th>
            <th className="font-normal">Status</th>
            <th className="font-normal">Time</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={8} className="py-10 px-4 text-center text-sm text-gray-1900">
                No transactions match your filters.
              </td>
            </tr>
          ) : (
            rows.map((tx, i) => (
              <tr key={i} className="border-b border-grey-5400 last:border-none hover:bg-gray-50 transition">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <Link2 size={14} className="text-gray-1900" />
                    <span className="font-normal text-sm text-black-1300 truncate max-w-[110px]">{tx.hash}</span>
                    <Copy
                      size={14}
                      className="text-gray-1900 cursor-pointer hover:text-black"
                      onClick={() => navigator.clipboard.writeText(tx.hash)}
                    />
                  </div>
                </td>
                <td className="text-sm font-normal text-black-1300">{tx.from}</td>
                <td className="text-sm font-normal text-black-1300">{tx.to}</td>
                <td className="text-sm font-normal text-black-1300">
                  <div className="flex items-center gap-2">
                    {tx.amount}
                    <span className="py-0.5 px-2.5 text-xs rounded-full bg-gray-6100">{tx.asset}</span>
                  </div>
                </td>
                <td>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${typeBadge[tx.type]}`}>
                    {tx.type}
                  </span>
                </td>
                <td>
                  <span className={`text-xs font-medium px-2 py-0.5 border rounded-full ${riskBadge[tx.risk]}`}>
                    {tx.risk === "None" ? "—" : tx.risk}
                  </span>
                </td>
                <td>
                  <span
                    className={`flex items-center gap-1 px-2 text-xs border rounded-full font-medium w-fit ${
                      tx.status === "Confirmed"
                        ? "bg-green-3500/10 text-green-3500 border-green-3500/30"
                        : "bg-yellow-1100/10 text-yellow-1100 border-yellow-1100/30"
                    }`}
                  >
                    {tx.status === "Confirmed" ? <CheckCircle2 size={12} /> : <AlertTriangle size={12} />}
                    {tx.status}
                  </span>
                </td>
                <td className="text-sm font-normal text-black-1300 pr-4">{tx.time}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}