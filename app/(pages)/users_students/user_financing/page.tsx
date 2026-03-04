"use client";
import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import ProgressBar from "@/app/components/ProgressBar";
import UserFinancingTable from '@/app/components/UsersStudent/UserFinancingTable';



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


const UsersStudentsPage = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<string>("All Countries");


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
              <Link href={"#"} className='py-2.5 px-4 bg-gray-2000/60 rounded-xl h-13 inline-flex items-center gap-3 text-SteelGray text-sm leading-5 font-normal'>
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
              <Link href={""} className='w-full flex items-center justify-center gap-3.5 text-blue-1300 font-inter font-normal text-sm leading-5 border border-solid border-gray-1000 rounded-md bg-white h-9 px-3 hover:bg-gray-1600 transition-all duration-500 ease-in-out'>
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
              <Link href={""} className='w-full flex items-center justify-center gap-3.5 text-red-1300 font-inter font-normal text-sm leading-5 border border-solid border-red-1300/30 rounded-md bg-white h-9 px-3 hover:bg-yellow1800 transition-all duration-500 ease-in-out'>
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
              <Link href={""} className='w-full flex items-center justify-center gap-3.5 text-yellow-1100 font-inter font-normal text-sm leading-5 border border-solid border-yellow-1100/30 rounded-md bg-white h-9 px-3 hover:bg-yellow1800 transition-all duration-500 ease-in-out'>
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
    </div>
  );
};

export default UsersStudentsPage;
