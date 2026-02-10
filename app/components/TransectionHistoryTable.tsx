"use client";
import { useState } from 'react'

import Image from "next/image";
import Link from "next/link";
import CustomSelect from "@/app/components/CustomSelect"
import InputField from "@/app/components/InputField";

type PaymentStatus = "completed" | "pending";

interface Payment {
  id: number;
  transaction: string;
  date: string;
  type: string;
  description: string;
  amount: string;
  status: PaymentStatus;
}

const statusConfig: Record<PaymentStatus, { classes: string }> = {
  completed: {
    classes: "bg-green-1200 text-green-1100",
  },
  pending: {
    classes: "bg-yellow1200 text-brown-1000",
  },
};


const payments: Payment[] = [
  {
    id: 1,
    transaction: "TXN001",
    date: "12/15/2024",
    type: "Recharge",
    description: "Wallet top-up",
    amount: "+$500.00",
    status: "completed",
  },
  {
    id: 2,
    transaction: "TXN002",
    date: "12/14/2024",
    type: "Payment",
    description: "Tuition fee payment",
    amount: "$150.00",
    status: "completed",
  },
  {
    id: 3,
    transaction: "TXN003",
    date: "12/13/2024",
    type: "Withdrawal",
    description: "WalBank transfer",
    amount: "$200.00",
    status: "pending",
  },
];

export default function TransactionTable() {
  const [status, setStatus] = useState<string>("All Types")
  const [status2, setStatus2] = useState<string>("All Types")
  return (
    <div className="bg-white border border-gray-1000 rounded-lg">
      <div className="sm:py-8.25 sm:px-6 p-4 flex sm:gap-0 gap-4 sm:flex-row flex-col sm:items-center justify-between">
        <h4 className="text-black13 font-segoe font-normal text-2xl leading-5">Transaction History</h4>
        <ul className="sm:flex grid grid-cols-2 items-center gap-2">
          <li>
            <Link href={"#"} className="sm:w-auto w-full text-black13 gap-4 hover:bg-gray-1600 transition-all duration-500 ease-in-out font-segoe font-normal text-sm leading-5 border border-solid border-gray1600 rounded-md px-3.25 h-9 inline-flex items-center justify-center">
              <Image
                src="../images/download-icon.svg"
                width='16'
                height='16'
                alt=""
                className="brightness-0"
              />
              Export
            </Link>
          </li>
          <li>
            <Link href={"#"} className="sm:w-auto w-full text-black13 gap-4 hover:bg-gray-1600 transition-all duration-500 ease-in-out font-segoe font-normal text-sm leading-5 border border-solid border-gray1600 rounded-md px-3.25 h-9 inline-flex items-center justify-center">
              <Image
                src="../images/filter.svg"
                width='16'
                height='16'
                alt=""
              />
              Filter
            </Link>
          </li>
        </ul>
      </div>
      <div className='sm:px-6 px-4 sm:pb-6 pb-4'>
        <div className="mb-6">
          <form>
            <div className="flex sm:flex-row flex-col items-center gap-4">
              <div className="md:max-w-47.75 sm:max-w-32.5 w-full">
                <CustomSelect
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  options={[
                    { label: "All Types", value: "All Types" },
                    { label: "Approved", value: "Approved" },
                    { label: "Rejected", value: "Rejected" },
                  ]}
                />
              </div>
              <div className="md:max-w-47.75 sm:max-w-35 max-w-full w-full">
                <CustomSelect
                  value={status2}
                  onChange={(e) => setStatus2(e.target.value)}
                  options={[
                    { label: "Last 30 days", value: "Last 30 days" },
                    { label: "Approved", value: "Approved" },
                    { label: "Rejected", value: "Rejected" },
                  ]}
                />
              </div>
              <div className='max-w-[320px] w-full'>
                <InputField
                  type="text"
                  placeholder="Search transactions..."
                  ClassName="pl-3!"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="overflow-x-auto">
          <table className="2xl:w-full w-170">
            <thead>
              <tr className="border-b border-gray1600">
                <th className="px-4 py-3 text-left text-gray-1400 font-normal font-segoe text-[13.56px]">Transaction ID</th>
                <th className="px-4 py-3 text-left text-gray-1400 font-normal font-segoe text-[13.56px]">Date</th>
                <th className="px-4 py-3 text-left text-gray-1400 font-normal font-segoe text-[13.56px]">Type</th>
                <th className="px-4 py-3 text-left text-gray-1400 font-normal font-segoe text-[13.56px]">Description</th>
                <th className="px-4 py-3 text-right text-gray-1400 font-normal font-segoe text-[13.56px]">Amount</th>
                <th className="px-4 py-3 text-left text-gray-1400 font-normal font-segoe text-[13.56px]">Status</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((item, index) => (
                <tr key={item.id} className="border-b border-gray1600 hover:bg-gray1700/50">
                  <td className="p-4 text-black13 font-segoe font-normal text-[13.78px] leading-5">{item.transaction}</td>
                  <td className="p-4 text-black13 font-segoe font-normal text-[13.78px] leading-5">{item.date}</td>
                  <td className="p-4 text-black13 font-segoe font-normal text-[13.78px] leading-5">{item.type}</td>
                  <td className="p-4 text-black13 font-segoe font-normal text-[13.78px] leading-5">{item.description}</td>
                  <td
                    className={`p-4 text-right font-segoe font-normal text-[13.78px] leading-5 ${index === 0 ? "text-green-600" : "text-red-600"
                      }`}
                  >
                    {item.amount}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2 h-5 rounded-full text-[11.63px] font-normal font-segoe leading-4 inline-flex items-center justify-center ${statusConfig[item.status].classes}`}
                    >
                      {item.status}
                    </span>
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
