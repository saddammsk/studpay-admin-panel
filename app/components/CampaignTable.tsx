"use client";

import React from "react";
import { MoreHorizontal } from "lucide-react";

type Campaign = {
     id: string;
     campaign: string;
     type: "Cashback" | "Points" | "Voucher";
     rule: string;
     cap: string;
     status: "Live" | "Paused";
};

const campaigns: Campaign[] = [
     {
          id: "1",
          campaign: "Early Bird Rent",
          type: "Cashback",
          rule: "5% on first rent payment",
          cap: "€50",
          status: "Live",
     },
     {
          id: "2",
          campaign: "Referral Bonus",
          type: "Points",
          rule: "500 pts per referral",
          cap: "Unlimited",
          status: "Live",
     },
     {
          id: "3",
          campaign: "SIM Activation",
          type: "Voucher",
          rule: "€10 voucher on activation",
          cap: "€10",
          status: "Live",
     },
     {
          id: "4",
          campaign: "Welcome Bundle",
          type: "Cashback",
          rule: "3% on bundle purchase",
          cap: "€30",
          status: "Paused",
     },
     {
          id: "5",
          campaign: "Insurance Signup",
          type: "Points",
          rule: "1000 pts on signup",
          cap: "1000 pts",
          status: "Live",
     },
     {
          id: "6",
          campaign: "Monthly Spender",
          type: "Cashback",
          rule: "2% on €500+ spend",
          cap: "€25",
          status: "Paused",
     },
];

const typeStyles = {
     Cashback: "bg-blue-1000/10 text-blue-1000",
     Points: "bg-gray-7200 text-gray-7300",
     Voucher: "bg-green-1600/10 text-green-1600",
};

const statusStyles = {
     Live: "bg-green-1600/10 text-green-1600",
     Paused: "bg-gray-2100 text-gray-1200",
};

export default function CampaignTable() {
     return (
          <div className="w-full overflow-auto">
               <table className="4xl:w-full w-[700px] text-sm">

                    {/* Header */}
                    <thead className="border-b border-gray-1000 text-gray-1200 uppercase text-xs">
                         <tr>
                              <th className="px-4 py-4 text-left">Campaign</th>
                              <th className="px-4 py-4 text-left">Type</th>
                              <th className="px-4 py-4 text-left">Rule</th>
                              <th className="px-4 py-4 text-left">Max Cap</th>
                              <th className="px-4 py-4 text-left">Status</th>
                              <th className="px-4 py-4 text-right"></th>
                         </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                         {campaigns.map((item) => (
                              <tr
                                   key={item.id}
                                   className="border-t border-gray-1000 hover:bg-gray-50 transition"
                              >
                                   {/* Campaign */}
                                   <td className="px-4 py-4 text-blue-1300 font-medium">
                                        {item.campaign}
                                   </td>

                                   {/* Type */}
                                   <td className="px-4 py-4">
                                        <span
                                             className={`px-3 py-1 rounded-full text-xs ${typeStyles[item.type]}`}
                                        >
                                             {item.type}
                                        </span>
                                   </td>

                                   {/* Rule */}
                                   <td className="px-4 py-4 text-gray-1200">{item.rule}</td>

                                   {/* Cap */}
                                   <td className="px-4 py-4 text-blue-1300 font-medium">{item.cap}</td>

                                   {/* Status */}
                                   <td className="px-4 py-4">
                                        <span
                                             className={`px-3 py-1 rounded-full text-xs ${statusStyles[item.status]}`}
                                        >
                                             {item.status}
                                        </span>
                                   </td>

                                   {/* Menu */}
                                   <td className="px-4 py-4 text-right text-gray-1200">
                                        <MoreHorizontal className="w-4 h-4 cursor-pointer" />
                                   </td>
                              </tr>
                         ))}
                    </tbody>

               </table>
          </div>
     );
}