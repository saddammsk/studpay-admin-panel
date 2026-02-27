"use client";

import { useState } from "react";
import Image from "next/image";
import ToggleSwitch from "./ui/ToggleSwitch";

interface Student {
     id: string;
     name: string;
     country: string;
     avatar: string;
     flag: string;
     trust: number;
     contacts: number;
     status: "Verified" | "Pending" | "Unverified";
     safeMode: boolean;
}

const students: Student[] = [
     {
          id: "1",
          name: "Amara Diallo",
          country: "Senegal",
          avatar: "/images/avatar-1.png",
          flag: "/images/🇸🇳.png",
          trust: 92,
          contacts: 3,
          status: "Verified",
          safeMode: true,
     },
     {
          id: "2",
          name: "Yuki Tanaka",
          country: "Japan",
          avatar: "/images/avatar2.png",
          flag: "/images/🇯🇵.png",
          trust: 78,
          contacts: 2,
          status: "Verified",
          safeMode: true,
     },
     {
          id: "3",
          name: "Carlos Mendes",
          country: "Brazil",
          avatar: "/images/avatar3.png",
          flag: "/images/🇧🇷.png",
          trust: 65,
          contacts: 1,
          status: "Pending",
          safeMode: true,
     },
     {
          id: "4",
          name: "Fatima Al-Hassan",
          country: "Morocco",
          avatar: "/images/avatar-1.png",
          flag: "/images/🇲🇦.png",
          trust: 88,
          contacts: 3,
          status: "Verified",
          safeMode: false,
     },
     {
          id: "5",
          name: "Liam O’Brien",
          country: "Ireland",
          avatar: "/images/avatar2.png",
          flag: "/images/🇮🇪.png",
          trust: 45,
          contacts: 0,
          status: "Unverified",
          safeMode: true,
     },
     {
          id: "6",
          name: "Sofia Petrov",
          country: "Bulgaria",
          avatar: "/images/avatar3.png",
          flag: "/images/🇧🇬.png",
          trust: 81,
          contacts: 2,
          status: "Verified",
          safeMode: true,
     },
];

export default function SafetyList() {
     const [switchStates, setSwitchStates] = useState<Record<string, boolean>>(
          students.reduce((acc, student) => {
               acc[student.id] = student.safeMode;
               return acc;
          }, {} as Record<string, boolean>)
     );

     const getTrustColor = (trust: number) => {
          if (trust >= 80) return "bg-green-3400 text-green-3300";
          if (trust >= 60) return "bg-yellow-2400 text-yellow-2300";
          return "bg-gray-3500 text-red-2200";
     };

     const getStatusStyle = (status: string) => {
          switch (status) {
               case "Verified":
                    return "bg-green-100 text-green-600";
               case "Pending":
                    return "bg-yellow-100 text-yellow-600";
               case "Unverified":
                    return "bg-green-3400 text-gray-2300";
          }
     };

     return (
          <div className=" overflow-x-auto">
               <table className="w-full min-w-[900px]">
                    <thead>
                         <tr className="border-b border-gray-5600 bg-gray-5800/80">
                              <th className="px-4 leading-4 font-normal py-2.5 text-left text-xs uppercase text-gray-2300">
                                   Student
                              </th>
                              <th className="px-4 leading-4 font-normal py-2.5 text-left text-xs uppercase text-gray-2300">
                                   Trust
                              </th>
                              <th className="px-4 leading-4 font-normal py-2.5 text-left text-xs uppercase text-gray-2300">
                                   Contacts
                              </th>
                              <th className="px-4 leading-4 font-normal py-2.5 text-left text-xs uppercase text-gray-2300">
                                   Status
                              </th>
                              <th className="px-4 leading-4 font-normal py-2.5 text-left text-xs uppercase text-gray-2300">
                                   SafeMode
                              </th>
                         </tr>
                    </thead>

                    <tbody>
                         {students.map((student) => (
                              <tr key={student.id} className="border-b border-gray-5600 hover:bg-gray-50">
                                   {/* Student */}
                                   <td className="px-4 py-4">
                                        <div className="flex items-center gap-3">
                                             <Image
                                                  src={student.avatar}
                                                  alt={student.name}
                                                  width={40}
                                                  height={40}
                                                  className="rounded-full"
                                             />
                                             <div>
                                                  <p className="text-sm font-medium text-black-2900">
                                                       {student.name}
                                                  </p>
                                                  <div className="flex items-center gap-1 mt-1">
                                                       <Image
                                                            src={student.flag}
                                                            alt={student.country}
                                                            width={14}
                                                            height={14}
                                                       />
                                                       <span className="text-xs text-gray-2300">
                                                            {student.country}
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                   </td>

                                   {/* Trust */}
                                   <td className="px-4 py-4">
                                        <span
                                             className={`px-3 py-1 text-xs font-bold rounded-md ${getTrustColor(
                                                  student.trust
                                             )}`}
                                        >
                                             {student.trust}%
                                        </span>
                                   </td>

                                   {/* Contacts */}
                                   <td className="px-4 py-4 text-xs text-black-2900 font-bold">
                                        {student.contacts}
                                   </td>

                                   {/* Status */}
                                   <td className="px-4 py-4">
                                        <span
                                             className={`px-3 py-1 text-xs font-medium rounded-md ${getStatusStyle(
                                                  student.status
                                             )}`}
                                        >
                                             ● {student.status}
                                        </span>
                                   </td>

                                   {/* SafeMode Switch */}
                                   <td className="px-4 py-4">
                                        <ToggleSwitch
                                             enabled={switchStates[student.id]}
                                             setEnabled={(value: boolean) =>
                                                  setSwitchStates((prev) => ({
                                                       ...prev,
                                                       [student.id]: value,
                                                  }))
                                             }
                                        />
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
}