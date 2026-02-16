"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type StatusType =
     | "Pending"
     | "Under Review"
     | "Approved"
     | "Denied"
     | "Info Requested";

interface Student {
     id: number;
     requestId: string;
     initials: string;
     name: string;
     university: string;
     guarantor: string;
     country: string;
     amount: string;
     submitted: string;
     risk: string;
     status: StatusType;
     sla?: string;
}

const statusStyles: Record<
     StatusType,
     { classes: string; icon?: string }
> = {
     Pending: {
          classes: "bg-gray-2000 text-gray-2500",
          icon: "/images/pending-icon.svg",
     },
     "Under Review": {
          classes: "bg-blue-1000 text-white",
          icon: "/images/caution-icon2.svg",
     },
     Approved: {
          classes: "bg-green-600 text-white",
          icon: "/images/tick-cricle3.svg",
     },
     Denied: {
          classes: "bg-red-1300 text-white",
          icon: "/images/cross-circle-white.svg",
     },
     "Info Requested": {
          classes: "border-gray-2700 border text-gray-800",
          icon: "/images/msg-icon3.svg",
     },
};

const riskStyles = (risk: string) => {
     const value = parseInt(risk);
     if (value < 30) return "bg-green-1600 text-white";
     if (value < 70) return "bg-gray-2000 text-gray-2500";
     return "bg-red-1300 text-white";
};

const slaClass = (sla?: string) => {
     if (!sla) return "text-gray-2600";
     if (parseInt(sla) <= 6) return "text-red-1300";
     return "text-yellow-1400";
};

const students: Student[] = [
     {
          id: 1,
          requestId: "AVI-2024-0847",
          initials: "SJ",
          name: "Sarah Johnson",
          university: "University of Toronto",
          guarantor: "David Johnson",
          country: "Canada",
          amount: "$45,000",
          submitted: "1/15/2024",
          risk: "23%",
          status: "Pending",
          sla: "18h left",
     },
     {
          id: 2,
          requestId: "AVI-2024-0848",
          initials: "PD",
          name: "Pierre Dubois",
          university: "Sorbonne University",
          guarantor: "Marie Dubois",
          country: "France",
          amount: "$38,500",
          submitted: "1/15/2024",
          risk: "67%",
          status: "Under Review",
          sla: "4h left",
     },
     {
          id: 3,
          requestId: "AVI-2024-0849",
          initials: "JW",
          name: "James Wilson",
          university: "Oxford University",
          guarantor: "Robert Wilson",
          country: "United Kingdom",
          amount: "$52,000",
          submitted: "1/14/2024",
          risk: "15%",
          status: "Approved",
     },
     {
          id: 4,
          requestId: "AVI-2024-0850",
          initials: "ES",
          name: "Emma Schmidt",
          university: "Technical University of Munich",
          guarantor: "Klaus Schmidt",
          country: "Germany",
          amount: "$41,200",
          submitted: "1/14/2024",
          risk: "89%",
          status: "Denied",
     },
     {
          id: 5,
          requestId: "AVI-2024-0851",
          initials: "LO",
          name: "Liam O'Connor",
          university: "University of Sydney",
          guarantor: "Sean O'Connor",
          country: "Australia",
          amount: "$47,800",
          submitted: "1/13/2024",
          risk: "34%",
          status: "Info Requested",
          sla: "12h left",
     },
];

export default function FinancingTable() {
     const [selectedRows, setSelectedRows] = useState<number[]>([]);

     const isAllSelected = selectedRows.length === students.length;

     const toggleAll = () => {
          setSelectedRows(
               isAllSelected ? [] : students.map((s) => s.id)
          );
     };

     const toggleRow = (id: number) => {
          setSelectedRows((prev) =>
               prev.includes(id)
                    ? prev.filter((rowId) => rowId !== id)
                    : [...prev, id]
          );
     };

     return (
          <div className="bg-white border border-gray-2700 rounded-lg">
               <div className="overflow-x-auto">
                    <table className="4xl:w-full w-[1199px] text-sm">
                         <thead>
                              <tr className="border-b border-gray-2700 text-left">
                                   <th className="p-3">
                                        <input
                                             type="checkbox"
                                             checked={isAllSelected}
                                             onChange={toggleAll}
                                             className="w-4 h-4 appearance-none rounded border border-blue-1000 checked:bg-blue-1000"
                                        />
                                   </th>
                                   <th className="p-3 text-gray-2600">Request ID</th>
                                   <th className="p-3 text-gray-2600">Student Name</th>
                                   <th className="p-3 text-gray-2600">Guarantor</th>
                                   <th className="p-3 text-gray-2600">Country</th>
                                   <th className="p-3 text-gray-2600">Amount</th>
                                   <th className="p-3 text-gray-2600">Submitted</th>
                                   <th className="p-3 text-gray-2600">AI Risk Score</th>
                                   <th className="p-3 text-gray-2600">Status</th>
                                   <th className="p-3 text-gray-2600">SLA</th>
                                   <th className="p-3 text-gray-2600">Actions</th>
                              </tr>
                         </thead>

                         <tbody>
                              {students.map((item) => (
                                   <tr
                                        key={item.id}
                                        className="border-b border-gray-2700 hover:bg-gray-50"
                                   >
                                        <td className="p-3">
                                             <input
                                                  type="checkbox"
                                                  checked={selectedRows.includes(item.id)}
                                                  onChange={() => toggleRow(item.id)}
                                                  className="w-4 h-4 appearance-none rounded border border-blue-1000 checked:bg-blue-1000"
                                             />
                                        </td>

                                        <td className="p-3 text-blue-1000 font-medium">
                                             {item.requestId}
                                        </td>

                                        <td className="p-3">
                                             <div className="flex items-center gap-3">
                                                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold">
                                                       {item.initials}
                                                  </div>
                                                  <div>
                                                       <div className="text-sm font-medium text-gray-2500">
                                                            {item.name}
                                                       </div>
                                                       <div className="text-xs text-gray-2600">
                                                            {item.university}
                                                       </div>
                                                  </div>
                                             </div>
                                        </td>

                                        <td className="p-3 text-gray-2500">{item.guarantor}</td>
                                        <td className="p-3 text-gray-2500">{item.country}</td>
                                        <td className="p-3 font-medium">{item.amount}</td>
                                        <td className="p-3 text-gray-2600">{item.submitted}</td>

                                        <td className="p-3">
                                             <span
                                                  className={`px-2 py-1 rounded-full text-xs font-semibold ${riskStyles(
                                                       item.risk
                                                  )}`}
                                             >
                                                  {item.risk}
                                             </span>
                                        </td>

                                        <td className="p-3">
                                             <span
                                                  className={`px-3 py-1 rounded-full inline-flex items-center gap-1.5 text-xs font-semibold ${statusStyles[item.status].classes}`}
                                             >
                                                  {statusStyles[item.status].icon && (
                                                       <Image
                                                            src={statusStyles[item.status].icon!}
                                                            alt=""
                                                            width={12}
                                                            height={12}
                                                       />
                                                  )}
                                                  {item.status}
                                             </span>
                                        </td>

                                        <td className={`p-3 text-sm font-medium ${slaClass(item.sla)}`}>
                                             {item.sla ?? "-"}
                                        </td>

                                        <td className="p-3">
                                             <div className="flex items-center  gap-3">
                                                  <Image src="/images/eyes-icon.svg" alt="" width={16} height={16} />
                                                  <Image src="/images/user-icon.svg" alt="" width={16} height={16} />
                                                  <Image src="/images/user-tick-icon.svg" alt="" width={16} height={16} />
                                                  <span className="text-xl">⋯</span>
                                             </div>
                                        </td>
                                   </tr>
                              ))}
                         </tbody>
                    </table>
               </div>
          </div>
     );
}
