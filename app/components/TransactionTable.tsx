"use client";

import React from "react";

type RiskLevel = "Low" | "Medium" | "High" | "Critical";

interface Transaction {
     type: "in" | "out";
     hash: string;
     from: string;
     to: string;
     amount: number;
     risk: RiskLevel;
     time: string;
     block: string;
}

const transactions: Transaction[] = [
     {
          type: "in",
          hash: "0xabc123...def456",
          from: "0x8baf19055...",
          to: "0x742d35Cc66...",
          amount: 125.5,
          risk: "High",
          time: "1/28/2024, 2:32:00 PM",
          block: "#18934521",
     },
     {
          type: "out",
          hash: "0x789xyz...abc123",
          from: "0x742d35Cc66...",
          to: "0xTornado...",
          amount: -50,
          risk: "Critical",
          time: "1/27/2024, 9:15:00 AM",
          block: "#18933102",
     },
     {
          type: "in",
          hash: "0xdef456...ghi789",
          from: "0xBinance...",
          to: "0x742d35Cc66...",
          amount: 200,
          risk: "Low",
          time: "1/25/2024, 4:45:00 PM",
          block: "#18930445",
     },
];

const riskColors: Record<RiskLevel, string> = {
     Low: "bg-green-3600/20 border-green-3600/30 text-green-3600",
     Medium: "bg-yellow-1100/20 border-yellow-1100/30 text-yellow-1100",
     High: "bg-yellow-1100/20 border-yellow-1100/30 text-yellow-1100",
     Critical: "bg-red2100/20 border-red2100/30 text-red2100",
};

const TransactionTable: React.FC = () => {
     return (
          <div className="w-full overflow-x-auto p-6">
               <table className="min-w-full xl:w-full w-[1199px] border-collapse">
                    <thead>
                         <tr className="text-left text-gray-6300 text-sm border-b border-black-2200">
                              <th className="p-4 font-normal">Type</th>
                              <th className="p-4 font-normal">Hash</th>
                              <th className="p-4 font-normal">From/To</th>
                              <th className="p-4 font-normal">Amount</th>
                              <th className="p-4 font-normal">Risk</th>
                              <th className="p-4 font-normal">Time</th>
                              <th className="p-4 font-normal">Block</th>
                         </tr>
                    </thead>
                    <tbody>
                         {transactions.map((tx, index) => (
                              <tr key={index} className="border-b border-gray-1000 hover:bg-gray-50">
                                   {/* Type */}
                                   <td className="p-4">
                                        <div
                                             className={`w-8 h-8 flex items-center justify-center rounded-xl ${tx.type === "in"
                                                  ? "bg-green-3600/20 text-green-3600 "
                                                  : "bg-red2100/20 text-red2100"
                                                  }`}
                                        >
                                             <span
                                                  className={`inline-block transform ${tx.type === "in" ? "rotate-45" : "-rotate-310"
                                                       }`}
                                             >
                                                  {tx.type === "in" ? "↓" : "↑"}
                                             </span>
                                        </div>
                                   </td>

                                   {/* Hash */}
                                   <td className="p-4 text-sm text-black-2100 font-mono cursor-pointer hover:underline">
                                        {tx.hash}
                                   </td>

                                   {/* From/To */}
                                   <td className="p-4 text-sm">
                                        <div>
                                             <span className="text-black-2100">From:</span>{" "}
                                             <span className="text-black-2100">{tx.from}</span>
                                        </div>
                                        <div>
                                             <span className="text-black-2100">To:</span>{" "}
                                             <span className="text-black-2100">{tx.to}</span>
                                        </div>
                                   </td>

                                   {/* Amount */}
                                   <td
                                        className={`p-4 font-bold text-base ${tx.amount > 0 ? "text-green-3600" : "text-red2100"
                                             }`}
                                   >
                                        {tx.amount > 0 ? "+" : ""}
                                        {tx.amount} ETH
                                   </td>

                                   {/* Risk */}
                                   <td className="p-4">
                                        <span
                                             className={`px-3 py-1 text-xs border rounded-full font-medium ${riskColors[tx.risk]}`}
                                        >
                                             {tx.risk}
                                        </span>
                                   </td>

                                   {/* Time */}
                                   <td className="p-4 text-sm text-black-2100">{tx.time}</td>

                                   {/* Block */}
                                   <td className="p-4 text-sm text-black-2100">{tx.block}</td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
};

export default TransactionTable;