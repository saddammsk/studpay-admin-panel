"use client";
import { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import CustomSelect from "@/app/components/CustomSelect";
import Modal from "@/app/components/Modal";

interface Transaction {
  id: number;
  tag: string;
  DueDate: string;
  principal: string;
  interest: string;
  fees: string;
  total: string;
  status: "Paid" | "Late" | "Upcoming";
  action: string;
}


const statusConfig = {
  Paid: "bg-yellow1800 border-lightgreen17/20 text-lightgreen17",
  Late: "bg-yellow1800 border-red-1300/20 text-red-1300",
  Upcoming: "bg-gray-1600 border-gray-1000 text-gray-1200",
} as const;

const transactions: Transaction[] = [
  {
    id: 1,
    tag: "1",
    DueDate: "Sep 15, 2024",
    principal: "$450.00",
    interest: "$25.00",
    fees: "$0.00",
    total: "$475.00",
    status: "Paid",
    action: "Manual Settle",
  }, {
    id: 2,
    tag: "2",
    DueDate: "Oct 15, 2024",
    principal: "$450.00",
    interest: "$23.75",
    fees: "$0.00",
    total: "$473.75",
    status: "Paid",
    action: "Manual Settle",
  }, {
    id: 3,
    tag: "3",
    DueDate: "Nov 15, 2024",
    principal: "$450.00",
    interest: "$22.50",
    fees: "$0.00",
    total: "$472.50",
    status: "Paid",
    action: "Manual Settle",
  }, {
    id: 4,
    tag: "4",
    DueDate: "Dec 15, 2024",
    principal: "$450.00",
    interest: "$21.25",
    fees: "$15.00",
    total: "$486.25",
    status: "Late",
    action: "Manual Settle",
  }, {
    id: 5,
    tag: "5",
    DueDate: "Jan 15, 2025",
    principal: "$450.00",
    interest: "$20.00",
    fees: "$0.00",
    total: "$470.00",
    status: "Paid",
    action: "Manual Settle",
  }, {
    id: 6,
    tag: "6",
    DueDate: "Feb 15, 2025",
    principal: "$450.00",
    interest: "$18.75",
    fees: "$0.00",
    total: "$468.75",
    status: "Upcoming",
    action: "Manual Settle",
  }, {
    id: 7,
    tag: "7",
    DueDate: "Mar 15, 2025",
    principal: "$450.00",
    interest: "$17.50",
    fees: "$0.00",
    total: "$467.50",
    status: "Upcoming",
    action: "Manual Settle",
  }, {
    id: 8,
    tag: "8",
    DueDate: "Apr 15, 2025",
    principal: "$450.00",
    interest: "$16.25",
    fees: "$0.00",
    total: "$466.25",
    status: "Upcoming",
    action: "Manual Settle",
  }, {
    id: 9,
    tag: "9",
    DueDate: "May 15, 2025",
    principal: "$450.00",
    interest: "$15.00",
    fees: "$0.00",
    total: "$465.00",
    status: "Upcoming",
    action: "Manual Settle",
  }, {
    id: 10,
    tag: "10",
    DueDate: "Jun 15, 2025",
    principal: "$450.00",
    interest: "$13.75",
    fees: "$0.00",
    total: "$463.75",
    status: "Upcoming",
    action: "Manual Settle",
  },

];

export default function TransactionTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  return (
    <>
      <div className="overflow-x-auto">
        <table className="4xl:w-full w-200">
          <thead>
            <tr className="bg-gray-1600/50 border-b border-gray-1000">
              <th className="px-4 py-3.5 text-left text-sm leading-5 font-semibold text-blue-1300">
                #
              </th>
              <th className="px-4 py-3.5 text-left text-sm leading-5 font-semibold text-blue-1300">
                Due Date
              </th>
              <th className="px-4 py-3.5 text-left text-sm leading-5 font-semibold text-blue-1300">
                Principal
              </th>
              <th className="text-left px-4 py-3.5  text-sm leading-5 font-semibold text-blue-1300">
                Interest
              </th>
              <th className="px-4 py-3.5 text-left text-sm leading-5 font-semibold text-blue-1300">
                Fees
              </th>
              <th className="px-4 py-3.5 text-left text-sm leading-5 font-semibold text-blue-1300">
                Total
              </th>
              <th className="px-4 py-3.5 text-center text-sm leading-5 font-semibold text-blue-1300">
                Status
              </th>
              <th className="px-4 py-3.5 text-left text-sm leading-5 font-semibold text-blue-1300">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} className={`border-b border-grey-5400 last:border-b-0 transition
    ${txn.id === 4 ? "bg-RosePink/30" : "hover:bg-grey5600/20"}
  `}>
                <td className="p-4 text-blue-1300 text-sm leading-5 font-medium">
                  <div>{txn.tag}</div>
                </td>
                <td className="p-4 text-blue-1300 text-sm leading-5 font-normal">
                  <div>{txn.DueDate}</div>
                </td>
                <td className="p-4 text-blue-1300 text-sm leading-5 font-normal">{txn.principal}</td>
                <td className="p-4 text-blue-1300 text-sm leading-5 font-normal">
                  <div>{txn.interest}</div>
                </td>
                <td className="p-4 text-blue-1300 text-sm leading-5 font-normal">
                  <div>{txn.fees}</div>
                </td>
                <td className="p-4 text-blue-1300 text-sm leading-5 font-bold">
                  <div>{txn.total}</div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span
                      className={`px-2.5 h-5.5 inline-flex items-center gap-1 rounded-full font-semibold text-xs leading-4 border border-solid ${statusConfig[txn.status]}`}
                    >
                      {txn.status}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    {(txn.status === "Late" || txn.status === "Upcoming") && (
                      <Link onClick={() => setIsOpen(true)}
                        href="#"
                        className="inline-flex items-center justify-center border border-solid border-gray-1000 bg-white rounded-md h-7 text-xs leading-4 font-medium text-blue-13 px-2"
                      >
                        Manual Settle
                      </Link>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/****** MANUAL SETTLE Modal *******/}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        panelClassName="max-w-[520px]  bg-gray-1500 relative sm:overflow-y-hidden sm:h-auto h-full border-0 overflow-y-auto"
      >
        <span className='bg-linear-to-r from-royalBlue131 from-0 via-royalBlue131/70 via-50% to-royalBlue131 to-100% h-1.5 block w-full absolute top-0 left-0 rounded-t-xl'></span>
        <Link onClick={() => setIsOpen(false)} href={"#"} className="flex items-center justify-center rounded-full w-4 h-4 absolute sm:top-4 sm:right-4 top-3 right-3">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className='sm:p-6 p-4'>
          <div className=''>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-royalBlue132">
                <Image
                  src="/icons/sheild-dark-blue2.svg"
                  width="16"
                  height="16"
                  alt=""
                />
              </div>
              <h2 className="sm:text-[19.5px] text-base tracking-[-0.5px] font-bold text-blue-1300 leading-7">
                Manual Installment Settlement
              </h2>
            </div>
            <p className="text-lighrgrey48 text-[13px] font-normal leading-[22.8px]">
              Securely record a manual payment for this installment.
            </p>
            <div className='grid grid-cols-2 gap-3 mt-3'>
              <div className='flex items-center gap-3 bg-lighrgrey47/50 border border-solid border-lighrgrey49/70 rounded-xl p-3'>
                <span className='w-4 h-4 flex items-center justify-center'>
                  <Image
                    src="/icons/date-icon.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                </span>
                <div className='flex-1 w-full'>
                  <span className='text-lighrgrey48 text-[11.4px] leading-4 block'>Due Date</span>
                  <h4 className="text-[13.1px] font-bold text-Black236 leading-5">
                    Mar 15, 2025
                  </h4>
                </div>
              </div>
              <div className='flex items-center gap-3 bg-lighrgrey47/50 border border-solid border-lighrgrey49/70 rounded-xl p-3'>
                <span className='w-4 h-4 flex items-center justify-center'>
                  <Image
                    src="/images/doller-icon.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                </span>
                <div className='flex-1 w-full'>
                  <span className='text-lighrgrey48 text-[11.4px] leading-4 block'>Amount</span>
                  <h4 className="text-[13.1px] font-bold text-Black236 leading-5">
                    $468.75
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <label className='text-blue-1300 block mb-2 font-normal text-[13.5px] leading-5'>Payment Source</label>
            <CustomSelect
              className='shadow-57xl'
              options={[
                { label: 'How did the student pay?', value: 'How did the student pay?' },
                { label: '2000', value: '2000' }
              ]}
            />
          </div>
          <div className='mt-4'>
            <label className='text-blue-1300 block mb-2 font-normal text-[13.1px] leading-5'>Receipt / Proof of Payment</label>
            <label className="group cursor-pointer flex flex-col items-center bg-lighrgrey41/30 border border-dashed border-SteelGray/30 rounded-xl p-6.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M35 25V31.6667C35 32.5507 34.6488 33.3986 34.0237 34.0237C33.3986 34.6488 32.5507 35 31.6667 35H8.33333C7.44928 35 6.60143 34.6488 5.97631 34.0237C5.35119 33.3986 5 32.5507 5 31.6667V25" stroke="#737B8C" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28.3337 13.3333L20.0003 5L11.667 13.3333" stroke="#737B8C" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 5V25" stroke="#737B8C" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-sm font-normal text-blue1700 text-center mb-1 mt-3">
                Drop file here or click to upload
              </p>
              <p className="text-xs text-SteelGray leading-4 font-normal">
                PDF, JPG, PNG, DOC up to 10MB
              </p>
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
          <div className='mt-4'>
            <label className='text-Black236 block mb-2 font-normal text-[13.5px] leading-5'>Transaction / Reference ID</label>
            <input type="text" className='text-lighrgrey48 placeholder:text-lighrgrey48 text-[13px] font-normal bg-gray-1800 border border-solid border-lighrgrey49 rounded-[10px] h-10 w-full px-4' placeholder='e.g. TXN-20250315-48291'/>  
          </div>
          <div className='mt-4'>
            <label className='text-Black236 block mb-2 font-normal text-[13.5px] leading-5'>Admin Note <span className='text-red-1300 text-sm'>*</span></label>
            <textarea className='text-lighrgrey48 placeholder:text-lighrgrey48 text-[13px] font-normal bg-gray-1800 border border-solid border-lighrgrey49 rounded-[10px] h-17.5 w-full px-4 py-2.5' placeholder='Reason for manual settlement...'></textarea> 
          </div> 
        </div>
        <div className="bg-lighrgrey47/30 border-t border-solid border-lighrgrey49/60 px-6 py-4">
          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-3">
            <li>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 cursor-pointer hover:bg-blue1900 hover:text-blue2000 transition-all duration-500 ease-in-out w-full border rounded-[10px] text-gray-3800 font-normal text-[13.3px] leading-5 bg-gray-1500 border-solid border-grey-5400 h-10"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer opacity-50 gap-2 px-4 flex items-center justify-center w-full hover:bg-royalBlue131/90 hover:border-royalBlue131/90 transition-all duration-500 ease-in-out border rounded-[10px] text-white font-normal text-[13px] leading-5 bg-royalBlue131 border-solid border-royalBlue131 h-10"
              >
                <Image
                  src="/icons/check-paid.svg"
                  width="16"
                  height="16"
                  alt=""
                />
                Confirm & Mark as Paid
              </button>
            </li>
          </ul>
        </div>

      </Modal>

    </>
  );
}