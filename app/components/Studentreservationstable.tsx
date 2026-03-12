"use client";

import { MoreHorizontal, User, Home, CreditCard, Calendar } from "lucide-react";

type PipelineStatus =
     | "Completed"
     | "Move-in Scheduled"
     | "Contract Signed"
     | "Documents Pending"
     | "Fee Paid (€299)";

interface Reservation {
     id: string;
     student: string;
     property: string;
     landlord: string;
     bookingFee: string;
     status: PipelineStatus;
     moveInDate: string;
}

const reservations: Reservation[] = [
     { id: "RES-001", student: "Emma Johnson", property: "Modern Studio Apartment", landlord: "Hans Müller", bookingFee: "€299", status: "Completed", moveInDate: "01 Feb 2024" },
     { id: "RES-002", student: "Liam Chen", property: "Cozy 2BR near Campus", landlord: "Anna Schmidt", bookingFee: "€299", status: "Move-in Scheduled", moveInDate: "15 Feb 2024" },
     { id: "RES-003", student: "Sofia Garcia", property: "Bright Studio near TU", landlord: "Thomas Braun", bookingFee: "€299", status: "Contract Signed", moveInDate: "20 Feb 2024" },
     { id: "RES-004", student: "Noah Williams", property: "Minimalist Loft Downtown", landlord: "Klaus Richter", bookingFee: "€299", status: "Documents Pending", moveInDate: "01 Mar 2024" },
     { id: "RES-005", student: "Mia Anderson", property: "Garden View Apartment", landlord: "Sabine Wolf", bookingFee: "€299", status: "Fee Paid (€299)", moveInDate: "05 Mar 2024" },
     { id: "RES-006", student: "Oliver Brown", property: "Modern 2BR with Balcony", landlord: "Peter Schneider", bookingFee: "€299", status: "Fee Paid (€299)", moveInDate: "10 Mar 2024" },
];

const pipelineConfig: Record<PipelineStatus, { steps: number; filled: number; labelClass: string }> = {
     "Completed": { steps: 5, filled: 5, labelClass: "bg-green-1600 text-white border-transparent" },
     "Move-in Scheduled": { steps: 5, filled: 4, labelClass: "bg-gray-1600 text-green-1600 border-green-1600/20" },
     "Contract Signed": { steps: 5, filled: 3, labelClass: "bg-blue-3000/10 text-blue-3000 border-blue-3000/20" },
     "Documents Pending": { steps: 5, filled: 2, labelClass: "bg-gray-1600 text-brown1300 border-yellow-1100/20" },
     "Fee Paid (€299)": { steps: 5, filled: 1, labelClass: "bg-gray-1600 text-skyblue23 border-skyblue23/20" },
};

const PipelineIndicator = ({ status }: { status: PipelineStatus }) => {
     const { steps, filled, labelClass } = pipelineConfig[status];
     return (
          <div className="flex items-center gap-2">
               <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold border whitespace-nowrap ${labelClass}`}>
                    {status}
               </span>
               <div className="flex items-center gap-0.5">
                    {Array.from({ length: steps }).map((_, i) => (
                         <span
                              key={i}
                              className={`block w-4 h-1.5 rounded-full transition-colors ${i < filled ? "bg-blue-500" : "bg-slate-200"}`}
                         />
                    ))}
               </div>
          </div>
     );
};

export default function StudentReservationsTable() {
     return (
          <div className="bg-white rounded-xl border border-gray-1000 shadow-sm overflow-hidden">
               <div className="overflow-x-auto">
                    <table className="w-full min-w-[1300px]">
                         <thead>
                              <tr className="border-b border-slate-100 bg-gray-1600">
                                   {["Reservation ID", "Student", "Property", "Landlord", "Booking Fee", "Pipeline Status", "Move-in Date", ""].map((h) => (
                                        <th key={h} className="text-left text-sm font-semibold text-blue-1300 px-4 py-3 whitespace-nowrap">
                                             {h}
                                        </th>
                                   ))}
                              </tr>
                         </thead>
                         <tbody>
                              {reservations.map((row) => (
                                   <tr key={row.id} className="border-b border-gray-1000 last:border-0 hover:bg-slate-50/50 transition-colors">
                                        <td className="px-4 py-4">
                                             <span className="text-sm font-medium text-gray-1200 font-mono">{row.id}</span>
                                        </td>
                                        <td className="px-5 py-4">
                                             <div className="flex items-center gap-2">
                                                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-1600">
                                                       <User size={14} className="text-gray-1200 flex-shrink-0" />
                                                  </div>
                                                  <span className="text-sm font-semibold text-blue-1300">{row.student}</span>
                                             </div>
                                        </td>
                                        <td className="px-5 py-4">
                                             <div className="flex items-center gap-2">
                                                  <Home size={14} className="text-gray-1200 flex-shrink-0" />
                                                  <span className="text-sm text-blue-1300">{row.property}</span>
                                             </div>
                                        </td>
                                        <td className="px-5 py-4">
                                             <span className="text-sm text-gray-1200">{row.landlord}</span>
                                        </td>
                                        <td className="px-5 py-4">
                                             <div className="flex items-center gap-1.5">
                                                  <CreditCard size={14} className="text-green-1600 flex-shrink-0" />
                                                  <span className="text-sm font-semibold text-green-1600">{row.bookingFee}</span>
                                             </div>
                                        </td>
                                        <td className="px-5 py-4">
                                             <PipelineIndicator status={row.status} />
                                        </td>
                                        <td className="px-5 py-4">
                                             <div className="flex items-center gap-1.5">
                                                  <Calendar size={13} className="text-gray-1200 flex-shrink-0" />
                                                  <span className="text-sm text-gray-1200">{row.moveInDate}</span>
                                             </div>
                                        </td>
                                        <td className="px-5 py-4">
                                             <button className="text-slate-400 hover:text-slate-700 transition-colors">
                                                  <MoreHorizontal size={16} />
                                             </button>
                                        </td>
                                   </tr>
                              ))}
                         </tbody>
                    </table>
               </div>
          </div>
     );
}