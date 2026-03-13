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
          status: "complete",
          icon: <Key size={16} />,
     },
     {
          id: "funds_released",
          label: "Funds Released",
          sublabel: "Payment to landlord",
          status: "active",
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

const evidenceIconSmall: Record<EvidenceIcon, React.ReactNode> = {
     document: <FileText size={11} className="text-blue-1300 flex-shrink-0" />,
     key: <Key size={11} className="text-blue-1300 flex-shrink-0" />,
     meter: <Gauge size={11} className="text-blue-1300 flex-shrink-0" />,
     room: <Home size={11} className="text-blue-1300 flex-shrink-0" />,
};


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

interface PaymentLineProps {
     label: string;
     amount: string;
     variant?: "default" | "deduction" | "total";
}

function PaymentLine({ label, amount, variant = "default" }: PaymentLineProps) {
     return (
          <div className="flex items-center  justify-between py-3">
               <span
                    className={
                         variant === "deduction"
                              ? "text-sm font-medium text-red-1000"
                              : "text-sm font-medium text-black13/80"
                    }
               >
                    {label}
               </span>
               <span
                    className={
                         variant === "deduction"
                              ? "text-sm font-semibold text-red-1000"
                              : "text-sm font-semibold text-gray-900"
                    }
               >
                    {amount}
               </span>
          </div>
     );
}

interface BeneficiaryFieldProps {
     label: string;
     value: string;
     fullWidth?: boolean;
}

function BeneficiaryField({ label, value, fullWidth = false }: BeneficiaryFieldProps) {
     return (
          <div className={fullWidth ? "col-span-2" : "col-span-1"}>
               <p className="text-xs font-medium uppercase tracking-widest text-gray-1400 mb-1">
                    {label}
               </p>
               {fullWidth ? (
                    <div className="rounded border border-gray1600 bg-gray1700/30 px-4 py-3">
                         <p className="text-sm font-medium text-black13 tracking-wide">{value}</p>
                    </div>
               ) : (
                    <p className="text-sm font-semibold text-gray-800">{value}</p>
               )}
          </div>
     );
}
// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function BookingDetailPage() {
     const [loading, setLoading] = useState(false);
     const [confirmed, setConfirmed] = useState(false);

     const handleRelease = () => {
          setLoading(true);
          setTimeout(() => {
               setLoading(false);
               setConfirmed(true);
          }, 1800);
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

                    <div className=" flex items-start justify-center pt-6 ">
                         <div className="w-full">
                              <div className="mb-6">
                                   <h1 className="text-[30px] font-medium text-black13 tracking-tight">
                                        Funds Release &amp; Settlement
                                   </h1>
                                   <p className="mt-1 text-sm text-gray-1400">
                                        Review final payment details and authorize transfer to landlord.
                                   </p>
                              </div>

                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                   <div>
                                        <div className="bg-white rounded-xl mb-6 shadow-52xl pb-6 overflow-hidden">
                                             <div className="flex items-center gap-2 p-6 border-b border-gray1600">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                       <path d="M16.6667 10.835C16.6667 15.0017 13.75 17.085 10.2834 18.2933C10.1018 18.3549 9.90466 18.3519 9.72504 18.285C6.25004 17.085 3.33337 15.0017 3.33337 10.835V5.00168C3.33337 4.78066 3.42117 4.5687 3.57745 4.41242C3.73373 4.25614 3.94569 4.16834 4.16671 4.16834C5.83337 4.16834 7.91671 3.16834 9.36671 1.90168C9.54325 1.75084 9.76784 1.66797 10 1.66797C10.2322 1.66797 10.4568 1.75084 10.6334 1.90168C12.0917 3.17668 14.1667 4.16834 15.8334 4.16834C16.0544 4.16834 16.2663 4.25614 16.4226 4.41242C16.5789 4.5687 16.6667 4.78066 16.6667 5.00168V10.835Z" stroke="#2FA26A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                  </svg>
                                                  <h2 className="text-lg font-medium text-black13">Payment Breakdown</h2>
                                             </div>

                                             <div className="px-6 pt-2 pb-4 mb-4 border-b border-gray1600">
                                                  <PaymentLine label="Total Student Payment" amount="€1,000.00" />
                                                  <PaymentLine label="Less: Booking Fee" amount="- €293.00" variant="deduction" />
                                                  <PaymentLine label="Less: StudPay Commission" amount="- €86.00" variant="deduction" />
                                             </div>

                                             <div className="mx-6 rounded-xl bg-green-4200/5 border border-green-4200/10 p-4 flex items-center justify-between">
                                                  <div>
                                                       <p className="text-sm font-normal uppercase tracking-widest text-green-4200 mb-0.5">
                                                            Final Payout
                                                       </p>
                                                       <p className="text-xs text-gray-1400">To Landlord Account</p>
                                                  </div>
                                                  <p className="text-[28px] font-medium text-green-4200 tracking-tight">€621.00</p>
                                             </div>
                                        </div>
                                        <div className="bg-gray1700/50 border border-gray1700 rounded-xl p-4 flex items-start gap-5">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                  <path d="M16.6667 10.835C16.6667 15.0017 13.75 17.085 10.2834 18.2933C10.1018 18.3549 9.90466 18.3519 9.72504 18.285C6.25004 17.085 3.33337 15.0017 3.33337 10.835V5.00168C3.33337 4.78066 3.42117 4.5687 3.57745 4.41242C3.73373 4.25614 3.94569 4.16834 4.16671 4.16834C5.83337 4.16834 7.91671 3.16834 9.36671 1.90168C9.54325 1.75084 9.76784 1.66797 10 1.66797C10.2322 1.66797 10.4568 1.75084 10.6334 1.90168C12.0917 3.17668 14.1667 4.16834 15.8334 4.16834C16.0544 4.16834 16.2663 4.25614 16.4226 4.41242C16.5789 4.5687 16.6667 4.78066 16.6667 5.00168V10.835Z" stroke="#2FA26A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                             </svg>
                                             <p className="text-sm font-normal leading-5 text-blue-1200 max-w-[420px]">This transaction is protected by StudPay Secure Settlement. Funds
                                                  are released instantly upon authorization.</p>
                                        </div>
                                   </div>
                                   {/* Beneficiary Details */}
                                   <div className="bg-white rounded-xl mb-6 shadow-52xl pb-6 overflow-hidden">
                                        <div className="flex items-center gap-2 p-6 border-b border-gray1600">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                  <path d="M5 18.3346V3.33464C5 2.89261 5.17559 2.46868 5.48816 2.15612C5.80072 1.84356 6.22464 1.66797 6.66667 1.66797H13.3333C13.7754 1.66797 14.1993 1.84356 14.5118 2.15612C14.8244 2.46868 15 2.89261 15 3.33464V18.3346H5Z" stroke="#64748B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                  <path d="M4.99996 10H3.33329C2.89127 10 2.46734 10.1756 2.15478 10.4882C1.84222 10.8007 1.66663 11.2246 1.66663 11.6667V16.6667C1.66663 17.1087 1.84222 17.5326 2.15478 17.8452C2.46734 18.1577 2.89127 18.3333 3.33329 18.3333H4.99996" stroke="#64748B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                  <path d="M15 7.5H16.6667C17.1087 7.5 17.5326 7.6756 17.8452 7.98816C18.1577 8.30072 18.3333 8.72464 18.3333 9.16667V16.6667C18.3333 17.1087 18.1577 17.5326 17.8452 17.8452C17.5326 18.1577 17.1087 18.3333 16.6667 18.3333H15" stroke="#64748B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                  <path d="M8.33337 5H11.6667" stroke="#64748B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                  <path d="M8.33337 8.33203H11.6667" stroke="#64748B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                  <path d="M8.33337 11.668H11.6667" stroke="#64748B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                  <path d="M8.33337 15H11.6667" stroke="#64748B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                             </svg>
                                             <h2 className="text-lg font-medium text-black13">Payment Breakdown</h2>
                                        </div>

                                        <div className="px-6 py-5 grid grid-cols-2 gap-x-6 gap-y-5">
                                             <div className="col-span-2">
                                                  <p className="text-xs font-medium uppercase tracking-widest text-gray-1400 mb-1">
                                                       Account Holder Name
                                                  </p>
                                                  <p className="text-base font-normal text-black13">Heinrich Immobilien GmbH</p>
                                             </div>

                                             <BeneficiaryField label="Bank Name" value="Deutsche Bank" />
                                             <BeneficiaryField label="BIC / SWIFT" value="DEUTDEFF" />
                                             <BeneficiaryField label="IBAN" value="DE89 3704 0044 0532 0130 00" fullWidth />
                                        </div>

                                        <div className="px-6 pb-6 pt-2 flex flex-col gap-2">
                                             <button
                                                  onClick={handleRelease}
                                                  disabled={loading || confirmed}
                                                  className={`w-full rounded-xl py-3.5 text-base font-normal tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400
                  ${confirmed
                                                            ? "bg-emerald-500 text-white cursor-default"
                                                            : loading
                                                                 ? "bg-blue-400 text-white cursor-wait"
                                                                 : "bg-blue-1000 hover:bg-blue-700 active:scale-[0.99] text-white"
                                                       }`}
                                             >
                                                  {confirmed ? (
                                                       <span className="flex items-center justify-center gap-2">
                                                            <svg
                                                                 className="w-4 h-4"
                                                                 fill="none"
                                                                 stroke="currentColor"
                                                                 strokeWidth={2.5}
                                                                 viewBox="0 0 24 24"
                                                            >
                                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                            </svg>
                                                            Funds Released Successfully
                                                       </span>
                                                  ) : loading ? (
                                                       <span className="flex items-center justify-center gap-2">
                                                            <svg
                                                                 className="w-4 h-4 animate-spin"
                                                                 fill="none"
                                                                 viewBox="0 0 24 24"
                                                            >
                                                                 <circle
                                                                      className="opacity-25"
                                                                      cx="12"
                                                                      cy="12"
                                                                      r="10"
                                                                      stroke="currentColor"
                                                                      strokeWidth="4"
                                                                 />
                                                                 <path
                                                                      className="opacity-75"
                                                                      fill="currentColor"
                                                                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                                                 />
                                                            </svg>
                                                            Processing...
                                                       </span>
                                                  ) : (
                                                       "Release Rent to Landlord"
                                                  )}
                                             </button>
                                             <p className="text-center text-[11px] text-gray-1400">
                                                  Action requires 2-factor authentication
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}