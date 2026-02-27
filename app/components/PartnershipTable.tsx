"use client";
import Image from "next/image";
import Link from "next/link";

type Status = "Verified" | "Pending" | "Inactive";

interface Partner {
     id: string;
     name: string;
     logo: string;
     category: string;
     country: string;
     activeStudents: number;
     conversion: string;
     commission: string;
     status: Status;
}

const statusConfig: Record<Status, { classes: string }> = {
     Verified: {
          classes: "bg-green-1500/10 border-green-1500/20 text-green-1500",
     },
     Pending: {
          classes: "bg-yellow-1300/10 border-yellow-1300/20 text-orange-2000",
     },
     Inactive: {
          classes: "bg-gray1700 border-gray-3600 text-gray-1900",
     },
};

const partners: Partner[] = [
     { id: "P-001", name: "TU Berlin", logo: "/images/hat-icon.svg", category: "Education", country: "Germany", activeStudents: 847, conversion: "68.5%", commission: "15%", status: "Verified" },
     { id: "P-002", name: "RWTH Aachen University", logo: "/images/hat-icon.svg", category: "Education", country: "Germany", activeStudents: 623, conversion: "72.3%", commission: "18%", status: "Verified" },
     { id: "P-003", name: "StudySmarter GmbH", logo: "/images/hat-icon.svg", category: "Education", country: "Germany", activeStudents: 412, conversion: "54.2%", commission: "12%", status: "Verified" },
     { id: "P-004", name: "HousingAnywhere", logo: "/images/calculator-icon.svg", category: "Housing", country: "Netherlands", activeStudents: 356, conversion: "45.8%", commission: "10%", status: "Verified" },
     { id: "P-005", name: "Deutsche Bank Student", logo: "/images/bank-icon.svg", category: "Finance", country: "Germany", activeStudents: 289, conversion: "62.1%", commission: "8%", status: "Pending" },
     { id: "P-006", name: "LMU Munich", logo: "/images/hat-icon.svg", category: "Education", country: "Germany", activeStudents: 534, conversion: "71.2%", commission: "16%", status: "Verified" },
     { id: "P-007", name: "Uniplaces", logo: "/images/calculator-icon.svg", category: "Housing", country: "Portugal", activeStudents: 198, conversion: "38.4%", commission: "9%", status: "Inactive" },
     { id: "P-008", name: "N26 Student", logo: "/images/bank-icon.svg", category: "Finance", country: "Germany", activeStudents: 445, conversion: "58.9%", commission: "7%", status: "Verified" },
     { id: "P-009", name: "Heidelberg University", logo: "/images/hat-icon.svg", category: "Education", country: "Germany", activeStudents: 378, conversion: "65.7%", commission: "14%", status: "Verified" },
     { id: "P-010", name: "Spotahome", logo: "/images/calculator-icon.svg", category: "Housing", country: "Spain", activeStudents: 167, conversion: "42.1%", commission: "11%", status: "Pending" },
];

export default function PartnerTable() {
     return (
          <div className=" border border-gray-1000 overflow-x-auto">
               <table className="w-full">
                    <thead>
                         <tr className=" border-b border-gray-5600">
                              <th className="px-4 py-3 text-left text-sm text-black-1600">Partner ID</th>
                              <th className="px-4 py-3 text-left text-sm text-black-1600">Partner Name</th>
                              <th className="px-4 py-3 text-left text-sm text-black-1600">Category</th>
                              <th className="px-4 py-3 text-left text-sm text-black-1600">Country</th>
                              <th className="px-4 py-3 text-left text-sm text-black-1600">Active Students</th>
                              <th className="px-4 py-3 text-left text-sm text-black-1600">Conversion %</th>
                              <th className="px-4 py-3 text-left text-sm text-black-1600">Commission</th>
                              <th className="px-4 py-3 text-left text-sm text-black-1600">Status</th>
                         </tr>
                    </thead>

                    <tbody>
                         {partners.map((item) => (
                              <tr key={item.id} className="border-b border-gray-3600 ">
                                   <td className="px-4 py-6 text-sm text-gray-1900">{item.id}</td>

                                   <td className="px-4 py-6 text-sm">
                                        <div className="flex items-center gap-3 text-black-1600">
                                             <Image
                                                  src={item.logo}
                                                  alt={item.name}
                                                  width={16}
                                                  height={16}
                                                  className="rounded-full object-cover"
                                             />
                                             <span>{item.name}</span>
                                        </div>
                                   </td>

                                   <td className="px-4 py-6 text-sm text-gray-1900">
                                        <span className="py-0.5 px-2.5 border border-gray-3600 rounded-full inline-block">{item.category}</span>
                                   </td>
                                   <td className="px-4 py-6 text-sm text-gray-1900">{item.country}</td>
                                   <td className="px-4 py-6 text-sm text-black-1600">{item.activeStudents}</td>

                                   <td className={`px-4 py-6 text-sm font-medium ${parseFloat(item.conversion) > 60
                                        ? "text-green-1500"
                                        : parseFloat(item.conversion) > 50
                                             ? "text-orange-2000"
                                             : "text-gray-1900"
                                        }`}>
                                        {item.conversion}
                                   </td>

                                   <td className="px-4 py-6 text-sm">{item.commission}</td>

                                   <td className="px-4 py-6">
                                        <span className={`px-3 h-5.5 rounded-full text-xs border inline-flex items-center justify-center ${statusConfig[item.status].classes}`}>
                                             {item.status}
                                        </span>
                                   </td>
                                   <td className="px-4 py-6">
                                        <img src="/images/dots-icon2.svg" alt="" />
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
}