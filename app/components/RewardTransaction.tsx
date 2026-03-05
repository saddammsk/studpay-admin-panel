"use client";

import React from "react";

type Transaction = {
     id: string;
     student: string;
     event: string;
     cashback: string;
     status: "Created" | "Pending" | "Expired";
};

const transactions: Transaction[] = [
     {
          id: "TXN-78234",
          student: "Emma Schmidt",
          event: "Housing Booking",
          cashback: "€45.00",
          status: "Created",
     },
     {
          id: "TXN-78233",
          student: "Liam Mueller",
          event: "SIM Activation",
          cashback: "€10.00",
          status: "Created",
     },
     {
          id: "TXN-78232",
          student: "Sofia Weber",
          event: "Rent Payment",
          cashback: "€25.50",
          status: "Pending",
     },
     {
          id: "TXN-78231",
          student: "Noah Fischer",
          event: "Referral Bonus",
          cashback: "500 pts",
          status: "Created",
     },
     {
          id: "TXN-78230",
          student: "Mia Hoffmann",
          event: "Insurance Signup",
          cashback: "€15.00",
          status: "Pending",
     },
     {
          id: "TXN-78229",
          student: "Elias Koch",
          event: "Bundle Purchase",
          cashback: "€12.00",
          status: "Expired",
     },
     {
          id: "TXN-78228",
          student: "Anna Bauer",
          event: "Housing Booking",
          cashback: "€50.00",
          status: "Created",
     },
     {
          id: "TXN-78227",
          student: "Felix Wagner",
          event: "Rent Payment",
          cashback: "€18.75",
          status: "Pending",
     },
];

const statusStyles = {
     Created: "bg-lightgreen17/10 text-lightgreen17",
     Pending: "bg-blue-1000/10 text-blue-1000",
     Expired: "bg-gray-2100 text-gray-1200",
};

export default function RewardTransaction() {
     return (
          <div className="w-full overflow-auto">
               <table className="4xl:w-full w-[700px] text-sm">

                    {/* Header */}
                    <thead className="border-b border-gray-200 text-gray-500 uppercase text-xs">
                         <tr>
                              <th className="px-6 py-4 text-left">Transaction ID</th>
                              <th className="px-6 py-4 text-left">Student</th>
                              <th className="px-6 py-4 text-left">Trigger Event</th>
                              <th className="px-6 py-4 text-left">Cashback</th>
                              <th className="px-6 py-4 text-left">Status</th>
                         </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                         {transactions.map((item) => (
                              <tr
                                   key={item.id}
                                   className="border-t border-gray-100 hover:bg-gray-50 transition"
                              >
                                   <td className="px-6 py-4 text-gray-600">{item.id}</td>

                                   <td className="px-6 py-4 font-medium text-gray-800">
                                        {item.student}
                                   </td>

                                   <td className="px-6 py-4 text-gray-500">{item.event}</td>

                                   <td className="px-6 py-4 font-semibold text-blue-1000">
                                        {item.cashback}
                                   </td>

                                   <td className="px-6 py-4">
                                        <span
                                             className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[item.status]}`}
                                        >
                                             {item.status}
                                        </span>
                                   </td>
                              </tr>
                         ))}
                    </tbody>

               </table>
          </div>
     );
}