"use client";

import TopBar from "@/app/components/common/TopBar";
import {
     ArrowLeft,
     Phone,
     Mail,
     Shield,
     Percent,
     Euro,
     CheckCircle,
     XCircle,
     FileText,
     HeartPulse,
     Pill,
     Stethoscope,
     Calendar,
     Info,
     Smile,
     EyeOff,
} from "lucide-react";

/* ================= TYPES ================= */

type VerificationItem = {
     label: string;
};

type CoverageItem = {
     label: string;
     value: string;
     icon: React.ReactNode;
};

type Benefit = {
     title: string;
     description: string;
     covered: boolean;
};

type ApplicationData = {
     name: string;
     policyId: string;
     phone: string;
     period: string;
     premium: string;
     status: string;
};

/* ================= DATA ================= */

const application: ApplicationData = {
     name: "Maria Schmidt",
     policyId: "POL-2024-789456",
     phone: "+49 123 456 789",
     period: "01 Oct 2024 → 30 Sep 2025",
     premium: "€ 1,188",
     status: "Pending Review",
};

const verificationItems: VerificationItem[] = [
     { label: "Policy Number" },
     { label: "Coverage Type" },
     { label: "Student Name" },
];

const coverageItems: CoverageItem[] = [
     {
          label: "Coverage Limit",
          value: "€250K",
          icon: <Shield className="w-5 h-5 text-blue-1000" />,
     },
     {
          label: "Co-pay Rate",
          value: "20%",
          icon: <Percent className="w-5 h-5 text-blue-1000" />,
     },
     {
          label: "Deductible",
          value: "€150",
          icon: <Euro className="w-5 h-5 text-blue-1000" />,
     },
];

const benefits = [
     {
          title: "General Practitioner Visits",
          description: "Unlimited visits",
          covered: true,
          icon: <Stethoscope className="w-4 h-4" />,
     },
     {
          title: "Hospitalization",
          description: "Up to 90 days/year",
          covered: true,
          icon: <HeartPulse className="w-4 h-4" />,
     },
     {
          title: "Prescription Medication",
          description: "80% coverage",
          covered: true,
          icon: <Pill className="w-4 h-4" />,
     },
     {
          title: "Dental Care",
          description: "Basic + preventive",
          covered: true,
          icon: <Smile className="w-4 h-4" />,
     },
     {
          title: "Vision Care",
          description: "Not included in this plan",
          covered: false,
          icon: <EyeOff className="w-4 h-4" />,
     },
];


function page() {
     return (
          <div>
               <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
                    <TopBar></TopBar>
                    <div className="p-6">
                         {/* ================= HEADER ================= */}
                         <div className="bg-white border my-6 border-gray-1000 rounded-lg p-4">
                              <div className="flex items-center justify-between gap-5">
                                   <div className="space-y-4">
                                        <button className="flex items-center gap-2 text-sm text-gray-1200">
                                             <ArrowLeft className="w-4 h-4" />
                                             Back to Applications
                                        </button>

                                        <div className="flex items-center gap-4">
                                             <div className="w-14 h-14 rounded-full bg-blue-1000/10 text-blue-1000 flex items-center justify-center font-semibold">
                                                  {application.name
                                                       .split(" ")
                                                       .map((n) => n[0])
                                                       .join("")}
                                             </div>

                                             <div>
                                                  <h2 className="text-2xl font-semibold text-black-1300">
                                                       {application.name}
                                                  </h2>
                                                  <p className="text-sm text-gray-5000">
                                                       Policy ID: <span className="text-black-1300">{application.policyId}</span>
                                                  </p>

                                                  <div className="flex items-center gap-4 mt-2 text-xs text-blue-2800">
                                                       <span className="flex items-center gap-1 border-r border-gray-500 pr-4">
                                                            <Mail className="w-4 h-4" /> Contact Student
                                                       </span>
                                                       <span className="flex items-center gap-1 text-gray-5000">
                                                            <Phone className="w-4 h-4" /> {application.phone}
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div>
                                        <div className="text-end">
                                             <span className="px-3 py-1 text-xs rounded-full border bg-yellow-1100/10 border-yellow-1100/30 text-yellow-1100">
                                                  {application.status}
                                             </span>
                                        </div>
                                        <div className="bg-gray-6800/50 rounded-lg p-4 flex gap-6 items-center">
                                             <div className="border-r border-gray-1000 pr-6">
                                                  <img src="/images/Allianz.png" alt="" />
                                             </div>
                                             <div className="border-r border-gray-1000 pr-6">
                                                  <p className="text-xs uppercase mb-2 text-gray-5000">
                                                       Policy Period
                                                  </p>
                                                  <p className="text-sm text-blue-2900 flex itesm-center gap-2 font-normal">
                                                       <Calendar className="w-4 h-4" />
                                                       {application.period}
                                                  </p>
                                             </div>

                                             <div>
                                                  <p className="text-xs uppercase text-gray-5000">
                                                       Total Premium
                                                  </p>
                                                  <p className="text-lg font-semibold text-blue-2900">
                                                       {application.premium}
                                                       <span className="text-sm text-gray-5000"> /year</span>
                                                  </p>
                                             </div>


                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* ================= MAIN GRID ================= */}
                         <div className="grid grid-cols-12 gap-6">

                              {/* LEFT */}
                              <div className="col-span-8 space-y-6">

                                   {/* Document */}
                                   <div className="bg-white border border-gray-1000 rounded-lg p-4">
                                        <div className="flex justify-between mb-4">
                                             <div>
                                                  <div className="flex items-center gap-2 text-blue-2900 font-normal text-sm">
                                                       <FileText className="w-5 h-5 text-blue-1000" />
                                                       Insurance Certificate
                                                  </div>
                                                  <span className="text-xs text-gray-5000">
                                                       Uploaded Oct 15, 2024
                                                  </span>
                                             </div>
                                        </div>

                                        <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center text-gray-1200">
                                             PDF Preview Area
                                        </div>
                                   </div>

                                   {/* Verification (Mapped) */}
                                   <div className="bg-white border border-gray-1000 rounded-lg p-4 space-y-4">
                                        <h3 className="text-sm font-semibold uppercase text-gray-5000">
                                             Document Verification
                                        </h3>

                                        {verificationItems.map((item) => (
                                             <div
                                                  key={item.label}
                                                  className="flex justify-between items-center border border-yellow-1100/30 bg-yellow-1100/5 rounded-lg px-4 py-3"
                                             >
                                                  <div className="flex items-center gap-2">
                                                       <Info className="w-5 h-5 text-yellow-1100" />
                                                       <span className="text-sm text-blue-2900">
                                                            {item.label}
                                                       </span>
                                                  </div>
                                                  <div className="flex gap-2">
                                                       <button className="flex items-center gap-3 py-1.5 px-2 text-blue-2900 text-sm">
                                                            <CheckCircle className="w-4 h-4" />
                                                            Verify
                                                       </button>
                                                       <button className="flex items-center gap-3 py-1.5 px-2 text-blue-2900 text-sm">
                                                            <XCircle className="w-4 h-4" />
                                                            Invalid
                                                       </button>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>

                              {/* RIGHT */}
                              <div className="col-span-4 space-y-6">
                                   {/* 🔵 University Bundle */}
                                   <div className="rounded-xl p-4 bg-blue-1000/10 border border-blue-1000/20 flex justify-between items-center">
                                        <div>
                                             <p className="text-xs text-blue-1000 uppercase font-medium">
                                                  University Bundle
                                             </p>
                                             <p className="text-sm font-semibold text-gray-1600">
                                                  TU Berlin Winter 2024 Partnership
                                             </p>
                                        </div>

                                        <div className="text-right">
                                             <p className="text-lg font-semibold text-blue-1000">
                                                  -15%
                                             </p>
                                             <p className="text-xs text-gray-1200">Applied</p>
                                        </div>
                                   </div>
                                   {/* Coverage Summary (Mapped) */}
                                   <div className="bg-white border border-gray-1000 rounded-lg p-4 space-y-4">
                                        <h3 className="text-sm font-bold uppercase text-gray-5000">
                                             Coverage Summary
                                        </h3>

                                        <div className="grid grid-cols-3 gap-4">
                                             {coverageItems.map((item) => (
                                                  <div
                                                       key={item.label}
                                                       className="bg-gray-6800/50 rounded-lg p-4 text-center"
                                                  >
                                                       <div className="flex justify-center mb-2">
                                                            {item.icon}
                                                       </div>
                                                       <p className="text-xl font-bold text-blue-2900">
                                                            {item.value}
                                                       </p>
                                                       <p className="text-xs leading-4 text-gray-5000">
                                                            {item.label}
                                                       </p>
                                                  </div>
                                             ))}
                                        </div>
                                   </div>

                                   {/* Benefits (Mapped) */}
                                   <div className="bg-white border border-gray-1000 rounded-lg p-4 space-y-4">
                                        <h3 className="text-sm font-bold uppercase text-gray-5000">
                                             Included Benefits
                                        </h3>

                                        {benefits.map((benefit) => (
                                             <div
                                                  key={benefit.title}
                                                  className={`flex justify-between items-center rounded-lg p-3 ${benefit.covered
                                                       ? "bg-green-3200/5"
                                                       : "bg-gray-6900/50 opacity-50"
                                                       }`}
                                             >
                                                  <div className="flex items-center gap-3">
                                                       <div
                                                            className={`p-2 rounded-lg ${benefit.covered
                                                                 ? "bg-green-3200/10 text-green-1600"
                                                                 : "bg-gray-200 text-gray-1200"
                                                                 }`}
                                                       >
                                                            {benefit.icon}
                                                       </div>

                                                       <div>
                                                            <p className="text-sm font-medium text-black-1300">
                                                                 {benefit.title}
                                                            </p>
                                                            <p className="text-xs text-gray-1200">
                                                                 {benefit.description}
                                                            </p>
                                                       </div>
                                                  </div>
                                                  <span
                                                       className={`text-xs px-3 py-1 rounded-full font-bold border ${benefit.covered
                                                            ? "bg-green-1600/10 border-green-1600/30 text-green-1600"
                                                            : "bg-gray-200 border-gray-300 text-gray-1200"
                                                            }`}
                                                  >
                                                       {benefit.covered ? "Covered" : "Not Included"}
                                                  </span>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default page
