"use client";
import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import ProgressBar from "@/app/components/ProgressBar";
import Modal from "@/app/components/Modal";
import CustomSelect from "@/app/components/CustomSelect";
import InputField from "@/app/components/InputField";
import ToggleSwitch from "@/app/components/ToggleSwitch";
import { Checkbox } from '@headlessui/react'
import UserFinancingTable from '@/app/components/UsersStudent/UserFinancingTable';
import CreditScoreCard from '@/app/components/UsersStudent/Financing/CreditScoreCard'
import ScoreHistory from '@/app/components/UsersStudent/Financing/ScoreHistory'
import Recommendations from '@/app/components/UsersStudent/Financing/Recommendations'
import LoanInterestRate from '@/app/components/UsersStudent/Financing/LoanInterestRate'



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
    iconActive: "../images/avi-card-blue.svg",
    active: false,
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
    active: true,
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
    iconActive: "../icons/sheild-active.svg",
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
    href: "user_StudSafe",
    icon: "../images/lock-icon.svg",
    iconActive: "../icons/lock-icon-active.svg",
    active: false,
  },
  {
    name: "Support",
    href: "user_Support",
    icon: "../images/support-icon.svg",
    iconActive: "../icons/support-active.svg",
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



const scoreHistory = [
  {
    id: 1,
    icon: '/images/card-gray.svg',
    title: 'Timely Rent Payment',
    date: 'Jan 28, 2024',
    time: '2:30 PM',
    change: 15,
    type: 'positive',
    status: 'System',
    git: '/icons/git-icon.svg',
  },
  {
    id: 2,
    icon: '/images/wallet-icon3.svg',
    title: 'High Credit Utilization (>70%)',
    date: 'Jan 25, 2024',
    time: '9:15 AM',
    change: -10,
    type: 'negative',
    status: 'System',
    git: '/icons/git-icon.svg',
  },
  {
    id: 3,
    icon: '/images/file-icon2.svg',
    title: 'New Loan Approved',
    date: 'Jan 20, 2024',
    time: '11:45 AM',
    change: 25,
    type: 'positive',
    status: 'Admin: Sarah M.',
    git: '/images/user-icon2.svg',
  },
  {
    id: 4,
    icon: '/icons/ac-profile.svg',
    title: 'Account Age Milestone (1 Year)',
    date: 'Jan 15, 2024',
    time: '4:20 PM',
    change: 10,
    type: 'positive',
    status: 'System',
    git: '/icons/git-icon.svg',
  },
  {
    id: 5,
    icon: '/images/card-gray.svg',
    title: 'Late Payment Warning',
    date: 'Jan 10, 2024',
    time: '8:00 AM',
    change: -5,
    type: 'negative',
    status: 'System',
    git: '/icons/git-icon.svg',
  },
  {
    id: 6,
    icon: '/images/card-gray.svg',
    title: 'Rent Payment Streak Bonus',
    date: 'Dec 28, 2023',
    time: '10:00 AM',
    change: 8,
    type: 'positive',
    status: 'System',
    git: '/icons/git-icon.svg',
  },
  {
    id: 7,
    icon: '/images/card-gray.svg',
    title: 'Consistent Balance Maintained',
    date: 'Jan 5, 2024',
    time: '1:30 PM',
    change: 20,
    type: 'positive',
    status: 'System',
    git: '/icons/git-icon.svg',
  }
]

const recommendations = [
  { id: 1, text: 'Maintain a balance above €200 for 30 consecutive days to gain bonus points.', points: 20 },
  { id: 2, text: 'Reduce credit utilization below 30% to improve your score faster.', points: 15 },
  { id: 3, text: 'Set up automatic rent payments to ensure timely payments.', points: 10 },
  { id: 4, text: 'Keep your account active with at least one transaction per month.', points: 5 }
]


const UsersStudentsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [enabled, setEnabled] = useState(false); //  Toggle Switch
  const [enabled2, setEnabled2] = useState(false); //  Toggle Switch
  const [name, setName] = useState(''); // input Field
  const [enabledCheck, setEnabledCheck] = useState(false) // CHECKBOX

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
        <div className='pt-6 mb-6'>
          <h4 className='text-blue-1300 font-semibold text-2xl leading-8'>Financing Profile</h4>
          <p className='text-gray-1200 font-normal text-base leading-6'>Your complete credit and loan status overview</p>
        </div>
        <div className='2xl:flex grid md:grid-cols-3 grid-cols-1 4xl:gap-8.5 gap-4'>
          <div className='2xl:max-w-84 max-w-full w-full flex-1 bg-white border border-solid border-gray-1000 4xl:p-5 md:px-2.5 px-4 py-5 rounded-lg shadow-61xl'>
            <div className='flex items-center justify-between mb-3'>
              <h4 className='text-gray-1200 text-sm font-medium leading-5'>Loan Status</h4>
              <span className='rounded-lg bg-blue-2200/10 w-8 h-8 flex items-center justify-center'>
                <Image
                  src="../images/price-down-arrow-blue.svg"
                  width="16"
                  height="16"
                  alt=""
                />
              </span>
            </div>
            <span className='text-blue-2200 font-medium text-sm leading-5 inline-flex items-center justify-center bg-blue-2200/10 border border-solid border-blue-2200/20 rounded-full h-6.5 px-2.5'>Active</span>
            <p className='text-gray-1200 font-normal text-xs leading-4 mt-3'>Current loan is in repayment</p>
          </div>
          <div className='2xl:max-w-84 max-w-full w-full flex-1 bg-white border border-solid border-gray-1000 4xl:p-5 md:px-2.5 px-4 py-5 rounded-lg shadow-61xl'>
            <div className='flex items-center justify-between mb-3'>
              <h4 className='text-gray-1200 text-sm font-medium leading-5'>Total Principal</h4>
              <span className='rounded-lg bg-yellow1800 w-8 h-8 flex items-center justify-center'>
                <Image
                  src="../icons/wallet-green.svg"
                  width="16"
                  height="16"
                  alt=""
                />
              </span>
            </div>
            <h3 className='text-blue-1300 text-2xl leading-8 font-bold'>$5,400.00</h3>
            <p className='text-gray-1200 font-normal text-xs leading-4 mt-1'>Original amount borrowed</p>
          </div>
          <div className='2xl:max-w-84 max-w-full w-full flex-1 bg-white border border-solid border-gray-1000 4xl:p-5 md:px-2.5 px-4 py-5 rounded-lg shadow-61xl'>
            <div className='flex items-center justify-between mb-3'>
              <h4 className='text-gray-1200 text-sm font-medium leading-5'>Remaining Balance</h4>
              <span className='rounded-lg bg-yellow1800 w-8 h-8 flex items-center justify-center'>
                <Image
                  src="../icons/wallet-red.svg"
                  width="16"
                  height="16"
                  alt=""
                />
              </span>
            </div>
            <ProgressBar value={47} barColor='bg-blue-2200' bgColor='bg-gray-1600' className='h-1.5!' />
            <p className='text-gray-1200 font-normal text-xs leading-4 mt-1'>47% paid off</p>
          </div>
          <div className='2xl:col-span-1 md:col-span-3 4xl:max-w-105.5 2xl:max-w-98.75 max-w-full w-full bg-white border border-solid border-gray-1000 px-3 py-5 rounded-lg shadow-61xl'>
            <div className='flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-4 justify-between'>
              <div className=''>
                <h4 className='text-blue1700 text-xl leading-7 font-bold mb-0.5'>Credit Score</h4>
                <p className='text-SteelGray text-sm leading-4 font-normal'>John Anderson • <span className='text-xs'>USR-2847391</span></p>
              </div>
              <Link onClick={() => setIsOpen(true)} href={"#"} className='py-2.5 px-4 bg-gray-2000/60 rounded-xl h-13 inline-flex items-center gap-3 text-SteelGray text-sm leading-5 font-normal'>
                <span className='flex items-center justify-center bg-gray-2000 rounded-2xl w-8 h-8'>
                  <Image
                    src="../icons/file-gray.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                </span>
                View Full Report
              </Link>
            </div>
            <div className='flex items-center justify-center mt-5'>
              <Image
                src="/images/graph-img.png"
                width="289"
                height="150"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className='flex xl:flex-row flex-col items-start 4xl:gap-12.5 gap-4 mt-6'>
          <div className='xl:w-[calc(100%-411px)] w-full'>
            <div className='flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-4 justify-between bg-white border border-solid border-gray-1000 rounded-lg p-5'>
              <div className='flex items-center gap-4'>
                <span className='bg-blue-2200/10 rounded-xl flex items-center justify-center w-12 h-12'>
                  <Image
                    src="../icons/calendar-blue.svg"
                    width="24"
                    height="24"
                    alt=""
                  />
                </span>
                <div className='flex-1 w-full'>
                  <span className='text-gray-1200 text-sm leading-5 font-normal block'>Next Installment Due</span>
                  <h4 className='text-blue-1300 font-semibold text-lg leading-7'>Sat, Feb 15, 2025</h4>
                  <p className='text-gray-1200 text-xs leading-6 font-normal block'>17 days remaining</p>
                </div>
              </div>
              <div className='sm:text-right'>
                <span className='text-gray-1200 font-inter font-normal text-sm leading-5 block'>Amount Due</span>
                <h4 className='text-blue-1300 mb-2 font-bold text-2xl leading-8'>$468.75</h4>
                <Link href={"#"} className='sm:w-full w-full inline-flex items-center justify-center gap-3 text-white text-sm leading-5 font-medium bg-blue-2200 hover:bg-blue-2200/90 rounded-md h-9 px-3'>
                  Pay Now
                  <Image
                    src="../images/right-arrow-white.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className='bg-white mt-6 border border-solid border-gray-1000 rounded-lg shadow-61xl'>
              <div className='sm:p-6 p-4'>
                <h4 className='text-blue-1300 mb-1.5 flex items-center gap-2 font-semibold text-lg leading-7 tracking-[-0.45px]'>
                  <Image
                    src="/icons/Repayment-icon.svg"
                    width="20"
                    height="20"
                    alt=""
                  />
                  Repayment Ledger
                </h4>
                <p className='text-gray-1200 font-normal text-sm leading-5'>Full schedule of loan repayments</p>
              </div>
              <UserFinancingTable />
            </div>
          </div>
          <div className='xl:max-w-102.75 w-full'>
            <div className='bg-white border border-solid border-gray-3100 rounded-lg shadow-4xl md:p-6 p-4'>
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
            <div className='bg-white mt-8 border border-solid border-gray-3100 rounded-lg shadow-4xl px-2.5 py-6'>
              <div className=''>
                <h4 className='text-blue-1300 mb-1.5 flex items-center gap-2 font-semibold text-lg leading-7 tracking-[-0.45px]'>
                  <Image
                    src="/icons/file-blue.svg"
                    width="20"
                    height="20"
                    alt=""
                  />
                  Credit Compliance & Documents
                </h4>
                <p className='text-gray-1200 font-normal text-sm leading-5'>Required financing documentation</p>
              </div>
              <div className='mt-3 flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-4 justify-between border border-solid border-gray-1000 rounded-lg bg-white p-3'>
                <div className='flex items-center gap-3'>
                  <span className='bg-blue-2200/10 rounded-lg w-[36.53px] h-10 flex items-center justify-center'>
                    <Image
                      src="/icons/file-blue.svg"
                      width="20"
                      height="20"
                      alt=""
                    />
                  </span>
                  <div className='flex-1 w-full'>
                    <h4 className='text-blue-1300 text-sm leading-5 font-medium'>Signed Loan Contract</h4>
                    <p className='text-gray-1200 text-xs leading-4 font-normal'>PDF • Uploaded Aug 20,
                      2024</p>
                  </div>
                </div>
                <div className='flex items-center justify-center gap-3 sm:w-auto w-full'>
                  <span className='px-2.5 h-5.5 inline-flex items-center gap-1 rounded-full font-semibold text-xs leading-4 border border-solid bg-yellow1800 border-lightgreen17/20 text-lightgreen17'>Approved</span>
                  <ul className='flex items-center gap-1'>
                    <li>
                      <Link href={"#"} className='flex items-center justify-center w-8 h-8'>
                        <Image
                          src="/images/eye-icon.svg"
                          width="16"
                          height="16"
                          alt=""
                          className='brightness-0'
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"} className='flex items-center justify-center w-8 h-8'>
                        <Image
                          src="/images/export-icon4.svg"
                          width="16"
                          height="16"
                          alt=""
                          className='brightness-0'
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='mt-3 flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-4 justify-between border border-solid border-gray-1000 rounded-lg bg-white p-3'>
                <div className='flex items-center gap-3'>
                  <span className='bg-blue-2200/10 rounded-lg w-[36.53px] h-10 flex items-center justify-center'>
                    <Image
                      src="/icons/file-blue.svg"
                      width="20"
                      height="20"
                      alt=""
                    />
                  </span>
                  <div className='flex-1 w-full'>
                    <h4 className='text-blue-1300 text-sm leading-5 font-medium'>Proof of
                      Income/Guarantee</h4>
                    <p className='text-gray-1200 text-xs leading-4 font-normal'>PDF • Uploaded Aug 18,
                      2024</p>
                  </div>
                </div>
                <div className='flex items-center justify-center gap-3 sm:w-auto w-full'>
                  <span className='px-2.5 h-5.5 inline-flex items-center gap-1 rounded-full font-semibold text-xs leading-4 border border-solid bg-yellow1800 border-lightgreen17/20 text-lightgreen17'>Approved</span>
                  <ul className='flex items-center gap-1'>
                    <li>
                      <Link href={"#"} className='flex items-center justify-center w-8 h-8'>
                        <Image
                          src="/images/eye-icon.svg"
                          width="16"
                          height="16"
                          alt=""
                          className='brightness-0'
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"} className='flex items-center justify-center w-8 h-8'>
                        <Image
                          src="/images/export-icon4.svg"
                          width="16"
                          height="16"
                          alt=""
                          className='brightness-0'
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='mt-3 flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-4 justify-between border border-solid border-gray-1000 rounded-lg bg-white p-3'>
                <div className='flex items-center gap-3'>
                  <span className='bg-blue-2200/10 rounded-lg w-[36.53px] h-10 flex items-center justify-center'>
                    <Image
                      src="/icons/file-blue.svg"
                      width="20"
                      height="20"
                      alt=""
                    />
                  </span>
                  <div className='flex-1 w-full'>
                    <h4 className='text-blue-1300 text-sm leading-5 font-medium'>University Enrollment
                      Letter</h4>
                    <p className='text-gray-1200 text-xs leading-4 font-normal'>PDF • Uploaded Aug 22,
                      2024</p>
                  </div>
                </div>
                <div className='flex items-center justify-center gap-3 sm:w-auto w-full'>
                  <span className='px-2.5 h-5.5 inline-flex items-center gap-1 rounded-full font-semibold text-xs leading-4 border border-solid bg-yellow1800 border-yellow-1100/20 text-yellow-1100'>Pending</span>
                  <ul className='flex items-center gap-1'>
                    <li>
                      <Link href={"#"} className='flex items-center justify-center w-8 h-8'>
                        <Image
                          src="/images/eye-icon.svg"
                          width="16"
                          height="16"
                          alt=""
                          className='brightness-0'
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"} className='flex items-center justify-center w-8 h-8'>
                        <Image
                          src="/images/export-icon4.svg"
                          width="16"
                          height="16"
                          alt=""
                          className='brightness-0'
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white mt-6 border border-solid border-gray-1000 rounded-lg shadow-61xl sm:p-6 p-4'>
          <div className=''>
            <h4 className='text-blue-1300 mb-1.5 flex items-center gap-2 font-semibold text-lg leading-7 tracking-[-0.45px]'>
              <Image
                src="/images/shield-blue.svg"
                width="20"
                height="20"
                alt=""
              />
              Owner/Admin Controls
            </h4>
            <p className='text-gray-1200 font-normal text-sm leading-5'>Manage loan terms and apply adjustments</p>
          </div>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 4xl:gap-27.5 xl:gap-8 gap-4 mt-3'>
            <div className='border border-solid border-gray-1000 rounded-lg xl:p-4 px-2 py-4'>
              <h4 className='text-blue-1300 mb-2 flex items-center gap-2 font-medium text-sm leading-5'>
                <span className='bg-blue-2200/10 rounded-lg w-8 h-8 flex items-center justify-center'>
                  <Image
                    src="/icons/refresh-blue.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                </span>
                Restructure Loan
              </h4>
              <p className='text-gray-1200 mb-3 flex items-center font-normal xl:text-xs text-[11px] leading-4'>Change monthly payment or interest rate. Requires 4-eyes approval.</p>
              <Link onClick={() => setIsOpen4(true)} href={""} className='w-full flex items-center justify-center gap-3.5 text-blue-1300 font-inter font-normal text-sm leading-5 border border-solid border-gray-1000 rounded-md bg-white h-9 px-3 hover:bg-gray-1600 transition-all duration-500 ease-in-out'>
                <Image
                  src="/icons/setting-icon.svg"
                  width="16"
                  height="16"
                  alt=""
                />
                Restructure
              </Link>
            </div>
            <div className='border border-solid border-gray-1000 rounded-lg xl:p-4 px-2 py-4'>
              <h4 className='text-blue-1300 mb-2 flex items-center gap-2 font-medium text-sm leading-5'>
                <span className='bg-yellow1800 rounded-lg w-8 h-8 flex items-center justify-center'>
                  <Image
                    src="/images/warning.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                </span>
                Apply Penalty
              </h4>
              <p className='text-gray-1200 mb-3 flex items-center font-normal xl:text-xs text-[11px] leading-4'>Manually add a late fee for missed or delayed payments.</p>
              <Link onClick={() => setIsOpen2(true)} href={""} className='w-full flex items-center justify-center gap-3.5 text-red-1300 font-inter font-normal text-sm leading-5 border border-solid border-red-1300/30 rounded-md bg-white h-9 px-3 hover:bg-yellow1800 transition-all duration-500 ease-in-out'>
                <Image
                  src="/images/warning.svg"
                  width="16"
                  height="16"
                  alt=""
                />
                Apply Fee
              </Link>
            </div>
            <div className='border border-solid border-gray-1000 rounded-lg xl:p-4 px-2 py-4'>
              <h4 className='text-blue-1300 mb-2 flex items-center gap-2 font-medium text-sm leading-5'>
                <span className='bg-yellow1800 rounded-lg w-8 h-8 flex items-center justify-center'>
                  <Image
                    src="/images/clock-yellow.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                </span>
                Grace Period
              </h4>
              <p className='text-gray-1200 mb-3 flex items-center font-normal xl:text-xs text-[11px] leading-4'>Delay the next payment without applying a penalty.</p>
              <Link onClick={() => setIsOpen3(true)} href={""} className='w-full flex items-center justify-center gap-3.5 text-yellow-1100 font-inter font-normal text-sm leading-5 border border-solid border-yellow-1100/30 rounded-md bg-white h-9 px-3 hover:bg-yellow1800 transition-all duration-500 ease-in-out'>
                <Image
                  src="/images/clock-yellow.svg"
                  width="16"
                  height="16"
                  alt=""
                />
                Request
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/****** view full report Modal *******/}

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        panelClassName="max-w-[672px] bg-gray-1500 relative h-full overflow-y-auto sm:p-6 px-4 pb-4 pt-12"
      >
        <Link onClick={() => setIsOpen(false)} href={"#"} className="flex items-center justify-center rounded-full sm:w-8 sm:h-8 w-6 h-6 absolute sm:top-8 top-6 shadow-75xl right-6">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className='mb-6'>
          <h4 className='text-blue-1300 font-inter font-semibold text-xl leading-7 tracking-[-0.5px]'>Credit Score History & Insights</h4>
          <p className='text-gray-1200 font-inter font-normal text-sm leading-5'>Track changes and get recommendations to improve your score</p>
        </div>
        <div className="">
          <CreditScoreCard score={742} status="Good" updated="Jan 30, 2026 at 8:01 PM" />
          <ScoreHistory history={scoreHistory} />
          <Recommendations items={recommendations} />
        </div>
        <Link href={"#"} className='flex items-center justify-center border border-solid border-gray-1000 bg-white rounded-[10px] h-10 text-gray-1200 text-sm leading-5 font-semibold gap-2 hover:bg-gray-1600'> <Image src="/icons/Adjustment-icon.svg" width={16} height={16} alt="" />Manual Adjustment</Link>

      </Modal>
      {/****** APPLY PENALTY Modal *******/}

      <Modal
        isOpen={isOpen2}
        onClose={() => setIsOpen2(false)}
        panelClassName="max-w-[448px] bg-gray-1500 relative sm:p-6 px-4 pb-4 pt-12"
      >
        <Link onClick={() => setIsOpen2(false)} href={"#"} className="flex items-center justify-center rounded-full w-4 h-4 absolute  top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className='mb-6 flex items-center gap-2'>
          <span className='bg-red2100/10 rounded-lg w-9 h-9 flex items-center justify-center'>
            <Image
              src="/icons/sheild-error.svg"
              width="20"
              height="20"
              alt=""
            />
          </span>

          <div className='flex-1 w-full'>
            <h4 className='text-blue-1300 font-inter font-semibold text-xl leading-7 tracking-[-0.5px]'>Apply Late Fee / Penalty</h4>
            <p className='text-gray-1200 font-inter font-normal text-sm leading-5'>Charge a penalty to the tenant's account</p>
          </div>
        </div>
        <div className=''>
          <div className='mt-3'>
            <label className='text-blue-1300 block mb-1.5 font-normal text-[13.5px] leading-5'>Penalty Reason</label>
            <CustomSelect
              className='shadow-57xl'
              options={[
                { label: 'Select card type', value: 'Select card type' },
                { label: '2000', value: '2000' }
              ]}
            />
          </div>
          <div className='mt-5'>
            <label className='text-blue-1300 block mb-1.5 font-normal text-[13.5px] leading-5'>Amount</label>
            <InputField
              ClassName="bg-gray-1500 text-gray-3800 rounded-md! h-10!"
              type="name"
              placeholder="0.00"
              value={name}
              iconSrc="../images/dollar-icon.svg"
              onChange={(e: any) => setName(e.target.value)}
            />
          </div>
          <div className='mt-5 flex items-center justify-end bg-gray1700/50 border border-solid border-gray1600 rounded-lg p-3'>
            <div className='flex-1 w-full'>
              <h4 className='text-black13 font-inter font-normal text-[13.3px] leading-5'>Grace Period Waiver</h4>
              <p className='text-gray-1400 font-inter font-normal text-[11.1px] leading-4'>Waive penalty if paid within 48 hours</p>
            </div>
            <ToggleSwitch checked={enabled} onChange={setEnabled}
            />
          </div>
          <div className="mt-4">
            <ul className="flex items-center justify-end gap-3">
              <li>
                <button
                  onClick={() => setIsOpen2(false)}
                  className="px-4 cursor-pointer hover:bg-blue1900 hover:text-blue2000 transition-all duration-500 ease-in-out w-full border rounded-md text-gray-3800 font-medium text-sm leading-5 bg-gray-1500 border-solid border-grey-5400 h-10"
                >
                  Cancel
                </button>
              </li>
              <li>
                <button
                  className="cursor-pointer opacity-50 gap-2 px-4 flex items-center justify-center w-full hover:bg-red2100/90 hover:border-red2100/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal  text-sm leading-5 bg-red2100 border-solid border-red2100 h-10"
                >
                  <Image
                    src="/icons/sheild-error.svg"
                    width="16"
                    height="16"
                    alt=""
                    className='brightness-10000'
                  />
                  Charge Account
                </button>
              </li>
            </ul>
          </div>
        </div>


      </Modal>

      {/****** GRACE PERIOD Modal *******/}
      <Modal
        isOpen={isOpen3}
        onClose={() => setIsOpen3(false)}
        panelClassName="max-w-[448px] bg-gray-1500 relative sm:p-6 px-4 pb-4 pt-12"
      >
        <Link onClick={() => setIsOpen3(false)} href={"#"} className="flex items-center justify-center rounded-full w-4 h-4 absolute  top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className='mb-6 flex items-center gap-2'>
          <span className='bg-blue-1200/10 rounded-lg w-9 h-9 flex items-center justify-center'>
            <Image
              src="/icons/Period-icon.svg"
              width="20"
              height="20"
              alt=""
            />
          </span>

          <div className='flex-1 w-full'>
            <h4 className='text-black13 font-inter font-bold text-[17.7px] leading-7 tracking-[-0.45px]'>Grace Period Request</h4>
            <p className='text-gray-1400 font-inter font-normal text-[13px] leading-5'>Extend the payment deadline for Marcus Schmidt</p>
          </div>
        </div>
        <div className=''>
          <div className='mt-3'>
            <label className='text-blue-1300 block mb-2.5 font-normal text-[13.2px] leading-5'>Extension Duration</label>
            <ul className='grid grid-cols-3 gap-2'>
              <li>
                <Link href={"#"} className='bg-white py-3.5 border-2 border-solid border-blue1800 rounded-lg flex items-center justify-center flex-col'>
                  <h4 className='text-black13 text-xl leading-7 font-bold'>7</h4>
                  <p className='text-gray-1400 text-[11.1px] leading-4 font-normal mt-1.5'>days</p>
                </Link>
              </li>
              <li>
                <Link href={"#"} className='bg-white py-3.5 border-2 border-solid border-gray1600 rounded-lg flex items-center justify-center flex-col'>
                  <h4 className='text-black13 text-xl leading-7 font-bold'>14</h4>
                  <p className='text-gray-1400 text-[11.1px] leading-4 font-normal mt-1.5'>days</p>
                </Link>
              </li>
              <li>
                <Link href={"#"} className='bg-white py-3.5 border-2 border-solid border-gray1600 rounded-lg flex items-center justify-center flex-col'>
                  <h4 className='text-black13 text-xl leading-7 font-bold'>30</h4>
                  <p className='text-gray-1400 text-[11.1px] leading-4 font-normal mt-1.5'>days</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className='mt-5 flex items-center justify-end bg-gray1700/50 border border-solid border-gray1600 rounded-lg p-3'>
            <div className='flex-1 w-full'>
              <h4 className='text-black13 font-inter font-normal text-[13.3px] leading-5'>Accrue Interest</h4>
              <p className='text-gray-1400 font-inter font-normal text-[11.1px] leading-4'>Accrue interest during grace period?</p>
            </div>
            <ToggleSwitch checked={enabled2} onChange={setEnabled2}
            />
          </div>
          <div className='mt-5'>
            <label className="flex items-start gap-2 cursor-pointer">
              <Checkbox
                checked={enabledCheck}
                onChange={setEnabledCheck}
                className="group block w-4 h-4 rounded border border-solid border-blue-1200 bg-white data-checked:bg-blue1400 data-checked:border-blue1400 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:data-disabled:bg-gray-500"
              >
                <svg
                  className="stroke-white opacity-0 group-data-checked:opacity-100"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Checkbox>

              <p
                onClick={() => setEnabledCheck(!enabledCheck)}
                className="flex-1 w-full text-gray-1400 text-[13px] leading-4 font-normal"
              >
                I confirm this grace period extension and understand the
                impact on the payment schedule.
              </p>
            </label>
          </div>
          <div className="mt-6">
            <ul className="flex items-center justify-end gap-3">
              <li>
                <button
                  onClick={() => setIsOpen3(false)}
                  className="px-4 cursor-pointer hover:bg-blue1900 hover:text-blue2000 transition-all duration-500 ease-in-out w-full border rounded-md text-gray-3800 font-medium text-sm leading-5 bg-gray-1500 border-solid border-grey-5400 h-10"
                >
                  Cancel
                </button>
              </li>
              <li>
                <button
                  className="cursor-pointer opacity-50 gap-2 px-4 flex items-center justify-center w-full hover:bg-blue-1200/90 hover:border-blue-1200/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal  text-sm leading-5 bg-blue-1200 border-solid border-blue-1200 h-10"
                >
                  <Image
                    src="/icons/Period-icon.svg"
                    width="16"
                    height="16"
                    alt=""
                    className='brightness-10000'
                  />
                  Grant Grace Period
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Modal>

      {/****** LOAN MODIFICATION Modal *******/}
      <Modal
        isOpen={isOpen4}
        onClose={() => setIsOpen4(false)}
        panelClassName="max-w-[540px] bg-gray-1500 relative sm:overflow-y-hidden border-0 sm:h-auto h-full overflow-y-auto"
      >
        <span className='bg-linear-to-r from-royalBlue131 from-0 via-royalBlue131/70 via-50% to-royalBlue131 to-100% h-1.5 block w-full absolute top-0 left-0 rounded-t-xl'></span>
        <Link onClick={() => setIsOpen4(false)} href={"#"} className="flex items-center justify-center rounded-full w-4 h-4 absolute sm:top-4 sm:right-4 top-3 right-3">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className='sm:p-6 p-4'>
          <div className=''>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lighrgrey47">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3335 4.66602H7.3335"
                    stroke="#1252A1"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.3335 11.334H3.3335"
                    stroke="#1252A1"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.3335 13.334C12.4381 13.334 13.3335 12.4386 13.3335 11.334C13.3335 10.2294 12.4381 9.33398 11.3335 9.33398C10.2289 9.33398 9.3335 10.2294 9.3335 11.334C9.3335 12.4386 10.2289 13.334 11.3335 13.334Z"
                    stroke="#1252A1"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.6665 6.66602C5.77107 6.66602 6.6665 5.77059 6.6665 4.66602C6.6665 3.56145 5.77107 2.66602 4.6665 2.66602C3.56193 2.66602 2.6665 3.56145 2.6665 4.66602C2.6665 5.77059 3.56193 6.66602 4.6665 6.66602Z"
                    stroke="#1252A1"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="sm:text-[19.5px] text-base tracking-[-0.5px] font-bold text-blue-1300 leading-7">
                Loan Modification & Restructuring
              </h2>
            </div>
            <p className="text-lighrgrey48 text-[13px] font-normal leading-[22.8px]">
              Adjust loan terms below. Changes require super-admin approval before taking effect.
            </p>
          </div>
          <div className="mt-4">
            <p className="mb-3 text-xs font-normal uppercase tracking-[0.6px] text-lighrgrey48">
              Current Terms
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-lighrgrey47/50 border border-solid border-lighrgrey49/70 p-3">
                <p className="text-[11.4px] font-normal leading-4 text-lighrgrey48 mb-1">Principal</p>
                <p className="text-Black236 text-[15.2px] font-bold leading-7">$5,400</p>
              </div>
              <div className="rounded-xl bg-lighrgrey47/50 border border-solid border-lighrgrey49/70 p-3">
                <p className="text-[11.4px] font-normal leading-4 text-lighrgrey48 mb-1">Interest Rate</p>
                <p className="text-Black236 text-[15.2px] font-bold leading-7">8.5%</p>
              </div>
              <div className="rounded-xl bg-lighrgrey47/50 border border-solid border-lighrgrey49/70 p-3">
                <p className="text-[11.4px] font-normal leading-4 text-lighrgrey48 mb-1">Tenure</p>
                <p className="text-Black236 text-[15.2px] font-bold leading-7">10 mo</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-3 text-xs font-normal uppercase tracking-[0.6px] text-lighrgrey48">
              New Terms
            </p>
            <LoanInterestRate />
          </div>
        </div>
        <div className="bg-lighrgrey47/30 border-t border-solid border-lighrgrey49/60 px-6 py-4">
          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-3">
            <li>
              <button
                onClick={() => setIsOpen4(false)}
                className="px-4 cursor-pointer hover:bg-blue1900 hover:text-blue2000 transition-all duration-500 ease-in-out w-full border rounded-[10px] text-gray-3800 font-normal text-[13.3px] leading-5 bg-gray-1500 border-solid border-grey-5400 h-10"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer gap-2 px-4 flex items-center justify-center w-full hover:bg-royalBlue131/90 hover:border-royalBlue131/90 transition-all duration-500 ease-in-out border rounded-[10px] text-white font-normal text-[13px] leading-5 bg-royalBlue131 border-solid border-royalBlue131 h-10"
              >
                <Image
                  src="/icons/Adjustment-icon.svg"
                  width="16"
                  height="16"
                  alt=""
                  className='brightness-10000'
                />
                Grant Grace Period
              </button>
            </li>
          </ul>
        </div>

      </Modal>

    </div >
  );
};

export default UsersStudentsPage;
