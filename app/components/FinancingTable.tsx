"use client";

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

const statusStyles: Record<StatusType, string> = {
     Pending: "bg-gray-2000 text-gray-2500",
     "Under Review": "bg-blue-1000 text-white",
     Approved: "bg-green-600 text-white",
     Denied: "bg-red-1300 text-white",
     "Info Requested": "border-gray-2700 border text-gray-800",
};

const riskStyles = (risk: string) => {
     const value = parseInt(risk);
     if (value < 30) return "bg-green-1600 text-white";
     if (value < 70) return "bg-gray-2000 text-gray-2500";
     return "bg-red-1300 text-white";
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
     return (
          <div className="bg-white border border-gray-2700 rounded-lg">
               <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                         <thead>
                              <tr className="border-b border-gray-2700 text-left">
                                   <th className="p-3">
                                        <input type="checkbox" className="w-4 h-4 appearance-none rounded border border-blue-1000" />
                                   </th>
                                   <th className="p-3 text-sm font-medium leading-5 text-gray-2600">Request ID</th>
                                   <th className="p-3 text-sm font-medium leading-5 text-gray-2600">Student Name</th>
                                   <th className="p-3 text-sm font-medium leading-5 text-gray-2600">Guarantor</th>
                                   <th className="p-3 text-sm font-medium leading-5 text-gray-2600">Country</th>
                                   <th className="p-3 text-sm font-medium leading-5 text-gray-2600">Amount</th>
                                   <th className="p-3 text-sm font-medium leading-5 text-gray-2600">Submitted</th>
                                   <th className="p-3 text-sm font-medium leading-5 text-gray-2600">AI Risk Score</th>
                                   <th className="p-3 text-sm font-medium leading-5 text-gray-2600">Status</th>
                                   <th className="p-3 text-sm font-medium leading-5 text-gray-2600">SLA</th>
                                   <th className="p-3 text-sm font-medium leading-5 text-gray-2600">Actions</th>
                              </tr>
                         </thead>

                         <tbody>
                              {students.map((item) => (
                                   <tr
                                        key={item.id}
                                        className="border-b border-gray-2700 hover:bg-gray-50 transition"
                                   >
                                        <td className="p-3">
                                             <input type="checkbox" className="w-4 h-4 appearance-none rounded border border-blue-1000" />
                                        </td>

                                        <td className="p-3 text-blue-1000 font-medium">
                                             {item.requestId}
                                        </td>

                                        <td className="p-3">
                                             <div className="flex items-center gap-3">
                                                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-700">
                                                       {item.initials}
                                                  </div>
                                                  <div>
                                                       <div className="font-medium text-sm text-gray-2500">
                                                            {item.name}
                                                       </div>
                                                       <div className="text-gray-2600 text-xs">
                                                            {item.university}
                                                       </div>
                                                  </div>
                                             </div>
                                        </td>

                                        <td className="p-3 text-sm text-gray-2500">{item.guarantor}</td>
                                        <td className="p-3 text-sm text-gray-2500">{item.country}</td>
                                        <td className="p-3 text-sm text-gray-2500 font-medium">{item.amount}</td>
                                        <td className="p-3 text-sm text-gray-2600">{item.submitted}</td>

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
                                                  className={`px-3 py-1 rounded-full block text-xs font-semibold ${statusStyles[item.status]
                                                       }`}
                                             >
                                                  {item.status}
                                             </span>
                                        </td>

                                        <td className="p-3 text-red-1300 text-sm font-medium">
                                             {item.sla ?? "-"}
                                        </td>

                                        <td className="p-3">
                                             <div className="flex items-center gap-3 text-gray-500">
                                                  <Image
                                                       src="/images/eyes-icon.svg"
                                                       alt=""
                                                       width={16}
                                                       height={16}
                                                  />
                                                  <Image
                                                       src="/images/user-icon.svg"
                                                       alt=""
                                                       width={16}
                                                       height={16}
                                                  />
                                                  <Image
                                                       src="/images/message-icon.svg"
                                                       alt=""
                                                       width={16}
                                                       height={16}
                                                  />
                                                  <span className="text-xl leading-none">⋯</span>
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
