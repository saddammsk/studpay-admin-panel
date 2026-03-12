"use client";

import { useState } from "react";
import {
     ArrowLeft,
     MoreVertical,
     RefreshCw,
     FileText,
     Key,
     Wallet,
     CalendarDays,
     TrendingUp,
     Download,
     ExternalLink,
     ShieldCheck,
     AlertTriangle,
     CreditCard,
     Check,
     FileEdit,
     ArrowDown,
     File,
     CheckCircle,
     Info,
     Shield,
} from "lucide-react";

type StepStatus = "complete" | "active" | "pending";

interface Step {
     label: string;
     sublabel: string;
     status: StepStatus;
     icon: React.ReactNode;
}

const steps: Step[] = [
     {
          label: "Fee Paid",
          sublabel: "Booking fee received",
          status: "complete",
          icon: <Check className="w-5 h-5" />,
     },
     {
          label: "Contract Signed",
          sublabel: "Agreement executed",
          status: "active",
          icon: <FileEdit className="w-5 h-5" />,
     },
     {
          label: "Key Handover",
          sublabel: "Keys transferred",
          status: "pending",
          icon: <Key className="w-5 h-5" />,
     },
     {
          label: "Funds Released",
          sublabel: "Payment to landlord",
          status: "pending",
          icon: <Wallet className="w-5 h-5" />,
     },
];

function StepIndicator({ step, index }: { step: Step; index: number }) {
     return (
          <div className="flex flex-col items-center gap-2 flex-1">
               <div className="relative flex items-center w-full">
                    {index > 0 && (
                         <div
                              className={`absolute left-0 right-1/2 h-0.5 -translate-y-0 top-1/2 -translate-y-1/2 ${step.status === "complete" || step.status === "active"
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
                                        ? "bg-white border-emerald-500 text-emerald-500"
                                        : "bg-gray-7500 border-gray-7500 text-gray-400"
                                   }`}
                         >
                              {step.icon}
                         </div>
                    </div>
               </div>
               <div className="text-center">
                    <p
                         className={`text-sm font-semibold ${step.status === "pending" ? "text-gray-1900" : "text-blue-1300"
                              }`}
                    >
                         {step.label}
                    </p>
                    <p className="text-[11px] text-gray-1900">{step.sublabel}</p>
               </div>
          </div>
     );
}

function FinancialSplit() {
     return (
          <div className="bg-[url(/images/body-bg.png)] 4xl:px-14 bg-cover p-4 bg-no-repeat  xl:-m-8 -m-4 font-inter">
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
               <div className="flex items-center justify-between pb-4 border-b border-gray-3600">
                    <div className="flex items-center gap-2">
                         <div className="bg-OxfordBlue2/10 rounded-lg w-8 h-8 flex items-center justify-center">
                              <FileText className="w-4 h-4 text-blue-1300" />
                         </div>
                         <div>
                              <p className="font-semibold text-blue-1300 text-sm">
                                   Financial Split
                              </p>
                         </div>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-semibold text-white bg-lightgreen17 border border-lightgreen17 rounded-full px-3 py-0.5">
                         PAID
                    </span>
               </div>
               <div className="flex flex-col gap-3">
                    <div className="flex items-center bg-gray-7500/50 p-4 rounded-lg justify-between">
                         <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-gray-800 inline-block" />
                              <span className="text-sm text-gray-700">Total Student Payment</span>
                         </div>
                         <span className="text-lg font-bold text-blue-1300">
                              1.000,00 €
                         </span>
                    </div>

                    <div className="flex flex-col gap-2 pl-3">
                         <div className="flex items-center p-2 border-l-2 border-gray-1900/30 border-dashed justify-between">
                              <div className="flex items-center gap-2">
                                   <span className="w-3 h-0.5 bg-yellow-1100 inline-block" />
                                   <span className="text-sm text-gray-1900">Booking Fee</span>
                                   <span className="text-xs text-yellow-1100 rounded px-1.5 py-0.5">
                                        StudPay
                                   </span>
                              </div>
                              <span className="text-sm font-semibold text-yellow-1100">
                                   -299,00 €
                              </span>
                         </div>
                         <div className="flex items-center p-2 border-l-2 border-gray-1900/30 border-dashed justify-between">
                              <div className="flex items-center gap-2">
                                   <span className="w-3 h-0.5 bg-yellow-1100 inline-block" />
                                   <span className="text-sm text-gray-1900">Commission</span>
                                   <span className="text-xs text-yellow-1100  rounded px-1.5 py-0.5">
                                        StudPay 8%
                                   </span>
                              </div>
                              <span className="text-sm font-semibold text-yellow-1100">-80,00 €</span>
                         </div>
                    </div>

                    <div className="flex justify-center items-center gap-4">
                         <div className="w-full h-[1px] bg-gray-3600 flex-1"></div>
                         <ArrowDown className="w-4 h-4 text-gray-1900" />
                         <div className="w-full h-[1px] bg-gray-3600 flex-1"></div>
                    </div>
               </div>

               <div className="bg-lightgreen17/10 border border-lightgreen17/20 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                         <TrendingUp className="w-4 h-4 text-emerald-600" />
                         <span className="text-sm font-semibold text-blue-1300">
                              Final Payout to Landlord
                         </span>
                    </div>
                    <span className="md:text-xl text-base block font-bold text-lightgreen17">621,00 €</span>
               </div>

               <p className="text-xs text-gray-1900 text-center">
                    1.000,00 € - 299,00 € - 80,00 € = 621,00 €
               </p>
          </div>
     );
}

function RentalAgreement() {
     return (
          <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-4">
               <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                         <div className="bg-OxfordBlue2/10 rounded-lg w-8 h-8 flex items-center justify-center">
                              <File className="w-4 h-4 text-blue-1300" />
                         </div>
                         <div>
                              <p className="font-semibold text-blue-1300 text-sm">
                                   Financial Split
                              </p>
                              <span className="text-xs leading-4 text-gray-1900 block">Signed Jan 18, 2024</span>
                         </div>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-semibold text-lightgreen17 bg-lightgreen17/10 rounded-full px-3 py-1">
                         <CheckCircle className="w-3 h-3" />
                         verified
                    </span>
               </div>

               <div className="border border-gray-200 rounded-lg p-5 flex flex-col gap-4">
                    <div className="text-center border-b border-gray-100 pb-3">
                         <p className="font-bold text-blue-1300 text-lg tracking-wide uppercase">
                              Rental Agreement
                         </p>
                         <p className="text-xs text-gray-400 mt-0.5">
                              Rental_Agreement_BK-2024-00847.pdf
                         </p>
                    </div>

                    <div className="flex flex-col gap-2.5">
                         {[
                              { label: "Tenant:", value: "Maria Schmidt" },
                              { label: "Landlord:", value: "Hans Müller" },
                              { label: "Property:", value: "Apt 4B, Hauptstraße 23" },
                              { label: "Monthly Rent:", value: "€800.00" },
                              { label: "Lease Period:", value: "12 months" },
                         ].map(({ label, value }) => (
                              <div key={label} className="flex justify-between items-center">
                                   <span className="text-sm text-gray-1900">{label}</span>
                                   <span className="text-sm text-blue-1300">{value}</span>
                              </div>
                         ))}
                    </div>

                    <div className="border-t border-b pb-6 border-gray-100 pt-4 grid grid-cols-2 gap-4">
                         <div className="flex flex-col items-center gap-1">
                              <span className="text-xs text-gray-400 italic">Maria Schmidt</span>
                              <div className="w-full border-b border-gray-300  border-dashed" />
                              <span className="text-[10px] text-gray-400">Tenant Signature</span>
                         </div>
                         <div className="flex flex-col items-center gap-1">
                              <span className="text-xs text-gray-400 italic">Hans Müller</span>
                              <div className="w-full border-b border-gray-300 border-dashed" />
                              <span className="text-[10px] text-gray-400">
                                   Landlord Signature
                              </span>
                         </div>
                    </div>

                    <div className="flex items-center gap-4 pt-1">
                         <button className="flex items-center gap-1.5 text-xs py-2 px-3 text-gray-1900 hover:text-gray-800 transition-colors">
                              <Download className="w-3.5 h-3.5" />
                              Download
                         </button>
                         <button className="flex items-center gap-1.5 text-xs py-2 px-3 text-gray-1900 hover:text-gray-800 transition-colors">
                              <ExternalLink className="w-3.5 h-3.5" />
                              Full View
                         </button>
                    </div>
               </div>

               <div className="grid md:grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-normal py-2.5 px-4 rounded-lg transition-colors">
                         <ShieldCheck className="w-4 h-4" />
                         Verify Signature
                    </button>
                    <button className="flex items-center justify-center bg-gray-1500 gap-2 border border-gray-200 hover:bg-gray-50 text-blue-1300 text-sm font-normal py-2.5 px-4 rounded-lg transition-colors">
                         <Info className="w-4 h-4" />
                         Request Correction
                    </button>
               </div>
          </div >
     );
}

export default function HousingDashboard() {
     const [activeTab] = useState("booking");

     return (
          <div className="bg-[url(/images/body-bg.png)] bg-cover p-4 bg-no-repeat xl:mt-[-45px] mt-[-35px] xl:-m-8 -m-4 font-inter">
               <main className="md:px-4 md:py-6 flex flex-col gap-6">
                    <div className="">
                         <div className="flex items-center justify-between">
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
                    </div>

                    <div className="bg-white rounded-lg border border-gray-3600 md:p-6 p-2">
                         <p className="text-sm font-semibold text-gray-700 mb-5">
                              Booking Progress
                         </p>
                         <div className="flex items-start">
                              {steps.map((step, i) => (
                                   <StepIndicator key={step.label} step={step} index={i} />
                              ))}
                         </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <FinancialSplit />
                         <RentalAgreement />
                    </div>
               </main>

               <footer className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-3">
                    <div className="max-w-5xl mx-auto flex items-center flex-wrap gap-5 justify-between">
                         <div className="flex items-center gap-2 text-sm text-gray-1900">
                              <Shield className="w-3.5 h-3.5" />
                              All transactions are secured and logged
                         </div>
                         <div className="flex items-center flex-wrap gap-3">
                              <button className="flex items-center gap-1.5 border border-red-200 bg-gray-1500 text-red-500 hover:bg-red-50 text-sm font-normal py-2 px-4 rounded-lg transition-colors">
                                   <AlertTriangle className="w-3.5 h-3.5" />
                                   Open Dispute
                              </button>
                              <button className="flex items-center gap-1.5 border border-emerald-200 bg-gray-1500 text-emerald-600 hover:bg-emerald-50 text-sm font-normal py-2 px-4 rounded-lg transition-colors">
                                   <CreditCard className="w-3.5 h-3.5" />
                                   Confirm 299,00 € Payment
                              </button>
                              <button className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-normal py-2 px-4 rounded-lg transition-colors">
                                   <img src="/images/rent-icon.svg" alt="" />
                                   Release Rent to Landlord
                              </button>
                         </div>
                    </div>
               </footer>
          </div>
     );
}