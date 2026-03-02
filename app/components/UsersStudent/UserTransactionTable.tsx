"use client";
import { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import Modal from "@/app/components/Modal";

interface Transaction {
  id: number;
  date: string;
  time: string;
  description: {
    icon: string;
    name: string;
    subDescription?: string;
  },
  account: string;
  amount: string;
  fee?: string;
  status: "Completed" | "Pending" | "Failed" | "Reversed";
}

const statusConfig = {
  Completed: "bg-lightgreen17/10 border-lightgreen17/20 text-lightgreen17",
  Pending: "bg-yellow-1100/10 border-yellow-1100/20 text-yellow-1100",
  Failed: "bg-red1700/10 border-red1700/20 text-red1700",
  Reversed: "bg-gray-1700/10 border-gray-1700/20 text-gray-1700",
} as const;

const transactions: Transaction[] = [
  {
    id: 1,
    date: "Jan 15, 2024",
    time: "14:32:00",
    description: {
      icon: "/icons/amazon-bag.svg",
      name: "Amazon Purchase",
      subDescription: "Amazon EU",
    },
    account: "Main EUR Account",
    amount: "€89,99",
    fee: "€0.45",
    status: "Completed",
  },
  {
    id: 2,
    date: "Jan 14, 2024",
    time: "09:15:00",
    description: {
      icon: "/icons/amazon-bag.svg",
      name: "Salary Deposit",
      subDescription: "TechCorp GmbH",
    },
    account: "Main EUR Account",
    amount: "+€3.500,00",
    status: "Completed",
  },
  {
    id: 3,
    date: "Jan 13, 2024",
    time: "16:45:00",
    description: {
      icon: "/icons/card-black.svg",
      name: "Currency Exchange",
      subDescription: "StudPay FX",
    },
    account: "Main EUR Account",
    amount: "€500,00",
    fee: "€2.50",
    status: "Completed",
  },
  {
    id: 4,
    date: "Jan 12, 2024",
    time: "11:20:00",
    description: {
      icon: "/icons/amazon-bag.svg",
      name: "Restaurant Payment",
      subDescription: "Café Milano",
    },
    account: "Main EUR Account",
    amount: "€45,50",
    fee: "€0.23",
    status: "Failed",
  },
  {
    id: 5,
    date: "Jan 11, 2024",
    time: "08:00:00",
    description: {
      icon: "/icons/transfer-icon.svg",
      name: "AVI Transfer",
      subDescription: "French Embassy Blocked",
    },
    account: "AVI Blocked Pot",
    amount: "€7.380,00",
    status: "Pending",
  },
  {
    id: 6,
    date: "Jan 10, 2024",
    time: "13:30:00",
    description: {
      icon: "/icons/building.svg",
      name: "Monthly Fee",
      subDescription: "StudPay",
    },
    account: "Main EUR Account",
    amount: "€4,99",
    status: "Completed",
  },
  {
    id: 7,
    date: "Jan 09, 2024",
    time: "17:45:00",
    description: {
      icon: "/icons/amazon-bag.svg",
      name: "Refund - Zalando",
      subDescription: "Zalando SE",
    },
    account: "Main EUR Account",
    amount: "+€129,00",
    status: "Reversed",
  },
];

const plans = [
  { name: 'Current Accountp', disk: 'Standard transactional account for daily use' },
  { name: 'Savings Pot', disk: 'Interest-bearing account for savings goals' },
  { name: 'Blocked AVI Account', disk: 'Visa-compliant blocked account for international students' },
]

export default function TransactionTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(plans[0])
  return (
    <>
      <div className="overflow-x-auto">
        <table className="4xl:w-full w-200">
          <thead>
            <tr className="bg-grey5600/30 border-b border-grey5600">
              <th className="px-4 py-3.5 text-left text-sm leading-5 font-semibold text-gray-3800">
                Date & Time
              </th>
              <th className="px-4 py-3.5 text-left text-sm leading-5 font-semibold text-gray-3800">
                Description
              </th>
              <th className="px-4 py-3.5 text-left text-sm leading-5 font-semibold text-gray-3800">
                Account
              </th>
              <th className="text-right px-4 py-3.5  text-sm leading-5 font-semibold text-gray-3800">
                Amount & Fee
              </th>
              <th className="px-4 py-3.5 text-center text-sm leading-5 font-semibold text-gray-3800">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr onClick={() => setIsOpen(true)} key={txn.id} className="border-b border-grey-5400 hover:bg-grey5600/20 transition">
                <td className="p-4 text-sm font-medium leading-5 text-black-2000">
                  <div>{txn.date}</div>
                  <div className="text-gray-3800 text-xs font-normal leading-4">{txn.time}</div>
                </td>
                <td className="p-4 text-sm leading-5 font-normal text-black-2000">
                  <div className="flex items-center gap-3">
                    <span className="bg-grey5600 w-8 h-8 rounded-full flex items-center justify-center">
                      <Image src={txn.description.icon}
                        width="16"
                        height="16"
                        alt=""
                      />
                    </span>
                    <div className="flex-1 w-full">
                      <div>{txn.description.name}</div>
                      {txn.description.subDescription && (
                        <div className="text-gray-3800 text-xs font-normal leading-4">{txn.description.subDescription}</div>
                      )}
                    </div>
                  </div>
                </td>
                <td className="p-4 text-sm leading-5 font-normal text-black-2000">{txn.account}</td>
                <td className="p-4 text-right text-sm leading-5 font-semibold text-black-2000">
                  <div className={txn.amount.startsWith("+") ? "text-green-5000" : "text-black-1600"}>{txn.amount}</div>
                  {txn.fee && <div className="text-gray-3800 text-xs font-normal leading-4">Fee: {txn.fee}</div>}
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span
                      className={`px-2.5 h-5.5 inline-flex items-center gap-1 rounded-full font-semibold text-xs leading-4 border border-solid ${statusConfig[txn.status]}`}
                    >
                      {txn.status}
                    </span>
                    {txn.status === "Failed" && (
                      <Image src="/icons/refresh-red.svg" alt="failed" width={12} height={12} />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        panelClassName="max-w-[576px] border-0! bg-gray-1500 h-full overflow-x-auto relative shadow-3xl! rounded-2xl!"
      >
        <div className='bg-linear-to-r from-OxfordBlue to-OxfordBlue/80 sm:p-6 p-4 rounded-t-2xl'>
          <div className='mb-6'>
            <span className='text-gray22 font-normal text-sm leading-5 block'>Transaction ID</span>
            <div className='flex items-center gap-2 mt-1'>
              <h5 className='text-gray22 font-bold text-[18.6px]'>#TXN-998877</h5>
              <Link href={"#"} className='flex items-center'>
                <Image src="/icons/copy-icon.svg"
                  width={16}
                  height={16}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className=''>
              <h4 className='text-gray22 font-bold text-[30px] leading-9 tracking-[-0.75px] block'>€1,250.00</h4>
              <span className='text-gray22/70 font-normal text-base leading-6 mt-1 block'>TechStore Berlin GmbH</span>
            </div>
            <div className='inline-flex items-center justify-center gap-2 text-lightgreen17 text-sm leading-5 font-medium bg-lightgreen17/10 border border-solid border-lightgreen17/20 rounded-full h-9.5 px-4'>
              <span className='bg-lightgreen17 rounded-full w-2 h-2 flex items-center'></span>
              <Image src="/images/checkgreendark.svg"
                width={16}
                height={16}
                alt=""
              />
              Success
            </div>
          </div>
        </div>
        <div className='sm:p-6 p-4'>
          <div className='mb-8'>
            <h4 className='text-gray-1200 mb-4 font-bold text-sm leading-5 uppercase'>Financial Breakdown</h4>
            <ul>
              <li className='flex items-center justify-between py-3 rounded-xl px-4 mb-3'>
                <div className='flex items-center gap-3'>
                  <span className='bg-gray-1600 rounded-xl w-8 h-8 flex items-center justify-center'>
                    <Image src="/icons/down-arrow-bottom.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </span>
                  <p className='text-gray-1200 font-normal text-sm leading-5'>Gross Amount</p>
                </div>
                <span className='text-blue-1300 font-medium text-sm leading-5 flex items-center'>€1,250.00</span>
              </li>
              <li className='flex items-center justify-between bg-lightgreen17/5 border border-solid border-lightgreen17/10 rounded-xl py-3 px-4 mb-3'>
                <div className='flex items-center gap-3'>
                  <span className='bg-lightgreen17/10 rounded-xl w-8 h-8 flex items-center justify-center'>
                    <Image src="/images/price-arrow-green.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </span>
                  <div className=''>
                    <h4 className='text-gray-1200 text-sm leading-5 font-normal'>StudPay Fee</h4>
                    <p className='text-gray-1200/70 font-normal text-xs leading-6'>1.5% processing fee</p>
                  </div>
                </div>
                <span className='text-lightgreen17 font-medium text-sm leading-5 flex items-center'>- €18.75</span>
              </li>
              <li className='flex items-center justify-between bg-gray-1600/50 py-3 rounded-xl px-4 mb-3'>
                <div className='flex items-center gap-3'>
                  <span className='bg-gray-1600 rounded-xl w-8 h-8 flex items-center justify-center'>
                    <Image src="/icons/fx-icon.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </span>
                  <p className='text-gray-1200 font-normal text-sm leading-5'>FX Rate Applied</p>
                </div>
                <span className='text-blue-1300 font-medium text-sm leading-5 flex items-center'>1 USD = 0.92 EUR</span>
              </li>
              <li className='flex items-center justify-between bg-OxfordBlue/5 border border-solid border-OxfordBlue/10 rounded-xl py-3 px-4 mb-3'>
                <div className='flex items-center gap-3'>
                  <span className='bg-OxfordBlue/10 rounded-xl w-8 h-8 flex items-center justify-center'>
                    <Image src="/images/wallet-black.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </span>
                  <h4 className='text-OxfordBlue text-sm leading-5 font-bold'>Net Settlement</h4>
                </div>
                <span className='text-OxfordBlue font-bold text-lg leading-7 flex items-center'>€1,231.25</span>
              </li>
            </ul>
          </div>
          <div className='mb-8'>
            <h4 className='text-gray-1200 mb-4 font-bold text-sm leading-5 uppercase'>Technical & Compliance Data</h4>
            <div className='bg-gray-1600/30 rounded-xl p-4'>
              <div className='flex items-center gap-3 border-solid border-gray-1000/50 pb-4'>
                <span className='w-9 h-9 bg-gray-1800 flex items-center justify-center'>
                  <Image src="/images/wallet-black.svg"
                    width={16}
                    height={16}
                    alt=""
                  />
                </span>
                <div className=''>
                  <span className='text-gray-1200 text-xs leading-4 blocK'>Payment Method</span>
                  <h4 className='text-blue-1300 font-medium text-xs leading-4'>Visa ending in 4242</h4>
                </div>
              </div>
              <ul>
                <li className='flex items-center justify-between text-gray-1200 font-normal text-sm leading-5 py-2 border-b border-solid border-gray-1000 mb-4'>
                  Trace ID
                  <span className='text-blue-1300 font-normal text-xs leading-4'>tr_8f7g6h5j4k3l2m1n</span>
                </li>
                <li className='flex items-center justify-between text-gray-1200 font-normal text-sm leading-5 py-2 border-b border-solid border-gray-1000 mb-4'>
                  ARN
                  <span className='text-blue-1300 font-normal text-xs leading-4'>74927560182749382615</span>
                </li>
                <li className='flex items-center justify-between text-gray-1200 font-normal text-sm leading-5 py-2'>
                  MCC
                  <span className='text-blue-1300 font-normal text-xs leading-4'>5411 - Electronics Stores</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='mb-8'>
            <h4 className='text-gray-1200 mb-4 font-bold text-sm leading-5 uppercase'>Transaction Timeline</h4>
            <div className='bg-gray-1600/30 rounded-xl p-4'>
              <ul className=''>
                <li className='flex items-start gap-3 pb-7 relative after:absolute after:content-"" after:left-3 after:bottom-1 after:bg-lightgreen17 after:w-0.5 after:h-8'>
                  <span className='bg-lighrgrey35 relative z-50 rounded-full w-6.5 h-6.5 flex items-center justify-center'>
                    <Image src="/images/checkgreendark.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                  </span>
                  <div className=''>
                    <h4 className='text-blue-1300 text-sm font-normal leading-5'>Initiated</h4>
                    <p className='text-gray-1200 text-xs font-normal leading-4'>Jan 29, 2026 at 14:32:05</p>
                  </div>
                </li>
                <li className='flex items-start gap-3 pb-7 relative after:absolute after:content-"" after:left-3 after:bottom-1 after:bg-lightgreen17 after:w-0.5 after:h-8'>
                  <span className='bg-lighrgrey35 relative z-50 rounded-full w-6.5 h-6.5 flex items-center justify-center'>
                    <Image src="/images/checkgreendark.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                  </span>
                  <div className=''>
                    <h4 className='text-blue-1300 text-sm font-normal leading-5'>Authorized</h4>
                    <p className='text-gray-1200 text-xs font-normal leading-4'>Jan 29, 2026 at 14:32:05</p>
                  </div>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='bg-lighrgrey35 relative z-50 rounded-full w-6.5 h-6.5 flex items-center justify-center'>
                    <Image src="/images/checkgreendark.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                  </span>
                  <div className=''>
                    <h4 className='text-blue-1300 text-sm font-normal leading-5'>Settled</h4>
                    <p className='text-gray-1200 text-xs font-normal leading-4'>Jan 29, 2026 at 14:32:08</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className=''>
            <h4 className='text-gray-1200 mb-4 font-bold text-sm leading-5 uppercase'>Internal Note</h4>
            <textarea className='text-gray-1200 placeholder:text-gray-1200 font-normal text-sm leading-5 px-3.5 py-2.5 bg-gray-1800 border border-solid border-gray-1000/50 w-full rounded-[10px] h-25 focus:outline-0' placeholder='Add a note about this transaction (visible to support team only)...'></textarea>
          </div>
        </div>
        <div className="bg-gray-1600/30 border-t border-solid border-gray-1000 rounded-b-2xl p-6">
          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-3 mb-3">
            <li>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 gap-4 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-[10px] text-blue-1300 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-1000 h-10 flex items-center justify-center"
              >
                <Image src="/images/download-black.svg" alt="failed" width={16} height={16} />
                Download Receipt
              </button>
            </li>
            <li>
              <button
                className="px-4 gap-4 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-[10px] text-blue-1300 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-1000 h-10 flex items-center justify-center"
              >
                <Image src="/images/file-black.svg" alt="file" width={16} height={16} />
                View Audit Trail
              </button>
            </li>
          </ul>
          <button
            className="px-4 gap-4 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-[10px] text-white font-normal text-sm leading-5 bg-red-1300 hover:bg-red-1300/90 border-solid border-red-1300 h-10 flex items-center justify-center"
          >
            <Image 
            src="/images/refresh-icon.svg" 
            alt="file" 
            width={16} 
            height={16} 
            className='brightness-10000'
            />
            Reverse / Refund Transaction
          </button>
        </div>


      </Modal >
    </>
  );
}