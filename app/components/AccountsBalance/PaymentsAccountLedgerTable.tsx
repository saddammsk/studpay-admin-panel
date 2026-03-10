"use client";
import { useState } from 'react'

import Link from "next/link";
import Image from "next/image";
import CustomSelect from "@/app/components/CustomSelect";

type PaymentStatus = "Debit" | "Credit" | "Hold";



interface Payment {
  id: number;
  date: string;
  time: string;
  description: string;
  subdescription: string;
  status: PaymentStatus;
  amount: string;
  fee: string;
  balance: string;
}


const payments: Payment[] = [
  {
    id: 1,
    date: "2024-01-15",
    time: "14:32",
    description: "Tuition Payment - Spring 2024",
    subdescription: '',
    status: "Debit",
    amount: "-€4,500.00",
    fee: "€2.50",
    balance: "€7,950.75",
  }, {
    id: 2,
    date: "2024-01-14",
    time: "09:15",
    description: "Bank Transfer Received",
    subdescription: '',
    status: "Credit",
    amount: "+€5,000.00",
    fee: "—",
    balance: "€12,450.75",
  }, {
    id: 3,
    date: "2024-01-13",
    time: "16:45",
    description: "Housing Deposit Hold",
    subdescription: '',
    status: "Hold",
    amount: "+€2,500.00",
    fee: "—",
    balance: "€7,450.75",
  }, {
    id: 4,
    date: "2024-01-12",
    time: "11:20",
    description: "Manual Adjustment - Fee Reversal",
    subdescription: "Adjusted by Admin John",
    status: "Credit",
    amount: "+€25.00",
    fee: "—",
    balance: "€9,950.75",
  }, {
    id: 5,
    date: "2024-01-11",
    time: "08:00",
    description: "Currency Exchange EUR→USD",
    subdescription: "",
    status: "Debit",
    amount: "-€1,000.00",
    fee: "€5.00",
    balance: "€9,925.75",
  }, {
    id: 6,
    date: "2024-01-10",
    time: "15:30",
    description: "Scholarship Credit",
    subdescription: "",
    status: "Credit",
    amount: "+€3,000.00",
    fee: "—",
    balance: "€10,925.75",
  },
];


const statusConfig = {
  Debit: {
    classes: "bg-red-1300/10 border-red-1300/20 text-red-1300",
  },
  Credit: {
    classes: "bg-lightgreen18 border-lightgreen17/20 text-lightgreen17",
  },
  Hold: {
    classes: "bg-yellow-1100/10 border-yellow-1100/20 text-yellow-1100",
  },

} as const;





export default function PaymentsAccountLedgerTable() {



  return (
    <div>
      <div className="mt-6 bg-white border border-gray-3600 rounded-lg overflow-x-auto">
        <div className='py-4 px-6 bg-gray-6200/30 border-b border-solid border-gray-3600 rounded-t-lg'>
          <div className=''>
            <h4 className='text-black-2000 text-lg leading-7 font-semibold'>Account Ledger</h4>
            <p className='text-SteelGray text-sm leading-5 font-normal'>Complete transaction history</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="5xl:w-full w-325">
            <thead>
              <tr className="bg-gray-6200/50 border-b border-solid border-gray-3600">
                <th className="px-4 py-3 text-left text-grya-1900 font-inter font-semibold text-sm leading-5">Date</th>
                <th className="px-4 py-3 text-left text-grya-1900 font-inter font-semibold text-sm leading-5">Description</th>
                <th className="px-4 py-3 text-left text-grya-1900 font-inter font-semibold text-sm leading-5">Type</th>
                <th className="px-4 py-3 text-left text-grya-1900 font-inter font-semibold text-sm leading-5">Amount</th>
                <th className="px-4 py-3 text-left text-grya-1900 font-inter font-semibold text-sm leading-5">Fee</th>
                <th className="px-4 py-3 text-left text-grya-1900 font-inter font-semibold text-sm leading-5">Balance</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray1600 hover:bg-gray1700/50 transition last:border-b-0"
                >
                  <td className="p-4 text-grya-1900 text-xs leading-4 font-normal">
                    {item.date}
                    <span className='block'>{item.time}</span>
                  </td>
                  <td className="p-4">
                    <h4 className='text-blue1700 text-sm leading-5 font-normal'>
                      {item.description}
                      {item.subdescription && (
                        <div className="text-blue-1400 leading-4 flex items-center gap-1">
                          <span className="flex items-center justify-center w-1.5 h-1.5 rounded-full bg-blue-1400"></span>
                          {item.subdescription}
                        </div>
                      )}
                    </h4>
                  </td>
                  <td className="p-4">
                    <span
                      className={`inline-flex gap-1.5 items-center rounded-full justify-center font-inter font-bold text-xs leading-4 border border-solid px-2.5 h-5 ${statusConfig[item.status].classes}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`text-sm leading-5 font-bold ${item.status === "Debit"
                          ? "text-red-1300"
                          : item.status === "Credit"
                            ? "text-lightgreen17"
                            : "text-yellow-1100"
                        }`}
                    >
                      {item.amount}
                    </span>
                  </td>
                  <td className="p-4 text-grya-1900 text-sm leading-5 font-normal">
                    {item.fee}
                  </td>
                  <td className="p-4">
                    <span className='text-blue1700 text-sm leading-5 font-bold'>{item.balance}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


