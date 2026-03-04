"use client";

import React from "react";
import {
     AlertTriangle,
     CreditCard,
     Globe,
     FileText,
     Activity,
     Smartphone,
} from "lucide-react";

type RiskLevel = "High Risk" | "Medium Risk" | "Low Risk";
type StatusType = "Critical" | "Suspicious" | "Pending" | "Cleared";

interface Alert {
     id: string;
     initials: string;
     name: string;
     email: string;
     category: string;
     riskScore: number;
     riskLevel: RiskLevel;
     date: string;
     time: string;
     status: StatusType;
}

const alerts: Alert[] = [
     {
          id: "ALT-001",
          initials: "RS",
          name: "Rahul Sharma",
          email: "rahul.sharma@email.com",
          category: "Identity Theft",
          riskScore: 95,
          riskLevel: "High Risk",
          date: "Feb 4",
          time: "02:32 PM",
          status: "Critical",
     },
     {
          id: "ALT-002",
          initials: "PP",
          name: "Priya Patel",
          email: "priya.patel@email.com",
          category: "Payment Bounce",
          riskScore: 78,
          riskLevel: "Medium Risk",
          date: "Feb 4",
          time: "12:15 PM",
          status: "Suspicious",
     },
     {
          id: "ALT-003",
          initials: "JW",
          name: "James Wilson",
          email: "james.wilson@email.com",
          category: "Multiple IPs",
          riskScore: 62,
          riskLevel: "Medium Risk",
          date: "Feb 4",
          time: "10:45 AM",
          status: "Suspicious",
     },
     {
          id: "ALT-004",
          initials: "AK",
          name: "Amit Kumar",
          email: "amit.kumar@email.com",
          category: "Document Fraud",
          riskScore: 88,
          riskLevel: "High Risk",
          date: "Feb 4",
          time: "09:20 AM",
          status: "Critical",
     },
];

const categoryConfig: Record<
     string,
     { icon: React.ReactNode; style: string }
> = {
     "Identity Theft": {
          icon: <AlertTriangle size={14} />,
          style: "bg-red-1300/10 text-red-1300 border border-red-1300/20",
     },
     "Payment Bounce": {
          icon: <CreditCard size={14} />,
          style: "bg-yellow-1100/10 text-yellow-1100 border border-yellow-1100/20",
     },
     "Multiple IPs": {
          icon: <Globe size={14} />,
          style: "bg-blue1400/10 text-blue1400 border border-blue1400/20",
     },
     "Document Fraud": {
          icon: <FileText size={14} />,
          style: "bg-red-50 text-red-600 border border-red-200",
     },
     "Suspicious Activity": {
          icon: <Activity size={14} />,
          style: "bg-yellow-50 text-yellow-600 border border-yellow-200",
     },
     "Device Fraud": {
          icon: <Smartphone size={14} />,
          style: "bg-red-1300/10 text-red-1300 border border-red-1300/20",
     },
};

const riskColors = {
     "High Risk": "bg-red-1300/10 text-red-1300 border border-red-1300/20",
     "Medium Risk": "bg-yellow-1100/10 text-yellow-1100 border border-yellow-1100/20",
     "Low Risk": "bg-green-1600/20 text-green-1600 border border-green-1600/10",
};

const statusColors = {
     Critical: "text-red-1300",
     Suspicious: "text-yellow-1100",
     Pending: "text-gray-1900",
     Cleared: "text-green-1600",
};

export default function AlertsTable() {
     return (
          <div className="bg-white rounded-xl mt-3 border border-gray-3600 overflow-hidden">
               <table className="w-full text-sm">
                    <thead className="bg-gray-6100/50 border-gray-3600 text-blue-1300">
                         <tr>
                              <th className="px-4 font-semibold py-3 text-left">Alert ID</th>
                              <th className="px-4 font-semibold py-3 text-left">User</th>
                              <th className="px-4 font-semibold py-3 text-left">Risk Category</th>
                              <th className="px-4 font-semibold py-3 text-left">Risk Score</th>
                              <th className="px-4 font-semibold py-3 text-left">Detected On</th>
                              <th className="px-4 font-semibold py-3 text-left">Status</th>
                              <th className="px-4 font-semibold py-3 text-left">Action</th>
                         </tr>
                    </thead>

                    <tbody>
                         {alerts.map((alert) => (
                              <tr
                                   key={alert.id}
                                   className={`border-t border-gray-3600 ${alert.riskLevel === "High Risk"
                                        ? "bg-red-1300/5"
                                        : "bg-yellow-1100/5"
                                        } hover:bg-gray-50 transition`}
                              >
                                   <td className="px-4 py-4 font-medium text-gray-1900">
                                        {alert.id}
                                   </td>

                                   {/* User */}
                                   <td className="px-4 py-4">
                                        <div className="flex items-center gap-3">
                                             <div className="h-8 w-8 rounded-full bg-gray-6100 flex items-center justify-center text-xs font-medium text-blue-1300">
                                                  {alert.initials}
                                             </div>
                                             <div>
                                                  <p className="font-medium text-sm text-blue-1300">
                                                       {alert.name}
                                                  </p>
                                                  <p className="text-xs text-gray-1900">
                                                       {alert.email}
                                                  </p>
                                             </div>
                                        </div>
                                   </td>

                                   {/* Category with icon badge */}
                                   <td className="px-4 py-4">
                                        <span
                                             className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md ${categoryConfig[alert.category].style
                                                  }`}
                                        >
                                             {categoryConfig[alert.category].icon}
                                             {alert.category}
                                        </span>
                                   </td>

                                   {/* Risk Score */}
                                   <td className="px-4 py-4">
                                        <span
                                             className={`px-2 py-1 text-xs rounded-md ${riskColors[alert.riskLevel]
                                                  }`}
                                        >
                                             {alert.riskScore} {alert.riskLevel}
                                        </span>
                                   </td>

                                   {/* Date */}
                                   <td className="px-4 py-4">
                                        <div className="text-blue-1300 text-sm font-medium leading-5">{alert.date}</div>
                                        <div className="text-xs font-normal leading-4 text-gray-1900">
                                             {alert.time}
                                        </div>
                                   </td>

                                   {/* Status */}
                                   <td className="px-4 py-4">
                                        <span
                                             className={`flex items-center gap-2 ${statusColors[alert.status]
                                                  }`}
                                        >
                                             <span className="h-2.5 w-2.5 rounded-full bg-current"></span>
                                             {alert.status}
                                        </span>
                                   </td>

                                   {/* Action */}
                                   <td className="px-4 py-4">
                                        <button className="px-3 py-1.5 text-sm flex items-center gap-1.5 text-blue-1300 bg-blue-1300/5 gap-1.5 border rounded-md border-blue-1300/20 transition">
                                             Take Action <img src="/images/dots-icon.svg" alt="" />
                                        </button>
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
}