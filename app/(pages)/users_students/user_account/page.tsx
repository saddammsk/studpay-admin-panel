"use client";
import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import Modal from "@/app/components/Modal";
import RecentAuditTable from '@/app/components/UsersStudent/RecentAuditTable';
import UserAccountTable from '@/app/components/UsersStudent/UserAccountTable';
import { Radio, RadioGroup } from '@headlessui/react'

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
    active: true,
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
    href: "/cards",
    icon: "../images/transfers-icon.svg",
    iconActive: "../images/avi-card-blue.svg",
    active: false,
  },
  {
    name: "AVI & Blocked",
    href: "/cards",
    icon: "../images/avi-block.svg",
    iconActive: "../images/avi-card-blue.svg",
    active: false,
  },
  {
    name: "KYC",
    href: "/cards",
    icon: "../images/shield-dark.svg",
    iconActive: "../images/avi-card-blue.svg",
    active: false,
  },
  {
    name: "Financing",
    href: "/cards",
    icon: "../images/Financing.svg",
    iconActive: "../images/avi-card-blue.svg",
    active: false,
  },
  {
    name: "Housing",
    href: "/cards",
    icon: "../images/house-icon.svg",
    iconActive: "../images/avi-card-blue.svg",
    active: false,
  },
  {
    name: "Insurance",
    href: "/cards",
    icon: "../images/shield-dark.svg",
    iconActive: "../images/avi-card-blue.svg",
    active: false,
  },
  {
    name: "Crypto",
    href: "/cards",
    icon: "../images/crypto-icon.svg",
    iconActive: "../images/avi-card-blue.svg",
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
  const [selected, setSelected] = useState(plans[0])
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
        <div className='flex xl:flex-row flex-col items-start gap-4'>
          <div className='xl:w-[calc(100%-300px)] w-full'>
            <div className='grid 5xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
              <div className='flex items-start justify-between gradient-bg border border-solid border-blue1400/20 shadow-4xl rounded-lg p-6'>
                <div className=''>
                  <span className='text-gray-1900 font-inter font-medium text-sm leading-5 tracking-[-0.35px] block'>Total Balance</span>
                  <div className='flex items-center mt-2 mb-1'>
                    <h4 className='text-blue-1300 font-inter font-bold md:text-2xl text-lg leading-8'>€30.905,88</h4>
                  </div>
                  <p className='text-gray-1900 font-inter font-normal text-xs leading-4'>Across 4 accounts</p>
                </div>
                <span className='w-6 h-6 flex items-center justify-center'>
                  <Image src="../images/eye-icon.svg" width="24" height="24" alt="" />
                </span>
              </div>
              <div className='bg-white border border-solid border-gray-3100 shadow-4xl rounded-lg p-6'>
                <span className='text-gray-1900 font-inter font-medium text-sm leading-5 block tracking-[-0.35px]'>Active Accounts</span>
                <h4 className='text-blue-1300 font-inter font-bold md:text-2xl text-lg leading-8 mt-2 mb-1'>3</h4>
                <p className='text-lightgreen17 font-inter font-normal text-xs leading-4 flex items-center gap-1'><Image src="../images/price-arrow-green.svg" width="12" height="12" alt="" /> All accounts in good standing</p>
              </div>
              <div className='bg-white border border-solid border-gray-3100 shadow-4xl rounded-lg p-6'>
                <span className='text-gray-1900 font-inter font-medium text-sm leading-5 block tracking-[-0.35px]'>Monthly Inflow</span>
                <h4 className='text-lightgreen17 font-inter font-bold md:text-2xl text-lg leading-8 mt-2 mb-1'>+€3,450.00</h4>
                <p className='text-gray-1900 font-inter font-normal text-xs leading-4'>+12% from last month</p>
              </div>
              <div className='bg-white border border-solid border-gray-3100 shadow-4xl rounded-lg p-6'>
                <span className='text-gray-1900 font-inter font-medium text-sm leading-5 block tracking-[-0.35px]'>Monthly Outflow</span>
                <h4 className='text-red1700 font-inter font-bold md:text-2xl text-lg leading-8 mt-2 mb-1'>-€1,892.45</h4>
                <p className='text-gray-1900 font-inter font-normal text-xs leading-4'>-5% from last month</p>
              </div>
            </div>
            <div className='bg-white pb-6 border border-solid border-gray-3100 shadow-4xl mt-6 rounded-lg'>
              <div className='flex items-center justify-between 5xl:px-6 xl:px-3 px-4 pt-6 pb-4'>
                <h4 className='text-blue-1300 font-inter font-semibold text-lg leading-7 tracking-[-0.45px]'>User Accounts</h4>
                <Button onClick={() => setIsOpen(true)}
                  iconSrc="/images/plus-icon.svg"
                  label="Add Account"
                  className="text-white text-sm font-normal gap-2 h-9 px-3! bg-blue-1000 hover:bg-blue800 rounded-md border border-solid border-gray1600 m-0!"
                />
              </div>
              <UserAccountTable />
            </div>
            <div className='bg-white pb-6 border border-solid border-gray-3100 shadow-4xl mt-6 rounded-lg'>
              <div className='flex items-center justify-between xl:px-6 px-4 xl:pt-6 pt-4 pb-4'>
                <h4 className='text-blue-1300 font-inter font-semibold text-lg leading-7 tracking-[-0.45px]'>Recent Transactions</h4>
                <Link href={'#'} className='inline-flex items-center justify-center text-blue-1300 font-inter font-medium text-sm leading-5 bg-gray-1600 border border-solid border-gray-3100 rounded-md px-3 h-9'>View All</Link>
              </div>
              <div className='xl:px-6 px-4'>
                <div className='flex items-center mb-3 gap-3 px-3 py-4 relative z-50 bg-gray-1600/50 rounded-lg hover:bg-gray-1600 transition-all duration-500 ease-in-out'>
                  <span className='bg-lightgreen17/10 w-8 h-8 flex items-center justify-center rounded-full'>
                    <Image src="../icons/left-down-arrow.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                  </span>
                  <div className='flex-1 w-full flex items-center justify-between'>
                    <div className=''>
                      <h4 className='text-blue-1300 font-inter font-medium text-sm leading-5'>Salary Payment</h4>
                      <p className='text-gray-1900 font-inter font-normal text-xs leading-4'>2024-01-28</p>
                    </div>
                    <span className='text-lightgreen17 font-inter font-semibold sm:text-sm text-xs leading-5 block'>+€2,450.00</span>
                  </div>
                </div>
                <div className='flex items-center mb-3 gap-3 px-3 py-4 relative z-50 bg-gray-1600/50 rounded-lg hover:bg-gray-1600 transition-all duration-500 ease-in-out'>
                  <span className='bg-red1700/10 w-8 h-8 flex items-center justify-center rounded-full'>
                    <Image src="../images/payment-red-arrow.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                  </span>
                  <div className='flex-1 w-full flex items-center justify-between'>
                    <div className=''>
                      <h4 className='text-blue-1300 font-inter font-medium text-sm leading-5'>Rent Payment</h4>
                      <p className='text-gray-1900 font-inter font-normal text-xs leading-4'>2024-01-27</p>
                    </div>
                    <span className='text-red1700 font-inter font-semibold sm:text-sm text-xs leading-5 block'>€850,00</span>
                  </div>
                </div>
                <div className='flex items-center mb-3 gap-3 px-3 py-4 relative z-50 bg-gray-1600/50 rounded-lg hover:bg-gray-1600 transition-all duration-500 ease-in-out'>
                  <span className='bg-lightgreen17/10 w-8 h-8 flex items-center justify-center rounded-full'>
                    <Image src="/icons/left-down-arrow.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                  </span>
                  <div className='flex-1 w-full flex items-center justify-between'>
                    <div className=''>
                      <h4 className='text-blue-1300 font-inter font-medium text-sm leading-5'>Transfer from Savings</h4>
                      <p className='text-gray-1900 font-inter font-normal text-xs leading-4'>2024-01-26</p>
                    </div>
                    <span className='text-lightgreen17 font-inter font-semibold sm:text-sm text-xs leading-5 block'>+€500,00</span>
                  </div>
                </div>
                <div className='flex items-center mb-3 gap-3 px-3 py-4 relative z-50 bg-gray-1600/50 rounded-lg hover:bg-gray-1600 transition-all duration-500 ease-in-out'>
                  <span className='bg-red1700/10 w-8 h-8 flex items-center justify-center rounded-full'>
                    <Image src="../images/payment-red-arrow.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                  </span>
                  <div className='flex-1 w-full flex items-center justify-between'>
                    <div className=''>
                      <h4 className='text-blue-1300 font-inter font-medium text-sm leading-5'>Grocery Store</h4>
                      <p className='text-gray-1900 font-inter font-normal text-xs leading-4'>2024-01-26</p>
                    </div>
                    <span className='text-red1700 font-inter font-semibold sm:text-sm text-xs leading-5 block'>€67,45</span>
                  </div>
                </div>
                <div className='flex items-center gap-3 px-3 py-4 relative z-50 bg-gray-1600/50 rounded-lg hover:bg-gray-1600 transition-all duration-500 ease-in-out'>
                  <span className='bg-red1700/10 w-8 h-8 flex items-center justify-center rounded-full'>
                    <Image src="../images/payment-red-arrow.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                  </span>
                  <div className='flex-1 w-full flex items-center justify-between'>
                    <div className=''>
                      <h4 className='text-blue-1300 font-inter font-medium text-sm leading-5'>Netflix Subscription</h4>
                      <p className='text-gray-1900 font-inter font-normal text-xs leading-4'>2024-01-25</p>
                    </div>
                    <span className='text-red1700 font-inter font-semibold sm:text-sm text-xs leading-5 block'>€15,99</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white border border-solid border-gray-3100 shadow-4xl 2xl:p-6 p-4 mt-4 rounded-lg'>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-blue-1300 font-inter font-semibold text-base leading-6 tracking-[-0.4px] flex items-center gap-2">
                  <Image src="../images/clock-gray.svg" width="16" height="16" alt="" />
                  Recent Audit Trail
                </h4>
                <Link className="inline-flex items-center hover:underline text-blue1400 font-inter font-normal text-sm leading-5" href="#">
                  View full log
                </Link>
              </div>
              <div className=''>
                <RecentAuditTable />
              </div>
            </div>
          </div>
          <div className='xl:max-w-75 w-full bg-white border border-solid border-gray-3100 rounded-lg shadow-4xl md:p-6 p-4'>
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
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        panelClassName="max-w-[560px] bg-gray-1500 relative"
      >
        <Link onClick={() => setIsOpen(false)} href={"#"} className="flex items-center justify-center border-2 border-solid border-blue1800 rounded-lg w-8 h-8 absolute top-4.5 right-6">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className='border-b border-solid border-grey-5400 px-6 py-5'>
          <h4 className='text-black-2000 font-semibold text-lg leading-7 tracking-[-0.45px]'>Add New Account</h4>
          <p className='text-gray-3800 font-normal text-sm leading-5 mt-1.5'>Create a new sub-account for this student profile</p>
        </div>
        <div className="py-5 px-6">
          <div className=''>
            <label className='text-black-2000 mb-2 font-semibold text-sm leading-3.5'>Account Type</label>
            <RadioGroup by="name" value={selected} onChange={setSelected} aria-label="Server size" className="space-y-2">
              {plans.map((plan) => (
                <Radio
                  key={plan.name}
                  value={plan}
                  className="group relative flex cursor-pointer rounded-lg bg-white p-3 border border-solid border-grey-5400 transition focus:not-data-focus:outline-none data-checked:bg-blue1900 data-checked:border-blue1400  data-checked:shadow-56xl data-focus:outline data-focus:outline-white"
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="text-sm/6">
                      <h4 className="font-semibold text-base mb-0.5 leading-6 text-black-2000">{plan.name}</h4>
                      <p className='font-normal text-xs leading-4 text-gray-3800'>{plan.disk}</p>
                    </div>
                    <div className="w-4 h-4 flex items-center justify-center relative rounded-full bg-white border-2 border-solid border-grey-5400 transition group-data-checked:bg-blue1400 group-data-checked:border-blue1400">
                      <span className='flex items-center justify-center rounded-full w-1.5 h-1.5 bg-white group-data-checked:opacity-100'></span>
                    </div>
                  </div>
                </Radio>
              ))}
            </RadioGroup>
          </div>
          <div className='mt-5'>
            <label className='text-black-2000 mb-2 font-medium text-sm leading-3.5'>Base Currency</label>
          </div>
        </div>
        <div className="bg-grey5500/30 border border-solid border-gray-3900/60 px-6 py-4">
          <ul className="grid grid-cols-2 gap-3">
            <li>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 cursor-pointer hover:bg-lightgreenNew2 hover:text-darkgreen59 transition-all duration-500 ease-in-out w-full shadow-55xl border rounded-[10px] text-blue1700 font-normal text-[13.3px] leading-5 bg-gray-1800 border-solid border-gray-3900 h-9.5"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer flex items-center justify-center w-full hover:bg-lightgreen17 hover:border-lightgreen17 transition-all duration-500 ease-in-out border rounded-[10px] text-white font-normal gap-2 text-[13.3px] leading-5 bg-blue-1000 border-solid border-blue-1000 h-9.5"
              >
                <Image src="/images/send-icon.svg" width={14} height={14} alt="" />
                Send Campaign
              </button>
            </li>
          </ul>
        </div>


      </Modal >
    </div>
  );
};

export default UsersStudentsPage;
