"use client";
import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import ToggleSwitch from "@/app/components/ToggleSwitch";
import ProgressBar from "@/app/components/ProgressBar";
import CardTransactionsTable from "@/app/components/UsersStudent/CardTransactionsTable";

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
    iconActive: "../icons/card-blue.svg",
    active: true,
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
  const [enabled, setEnabled] = useState(true);
  const [enabled2, setEnabled2] = useState(true);
  const [enabled3, setEnabled3] = useState(true);
  return (
    <div className='font-inter'>
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
                  <h4 className='text-black-1600 font-inter font-medium text-sm leading-4'>20-11-2000</h4>
                </li>
                <li>
                  <span className='text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 flex items-center gap-1'><Image src="../icons/location2.svg" width="8" height="12" alt="" />Location</span>
                  <h4 className='text-black-1600 font-inter font-medium text-sm leading-4 flex items-center gap-1'><Image src="/images/🇩🇪.png" width="16" height="16" alt="" /> Berlin,Germany</h4>
                </li>
                <li>
                  <span className='text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 flex items-center gap-1'>Gender |Profession</span>
                  <h4 className='text-black-1600 font-inter font-medium text-sm leading-4 flex items-center'>Male |Student</h4>
                </li>
              </ul>
              <ul className='flex items-center xl:justify-start justify-between gap-20 mb-7.5'>
                <li>
                  <span className='text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 flex items-center gap-1'><Image src="../icons/phone-icon.svg" width="12" height="12" alt="" />Phone</span>
                  <h4 className='text-black-1600 font-inter font-medium text-sm leading-4'>+49 17612345678</h4>
                </li>
                <li>
                  <span className='text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 flex items-center gap-1'><Image src="../icons/heart.svg" width="12" height="12" alt="" />MaritalStatus</span>
                  <h4 className='text-black-1600 font-inter font-medium text-sm leading-4 flex items-center'>Single</h4>
                </li>
              </ul>
              <Link href={"#"} className='inline-flex items-center justify-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
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
                  <li><Link href={"#"} className='inline-flex px-2.5 items-center justify-center text-black-1600 font-inter font-semibold text-xs leading-4 bg-gray-1600/10 border border-solid  border-gray-1000 rounded-full'>Credit: 742</Link></li>
                </ul>
              </div>
            </div>
            <div className='md:border-l border-solid border-gray-3100 md:pl-6'>
              <ul>
                <li className="flex items-center gap-2 mb-2.5">
                  <span className='w-4 h-3 flex items-center justify-center'>
                    <Image src="../images/clock-gray.svg" width="16" height="16" alt="" />
                  </span>
                  <p className='text-gray-1900 font-inter font-normal text-sm leading-5'>Last login: <strong className='font-medium text-black-1600'>Today, 09:15</strong></p>
                </li>
                <li className="flex items-center gap-2">
                  <span className='w-4 h-3 flex items-center justify-center'>
                    <Image src="../icons/phone-icon.svg" width="16" height="16" alt="" />
                  </span>
                  <p className='text-gray-1900 font-inter font-normal text-sm leading-5'>Device: <strong className='font-medium text-black-1600'>iPhone 15 Pro (iOS 17.2)</strong></p>
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
      <div className='flex 2xl:flex-row flex-col items-start gap-4'>
        <div className='2xl:w-[calc(100%-300px)] w-full 4xl:p-6 2xl:py-6 px-0'>
          <div className='flex md:flex-row flex-col md:items-center md:gap-0 gap-4 justify-between mb-6'>
            <div className=''>
              <h4 className='text-black-1600 font-inter font-bold text-xl leading-7'>Card Inventory</h4>
              <p className='text-gray-1900 font-inter font-normal 4xl:text-sm text-xs leading-5'>Manage physical and virtual cards for this customer</p>
            </div>
            <ul className='flex sm:flex-row flex-col items-center gap-2'>
              <li className='sm:w-auto w-full'>
                <Link href={"#"} className='group sm:w-auto w-full inline-flex items-center justify-center text-black-1600 font-medium text-sm leading-5 gap-2 hover:bg-blue1400 hover:border-blue1400 hover:text-white bg-gray-1500 border border-solid border-gray-3600 rounded-md h-10 px-4'>
                  <Image src="../images/card-black.svg"
                    width="16"
                    height="16"
                    alt=""
                    className='group-hover:brightness-10750'
                  />
                  Order Physical Card
                </Link>
              </li>
              <li className='sm:w-auto w-full'>
                <Link href={"#"} className='group sm:w-auto w-full inline-flex items-center justify-center font-medium text-sm leading-5 gap-2 bg-blue1400 hover:bg-blue1400/90 border-blue1400 text-white border border-solid  rounded-md h-10 px-4'>
                  <Image src="../images/mobile-icon.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                  Create Virtual Card
                </Link>
              </li>
            </ul>
          </div>
          <div className='bg-white shadow-53xl 5xl:p-6 p-4 5xl:gap-6 gap-4 flex md:flex-row flex-col items-start rounded-lg mb-4'>
            <div className='4xl:max-w-[256px] md:max-w-57.5 max-w-full md:block flex items-center justify-center w-full'>
              <Image src="/images/visa-card.png"
                width="256"
                height="160"
                alt=""
                className='sm:w-auto w-full'
              />
            </div>
            <div className='flex-1 w-full'>
              <div className='flex items-center justify-between'>
                <div className=''>
                  <h4 className='text-black-1600 font-inter font-bold text-base leading-6'>Physical Visa Card</h4>
                  <p className='text-gray-1900 font-inter font-normal text-sm leading-5'>•••• •••• •••• 4589</p>
                </div>
                <div className='inline-flex items-center bg-green-1900 rounded-full h-5 px-2.5 gap-1.5 text-green-1600 font-inter font-medium text-xs leading-4'>
                  <span className='flex items-center bg-green-1600 rounded-full w-1.5 h-1.5'></span>
                  Active
                </div>
              </div>
              <div className='flex items-center gap-4 mt-4.5'>
                <span className='text-gray-1900 font-normal text-sm leading-5 flex items-center gap-2'>
                  <Image src="../images/mobile-dark.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                  Tokenization:
                </span>
                <ul className='flex sm:flex-nowrap flex-wrap items-center gap-2'>
                  <li>
                    <Link href={"#"} className='text-green-1600 bg-green-1900 font-normal text-xs leading-4 inline-flex items-center h-6 px-2 rounded-md'>Apple Pay</Link>
                  </li>
                  <li>
                    <Link href={"#"} className='text-green-1600 bg-green-1900 font-normal text-xs leading-4 inline-flex items-center h-6 px-2 rounded-md'>Google Pay</Link>
                  </li>
                </ul>
              </div>
              <div className='flex 4xl:flex-row flex-col 4xl:items-center items-start 4xl:gap-0 gap-4 justify-between mt-6'>
                <ul className='flex sm:flex-nowrap flex-wrap items-center gap-2'>
                  <li>
                    <Link href={"#"} className='group text-black-1600 bg-gray-1500 hover:bg-blue1400 hover:text-white transition-all duration-500 ease-in-out border border-solid border-gray-3600 font-medium 5xl:text-sm text-xs leading-5 inline-flex items-center gap-2 h-9 px-3 rounded-md'>
                      <Image src="/images/freeze-dark.svg"
                        width="16"
                        height="16"
                        alt=""
                        className='group-hover:brightness-10000'
                      />
                      Freeze Card
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className='group text-red-1000 bg-gray-1500 hover:bg-blue1400 transition-all duration-500 ease-in-out border border-solid border-gray-3600 font-medium 5xl:text-sm text-xs leading-5 inline-flex items-center gap-2 h-9 px-3 rounded-md'>
                      <Image src="/images/warning-sheild.svg"
                        width="16"
                        height="16"
                        alt=""
                      />
                      Report Stolen
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className='group text-black-1600 bg-gray-1500 hover:bg-blue1400 hover:text-white transition-all duration-500 ease-in-out border border-solid border-gray-3600 font-medium 5xl:text-sm text-xs leading-5 inline-flex items-center gap-2 h-9 px-3 rounded-md'>
                      <Image src="/images/key-icon.svg"
                        width="16"
                        height="16"
                        alt=""
                        className='group-hover:brightness-10000'
                      />
                      Unblock PIN
                    </Link>
                  </li>
                </ul>
                <div className='flex items-center 5xl:gap-8 gap-1.5'>
                  <span className='text-gray-1900 font-inter font-normal text-sm leading-5 block'>Online Transection</span>
                  <ToggleSwitch checked={enabled} onChange={setEnabled}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white shadow-53xl 5xl:p-6 p-4 5xl:gap-6 gap-4 flex md:flex-row flex-col items-start rounded-lg mb-4'>
            <div className='4xl:max-w-[256px] md:max-w-57.5 max-w-full md:block flex items-center justify-center w-full'>
              <Image src="/images/master-card.png"
                width="256"
                height="160"
                alt=""
                className='sm:w-auto w-full'
              />
            </div>
            <div className='flex-1 w-full'>
              <div className='flex items-center justify-between'>
                <div className=''>
                  <h4 className='text-black-1600 font-inter font-bold text-base leading-6'>Virtual Mastercard Card</h4>
                  <p className='text-gray-1900 font-inter font-normal text-sm leading-5'>•••• •••• •••• 7823</p>
                </div>
                <div className='inline-flex items-center bg-green-1900 rounded-full h-5 px-2.5 gap-1.5 text-yellow-1100 font-inter font-medium text-xs leading-4'>
                  <span className='flex items-center bg-yellow-1100 rounded-full w-1.5 h-1.5'></span>
                  Frozen
                </div>
              </div>
              <div className='flex  items-center gap-4 mt-4.5'>
                <span className='text-gray-1900 font-normal text-sm leading-5 flex items-center gap-2'>
                  <Image src="../images/mobile-dark.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                  Tokenization:
                </span>
                <ul className='flex items-center gap-2'>
                  <li>
                    <Link href={"#"} className='text-green-1600 bg-green-1900 font-normal text-xs leading-4 inline-flex items-center h-6 px-2 rounded-md'>Apple Pay</Link>
                  </li>
                  <li>
                    <Link href={"#"} className='text-gray-1900 bg-gray1700 font-normal text-xs leading-4 inline-flex items-center h-6 px-2 rounded-md'>Google Pay</Link>
                  </li>
                </ul>
              </div>
              <div className='flex 4xl:flex-row flex-col 4xl:items-center items-start 4xl:gap-0 gap-4 justify-between mt-6'>
                <ul className='flex sm:flex-nowrap flex-wrap items-center gap-2'>
                  <li>
                    <Link href={"#"} className='group text-black-1600 bg-gray-1500 hover:bg-blue1400 hover:text-white transition-all duration-500 ease-in-out border border-solid border-gray-3600 font-medium 5xl:text-sm text-xs leading-5 inline-flex items-center gap-2 h-9 px-3 rounded-md'>
                      <Image src="/images/freeze-dark.svg"
                        width="16"
                        height="16"
                        alt=""
                        className='group-hover:brightness-10000'
                      />
                      Freeze Card
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className='group text-red-1000 bg-gray-1500 hover:bg-blue1400 transition-all duration-500 ease-in-out border border-solid border-gray-3600 font-medium 5xl:text-sm text-xs leading-5 inline-flex items-center gap-2 h-9 px-3 rounded-md'>
                      <Image src="/images/warning-sheild.svg"
                        width="16"
                        height="16"
                        alt=""
                      />
                      Report Stolen
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className='group text-black-1600 bg-gray-1500 hover:bg-blue1400 hover:text-white transition-all duration-500 ease-in-out border border-solid border-gray-3600 font-medium 5xl:text-sm text-xs leading-5 inline-flex items-center gap-2 h-9 px-3 rounded-md'>
                      <Image src="/images/key-icon.svg"
                        width="16"
                        height="16"
                        alt=""
                        className='group-hover:brightness-10000'
                      />
                      Unblock PIN
                    </Link>
                  </li>
                </ul>
                <div className='flex items-center 5xl:gap-8 gap-1.5'>
                  <span className='text-gray-1900 font-inter font-normal text-sm leading-5 block'>Online Transection</span>
                  <ToggleSwitch checked={enabled2} onChange={setEnabled2}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white shadow-53xl 5xl:p-6 p-4 5xl:gap-6 gap-4 flex md:flex-row flex-col items-start rounded-lg mb-4'>
            <div className='4xl:max-w-[256px] md:max-w-57.5 max-w-full md:block flex items-center justify-center w-full'>
              <Image src="/images/visa-card.png"
                width="256"
                height="160"
                alt=""
                className='sm:w-auto w-full'
              />
            </div>
            <div className='flex-1 w-full'>
              <div className='flex items-center justify-between'>
                <div className=''>
                  <h4 className='text-black-1600 font-inter font-bold text-base leading-6'>Physical Visa Card</h4>
                  <p className='text-gray-1900 font-inter font-normal text-sm leading-5'>•••• •••• •••• 4589</p>
                </div>
                <div className='inline-flex items-center bg-green-1900 rounded-full h-5 px-2.5 gap-1.5 text-green-1600 font-inter font-medium text-xs leading-4'>
                  <span className='flex items-center bg-green-1600 rounded-full w-1.5 h-1.5'></span>
                  Active
                </div>
              </div>
              <div className='flex items-center gap-4 mt-4.5'>
                <span className='text-gray-1900 font-normal text-sm leading-5 flex items-center gap-2'>
                  <Image src="../images/mobile-dark.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                  Tokenization:
                </span>
                <ul className='flex items-center gap-2'>
                  <li>
                    <Link href={"#"} className='text-green-1600 bg-green-1900 font-normal text-xs leading-4 inline-flex items-center h-6 px-2 rounded-md'>Apple Pay</Link>
                  </li>
                  <li>
                    <Link href={"#"} className='text-green-1600 bg-green-1900 font-normal text-xs leading-4 inline-flex items-center h-6 px-2 rounded-md'>Google Pay</Link>
                  </li>
                </ul>
              </div>
              <div className='flex 4xl:flex-row flex-col 4xl:items-center items-start 4xl:gap-0 gap-4 justify-between mt-6'>
                <ul className='flex sm:flex-nowrap flex-wrap items-center gap-2'>
                  <li>
                    <Link href={"#"} className='group text-black-1600 bg-gray-1500 hover:bg-blue1400 hover:text-white transition-all duration-500 ease-in-out border border-solid border-gray-3600 font-medium 5xl:text-sm text-xs leading-5 inline-flex items-center gap-2 h-9 px-3 rounded-md'>
                      <Image src="/images/freeze-dark.svg"
                        width="16"
                        height="16"
                        alt=""
                        className='group-hover:brightness-10000'
                      />
                      Freeze Card
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className='group text-red-1000 bg-gray-1500 hover:bg-blue1400 transition-all duration-500 ease-in-out border border-solid border-gray-3600 font-medium 5xl:text-sm text-xs leading-5 inline-flex items-center gap-2 h-9 px-3 rounded-md'>
                      <Image src="/images/warning-sheild.svg"
                        width="16"
                        height="16"
                        alt=""
                      />
                      Report Stolen
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className='group text-black-1600 bg-gray-1500 hover:bg-blue1400 hover:text-white transition-all duration-500 ease-in-out border border-solid border-gray-3600 font-medium 5xl:text-sm text-xs leading-5 inline-flex items-center gap-2 h-9 px-3 rounded-md'>
                      <Image src="/images/key-icon.svg"
                        width="16"
                        height="16"
                        alt=""
                        className='group-hover:brightness-10000'
                      />
                      Unblock PIN
                    </Link>
                  </li>
                </ul>
                <div className='flex items-center 5xl:gap-8 gap-1.5'>
                  <span className='text-gray-1900 font-inter font-normal 4xl:text-sm text-xs leading-5 block'>Online Transection</span>
                  <ToggleSwitch checked={enabled3} onChange={setEnabled3}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='mt-6 flex 4xl:flex-row flex-col gap-6'>
            <div className='5xl:w-131.5 4xl:w-125.5 4xl:flex-1  bg-white shadow-53xl p-6 rounded-lg'>
              <div className='flex sm:flex-nowrap flex-wrap sm:gap-0 gap-4 items-center justify-between'>
                <div className=''>
                  <h4 className='text-black-1600 font-inter font-bold text-lg leading-7'>Spending Limits</h4>
                  <p className='text-gray-1900 font-inter font-normal text-sm leading-5'>Current usage and limits</p>
                </div>
                <Link href={"#"} className='group text-black-1600 bg-gray-1500 hover:bg-blue1400 hover:text-white transition-all duration-500 ease-in-out border border-solid border-gray-3600 font-medium text-sm leading-5 inline-flex items-center gap-2 h-9 px-3 rounded-md'>
                  <Image src="/images/freeze-dark.svg"
                    width="16"
                    height="16"
                    alt=""
                    className='group-hover:brightness-10000'
                  />
                  Adjust Limits
                </Link>
              </div>
              <div className='my-6 flex items-center gap-3 border border-solid border-yellow-1100/20 bg-yellow1800/50 rounded-lg p-3'>
                <Image src="/images/warning-yellow.svg"
                  width="16"
                  height="16"
                  alt=""
                  className='group-hover:brightness-10000'
                />
                <p className='text-black-1600 font-normal text-xs leading-5'><strong className='font-bold'>4-Eyes Approval Required:</strong> Any limit change will trigger a review request.</p>
              </div>
              <div className='mb-5'>
                <div className='flex items-center justify-between mb-2'>
                  <h4 className='text-black-1600 font-medium text-sm leading-5'>Daily Spending</h4>
                  <span className='text-yellow-1100 font-medium text-sm leading-5 block'>€850 / €1,000</span>
                </div>
                <ProgressBar value={80} barColor="bg-yellow-1100" bgColor="bg-gray1700" />
              </div>
              <div className='mb-5'>
                <div className='flex items-center justify-between mb-2'>
                  <h4 className='text-black-1600 font-medium text-sm leading-5'>Monthly Spending</h4>
                </div>
                <ProgressBar value={80} barColor="bg-yellow-1100" bgColor="bg-gray1700" />
              </div>
              <div className=''>
                <div className='flex items-center justify-between mb-2'>
                  <h4 className='text-black-1600 font-medium text-sm leading-5'>ATM Withdrawal</h4>
                  <span className='text-gray-1900 font-normal text-sm leading-5 block'>€200 / €500</span>
                </div>
                <ProgressBar value={5} barColor="bg-blue1400" bgColor="bg-gray1700" />
              </div>
            </div>
            <div className='5xl:w-[calc(100%-526px)] 4xl:w-[calc(100%-502px)] w-full bg-white shadow-53xl p-6 rounded-lg'>
              <div className='mb-4'>
                <h4 className='text-black-1600 font-inter font-bold text-lg leading-7'>Recent Card Transactions</h4>
                <p className='text-gray-1900 font-inter font-normal text-sm leading-5'>Last 5 transactions across all cards</p>
              </div>
              <CardTransactionsTable />
            </div>
          </div>
        </div>
        <div className='2xl:max-w-75 w-full bg-white border border-solid border-gray-3100 rounded-lg shadow-4xl md:p-6 p-4'>
          <h4 className='text-black-1600 font-inter font-semibold text-base leading-6 tracking-[-0.4px] gap-2 flex items-center'>
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
                <Link href={"#"} className='w-full inline-flex items-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3100 rounded-md bg-gray-1600 h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
                  <Image src="../images/email-black.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                  Email
                </Link>
              </li>
              <li>
                <Link href={"#"} className='w-full inline-flex items-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3100 rounded-md bg-gray-1600 h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
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
                <p className="text-black-1600 font-medium text-sm leading-5">2y 4mo</p>
              </li>
              <li>
                <span className='block text-gray-1900 font-normal text-xs leading-4 mb-0.5'>Total Txns</span>
                <p className="text-black-1600 font-medium text-sm leading-5">1,247</p>
              </li>
              <li>
                <span className='block text-gray-1900 font-normal text-xs leading-4 mb-0.5'>Avg. Monthly</span>
                <p className="text-black-1600 font-medium text-sm leading-5">€3,450</p>
              </li>
              <li>
                <span className='block text-gray-1900 font-normal text-xs leading-4 mb-0.5'>Support Tickets</span>
                <p className="text-black-1600 font-medium text-sm leading-5">12</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersStudentsPage;
