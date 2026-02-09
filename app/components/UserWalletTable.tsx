"use client";

import { useState } from 'react'

import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

type PaymentStatus = "Active" | "Suspended";

interface Actions {
  eyesimg: string;
}

interface Payment {
  id: number;
  name: string;
  email: string;
  document: string;
  balance: string;
  currency: string;
  activity: string;
  documenticon: string;
  status: PaymentStatus;
  actions: Actions;
}

const statusConfig = {
  Active: {
    classes: "bg-blue-1000 text-white",
  },
  Suspended: {
    classes: "bg-red-1000 text-white",
  },
} as const;

const payments: Payment[] = [
  {
    id: 1,
    name: "Emma Johnson",
    email: "emma.johnson@university.edu",
    document: "Main",
    documenticon: "/images/wallet-black.svg",
    balance: "2,450.00",
    currency: "EUR",
    activity: "2024-01-15",
    status: "Active",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
  {
    id: 2,
    name: "Carlos Rodriguez",
    email: "carlos.r@estudios.es",
    document: "Crypto",
    documenticon: "/images/Crypto-icon.svg",
    balance: "0.0234",
    currency: "BTC",
    activity: "2024-01-14",
    status: "Active",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
  {
    id: 3,
    name: "Priya Sharma",
    email: "priya.sharma@uni.in",
    document: "AVI",
    documenticon: "/images/AVI-card.svg",
    balance: "150.00",
    currency: "EUR",
    activity: "2024-01-13",
    status: "Suspended",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
  {
    id: 4,
    name: "James Wilson",
    email: "j.wilson@college.uk",
    document: "Main",
    documenticon: "/images/wallet-black.svg",
    balance: "890.75",
    currency: "EUR",
    activity: "2024-01-16",
    status: "Active",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
  {
    id: 5,
    name: "Li Wei",
    email: "li.wei@university.edu",
    document: "Crypto",
    documenticon: "/images/Crypto-icon.svg",
    balance: "1,245.80",
    currency: "USDT",
    activity: "2024-01-15",
    status: "Active",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
];

export default function UserWalletTable() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);


  return (
    <>
      <div className="bg-white border border-gray-1600 rounded-xl shadow-4xl md:p-6 p-4">
        <div className="flex items-center gap-2 md:pb-6 pb-4 border-b border-gray-1600">
          <Image src="/images/wallet-icon.svg" alt="" width={20} height={20} />
          <h4 className="text-black13 font-inter font-semibold text-2xl">
            User Wallets (5)</h4>
        </div>

        <div className="overflow-x-auto">
          <table className="2xl:w-full w-341.25">
            <thead>
              <tr className="border-b border-gray1600">
                <th className="px-4 py-3.5 text-left font-inter font-medium text-sm text-gray-1400">Student Name</th>
                <th className="px-4 py-3.5 text-left font-inter font-medium text-sm text-gray-1400">Email</th>
                <th className="px-4 py-3.5 text-left font-inter font-medium text-sm text-gray-1400">Wallet Type</th>
                <th className="px-4 py-3.5 text-left font-inter font-medium text-sm text-gray-1400">Balance</th>
                <th className="px-4 py-3.5 text-left font-inter font-medium text-sm text-gray-1400">Currency</th>
                <th className="px-4 py-3.5 text-left font-inter font-medium text-sm text-gray-1400">Last Activity</th>
                <th className="px-4 py-3.5 text-left font-inter font-medium text-sm text-gray-1400">Status</th>
                <th className="px-4 py-3.5 text-left font-inter font-medium text-sm text-gray-1400">Actions</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((item) => (
                <tr key={item.id} className="group border-b border-gray1600 hover:bg-gray1700/50 transition">
                  <td className="p-4 font-inter font-medium text-sm leading-5 text-black13">{item.name}</td>
                  <td className="p-4 font-inter font-normal text-sm leading-5 text-gray-1100">{item.email}</td>

                  <td className="p-4 flex items-center gap-2 text-black13 font-inter text-sm leading-5 font-normal">
                    <Image src={item.documenticon} alt="" width={16} height={16} />
                    {item.document}
                  </td>

                  <td className="p-4 text-black13 font-inter text-sm leading-5 font-semibold">{item.balance}</td>
                  <td className="p-4 text-black13 font-inter text-xs leading-5 font-semibold">
                    <span className="inline-flex items-center justify-center border border-solid border-gray1600 rounded-full h-5.5 w-11.5"> {item.currency} </span>
                  </td>
                  <td className="p-4 text-black13 font-inter text-sm leading-5 font-normal"> {item.activity}</td>

                  <td className="p-4">
                    <span
                      className={`px-2.75 h-5.5 inline-flex items-center justify-center rounded-full font-inter text-xs font-semibold ${statusConfig[item.status].classes}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <Link href={"#"}
                      onClick={openModal}
                      className="text-black13 text-sm font-normal leading-5 inline-flex items-center justify-center gap-3 border border-solid border-gray1600 rounded-md h-9 px-3.25 group-hover:bg-white transition-all duration-500 ease-in-out"
                    >
                      <Image src={item.actions.eyesimg} alt="" width={16} height={16} />
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* MODAL*/}
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={closeModal}>
        <div className="bg-black/6 fixed inset-0 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-67.5 rounded-xl border border-solid border-gray1600 bg-white backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <div className='px-4 pt-6 pb-2.5'>
                <DialogTitle as="h3" className="text-black13 font-inter font-medium text-sm leading-5 flex items-center gap-3">
                  <Image src="../images/wallet-icon.svg" alt="" width={20} height={20} className='brightness-0' />
                  Emma Johnson - Main Wallet
                </DialogTitle>
                <p className="font-neulis-sans font-normal text-[10px] leading-4 text-center text-gray-1200">
                  wallet details and transection history for
                  emma.johnson@university.edu
                </p>
              </div>
              <div className="px-5 py-4">
                <div className='border mb-4 border-solid border-gray1600 rounded-md px-4.75 py-3.75'>
                  <h4 className='text-black13 font-inter font-medium text-sm leading-5'>Wallet Summary </h4>
                  <ul className='mt-4'>
                    <li className='flex items-center justify-between'>
                      <span className='text-gray-1200 font-inter font-medium text-xs block'>Balance:</span>
                      <strong className='max-w-22.5 w-full font-inter font-medium text-black13 text-sm leading-5 block'>2,450.00EUR</strong>
                    </li>
                    <li className='flex items-center justify-between my-2'>
                      <span className='text-gray-1200 font-inter font-medium text-xs block'>Status:</span>
                      <div className='max-w-22.5 w-full flex items-center justify-center'>
                        <strong className='px-2.75 h-5.5 inline-flex items-center justify-center rounded-full font-inter text-xs font-semibold bg-blue-1000 text-white'>Active</strong>
                      </div>
                    </li>
                    <li className='flex items-center justify-between'>
                      <span className='text-gray-1200 font-inter font-medium text-xs block'>Last Activity:</span>
                      <strong className='max-w-22.5 w-full font-inter font-medium text-sm leading-5 text-gray-1200 block'>2024-01-15</strong>
                    </li>
                  </ul>
                </div>
                <div className=' mb-4 border border-solid border-gray1600 rounded-md px-4.75 py-3.75'>
                  <h4 className='text-black13 mb-4.25 font-inter font-medium text-sm leading-5'>Wallet Actions  </h4>
                  <Link href={"#"} className='inline-flex items-center justify-center text-white font-inter font-medium leading-5 gap-3 border border-gray1600 border-solid rounded-md px-3.25 bg-red1300 h-9'>
                    <Image src="../images/LockSimple.svg" alt='' width={16} height={16} />
                    Freeze wallet
                  </Link>
                </div>
                <div className='border mb-4 border-solid border-gray1600 rounded-md px-3.5 py-3.75'>
                  <h4 className='text-black13 font-inter font-medium text-sm leading-5'>Recent Transection</h4>
                  <div className='mt-4.25 flex items-center justify-between border border-solid border-gray-1600 rounded-lg py-3.25 pl-3.25 pr-2.5'>
                    <div className=''>
                      <h5 className='text-blue-1200 font-neulis-sans font-normal text-base leading-6 mb-1'>Top-up</h5>
                      <p className='text-gray-1100 font-neulis-sans font-normal text-[13.78px] leading-5'>2024-01-15</p>
                    </div>
                    <span className='inline-flex items-center text-green-1000 text-[15px] font-neulis-sans font-normal leading-6 bg-green-1200 rounded-full h-6.5 px-[7.5px]'>+ € 2,450</span>
                  </div>
                   <div className='mt-4.25 flex items-center justify-between border border-solid border-gray-1600 rounded-lg py-3.25 pl-3.25 pr-2.5'>
                    <div className=''>
                      <h5 className='text-blue-1200 font-neulis-sans font-normal text-base leading-6 mb-1'>Payment</h5>
                      <p className='text-gray-1100 font-neulis-sans font-normal text-[13.78px] leading-5'>2024-01-14</p>
                    </div>
                    <span className='inline-flex items-center text-red1300 text-[15px] font-neulis-sans font-normal leading-6 bg-red1400 rounded-full h-6.5 px-[7.5px]'>- € 2,450</span>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
