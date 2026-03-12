"use client";
import { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import Modal from "@/app/components/Modal";
import ProgressBar from "@/app/components/ProgressBar";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

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
    className={`text-xs leading-4 font-normal w-15.75 h-6 rounded-full inline-flex items-center justify-center ${status === "Verified"
      ? "bg-green57/10 text-green57"
      : "bg-yellow-1100/10 text-yellow-1100"
      }`}
  >
    {status}
  </span>
);

export default function TransactionTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);


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
                <tr
                  key={item.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition last:border-b-0"
                >
                  <td onClick={() => setIsOpen(true)} className="px-4 py-5 text-sm text-ElectricBlue2 font-normal">
                    {item.id}
                  </td>

                  <td onClick={() => setIsOpen(true)} className="px-4 py-5 text-sm leading-5 font-normal text-black-1300">
                    {item.applicant}
                  </td>

                  <td onClick={() => setIsOpen(true)} className="px-4 py-5 text-sm leading-5 font-bold text-black-1300">
                    {item.amount}
                  </td>

                  <td onClick={() => setIsOpen(true)} className="px-4 py-5 text-sm leading-5 font-normal text-black-1300">
                    {item.bank}
                  </td>

                  <td onClick={() => setIsOpen(true)} className="px-4 py-5">
                    <div className="text-xs leading-4 font-normal text-black-1300">{item.manager.name}</div>
                    <div className="text-[10px] leading-5 font-normal text-grey5700">{item.manager.phone}</div>
                  </td>

                  <td onClick={() => setIsOpen(true)} className={`px-4 py-5 text-center text-sm leading-5 font-bold 
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
                  <td onClick={() => setIsOpen(true)} className="px-4 py-5 text-center">
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

                  <td onClick={() => setIsOpen2(true)} className="px-4 py-5 text-center">
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
      </Modal>


      {/* MODAL */}
      <Modal
        isOpen={isOpen2}
        onClose={() => setIsOpen2(false)}
        panelClassName="max-w-[1365px] bg-white relative md:p-6 p-4 md:h-auto h-full md:overflow-x-hidden  overflow-x-auto"
      >
        <div className='rounded-xl sm:px-6 sm:py-5 p-4 bg-linear-to-r from-violet123 to-ElectricBlue2'>
          <h4 className='text-white font-bold sm:text-xl text-[17px] leading-7 flex itams-center gap-2'><Image src="/icons/white-star.svg" width={20} height={20} alt="" />Fiche Diagnostic — AI Scoring</h4>
          <p className='text-white/70 font-normal text-sm leading-5 mt-1'>Ahmed Benali • Dossier #STD-2024-001 • Deutsche Bank • €25,000</p>
        </div>
        <div className='mt-6'>
          <TabGroup>
            <TabList className="border-b border-solid border-gray-3100 flex sm:gap-4 gap-2">
              <Tab className={({ selected }) =>
                selected
                  ? "border-b-2 border-solid  border-ElectricBlue2 text-ElectricBlue2 sm:text-sm text-xs leading-4 font-normal transition-colors sm:pl-5 sm:pr-3.5 px-2.5 py-3 duration-300 focus:outline-0 outline-0"
                  : "text-grey5700 border-b-2 border-solid border-transparent sm:text-sm text-xs leading-4 font-normal sm:pl-5 sm:pr-3.5 px-2.5 py-3 capitalize hover:text-ElectricBlue2 hover:border-ElectricBlue2 cursor-pointer transition-colors duration-300 focus:outline-0 outline-0"
              }>
                Diagnostic
              </Tab>
              <Tab className={({ selected }) =>
                selected
                  ? "border-b-2 border-solid  border-ElectricBlue2 text-ElectricBlue2 sm:text-sm text-xs leading-4 font-normal transition-colors sm:pl-5 sm:pr-3.5 px-2.5 py-3 duration-300 focus:outline-0 outline-0"
                  : "text-grey5700 border-b-2 border-solid border-transparent sm:text-sm text-xs leading-4 font-normal sm:pl-5 sm:pr-3.5 px-2.5 py-3 capitalize hover:text-ElectricBlue2 hover:border-ElectricBlue2 cursor-pointer transition-colors duration-300 focus:outline-0 outline-0"
              }>
                Recommendations
              </Tab>
              <Tab className={({ selected }) =>
                selected
                  ? "border-b-2 border-solid  border-ElectricBlue2 text-ElectricBlue2 sm:text-sm text-xs leading-4 font-normal transition-colors sm:pl-5 sm:pr-3.5 px-2.5 py-3 duration-300 focus:outline-0 outline-0"
                  : "text-grey5700 border-b-2 border-solid border-transparent sm:text-sm text-xs leading-4 font-normal sm:pl-5 sm:pr-3.5 px-2.5 py-3 capitalize hover:text-ElectricBlue2 hover:border-ElectricBlue2 cursor-pointer transition-colors duration-300 focus:outline-0 outline-0"
              }>
                Communication
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <div className='mt-6'>
                  <div className='flex md:flex-row flex-col xl:gap-19 gap-4'>
                    <div className='xl:max-w-124.25 md:max-w-87.5 max-w-full w-full border border-solid border-gray-3100 rounded-xl bg-white p-6'>
                      <h4 className='text-blue-1200 text-sm leading-5 font-bold text-center'>Credit Risk Meter</h4>
                      <div className='flex items-center justify-center mt-4'>
                        <Image
                          src="/images/Meter-img.png"
                          width="192"
                          height="96"
                          alt=""
                        />
                      </div>
                      <div className='text-center mt-4'>
                        <h4 className='text-[36px] leading-10 font-bold text-green58'>87</h4>
                        <p className='text-xs leading-4 font-normal text-grey5700 mt-1'>Low Risk</p>
                      </div>
                    </div>
                    <div className='flex-1 w-full'>
                      <div className='w-full border border-solid border-gray-3100 rounded-xl bg-white p-6'>
                        <h4 className='text-blue-1200 mb-4 text-sm leading-5 font-bold'>Key Scoring Factors</h4>
                        <div className='mb-4'>
                          <div className='flex items-center justify-between mb-1.5'>
                            <p className='text-blue-1200 text-xs leading-4 font-normal'>Income Stability</p>
                            <span className='text-ElectricBlue2 text-[10px] leading-3.75 bg-lighrgrey43 pt-[1.5px] font-bold rounded-full h-4.75 px-2'>82%</span>
                          </div>
                          <ProgressBar value={82} barColor='bg-ElectricBlue2' bgColor='bg-gray-6100' />
                        </div>
                        <div className='mb-4'>
                          <div className='flex items-center justify-between mb-1.5'>
                            <p className='text-blue-1200 text-xs leading-4 font-normal'>Repayment History</p>
                            <span className='text-green58 text-[10px] leading-3.75 bg-green58/20 pt-[1.5px] font-bold rounded-full h-4.75 px-2'>91%</span>
                          </div>
                          <ProgressBar value={91} barColor='bg-green58' bgColor='bg-gray-6100' />
                        </div>
                        <div className='mb-4'>
                          <div className='flex items-center justify-between mb-1.5'>
                            <p className='text-blue-1200 text-xs leading-4 font-normal'>Debt-to-Income Ratio</p>
                            <span className='text-yellow-1100 text-[10px] leading-3.75 bg-yellow-1100/20 pt-[1.5px] font-bold rounded-full h-4.75 px-2'>45%</span>
                          </div>
                          <ProgressBar value={45} barColor='bg-yellow-1100' bgColor='bg-gray-6100' />
                        </div>
                        <div className='mb-4'>
                          <div className='flex items-center justify-between mb-1.5'>
                            <p className='text-blue-1200 text-xs leading-4 font-normal'>Employment Duration</p>
                            <span className='text-ElectricBlue2 text-[10px] leading-3.75 bg-lighrgrey43 pt-[1.5px] font-bold rounded-full h-4.75 px-2'>73%</span>
                          </div>
                          <ProgressBar value={73} barColor='bg-ElectricBlue2' bgColor='bg-gray-6100' />
                        </div>
                        <div className=''>
                          <div className='flex items-center justify-between mb-1.5'>
                            <p className='text-blue-1200 text-xs leading-4 font-normal'>Credit Utilization</p>
                            <span className='text-green58 text-[10px] leading-3.75 bg-green58/20 pt-[1.5px] font-bold rounded-full h-4.75 px-2'>28%</span>
                          </div>
                          <ProgressBar value={28} barColor='bg-green58' bgColor='bg-gray-6100' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-6 flex items-start gap-3 bg-lightgreenNew4 border border-solid border-green58/20 rounded-xl p-5'>
                    <span className='flex items-center w-5 h-5.5'>
                      <Image
                        src="/images/checkgreendark.svg"
                        width="20"
                        height="22"
                        alt=""
                      />
                    </span>
                    <div className='flex-1 w-full'>
                      <h4 className='text-black-1200 text-sm leading-5 font-normal'>Algorithm Verdict: Eligible</h4>
                      <p className='text-grey5700 text-xs leading-4 font-normal mt-1'>Strong repayment history and stable income. Recommended for accelerated processing with Deutsche Bank Student Plus program.</p>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className='pt-6'>
                  <p className='text-grey5700 text-sm leading-5 font-normal'>AI-recommended bank products ranked by compatibility score.</p>
                  <div className='mt-4 flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between bg-white border border-solid border-gray-3100 rounded-xl sm:p-6 p-4'>
                    <div className='flex items-center gap-4'>
                      <span className='flex items-center justify-center w-10 h-10 rounded-lg bg-lighrgrey43'>
                        <Image
                          src="/images/building5.svg"
                          width="20"
                          height="22"
                          alt=""
                        />
                      </span>
                      <div className='flex-1 w-full'>
                        <h4 className='text-black-1200 text-sm leading-5 font-bold'>Deutsche Bank</h4>
                        <p className='text-grey5700 text-xs leading-4 font-normal'>Student Plus Loan • Rate: 3.2%</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-4'>
                      <div className='text-right'>
                        <h4 className='text-lg leading-7 font-bold text-green58'>94%</h4>
                        <p className='text-[10px] leading-3.75 font-normal text-grey5700'>Match Score</p>
                      </div>
                      <div className='text-white flex items-center justify-center text-[10px] leading-3.75 uppercase font-bold rounded h-5.75 px-2 bg-linear-to-r from-green58 to-green60'>Best Fit</div>
                    </div>
                  </div>
                  <div className='mt-4 flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between bg-white border border-solid border-gray-3100 rounded-xl sm:p-6 p-4'>
                    <div className='flex items-center gap-4'>
                      <span className='flex items-center justify-center w-10 h-10 rounded-lg bg-lighrgrey43'>
                        <Image
                          src="/images/building5.svg"
                          width="20"
                          height="22"
                          alt=""
                        />
                      </span>
                      <div className='flex-1 w-full'>
                        <h4 className='text-black-1200 text-sm leading-5 font-bold'>BNP Paribas</h4>
                        <p className='text-grey5700 text-xs leading-4 font-normal'>Éducation Flex • Rate: 3.5%</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-4'>
                      <div className='text-right'>
                        <h4 className='text-lg leading-7 font-bold text-ElectricBlue2'>87%</h4>
                        <p className='text-[10px] leading-3.75 font-normal text-grey5700'>Match Score</p>
                      </div>
                    </div>
                  </div>
                  <div className='mt-4 flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between bg-white border border-solid border-gray-3100 rounded-xl sm:p-6 p-4'>
                    <div className='flex items-center gap-4'>
                      <span className='flex items-center justify-center w-10 h-10 rounded-lg bg-lighrgrey43'>
                        <Image
                          src="/images/building5.svg"
                          width="20"
                          height="22"
                          alt=""
                        />
                      </span>
                      <div className='flex-1 w-full'>
                        <h4 className='text-black-1200 text-sm leading-5 font-bold'>Société Générale</h4>
                        <p className='text-grey5700 text-xs leading-4 font-normal'>Campus Credit • Rate: 3.8%</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-4'>
                      <div className='text-right'>
                        <h4 className='text-lg leading-7 font-bold text-yellow-1100'>79%</h4>
                        <p className='text-[10px] leading-3.75 font-normal text-grey5700'>Match Score</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className='pt-6'>
                  <div className=''>
                    <div className=''>
                      <div className='bg-yellow2200 rounded-2xl py-2.5 px-4 mb-4 max-w-fit'>
                        <div className='flex items-center gap-2'>
                          <h4 className='text-blue-1300/80 text-sm leading-4 font-normal'>Ahmed Hassan</h4>
                          <span className='text-gray-1900 text-xs leading-4 font-normal'>10:23 AM</span>
                        </div>
                        <p className='text-blue-1300 text-sm leading-5 font-normal mt-1 max-w-fit'>
                          Hello, I tried to pay my housing deposit of €500 but the transaction failed. My bank shows the <br />
                          amount was debited but I didn't receive any confirmation from StudPay.
                        </p>
                      </div>
                      <div className='flex items-center justify-end'>
                        <div className='bg-gray-2000 rounded-2xl py-2.5 px-4  mb-4'>
                          <div className='flex items-center gap-2'>
                            <h4 className='text-blue-1300/80 text-sm leading-4 font-normal'>Sarah (Support)</h4>
                            <span className='text-gray-1900 text-xs leading-4 font-normal'>10:25 AM</span>
                          </div>
                          <p className='text-blue-1300 text-sm leading-5 font-normal mt-1 max-w-fit'>
                            Hi Ahmed, I'm sorry to hear about this issue. Let me check your transaction details right away. <br />
                            Can you please share the last 4 digits of the card you used?
                          </p>
                        </div>
                      </div>
                      <div className='bg-yellow2200 rounded-2xl py-2.5 px-4 mb-4 max-w-fit'>
                        <div className='flex items-center gap-2'>
                          <h4 className='text-blue-1300/80 text-sm leading-4 font-normal'>Ahmed Hassan</h4>
                          <span className='text-gray-1900 text-xs leading-4 font-normal'>10:27 AM</span>
                        </div>
                        <p className='text-blue-1300 text-sm leading-5 font-normal mt-1 max-w-fit'>
                          Yes, the card ends with 4521. The transaction was at 9:45 AM today.
                        </p>
                      </div>
                      <div className='flex flex-col items-center justify-end'>
                        <div className='bg-yellow2200 ml-auto border border-solid border-yellow-1100/30 rounded-2xl py-2.5 px-4  mb-4'>
                          <div className='flex items-center gap-2'>
                            <h4 className='text-blue-1300/80 text-sm leading-4 font-normal'>Sarah → Finance Team</h4>
                            <span className='flex items-center'><Image src="/icons/lock-yellow.svg" width={12} height={12} alt="" /></span>
                            <span className='text-gray-1900 text-xs leading-4 font-normal'>10:28 AM</span>
                          </div>
                          <p className='text-blue-1300 text-sm leading-5 font-normal mt-1 max-w-fit'>
                            Need to check Stripe logs for transaction around 9:45 AM, card ending 4521. Student claims <br />
                            amount debited but no confirmation. Possible timeout issue?
                          </p>
                        </div>
                        <div className='bg-gray-2000 ml-auto border border-solid border-gray-2000/30 rounded-2xl py-2.5 px-4  mb-4'>
                          <div className='flex items-center gap-2'>
                            <h4 className='text-blue-1300/80 text-sm leading-4 font-normal'>Sarah (Support)</h4>
                            <span className='text-gray-1900 text-xs leading-4 font-normal'>10:32 AM</span>
                          </div>
                          <p className='text-blue-1300 text-sm leading-5 font-normal mt-1 max-w-141.25 w-full'>
                            Thank you, Ahmed. I can see your transaction in our system. It appears there was a timeout
                            during processing. The payment was actually successful but the confirmation email wasn't
                            sent. I'm processing the booking now and you'll receive confirmation within 5 minutes.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='bg-gray-1500 rounded-lg border border-solid border-gray-3600'>
                      <div className=''>
                        <input type='text' className='text-gray-1900 placeholder:text-gray-1900 text-sm leading-3.5 font-normal outline-0 w-full px-3 py-2 h-13' placeholder='Type your reply...' />
                      </div>
                      <div className='flex items-center justify-between border-t border-solid border-gray-3600/50 pt-2 pb-3.5 px-2'>
                        <Link href={"#"} className='flex items-center justify-center w-8 h-8'>
                          <Image src="/icons/attachment.svg" width={16} height={16} alt="" />
                        </Link>
                        <Link href={"#"} className='flex items-center justify-center gap-4 bg-blue1400 rounded-md h-9 px-3 text-white text-sm leading-5'>
                          <Image src="/icons/send-icon.svg" width={16} height={16} alt="" className='brightness-10000' />
                          Send Reply
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>

      </Modal>
    </>
  );
}