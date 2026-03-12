"use client";
import { useState } from 'react'

import Link from "next/link";
import Image from "next/image";
import CustomSelect from "@/app/components/CustomSelect";

type PaymentStatus = "Active" | "Pending" | "Frozen";
type RiskStatus = "Low" | "Medium" | "High";



interface Payment {
  id: number;
  userid: string;
  student: {
    name: string;
    email: string;
  },
  currency: {
    flag: string;
    name: string;
  },
  balance: string;
  available: string;
  hold: string;
  status: PaymentStatus;
  risk: RiskStatus
  reconciliation: string;
  actions: string;
}


const payments: Payment[] = [
  {
    id: 1,
    userid: "USR-2024-78542",
    student: {
      name: "Mohammed Ahmed Khan",
      email: "m.ahmed@student.edu.pk",
    },
    currency: {
      flag: "/icons/eur-icon.svg",
      name: "EUR",
    },
    balance: "€12,450.75",
    available: "€11,250.75",
    hold: "€1,200.00",
    status: "Active",
    risk: "Low",
    reconciliation: "2024-01-15 09:30",
    actions: "",
  }, {
    id: 2,
    userid: "USR-2024-78541",
    student: {
      name: "Sarah Johnson",
      email: "s.johnson@uni.edu",
    },
    currency: {
      flag: "/icons/usd.svg",
      name: "USD",
    },
    balance: "$8,325.50",
    available: "$8,325.50",
    hold: "—",
    status: "Active",
    risk: "Low",
    reconciliation: "2024-01-15 08:45",
    actions: "",
  }, {
    id: 3,
    userid: "USR-2024-78540",
    student: {
      name: "Li Wei Chen",
      email: "l.chen@student.cn",
    },
    currency: {
      flag: "/icons/eur-icon.svg",
      name: "EUR",
    },
    balance: "€45,200.00",
    available: "€35,200.00",
    hold: "€10,000.00",
    status: "Frozen",
    risk: "High",
    reconciliation: "2024-01-14 16:20",
    actions: "",
  }, {
    id: 4,
    userid: "USR-2024-78539",
    student: {
      name: "Emma Müller",
      email: "e.muller@stud.de",
    },
    currency: {
      flag: "/icons/eur-icon.svg",
      name: "EUR",
    },
    balance: "€3,450.25",
    available: "€3,450.25",
    hold: "—",
    status: "Active",
    risk: "Low",
    reconciliation: "2024-01-15 10:15",
    actions: "",
  }, {
    id: 5,
    userid: "USR-2024-78538",
    student: {
      name: "Ahmed Al-Rashid",
      email: "a.rashid@edu.ae",
    },
    currency: {
      flag: "/icons/usd.svg",
      name: "USD",
    },
    balance: "$28,750.00",
    available: "$23,750.00",
    hold: "$5,000.00",
    status: "Pending",
    risk: "Medium",
    reconciliation: "2024-01-13 14:00",
    actions: "",
  }, {
    id: 6,
    userid: "USR-2024-78537",
    student: {
      name: "Maria Garcia",
      email: "m.garcia@uni.es",
    },
    currency: {
      flag: "/icons/eur-icon.svg",
      name: "EUR",
    },
    balance: "€6,780.90",
    available: "€6,780.90",
    hold: "—",
    status: "Active",
    risk: "Low",
    reconciliation: "2024-01-15 07:30",
    actions: "",
  }, {
    id: 7,
    userid: "USR-2024-78536",
    student: {
      name: "James O'Connor",
      email: "j.oconnor@student.ie",
    },
    currency: {
      flag: "/icons/eur-icon.svg",
      name: "EUR",
    },
    balance: "€15,420.00",
    available: "€12,420.00",
    hold: "€3,000.00",
    status: "Active",
    risk: "Medium",
    reconciliation: "2024-01-14 11:45",
    actions: "",
  }, {
    id: 8,
    userid: "USR-2024-78535",
    student: {
      name: "Fatima Hassan",
      email: "f.hassan@uni.eg",
    },
    currency: {
      flag: "/icons/usd.svg",
      name: "USD",
    },
    balance: "$9,200.50",
    available: "$9,200.50",
    hold: "—",
    status: "Frozen",
    risk: "High",
    reconciliation: "2024-01-12 09:00",
    actions: "",
  },
];


const statusConfig = {
  Active: {
    classes: "bg-lightgreen18 border-lightgreen17/20 text-lightgreen17",
  },
  Pending: {
    classes: "bg-yellow-1100/10 border-yellow-1100/20 text-yellow-1100",
  },
  Frozen: {
    classes: "bg-red-1300/10 border-red-1300/20 text-red-1300",
  },
} as const;

const RiskConfig = {
  Low: {
    classes: "bg-green57/10  text-green57",
  },
  Medium: {
    classes: "bg-yellow-1100/10 text-yellow-1100",
  },
  High: {
    classes: "bg-red-1300/10 text-red-1300",
  },
} as const;




export default function PaymentsTransfersTable() {
  const [status, setStatus] = useState<string>("All Countries");


  return (
    <div>
      <div className="mt-6 bg-white border border-gray-3600 rounded-lg overflow-x-auto">
        <div className='p-4 flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between'>
          <div className=''>
            <h4 className='text-black-2000 text-lg leading-7 font-semibold'>Master Accounts Ledger</h4>
            <p className='text-SteelGray text-sm leading-5 font-normal'>Click any row to view detailed 360° Account Profile</p>
          </div>
          <div className="relative max-w-52.75 w-full">
            <CustomSelect className="w-full pl-9 bg-gray-6600 border border-gray-1000"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              options={[
                { label: "Export Master Ledger ", value: "Export Master Ledger" },
                { label: "Master Ledger2", value: "Master Ledger1" },
                { label: "Master Ledger3", value: "Master Ledger2" },
              ]}
            />
            <span className='flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-3'>
              <Image
                src="../icons/download-icon.svg"
                width='16'
                height='16'
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="bg-gray-2000 border-t border-b border-solid border-grey-5400 p-4 flex xl:flex-row flex-col flex-wrap items-center gap-3 4xl:flex-1">
          <div className="flex-1 flex items-center gap-3 w-full">
            <div className='relative flex-1 w-full'>
              <input type="text" className='text-sm font-normal text-SteelGray placeholder:text-SteelGray px-4 pl-9 h-10 bg-gray-1500 border border-grey-5400 rounded-md w-full outline-0' placeholder='Search by Transaction ID, Student Name...' />
              <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                <Image
                  src="../icons/search-dark.svg"
                  width='16'
                  height='16'
                  alt=""
                />
              </div>
            </div>
            <Link href={"#"} className='flex items-center'>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2076_9634)">
                  <path
                    d="M14.6663 2H1.33301L6.66634 8.30667V12.6667L9.33301 14V8.30667L14.6663 2Z"
                    stroke="#737B8C"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2076_9634">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
          <div className='xl:flex grid sm:grid-cols-4 grid-cols-2 xl:w-auto w-full items-center gap-3'>
            <div className="relative xl:w-28 w-full">
              <CustomSelect className="w-full text-center bg-gray-1500 border border-grey-5400"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                options={[
                  { label: "All…  ", value: "All…" },
                  { label: "Stripe", value: "Stripe" },
                  { label: "Adyen", value: "Adyen" },
                ]}
              />
            </div>
            <div className="relative xl:w-28 w-full">
              <CustomSelect className="w-full  bg-gray-1500 border border-grey-5400"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                options={[
                  { label: "All Status ", value: "All Status" },
                  { label: "Active", value: "Active" },
                  { label: "Frozen", value: "Frozen" },
                  { label: "Pending", value: "Pending" },
                ]}
              />
            </div>
            <div className="relative xl:w-28 w-full">
              <CustomSelect className="w-full  bg-gray-1500 border border-grey-5400"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                options={[
                  { label: "All Risk ", value: "All Risk" },
                  { label: "Low", value: "Low" },
                  { label: "High", value: "High" },
                  { label: "Medium", value: "Medium" },
                ]}
              />
            </div>
            <div className="relative xl:w-28 w-full">
              <CustomSelect className="w-full  bg-gray-1500 border border-grey-5400"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                options={[
                  { label: "All Countries ", value: "All Countries" },
                  { label: "EUR", value: "EUR" },
                  { label: "USD", value: "USD" },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="5xl:w-full w-325">
            <thead>
              <tr className="bg-gray-1800">
                <th className="px-4 py-3 text-left text-SteelGray font-inter font-semibold text-xs leading-4 uppercase">User ID</th>
                <th className="px-4 py-3 text-left text-SteelGray font-inter font-semibold text-xs leading-4 uppercase">Student Name</th>
                <th className="px-4 py-3 text-left text-SteelGray font-inter font-semibold text-xs leading-4 uppercase">Currency</th>
                <th className="px-4 py-3 text-left text-SteelGray font-inter font-semibold text-xs leading-4 uppercase">Total Balance</th>
                <th className="px-4 py-3 text-left text-SteelGray font-inter font-semibold text-xs leading-4 uppercase">Available</th>
                <th className="px-4 py-3 text-left text-SteelGray font-inter font-semibold text-xs leading-4 uppercase">On Hold</th>
                <th className="px-4 py-3 text-left text-SteelGray font-inter font-semibold text-xs leading-4 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-SteelGray font-inter font-semibold text-xs leading-4 uppercase">Risk</th>
                <th className="px-4 py-3 text-left text-SteelGray font-inter font-semibold text-xs leading-4 uppercase">Last Reconciliation</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>

            <tbody>
              {payments.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray1600 hover:bg-gray1700/50 transition last:border-b-0"
                >
                  <td className="px-4 py-5 text-black-2000 text-[13.8px] leading-5 font-medium">
                    {item.userid}
                  </td>
                  <td className="px-4 py-5">
                    <h4 className='text-black-2000 text-sm leading-5 font-medium'>{item.student.name}</h4>
                    <p className='text-SteelGray text-xs leading-4 font-normal'>{item.student.email}</p>
                  </td>
                  <td className="px-4 py-5">
                    <div className='flex items-center gap-1.5'>
                      <Image
                        src={item.currency.flag}
                        width={40}
                        height={20}
                        alt=""
                      />
                      <span className='inline-flex items-center text-black-2000 text-xs leading-4 font-medium bg-gray-2000 rounded-md h-5 px-2'>{item.currency.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-5 text-black-2000 text-sm leading-5 font-medium">
                    {item.balance}
                  </td>
                  <td className="px-4 py-5 text-lightgreen17 text-sm leading-5 font-normal">
                    {item.available}
                  </td>
                  <td className="px-4 py-5 text-SteelGray text-sm leading-5 font-normal">
                    {item.hold}
                  </td>

                  <td className="px-4 py-5">
                    <span
                      className={`inline-flex gap-1.5 items-center rounded-full justify-center font-inter font-medium text-xs leading-4 px-2.5 h-5 ${statusConfig[item.status].classes}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${item.status === "Active"
                          ? "bg-green57"
                          : item.status === "Pending"
                            ? "bg-yellow-1100"
                            : item.status === "Frozen"
                              ? "bg-red-1300"
                              : "bg-gray-400"
                          }`}
                      ></span>
                      {item.status}
                    </span>
                  </td>

                  <td className="px-4 py-5">
                    <span className={`font-inter font-normal text-xs leading-4 rounded-md px-2 h-6 gap-1.5 inline-flex items-center justify-center ${RiskConfig[item.risk].classes}`}>
                      {item.risk}
                    </span>
                  </td>

                  <td className="px-4 py-5 text-SteelGray text-sm leading-5 font-normal">
                    {item.reconciliation}
                  </td>
                  <td className="px-4 py-5">
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='bg-gray-7500/30 rounded-b-lg border-t border-solid border-gray-3600 px-4 py-3'>
          <div className='flex sm:flex-row flex-col sm:gap-0 gap-4 items-center justify-between'>
            <p className='text-gray-1900 font-inter font-normal sm:text-sm text-xs leading-5'>Showing 8 of 8 accounts</p>
            <ul className='flex items-center gap-2'>
              <li>
                <Link href={"#"} className='text-blue-1300 opacity-50 sm:text-sm text-xs leading-5 font-normal border border-solid border-gray-3600 bg-gray-1500 rounded-md h-9 w-[42px] inline-flex items-center justify-center'>
                  <Image
                    src="../icons/left-arrow.svg"
                    width='16'
                    height='16'
                    alt=""
                  />
                </Link>
              </li>
              <li>
                <Link href={"#"} className='text-black-2000 hover:bg-lightgreen17 hover:text-white sm:text-sm text-xs leading-5 font-normal border border-solid border-grey-5400 bg-gray-1500 rounded-md h-9 w-9 inline-flex items-center justify-center'>1</Link>
              </li>
              <li>
                <Link href={"#"} className='text-black-2000 hover:bg-lightgreen17 hover:text-white sm:text-sm text-xs leading-5 font-normal border border-solid border-grey-5400 bg-gray-1500 rounded-md h-9 w-9 inline-flex items-center justify-center'>2</Link>
              </li>
              <li>
                <Link href={"#"} className='text-black-2000 hover:bg-lightgreen17 hover:text-white sm:text-sm text-xs leading-5 font-normal border border-solid border-grey-5400 bg-gray-1500 rounded-md h-9 w-9 inline-flex items-center justify-center'>3</Link>
              </li>
              <li>
                <Link href={"#"} className='text-blue-1300 sm:text-sm text-xs leading-5 font-normal border border-solid border-gray-3600 bg-gray-1500 rounded-md h-9 w-[42px] inline-flex items-center justify-center'>
                  <Image
                    src="../icons/right-arrow2.svg"
                    width='16'
                    height='16'
                    alt=""
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


