"use client";

import React from "react";
import { useRouter } from "next/navigation"
import { Heart, Plane, Shield } from "lucide-react";

type Policy = {
     id: string;
     student: string;
     type: "Health" | "Travel" | "Liability";
     provider: string;
     startDate: string;
     endDate: string;
     status: "Active" | "Pending" | "Expired" | "Cancelled";
     source: string;
};

const policies: Policy[] = [
     {
          id: "POL-2024-001",
          student: "Emma Thompson",
          type: "Health",
          provider: "Allianz",
          startDate: "Jan 15, 2024",
          endDate: "Jan 14, 2025",
          status: "Active",
          source: "University of Munich",
     },
     {
          id: "POL-2024-002",
          student: "Emma Thompson",
          type: "Travel",
          provider: "AXA",
          startDate: "Feb 01, 2024",
          endDate: "Aug 01, 2024",
          status: "Active",
          source: "Direct Signup",
     },
     {
          id: "POL-2024-003",
          student: "Emma Thompson",
          type: "Liability",
          provider: "HanseMerkur",
          startDate: "Jan 20, 2024",
          endDate: "Jan 19, 2025",
          status: "Pending",
          source: "TU Berlin Referral",
     },
     {
          id: "POL-2024-004",
          student: "Emma Thompson",
          type: "Health",
          provider: "TK",
          startDate: "Sep 01, 2023",
          endDate: "Feb 28, 2024",
          status: "Expired",
          source: "University of Heidelberg",
     },
];

const badgeStyles = {
     status: {
          Active:
               "bg-green-1600/10 border-green-1600/30 text-green-1600",
          Pending:
               "bg-yellow-1100/10 border-yellow-1100/30 text-yellow-1100",
          Expired:
               "bg-red-1300/10 border-red-1300/30 text-red-1300",
          Cancelled:
               "bg-gray-1600 border-gray-1000 text-gray-1200",
     },
     type: {
          Health:
               "bg-red-1300/10 text-red-1300 border border-red-1300/30",
          Travel:
               "bg-blue-1000/10 text-blue-1000 border border-blue-1000/30",
          Liability:
               "bg-yellow-1100/10 text-yellow-1100 border border-yellow-1100/30",
     },
};

export default function PolicyTable() {
     const router = useRouter()
     return (
          <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-auto">
               <table className="xl:w-full w-350 text-sm">
                    <thead className="bg-gray-1600/50 border-b border-gray-1000 text-gray-1200 uppercase text-xs">
                         <tr>
                              <th className="px-4 py-4 text-left">Policy ID</th>
                              <th className="px-4 py-4 text-left">Student Name</th>
                              <th className="px-4 py-4 text-left">Type</th>
                              <th className="px-4 py-4 text-left">Provider</th>
                              <th className="px-4 py-4 text-left">Start Date</th>
                              <th className="px-4 py-4 text-left">End Date</th>
                              <th className="px-4 py-4 text-left">Status</th>
                              <th className="px-4 py-4 text-left">Source/Campaign</th>
                         </tr>
                    </thead>

                    <tbody>
                         {policies.map((policy) => (
                              <tr  onClick={() => router.push(`/insurance_hub/insurance`)}
                                   key={policy.id}
                                   className="border-t border-gray-1000 hover:bg-gray-50 transition"
                              >
                                   <td className="px-4 py-4 text-gray-1200">
                                        {policy.id}
                                   </td>

                                   <td className="px-4 py-4 text-blue-1000">
                                        {policy.student}
                                   </td>

                                   <td className="px-4 py-4">
                                        <span
                                             className={`px-3 py-1 rounded-full text-xs inline-flex items-center gap-1 font-normal ${badgeStyles.type[policy.type]}`}
                                        >
                                             {policy.type === "Health" && (
                                                  <Heart className="w-3.5 h-3.5" />
                                             )}
                                             {policy.type === "Travel" && (
                                                  <Plane className="w-3.5 h-3.5" />
                                             )}
                                             {policy.type === "Liability" && (
                                                  <Shield className="w-3.5 h-3.5" />
                                             )}
                                             {policy.type}
                                        </span>
                                   </td>

                                   <td className="px-4 py-4 text-gray-1200">
                                        {policy.provider}
                                   </td>

                                   <td className="px-4 py-4 text-gray-1200">
                                        {policy.startDate}
                                   </td>

                                   <td className="px-4 py-4 text-gray-1200">
                                        {policy.endDate}
                                   </td>

                                   <td className="px-4 py-4">
                                        <span
                                             className={`px-2.5 py-1 border rounded-full inline-block text-xs font-normal ${badgeStyles.status[policy.status]}`}
                                        >
                                             {policy.status}
                                        </span>
                                   </td>

                                   <td className="px-4 py-4 text-gray-1200">
                                        {policy.source}
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
}