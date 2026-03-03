"use client";
import { useState } from 'react'
import Image from "next/image";
import Link from "next/link";

interface Transaction {
  id: number;
  tag: string;
  DueDate: string;
  principal: string;
  interest: string;
  fees: string;
  total: string;
  status: "Paid" | "Late" | "Upcoming";
  action: string;
}


const statusConfig = {
  Paid: "bg-yellow1800 border-lightgreen17/20 text-lightgreen17",
  Late: "bg-yellow1800 border-red-1300/20 text-red-1300",
  Upcoming: "bg-gray-1600 border-gray-1000 text-gray-1200",
} as const;

const transactions: Transaction[] = [
  {
    id: 1,
    tag: "1",
    DueDate: "Sep 15, 2024",
    principal: "$450.00",
    interest: "$25.00",
    fees: "$0.00",
    total: "$475.00",
    status: "Paid",
    action: "Manual Settle",
  }, {
    id: 2,
    tag: "2",
    DueDate: "Oct 15, 2024",
    principal: "$450.00",
    interest: "$23.75",
    fees: "$0.00",
    total: "$473.75",
    status: "Paid",
    action: "Manual Settle",
  }, {
    id: 3,
    tag: "3",
    DueDate: "Nov 15, 2024",
    principal: "$450.00",
    interest: "$22.50",
    fees: "$0.00",
    total: "$472.50",
    status: "Paid",
    action: "Manual Settle",
  }, {
    id: 4,
    tag: "4",
    DueDate: "Dec 15, 2024",
    principal: "$450.00",
    interest: "$21.25",
    fees: "$15.00",
    total: "$486.25",
    status: "Late",
    action: "Manual Settle",
  }, {
    id: 5,
    tag: "5",
    DueDate: "Jan 15, 2025",
    principal: "$450.00",
    interest: "$20.00",
    fees: "$0.00",
    total: "$470.00",
    status: "Paid",
    action: "Manual Settle",
  }, {
    id: 6,
    tag: "6",
    DueDate: "Feb 15, 2025",
    principal: "$450.00",
    interest: "$18.75",
    fees: "$0.00",
    total: "$468.75",
    status: "Upcoming",
    action: "Manual Settle",
  }, {
    id: 7,
    tag: "7",
    DueDate: "Mar 15, 2025",
    principal: "$450.00",
    interest: "$17.50",
    fees: "$0.00",
    total: "$467.50",
    status: "Upcoming",
    action: "Manual Settle",
  }, {
    id: 8,
    tag: "8",
    DueDate: "Apr 15, 2025",
    principal: "$450.00",
    interest: "$16.25",
    fees: "$0.00",
    total: "$466.25",
    status: "Upcoming",
    action: "Manual Settle",
  }, {
    id: 9,
    tag: "9",
    DueDate: "May 15, 2025",
    principal: "$450.00",
    interest: "$15.00",
    fees: "$0.00",
    total: "$465.00",
    status: "Upcoming",
    action: "Manual Settle",
  }, {
    id: 10,
    tag: "10",
    DueDate: "Jun 15, 2025",
    principal: "$450.00",
    interest: "$13.75",
    fees: "$0.00",
    total: "$463.75",
    status: "Upcoming",
    action: "Manual Settle",
  },

];

export default function TransactionTable() {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="4xl:w-full w-200">
          <thead>
            <tr className="bg-gray-1600/50 border-b border-gray-1000">
              <th className="px-4 py-3.5 text-left text-sm leading-5 font-semibold text-blue-1300">
                #
              </th>
              <th className="px-4 py-3.5 text-left text-sm leading-5 font-semibold text-blue-1300">
                Due Date
              </th>
              <th className="px-4 py-3.5 text-left text-sm leading-5 font-semibold text-blue-1300">
                Principal
              </th>
              <th className="text-left px-4 py-3.5  text-sm leading-5 font-semibold text-blue-1300">
                Interest
              </th>
              <th className="px-4 py-3.5 text-left text-sm leading-5 font-semibold text-blue-1300">
                Fees
              </th>
              <th className="px-4 py-3.5 text-left text-sm leading-5 font-semibold text-blue-1300">
                Total
              </th>
              <th className="px-4 py-3.5 text-center text-sm leading-5 font-semibold text-blue-1300">
                Status
              </th>
              <th className="px-4 py-3.5 text-left text-sm leading-5 font-semibold text-blue-1300">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} className={`border-b border-grey-5400 last:border-b-0 transition
    ${txn.id === 4 ? "bg-RosePink/30" : "hover:bg-grey5600/20"}
  `}>
                <td className="p-4 text-blue-1300 text-sm leading-5 font-medium">
                  <div>{txn.tag}</div>
                </td>
                <td className="p-4 text-blue-1300 text-sm leading-5 font-normal">
                  <div>{txn.DueDate}</div>
                </td>
                <td className="p-4 text-blue-1300 text-sm leading-5 font-normal">{txn.principal}</td>
                <td className="p-4 text-blue-1300 text-sm leading-5 font-normal">
                  <div>{txn.interest}</div>
                </td>
                <td className="p-4 text-blue-1300 text-sm leading-5 font-normal">
                  <div>{txn.fees}</div>
                </td>
                <td className="p-4 text-blue-1300 text-sm leading-5 font-bold">
                  <div>{txn.total}</div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span
                      className={`px-2.5 h-5.5 inline-flex items-center gap-1 rounded-full font-semibold text-xs leading-4 border border-solid ${statusConfig[txn.status]}`}
                    >
                      {txn.status}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    {(txn.status === "Late" || txn.status === "Upcoming") && (
                      <Link
                        href="#"
                        className="inline-flex items-center justify-center border border-solid border-gray-1000 bg-white rounded-md h-7 text-xs leading-4 font-medium text-blue-13 px-2"
                      >
                        Manual Settle
                      </Link>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  );
}