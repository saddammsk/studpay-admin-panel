"use client";
import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
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
    href: "#",
    icon: "../images/dashboard-icon.svg",
    iconActive: "../images/dashboard-icon-blue.svg",
    active: true,
  },
  {
    name: "Accounts",
    href: "/accounts",
    icon: "../images/wallet-icon3.svg",
    iconActive: "../images/wallet-icon3-blue.svg",
    active: false,
  },
  {
    name: "Cards",
    href: "/cards",
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

  return (
    <div>
      <div className='bg-white border border-solid border-gray-3100 rounded-lg p-5'>
        <div className='flex items-start justify-between'>
          <div className='flex items-center gap-7'>
            <div className='flex items-center gap-4'>
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
            <div className=''>
              <ul className='flex items-center gap-3.5 mb-5.5'>
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
              <ul className='flex items-center gap-20 mb-7.5'>
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
          <div className='flex items-center gap-6'>
            <div className='flex items-start gap-3'>
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
            <div className='border-l border-solid border-gray-3100 pl-6'>
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
      <div className='bg-white my-4 border border-solid border-gray-3100 shadow-50xl px-4 rounded-lg'>
        <ul className='flex items-center'>
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
      <div className='flex items-center gap-4'>
        <div className=''>
          <div className='grid grid-cols-4 gap-4'>
            <div className='flex items-start justify-between bg-white border border-solid border-gray-3100 shadow-4xl rounded-lg p-4'>
              <div className=''>
                <span className='text-gray-1900 font-inter font-medium text-sm leading-5 block'>Total Balance</span>
                <div className='flex items-center gap-2 my-1.5'>
                  <h4 className='text-blue-1300 font-inter font-semibold text-2xl leading-8'>€12,847.32</h4>
                  <span className='flex items-center gap-0.5 text-lightgreen17 font-inter font-medium text-xs leading-4'>
                    <Image src="../images/price-arrow-green.svg" width="12" height="12" alt="" />
                    +2.4%
                  </span>
                </div>
                <p className='text-gray-1900 font-inter font-normal text-xs leading-4'>Across 3 accounts</p>
              </div>
              <span className='bg-blue1400/10 w-10 h-10 flex items-center justify-center rounded-lg'>
                <Image src="../images/wallet-blue.svg" width="20" height="20" alt="" />
              </span>
            </div>
            <div className='flex items-start justify-between bg-white border border-solid border-gray-3100 shadow-4xl rounded-lg p-4'>
              <div className=''>
                <span className='text-gray-1900 font-inter font-medium text-sm leading-5 block'>Active AVI</span>
                <h4 className='text-blue-1300 font-inter font-semibold text-2xl leading-8 my-1.5'>2 Active</h4>
                <p className='text-gray-1900 font-inter font-normal text-xs leading-4'>€500 blocked</p>
              </div>
              <span className='bg-yellow-1100/10 w-10 h-10 flex items-center justify-center rounded-lg'>
                <Image src="../images/block-yellow.svg" width="20" height="20" alt="" />
              </span>
            </div>
            <div className='flex items-start justify-between bg-white border border-solid border-gray-3100 shadow-4xl rounded-lg p-4'>
              <div className=''>
                <span className='text-gray-1900 font-inter font-medium text-sm leading-5 block'>Support Tickets</span>
                <h4 className='text-blue-1300 font-inter font-semibold text-2xl leading-8 my-1.5'>1 Open</h4>
                <p className='text-gray-1900 font-inter font-normal text-xs leading-4'>Avg. response: 2h</p>
              </div>
              <span className='bg-skyblue23/10 w-10 h-10 flex items-center justify-center rounded-lg'>
                <Image src="../images/support-blue.svg" width="20" height="20" alt="" />
              </span>
            </div>
            <div className='flex items-start justify-between bg-white border border-solid border-gray-3100 shadow-4xl rounded-lg p-4'>
              <div className=''>
                <span className='text-gray-1900 font-inter font-medium text-sm leading-5 block'>Risk Flags</span>
                <h4 className='text-blue-1300 font-inter font-semibold text-2xl leading-8 my-1.5'>3 Flags</h4>
                <p className='text-gray-1900 font-inter font-normal text-xs leading-4'>2 high priority</p>
              </div>
              <span className='bg-red1700/10 w-10 h-10 flex items-center justify-center rounded-lg'>
                <Image src="../images/warning.svg" width="20" height="20" alt="" />
              </span>
            </div>
          </div>
          <div className='bg-white mb-4 border border-solid border-gray-3100 shadow-4xl p-6 mt-5 rounded-lg'>
            <div className='flex items-center justify-between mb-3'>
              <h4 className='text-blue-1300 font-inter font-semibold text-base leading-6 tracking-[-0.4px] flex items-center gap-2'>
                <Image src="../images/warning.svg" width="16" height="16" alt="" />
                Active Risk Flags
              </h4>
              <Link href={"#"} className='inline-flex items-center gap-1 text-blue1400 font-inter font-normal text-sm leading-5'>View all  <Image src="../images/view-arrow.svg" width="16" height="16" alt="" /></Link>
            </div>
            <div className='bg-gray-1600/50 mb-2 rounded-lg p-3 flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <span className='text-red1700 font-inter font-semibold text-[10px] leading-3.75 bg-red1800 border border-solid border-red1700/20 rounded-full h-5.25 px-2.5 uppercase inline-flex items-center justify-center'>high</span>
                <p className='text-blue-1300 font-inter font-normal text-sm leading-5'>Large international transfer detected</p>
              </div>
              <span className='text-gray-1900 font-inter font-normal text-sm leading-4 block'>2h ago</span>
            </div>
            <div className='bg-gray-1600/50 mb-2 rounded-lg p-3 flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <span className='text-red1700 font-inter font-semibold text-[10px] leading-3.75 bg-red1800 border border-solid border-red1700/20 rounded-full h-5.25 px-2.5 uppercase inline-flex items-center justify-center'>high</span>
                <p className='text-blue-1300 font-inter font-normal text-sm leading-5'>Login from new location (Russia)</p>
              </div>
              <span className='text-gray-1900 font-inter font-normal text-sm leading-4 block'>5h ago</span>
            </div>
            <div className='bg-gray-1600/50 mb-2 rounded-lg p-3 flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <span className='text-yellow-1100 font-inter font-semibold text-[10px] leading-3.75 bg-skyblue2434 border border-solid border-yellow-1100/20 rounded-full h-5.25 px-2.5 uppercase inline-flex items-center justify-center'>medium</span>
                <p className='text-blue-1300 font-inter font-normal text-sm leading-5'>Multiple failed card transactions</p>
              </div>
              <span className='text-gray-1900 font-inter font-normal text-sm leading-4 block'>1d ago</span>
            </div>
          </div>
          <div className='bg-white border border-solid border-gray-3100 shadow-4xl p-6 mt-5 rounded-lg'>
            <h4 className='text-blue-1300 mb-3 font-inter font-semibold text-sm leading-5'>
                Recent Activity
              </h4>
              <div className=''>
                <div className=''>
                  <span className='bg-gray-1600 w-8 h-8 flex items-center justify-center rounded-full'></span>
                  <div className=''>
                    <h4 className='text-blue-1300 font-inter font-medium text-sm leading-5'>Salary deposit - ABC Corp</h4>
                    <div className=''>
                      <p className='text-gray-1900 font-inter font-normal text-xs leading-4'>Today, 09:15</p>
                      <span className='text-lightgreen17 font-inter font-semibold text-[10px] leading-3.75 h-4.25 px-1.5 bg-skyblue2434 border border-solid  border-lightgreen17/20 rounded-full inline-flex items-center justify-center'>completed</span>
                    </div>
                  </div>
                </div>
                <span className='text-lightgreen17 font-inter font-semibold text-sm leading-5 block'>+€2,450.00</span>
              </div>
             
          </div>
        </div>
        <div className='max-w-75 w-full'></div>
      </div>
    </div>
  );
};

export default UsersStudentsPage;
