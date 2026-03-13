"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/app/components/Modal";

import {
     Eye,
     FileText,
     ChevronLeft,
     ChevronRight,
     Clock,
     TimerIcon,
     User,
} from "lucide-react";

type Severity = "HIGH" | "CRIT" | "MED" | "LOW";

interface Change {
     from?: string;
     to?: string;
}

interface AuditItem {
     time: string;
     date: string;
     user: string;
     role: string;
     action: string;
     module: string;
     severity: Severity;
     changes?: Change;
     ip: string;
     location: string;
}

const severityStyles: Record<Severity, string> = {
     HIGH: "bg-red-2500/20 border-red-2500/30 text-red-2500",
     CRIT: "bg-red-2500/20 border-red-2500/30 text-red-2500",
     MED: "bg-yellow-1100/20 border-yellow-1100/30 text-yellow-1100",
     LOW: "bg-green-3700/20 border-green-3700/30 text-green-3700",
};

const moduleStyles: Record<string, string> = {
     Payments: "bg-green-3700/20 border-green-3700/30 text-green-3700",
     Users: "bg-gray-6500/20 border-gray-6500/30 text-gray-6500",
     Housing: "bg-gray-6500/20 border-gray-6500/30 text-gray-6500",
     Guarantees: "bg-gray-6500/20 border-gray-6500/30 text-gray-6500",
     Crypto: "bg-yellow-1500/20 border-yellow-1500/30 text-yellow-1500",
     Rewards: "bg-green-3700/20 border-green-3700/30 text-green-3700",
     System: "bg-gray-3700 border-green-3700/30 text-black-2300",
};

const data: AuditItem[] = [
     {
          time: "14:32:18",
          date: "2026-08-05",
          user: "Sarah Chen",
          role: "Finance Manager",
          action: "Approved Payout for BK-2024-001",
          module: "Payments",
          severity: "HIGH",
          changes: { from: "Pending", to: "Approved" },
          ip: "192.168.1.45",
          location: "London, UK",
     },
     {
          time: "14:28:45",
          date: "2026-08-05",
          user: "Ahmed Hassan",
          role: "Security Lead",
          action: "Blocked User Account - Policy Violation",
          module: "Users",
          severity: "CRIT",
          changes: { from: "Active", to: "Blocked" },
          ip: "10.0.0.23",
          location: "Dubai, UAE",
     },
     {
          time: "14:15:33",
          date: "2026-08-05",
          user: "Maria Rodriguez",
          role: "System Admin",
          action: "Updated Housing Listing HSG-5521",
          module: "Housing",
          severity: "MED",
          changes: { from: "€1,200/mo", to: "€1,350/mo" },
          ip: "172.16.0.88",
          location: "Madrid, Spain",
     },
     {
          time: "14:02:11",
          date: "2026-08-05",
          user: "James Wilson",
          role: "Compliance Officer",
          action: "Viewed Guarantee Contract GRT-7892",
          module: "Guarantees",
          severity: "LOW",
          ip: "192.168.2.100",
          location: "New York, USA",
     },
     {
          time: "13:45:02",
          date: "2026-08-05",
          user: "Sarah Chen",
          role: "Finance Manager",
          action: "Released Crypto Payout 0.5 BTC",
          module: "Crypto",
          severity: "CRIT",
          changes: { from: "Locked", to: "Released" },
          ip: "192.168.1.45",
          location: "London, UK",
     },
     {
          time: "13:32:55",
          date: "2026-08-05",
          user: "Priya Sharma",
          role: "Operations",
          action: "Added Reward Points - 500 pts",
          module: "Rewards",
          severity: "MED",
          changes: { from: "1,200 pts", to: "1,700 pts" },
          ip: "10.10.0.55",
          location: "Mumbai, India",
     },
     {
          time: "13:18:44",
          date: "2026-08-05",
          user: "Ahmed Hassan",
          role: "Security Lead",
          action: "Modified RLS Policy on users_table",
          module: "System",
          severity: "CRIT",
          changes: { from: "Policy v1.2", to: "Policy v1.3" },
          ip: "10.0.0.23",
          location: "Dubai, UAE",
     },
     {
          time: "12:55:21",
          date: "2026-08-05",
          user: "James Wilson",
          role: "Compliance Officer",
          action: "Exported Audit Report - Q1 2026",
          module: "System",
          severity: "LOW",
          ip: "192.168.2.100",
          location: "New York, USA",
     },
];

function getInitials(name: string) {
     return name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase();
}

export default function AuditTable() {
     const [isOpen, setIsOpen] = useState(false); /**** MODAL ***/
     return (
          <>
               <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                         <table className="min-w-full 4xl:w-full w-400 text-sm">
                              <thead className="bg-gray-3700/30 text-gray-6400 uppercase text-[10px] font-bold">
                                   <tr>
                                        <th className="px-6 py-4 text-left"><div className="flex items-center gap-1.5"> <Clock size={16} className="text-gray-400" /> Timestamp</div></th>
                                        <th className="px-6 py-4 text-left"><div className="flex items-center gap-1.5"> <User size={16} className="text-gray-400" /> Admin User</div></th>
                                        <th className="px-6 py-4 text-left">Action</th>
                                        <th className="px-6 py-4 text-left">Module</th>
                                        <th className="px-6 py-4 text-left">Severity</th>
                                        <th className="px-6 py-4 text-left">Changes</th>
                                        <th className="px-6 py-4 text-left">IP / Location</th>
                                        <th className="px-6 py-4 text-left">Actions</th>
                                   </tr>
                              </thead>

                              <tbody>
                                   {data.map((item, index) => (
                                        <tr
                                             key={index}
                                             className={`
                  border-t border-gray-1000 hover:bg-gray-100 transition
                  ${item.severity === "CRIT" ? "bg-transparent" : ""}
                  ${index % 2 !== 0 && item.severity !== "CRIT" ? "bg-red-2500/5" : ""}
                `}
                                        >
                                             {/* Timestamp */}
                                             <td className="px-6 py-4">
                                                  <div className="flex items-center text-xs leading-4 font-normal text-black-2000">
                                                       {item.time}
                                                  </div>
                                                  <div className="text-[10px] font-normal text-gray-6400 mt-1">
                                                       {item.date}
                                                  </div>
                                             </td>

                                             {/* User */}
                                             <td className="px-6 py-4">
                                                  <div className="flex items-center gap-3">
                                                       <div className="h-7 w-7 rounded-full bg-green-3700/10 text-green-3700 flex items-center justify-center text-[10px] font-bold">
                                                            {getInitials(item.user)}
                                                       </div>
                                                       <div>
                                                            <div className="font-medium text-xs leading-4 text-black-2000">
                                                                 {item.user}
                                                            </div>
                                                            <div className="text-[10px] font-normal leading-3.75 text-ggray-6400">
                                                                 {item.role}
                                                            </div>
                                                       </div>
                                                  </div>
                                             </td>

                                             <td className="px-6 py-4 text-xs leading-4 text-black-2000">{item.action}</td>

                                             <td className="px-6 py-4">
                                                  <span className={`px-2.5 py-1 rounded-md text-[10px] border font-bold ${moduleStyles[item.module]}`}>
                                                       {item.module}
                                                  </span>
                                             </td>

                                             <td className="px-6 py-4">
                                                  <span className={`px-2.5 py-1 rounded-md text-[10px] border font-bold ${severityStyles[item.severity]}`}>
                                                       {item.severity}
                                                  </span>
                                             </td>

                                             <td className="px-6 py-4 text-[10px]">
                                                  {item.changes?.from && item.changes?.to ? (
                                                       <div className="flex items-center gap-2">
                                                            <span className="line-through text-gray-6400">
                                                                 {item.changes.from}
                                                            </span>

                                                            <span className="text-gray-6400">→</span>

                                                            <span className="text-green-3700 ">
                                                                 {item.changes.to}
                                                            </span>
                                                       </div>
                                                  ) : (
                                                       <span className="text-gray-6400">—</span>
                                                  )}
                                             </td>

                                             <td className="px-6 py-4 text-black-2000 text-[10px]">
                                                  <div>{item.ip}</div>
                                                  <div className="text-xs text-gray-6400">
                                                       {item.location}
                                                  </div>
                                             </td>

                                             <td className="px-6 py-4">
                                                  <div className="flex gap-3">
                                                       <button onClick={() => setIsOpen(true)} className="text-gray-500 hover:text-black">
                                                            <Eye size={18} />
                                                       </button>
                                                       <button className="text-gray-500 hover:text-black">
                                                            <FileText size={18} />
                                                       </button>
                                                  </div>
                                             </td>
                                        </tr>
                                   ))}
                              </tbody>
                         </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between px-6 py-4 border-gray-1000 border-t">
                         <span className="text-xs text-gray-6400">Page 1 of 285</span>
                         <div className="flex items-center gap-1">
                              <button className="w-7 h-7 flex items-center border-gray-1000 text-xs justify-center bg-gray-1500 border rounded hover:bg-gray-100">
                                   <ChevronLeft size={16} />
                              </button>
                              <button className="w-7 h-7 flex items-center border-gray-1000 text-xs justify-center  bg-green-3700 text-white rounded">1</button>
                              <button className="w-7 h-7 flex items-center border-gray-1000 text-xs justify-center bg-gray-1500 border rounded hover:bg-gray-100">2</button>
                              <button className="w-7 h-7 flex items-center border-gray-1000 text-xs justify-center bg-gray-1500 border rounded hover:bg-gray-100">3</button>
                              <button className="w-7 h-7 flex items-center border-gray-1000 text-xs justify-center bg-gray-1500 border rounded hover:bg-gray-100">
                                   <ChevronRight size={16} />
                              </button>
                         </div>
                    </div>
               </div>

               {/****** Activity Log Modal *******/}
               <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    panelClassName="max-w-[672px] border-0 rounded-lg! bg-white md:h-auto h-full md:overflow-hidden overflow-auto relative sm:p-6 p-4"
               >

                    <div className='flex items-center gap-3'>
                         <span className="bg-green-3700/10 rounded-lg w-9 h-9 flex items-center justify-center">
                              <Image src="/icons/audit-icon.svg" width={16} height={16} alt="" />
                         </span>
                         <div className="">
                              <h4 className='text-blue-1300 font-inter font-bold text-lg leading-7'>Audit Log Details </h4>
                              <p className='text-gray-6400 font-inter font-bold text-xs leading-4 tracking-[-0.45px]'> LOG-2026-020514321845 </p>
                         </div>
                    </div>
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-3 mt-6">
                         <div className="bg-gray-3700/30 border border-solid border-gray-7700 rounded-lg p-3">
                              <h4 className='text-gray-6400 flex items-center gap-1.5 font-inter font-normal uppercase text-[10px] leading-4'>
                                   <Image src="/images/clock-gray.svg" width={12} height={12} alt="" />
                                   Timestamp
                              </h4>
                              <p className='text-black-2000 font-JetBrainsMono font-normal text-xs leading-4 mt-1'>
                                   2026-02-05
                                   14:32:18
                              </p>
                         </div>
                         <div className="bg-gray-3700/30 border border-solid border-gray-7700 rounded-lg p-3">
                              <h4 className='text-gray-6400 flex items-center gap-1.5 font-inter font-normal uppercase text-[10px] leading-4'>
                                   <Image src="/images/user-icon2.svg" width={12} height={12} alt="" />
                                   Admin ID
                              </h4>
                              <p className='text-black-2000 font-JetBrainsMono font-normal text-xs leading-4 mt-1'>
                                   ADM-00234
                              </p>
                         </div>
                         <div className="bg-gray-3700/30 border border-solid border-gray-7700 rounded-lg p-3">
                              <h4 className='text-gray-6400 flex items-center gap-1.5 font-inter font-normal uppercase text-[10px] leading-4'>
                                   <Image src="/icons/location-icon.svg" width={12} height={12} alt="" />
                                   IP Address
                              </h4>
                              <p className='text-black-2000 font-JetBrainsMono font-normal text-xs leading-4 mt-1'>
                                   192.168.1.105
                              </p>
                         </div>
                         <div className="bg-red-2500/10 border border-solid border-gray-7700 rounded-lg p-3">
                              <h4 className='text-gray-6400 flex items-center gap-1.5 font-inter font-normal uppercase text-[10px] leading-4'>
                                   Severity
                              </h4>
                              <p className='text-red-2500 font-bold text-xs leading-4 mt-1'>
                                   High Risk
                              </p>
                         </div>
                    </div>
                    <div className="bg-gray-3700/20 rounded-lg border border-solid border-gray-7700 mt-4 p-4">
                         <h4 className='text-blue-1300 mb-3 font-inter font-bold text-xs leading-4'>Action Summary </h4>
                         <ul>
                              <li className="flex items-center gap-3 mb-3">
                                   <span className='text-gray-6400 w-20 font-inter font-normal text-[10px] leading-4'>Action:</span>
                                   <p className='text-black-2000 font-inter font-normal text-sm leading-5'>Approved Payout for BK-2024-001</p>
                              </li>
                              <li className="flex items-center gap-3 mb-3">
                                   <span className='text-gray-6400 w-20 font-inter font-normal text-[10px] leading-4'>Module:</span>
                                   <span className='text-black-2000 font-inter font-bold text-[10px] leading-5 bg-gray-3700 rounded-md h-5.25 px-2.5 inline-flex items-center  justify-center'>Payments</span>
                              </li>
                              <li className="flex items-center gap-3 mb-3">
                                   <span className='text-gray-6400 w-20 font-inter font-normal text-[10px] leading-4'>Admin::</span>
                                   <p className='text-black-2000 font-inter font-normal text-sm leading-5'>Ahmed Khan <span className="text-gray-6400">(Finance Manager)</span> </p>
                              </li>
                              <li className="flex items-center gap-3">
                                   <span className='text-gray-6400 w-20 font-inter font-normal text-[10px] leading-4'>Location::</span>
                                   <p className='text-black-2000 font-inter font-normal text-sm leading-5'>Karachi, PK</p>
                              </li>
                         </ul>
                    </div>
                    <div className="bg-gray-3700/20 rounded-lg border border-solid border-gray-7700 mt-4 p-4">
                         <h4 className='text-blue-1300 mb-3 font-inter font-bold text-xs leading-4'>Value Changes</h4>
                         <div className="flex items-center gap-4">
                              <div className="bg-red-2500/10 flex-1 border border-solid border-gray-7700 rounded-lg p-3">
                                   <h4 className='text-gray-6400 flex items-center gap-1.5 font-inter font-normal uppercase text-[10px] leading-4'>
                                        Old Value
                                   </h4>
                                   <p className='text-red-2500 font-normal text-sm leading-5 mt-1'>
                                        Pending
                                   </p>
                              </div>
                              <span className="flex items-center justify-center gap-4"> <Image src="/icons/right-arrow-green.svg" width={20} height={20} alt="" /></span>
                              <div className="bg-green62/10 flex-1 border border-solid border-green62 rounded-lg p-3">
                                   <h4 className='text-gray-6400 flex items-center gap-1.5 font-inter font-normal uppercase text-[10px] leading-4'>
                                        New Value
                                   </h4>
                                   <p className='text-green62 font-normal text-sm leading-5 mt-1'>
                                        Approved
                                   </p>
                              </div>
                         </div>
                    </div>
                    <div className="bg-gray-1500 border border-solid rounded-lg border-gray-7700 mt-4">
                         <div className="border-b border-solid  border-gray-7700 flex items-center justify-between px-2.5 py-2">
                              <h4 className='text-black-2000 font-inter font-bold text-xs leading-4 gap-2 flex items-center'>
                                   <Image src="/icons/audit-icon2.svg" width={12} height={12} alt="" />
                                   Raw Technical Data
                              </h4>
                              <Link href={"#"} className="inline-flex items-center rounded-md shadow-83xl justify-center gap-2 text-black-200 text-[10px] leading-3.75 font-medium h-6 px-2">
                                   <Image src="/icons/copy-icon2.svg" width={16} height={16} alt="" />
                                   Copy
                              </Link>
                         </div>
                         <div className="p-4">
                              <p className="text-gray-6400 font-JetBrainsMono text-[11px] font-normal leading-4">
                                   {
                                        JSON.stringify({
                                             event_id: "evt_2026020514321845892",
                                             event_type: "admin.action.executed",
                                             source: "admin-panel",
                                             version: "2.1.0",
                                             payload: {
                                                  admin_session_id: "sess_abc123xyz789",
                                                  request_id: "req_def456uvw012",
                                                  user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
                                                  duration_ms: 234,
                                                  database_queries: 3,
                                                  cache_hit: true,
                                             },
                                             metadata: {
                                                  environment: "production",
                                                  region: "eu-west-1",
                                                  server_id: "srv-prod-012",
                                             },
                                        }, null, 2)}
                              </p>
                         </div>
                    </div>
                    <div className="mt-6">
                         <ul className="flex items-center justify-end gap-2">
                              <li>
                                   <Link href={"#"} className="group text-black-2000 hover:text-white hover:bg-gray-6500 sm:text-xs text-[11px] font-medium leading-4 inline-flex items-center justify-center gap-1.5 h-8 px-3 bg-gray-1500 border border-solid  border-gray-7700 rounded-md">
                                        <Image src="/icons/ExportPDF.svg" width={16} height={16} alt="" className="group-hover:brightness-10000" />
                                        Export as PDF
                                   </Link>
                              </li>
                              <li>
                                   <Link href={"#"} className="group text-black-2000 hover:text-white hover:bg-gray-6500 sm:text-xs text-[11px] font-medium leading-4 inline-flex items-center justify-center gap-1.5 h-8 px-3 bg-gray-1500 border border-solid  border-gray-7700 rounded-md">
                                        <Image src="/icons/ExportPDF.svg" width={16} height={16} alt="" className="group-hover:brightness-10000" />
                                        Export as CSV
                                   </Link>
                              </li>
                              <li>
                                   <Link onClick={() => setIsOpen(false )} href={"#"}  className="text-white text-xs font-medium leading-4 inline-flex items-center justify-center gap-1.5 h-8 px-3 bg-green-3700 hover:bg-green-3700/90 border border-solid  border-green-3700 hover:border-green-3700/90 rounded-md">
                                        Close
                                   </Link>
                              </li>
                         </ul>
                    </div>
               </Modal>
          </>
     );
}