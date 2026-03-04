"use client";
import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import Modal from "@/app/components/Modal";
import Button from "@/app/components/ui/Button";



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
    active: false,
  },
  {
    name: "Housing",
    href: "user_housing",
    icon: "../images/house-icon.svg",
    iconActive: "../icons/house-icon-active.svg",
    active: true,
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
        <div className='flex xl:flex-row flex-col items-start gap-6 mt-12 5xl:pl-6 5xl:pr-12.5'>
          <div className='xl:w-[calc(100%-300px)] w-full p'>
            <div className='relative flex 2xl:flex-row flex-col 2xlitems-center 2xl:gap-0 shadow-62xl gap-4 justify-between bg-white border border-solid border-gray-1000 rounded-lg pt-7 pb-6 4xl:px-11 2xl:px-5 px-3'>
              <span className='absolute top-0 left-1/2 -translate-x-1/2 flex items-center h-1 w-[96%] bg-linear-to-r from-lightgreen17  to-lightgreen17/60'></span>
              <div className='flex sm:flex-row flex-col items-start 2xl:gap-4 gap-2'>
                <span className='bg-gray-1600 rounded-xl flex items-center justify-center w-14 h-14'>
                  <Image
                    src="../images/building-icon2.svg"
                    width="28"
                    height="28"
                    alt=""
                  />
                </span>
                <div className='flex-1 w-full'>
                  <div className='flex sm:flex-row flex-col-reverse sm:items-center items-start sm:gap-3 gap-2'>
                    <h4 className='text-blue-1300 text-xl leading-7 font-semibold flex items-center'>Student Residence Lyon</h4>
                    <span className='inline-flex items-center bg-green55 rounded-full h-6.5 px-2.5 gap-1.5 border border-solid border-lightgreen17/20 text-green54 font-inter font-medium text-xs leading-4'><span className="flex items-center bg-lightgreen17 rounded-full w-1.5 h-1.5"></span>Active Lease</span>
                  </div>
                  <div className='flex sm:flex-nowrap flex-wrap items-center gap-1.5 my-1.5'>
                    <p className='text-gray-1200 text-xs leading-5 gap-1.5 font-normal flex items-center'>
                      <Image
                        src="../images/location-gray.svg"
                        width="16"
                        height="16"
                        alt=""
                      />
                      45 Rue de la République, 69002 Lyon, France
                    </p>
                    <span className='text-gray-1200/40 text-base leading-6 flex items-center'>•</span>
                    <strong className='text-blue-1300 text-sm leading-5 block'>Room 402</strong>
                  </div>
                  <p className='text-gray-1200 text-xs leading-5 gap-1.5 font-normal flex items-center'>
                    <Image
                      src="../images/calendar-icon3.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                    Sept 1, 2024 — Aug 31, 2025
                  </p>
                </div>
              </div>
              <div className='2xl:text-right text-center'>
                <span className='text-gray-1200 font-inter font-normal text-sm leading-5 block'>Monthly Rent</span>
                <h4 className='text-blue-1300 mb-2 font-bold text-2xl leading-8'>€650</h4>
                <Link href={"#"} className='w-full inline-flex items-center justify-center gap-1.5 text-lightgreen17 text-xs leading-4 font-medium'>
                  <Image
                    src="../icons/card-lightgreen.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                  Paid via StudPay AVI Release
                </Link>
              </div>
            </div>
            <div className='grid 4xl:grid-cols-2 grid-cols-1 gap-6 mt-6'>
              <div className='px-2.5 bg-white border border-solid border-gray-1000 rounded-lg shadow-61xl'>
                <div className='border-b border-solid border-gray-1000 flex items-center gap-2.5 px-5 py-4'>
                  <span className="bg-gray-1600 rounded-lg w-8 h-8 flex items-center justify-center">
                    <Image
                      src="/images/shield-dark.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                  </span>
                  <h4 className="text-blue-1300 font-semibold text-sm leading-5">Rental Guarantee & Insurance</h4>
                </div>
                <div className='5xl:p-5 px-3 py-5 grid 2xl:grid-cols-2 grid-cols-1 gap-6'>
                  <div className=''>
                    <div className='flex items-center mb-1.5 2xl:justify-start justify-between'>
                      <h4 className='text-gray-1200 text-xs leading-4 uppercase font-medium'>StudPay Rental
                        Guarantee
                      </h4>
                      <span className='inline-flex items-center bg-green55 rounded-full h-6.5 px-2.5 gap-1.5 border border-solid border-lightgreen17/20 text-green54 font-inter font-medium text-xs leading-4'><span className='flex items-center bg-lightgreen17 rounded-full w-1.5 h-1.5'></span> Verified</span>
                    </div>
                    <h4 className='text-gray-1200 text-sm leading-4 font-normal'>
                      Garantie Locative
                    </h4>
                    <div className='mt-4 bg-gray-1600/50 5xl:p-4 p-2.5 w-full'>
                      <ul>
                        <li className='flex mb-3 items-center justify-between text-gray-1200 5xl:text-sm text-xs leading-5 font-normal'>
                          Security Deposit
                          <span className='flex items-center gap-1 text-blue-1300 5xl:text-lg text-base leading-7 font-semibold'>
                            <Image
                              src="/icons/euro-sign.svg"
                              width="16"
                              height="16"
                              alt=""
                            />
                            1,200
                          </span>
                        </li>
                        <li className='flex mb-3 items-center justify-between text-gray-1200 5xl:text-sm text-xs leading-5 font-normal'>
                          Coverage Amount
                          <span className='flex items-center gap-1 text-blue-1300 5xl:text-sm text-xs leading-5 font-medium'>
                            €15,600
                          </span>
                        </li>
                        <li className='flex items-center justify-between text-gray-1200 5xl:text-sm text-xs leading-5 font-normal'>
                          Provider
                          <span className='flex items-center gap-1 text-blue-1300 5xl:text-sm text-xs leading-5 font-medium'>
                            StudPay Guarantee
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className=''>
                    <div className='flex items-start justify-between mb-1.5'>
                      <h4 className='text-gray-1200 5xl:text-xs text-[10px] leading-4 uppercase font-medium'>
                        Housing Insurance
                        <span className='block 5xl:text-xs text-[10px] 5xl:leading-5 leading-4'>Multirisque Habitation</span>
                      </h4>
                      <span className='inline-flex items-center bg-green55 rounded-full h-6.5 px-2.5 gap-1.5 border border-solid border-lightgreen17/20 text-green54 font-inter font-medium text-xs leading-4'><span className='flex items-center bg-lightgreen17 rounded-full w-1.5 h-1.5'></span> Active</span>
                    </div>
                    <div className='my-4  bg-gray-1600/50 5xl:p-4 p-2.5 w-full'>
                      <ul>
                        <li className='flex mb-3 items-center justify-between text-gray-1200 5xl:text-sm text-xs leading-5 font-normal'>
                          Policy
                          Number
                          <span className='flex items-center gap-1 text-blue-1300 5xl:text-lg text-sm 5xl:leading-7 leading-6 font-semibold'>
                            MRH-2024-
                            98765
                          </span>
                        </li>
                        <li className='flex mb-3 items-center justify-between text-gray-1200 5xl:text-sm text-xs leading-5 font-normal'>
                          Coverage
                          Type
                          <span className='flex items-center gap-1 text-blue-1300 5xl:text-sm text-xs leading-5 font-medium'>
                            Comprehensive
                          </span>
                        </li>
                        <li className='flex items-center justify-between text-gray-1200 5xl:text-sm text-xs leading-5 font-normal'>
                          Annual Premium
                          <span className='flex items-center gap-1 text-blue-1300 5xl:text-sm text-xs leading-5 font-medium'>
                            €89.00
                          </span>
                        </li>
                      </ul>
                    </div>
                    <Link href={"#"} className='flex items-center justify-center bg-white-1100 border border-solid border-gray-1000 rounded-md h-9 px-3 5xl:text-sm text-[11px] leading-5 font-medium'>
                      <Image
                        src="/icons/file-check.svg"
                        width="16"
                        height="16"
                        alt=""
                        className='mr-2'
                      />
                      View Insurance Policy
                      <Image
                        src="/icons/expend-icon2.svg"
                        width="16"
                        height="16"
                        alt=""
                        className='5xl:ml-6 ml-2'
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='px-2.5 bg-white border border-solid border-gray-1000 rounded-lg shadow-61xl'>
                <div className='border-b border-solid border-gray-1000 flex items-center gap-2.5 px-5 py-4'>
                  <span className="bg-gray-1600 rounded-lg w-8 h-8 flex items-center justify-center">
                    <Image
                      src="/images/setting-icon.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                  </span>
                  <h4 className="text-blue-1300 font-semibold text-sm leading-5">Management Controls</h4>
                </div>
                <div className='5xl:p-5 px-3 py-5'>
                  <p className='text-gray-1200 text-sm leading-4 font-normal'>
                    Admin actions for managing this housing reservation and lease agreement.
                  </p>
                  <div className='grid sm:grid-cols-3 grid-cols-1 gap-3 mt-4'>
                    <Link href={"#"} onClick={() => setIsOpen(true)} className='bg-white-1100 flex items-center justify-center flex-col rounded-md border border-solid border-red-1300/30 text-center py-4 5xl:px-2 px-1'>
                      <Image
                        src='/images/cross-red.svg'
                        width='16'
                        height='16'
                        alt=''
                      />
                      <h4 className='text-blue-1300 text-sm leading-5 font-medium mt-2'>Terminate Lease</h4>
                      <p className='text-gray-1200 text-xs leading-4 font-medium'>End agreement & refund</p>
                    </Link>
                    <Link href={"#"} className='bg-white-1100 flex items-center justify-center flex-col rounded-md border border-solid border-lightgreen17/30 text-center py-4 5xl:px-2 px-1'>
                      <Image
                        src='/icons/card-lightgreen.svg'
                        width='16'
                        height='16'
                        alt=''
                      />
                      <h4 className='text-blue-1300 text-sm leading-5 font-medium mt-2'>Record Payment</h4>
                      <p className='text-gray-1200 text-xs leading-4 font-medium'>Mark rent as paid</p>
                    </Link>
                    <Link href={"#"} className='bg-white-1100 flex items-center justify-center flex-col rounded-md border border-solid border-gray-1000 text-center py-4 5xl:px-2 px-1'>
                      <Image
                        src='/images/email-gray.svg'
                        width='16'
                        height='16'
                        alt=''
                      />
                      <h4 className='text-blue-1300 text-sm leading-5 font-medium mt-2'>Contact Landlord</h4>
                      <p className='text-gray-1200 text-xs leading-4 font-medium'>Open support ticket</p>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
            <div className='bg-white mt-6 border border-solid border-gray-3100 rounded-lg shadow-4xl px-5'>
              <div className='border-b border-solid border-gray-1000 flex items-center gap-2.5 px-5 py-4'>
                <span className="bg-gray-1600 rounded-lg w-8 h-8 flex items-center justify-center">
                  <Image
                    src="/icons/folder-icon.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                </span>
                <h4 className="text-blue-1300 font-semibold text-sm leading-5">Documents & Contracts Vault</h4>
              </div>
              <div className='4xl:p-5 px-0 py-5'>
                <div className='flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 mb-2 justify-between border border-solid border-gray-1000 bg-gray-1600/30 hover:bg-gray-1600/60 p-4 rounded-lg'>
                  <div className='flex items-center gap-4'>
                    <span className='w-10 h-10 border border-solid border-gray-1000 bg-white rounded-lg flex items-center justify-center'>
                      <Image
                        src="/icons/file-gray.svg"
                        width="20"
                        height="20"
                        alt=""
                      />
                    </span>
                    <div className=''>
                      <h4 className='text-blue-1300 text-sm leading-5 font-medium flex items-center gap-2'>
                        Lease Agreement
                        <Image
                          src="/icons/check-icon3.svg"
                          width="16"
                          height="16"
                          alt=""
                        />
                      </h4>
                      <p className='text-gray-1200 text-xs leading-4 font-normal'>Bail • Sept 1, 2024 • 2.4 MB</p>
                    </div>
                  </div>
                  <ul className='flex items-center sm:w-auto w-full sm:justify-strat justify-center gap-2'>
                    <li>
                      <Link href={"#"} className='px-3 py-2 hover:bg-gray-1600 inline-flex items-center gap-1.5 text-blue-1300 text-sm leading-5 font-medium'>
                        <Image
                          src="/images/eye-icon.svg"
                          width="16"
                          height="16"
                          alt=""
                          className='brightness-0'
                        />
                        View
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"} className='px-3 py-2 hover:bg-gray-1600 inline-flex items-center gap-1.5 text-blue-1300 text-sm leading-5 font-medium'>
                        <Image
                          src="/icons/export-icon-4.svg"
                          width="16"
                          height="16"
                          alt=""
                          className='brightness-0'
                        />
                        Download
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 mb-2 justify-between border border-solid border-gray-1000 bg-gray-1600/30 hover:bg-gray-1600/60 p-4 rounded-lg'>
                  <div className='flex items-center gap-4'>
                    <span className='w-10 h-10 border border-solid border-gray-1000 bg-white rounded-lg flex items-center justify-center'>
                      <Image
                        src="/icons/file-gray.svg"
                        width="20"
                        height="20"
                        alt=""
                      />
                    </span>
                    <div className=''>
                      <h4 className='text-blue-1300 text-sm leading-5 font-medium flex items-center gap-2'>
                        Inventory Report
                        <Image
                          src="/icons/check-icon3.svg"
                          width="16"
                          height="16"
                          alt=""
                        />
                      </h4>
                      <p className='text-gray-1200 text-xs leading-4 font-normal'>État des Lieux • Sept 1, 2024 • 8.1 MB</p>
                    </div>
                  </div>
                  <ul className='flex items-center sm:w-auto w-full sm:justify-strat justify-center gap-2'>
                    <li>
                      <Link href={"#"} className='px-3 py-2 hover:bg-gray-1600 inline-flex items-center gap-1.5 text-blue-1300 text-sm leading-5 font-medium'>
                        <Image
                          src="/images/eye-icon.svg"
                          width="16"
                          height="16"
                          alt=""
                          className='brightness-0'
                        />
                        View
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"} className='px-3 py-2 hover:bg-gray-1600 inline-flex items-center gap-1.5 text-blue-1300 text-sm leading-5 font-medium'>
                        <Image
                          src="/icons/export-icon-4.svg"
                          width="16"
                          height="16"
                          alt=""
                          className='brightness-0'
                        />
                        Download
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 mb-2 justify-between border border-solid border-gray-1000 bg-gray-1600/30 hover:bg-gray-1600/60 p-4 rounded-lg'>
                  <div className='flex items-center gap-4'>
                    <span className='w-10 h-10 border border-solid border-gray-1000 bg-white rounded-lg flex items-center justify-center'>
                      <Image
                        src="/icons/file-gray.svg"
                        width="20"
                        height="20"
                        alt=""
                      />
                    </span>
                    <div className=''>
                      <h4 className='text-blue-1300 text-sm leading-5 font-medium flex items-center gap-2'>
                        Rent Receipt - January
                        <Image
                          src="/icons/check-icon3.svg"
                          width="16"
                          height="16"
                          alt=""
                        />
                      </h4>
                      <p className='text-gray-1200 text-xs leading-4 font-normal'>Quittance • Jan 5, 2025 • 156 KB</p>
                    </div>
                  </div>
                  <ul className='flex items-center sm:w-auto w-full sm:justify-strat justify-center gap-2'>
                    <li>
                      <Link href={"#"} className='px-3 py-2 hover:bg-gray-1600 inline-flex items-center gap-1.5 text-blue-1300 text-sm leading-5 font-medium'>
                        <Image
                          src="/images/eye-icon.svg"
                          width="16"
                          height="16"
                          alt=""
                          className='brightness-0'
                        />
                        View
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"} className='px-3 py-2 hover:bg-gray-1600 inline-flex items-center gap-1.5 text-blue-1300 text-sm leading-5 font-medium'>
                        <Image
                          src="/icons/export-icon-4.svg"
                          width="16"
                          height="16"
                          alt=""
                          className='brightness-0'
                        />
                        Download
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 mb-2 justify-between border border-solid border-gray-1000 bg-gray-1600/30 hover:bg-gray-1600/60 p-4 rounded-lg'>
                  <div className='flex items-center gap-4'>
                    <span className='w-10 h-10 border border-solid border-gray-1000 bg-white rounded-lg flex items-center justify-center'>
                      <Image
                        src="/icons/file-gray.svg"
                        width="20"
                        height="20"
                        alt=""
                      />
                    </span>
                    <div className=''>
                      <h4 className='text-blue-1300 text-sm leading-5 font-medium flex items-center gap-2'>
                        Rent Receipt - December
                        <Image
                          src="/icons/check-icon3.svg"
                          width="16"
                          height="16"
                          alt=""
                        />
                      </h4>
                      <p className='text-gray-1200 text-xs leading-4 font-normal'>Quittance • Dec 5, 2024 • 154 KB</p>
                    </div>
                  </div>
                  <ul className='flex items-center sm:w-auto w-full sm:justify-strat justify-center gap-2'>
                    <li>
                      <Link href={"#"} className='px-3 py-2 hover:bg-gray-1600 inline-flex items-center gap-1.5 text-blue-1300 text-sm leading-5 font-medium'>
                        <Image
                          src="/images/eye-icon.svg"
                          width="16"
                          height="16"
                          alt=""
                          className='brightness-0'
                        />
                        View
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"} className='px-3 py-2 hover:bg-gray-1600 inline-flex items-center gap-1.5 text-blue-1300 text-sm leading-5 font-medium'>
                        <Image
                          src="/icons/export-icon-4.svg"
                          width="16"
                          height="16"
                          alt=""
                          className='brightness-0'
                        />
                        Download
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between border border-solid border-gray-1000 bg-gray-1600/30 hover:bg-gray-1600/60 p-4 rounded-lg'>
                  <div className='flex items-center gap-4'>
                    <span className='w-10 h-10 border border-solid border-gray-1000 bg-white rounded-lg flex items-center justify-center'>
                      <Image
                        src="/icons/file-gray.svg"
                        width="20"
                        height="20"
                        alt=""
                      />
                    </span>
                    <div className=''>
                      <h4 className='text-blue-1300 text-sm leading-5 font-medium flex items-center gap-2'>
                        Insurance Certificate
                        <Image
                          src="/images/clock-yellow.svg"
                          width="16"
                          height="16"
                          alt=""
                        />
                      </h4>
                      <p className='text-gray-1200 text-xs leading-4 font-normal'>Attestation d'Assurance • Sept 15, 2024 • 342 KB</p>
                    </div>
                  </div>
                  <ul className='flex items-center sm:w-auto w-full sm:justify-strat justify-center gap-2'>
                    <li>
                      <Link href={"#"} className='px-3 py-2 hover:bg-gray-1600 inline-flex items-center gap-1.5 text-blue-1300 text-sm leading-5 font-medium'>
                        <Image
                          src="/images/eye-icon.svg"
                          width="16"
                          height="16"
                          alt=""
                          className='brightness-0'
                        />
                        View
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"} className='px-3 py-2 hover:bg-gray-1600 inline-flex items-center gap-1.5 text-blue-1300 text-sm leading-5 font-medium'>
                        <Image
                          src="/icons/export-icon-4.svg"
                          width="16"
                          height="16"
                          alt=""
                          className='brightness-0'
                        />
                        Download
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
          <div className='xl:max-w-75 w-full'>
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
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative"
      >
        <Link onClick={() => setIsOpen(false)} href={"#"} className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className='md:py-8.5 md:px-6 p-4'>
          <h4 className='text-black-2000 font-semibold text-lg leading-5 tracking-[-0.45px]'>Terminate Lease Agreement</h4>
          <p className='text-gray-1900 font-normal text-sm leading-5 mt-1.5'>
            This action will initiate the lease termination process. The security deposit of €1,200 will be reviewed for refund after the final inspection.
          </p>
          <ul className="flex items-center justify-end gap-3 mt-6">
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
                Confirm Terminate
              </button>
            </li>
          </ul>
        </div>


      </Modal >
    </div>
  );
};

export default UsersStudentsPage;
