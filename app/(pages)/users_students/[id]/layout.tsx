'use client'
import Button from '@/app/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useParams, usePathname } from "next/navigation";




const UserLayout = ({children}: {children: React.ReactNode}) => {
     const pathname = usePathname();
  const params = useParams();
  const userId = params.id;

  const menuItems = [
    {
      name: "Overview",
      href: `/users_students/${userId}`,
      icon: "/images/dashboard-icon.svg",
      iconActive: "/images/dashboard-icon-blue.svg",
    },
    {
      name: "Accounts",
      href: `/users_students/${userId}/user_account`,
      icon: "/images/wallet-icon3.svg",
      iconActive: "/icons/wallet-icon3-blue.svg",
    },
    {
      name: "Cards",
      href: `/users_students/${userId}/user_card`,
      icon: "/images/avi-card.svg",
      iconActive: "/icons/avi-card-blue.svg",
    },
    {
      name: "Transactions",
      href: `/users_students/${userId}/user_transactions`,
      icon: "/icons/transactions-icon.svg",
      iconActive: "/icons/transactions-icon-blue-.svg",
    },
    {
      name: "AVI & Blocked",
      href: `/users_students/${userId}/user_avi_blocked`,
      icon: "/images/avi-block.svg",
      iconActive: "/icons/avi-blocked-icon-blue.svg",
    },
    {
      name: "KYC",
      href: `/users_students/${userId}/user_kyc`,
      icon: "/images/shield-dark.svg",
      iconActive: "/icons/kyc-icon-blue.svg",
    },
    {
      name: "Financing",
      href: `/users_students/${userId}/user_financing`,
      icon: "/images/Financing.svg",
      iconActive: "/icons/financing-icon-blue.svg",
    },
    {
      name: "Housing",
      href: `/users_students/${userId}/user_housing`,
      icon: "/images/house-icon.svg",
      iconActive: "/icons/housing-icon-blue.svg",
    },
    {
      name: "Insurance",
      href: `/users_students/${userId}/user_insurance`,
      icon: "/images/shield-dark.svg",
      iconActive: "/icons/insurance-icon-blue.svg",
    },
    {
      name: "Crypto",
      href: `/users_students/${userId}/user_crypto`,
      icon: "/images/crypto-icon.svg",
      iconActive: "/icons/crypto-icon-blue.svg",
    },
    {
      name: "StudSafe",
      href: `/users_students/${userId}/user_studsafe`,
      icon: "/images/lock-icon.svg",
      iconActive: "/icons/studsafe-icon-blue.svg",
    },
    {
      name: "Support",
      href: `/users_students/${userId}/user_support`,
      icon: "/images/support-icon.svg",
      iconActive: "/icons/support-icon-blue.svg",
    },
    {
      name: "Audit Trail",
      href: `/users_students/${userId}/user_audit_trail`,
      icon: "/images/file-icon2.svg",
      iconActive: "/icons/audit-icon-blue.svg",
    },
  ];


  
  return (
    <div>
         <ul className='md:hidden flex items-center justify-end mb-4 gap-1'>
        <li>
          <Link href={'#'} className='inline-flex items-center justify-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
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
          <Link href={'#'} className='inline-flex items-center justify-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
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
                  <h4 className='text-black-1600 font-inter font-semibold text-xl leading-7'>Marcus Schmidt</h4>
                  <span className='text-white bg-purpal115 rounded-full px-2.5 h-5.5 inline-flex items-center justify-center font-inter font-semibold text-xs leading-4 gap-1'>
                    <Image src="/icons/Premium-icon.svg" width="16" height="16" alt="" />
                    Premium
                  </span>
                </div>
                <span className='text-gray-1900 my-1.5 font-inter font-normal text-xs leading-4 inline-flex items-center justify-center bg-gray-1600 rounded h-5 px-2'>ID: USR-2024-00847</span>
                <p className='text-gray-1200 font-inter font-bold text-sm gap-1 leading-5 flex items-center'>Email: <a href={"mailto:alex.schmidt@university.edu"} className='inline-flex font-normal'>alex.schmidt@university.edu</a></p>
              </div>
            </div>
            <div className='xl:w-auto w-full'>
              <ul className='flex items-center xl:justify-start justify-between sm:flex-nowrap flex-wrap gap-3.5 mb-5.5'>
                <li>
                  <span className='text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 flex items-center gap-1'><Image src="/icons/Birthdate-icon.svg" width="8" height="8" alt="" />Birthdate</span>
                  <h4 className='text-black-1600 font-inter font-medium text-sm leading-4'>20-11-2000</h4>
                </li>
                <li>
                  <span className='text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 flex items-center gap-1'><Image src="/icons/location2.svg" width="8" height="12" alt="" />Location</span>
                  <h4 className='text-black-1600 font-inter font-medium text-sm leading-4 flex items-center gap-1'><Image src="/images/🇩🇪.png" width="16" height="16" alt="" /> Berlin,Germany</h4>
                </li>
                <li>
                  <span className='text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 flex items-center gap-1'>Gender |Profession</span>
                  <h4 className='text-black-1600 font-inter font-medium text-sm leading-4 flex items-center'>Male | Student</h4>
                </li>
              </ul>
              <ul className='flex items-center xl:justify-start justify-between gap-20 mb-7.5'>
                <li>
                  <span className='text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 flex items-center gap-1'><Image src="/icons/phone-icon.svg" width="12" height="12" alt="" />Phone</span>
                  <a href="tel:+4917612345678" className='text-black-1600 font-inter font-medium text-sm leading-4'>+49 17612345678</a>
                </li>
                <li>
                  <span className='text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 flex items-center gap-1'><Image src="/icons/heart.svg" width="12" height="12" alt="" />MaritalStatus</span>
                  <h4 className='text-black-1600 font-inter font-medium text-sm leading-4 flex items-center'>Single</h4>
                </li>
              </ul>
              <Link href={"#"} className='inline-flex items-center justify-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
                <Image src="/images/eye-icon.svg" width="16" height="16" alt="" />
                View ID Documents
              </Link>
            </div>
          </div>
          <div className='flex md:flex-row flex-col md:items-center items-start gap-6'>
            <div className='flex sm:flex-nowrap flex-wrap items-start gap-3'>
              <div className=''>
                <span className='text-gray-1200 font-inter font-normal text-xs leading-4 mb-2 flex items-center gap-1'><Image src="/images/shield-dark.svg" width="12" height="12" alt="" />KYC Status</span>
                <ul className='flex items-center gap-2'>
                  <li>
                    <span className='inline-flex items-center justify-center font-inter font-semibold text-xs leading-5 gap-1 bg-green-1500 rounded-full h-5.5 px-3 text-white'><Image src="/images/check-verified.svg" width="12" height="12" alt="" className='brightness-5000' />Verified</span>
                  </li>
                  <li><Link href={"#"} className='flex items-center justify-center w-7 h-7'><Image src="/images/eyes-icon.svg" width="16" height="16" alt="" /></Link></li>
                </ul>
              </div>
              <div className=''>
                <span className='text-gray-1200 font-inter font-normal text-xs leading-4 mb-2 flex items-center gap-1'><Image src="/images/risk-arrow.svg" width="12" height="12" alt="" /> Risk Score</span>
                <ul className='flex items-center gap-2'>
                  <li>
                    <span className='inline-flex items-center justify-center font-inter font-semibold text-xs leading-5 gap-1 bg-green-1500/10 border border-solid border-green-1500/20 rounded-full h-5.5 px-3 text-green-1500'><Image src="/images/Fraud-check.svg" width="12" height="12" alt="" />Fraud: Low</span>
                  </li>
                  <li><p className='inline-flex px-2.5 items-center justify-center text-black-1600 font-inter font-semibold text-xs leading-4 bg-gray-1600/10 border border-solid  border-gray-1000 rounded-full'>Credit: 742</p></li>
                </ul>
              </div>
            </div>
            <div className='md:border-l border-solid border-gray-3100 md:pl-6'>
              <ul>
                <li className="flex items-center gap-2 mb-2.5">
                  <span className='w-4 h-3 flex items-center justify-center'>
                    <Image src="/images/clock-gray.svg" width="16" height="16" alt="" />
                  </span>
                  <p className='text-gray-1900 font-inter font-normal text-sm leading-5'>Last login: <strong className='font-medium text-black-1600'>Today, 09:15</strong></p>
                </li>
                <li className="flex items-center gap-2">
                  <span className='w-4 h-3 flex items-center justify-center'>
                    <Image src="/icons/phone-icon.svg" width="16" height="16" alt="" />
                  </span>
                  <p className='text-gray-1900 font-inter font-normal text-sm leading-5'>Device: <strong className='font-medium text-black-1600'>iPhone 15 Pro (iOS 17.2)</strong></p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

           <div className='bg-white overflow-x-auto my-4 border border-solid border-gray-3100 shadow-50xl px-4 rounded-lg'>
               <ul className="flex items-center 5xl:w-full w-382.5">
                {menuItems.map((item, index) => {
                  const isActive =
                    index === 0
                      ? pathname === item.href
                      : pathname === item.href || pathname.startsWith(item.href + "/");

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`inline-flex items-center py-3 px-4 gap-2 font-inter font-medium text-sm leading-5 relative transition-colors
                          ${isActive ? "text-blue1400" : "text-gray-1900"}
                          after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:rounded-full after:bg-blue1400
                          ${isActive ? "after:opacity-100" : "after:opacity-0"}
                        `}
                      >
                        <span className="flex items-center justify-center">
                          <Image
                            src={isActive ? item.iconActive : item.icon}
                            width={16}
                            height={16}
                            alt={item.name}
                          />
                        </span>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

    {children}
    </div>
  )
}

export default UserLayout