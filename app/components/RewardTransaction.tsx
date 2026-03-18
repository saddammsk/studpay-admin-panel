"use client";
import React from "react";
import { useCashbackStore } from "@/app/store/zustand/useCashbackStore";

const statusStyles = {
  Created: "bg-lightgreen17/10 text-lightgreen17",
  Pending: "bg-blue-1000/10 text-blue-1000",
  Expired: "bg-gray-2100 text-gray-1200",
};

export default function RewardTransaction() {
  const { filteredTransactions } = useCashbackStore();
  const transactions = filteredTransactions();

  return (
    <div className="w-full overflow-auto">
      <table className="4xl:w-full w-[700px] text-sm">
        <thead className="border-b border-gray-200 text-gray-500 uppercase text-xs">
          <tr>
            <th className="px-6 py-4 text-left">Transaction ID</th>
            <th className="px-6 py-4 text-left">Student</th>
            <th className="px-6 py-4 text-left">Trigger Event</th>
            <th className="px-6 py-4 text-left">Cashback</th>
            <th className="px-6 py-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => (
            <tr key={item.id} className="border-t border-gray-100 hover:bg-gray-50 transition">
              <td className="px-6 py-4 text-gray-600">{item.id}</td>
              <td className="px-6 py-4 font-medium text-gray-800">{item.student}</td>
              <td className="px-6 py-4 text-gray-500">{item.event}</td>
              <td className="px-6 py-4 font-semibold text-blue-1000">{item.cashback}</td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[item.status]}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}