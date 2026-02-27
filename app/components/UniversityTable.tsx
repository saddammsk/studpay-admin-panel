"use client";
import Image from "next/image";

interface UniversityData {
     id: number;
     university: string;
     students: string;
     ltv: string;
     cac: string;
     ratio: string;
     payback: string;
     trend: "up" | "down" | "neutral";
}

const universities: UniversityData[] = [
     {
          id: 1,
          university: "TU Munich",
          students: "12,450",
          ltv: "€847",
          cac: "€124",
          ratio: "6.83x",
          payback: "2.1 mo",
          trend: "up",
     },
     {
          id: 2,
          university: "Freie Universität Berlin",
          students: "9,820",
          ltv: "€792",
          cac: "€142",
          ratio: "5.58x",
          payback: "2.5 mo",
          trend: "up",
     },
     {
          id: 3,
          university: "University of Vienna",
          students: "7,650",
          ltv: "€681",
          cac: "€156",
          ratio: "4.37x",
          payback: "3.2 mo",
          trend: "neutral",
     },
     {
          id: 4,
          university: "Sciences Po Paris",
          students: "5,430",
          ltv: "€923",
          cac: "€198",
          ratio: "4.66x",
          payback: "2.8 mo",
          trend: "up",
     },
     {
          id: 5,
          university: "University of Amsterdam",
          students: "4,280",
          ltv: "€556",
          cac: "€167",
          ratio: "3.33x",
          payback: "4.1 mo",
          trend: "down",
     },
];

export default function UniversityTable() {
     return (
          <div className="bg-white  overflow-x-auto">
               <table className="w-full">
                    <thead>
                         <tr className="border-b border-gray-1000">
                              <th className="px-4 py-3 text-left text-gray-1900 font-semibold text-xs uppercase">
                                   University Segment
                              </th>
                              <th className="px-4 py-3 text-left text-gray-1900 font-semibold text-xs uppercase">
                                   Students
                              </th>
                              <th className="px-4 py-3 text-left text-gray-1900 font-semibold text-xs uppercase">
                                   LTV
                              </th>
                              <th className="px-4 py-3 text-left text-gray-1900 font-semibold text-xs uppercase">
                                   CAC
                              </th>
                              <th className="px-4 py-3 text-left text-gray-1900 font-semibold text-xs uppercase">
                                   LTV:CAC Ratio
                              </th>
                              <th className="px-4 py-3 text-left text-gray-1900 font-semibold text-xs uppercase">
                                   Payback
                              </th>
                              <th className="px-4 py-3 text-left text-gray-1900 font-semibold text-xs uppercase">
                                   Trend
                              </th>
                         </tr>
                    </thead>

                    <tbody>
                         {universities.map((item) => (
                              <tr
                                   key={item.id}
                                   className="border-b border-gray-1000"
                              >
                                   <td className="px-4 py-6 text-black-1600  font-normal text-sm leading-5">
                                        {item.university}
                                   </td>

                                   <td className="px-4 py-6 text-gray-1900 font-normal text-sm leading-5">
                                        {item.students}
                                   </td>

                                   <td className="px-4 py-6 text-green-2600  font-semibold text-sm leading-5">
                                        {item.ltv}
                                   </td>

                                   <td className="px-4 py-6 text-red-1300 font-semibold text-sm leading-5">
                                        {item.cac}
                                   </td>

                                   <td className="px-4 py-6">
                                        <span
                                             className={`px-2.5 h-6 font-semibold rounded-full text-sm inline-flex items-center justify-center ${parseFloat(item.ratio) >= 5
                                                  ? "bg-green-3100 text-green-3000"
                                                  : "bg-yellow-2000 text-yellow-2100"
                                                  }`}
                                        >
                                             {item.ratio}
                                        </span>
                                   </td>

                                   <td className="px-4 py-6 text-gray-1900 font-neulis-sans font-normal text-sm leading-5">
                                        {item.payback}
                                   </td>

                                   <td className="px-4 py-6">
                                        {item.trend === "up" && (
                                             <Image
                                                  src="/images/trend-up.svg"
                                                  width={16}
                                                  height={16}
                                                  alt="trend up"
                                             />
                                        )}

                                        {item.trend === "down" && (
                                             <Image
                                                  src="/images/trend-down.svg"
                                                  width={16}
                                                  height={16}
                                                  alt="trend down"
                                             />
                                        )}

                                        {item.trend === "neutral" && (
                                             <Image
                                                  src="/images/trend-neutral.svg"
                                                  width={16}
                                                  height={16}
                                                  alt="trend neutral"
                                             />
                                        )}
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
}