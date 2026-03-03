"use client";
import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import Modal from "@/app/components/Modal";
import AviMonthScheduleTable from '@/app/components/UsersStudent/AviMonthScheduleTable';

const plans = [
  { name: 'Current Accountp', disk: 'Standard transactional account for daily use' },
  { name: 'Savings Pot', disk: 'Interest-bearing account for savings goals' },
  { name: 'Blocked AVI Account', disk: 'Visa-compliant blocked account for international students' },
]

interface MenuItem {
  name: string;
  href: string;
  icon: string;
  active?: boolean; // optional: to highlight active link
}

const menuItems = [
  {
    name: "Overview",
    href: "user_view-profile",
    icon: "../images/dashboard-icon.svg",
    iconActive: "../images/dashboard-icon-blue.svg",
    active: false,
  },
  {
    name: "Accounts",
    href: "user_account",
    icon: "../images/wallet-icon3.svg",
    iconActive: "../images/account-wallet.svg",
    active: false,
  },
  {
    name: "Cards",
    href: "user_card",
    icon: "../images/avi-card.svg",
    iconActive: "../images/avi-card-blue.svg",
    active: false,
  },
  {
    name: "Transactions",
    href: "user_transactions",
    icon: "../images/transfers-icon.svg",
    iconActive: "../images/transfers-icon-blue.svg",
    active: false,
  },
  {
    name: "AVI & Blocked",
    href: "user_avi-blocked",
    icon: "../images/avi-block.svg",
    iconActive: "../icons/avi-block-blue.svg",
    active: true,
  },
  {
    name: "KYC",
    href: "user_kyc",
    icon: "../images/shield-dark.svg",
    iconActive: "../icons/kyc-active.svg",
    active: false,
  },
  {
    name: "Financing",
    href: "user_financing",
    icon: "../images/Financing.svg",
    iconActive: "../images/financing-active.svg",
    active: false,
  },
  {
    name: "Housing",
    href: "user_housing",
    icon: "../images/house-icon.svg",
    iconActive: "../icons/house-icon-active.svg",
    active: false,
  },
  {
    name: "Insurance",
    href: "user_insurance",
    icon: "../images/shield-dark.svg",
    iconActive: "../images/shield-blue.svg",
    active: false,
  },
  {
    name: "Crypto",
    href: "user_crypto",
    icon: "../images/crypto-icon.svg",
    iconActive: "../images/crypto-active.svg",
    active: false,
  },
  {
    name: "StudSafe",
    href: "/cards",
    icon: "../images/lock-icon.svg",
    iconActive: "../images/avi-card-blue.svg",
    active: false,
  },
  {
    name: "Support",
    href: "/cards",
    icon: "../images/support-icon.svg",
    iconActive: "../images/avi-card-blue.svg",
    active: false,
  },
  {
    name: "Audit Trail",
    href: "/cards",
    icon: "../images/file-icon2.svg",
    iconActive: "../images/avi-card-blue.svg",
    active: false,
  },
];


const UsersStudentsPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='font-inter'>
      <div className=''>
        <ul className='md:hidden flex items-center justify-end mb-4 gap-1'>
          <li>
            <Link href={'#'} className='inline-flex items-center justify-center gap-2 text-blue-1300 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
              <Image
                src="/images/refresh-icon.svg"
                width="16"
                height="16"
                alt=""
              />
              Refresh
            </Link>
          </li>
          <li>
            <Link href={'#'} className='inline-flex items-center justify-center gap-2 text-blue-1300 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
              <Image
                src="/images/export-icon4.svg"
                width="16"
                height="16"
                alt=""
              />
              Export
            </Link>
          </li>
          <li>
            <Button onClick={() => { }}
              iconSrc="/images/userplus-white.svg"
              label="Add User"
              className="text-white text-sm font-normal gap-2 h-9 px-3! bg-blue-1000 hover:bg-blue800 rounded-md border border-solid border-gray1600 m-0!"
            />
          </li>
        </ul>
        <div className='bg-white border border-solid border-gray-3100 rounded-lg p-5'>
          <div className='flex 5xl:flex-row flex-col items-start 5xl:gap-0 gap-6 justify-between'>
            <div className='flex xl:flex-row flex-col xl:items-center gap-7 5xl:w-auto w-full'>
              <div className='flex sm:flex-row flex-col items-center gap-4 xl:w-auto w-full'>
                <span className='text-white font-inter font-semibold text-xl leading-7 inline-flex items-center justify-center bg-blue1400 rounded-full shadow-49xl w-16 h-16'>MS</span>
                <div className='flex-1 w-full'>
                  <div className='flex items-center gap-3'>
                    <h4 className='text-blue-1300 font-inter font-semibold text-xl leading-7'>Marcus Schmidt</h4>
                    <span className='text-white bg-purpal115 rounded-full px-2.5 h-5.5 inline-flex items-center justify-center font-inter font-semibold text-xs leading-4 gap-1'>
                      <Image src="../icons/Premium-icon.svg" width="16" height="16" alt="" />
                      Premium
                    </span>
                  </div>
                  <span className='text-gray-1900 my-1.5 font-inter font-normal text-xs leading-4 inline-flex items-center justify-center bg-gray-1600 rounded h-5 px-2'>ID: USR-2024-00847</span>
                  <p className='text-gray-1200 font-inter font-bold text-sm gap-1 leading-5 flex items-center'>Email: <Link href={"#"} className='inline-flex font-normal'>alex.schmidt@university.edu</Link></p>
                </div>
              </div>
              <div className='xl:w-auto w-full'>
                <ul className='flex items-center xl:justify-start justify-between sm:flex-nowrap flex-wrap gap-3.5 mb-5.5'>
                  <li>
                    <span className='text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 flex items-center gap-1'><Image src="../icons/Birthdate-icon.svg" width="8" height="8" alt="" />Birthdate</span>
                    <h4 className='text-blue-1300 font-inter font-medium text-sm leading-4'>20-11-2000</h4>
                  </li>
                  <li>
                    <span className='text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 flex items-center gap-1'><Image src="../icons/location2.svg" width="8" height="12" alt="" />Location</span>
                    <h4 className='text-blue-1300 font-inter font-medium text-sm leading-4 flex items-center gap-1'><Image src="/images/🇩🇪.png" width="16" height="16" alt="" /> Berlin,Germany</h4>
                  </li>
                  <li>
                    <span className='text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 flex items-center gap-1'>Gender |Profession</span>
                    <h4 className='text-blue-1300 font-inter font-medium text-sm leading-4 flex items-center'>Male |Student</h4>
                  </li>
                </ul>
                <ul className='flex items-center xl:justify-start justify-between gap-20 mb-7.5'>
                  <li>
                    <span className='text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 flex items-center gap-1'><Image src="../icons/phone-icon.svg" width="12" height="12" alt="" />Phone</span>
                    <h4 className='text-blue-1300 font-inter font-medium text-sm leading-4'>+49 17612345678</h4>
                  </li>
                  <li>
                    <span className='text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 flex items-center gap-1'><Image src="../icons/heart.svg" width="12" height="12" alt="" />MaritalStatus</span>
                    <h4 className='text-blue-1300 font-inter font-medium text-sm leading-4 flex items-center'>Single</h4>
                  </li>
                </ul>
                <Link href={"#"} className='inline-flex items-center justify-center gap-2 text-blue-1300 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
                  <Image src="../images/eye-icon.svg" width="16" height="16" alt="" />
                  View ID Documents
                </Link>
              </div>
            </div>
            <div className='flex md:flex-row flex-col md:items-center items-start gap-6'>
              <div className='flex sm:flex-nowrap flex-wrap items-start gap-3'>
                <div className=''>
                  <span className='text-gray-1200 font-inter font-normal text-xs leading-4 mb-2 flex items-center gap-1'><Image src="../images/shield-dark.svg" width="12" height="12" alt="" />KYC Status</span>
                  <ul className='flex items-center gap-2'>
                    <li>
                      <span className='inline-flex items-center justify-center font-inter font-semibold text-xs leading-5 gap-1 bg-green-1500 rounded-full h-5.5 px-3 text-white'><Image src="../images/check-verified.svg" width="12" height="12" alt="" className='brightness-5000' />Verified</span>
                    </li>
                    <li><Link href={"#"} className='flex items-center justify-center w-7 h-7'><Image src="../images/eyes-icon.svg" width="16" height="16" alt="" /></Link></li>
                  </ul>
                </div>
                <div className=''>
                  <span className='text-gray-1200 font-inter font-normal text-xs leading-4 mb-2 flex items-center gap-1'><Image src="../images/risk-arrow.svg" width="12" height="12" alt="" /> Risk Score</span>
                  <ul className='flex items-center gap-2'>
                    <li>
                      <span className='inline-flex items-center justify-center font-inter font-semibold text-xs leading-5 gap-1 bg-green-1500/10 border border-solid border-green-1500/20 rounded-full h-5.5 px-3 text-green-1500'><Image src="../images/Fraud-check.svg" width="12" height="12" alt="" />Fraud: Low</span>
                    </li>
                    <li><Link href={"#"} className='inline-flex px-2.5 items-center justify-center text-blue-1300 font-inter font-semibold text-xs leading-4 bg-gray-1600/10 border border-solid  border-gray-1000 rounded-full'>Credit: 742</Link></li>
                  </ul>
                </div>
              </div>
              <div className='md:border-l border-solid border-gray-3100 md:pl-6'>
                <ul>
                  <li className="flex items-center gap-2 mb-2.5">
                    <span className='w-4 h-3 flex items-center justify-center'>
                      <Image src="../images/clock-gray.svg" width="16" height="16" alt="" />
                    </span>
                    <p className='text-gray-1900 font-inter font-normal text-sm leading-5'>Last login: <strong className='font-medium text-blue-1300'>Today, 09:15</strong></p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className='w-4 h-3 flex items-center justify-center'>
                      <Image src="../icons/phone-icon.svg" width="16" height="16" alt="" />
                    </span>
                    <p className='text-gray-1900 font-inter font-normal text-sm leading-5'>Device: <strong className='font-medium text-blue-1300'>iPhone 15 Pro (iOS 17.2)</strong></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white overflow-x-auto my-4 border border-solid border-gray-3100 shadow-50xl px-4 rounded-lg'>
          <ul className='flex items-center 5xl:w-full w-382.5'>
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`inline-flex items-center py-3 px-4 gap-2 font-inter font-medium text-sm leading-5 relative ${item.active ? "text-blue1400" : "text-gray-1900"
                    } after:absolute after:content-[''] after:left-0 after:bottom-0 after:rounded-full after:bg-blue1400 after:h-0.5 after:w-full ${item.active ? "" : "after:opacity-0"
                    }`}
                >
                  <span className="flex items-center justify-center">
                    <Image
                      src={item.active ? item.iconActive : item.icon}
                      width={16}
                      height={16}
                      alt={item.name}
                    />

                  </span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='grid 5xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
          <div className='bg-white border border-solid border-gray-3600 shadow-4xl rounded-lg p-4'>
            <div className='flex items-center justify-between max-w-68.5 w-full'>
              <div className=''>
                <span className='text-gray-1900 font-inter font-normal text-xs leading-4 block tracking-[0.3px]'>Total AVI Value</span>
                <h4 className='text-blue-1300 font-inter font-bold md:text-2xl text-lg leading-8 my-1'>€2.4M</h4>
                <p className='text-green53 font-inter font-medium text-xs leading-4'>+12.5% from last month</p>
              </div>
              <span className='flex items-center justify-center rounded-xl w-12 h-12 bg-green53/10'>
                <Image src="../images/price-arrow-green.svg" width="24" height="24" alt="" />
              </span>
            </div>
          </div>
          <div className='bg-white border border-solid border-gray-3600 shadow-4xl rounded-lg p-4'>
            <div className='flex items-center justify-between max-w-68.5 w-full'>
              <div className=''>
                <span className='text-gray-1900 font-inter font-normal text-xs leading-4 block tracking-[0.3px]'>Active Dossiers</span>
                <h4 className='text-blue-1300 font-inter font-bold md:text-2xl text-lg leading-8 my-1'>234</h4>
                <p className='text-green53 font-inter font-medium text-xs leading-4'>+18 new this week</p>
              </div>
              <span className='flex items-center justify-center rounded-xl w-12 h-12 bg-blue1400/10'>
                <Image src="../images/user-blue2.svg" width="24" height="24" alt="" />
              </span>
            </div>
          </div>
          <div className='bg-white border border-solid border-gray-3600 shadow-4xl rounded-lg p-4'>
            <div className='flex items-center justify-between max-w-68.5 w-full'>
              <div className=''>
                <span className='text-gray-1900 font-inter font-normal text-xs leading-4 block tracking-[0.3px]'>Pending Reviews</span>
                <h4 className='text-blue-1300 font-inter font-bold md:text-2xl text-lg leading-8 my-1'>12</h4>
                <p className='text-red2100 font-inter font-medium text-xs leading-4'>3 urgent</p>
              </div>
              <span className='flex items-center justify-center rounded-xl w-12 h-12 bg-yellow-1100/10'>
                <Image src="../images/file-check-icon.svg" width="24" height="24" alt="" />
              </span>
            </div>
          </div>
          <div className='bg-white border border-solid border-gray-3600 shadow-4xl rounded-lg p-4'>
            <div className='flex items-center justify-between max-w-68.5 w-full'>
              <div className=''>
                <span className='text-gray-1900 font-inter font-normal text-xs leading-4 block tracking-[0.3px]'>Compliance Alerts</span>
                <h4 className='text-blue-1300 font-inter font-bold md:text-2xl text-lg leading-8 my-1'>2</h4>
                <p className='text-red2100 font-inter font-medium text-xs leading-4'>Action required</p>
              </div>
              <span className='flex items-center justify-center rounded-xl w-12 h-12 bg-red2100/10'>
                <Image src="../images/warning.svg" width="24" height="24" alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className='bg-white flex 4xl:flex-row flex-col 4xl:items-center items-start justify-between border border-solid border-gray-3600 rounded-xl 5xl:p-6 p-4 mt-6 shadow-4xl'>
          <div className='flex sm:flex-row flex-col items-center gap-6 4xl:mb-0 mb-6'>
            <span className='bg-OxfordBlue2 rounded-xl w-[49.02px] h-14 flex items-center justify-center'>
              <Image src="../images/shield-icon.svg" width="28" height="28" alt="" className='brightness-10000' />
            </span>
            <div className='flex-1 w-full'>
              <div className='flex items-center gap-3'>
                <h4 className='text-blue-1300 text-xl leading-7 font-semibold'>Marie Dubois</h4>
                <span className='text-yellow-1100 gap-1.5 font-semibold text-base leading-6 border border-solid border-yellow-1100/20 bg-yellow-1100/10 h-9.5 inline-flex items-center justify-center rounded-full px-3'>
                  <strong className='bg-yellow-1100 rounded-full w-1.5 h-1.5 flex items-center'></strong>
                  Action Required
                </span>
              </div>
              <div className='flex items-center gap-4 mt-1'>
                <p className='max-w-23.75 w-full flex-1 text-gray-1900 font-normal text-sm leading-5'>AVI-2024- 0892</p>
                <span className='bg-gray-3600 rounded-full w-2 h-2 flex items-center'></span>
                <p className='max-w-43.75 w-full flex-1 text-gray-1900 font-normal text-sm leading-5'>Technical University of
                  Munich</p>
              </div>
            </div>
          </div>
          <div className='flex xl:flex-row flex-col xl:items-center xl:w-auto w-full gap-8'>
            <div className='inline-flex items-center bg-lighrgrey36/50 justify-center 5xl:gap-6 xl:gap-3 gap-10 rounded-lg 5xl:py-3 5xl:px-5 p-2.5'>
              <div className=''>
                <p className='text-gray-1900 font-medium text-xs leading-4 tracking-[0.3px]'>Total
                  Blocked</p>
                <h3 className='text-blue-1300 font-bold 5xl:text-2xl text-xl leading-8'>Total
                  €10,356
                </h3>
              </div>
              <span className='bg-gray-3600 w-px h-10 flex items-center justify-center'></span>
              <div className=''>
                <p className='text-gray-1900 font-medium text-xs leading-4 tracking-[0.3px]'>Monthly
                  Release</p>
                <h3 className='text-green53 font-bold 5xl:text-2xl text-xl leading-6'>€863/mo
                </h3>
              </div>
            </div>
            <ul className="xl:flex grid sm:grid-cols-3 grid-cols-1 items-center gap-2">
              <li>
                <button
                  className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-[10px] text-blue-1300 font-normal text-sm leading-5 bg-gray-1500 border-solid border-gray-3600 h-9 flex items-center justify-center"
                >
                  <Image src="/images/file-black.svg" alt="file" width={16} height={16} />
                  Generate Attestation
                </button>
              </li>
              <li>
                <button
                  className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-[10px] text-blue-1300 font-normal text-sm leading-5 bg-gray-1500 border-solid border-gray-3600 h-9 flex items-center justify-center"
                >
                  <Image src="/images/clock-gray.svg" alt="file" width={16} height={16} className='brightness-0' />
                  Extend Period
                </button>
              </li>
              <li>
                <button
                  className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-[10px] text-white font-normal text-sm leading-5 bg-red-1300 hover:bg-red-1300/90 border-solid border-red-1300 h-10 flex items-center justify-center"
                >
                  <Image
                    src="/images/refresh-icon.svg"
                    alt="file"
                    width={16}
                    height={16}
                    className='brightness-10000'
                  />
                  Close & Refund
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex 4xl:flex-row flex-col items-start gap-4 mt-6'>
          <div className='4xl:w-[calc(100%-401px)] w-full'>
            <div className='bg-white border border-solid border-gray-3600 rounded-lg shadow-4xl px-4 py-6'>
              <div className=''>
                <h4 className='text-blue-1300 font-semibold md:text-2xl text-xl leading-6 mb-1.5 tracking-[-0.6px] flex items-center gap-2'><Image src="../images/file-black.svg" width="16" height="16" alt="" />Documents </h4>
                <p className='text-gray-1900 font-normal text-sm leading-6'>Manage and review all required documentation for the AVI dossier </p>
              </div>
              <div className='grid xl:grid-cols-2 grid-cols-1 gap-6 mt-6'>
                <div className=''>
                  <div className='bg-white sm:min-h-42.5 xl:max-w-96.5 max-w-full w-full mb-4 border border-solid border-gray-3600 rounded-lg p-4'>
                    <div className='flex sm:flex-row flex-col sm:gap-0 gap-4 items-start justify-between'>
                      <div className='flex items-center gap-3'>
                        <span className='bg-green53/10 rounded-lg w-10 h-10 flex items-center justify-center'><Image src="../icons/sheild-greendark.svg" width="16" height="16" alt="" /></span>
                        <div className='flex-1 w-full'>
                          <h4 className='text-blue-1300 text-base leading-4 font-medium mb-1'>Attestation de Blocage</h4>
                          <p className='text-gray-1900 text-xs leading-4 font-normal flex items-center gap-2'><Image src="../images/calendar.svg" width="12" height="12" alt="" /> Attestation de Blocage</p>
                        </div>
                      </div>
                      <span className='text-green53 gap-1.5 font-medium text-xs leading-64 border border-solid border-green53/20 bg-green53/10 h-5.5 inline-flex items-center justify-center rounded-full px-2'><strong className='bg-green53 rounded-full w-1.5 h-1.5 flex items-center'></strong> Approved</span>
                    </div>
                    <ul className="flex items-center gap-2 mt-4">
                      <li>
                        <button
                          className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-md text-blue-1300 font-normal text-sm leading-5 bg-gray-1500 border-solid border-gray-3600 h-9 flex items-center justify-center"
                        >
                          <Image src="/images/eye-icon.svg" alt="file" width={16} height={16} />
                          View PDF
                        </button>
                      </li>
                      <li>
                        <button
                          className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-[10px] text-blue-1300 font-normal text-sm leading-5 bg-gray-1500 border-solid border-gray-3600 h-9 flex items-center justify-center"
                        >
                          <Image src="/icons/upload-icon.svg" alt="file" width={16} height={16} className='brightness-0' />
                          Upload New
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className='bg-white xl:max-w-96.5 max-w-full w-full border border-solid border-gray-3600 rounded-lg p-4'>
                    <div className='flex sm:flex-row flex-col sm:gap-0 gap-4 items-start justify-between'>
                      <div className='flex items-center gap-3'>
                        <span className='bg-green53/10 rounded-lg w-10 h-10 flex items-center justify-center'><Image src="../icons/card-green.svg" width="20" height="20" alt="" /></span>
                        <div className='flex-1 w-full'>
                          <h4 className='text-blue-1300 text-base leading-4 font-medium mb-1'>Passport Copy</h4>
                          <p className='text-gray-1900 text-xs leading-4 font-normal flex items-center gap-2'><Image src="../images/calendar.svg" width="12" height="12" alt="" /> Uploaded 2024-08-10</p>
                        </div>
                      </div>
                      <span className='text-green53 gap-1.5 font-medium text-xs leading-64 border border-solid border-green53/20 bg-green53/10 h-5.5 inline-flex items-center justify-center rounded-full px-2'><strong className='bg-green53 rounded-full w-1.5 h-1.5 flex items-center'></strong> Approved</span>
                    </div>
                    <ul className="flex items-center gap-2 mt-4">
                      <li>
                        <button
                          className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-md text-blue-1300 font-normal text-sm leading-5 bg-gray-1500 border-solid border-gray-3600 h-9 flex items-center justify-center"
                        >
                          <Image src="/images/eye-icon.svg" alt="file" width={16} height={16} />
                          View PDF
                        </button>
                      </li>
                      <li>
                        <button
                          className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-[10px] text-blue-1300 font-normal text-sm leading-5 bg-gray-1500 border-solid border-gray-3600 h-9 flex items-center justify-center"
                        >
                          <Image src="/icons/upload-icon.svg" alt="file" width={16} height={16} className='brightness-0' />
                          Upload New
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=''>
                  <div className='bg-white xl:max-w-96.5 max-w-full w-full mb-4 border border-solid border-gray-3600 rounded-lg p-4'>
                    <div className='flex sm:flex-row flex-col sm:gap-0 gap-4 items-start justify-between'>
                      <div className='flex items-center gap-3'>
                        <span className='bg-lighrgrey36 rounded-lg w-10 h-10 flex items-center justify-center'><Image src="../images/wallet-icon.svg" width="16" height="16" alt="" /></span>
                        <div className='flex-1 w-full'>
                          <h4 className='text-blue-1300 text-base leading-4 font-medium mb-1'>Source of Funds</h4>
                          <p className='text-gray-1900 text-xs leading-4 font-normal flex items-center gap-2'><Image src="../images/calendar.svg" width="12" height="12" alt="" /> Uploaded 2024-08-20</p>
                        </div>
                      </div>
                      <span className='text-yellow-1100 gap-1.5 font-medium text-xs leading-64 border border-solid border-yellow-1100/20 bg-yellow-1100/10 h-5.5 inline-flex items-center justify-center rounded-full px-2'><strong className='bg-yellow-1100 rounded-full w-1.5 h-1.5 flex items-center'></strong> Action Required</span>
                    </div>
                    <ul className="flex flex-wrap items-center gap-2 mt-4">
                      <li>
                        <button
                          className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-md text-blue-1300 font-normal text-sm leading-5 bg-gray-1500 border-solid border-gray-3600 h-9 flex items-center justify-center"
                        >
                          <Image src="/images/eye-icon.svg" alt="file" width={16} height={16} />
                          View PDF
                        </button>
                      </li>
                      <li>
                        <button
                          className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-md text-green53 font-normal text-sm leading-5 bg-gray-1500 border-solid border-green53/30 h-9 flex items-center justify-center"
                        >
                          <Image src="/images/chackdarkgreen.svg" alt="file" width={16} height={16} />
                          Approve
                        </button>
                      </li>
                      <li>
                        <button onClick={() => setIsOpen(true)}
                          className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-md text-red2100 font-normal text-sm leading-5 bg-gray-1500 border-solid border-red2100/30 h-9 flex items-center justify-center"
                        >
                          <Image src="/images/closeRed.svg" alt="file" width={16} height={16} />
                          Reject
                        </button>
                      </li>
                      <li>
                        <button
                          className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-[10px] text-blue-1300 font-normal text-sm leading-5 bg-gray-1500 border-solid border-gray-3600 h-9 flex items-center justify-center"
                        >
                          <Image src="/icons/upload-icon.svg" alt="file" width={16} height={16} className='brightness-0' />
                          Upload New
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className='bg-white xl:max-w-96.5 max-w-full w-full border border-solid border-gray-3600 rounded-lg p-4'>
                    <div className='flex sm:flex-row flex-col sm:gap-0 gap-4 items-start justify-between'>
                      <div className='flex items-center gap-3'>
                        <span className='bg-red2100/10 rounded-lg w-10 h-10 flex items-center justify-center'><Image src="../icons/palne-icon.svg" width="20" height="20" alt="" /></span>
                        <div className='flex-1 w-full'>
                          <h4 className='text-blue-1300 text-base leading-4 font-medium mb-1'>Visa Grant</h4>
                        </div>
                      </div>
                      <span className='text-red2100 gap-1.5 font-medium text-xs leading-64 border border-solid border-red2100/20 bg-red2100/10 h-5.5 inline-flex items-center justify-center rounded-full px-2'><strong className='bg-red2100 rounded-full w-1.5 h-1.5 flex items-center'></strong> Missing</span>
                    </div>
                    <ul className="flex flex-wrap items-center gap-2 mt-4">
                      <li>
                        <button
                          className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-md text-green53 font-normal text-sm leading-5 bg-gray-1500 border-solid border-green53/30 h-9 flex items-center justify-center"
                        >
                          <Image src="/images/chackdarkgreen.svg" alt="file" width={16} height={16} />
                          Approve
                        </button>
                      </li>
                      <li>
                        <button onClick={() => setIsOpen(true)}
                          className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-md text-red2100 font-normal text-sm leading-5 bg-gray-1500 border-solid border-red2100/30 h-9 flex items-center justify-center"
                        >
                          <Image src="/images/closeRed.svg" alt="file" width={16} height={16} />
                          Reject
                        </button>
                      </li>
                      <li>
                        <button
                          className="px-3 gap-2 cursor-pointer transition-all duration-500 ease-in-out w-full border rounded-[10px] text-blue-1300 font-normal text-sm leading-5 bg-gray-1500 border-solid border-gray-3600 h-9 flex items-center justify-center"
                        >
                          <Image src="/icons/upload-icon.svg" alt="file" width={16} height={16} className='brightness-0' />
                          Upload New
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white border border-solid border-gray-3600 p-6 shadow-4xl mt-8 rounded-lg'>
              <div className='mb-6 flex sm:flex-row flex-col sm:gap-0 gap-4 items-center justify-between'>
                <div className=''>
                  <h4 className='text-blue-1300 font-semibold md:text-2xl text-xl leading-6 mb-1.5 tracking-[-0.6px] flex items-center gap-2'><Image src="../images/file-black.svg" width="16" height="16" alt="" />12-Month Release Schedule </h4>
                  <p className='text-gray-1900 font-normal text-sm leading-6'>Monthly fund release plan with compliance controls</p>
                </div>
                <div className=''>
                  <ul className='flex items-center gap-6'>
                    <li>
                      <span className='text-gray-1900 font-normal text-sm leading-5 block'>Released</span>
                      <h4 className='text-green53 text-lg leading-7 font-semibold'>€2,589</h4>
                    </li>
                    <li>
                      <span className='text-gray-1900 font-normal text-sm leading-5 block'>Remaining</span>
                      <h4 className='text-blue-1300 text-lg leading-7 font-semibold text-right'>€7,767</h4>
                    </li>
                  </ul>
                </div>
              </div>
              <AviMonthScheduleTable />
            </div>
          </div>
          <div className='4xl:max-w-100.25 w-full'>
            <div className='bg-white border border-solid border-gray-3100 rounded-lg shadow-4xl md:p-6 p-4'>
              <div className='3xl:max-w-62.5 w-full mx-auto'>
                <h4 className='text-blue-1300 font-inter font-semibold text-base leading-6 tracking-[-0.4px] gap-2 flex items-center'>
                  <Image src="../images/sheild-active.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                  Administrative Actions
                </h4>
                <ul className='mt-3'>
                  <li className='mb-2'>
                    <Link href={"#"} className='text-white text-sm leading-5 font-inter font-medium flex items-center gap-2 bg-blue1400 hover:bg-blue-1400 transition-all duration-500 ease-in-out rounded-md px-4 h-10'>
                      <Image src="../images/eye-icon.svg"
                        width="16"
                        height="16"
                        alt=""
                        className='brightness-1000'
                      />
                      Impersonate User
                    </Link>
                  </li>
                  <li className='mb-2'>
                    <Link href={"#"} className='text-white text-sm leading-5 font-inter font-medium flex items-center gap-2 bg-red1700 hover:bg-red1700/90 transition-all duration-500 ease-in-out rounded-md px-4 h-10'>
                      <Image src="../images/freeze-icon.svg"
                        width="16"
                        height="16"
                        alt=""
                      />
                      Freeze Account
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className='text-yellow-1100 border border-solid border-yellow-1100/50 text-sm leading-5 font-inter font-medium flex items-center justify-between bg-gray-1600 hover:bg-skyblue2434 transition-all duration-500 ease-in-out rounded-md px-4 h-10'>
                      <div className='flex items-center gap-2'>
                        <Image src="../images/filter-yellow.svg"
                          width="16"
                          height="16"
                          alt=""
                        />
                        Adjust Limits
                      </div>
                      <span className='text-yellow-1100 font-inter font-medium text-[10px] leading-5 bg-yellow-1100/10 rounded px-1.5 h-6'>4-Eyes</span>
                    </Link>
                  </li>
                </ul>
                <div className='border-t border-b border-solid border-gray-3100 py-3 mt-3'>
                  <h4 className='text-gray-1900 font-inter font-medium text-xs leading-4 tracking-[-0.3px] uppercase'>Send Message</h4>
                  <ul className='mt-2 grid grid-cols-2 gap-3'>
                    <li>
                      <Link href={"#"} className='w-full inline-flex items-center gap-2 text-blue-1300 font-inter font-normal text-sm leading-5 border border-solid border-gray-3100 rounded-md bg-gray-1600 h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
                        <Image src="../images/email-black.svg"
                          width="16"
                          height="16"
                          alt=""
                        />
                        Email
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"} className='w-full inline-flex items-center gap-2 text-blue-1300 font-inter font-normal text-sm leading-5 border border-solid border-gray-3100 rounded-md bg-gray-1600 h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
                        <Image src="../images/puch-icon.svg"
                          width="16"
                          height="16"
                          alt=""
                        />
                        Push
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='pt-3'>
                  <h4 className='text-gray-1900 font-inter font-medium text-xs leading-4 tracking-[-0.3px] uppercase'>Quick Stats</h4>
                  <ul className='grid grid-cols-2 gap-3 mt-2'>
                    <li>
                      <span className='block text-gray-1900 font-normal text-xs leading-4 mb-0.5'>Account Age</span>
                      <p className="text-blue-1300 font-medium text-sm leading-5">2y 4mo</p>
                    </li>
                    <li>
                      <span className='block text-gray-1900 font-normal text-xs leading-4 mb-0.5'>Total Txns</span>
                      <p className="text-blue-1300 font-medium text-sm leading-5">1,247</p>
                    </li>
                    <li>
                      <span className='block text-gray-1900 font-normal text-xs leading-4 mb-0.5'>Avg. Monthly</span>
                      <p className="text-blue-1300 font-medium text-sm leading-5">€3,450</p>
                    </li>
                    <li>
                      <span className='block text-gray-1900 font-normal text-xs leading-4 mb-0.5'>Support Tickets</span>
                      <p className="text-blue-1300 font-medium text-sm leading-5">12</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='mt-8 bg-white border border-solid border-gray-3100 rounded-lg shadow-4xl md:p-6 p-4'>
              <h4 className='text-blue-1300 font-semibold text-2xl leading-6 tracking-[-0.6px]'>Activity Timeline</h4>
              <ul className="mt-6 relative after:absolute after:content='' after:left-2.75 after:top-0 after:w-0.5 after:h-[90%] after:bg-gray-3600">
                <li className='flex items-start gap-4 mb-8 relative z-50'>
                  <span className='w-6 h-6 flex items-center justify-center rounded-full bg-green53'><Image src="../icons/check-white.svg" width="16" height="16" alt="" /></span>
                  <div className='flex-1 w-full'>
                    <span className='text-gray-1900 text-xs leading-4 font-medium block'>Aug 15, 2024</span>
                    <h4 className='text-blue-1300 text-base leading-6 font-medium mt-1 mb-0.5'>Funds Received</h4>
                    <h4 className='text-gray-1900 text-sm leading-5 font-normal'>Initial deposit of €10,356 received from student</h4>
                  </div>
                </li>
                <li className='flex items-start gap-4 mb-8 relative z-50'>
                  <span className='w-6 h-6 flex items-center justify-center rounded-full bg-green53'><Image src="../icons/check-white.svg" width="16" height="16" alt="" /></span>
                  <div className='flex-1 w-full'>
                    <span className='text-gray-1900 text-xs leading-4 font-medium block'>Aug 20, 2024</span>
                    <h4 className='text-blue-1300 text-base leading-6 font-medium mt-1 mb-0.5'>Account Activated</h4>
                    <h4 className='text-gray-1900 text-sm leading-5 font-normal'>Blocked account successfully activated</h4>
                  </div>
                </li>
                <li className='flex items-start gap-4 mb-8 relative z-50'>
                  <span className='w-6 h-6 flex items-center justify-center rounded-full bg-green53'><Image src="../icons/check-white.svg" width="16" height="16" alt="" /></span>
                  <div className='flex-1 w-full'>
                    <span className='text-gray-1900 text-xs leading-4 font-medium block'>Sep 1, 2024</span>
                    <h4 className='text-blue-1300 text-base leading-6 font-medium mt-1 mb-0.5'>First Payout</h4>
                    <h4 className='text-gray-1900 text-sm leading-5 font-normal'>First monthly release of €863 processed</h4>
                  </div>
                </li>
                <li className='flex items-start gap-4 mb-8 relative z-50'>
                  <span className='w-6 h-6 border-2 border-solid border-blue1400 bg-blue1400/10 flex items-center justify-center rounded-full'><Image src="../icons/right-blue-arrow.svg" width="16" height="16" alt="" /></span>
                  <div className='flex-1 w-full'>
                    <span className='text-gray-1900 text-xs leading-4 font-medium flex items-center gap-2'>Dec 1, 2024 <strong className='text-blue1400 font-medium text-xs leading-4 inline-flex items-center bg-blue1400/10 rounded-full h-5 px-2'>Next</strong></span>
                    <h4 className='text-blue-1300 text-base leading-6 font-medium mt-1 mb-0.5'>Next Payout</h4>
                    <h4 className='text-gray-1900 text-sm leading-5 font-normal'>Upcoming monthly release scheduled</h4>
                  </div>
                </li>
                <li className='flex items-start gap-4 relative z-50'>
                  <span className='w-6 h-6 border-2 border-solid border-gray-3600 bg-gray-1500 flex items-center justify-center rounded-full'><Image src="../icons/ring-icon.svg" width="12" height="12" alt="" /></span>
                  <div className='flex-1 w-full'>
                    <span className='text-gray-1900 text-xs leading-4 font-medium flex items-center gap-2'>Aug 1, 2025</span>
                    <h4 className='text-blue-1300 text-base leading-6 font-medium mt-1 mb-0.5'>Account Closure</h4>
                    <h4 className='text-gray-1900 text-sm leading-5 font-normal'>Final payout and account closure</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        panelClassName="max-w-[512px] bg-gray-1500 relative"
      >
        <Link onClick={() => setIsOpen(false)} href={"#"} className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className='md:p-6 p-4'>
          <h4 className='text-black-2000 font-semibold text-lg leading-7 tracking-[-0.45px]'>Reject Document</h4>
          <p className='text-gray-3800 font-normal text-sm leading-5 mt-1.5'>Please provide a reason for rejecting this document. The student will
            be notified.
          </p>
          <textarea className='text-gray-1900 font-normal px-3.5 py-2.5 outline-0 text-sm leading-5 placeholder:text-gray-1900 border border-solid border-gray-3600 rounded-md shadow-59xl w-full h-25 mt-6' placeholder='Enter rejection reason...'></textarea>
          <ul className="flex items-center justify-end gap-3 mt-4">
            <li>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 cursor-pointer  hover:bg-lighrgrey37 hover:text-blue-1300 transition-all duration-500 ease-in-out w-full border rounded-md text-blue1700 font-normal text-sm leading-5 bg-gray-1800 border-solid border-gray-3900 h-10"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-red2100/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-red2100 border-solid border-red2100 h-10"
              >
                Confirm Rejection
              </button>
            </li>
          </ul>
        </div>


      </Modal >
    </div>
  );
};

export default UsersStudentsPage;
