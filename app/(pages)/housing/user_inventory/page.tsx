"use client";

import { Ban, Clock, Shield } from "lucide-react";
import React, { useState, JSX } from "react";

type KycStatus = "Verified" | "Pending" | "Suspended";

interface Property {
     id: string;
     thumbnail?: string;
     name: string;
     city: string;
     country: string;
     rent: string;
     kycStatus: KycStatus;
}

const PROPERTIES: Property[] = [
     { id: "SP-1001", name: "Elm Court, Flat 4A", city: "London", country: "UK", rent: "£850/mo", kycStatus: "Verified" },
     { id: "SP-1002", name: "Park View Residence", city: "Manchester", country: "UK", rent: "£720/mo", kycStatus: "Verified" },
     { id: "SP-1003", name: "The Heights, Unit 12", city: "Birmingham", country: "UK", rent: "£680/mo", kycStatus: "Pending" },
     { id: "SP-1004", name: "Oakwood Terrace", city: "Leeds", country: "UK", rent: "£590/mo", kycStatus: "Verified" },
     { id: "SP-1005", name: "Station Road Apt", city: "Bristol", country: "UK", rent: "£760/mo", kycStatus: "Verified" },
     { id: "SP-1006", name: "Harbour Point 3B", city: "Liverpool", country: "UK", rent: "£640/mo", kycStatus: "Pending" },
     { id: "SP-1007", name: "Meadow Lane House", city: "Sheffield", country: "UK", rent: "£520/mo", kycStatus: "Verified" },
     { id: "SP-1008", name: "Victoria Square", city: "Edinburgh", country: "UK", rent: "£900/mo", kycStatus: "Verified" },
     { id: "SP-1009", name: "Riverside Studios", city: "Glasgow", country: "UK", rent: "£610/mo", kycStatus: "Pending" },
     { id: "SP-1010", name: "Chapel Street Loft", city: "Cardiff", country: "UK", rent: "£550/mo", kycStatus: "Verified" },
     { id: "SP-1011", name: "King's Row Flat 2", city: "Nottingham", country: "UK", rent: "£580/mo", kycStatus: "Verified" },
     { id: "SP-1012", name: "West End Studios", city: "London", country: "UK", rent: "£1,100/mo", kycStatus: "Suspended" },
];

const KYC_CONFIG: Record<KycStatus, { bg: string; text: string; border: string }> = {
     Verified: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
     Pending: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
     Suspended: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
};

function VerifiedIcon() {
     return (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
               <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
               <path d="m9 12 2 2 4-4" />
          </svg>
     );
}

function PendingIcon() {
     return (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
               <circle cx="12" cy="12" r="10" />
               <polyline points="12 6 12 12 16 14" />
          </svg>
     );
}

function SuspendedIcon() {
     return (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
               <circle cx="12" cy="12" r="10" />
               <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
          </svg>
     );
}

const KYC_ICONS: Record<KycStatus, () => JSX.Element> = {
     Verified: VerifiedIcon,
     Pending: PendingIcon,
     Suspended: SuspendedIcon,
};

function KycBadge({ status }: { status: KycStatus }) {
     const cfg = KYC_CONFIG[status];
     const Icon = KYC_ICONS[status];
     return (
          <span
               className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${cfg.bg} ${cfg.text} ${cfg.border}`}
          >
               <Icon />
               {status}
          </span>
     );
}

function BuildingIcon() {
     return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
               <rect x="3" y="3" width="18" height="18" rx="2" />
               <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
          </svg>
     );
}

function CustomCheckbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
     return (
          <label className="flex items-center cursor-pointer">
               <input type="checkbox" checked={checked} onChange={onChange} className="peer hidden" />
               <div
                    className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${checked ? "bg-blue-600 border-blue-600" : "border-gray-300 bg-white"
                         }`}
               >
                    {checked && (
                         <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                         </svg>
                    )}
               </div>
          </label>
     );
}

const LIVE_COUNT = PROPERTIES.filter((p) => p.kycStatus === "Verified").length;
const PENDING_COUNT = PROPERTIES.filter((p) => p.kycStatus === "Pending").length;
const SUSPENDED_COUNT = PROPERTIES.filter((p) => p.kycStatus === "Suspended").length;

export default function GlobalHousingCommandCenter() {
     const [selected, setSelected] = useState<Set<string>>(new Set());

     const allSelected = selected.size === PROPERTIES.length;

     function toggleAll() {
          if (allSelected) {
               setSelected(new Set());
          } else {
               setSelected(new Set(PROPERTIES.map((p) => p.id)));
          }
     }

     function toggleOne(id: string) {
          setSelected((prev) => {
               const next = new Set(prev);
               next.has(id) ? next.delete(id) : next.add(id);
               return next;
          });
     }

     return (
          <div className="bg-[url(/images/body-bg.png)] bg-cover p-4 bg-no-repeat xl:mt-[-45px] mt-[-35px] xl:-m-8 -m-4 font-inter">
               <div className='bg-white/80 border-b border-solid border-gray1600/50 backdrop-blur-md fixed w-full z-50 top-0 right-0  xl:pl-72 lg:pl-62.5'>
                    <div className='flex items-center justify-between md:gap-0 gap-4 py-4.5 xl:px-8 px-4 bg-white border-b border-gray-1000'>
                         <div className="flex-1 md:block hidden">
                              <h1 className="xl:text-[22px] text-lg font-bold text-slate-900 tracking-tight">
                                   Housing Master Dashboard
                              </h1>
                              <p className="text-sm text-slate-500 mt-0.5">
                                   Manage listings, track bookings, and monitor campaign performance
                              </p>
                         </div>
                         <div className="flex items-center  gap-3">
                              <div className="flex items-center gap-2 text-xs text-slate-500 bg-white  rounded-lg px-3 py-2">
                                   Last sync: 2 min ago
                                   <span className="w-2 h-2 rounded-full bg-green-1500 block"></span>
                              </div>
                         </div>
                    </div>
               </div>
               <main className="md:mt-11">
                    <div className="bg-white border border-gray1600  p-6 ">
                         <div className="flex items-start justify-between flex-wrap gap-5">
                              <div className="flex items-start gap-4">
                                   <div className="w-16 h-16 rounded-full bg-blue-1000 flex items-center justify-center text-white text-xl font-bold shrink-0">
                                        MA
                                   </div>
                                   <div>
                                        <p className="text-xl font-bold text-black-5100">Marcus Adeyemi</p>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                                             <span className="text-sm text-gray-1400 flex items-center gap-1">
                                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                                  marcus@adeyemiproperties.com
                                             </span>
                                             <span className="text-sm text-gray-1400 flex items-center gap-1">
                                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.58 4.5 2 2 0 0 1 3.55 2.32h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.07-.89a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z" /></svg>
                                                  +44 7700 123456
                                             </span>
                                             <span className="text-sm text-gray-1400 flex items-center gap-1">
                                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                                  London, United Kingdom
                                             </span>
                                        </div>
                                   </div>
                              </div>
                              <div className="text-right shrink-0">
                                   <p className="text-sm uppercase tracking-widest text-gray-1400 font-medium">Registered Listings</p>
                                   <p className="text-[48px] font-bold text-black-5100 leading-none mt-1">{PROPERTIES.length}</p>
                              </div>
                         </div>
                         <div className="flex items-center gap-2 mt-3 flex-wrap">
                              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-lg font-medium border border-emerald-200 bg-lightgreen15/10 text-emerald-700">
                                   <Shield size="16"></Shield>
                                   {LIVE_COUNT}<span className="text-sm">Live</span>
                              </span>
                              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-lg font-medium border border-amber-200 bg-amber-50 text-amber-700">
                                   <Clock size="16"></Clock>
                                   {PENDING_COUNT} <span className="text-sm">Pending</span>
                              </span>
                              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-lg font-medium border border-red-200 bg-red-50 text-red-700">
                                   <Ban size="16"></Ban>
                                   {SUSPENDED_COUNT}<span className="text-sm"> Suspended</span>
                              </span>
                         </div>
                    </div>

                    <div className="bg-white border mt-6 border-gray-200 rounded-xl overflow-hidden">
                         <div className="bg-blue-1000 px-4 py-3 flex items-center gap-2">
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                   <rect x="3" y="3" width="18" height="18" rx="2" />
                                   <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                              </svg>
                              <span className="text-white text-base font-semibold">Property Inventory</span>
                         </div>
                         <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                   <thead>
                                        <tr className="border-b border-gray-200 bg-gray-50">
                                             <th className="w-10 px-4 py-3">
                                                  <CustomCheckbox checked={allSelected} onChange={toggleAll} />
                                             </th>
                                             {["Thumbnail", "Property ID", "Name", "City / Country", "Rent", "KYC Status"].map((h) => (
                                                  <th
                                                       key={h}
                                                       className="px-4 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wide whitespace-nowrap"
                                                  >
                                                       {h}
                                                  </th>
                                             ))}
                                        </tr>
                                   </thead>
                                   <tbody className="divide-y divide-gray-100">
                                        {PROPERTIES.map((p) => (
                                             <tr
                                                  key={p.id}
                                                  className={`transition-colors hover:bg-blue-50/40 ${selected.has(p.id) ? "bg-blue-50/30" : "bg-white"}`}
                                             >
                                                  <td className="px-4 py-3">
                                                       <CustomCheckbox checked={selected.has(p.id)} onChange={() => toggleOne(p.id)} />
                                                  </td>
                                                  <td className="px-4 py-3">
                                                       <div className="w-12 h-9 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">
                                                            <BuildingIcon />
                                                       </div>
                                                  </td>
                                                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap text-[13px]">{p.id}</td>
                                                  <td className="px-4 py-3 text-[13px] text-gray-900 font-normal">{p.name}</td>
                                                  <td className="px-4 py-3 text-[13px]">
                                                       <span className="text-gray-900">{p.city}</span>
                                                       <span className="text-gray-400">, {p.country}</span>
                                                  </td>
                                                  <td className="px-4 py-3 text-[13px] font-bold text-gray-900 whitespace-nowrap">{p.rent}</td>
                                                  <td className="px-4 py-3">
                                                       <KycBadge status={p.kycStatus} />
                                                  </td>
                                             </tr>
                                        ))}
                                   </tbody>
                              </table>
                         </div>
                    </div>
                    <div className="border mt-6 flex-wrap gap-5 rounded-xl border-gray1600 bg-gray-50 px-4 py-3 flex items-center justify-between">
                         <p className="text-sm text-gray-1400 font-medium">
                              Portfolio-Wide Actions for <span className="font-semibold text-gray-700">Marcus Adeyemi</span>
                         </p>
                         <div className="flex items-center flex-wrap gap-2">
                              <button className="inline-flex items-center gap-4 px-6 py-2.5 rounded-lg text-sm font-semibold bg-red-500 hover:bg-red-600 text-white transition-colors">
                                   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
                                   Suspend All
                              </button>
                              <button className="inline-flex items-center gap-4 px-6 py-2.5 rounded-lg text-sm font-semibold bg-amber-400 hover:bg-amber-500 text-white transition-colors">
                                   <Shield className="text-white w-4"></Shield>
                                   Promote All
                              </button>
                         </div>
                    </div>
               </main>
          </div>
     );
}