"use client";

import Image from "next/image";
import { useAviDossierStore } from "@/app/store/zustand/useAviDossierStore";

const statusConfig = {
  Paid: "bg-green53/10 text-green53 border-green53/20",
  Scheduled: "bg-gray-1900/10 text-gray-1900 border-gray-1900/20",
  "On Hold": "bg-yellow-1100/10 text-yellow-1100 border-yellow-1100/20",
} as const;

export default function AviMonthScheduleTable() {
  const { scheduleEntries, holdEntry, resumeEntry, copyIban } =
    useAviDossierStore();

  return (
    <div className="overflow-x-auto bg-white border border-solid border-gray-3600 rounded-lg">
      <table className="5xl:w-full md:w-150 w-250">
        <thead>
          <tr className="bg-gray-50 border-b border-solid border-gray-3600">
            <th className="px-4 py-1 text-left text-sm font-semibold text-gray-1900">Month</th>
            <th className="px-4 py-1 text-left text-sm font-semibold text-gray-1900">Scheduled <br /> Date</th>
            <th className="px-4 py-1 text-left text-sm font-semibold text-gray-1900">Amount</th>
            <th className="px-4 py-1 text-left text-sm font-semibold text-gray-1900">Status</th>
            <th className="px-4 py-1 text-left text-sm font-semibold text-gray-1900">Destination IBAN</th>
            <th className="px-4 py-1 text-right text-sm font-semibold text-gray-1900">Actions</th>
          </tr>
        </thead>

        <tbody>
          {scheduleEntries.map((txn) => (
            <tr key={txn.id} className="border-b border-solid border-gray-3600 hover:bg-gray-50 transition">
              <td className="p-4 text-blue-1300 font-medium text-sm leading-5">{txn.month}</td>
              <td className="p-4 text-gray-1900 font-normal text-sm leading-5">{txn.scheduledDate}</td>
              <td className="p-4 text-blue-1300 font-semibold text-sm leading-5">{txn.amount}</td>

              <td className="p-4 text-left">
                <span
                  className={`py-1 inline-flex items-center text-xs font-medium rounded-full border h-5.5 px-2 ${statusConfig[txn.status]}`}
                >
                  ● {txn.status}
                </span>
              </td>

              <td className="p-4 text-gray-1900 text-xs leading-4 font-normal flex items-center gap-2">
                <p className="max-w-35 w-full"> {txn.iban}</p>
                <button className="p-1 cursor-pointer" onClick={() => copyIban(txn.iban)}>
                  <Image src="/icons/copy-icon.svg" alt="copy" width={14} height={14} className="brightness-0" />
                </button>
              </td>

              <td className="px-4 py-3 text-right">
                {txn.action === "Hold" && (
                  <button
                    onClick={() => holdEntry(txn.id)}
                    className="group cursor-pointer flex items-center justify-center text-xs gap-1.5 font-semibold text-yellow-1100 hover:text-blue-1300 border border-transparent rounded-md h-8 px-3 ml-auto hover:bg-yellow-1100/10"
                  >
                    <Image src="/icons/pause-icon.svg" alt="hold" width={16} height={16} className="group-hover:brightness-0" /> Hold
                  </button>
                )}

                {txn.action === "Resume" && (
                  <button
                    onClick={() => resumeEntry(txn.id)}
                    className="group cursor-pointer flex items-center justify-center text-xs gap-1.5 font-semibold text-green53 hover:text-blue-1300 border border-green53/30 rounded-md h-8 px-3 ml-auto hover:bg-green53/10"
                  >
                    <Image src="/icons/play-icon.svg" alt="resume" width={16} height={16} className="group-hover:brightness-0" /> Resume
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}