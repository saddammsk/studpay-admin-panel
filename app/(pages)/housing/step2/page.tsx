"use client";

import { useState } from "react";
import {
     ArrowLeft,
     MoreVertical,
     Check,
     FileText,
     Key,
     CreditCard,
     Gauge,
     Home,
     Eye,
     PenLine,
     CheckCircle,
     XCircle,
     User,
     Building2,
     CalendarDays,
     RefreshCw,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type StepStatus = "complete" | "active" | "pending";
type EvidenceCategory = "All" | "Documents" | "Keys" | "Utility Meters" | "Room Condition";
type ConfirmationStatus = "RECEIVED" | "DELIVERED" | "PENDING";
type EvidenceIcon = "document" | "key" | "meter" | "room";
type ChecklistIcon = "document" | "eye" | "pen";

interface Step {
     id: string;
     label: string;
     sublabel: string;
     status: StepStatus;
     icon: React.ReactNode;
}

interface EvidenceItem {
     id: string;
     category: Exclude<EvidenceCategory, "All">;
     title: string;
     date: string;
     time: string;
     icon: EvidenceIcon;
     gradient: string;
}

interface ChecklistItem {
     id: string;
     label: string;
     checked: boolean;
     icon: ChecklistIcon;
}

interface Confirmation {
     id: string;
     role: "student" | "landlord";
     name: string;
     person: string;
     date: string;
     status: ConfirmationStatus;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const steps: Step[] = [
     {
          id: "fee_paid",
          label: "Fee Paid",
          sublabel: "Booking fee received",
          status: "complete",
          icon: <Check size={16} strokeWidth={2.5} />,
     },
     {
          id: "contract_signed",
          label: "Contract Signed",
          sublabel: "Agreement executed",
          status: "complete",
          icon: <FileText size={16} />,
     },
     {
          id: "key_handover",
          label: "Key Handover",
          sublabel: "Keys transferred",
          status: "active",
          icon: <Key size={16} />,
     },
     {
          id: "funds_released",
          label: "Funds Released",
          sublabel: "Payment to landlord",
          status: "pending",
          icon: <CreditCard size={16} />,
     },
];

const evidenceItems: EvidenceItem[] = [
     {
          id: "1",
          category: "Documents",
          title: "Signed Check-in Report",
          date: "Feb 10, 2026",
          time: "14:32",
          icon: "document",
          gradient: "from-amber-50 via-amber-100 to-orange-100",
     },
     {
          id: "2",
          category: "Keys",
          title: "Front Door Keys",
          date: "Feb 10, 2026",
          time: "14:35",
          icon: "key",
          gradient: "from-slate-100 via-slate-150 to-zinc-200",
     },
     {
          id: "3",
          category: "Utility Meters",
          title: "Electric Meter Reading",
          date: "Feb 10, 2026",
          time: "14:38",
          icon: "meter",
          gradient: "from-zinc-200 via-zinc-300 to-stone-300",
     },
     {
          id: "4",
          category: "Utility Meters",
          title: "Gas Meter Reading",
          date: "Feb 10, 2026",
          time: "14:40",
          icon: "meter",
          gradient: "from-stone-100 via-stone-200 to-zinc-200",
     },
     {
          id: "5",
          category: "Room Condition",
          title: "Living Room Condition",
          date: "Feb 10, 2026",
          time: "14:42",
          icon: "room",
          gradient: "from-sky-50 via-blue-50 to-slate-100",
     },
     {
          id: "6",
          category: "Room Condition",
          title: "Bathroom Condition",
          date: "Feb 10, 2026",
          time: "14:44",
          icon: "room",
          gradient: "from-teal-50 via-emerald-50 to-cyan-100",
     },
];

const checklistItems: ChecklistItem[] = [
     { id: "1", label: "Documents match the student's ID?", checked: false, icon: "document" },
     { id: "2", label: "Utility meter readings are clearly visible?", checked: false, icon: "eye" },
     { id: "3", label: "Digital signature of the landlord is present?", checked: false, icon: "pen" },
];

const confirmations: Confirmation[] = [
     { id: "1", role: "student", name: "Student Confirmation", person: "Ahmed Khan", date: "Feb 10, 2026", status: "RECEIVED" },
     { id: "2", role: "landlord", name: "Landlord Confirmation", person: "Mr. Rashid Ali", date: "Feb 10, 2026", status: "DELIVERED" },
];

const CATEGORIES: EvidenceCategory[] = ["All", "Documents", "Keys", "Utility Meters", "Room Condition"];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StepIndicator({ step, index }: { step: Step; index: number }) {
     return (
          <div className="flex flex-col items-center gap-2 flex-1">
               <div className="relative flex items-center w-full">
                    {index > 0 && (
                         <div
                              className={`absolute left-0 right-1/2 h-0.5 top-1/2 -translate-y-1/2 ${step.status === "complete" || step.status === "active"
                                   ? "bg-emerald-500"
                                   : "bg-gray-200"
                                   }`}
                         />
                    )}
                    {index < steps.length - 1 && (
                         <div
                              className={`absolute left-1/2 right-0 h-0.5 top-1/2 -translate-y-1/2 ${step.status === "complete" ? "bg-emerald-500" : "bg-gray-200"
                                   }`}
                         />
                    )}
                    <div className="relative z-10 mx-auto">
                         <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${step.status === "complete"
                                   ? "bg-emerald-500 border-emerald-500 text-white"
                                   : step.status === "active"
                                        ? "bg-[#cff1e5] border-emerald-500 text-emerald-500"
                                        : "bg-gray-7500 border-gray-300 text-gray-400"
                                   }`}
                         >
                              {step.icon}
                         </div>
                    </div>
               </div>
               <div className="text-center">
                    <p
                         className={`text-sm font-semibold ${step.status === "complete" || step.status === "active"
                              ? "text-emerald-500"
                              : "text-gray-1900"
                              }`}
                    >
                         {step.label}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{step.sublabel}</p>
               </div>
          </div>
     );
}

const evidenceIconMap: Record<EvidenceIcon, React.ReactNode> = {
     document: <FileText size={26} className="text-amber-400" />,
     key: <Key size={26} className="text-slate-400" />,
     meter: <Gauge size={26} className="text-zinc-500" />,
     room: <Home size={26} className="text-blue-300" />,
};

const evidenceIconSmall: Record<EvidenceIcon, React.ReactNode> = {
     document: <FileText size={11} className="text-blue-1300 flex-shrink-0" />,
     key: <Key size={11} className="text-blue-1300 flex-shrink-0" />,
     meter: <Gauge size={11} className="text-blue-1300 flex-shrink-0" />,
     room: <Home size={11} className="text-blue-1300 flex-shrink-0" />,
};

function EvidenceCard({ item }: { item: EvidenceItem }) {
     return (
          <div className="group cursor-pointer rounded-lg overflow-hidden border border-gray-1000 bg-white hover:shadow-md transition-shadow duration-200">
               <div
                    className={`flex items-center justify-center relative`}
               >
                    <img src="/images/card-img1.png" className="w-full" alt="" />
               </div>
               <div className="p-3">
                    <div className="flex items-center gap-1.5 mb-0.5">
                         {evidenceIconSmall[item.icon]}
                         <p className="text-xs font-medium text-blue-1300 truncate">{item.title}</p>
                    </div>
                    <p className="text-[10px] text-gray-1200">
                         {item.date} • {item.time}
                    </p>
               </div>
          </div>
     );
}

const checklistIconMap: Record<ChecklistIcon, React.ReactNode> = {
     document: <FileText size={14} className="text-gray-1200" />,
     eye: <Eye size={14} className="text-gray-1200" />,
     pen: <PenLine size={14} className="text-gray-1200" />,
};

function ChecklistRow({
     item,
     onToggle,
}: {
     item: ChecklistItem;
     onToggle: (id: string) => void;
}) {
     return (
          <div
               onClick={() => onToggle(item.id)}
               className="flex items-center gap-3 bg-grey5500 rounded-lg cursor-pointer group p-3"
          >
               <div
                    className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${item.checked
                         ? "bg-emerald-500 border-emerald-500"
                         : "border-gray-1200 group-hover:border-emerald-400"
                         }`}
               >
                    {item.checked && (
                         <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path
                                   d="M1 4L3.5 6.5L9 1"
                                   stroke="white"
                                   strokeWidth="1.5"
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                              />
                         </svg>
                    )}
               </div>
               <span
                    className={`text-xs flex-1 transition-colors ${item.checked ? "text-gray-400 line-through" : "text-blue-1300"
                         }`}
               >
                    {item.label}
               </span>
               {checklistIconMap[item.icon]}
          </div>
     );
}

const statusBadge: Record<ConfirmationStatus, string> = {
     RECEIVED: "bg-green-4100 text-white",
     DELIVERED: "bg-green-4100 text-white",
     PENDING: "bg-green-4100 text-amber-700",
};

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function BookingDetailPage() {
     const [activeCategory, setActiveCategory] = useState<EvidenceCategory>("All");
     const [checklist, setChecklist] = useState<ChecklistItem[]>(checklistItems);
     const [actionLoading, setActionLoading] = useState<"approve" | "reject" | null>(null);

     const toggleChecklist = (id: string) => {
          setChecklist((prev) =>
               prev.map((i) => (i.id === id ? { ...i, checked: !i.checked } : i))
          );
     };

     const checkedCount = checklist.filter((i) => i.checked).length;

     const filtered =
          activeCategory === "All"
               ? evidenceItems
               : evidenceItems.filter((i) => i.category === activeCategory);

     const handleAction = (type: "approve" | "reject") => {
          setActionLoading(type);
          setTimeout(() => setActionLoading(null), 1500);
     };

     return (
          <div className="bg-[url(/images/body-bg.png)] 4xl:px-14 bg-cover p-4 bg-no-repeat xl:-m-8 -m-4 -mt-10 font-inter">
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
                                   <CalendarDays size={13} className="text-slate-400" />
                                   Last updated: Today, 14:32 IST
                              </div>
                              <button className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-sm hover:bg-slate-50 transition-colors">
                                   <RefreshCw size={13} />
                                   Refresh
                              </button>
                         </div>
                    </div>
               </div>
               <div className=" xl:mt-0 md:mt-5">
                    {/* Header */}
                    <div className="flex items-center mb-7 justify-between">
                         <div className="flex items-start gap-6">
                              <button className="text-gray-400 mt-2 hover:text-gray-600 transition-colors">
                                   <ArrowLeft className="w-4 h-4 text-blue-1300" />
                              </button>
                              <div>
                                   <div className="flex items-center gap-2">
                                        <h2 className="text-2xl font-bold text-blue-1300">
                                             Maria Schmidt
                                        </h2>
                                        <span className="text-xs font-bold text-white bg-lightgreen17 border border-emerald-200 rounded-full px-2.5 py-0.5">
                                             Active
                                        </span>
                                   </div>
                                   <p className="text-base text-gray-1900">
                                        Apt 4B, Hauptstraße 23, 10115 Berlin
                                   </p>
                                   <div className="flex items-center gap-2 mt-0.5">
                                        <span className="text-xs text-gray-1900">#BK-2024-00847</span>
                                        <span className="w-1 h-1 my-1 rounded-full bg-gray-1900 inline-block" />
                                        <span className="text-xs text-gray-1900">
                                             Created Jan 15, 2024
                                        </span>
                                   </div>
                              </div>
                         </div>
                         <button className="text-gray-400 hover:text-gray-600 transition-colors p-1">
                              <MoreVertical className="w-5 h-5" />
                         </button>
                    </div>

                    {/* Booking Progress */}
                    <div className="bg-white rounded-lg border border-gray-3600 md:p-6 p-2">
                         <p className="text-sm font-semibold text-gray-700 mb-5">
                              Booking Progress
                         </p>
                         <div className="flex items-start">
                              {steps.map((step, index) => (
                                   <StepIndicator key={step.id} step={step} index={index} />
                              ))}
                         </div>
                    </div>

                    {/* Body */}
                    <div className="flex xl:flex-nowrap flex-wrap gap-5 mt-6">
                         {/* Left — Visual Evidence */}
                         <div className="xl:flex-1 xl:min-w-0 xl:w-auto w-full">
                              <div className="">
                                   <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-lg font-semibold text-blue-1300">Visual Evidence</h2>
                                        <span className="text-xs bg-[#FEF3E2] text-gray-1200 px-2.5 py-1 rounded-full font-medium">
                                             6 items uploaded
                                        </span>
                                   </div>

                                   {/* Filter tabs */}
                                   <div className="flex gap-2 flex-wrap mb-5">
                                        {CATEGORIES.map((cat) => (
                                             <button
                                                  key={cat}
                                                  onClick={() => setActiveCategory(cat)}
                                                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150  ${activeCategory === cat
                                                       ? "bg-blue-1000 text-white"
                                                       : "bg-grey5500 text-blue-1300 "
                                                       }`}
                                             >
                                                  {cat}
                                             </button>
                                        ))}
                                   </div>

                                   {/* Grid */}
                                   <div className="grid 2xl:grid-cols-3 grid-cols-2 gap-3">
                                        {filtered.map((item) => (
                                             <EvidenceCard key={item.id} item={item} />
                                        ))}
                                   </div>
                              </div>
                         </div>

                         {/* Right Sidebar */}
                         <div className="4xl:w-[394px] 2xl:w-[335px] xl:w-[310px] w-full xl:flex-shrink-0 flex flex-col gap-4">
                              {/* Verification Checklist */}
                              <div className="bg-white border border-gray-1000 rounded-lg p-5">
                                   <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-sm font-semibold text-blue-1300">
                                             Verification Checklist
                                        </h3>
                                        <span
                                             className={`text-xs font-semibold px-2 py-0.5 rounded-full ${checkedCount === checklist.length
                                                  ? "bg-yellow-3100 text-brown-1400"
                                                  : "bg-amber-50 text-amber-500"
                                                  }`}
                                        >
                                             {checkedCount}/{checklist.length}
                                        </span>
                                   </div>
                                   <div className="space-y-3">
                                        {checklist.map((item) => (
                                             <ChecklistRow key={item.id} item={item} onToggle={toggleChecklist} />
                                        ))}
                                   </div>
                              </div>

                              {/* Confirmation Status */}
                              <div className="bg-white border border-gray-1000 rounded-lg p-5">
                                   <h3 className="text-sm font-semibold text-blue-1300 mb-4">
                                        Confirmation Status
                                   </h3>
                                   <div className="space-y-3">
                                        {confirmations.map((conf) => (
                                             <div key={conf.id} className="flex items-center bg-green-4000/50 rounded-lg p-3 gap-3">
                                                  <div
                                                       className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${conf.role === "student"
                                                            ? "bg-green-4100/10 text-green-4100"
                                                            : "bg-green-4100/10 text-green-4100"
                                                            }`}
                                                  >
                                                       {conf.role === "student" ? (
                                                            <User size={14} />
                                                       ) : (
                                                            <Building2 size={14} />
                                                       )}
                                                  </div>
                                                  <div className="flex-1 min-w-0">
                                                       <p className="text-xs font-semibold text-blue-1300">
                                                            {conf.name}
                                                       </p>
                                                       <p className="text-[10px] text-gray-1200">
                                                            {conf.person} • {conf.date}
                                                       </p>
                                                  </div>
                                                  <span
                                                       className={`text-[10px] font-bold px-2 py-1 rounded-full flex-shrink-0 ${statusBadge[conf.status]}`}
                                                  >
                                                       {conf.status}
                                                  </span>
                                             </div>
                                        ))}
                                   </div>
                              </div>

                              {/* Admin Actions */}
                              <div className="bg-white border border-gray-1000 rounded-lg p-5">
                                   <h3 className="text-sm font-semibold text-blue-1300 mb-4">Admin Actions</h3>
                                   <div className="space-y-3">
                                        <button
                                             onClick={() => handleAction("approve")}
                                             disabled={actionLoading !== null}
                                             className="w-full flex items-center justify-center gap-2 bg-green-4100 hover:bg-emerald-600 disabled:opacity-60 text-white text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-200 active:scale-95"
                                        >
                                             <CheckCircle size={16} />
                                             {actionLoading === "approve" ? "Processing..." : "Approve Handover"}
                                        </button>
                                        <button
                                             onClick={() => handleAction("reject")}
                                             disabled={actionLoading !== null}
                                             className="w-full flex items-center justify-center gap-2 bg-gray-1800 hover:bg-red-50 disabled:opacity-60 text-red2100 border border-red2100/30 hover:border-red-300 text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-200 active:scale-95"
                                        >
                                             <XCircle size={16} />
                                             {actionLoading === "reject" ? "Processing..." : "Reject / Request Clarification"}
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}