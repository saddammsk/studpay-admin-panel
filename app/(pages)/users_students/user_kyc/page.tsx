"use client";
import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import ProgressBar from "@/app/components/ProgressBar";
import Modal from "@/app/components/Modal";
import RiskScoringCard from '@/app/components/UsersStudent/Kyc/RiskScoringCard';



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
    active: true,
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


/***** TABLE****/
type Student = {
  id: string;
  admin: {
    title: string;
    name: string;
  },
  action: string;
  notes: string;
  timestamp: string;
};

const students: Student[] = [
  {
    id: "1",
    admin: {
      title: "SC",
      name: "Sarah Chen",
    },
    action: "FIRST_APPROVAL",
    notes: "All documents verified. Biometric mat…",
    timestamp: "Jan 17, 2024 16:42",
  }, {
    id: "2",
    admin: {
      title: "MA",
      name: "Michael Adeyemi",
    },
    action: "REJECTION",
    notes: "POA document too blurry. Requested…",
    timestamp: "Jan 16, 2024 18:30",
  }, {
    id: "3",
    admin: {
      title: "S",
      name: "System",
    },
    action: "WATCHLIST_CLEAR",
    notes: "Automated screening complete. No …",
    timestamp: "Jan 16, 2024 14:40",
  },

];
/***** TABLE****/


const UsersStudentsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<string>("All Countries");


  return (
    <div className='font-inter'>
      <div className=''>
        <div className='4xl:pb-20 md:pb-37.5 sm:pb-50'>
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
                    <Image src="../images/eyes-icon.svg" width="16" height="16" alt="" />
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
                      <li><Link onClick={() => setIsOpen(true)} href={"#"} className='flex items-center justify-center w-7 h-7'><Image src="../images/eyes-icon.svg" width="16" height="16" alt="" /></Link></li>
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
          <div className='flex 4xl:flex-row flex-col gap-6'>
            <div className='5xl:max-w-157.5 4xl:max-w-125 max-w-full w-full'>
              <div className='bg-white border border-solid border-gray-3600 rounded-lg'>
                <div className='flex sm:flex-row flex-col sm:items-center items-start justify-between border-b border-solid border-gray-3600 px-4 py-5.5'>
                  <h4 className='text-blue-1300 text-sm leading-5 font-bold flex items-center gap-2'>
                    <Image
                      src="/images/file-icon2.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                    Document Viewer
                  </h4>
                  <div className="flex items-center gap-1">
                    <ul className="flex items-center gap-2">
                      <li>
                        <Link href={"#"} className="flex items-center justify-center w-8 h-8">
                          <Image src="/icons/minus-zoom.svg" width={16} height={16} alt="" />
                        </Link>
                      </li>
                      <li>
                        <span className="text-blue-1300 text-xs text-center leading-4 font-normal font-JetBrainsMono block sm:w-12 w-11">100%</span>
                      </li>
                      <li>
                        <Link href={"#"} className="flex items-center justify-center w-8 h-8">
                          <Image src="/icons/zoom-icon.svg" width={16} height={16} alt="" />
                        </Link>
                      </li>
                    </ul>
                    <Link href={"#"} className="flex items-center justify-center w-8 h-8">
                      <Image src="/icons/refresh-icon.svg" width={16} height={16} alt="" />
                    </Link>
                    <Link href={"#"} className="flex items-center justify-center w-8 h-8">
                      <Image src="/images/download-black.svg" width={16} height={16} alt="" />
                    </Link>
                  </div>
                </div>
                <div className='border-b border-solid border-gray-3600'>
                  <ul className='flex items-center'>
                    <li>
                      <Link href={"#"} className='text-blue-1300 text-xs leading-4 font-normal px-4 py-2.5 border-b-2 border-solid border-blue-1300 flex items-center justify-center'>Passport / ID</Link>
                    </li>
                    <li>
                      <Link href={"#"} className='text-gray-1900 text-xs leading-4 font-normal px-4 py-2.5 border-b-2 border-solid border-transparent flex items-center justify-center'>Proof of Address</Link>
                    </li>
                    <li>
                      <Link href={"#"} className='text-gray-1900 text-xs leading-4 font-normal px-4 py-2.5 border-b-2 border-solid border-transparent flex items-center justify-center'>Selfie</Link>
                    </li>
                  </ul>
                </div>
                <div className='p-4'>
                  <div className='flex items-center gap-2 mb-3'>
                    <span className='text-green53 font-bold text-xs leading-4 h-5.5 px-2.5 border border-solid border-green53/10 bg-green53/20 rounded-full inline-flex items-center justify-center mt-0.5'>Verified</span>
                    <p className='text-gray-1900 text-xs leading-4 font-normal'>Uploaded: Jan 16, 2024 at 14:32</p>
                  </div>
                  <Image
                    src="/images/Verified-file.jpg"
                    width={598}
                    height={280}
                    alt=""
                    className='rounded-lg w-full'
                  />
                </div>
              </div>
              <div className='bg-white border border-solid border-gray-3600 rounded-lg p-4 mt-6'>
                <div className='flex items-center justify-between'>
                  <h4 className='text-blue-1300 text-sm leading-5 font-bold flex items-center gap-2'>
                    <Image
                      src="/images/user-icon2.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                    Biometric Match
                  </h4>
                  <p className='text-gray-1900 text-xs leading-4 font-normal'>Last: 2 mins ago</p>
                </div>
                <div className='flex items-center gap-4 mt-4'>
                  <div className='text-center'>
                    <span className='bg-gray-2000 border-2 border-solid border-gray-3600 rounded-lg flex items-center justify-center w-16 h-20 mx-auto'>
                      <Image
                        src="/icons/user-gray.svg"
                        width={32}
                        height={32}
                        alt=""
                      />
                    </span>
                    <p className='text-gray-1900 text-xs leading-4 capitalize font-normal mt-1.5'>ID Photo</p>
                  </div>
                  <div className='relative flex flex-1 w-full items-center justify-center flex-col'>
                    <span className='absolute top-3.5 left-0 bg-gray-3600 h-0.5 w-full'></span>
                    <span className='relative z-50 flex items-center justify-center w-8 h-8 bg-green53/10 rounded-full'>
                      <Image
                        src="/icons/check-dark.svg"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </span>
                    <h4 className='text-2xl leading-8 font-bold text-green53'>94%</h4>
                    <p className='text-xs leading-4 font-normal text-green53'>High Match</p>
                  </div>
                  <div className='text-center'>
                    <span className='bg-gray-2000 border-2 border-solid border-gray-3600 rounded-lg flex items-center justify-center w-16 h-20 mx-auto'>
                      <Image
                        src="/icons/camera.svg"
                        width={32}
                        height={32}
                        alt=""
                      />
                    </span>
                    <p className='text-gray-1900 text-xs leading-4 capitalize font-normal mt-1.5'>Liveness</p>
                  </div>
                </div>
                <div className='mt-4'>
                  <ProgressBar value={94} className='h-2' barColor='bg-green53' bgColor='bg-gray-2000' />
                </div>
              </div>
              <div className="bg-white border border-solid border-gray-3600 rounded-lg p-4 mt-6">
                <h4 className='text-blue-1300 text-sm leading-5 font-bold'>
                  Biometric Match
                </h4>
                <ul className='grid sm:grid-cols-3 grid-cols-2 gap-x-6 gap-y-4 mt-4'>
                  <li>
                    <span className='flex items-center gap-1.5 text-gray-1900 mb-1.5 text-xs leading-4 uppercase font-normal'>
                      <Image
                        src="/icons/gender-user-icon.svg"
                        width={14}
                        height={14}
                        alt=""
                      />
                      Gender
                    </span>
                    <h4 className='text-blue-1300 text-sm leading-5 font-normal'>Male</h4>
                  </li>
                  <li>
                    <span className='flex items-center gap-1.5 text-gray-1900 mb-1.5 text-xs leading-4 uppercase font-normal'>
                      <Image
                        src="/icons/heart-icon.svg"
                        width={14}
                        height={14}
                        alt=""
                      />
                      Marital Status
                    </span>
                    <h4 className='text-blue-1300 text-sm leading-5 font-normal'>Single</h4>
                  </li>
                  <li>
                    <span className='flex items-center gap-1.5 text-gray-1900 mb-1.5 text-xs leading-4 uppercase font-normal'>
                      <Image
                        src="/icons/bag-icon.svg"
                        width={14}
                        height={14}
                        alt=""
                      />
                      Profession
                    </span>
                    <h4 className='text-blue-1300 text-sm leading-5 font-normal'>Software Engineer</h4>
                  </li>
                  <li>
                    <span className='flex items-center gap-1.5 text-gray-1900 mb-1.5 text-xs leading-4 uppercase font-normal'>
                      <Image
                        src="/icons/income-wealth.svg"
                        width={14}
                        height={14}
                        alt=""
                      />
                      Source of Wealth
                    </span>
                    <h4 className='text-blue-1300 text-sm leading-5 font-normal'>Employment Income</h4>
                  </li>
                  <li>
                    <span className='flex items-center gap-1.5 text-gray-1900 mb-1.5 text-xs leading-4 uppercase font-normal'>
                      <Image
                        src="/icons/employer.svg"
                        width={14}
                        height={14}
                        alt=""
                      />
                      Employer
                    </span>
                    <h4 className='text-blue-1300 text-sm leading-5 font-normal'>Tech Startup Inc.</h4>
                  </li>
                  <li>
                    <span className='flex items-center gap-1.5 text-gray-1900 mb-1.5 text-xs leading-4 uppercase font-normal'>
                      <Image
                        src="/icons/nationality-icon.svg"
                        width={14}
                        height={14}
                        alt=""
                      />
                      Nationality
                    </span>
                    <h4 className='text-blue-1300 text-sm leading-5 font-normal'>Nigerian</h4>
                  </li>
                </ul>
              </div>
              <div className='bg-white border border-solid border-gray-3600 rounded-lg mt-6'>
                <div className='flex items-center justify-between border-b border-solid border-gray-3600 px-4 py-5.5'>
                  <h4 className='text-blue-1300 text-sm leading-5 font-bold flex items-center gap-2'>
                    <Image
                      src="/icons/ocr-icon.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                    OCR Data Extraction
                  </h4>
                  <span className='text-blue-1300 text-xs leading-4 font-bold inline-flex items-center justify-center border border-solid border-gray-3600 rounded-full h-5.5 px-2.5'>3/6 Validated</span>
                </div>
                <div className='border-b border-solid border-gray-3600 flex items-start gap-3 p-3'>
                  <div className='flex-1 w-full'>
                    <div className='flex items-center gap-2 mb-2'>
                      <p className='text-gray-1900 text-xs leading-4 font-normal uppercase'>Full Name</p>
                      <span className='px-1.5 h-4.25 inline-flex items-center pt-0.5 justify-center rounded-full text-[10px] font-bold leading-3.75 border border-solid bg-green-1300/10 border-lightgreen15 text-green-1800'>Validated</span>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                      <div className=''>
                        <p className='text-gray-1900 text-[10px] leading-3.75 font-normal mb-1.75 uppercase'>System Extracted</p>
                        <h4 className='text-blue-1300 text-sm leading-5 font-normal font-JetBrainsMono uppercase'>ADEBAYO OKONKWO</h4>
                      </div>
                      <div className=''>
                        <p className='text-gray-1900 text-[10px] leading-3.75 font-normal mb-1.75 uppercase'>User Input</p>
                        <h4 className='text-blue-1300 text-sm leading-5 font-normal font-JetBrainsMono'>Adebayo Okonkwo</h4>
                      </div>
                    </div>
                  </div>
                  <div className='w-10 h-8 flex items-center justify-center'>
                    <Image
                      src="/icons/check-icon.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </div>
                </div>
                <div className='border-b border-solid border-gray-3600 flex items-start gap-3 p-3'>
                  <div className='flex-1 w-full'>
                    <div className='flex items-center gap-2 mb-2'>
                      <p className='text-gray-1900 text-xs leading-4 font-normal uppercase'>Date of Birth</p>
                      <span className='px-1.5 h-4.25 inline-flex items-center pt-0.5 justify-center rounded-full text-[10px] font-bold leading-3.75 border border-solid bg-green-1300/10 border-lightgreen15 text-green-1800'>Validated</span>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                      <div className=''>
                        <p className='text-gray-1900 text-[10px] leading-3.75 font-normal mb-1.75 uppercase'>System Extracted</p>
                        <h4 className='text-blue-1300 text-sm leading-5 font-normal font-JetBrainsMono uppercase'>15/03/1992</h4>
                      </div>
                      <div className=''>
                        <p className='text-gray-1900 text-[10px] leading-3.75 font-normal mb-1.75 uppercase'>User Input</p>
                        <h4 className='text-blue-1300 text-sm leading-5 font-normal font-JetBrainsMono'>15/03/1992</h4>
                      </div>
                    </div>
                  </div>
                  <div className='w-10 h-8 flex items-center justify-center'>
                    <Image
                      src="/icons/check-icon.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </div>
                </div>
                <div className='border-b border-solid border-gray-3600 flex items-start gap-3 p-3'>
                  <div className='flex-1 w-full'>
                    <div className='flex items-center gap-2 mb-2'>
                      <p className='text-gray-1900 text-xs leading-4 font-normal uppercase'>Document Number</p>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                      <div className=''>
                        <p className='text-gray-1900 text-[10px] leading-3.75 font-normal mb-1.75 uppercase'>System Extracted</p>
                        <h4 className='text-blue-1300 text-sm leading-5 font-normal font-JetBrainsMono uppercase'>A12345678</h4>
                      </div>
                      <div className=''>
                        <p className='text-gray-1900 text-[10px] leading-3.75 font-normal mb-1.75 uppercase'>User Input</p>
                        <h4 className='text-blue-1300 text-sm leading-5 font-normal font-JetBrainsMono'>A12345678</h4>
                      </div>
                    </div>
                  </div>
                  <div className='w-18 h-8 flex items-center justify-center'>
                    <span className='text-blue-1300 text-xs leading-4 font-normal bg-gray-1500 border border-solid border-gray-3600 rounded-md w-full h-8 inline-flex items-center justify-center'>Validate</span>
                  </div>
                </div>
                <div className='border-b border-solid border-gray-3600 flex items-start gap-3 p-3'>
                  <div className='flex-1 w-full'>
                    <div className='flex items-center gap-2 mb-2'>
                      <p className='text-gray-1900 text-xs leading-4 font-normal uppercase'>Expiry Date</p>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                      <div className=''>
                        <p className='text-gray-1900 text-[10px] leading-3.75 font-normal mb-1.75 uppercase'>System Extracted</p>
                        <h4 className='text-blue-1300 text-sm leading-5 font-normal font-JetBrainsMono uppercase'>12/2028</h4>
                      </div>
                      <div className=''>
                        <p className='text-gray-1900 text-[10px] leading-3.75 font-normal mb-1.75 uppercase'>User Input</p>
                        <h4 className='text-blue-1300 text-sm leading-5 font-normal font-JetBrainsMono'>12/2028</h4>
                      </div>
                    </div>
                  </div>
                  <div className='w-18 h-8 flex items-center justify-center'>
                    <span className='text-blue-1300 text-xs leading-4 font-normal bg-gray-1500 border border-solid border-gray-3600 rounded-md w-full h-8 inline-flex items-center justify-center'>Validate</span>
                  </div>
                </div>
                <div className='border-b border-solid border-gray-3600 flex items-start gap-3 p-3'>
                  <div className='flex-1 w-full'>
                    <div className='flex items-center gap-2 mb-2'>
                      <p className='text-gray-1900 text-xs leading-4 font-normal uppercase'>Nationality</p>
                      <span className='px-1.5 h-4.25 inline-flex items-center pt-0.5 justify-center rounded-full text-[10px] font-bold leading-3.75 border border-solid bg-green-1300/10 border-lightgreen15 text-green-1800'>Validated</span>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                      <div className=''>
                        <p className='text-gray-1900 text-[10px] leading-3.75 font-normal mb-1.75 uppercase'>System Extracted</p>
                        <h4 className='text-blue-1300 text-sm leading-5 font-normal font-JetBrainsMono uppercase'>NIGERIAN</h4>
                      </div>
                      <div className=''>
                        <p className='text-gray-1900 text-[10px] leading-3.75 font-normal mb-1.75 uppercase'>User Input</p>
                        <h4 className='text-blue-1300 text-sm leading-5 font-normal font-JetBrainsMono'>Nigerian</h4>
                      </div>
                    </div>
                  </div>
                  <div className='w-10 h-8 flex items-center justify-center'>
                    <Image
                      src="/icons/check-icon.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </div>
                </div>
                <div className='flex items-start gap-3 p-3'>
                  <div className='flex-1 w-full'>
                    <div className='flex items-center gap-2 mb-2'>
                      <p className='text-gray-1900 text-xs leading-4 font-normal uppercase'>Address</p>
                      <span className='px-1.5 h-4.25 inline-flex items-center pt-0.5 justify-center rounded-full text-[10px] font-bold leading-3.75 border border-solid bg-yellow-1100/10 border-yellow-1100 text-yellow-1100'>Mismatch</span>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                      <div className=''>
                        <p className='text-gray-1900 text-[10px] leading-3.75 font-normal mb-1.75 uppercase'>System Extracted</p>
                        <h4 className='text-yellow-1100 text-sm leading-5 font-normal font-JetBrainsMono uppercase'>23 VICTORIA ISL...</h4>
                      </div>
                      <div className=''>
                        <p className='text-gray-1900 text-[10px] leading-3.75 font-normal mb-1.75 uppercase'>User Input</p>
                        <h4 className='text-yellow-1100 text-sm leading-5 font-normal font-JetBrainsMono'>23 Victoria Island, Lagos</h4>
                      </div>
                    </div>
                  </div>
                  <div className='w-18 h-8 flex items-center justify-center'>
                    <span className='text-blue-1300 text-xs leading-4 font-normal bg-gray-1500 border border-solid border-gray-3600 rounded-md w-full h-8 inline-flex items-center justify-center'>Validate</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-1 w-full'>
              <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                <div className='bg-white border border-solid border-gray-3600 rounded-lg p-4 shadow-4xl'>
                  <RiskScoringCard />
                </div>
                <div className='bg-white border border-solid border-gray-3600 rounded-lg p-4 shadow-4xl'>
                  <div className='flex items-center justify-between'>
                    <h4 className='text-blue-1300 text-sm leading-5 font-bold flex items-center gap-2'>
                      <Image
                        src="/icons/Watchlist.svg"
                        width={16}
                        height={16}
                        alt=""
                      />
                      Watchlist Screening
                    </h4>
                    <Link href={"#"} className='inline-flex items-center justify-center text-blue-1300 text-xs leading-4 font-normal gap-3.5 bg-gray-1500 border border-solid border-gray-3600 rounded-md h-7 px-3'>
                      <Image
                        src="/icons/Re-screen.svg"
                        width={16}
                        height={16}
                        alt=""
                      />
                      Re-screen
                    </Link>
                  </div>
                  <div className='mt-4 pb-4'>
                    <div className='mb-3 flex items-start justify-between bg-green53/5 border border-solid border-green53/20 rounded-lg p-3'>
                      <div className='flex items-start gap-3'>
                        <span className='flex items-center justify-center w-4 h-4'>
                          <Image
                            src="/icons/check-dark.svg"
                            width={16}
                            height={16}
                            alt=""
                          />
                        </span>
                        <div className=''>
                          <h4 className='text-blue-1300 text-sm leading-5 font-normal mb-0.5'>PEP (Politically Exposed Person)</h4>
                          <p className='text-gray-1900 text-xs leading-4 font-normal'>Source: World-Check • Last checked: 2 mins ago</p>
                        </div>
                      </div>
                      <span className='text-green53 font-bold text-[10px] leading-3.75 inline-flex items-center justify-center uppercase h-[21px] px-2.5 bg-green53/10 border border-solid border-green53/20 rounded-full'>CLEAR</span>
                    </div>
                    <div className='mb-3 flex items-start justify-between bg-green53/5 border border-solid border-green53/20 rounded-lg p-3'>
                      <div className='flex items-start gap-3'>
                        <span className='flex items-center justify-center w-4 h-4'>
                          <Image
                            src="/icons/check-dark.svg"
                            width={16}
                            height={16}
                            alt=""
                          />
                        </span>
                        <div className=''>
                          <h4 className='text-blue-1300 text-sm leading-5 font-normal mb-0.5'>OFAC Sanctions List</h4>
                          <p className='text-gray-1900 text-xs leading-4 font-normal'>Source: OFAC SDN • Last checked: 2 mins ago</p>
                        </div>
                      </div>
                      <span className='text-green53 font-bold text-[10px] leading-3.75 inline-flex items-center justify-center uppercase h-5.25 px-2.5 bg-green53/10 border border-solid border-green53/20 rounded-full'>CLEAR</span>
                    </div>
                    <div className='mb-3 flex items-start justify-between bg-green53/5 border border-solid border-green53/20 rounded-lg p-3'>
                      <div className='flex items-start gap-3'>
                        <span className='flex items-center justify-center w-4 h-4'>
                          <Image
                            src="/icons/check-dark.svg"
                            width={16}
                            height={16}
                            alt=""
                          />
                        </span>
                        <div className=''>
                          <h4 className='text-blue-1300 text-sm leading-5 font-normal mb-0.5'>UN Sanctions List</h4>
                          <p className='text-gray-1900 text-xs leading-4 font-normal'>Source: UN Security Council • Last checked: 2 mins
                            ago</p>
                        </div>
                      </div>
                      <span className='text-green53 font-bold text-[10px] leading-3.75 inline-flex items-center justify-center uppercase h-5.25 px-2.5 bg-green53/10 border border-solid border-green53/20 rounded-full'>CLEAR</span>
                    </div>
                    <div className='flex items-start justify-between bg-yellow-1100/5 border border-solid border-yellow-1100/20 rounded-lg p-3'>
                      <div className='flex items-start gap-3'>
                        <span className='flex items-center justify-center w-4 h-4'>
                          <Image
                            src="/images/clock-yellow.svg"
                            width={16}
                            height={16}
                            alt=""
                          />
                        </span>
                        <div className=''>
                          <h4 className='text-blue-1300 text-sm leading-5 font-normal mb-0.5'>EU Consolidated List</h4>
                          <p className='text-gray-1900 text-xs leading-4 font-normal'>Source: EU External Action • Last checked:
                            Checking...</p>
                        </div>
                      </div>
                      <span className='text-yellow-1100 font-bold text-[10px] leading-3.75 inline-flex items-center justify-center uppercase h-5.25 px-2.5 bg-yellow-1100/10 border border-solid border-yellow-1100/20 rounded-full'>PENDING</span>
                    </div>
                  </div>
                  <div className='pt-3 border-t border-solid border-gray-3600'>
                    <p className='text-gray-1900 text-[10px] leading-3.75 font-normal'>Screening against OFAC, UN, EU, UK HMT sanctions lists and global PEP databases.</p>
                  </div>
                </div>
              </div>
              <div className='mt-6 bg-white border border-solid border-gray-3600 rounded-lg p-4 shadow-4xl'>
                <h4 className='text-blue-1300 text-sm leading-5 font-bold flex items-center gap-2'>
                  <Image
                    src="/icons/timeline.svg"
                    width={16}
                    height={16}
                    alt=""
                  />
                  KYC Status Timeline
                </h4>
                <div className='mt-4 relative'>
                  <span className='absolute left-2 top-1/2 -translate-y-1/2 bg-gray-3600 w-px h-[98%] flex items-center'></span>
                  <div className='flex items-start gap-2 mb-4 relative z-50'>
                    <span className='bg-white w-4 h-4 rounded-full flex items-center justify-center'>
                      <Image
                        src="/images/clock-yellow.svg"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </span>
                    <div className='flex-1 w-full'>
                      <ul className='flex items-center gap-2 mb-1'>
                        <li>
                          <span className='text-yellow-1100 font-bold text-[10px] leading-3.75 inline-flex items-center justify-center uppercase h-5.25 px-2.5 bg-yellow-1100/10 border border-solid border-yellow-1100/20 rounded-full'>PENDING</span>
                        </li>
                        <li>
                          <p className='text-gray-1900 text-xs leading-4 font-normal'>Jan 18, 2024 at 09:15</p>
                        </li>
                      </ul>
                      <h4 className='text-blue-1300 text-sm leading-5 font-normal'>
                        Awaiting second admin approval
                      </h4>
                      <p className='text-gray-1900 text-xs leading-4 font-normal mt-1'>by System</p>
                    </div>
                  </div>
                  <div className='flex items-start gap-2 mb-4 relative z-50'>
                    <span className='bg-white w-4 h-4 rounded-full flex items-center justify-center'>
                      <Image
                        src="/icons/check-dark.svg"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </span>
                    <div className='flex-1 w-full'>
                      <ul className='flex items-center gap-2 mb-1'>
                        <li>
                          <span className='text-yellow-1100 font-bold text-[10px] leading-3.75 inline-flex items-center justify-center uppercase h-5.25 px-2.5 bg-yellow-1100/10 border border-solid border-yellow-1100/20 rounded-full'>APPROVED</span>
                        </li>
                        <li>
                          <p className='text-gray-1900 text-xs leading-4 font-normal'>Jan 17, 2024 at 16:42</p>
                        </li>
                      </ul>
                      <h4 className='text-blue-1300 text-sm leading-5 font-normal'>
                        First approval granted - documents verified
                      </h4>
                      <p className='text-gray-1900 text-xs leading-4 font-normal mt-1'>by Sarah Chen</p>
                    </div>
                  </div>
                  <div className='flex items-start gap-2 mb-4 relative z-50'>
                    <span className='bg-white w-4 h-4 rounded-full flex items-center justify-center'>
                      <Image
                        src="/images/warning-yellow.svg"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </span>
                    <div className='flex-1 w-full'>
                      <ul className='flex items-center gap-2 mb-1'>
                        <li>
                          <span className='text-yellow-1100 font-bold text-[10px] leading-3.75 inline-flex items-center justify-center uppercase h-5.25 px-2.5 bg-yellow-1100/10 border border-solid border-yellow-1100/20 rounded-full'>UPDATED</span>
                        </li>
                        <li>
                          <p className='text-gray-1900 text-xs leading-4 font-normal'>Jan 17, 2024 at 14:20</p>
                        </li>
                      </ul>
                      <h4 className='text-blue-1300 text-sm leading-5 font-normal'>
                        User resubmitted proof of address
                      </h4>
                    </div>
                  </div>
                  <div className='flex items-start gap-2 mb-4 relative z-50'>
                    <span className='bg-white w-4 h-4 rounded-full flex items-center justify-center'>
                      <Image
                        src="/icons/cross-round-red.svg"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </span>
                    <div className='flex-1 w-full'>
                      <ul className='flex items-center gap-2 mb-1'>
                        <li>
                          <span className='text-red-1300 font-bold text-[10px] leading-3.75 inline-flex items-center justify-center uppercase h-5.25 px-2.5 bg-red-1300/10 border border-solid border-red-1300/20 rounded-full'>REJECTED</span>
                        </li>
                        <li>
                          <p className='text-gray-1900 text-xs leading-4 font-normal'>Jan 16, 2024 at 18:30</p>
                        </li>
                      </ul>
                      <h4 className='text-blue-1300 text-sm leading-5 font-normal'>
                        Proof of address was blurry and unreadable
                      </h4>
                      <p className='text-gray-1900 text-xs leading-4 font-normal mt-1'>by Michael Adeyemi</p>
                    </div>
                  </div>
                  <div className='flex items-start gap-2 mb-4 relative z-50'>
                    <span className='bg-white w-4 h-4 rounded-full flex items-center justify-center'>
                      <Image
                        src="/icons/submitted-icon.svg"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </span>
                    <div className='flex-1 w-full'>
                      <ul className='flex items-center gap-2 mb-1'>
                        <li>
                          <span className='text-blue-1300 font-bold text-[10px] leading-3.75 inline-flex items-center justify-center uppercase h-5.25 px-2.5 bg-blue-1300/10 border border-solid border-blue-1300/20 rounded-full'>SUBMITTED</span>
                        </li>
                        <li>
                          <p className='text-gray-1900 text-xs leading-4 font-normal'>Jan 16, 2024 at 14:38</p>
                        </li>
                      </ul>
                      <h4 className='text-blue-1300 text-sm leading-5 font-normal'>
                        Initial KYC documents submitted
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-6 bg-white border border-solid border-gray-3600 rounded-lg shadow-4xl'>
                <div className='border-b border-gray-3600 p-4'>
                  <h4 className='text-blue-1300 text-sm leading-5 font-bold flex items-center gap-2'>
                    <Image
                      src="/icons/file-board.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                    Audit Log
                  </h4>
                </div>
                <div className="w-ful overflow-auto">
                  <table className="2xl:w-full w-300">
                    <thead className="border-b border-gray-3600">
                      <tr>
                        <th className="p-4 text-left text-gray-1900 text-xs leading-4 font-normal">Admin</th>
                        <th className="p-4 text-left text-gray-1900 text-xs leading-4 font-normal">Action</th>
                        <th className="p-4 text-left text-gray-1900 text-xs leading-4 font-normal">Notes</th>
                        <th className="p-4 text-left text-gray-1900 text-xs leading-4 font-normal">Timestamp</th>
                      </tr>
                    </thead>

                    <tbody>
                      {students.map((student) => (
                        <tr key={student.id}
                          className="border-b border-gray-3600 hover:bg-gray-2000/50 transition last:border-b-0"
                        >
                          <td className="p-4">
                            <div className='flex items-center gap-2'>
                              <span className='text-blue-1300 text-[10px] w-6 h-6 font-normal leading-5 inline-flex items-center justify-center bg-blue-1300/10 rounded-full'>{student.admin.title}</span>
                              <h4 className='text-blue-1300 flex-1 w-full text-sm leading-5 font-normal'>{student.admin.name}</h4>
                            </div>
                          </td>

                          <td className="p-4">
                            <p className='text-gray-1900 text-xs leading-4 font-normal font-JetBrainsMono uppercase'>
                              {student.action}
                            </p>
                          </td>

                          <td className="p-4">
                            <p className='text-gray-1900 text-xs leading-4 font-normal'>
                              {student.notes}
                            </p>
                          </td>

                          <td className="p-4">
                            <p className='text-gray-1900 text-xs leading-4 font-normal'>
                              {student.timestamp}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white  z-50 fixed hidden bottom-0 right-0 xl:w-[calc(100%-287px)] lg:w-[calc(100%-250px)] w-full ml-auto sm:flex 4xl:flex-row flex-col 4xl:gap-0 gap-4 items-center justify-between shadow-7xl border-t border-solid border-gray-3600 py-4 4xl:px-17.5 px-4'>
          <div className='flex items-center gap-2'>
            <span className='bg-blue-1300/10 flex items-center justify-center w-10 h-10 rounded-full'>
              <Image
                src="/icons/Watchlist.svg"
                width="20"
                height="20"
                alt=""
              />
            </span>
            <div className='flex-1 flex items-center gap-4 w-full'>
              <div className=''>
                <h4 className='text-blue-1300 font-bold text-sm leading-5'>KYC Action Hub</h4>
                <p className='text-gray-1900 font-normal text-xs leading-4'>User ID: USR-2024-00847</p>
              </div>
              <span className='text-blue-1300 font-bold text-xs leading-4 inline-flex items-center justify-center gap-1.5 h-6.5 border border-solid border-gray-3600 rounded-full px-2'>
                <Image
                  src="/images/user-black.svg"
                  width="12"
                  height="12"
                  alt=""
                />
                First approval by: Sarah Chen
              </span>
            </div>
          </div>
          <ul className='flex md:flex-nowrap flex-wrap justify-center items-center gap-3'>
            <li>
              <Link href={"#"} className='inline-flex gap-4 items-center justify-center px-4 h-10 border border-solid border-yellow-1100/30 text-yellow-1100 text-sm leading-5 bg-gray-1500 rounded-md'>
                <Image
                  src="/images/warning-yellow.svg"
                  width="16"
                  height="16"
                  alt=""
                />
                Override Status
              </Link>
            </li>
            <li>
              <Link href={"#"} className='inline-flex gap-4 items-center justify-center px-4 h-10 border border-solid border-red-1300/30 text-red-1300 text-sm leading-5 bg-gray-1500 rounded-md'>
                <Image
                  src="/icons/cross-round-red.svg"
                  width="16"
                  height="16"
                  alt=""
                />
                Reject & Request Re-upload
              </Link>
            </li>
            <li>
              <Link href={"#"} className='inline-flex gap-4 items-center justify-center px-4 h-10 border border-solid border-green53 text-white text-sm leading-5 bg-green53 rounded-md'>
                <Image
                  src="/icons/check-dark.svg"
                  width="16"
                  height="16"
                  alt=""
                  className='brightness-10000'
                />
                Approve Identity
                <span className='inline-flex items-center justify-center text-white text-[10px] leading-5 font-bold bg-white/20 rounded-full h-[26px] px-2'>4-Eyes</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>


      {/****** KYC VERIFICATION Modal *******/}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        panelClassName="max-w-[672px] bg-gray-1500 relative h-full overflow-y-auto"
      >
        <Link onClick={() => setIsOpen(false)} href={"#"} className="flex items-center justify-center rounded-full w-4 h-4 absolute top-3 right-3">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className='md:p-6 p-4 border-b border-solid border-gray-1000'>
          <div className='mb-6 flex items-start justify-between'>
            <div className=''>
              <h4 className='text-blue-1300 font-inter font-semibold text-xl leading-7 tracking-[-0.5px]'>KYC Verification History</h4>
              <p className='text-gray-1200 font-inter font-normal text-[13px] leading-5'>Alexander Mitchell</p>
            </div>
            <span className='inline-flex items-center justify-center font-inter font-semibold text-xs leading-5 gap-1 bg-green-2200/10 border border-solid border-green-2200/20 rounded-full h-6.5 px-2.5 text-green-2200' > <Image src="/images/Fraud-check.svg" width={14} height={14} alt="" /> Verified</span>
          </div>
          <div className='mt-4 bg-gray-1600 flex items-center  gap-3 rounded-[10px] p-4'>
            <span className='bg-green-2200/10 rounded-full w-10 h-10 flex items-center justify-center'>
              <Image src="/images/sheild-green.svg" width={20} height={20} alt="" />
            </span>
            <div className=''>
              <p className='text-black-2000 font-inter font-normal text-[13px] leading-5'>Last Successful Verification</p>
              <p className='text-gray-2300 font-inter font-normal text-[13px] leading-5 flex items-center gap-1.5'><Image src="/icons/date-icon2.svg" width={16} height={16} alt="" /> January 15, 2025</p>
            </div>
          </div>
        </div>
        <div className='md:p-6 p-4'>
          <div className='mt-4 bg-yellow-1100/10 border border-solid border-yellow-1100/20 flex items-center gap-3 rounded-[10px] p-4'>
            <span className='rounded-full w-10 h-10 flex items-center justify-center'>
              <Image src="/images/warning-yellow.svg" width={20} height={20} alt="" />
            </span>
            <div className=''>
              <p className='text-yellow-1100 font-inter font-normal text-[13px] leading-5'>Notice: This KYC is older than 180 days</p>
              <p className='text-gray-2300 font-inter font-normal text-[13px] leading-5 flex items-center gap-1.5'>Information may be outdated. Consider requesting re-verification.</p>
            </div>
          </div>
          <div className='mt-5'>
            <h4 className='text-blue-1300 font-inter font-bold text-[13px] leading-5'>Verification History</h4>
            <div className='bg-white mt-2 flex items-start gap-3 border border-solid border-gray-1000 rounded-[10px] p-4'>
              <div className='flex items-center jusitfy-center flex-col'>
                <span className='bg-green-2200 w-2.5 h-2.5 rounded-full flex items-center'></span>
                <span className='bg-gray-1000/60 w-px h-8 mt-2 flex items-center'></span>
              </div>
              <div className='flex-1 w-full sm:flex-row flex-col flex sm:gap-0 gap-1 items-start justify-between'>
                <div className=''>
                  <span className='inline-flex items-center jusitfy-center font-inter font-semibold text-xs leading-5 gap-1 bg-green-2200/10 border border-solid border-green-2200/20 rounded-full h-6.5 px-2.5 text-green-2200' > <Image src="/images/Fraud-check.svg" width={14} height={14} alt="" /> Verified</span>
                  <h4 className='text-blue-1300 font-inter font-normal text-[12.8px] leading-5 mt-2'>Auto-verified by System</h4>
                  <p className='text-gray-2300 font-inter font-normal text-[10.9px] leading-4 mt-2'>Auto-processed</p>
                </div>
                <p className='text-gray-2300 font-inter font-normal text-[11.1px] leading-4'>2025-01-15 at 14:32</p>
              </div>

            </div>
            <div className='bg-white mt-2 flex items-start gap-3 border border-solid border-gray-1000 rounded-[10px] p-4'>
              <div className='flex items-center jusitfy-center flex-col'>
                <span className='bg-green-2200 w-2.5 h-2.5 rounded-full flex items-center'></span>
                <span className='bg-gray-1000/60 w-px h-8 mt-2 flex items-center'></span>
              </div>
              <div className='flex-1 w-full flex sm:flex-row flex-col sm:gap-0 gap-1 items-start justify-between'>
                <div className=''>
                  <div className='flex sm:flex-row flex-col sm:items-center items-start gap-2'>
                    <span className='inline-flex items-center jusitfy-center font-inter font-normal text-xs leading-5 gap-1 bg-green-2200/10 border border-solid border-green-2200/20 rounded-full h-6.5 px-2.5 text-green-2200' > <Image src="/images/Fraud-check.svg" width={14} height={14} alt="" /> Verified</span>
                    <span className='inline-flex items-center jusitfy-center font-inter font-normal text-xs leading-5 gap-1 bg-royalBlue123/10 border border-solid border-royalBlue123/20 rounded-full h-6.5 px-2.5 text-royalBlue123' > <Image src="/images/user-blue.svg" width={14} height={14} alt="" /> 4-Eyes Approved</span>
                  </div>
                  <h4 className='text-blue-1300 font-inter font-normal text-[12.8px] leading-5 mt-2'>Manual Review by Admin</h4>
                  <p className='text-gray-2300 font-inter font-normal text-[10.9px] leading-4 mt-2'>Reviewed by John Smith</p>
                </div>
                <p className='text-gray-2300 font-inter font-normal text-[11.1px] leading-4'>2024-06-20 at 09:15</p>
              </div>
            </div>
            <div className='bg-white mt-2 flex items-start gap-3 border border-solid border-gray-1000 rounded-[10px] p-4'>
              <div className='flex items-center jusitfy-center flex-col'>
                <span className='bg-red2100 w-2.5 h-2.5 rounded-full flex items-center'></span>
                <span className='bg-gray-1000/60 w-px h-8 mt-2 flex items-center'></span>
              </div>
              <div className='flex-1 w-full flex sm:flex-row flex-col sm:gap-0 gap-1 items-start justify-between'>
                <div className=''>
                  <span className='inline-flex items-center jusitfy-center font-inter font-semibold text-xs leading-5 gap-1 bg-red2100/10 border border-solid border-red2100/20 rounded-full h-6.5 px-2.5 text-red2100' > <Image src="/icons/cross-round-red.svg" width={14} height={14} alt="" /> Rejected</span>
                  <h4 className='text-blue-1300 font-inter font-normal text-[12.8px] leading-5 mt-2'>Document quality insufficient - blurry image</h4>
                  <p className='text-gray-2300 font-inter font-normal text-[10.9px] leading-4 mt-2'>Reviewed by Sarah Johnson</p>
                </div> 
              <p className='text-gray-2300 font-inter font-normal text-[11.1px] leading-4'>2024-01-10 at 11:45</p>
             </div>
            </div>
            <div className='bg-white mt-2 flex items-start gap-3 border border-solid border-gray-1000 rounded-[10px] p-4'>
              <div className='flex items-center jusitfy-center flex-col'>
                <span className='bg-yellow-2500 w-2.5 h-2.5 rounded-full flex items-center'></span>
                <span className='bg-gray-1000/60 w-px h-8 mt-2 flex items-center'></span>
              </div>
              <div className='flex-1 w-full flex sm:flex-row flex-col sm:gap-0 gap-1 items-start justify-between'>
                <div className=''>
                  <span className='inline-flex items-center jusitfy-center font-inter font-semibold text-xs leading-5 gap-1 bg-yellow-2500/10 border border-solid border-yellow-2500/20 rounded-full h-6.5 px-2.5 text-yellow-2500' > <Image src="/images/clock-yellow.svg" width={14} height={14} alt="" /> Expired</span>
                  <h4 className='text-blue-1300 font-inter font-normal text-[12.8px] leading-5 mt-2'>Document quality insufficient - blurry image</h4>
                  <p className='text-gray-2300 font-inter font-normal text-[10.9px] leading-4 mt-2'>Reviewed by Sarah Johnson</p>
                </div> 
              <p className='text-gray-2300 font-inter font-normal text-[11.1px] leading-4'>2024-01-10 at 11:45</p>
            </div>
            </div>
          </div>
          <div className='mt-5 border-t border-solid borde-gray-1000 pt-5'>
            <h4 className='text-blue-1300 font-inter font-bold text-[13.5px] leading-5 flex items-center gap-2'><Image src="/icons/Re-screen.svg" width={16} height={16} alt="" /> Request Re-verification</h4>
            <div className='mt-4'>
              <label className='text-Black236 block mb-2 font-normal text-[13.5px] leading-5'>Justification <span className='text-red-1300 text-sm'>*</span></label>
              <textarea className='text-lighrgrey48 placeholder:text-lighrgrey48 text-[13px] font-normal bg-gray-1800 border border-solid border-lighrgrey49 rounded-[10px] h-17.5 w-full px-4 py-2.5' placeholder='e.g., Expired ID, Regulatory Refresh, Address Change...'></textarea>
              <p className='text-gray-2300 font-inter font-normal text-xs leading-6 mb-4'>Explain why you are requesting new documents</p>
              <Link href={"#"} className='text-royalBlue123 font-inter font-normal text-[13px] leading-5 flex items-center gap-3'><Image src="/images/eyes-blue.svg" width={16} height={16} alt="" />Preview notification message</Link>
            </div>
          </div>
        </div>
        <div className='px-5 py-4 flex items-center justify-between bg-gray-7900/30 border-t border-solid border-gray-3100'>
          <Link href={"#"} className='inline-flex items-center px-4 hover:bg-green-4200 hover:text-white h-10 text-gray-5000 text-sm leading-5 rounded-lg'>Cancel</Link>
          <Link href={"#"} className='inline-flex items-center px-6 bg-royalBlue123 h-10 text-white text-sm leading-5 rounded-lg hover:bg-royalBlue123 hover:text-white opacity-50 gap-2'><Image src="/icons/Re-screen.svg" width={16} height={16} alt="" className='brightness-10000' /> Request Re-verification</Link>
        </div>


      </Modal >
    </div >
  );
};

export default UsersStudentsPage;
