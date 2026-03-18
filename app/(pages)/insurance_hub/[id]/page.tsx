"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import TopBar from "@/app/components/common/TopBar";
import { Clock, ChevronDown, AlertTriangle, CheckCheckIcon, CheckCircle, XCircle } from "lucide-react";
import {
  ArrowLeft, Phone, Mail, Shield, Percent, Euro,
  FileText, HeartPulse, Pill, Stethoscope, Calendar,
  Info, Smile, EyeOff, Search, ZoomIn, RotateCw,
  Maximize2, Download
} from "lucide-react";
import { useInsuranceHubStore } from "@/app/store/zustand/useInsuranceHubStore";


const verificationItems = [
  { label: "Policy Number" },
  { label: "Coverage Type" },
  { label: "Student Name" },
];

const coverageItems = [
  { label: "Coverage Limit", value: "€250K", icon: <Shield className="w-5 h-5 text-blue-1000" /> },
  { label: "Co-pay Rate",    value: "20%",   icon: <Percent className="w-5 h-5 text-blue-1000" /> },
  { label: "Deductible",     value: "€150",  icon: <Euro className="w-5 h-5 text-blue-1000" /> },
];

const benefits = [
  { title: "General Practitioner Visits", description: "Unlimited visits",         covered: true,  icon: <Stethoscope className="w-4 h-4" /> },
  { title: "Hospitalization",             description: "Up to 90 days/year",       covered: true,  icon: <HeartPulse className="w-4 h-4" /> },
  { title: "Prescription Medication",     description: "80% coverage",             covered: true,  icon: <Pill className="w-4 h-4" /> },
  { title: "Dental Care",                 description: "Basic + preventive",       covered: true,  icon: <Smile className="w-4 h-4" /> },
  { title: "Vision Care",                 description: "Not included in this plan",covered: false, icon: <EyeOff className="w-4 h-4" /> },
];


export default function PolicyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { getPolicyById } = useInsuranceHubStore();
  const policy = getPolicyById(id);

  if (!policy) {
    return (
      <div className="p-8 text-center text-gray-500">
        Policy <strong>{id}</strong> not found.
      </div>
    );
  }

  const initials = policy.student
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div>
      <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
        <TopBar />
        <div className="md:p-6 p-4">

          <div className="bg-white border my-6 border-gray-1000 rounded-lg p-4">
            <div className="flex 2xl:flex-nowrap flex-wrap items-center justify-between gap-5">
              <div className="space-y-4 2xl:w-auto w-full">
                <Link href="/insurance_hub" className="flex items-center gap-2 text-sm text-gray-1200">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Applications
                </Link>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-1000/10 text-blue-1000 flex items-center justify-center font-semibold">
                    {initials}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-black-1300">
                      {policy.student}
                    </h2>
                    <p className="text-sm text-gray-5000">
                      Policy ID: <span className="text-black-1300">{policy.id}</span>
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-blue-2800">
                      <span className="flex items-center gap-1 border-r border-gray-500 pr-4">
                        <Mail className="w-4 h-4" /> Contact Student
                      </span>
                      <span className="flex items-center gap-1 text-gray-5000">
                        <Phone className="w-4 h-4" /> —
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="2xl:w-auto w-full">
                <div className="text-end">
                  <span className="px-3 py-1 text-xs rounded-full border bg-yellow-1100/10 border-yellow-1100/30 text-yellow-1100">
                    {policy.status}
                  </span>
                </div>
                <div className="bg-gray-6800/50 rounded-lg p-4 md:flex-nowrap flex-wrap flex mt-6 gap-6 items-center">
                  <div className="border-r border-gray-1000 pr-6">
                    <img src="/images/Allianz.png" alt={policy.provider} />
                  </div>
                  <div className="border-r border-gray-1000 pr-6">
                    <p className="text-xs uppercase mb-2 text-gray-5000">Policy Period</p>
                    <p className="text-sm text-blue-2900 flex items-center gap-2 font-normal">
                      <Calendar className="w-4 h-4" />
                      {policy.startDate} → {policy.endDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-5000">Provider</p>
                    <p className="text-lg font-semibold text-blue-2900">{policy.provider}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid xl:grid-cols-12 gap-6">

            <div className="4xl:col-span-8 xl:col-span-7 space-y-6">

              <div className="bg-white border border-gray-1000 rounded-lg p-4">
                <div className="flex justify-between md:flex-nowrap flex-wrap gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-blue-2900 font-normal text-sm">
                      <FileText className="w-5 h-5 text-blue-1000" />
                      Insurance Certificate
                    </div>
                    <span className="text-xs text-gray-5000">Uploaded {policy.startDate}</span>
                  </div>
                  <div className="flex items-center gap-6 text-gray-700">
                    <Search className="w-5 h-5 cursor-pointer" />
                    <div className="flex items-center gap-3">
                      <span className="text-base font-medium">100%</span>
                      <ZoomIn className="w-5 h-5 cursor-pointer" />
                    </div>
                    <div className="h-6 w-px bg-gray-300" />
                    <RotateCw className="w-5 h-5 cursor-pointer" />
                    <Maximize2 className="w-5 h-5 cursor-pointer" />
                    <Download className="w-5 h-5 cursor-pointer" />
                  </div>
                </div>
                <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center text-gray-1200">
                  PDF Preview Area
                </div>
              </div>

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
                      <span className="text-sm text-blue-2900">{item.label}</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-3 py-1.5 px-2 text-blue-2900 text-sm">
                        <CheckCircle className="w-4 h-4" /> Verify
                      </button>
                      <button className="flex items-center gap-3 py-1.5 px-2 text-blue-2900 text-sm">
                        <XCircle className="w-4 h-4" /> Invalid
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="4xl:col-span-4 xl:col-span-5 space-y-6">
              <div className="rounded-xl p-4 bg-blue-1000/10 card-bg3 border border-blue-2800/20 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-2800/20 rounded-lg flex items-center justify-center">
                    <img src="/images/star-icon4.svg" alt="" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center w-fit mb-1 py-1 px-2.5 gap-1 bg-blue-2800/20 rounded-full">
                      <img src="/images/pencile-icon3.svg" alt="" />
                      <p className="text-xs text-blue-2800 uppercase font-bold">University Bundle</p>
                    </div>
                    <p className="text-base font-bold text-blue-2900">
                      {policy.source} Partnership
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[22px] font-bold text-blue-2800">-15%</p>
                  <p className="text-xs text-gray-5000">Applied</p>
                </div>
              </div>

              <div className="bg-white border border-gray-1000 rounded-lg p-4 space-y-4">
                <h3 className="text-sm font-bold uppercase text-gray-5000">Coverage Summary</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {coverageItems.map((item) => (
                    <div key={item.label} className="bg-gray-6800/50 rounded-lg p-4 text-center">
                      <div className="flex justify-center mb-2">{item.icon}</div>
                      <p className="text-xl font-bold text-blue-2900">{item.value}</p>
                      <p className="text-xs leading-4 text-gray-5000">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-1000 rounded-lg p-4 space-y-4">
                <h3 className="text-sm font-bold uppercase text-gray-5000">Included Benefits</h3>
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className={`flex justify-between items-center rounded-lg p-3 ${
                      benefit.covered ? "bg-green-3200/5" : "bg-gray-6900/50 opacity-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${benefit.covered ? "bg-green-3200/10 text-green-1600" : "bg-gray-200 text-gray-1200"}`}>
                        {benefit.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-black-1300">{benefit.title}</p>
                        <p className="text-xs text-gray-1200">{benefit.description}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-bold border ${
                      benefit.covered
                        ? "bg-green-1600/10 border-green-1600/30 text-green-1600"
                        : "bg-gray-200 border-gray-300 text-gray-1200"
                    }`}>
                      {benefit.covered ? "Covered" : "Not Included"}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-gray-1000 rounded-lg p-4 space-y-4">
                <h3 className="text-sm font-bold uppercase text-gray-5000">Provider Information</h3>
                <div className="flex items-center justify-between md:flex-nowrap flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <img src="/images/Allianz-2.png" alt="" />
                    <div>
                      <h6 className="text-base font-normal leading-6 text-blue-2900">{policy.provider}</h6>
                      <span className="text-sm font-normal leading-5 text-gray-5000">Student Insurance Division</span>
                    </div>
                  </div>
                  <div className="text-xs font-bold py-0.5 h-fit px-2.5 rounded-full bg-gray-6800 leading-4 text-blue-2900">
                    A+ Rated
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-9 2xl:-mx-6 gap-5 flex items-center flex-wrap justify-between border-b bg-white/95 p-4 border border-gray-7000">
            <div className="flex items-center gap-2 text-sm text-gray-5000 cursor-pointer">
              <Clock size={16} className="text-gray-500" />
              <span className="font-medium">Audit Log</span>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-5000">
              <span className="w-2 h-2 rounded-full bg-yellow-1100"></span>
              <span>Verification incomplete</span>
            </div>
            <div className="flex items-center sm:flex-nowrap flex-wrap gap-3">
              <button className="flex items-center gap-2 bg-gray22 border-gray-7100 border rounded-md px-4 py-2.5 text-sm text-blue-2900 hover:bg-gray-50">
                <AlertTriangle size={16} /> Request Correction
              </button>
              <button className="flex items-center gap-2 bg-green-3200/50 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700">
                <CheckCircle size={16} /> Approve & Activate Policy
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}