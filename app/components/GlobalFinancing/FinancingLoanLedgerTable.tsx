"use client";
import { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import Modal from "@/app/components/Modal";
import ProgressBar from "@/app/components/ProgressBar";

interface CaseItem {
  id: string
  applicant: string
  amount: string
  bank: string
  manager: {
    name: string
    phone: string
  }
  sla: string
  status: "Approved" | "Under Review" | "Pending" | "Rejected"
  statusIcon: string
  aiScore: number
  aiScoreIcon: string

}

const cases: CaseItem[] = [
  {
    id: "STD-2024-001",
    applicant: "Ahmed Benali",
    amount: "€25,000",
    bank: "Deutsche Bank",
    manager: { name: "Klaus Fischer", phone: "+49 170 123456" },
    sla: "3d",
    status: "Approved",
    statusIcon: "/images/checkgreendark.svg",
    aiScore: 87,
    aiScoreIcon: "/icons/aiScoregreen.svg",
  },
  {
    id: "STD-2024-002",
    applicant: "Marie Dupont",
    amount: "€18,500",
    bank: "BNP Paribas",
    manager: { name: "Jean-Pierre Moreau", phone: "+33 6 12345678" },
    sla: "7d",
    status: "Under Review",
    statusIcon: "/images/clock-yellow.svg",
    aiScore: 72,
    aiScoreIcon: "/icons/aiScoreblue.svg",
  },
  {
    id: "STD-2024-003",
    applicant: "Carlos Mendes",
    amount: "€32,000",
    bank: "Société Générale",
    manager: { name: "Isabella Laurent", phone: "+33 7 98765432" },
    sla: "12d",
    status: "Pending",
    statusIcon: "/icons/warning-dark.svg",
    aiScore: 58,
    aiScoreIcon: "/icons/aiScorered.svg",
  },
  {
    id: "STD-2024-004",
    applicant: "Fatima Zahra",
    amount: "€21,000",
    bank: "Deutsche Bank",
    manager: { name: "Klaus Fischer", phone: "+49 170 123456" },
    sla: "1d",
    status: "Approved",
    statusIcon: "/images/checkgreendark.svg",
    aiScore: 93,
    aiScoreIcon: "/icons/aiScoregreen.svg",
  },
  {
    id: "STD-2024-005",
    applicant: "Liam O'Brien",
    amount: "€15,000",
    bank: "ABN AMRO",
    manager: { name: "Pieter van den Berg", phone: "+31 6 87654321" },
    sla: "5d",
    status: "Under Review",
    statusIcon: "/images/clock-yellow.svg",
    aiScore: 65,
    aiScoreIcon: "/icons/aiScoreblue.svg",
  },
  {
    id: "STD-2024-006",
    applicant: "Yuki Tanaka",
    amount: "€28,000",
    bank: "BNP Paribas",
    manager: { name: "Sophie Martin", phone: "+33 6 55443322" },
    sla: "15d",
    status: "Rejected",
    statusIcon: "/images/cross-circle.svg",
    aiScore: 34,
    aiScoreIcon: "/icons/aiScorered.svg",
  },
  {
    id: "STD-2024-007",
    applicant: "Anna Kowalski",
    amount: "€19,500",
    bank: "Deutsche Bank",
    manager: { name: "Markus Weber", phone: "+49 171 654321" },
    sla: "2d",
    status: "Approved",
    statusIcon: "/images/checkgreendark.svg",
    aiScore: 88,
    aiScoreIcon: "/icons/aiScoregreen.svg",
  },
]
const ScoreConfig: any = {
  87: "bg-lightgreenNew4 text-green58 shadow-69xl",
  72: "bg-lighrgrey43 text-ElectricBlue2 shadow-70xl",
  58: "bg-bgRed12 text-red2100",
  93: "bg-lightgreenNew4 text-green58 shadow-69xl",
  65: "bg-lighrgrey43 text-ElectricBlue2 shadow-70xl",
  34: "bg-bgRed12 text-red2100",
  88: "bg-lightgreenNew4 text-green58 shadow-69xl",
}

const statusConfig: any = {
  Approved: "bg-lightgreenNew4 text-green58",
  "Under Review": "bg-yellow-3100 text-yellow-1100",
  Pending: "bg-gray-6100 text-ElectricBlue2",
  Rejected: "bg-gray-6100 text-red2100",
}
interface PaymentStat {
  value: number;
  label: string;
  color: string;
  bg: string;
}

const paymentStats: PaymentStat[] = [
  { value: 18, label: "On Time", color: "text-green57", bg: "bg-green57/10" },
  { value: 2, label: "Late", color: "text-yellow-1100", bg: "bg-yellow-1100/10" },
  { value: 0, label: "Missed", color: "text-red-1300", bg: "bg-red-1300/10" },
];


type DocumentStatus = "Verified" | "Pending";

interface Document {
  label: string;
  status: DocumentStatus;
}

const documents: Document[] = [
  { label: "Student ID", status: "Verified" },
  { label: "Proof of Income", status: "Verified" },
  { label: "Bank Statement", status: "Pending" },
  { label: "Enrollment Certificate", status: "Verified" },
];
const StatusBadge = ({ status }: { status: DocumentStatus }) => (
  <span
    className={`text-xs leading-4 font-normal w-15.75 h-6 rounded-full inline-flex items-center justify-center ${
      status === "Verified"
        ? "bg-green57/10 text-green57"
        : "bg-yellow-1100/10 text-yellow-1100"
    }`}
  >
    {status}
  </span>
);

export default function TransactionTable() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <div className="bg-white border border-solid border-gray-3100 rounded-lg">
        <div className="py-3 px-4 flex items-center justify-between border-b border-solid border-gray-3100">
          <ul className="flex items-center  gap-2">
            <li>
              <Link href={'#'} className="flex items-center justify-center text-grey5700 text-xs leading-4 font-normal gap-1.5 bg-gray-6100 rounded-md h-7 px-2.5">
                <Image
                  src="/images/filter-icon2.svg"
                  width="12"
                  height="12"
                  alt=""
                />
                Filters
              </Link>
            </li>
            <li>
              <Link href={'#'} className="flex items-center justify-center text-grey5700 text-xs leading-4 font-normal gap-1.5 bg-gray-6100 rounded-md h-7 px-2.5">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.9998 10.668L11.3332 13.3346L8.6665 10.668"
                    stroke="#6C7889"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.3335 13.3346V2.66797"
                    stroke="#6C7889"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 5.33464L4.66667 2.66797L7.33333 5.33464"
                    stroke="#6C7889"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.6665 2.66797V13.3346"
                    stroke="#6C7889"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Sort
              </Link>
            </li>
          </ul>
          <p className="text-grey5700 text-xs leading-4 font-normal">7 records</p>
        </div>
        <div className="overflow-x-auto ">
          <table className="2xl:w-full w-250">
            <thead>
              <tr className="bg-gray-6100/50">
                <th className="px-4 py-3 text-left text-xs leading-4 font-bold text-grey5700 uppercase">Dossier ID</th>
                <th className="px-4 py-3 text-left text-xs leading-4 font-bold text-grey5700 uppercase">Applicant</th>
                <th className="px-4 py-3 text-left text-xs leading-4 font-bold text-grey5700 uppercase">Amount</th>
                <th className="px-4 py-3 text-left text-xs leading-4 font-bold text-grey5700 uppercase">Instructing Bank</th>
                <th className="px-4 py-3 text-left text-xs leading-4 font-bold text-grey5700 uppercase">Case Manager</th>
                <th className="px-4 py-3 text-center text-xs leading-4 font-bold text-grey5700 uppercase">SLA (Days)</th>
                <th className="px-4 py-3 text-center text-xs leading-4 font-bold text-grey5700 uppercase">Status</th>
                <th className="px-4 py-3 text-center text-xs leading-4 font-bold text-grey5700 uppercase">AI Score</th>
              </tr>
            </thead>

            <tbody>
              {cases.map((item) => (
                <tr onClick={() => setIsOpen(true)}
                  key={item.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition last:border-b-0"
                >
                  <td className="px-4 py-5 text-sm text-ElectricBlue2 font-normal">
                    {item.id}
                  </td>

                  <td className="px-4 py-5 text-sm leading-5 font-normal text-black-1300">
                    {item.applicant}
                  </td>

                  <td className="px-4 py-5 text-sm leading-5 font-bold text-black-1300">
                    {item.amount}
                  </td>

                  <td className="px-4 py-5 text-sm leading-5 font-normal text-black-1300">
                    {item.bank}
                  </td>

                  <td className="px-4 py-5">
                    <div className="text-xs leading-4 font-normal text-black-1300">{item.manager.name}</div>
                    <div className="text-[10px] leading-5 font-normal text-grey5700">{item.manager.phone}</div>
                  </td>

                  <td className={`px-4 py-5 text-center text-sm leading-5 font-bold 
                ${item.status === "Approved"
                      ? "text-green58"
                      : item.status === "Under Review"
                        ? "text-yellow-1100"
                        : item.status === "Pending"
                          ? "text-blue-1100"
                          : item.status === "Rejected"
                            ? "text-red2100"
                            : ""
                    }`}>
                    {item.sla}
                  </td>
                  <td className="px-4 py-5 text-center">
                    <span
                      className={`px-2 h-7 text-[10px] font-bold leading-5 rounded-full inline-flex items-center gap-1 ${statusConfig[item.status]}`}
                    >
                      <Image
                        src={item.statusIcon}
                        width={12}
                        height={12}
                        alt={''}
                      />
                      {item.status}
                    </span>
                  </td>

                  <td className="px-4 py-5 text-center">
                    <span className={`px-2 py-1 text-xs font-bold rounded-md  text-gray-700 inline-flex items-center gap-2 justify-center ${ScoreConfig[item.aiScore]}`}>
                      <Image
                        src={item.aiScoreIcon}
                        width={12}
                        height={12}
                        alt={''}
                      />
                      {item.aiScore}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        panelClassName="max-w-[512px] bg-gray-1500 relative h-full overflow-x-auto md:p-6 p-4"
      >
        <Link onClick={() => setIsOpen(false)} href={"#"} className="flex items-center justify-center shadow-71xl rounded w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className=''>
          <h4 className='text-blue-1300 font-bold text-lg leading-7'>Credit Assessment</h4>
          <p className='text-gray-1900 font-normal text-sm leading-5 mt-1'>Financial breakdown for Emma Rodriguez</p>
        </div>
        <div className="mt-6 flex items-center gap-4 bg-gray-7500 rounded-lg p-4">
          <div className="w-12 h-12 rounded-full bg-blue-2200/10 flex items-center justify-center">
            <span className="text-lg font-bold text-blue-2200 leading-7">ER</span>
          </div>
          <div>
            <p className="text-base font-bold text-blue-1300 leading-6">Emma Rodriguez</p>
            <p className="text-sm text-gray-1900 font-normal leading-5">Technical University of Munich</p>
          </div>
        </div>
        <div className="mt-6 bg-white rounded-lg border border-gray-3600 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm leading-5 font-normal text-gray-1900 block">Credit Score</span>
            <span className="text-lg leading-7 font-bold text-green57 block">78/100</span>
          </div>
          <ProgressBar value={78} bgColor='bg-gray-7500' barColor='bg-green57' />
          <p className="text-gray-1900 text-sm leading-5 mt-3">
            Based on payment history, income stability, and debt levels.
          </p>
        </div>
        <div className="border-t border-solid border-gray-3600 pt-6 mt-6">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/images/wallet-blue.svg" width={16} height={16} alt="" />
            <h2 className="text-sm leading-6 font-bold text-blue-1300">Financial Overview</h2>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-7500 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Image src="/images/price-arrow-green.svg" width={16} height={16} alt="" />
                <span className="text-sm leading-4 text-green57 font-normal">Monthly Income</span>
              </div>
              <p className="text-lg leading-7 font-bold text-blue-1300">€1,200</p>
            </div>
            <div className="bg-gray-7500 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Image src="/images/price-down-arrow-yellow.svg" width={16} height={16} alt="" />
                <span className="text-sm leading-4 text-yellow-1100 font-normal">Monthly Expenses</span>
              </div>
              <p className="text-lg leading-7 font-bold text-blue-1300">€680</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-7500 rounded-lg p-3 mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-1900 text-sm leading-5 font-normal block">Debt-to-Income Ratio</span>
            <span className="text-yellow-1100 text-sm leading-5 font-normal block">56.7%</span>
          </div>
          <ProgressBar value={56} bgColor='bg-gray-1500' barColor='bg-yellow-1100' />
        </div>
        <div className="border-t border-solid border-gray-3600 pt-6 mt-6">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/icons/card-blue2.svg" width={16} height={16} alt="" />
            <h2 className="text-sm leading-6 font-bold text-blue-1300">Payment History</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {paymentStats.map((stat) => (
              <div
                key={stat.label}
                className={`${stat.bg} rounded-lg p-3 flex flex-col items-center`}
              >
                <span className={`text-2xl leading-8 font-bold ${stat.color}`}>{stat.value}</span>
                <span className="text-xs leading-4 text-gray-1900 font-normal">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-solid border-gray-3600 pt-6 mt-6">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/icons/file-check-blue.svg" width={16} height={16} alt="" />
            <h2 className="text-sm leading-6 font-bold text-blue-1300">Verification Documents</h2>
          </div>
          <div className="">
            {documents.map((doc) => (
              <div
                key={doc.label}
                className="flex items-center justify-between bg-gray-7500 rounded-lg p-3 mb-2 last:mb-2"
              >
                <span className="text-sm text-slate-600 font-medium">{doc.label}</span>
                <StatusBadge status={doc.status} />
              </div>
            ))}
          </div>
        </div> 
      </Modal >
    </>
  );
}