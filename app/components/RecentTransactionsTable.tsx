"use client";

import {
     Link2,
     Copy,
     CheckCircle2,
     AlertTriangle,
     XCircle,
} from "lucide-react";

type Transaction = {
     hash: string;
     from: string;
     to: string;
     amount: string;
     asset: string;
     status: "Confirmed" | "Pending";
     risk?: "High Value" | "Linked to Mixer";
     time: string;
};

const transactions: Transaction[] = [
     {
          hash: "0x8a7d953e...0c9d8e7f",
          from: "0x742d...b1e2",
          to: "0x1f98...F984",
          amount: "2.5",
          asset: "ETH",
          status: "Confirmed",
          time: "2 min ago",
     },
     {
          hash: "0x1b2c3d4e...9f0a1b2c",
          from: "0xdAC1...1ec7",
          to: "0xA0b8...eB48",
          amount: "15,000",
          asset: "USDC",
          status: "Pending",
          risk: "High Value",
          time: "5 min ago",
     },
     {
          hash: "0x3c4d5e6f...1a2b3c4d",
          from: "0x6B17...De0F",
          to: "0x2260...C599",
          amount: "0.85",
          asset: "BTC",
          status: "Confirmed",
          risk: "Linked to Mixer",
          time: "12 min ago",
     },
     {
          hash: "0x5e6f7a8b...3c4d5e6f",
          from: "0x1f98...F984",
          to: "0x742d...b1e2",
          amount: "500",
          asset: "DAI",
          status: "Confirmed",
          time: "18 min ago",
     },
     {
          hash: "0x7a8b9c0d...5e6f7a8b",
          from: "0x2260...C599",
          to: "0x6B17...De0F",
          amount: "3.2",
          asset: "ETH",
          status: "Pending",
          time: "24 min ago",
     },
];

export default function RecentTransactionsTable() {
     return (
          <div className="overflow-x-auto bg-white border border-grey-5400 rounded-[10px]">
               <table className="w-full text-sm">
                    <thead className="text-left text-gray-1900 border-b border-grey-5400">
                         <tr>
                              <th className="py-3 px-4 font-normal">Txn Hash</th>
                              <th className="font-normal">From</th>
                              <th className="font-normal">To</th>
                              <th className="font-normal">Amount</th>
                              <th className="font-normal">Status</th>
                              <th className="font-normal">Risk Flag</th>
                              <th className="font-normal">Time</th>
                         </tr>
                    </thead>

                    <tbody>
                         {transactions.map((tx, index) => (
                              <tr
                                   key={index}
                                   className="border-b border-grey-5400 last:border-none hover:bg-gray-50 transition"
                              >
                                   {/* Txn Hash */}
                                   <td className="py-3 px-4">
                                        <div className="flex items-center gap-2">
                                             <Link2 size={14} className="text-gray-1900" />
                                             <span className="font-medium text-sm font-normal text-black-1300 truncate max-w-[110px]">
                                                  {tx.hash}
                                             </span>
                                             <Copy
                                                  size={14}
                                                  className="text-gray-1900 cursor-pointer hover:text-black"
                                             />
                                        </div>
                                   </td>

                                   {/* From */}
                                   <td className="text-sm font-normal text-black-1300">
                                        {tx.from}
                                   </td>

                                   {/* To */}
                                   <td className="text-sm font-normal text-black-1300">
                                        {tx.to}
                                   </td>

                                   {/* Amount */}
                                   <td className="text-sm font-normal text-black-1300">
                                        <div className="flex items-center gap-2">
                                             {tx.amount}
                                             <span className="py-0.5 px-2.5 text-xs rounded-full bg-gray-6100 mr-2">
                                                  {tx.asset}</span>
                                        </div>
                                   </td>

                                   {/* Status */}
                                   <td>
                                        <span
                                             className={`flex items-center gap-1 px-2 text-xs border rounded-full font-medium w-fit
                    ${tx.status === "Confirmed"
                                                       ? "bg-green-3500/10 text-green-3500 border-green-3500/30"
                                                       : "bg-yellow-1100/10 text-yellow-1100 border-yellow-1100/30"
                                                  }`}
                                        >
                                             {tx.status === "Confirmed" && <CheckCircle2 size={12} />}
                                             {tx.status === "Pending" && <AlertTriangle size={12} />}
                                             {tx.status}
                                        </span>
                                   </td>

                                   {/* Risk Flag */}
                                   <td>
                                        {tx.risk ? (
                                             <span
                                                  className={`flex items-center gap-1 px-2 text-xs border rounded-full font-medium w-fit
                      ${tx.risk === "High Value"
                                                            ? "bg-yellow-1100/10 text-yellow-1100 border-yellow-1100/30"
                                                            : "bg-red-1300/10 text-red-1300 border-red-1300/30"
                                                       }`}
                                             >
                                                  <XCircle size={12} />
                                                  {tx.risk}
                                             </span>
                                        ) : (
                                             <span className="text-gray-1900">—</span>
                                        )}
                                   </td>

                                   {/* Time */}
                                   <td className="text-sm font-normal text-black-1300">
                                        {tx.time}
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
}