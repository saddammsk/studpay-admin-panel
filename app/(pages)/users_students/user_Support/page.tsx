"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/app/components/Modal";
import Button from "@/app/components/ui/Button";
import CustomSelect from "@/app/components/CustomSelect";
import ProgressBar from "@/app/components/ProgressBar";
import UserSupportTicketsTable from "@/app/components/UsersStudent/UserSupportTicketsTable";

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
    active: true,
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
  const [isOpen2, setIsOpen2] = useState(false);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<string>("All Countries");
  return (
    <div className="font-inter">
      <div className="">
        <ul className="md:hidden flex items-center justify-end mb-4 gap-1">
          <li>
            <Link
              href={"#"}
              className="inline-flex items-center justify-center gap-2 text-blue-1300 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out"
            >
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
            <Link
              href={"#"}
              className="inline-flex items-center justify-center gap-2 text-blue-1300 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out"
            >
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
            <Button
              onClick={() => { }}
              iconSrc="/images/userplus-white.svg"
              label="Add User"
              className="text-white text-sm font-normal gap-2 h-9 px-3! bg-blue-1000 hover:bg-blue800 rounded-md border border-solid border-gray1600 m-0!"
            />
          </li>
        </ul>
        <div className="bg-white border border-solid border-gray-3100 rounded-lg p-5">
          <div className="flex 5xl:flex-row flex-col items-start 5xl:gap-0 gap-6 justify-between">
            <div className="flex xl:flex-row flex-col xl:items-center gap-7 5xl:w-auto w-full">
              <div className="flex sm:flex-row flex-col items-center gap-4 xl:w-auto w-full">
                <span className="text-white font-inter font-semibold text-xl leading-7 inline-flex items-center justify-center bg-blue1400 rounded-full shadow-49xl w-16 h-16">
                  MS
                </span>
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-3">
                    <h4 className="text-blue-1300 font-inter font-semibold text-xl leading-7">
                      Marcus Schmidt
                    </h4>
                    <span className="text-white bg-purpal115 rounded-full px-2.5 h-5.5 inline-flex items-center justify-center font-inter font-semibold text-xs leading-4 gap-1">
                      <Image
                        src="../icons/Premium-icon.svg"
                        width="16"
                        height="16"
                        alt=""
                      />
                      Premium
                    </span>
                  </div>
                  <span className="text-gray-1900 my-1.5 font-inter font-normal text-xs leading-4 inline-flex items-center justify-center bg-gray-1600 rounded h-5 px-2">
                    ID: USR-2024-00847
                  </span>
                  <p className="text-gray-1200 font-inter font-bold text-sm gap-1 leading-5 flex items-center">
                    Email:{" "}
                    <Link href={"#"} className="inline-flex font-normal">
                      alex.schmidt@university.edu
                    </Link>
                  </p>
                </div>
              </div>
              <div className="xl:w-auto w-full">
                <ul className="flex items-center xl:justify-start justify-between sm:flex-nowrap flex-wrap gap-3.5 mb-5.5">
                  <li>
                    <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 flex items-center gap-1">
                      <Image
                        src="../icons/Birthdate-icon.svg"
                        width="8"
                        height="8"
                        alt=""
                      />
                      Birthdate
                    </span>
                    <h4 className="text-blue-1300 font-inter font-medium text-sm leading-4">
                      20-11-2000
                    </h4>
                  </li>
                  <li>
                    <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 flex items-center gap-1">
                      <Image
                        src="../icons/location2.svg"
                        width="8"
                        height="12"
                        alt=""
                      />
                      Location
                    </span>
                    <h4 className="text-blue-1300 font-inter font-medium text-sm leading-4 flex items-center gap-1">
                      <Image
                        src="/images/🇩🇪.png"
                        width="16"
                        height="16"
                        alt=""
                      />{" "}
                      Berlin,Germany
                    </h4>
                  </li>
                  <li>
                    <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 flex items-center gap-1">
                      Gender |Profession
                    </span>
                    <h4 className="text-blue-1300 font-inter font-medium text-sm leading-4 flex items-center">
                      Male |Student
                    </h4>
                  </li>
                </ul>
                <ul className="flex items-center xl:justify-start justify-between gap-20 mb-7.5">
                  <li>
                    <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 flex items-center gap-1">
                      <Image
                        src="../icons/phone-icon.svg"
                        width="12"
                        height="12"
                        alt=""
                      />
                      Phone
                    </span>
                    <h4 className="text-blue-1300 font-inter font-medium text-sm leading-4">
                      +49 17612345678
                    </h4>
                  </li>
                  <li>
                    <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 flex items-center gap-1">
                      <Image
                        src="../icons/heart.svg"
                        width="12"
                        height="12"
                        alt=""
                      />
                      MaritalStatus
                    </span>
                    <h4 className="text-blue-1300 font-inter font-medium text-sm leading-4 flex items-center">
                      Single
                    </h4>
                  </li>
                </ul>
                <Link
                  href={"#"}
                  className="inline-flex items-center justify-center gap-2 text-blue-1300 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out"
                >
                  <Image
                    src="../images/eye-icon.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                  View ID Documents
                </Link>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:items-center items-start gap-6">
              <div className="flex sm:flex-nowrap flex-wrap items-start gap-3">
                <div className="">
                  <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-2 flex items-center gap-1">
                    <Image
                      src="../images/shield-dark.svg"
                      width="12"
                      height="12"
                      alt=""
                    />
                    KYC Status
                  </span>
                  <ul className="flex items-center gap-2">
                    <li>
                      <span className="inline-flex items-center justify-center font-inter font-semibold text-xs leading-5 gap-1 bg-green-1500 rounded-full h-5.5 px-3 text-white">
                        <Image
                          src="../images/check-verified.svg"
                          width="12"
                          height="12"
                          alt=""
                          className="brightness-5000"
                        />
                        Verified
                      </span>
                    </li>
                    <li>
                      <Link
                        href={"#"}
                        className="flex items-center justify-center w-7 h-7"
                      >
                        <Image
                          src="../images/eyes-icon.svg"
                          width="16"
                          height="16"
                          alt=""
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-2 flex items-center gap-1">
                    <Image
                      src="../images/risk-arrow.svg"
                      width="12"
                      height="12"
                      alt=""
                    />{" "}
                    Risk Score
                  </span>
                  <ul className="flex items-center gap-2">
                    <li>
                      <span className="inline-flex items-center justify-center font-inter font-semibold text-xs leading-5 gap-1 bg-green-1500/10 border border-solid border-green-1500/20 rounded-full h-5.5 px-3 text-green-1500">
                        <Image
                          src="../images/Fraud-check.svg"
                          width="12"
                          height="12"
                          alt=""
                        />
                        Fraud: Low
                      </span>
                    </li>
                    <li>
                      <Link
                        href={"#"}
                        className="inline-flex px-2.5 items-center justify-center text-blue-1300 font-inter font-semibold text-xs leading-4 bg-gray-1600/10 border border-solid  border-gray-1000 rounded-full"
                      >
                        Credit: 742
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:border-l border-solid border-gray-3100 md:pl-6">
                <ul>
                  <li className="flex items-center gap-2 mb-2.5">
                    <span className="w-4 h-3 flex items-center justify-center">
                      <Image
                        src="../images/clock-gray.svg"
                        width="16"
                        height="16"
                        alt=""
                      />
                    </span>
                    <p className="text-gray-1900 font-inter font-normal text-sm leading-5">
                      Last login:{" "}
                      <strong className="font-medium text-blue-1300">
                        Today, 09:15
                      </strong>
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-3 flex items-center justify-center">
                      <Image
                        src="../icons/phone-icon.svg"
                        width="16"
                        height="16"
                        alt=""
                      />
                    </span>
                    <p className="text-gray-1900 font-inter font-normal text-sm leading-5">
                      Device:{" "}
                      <strong className="font-medium text-blue-1300">
                        iPhone 15 Pro (iOS 17.2)
                      </strong>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-x-auto my-4 border border-solid border-gray-3100 shadow-50xl px-4 rounded-lg">
          <ul className="flex items-center 5xl:w-full w-382.5">
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
        <div className="p-6">
          <div className="grid grid-cols-5 gap-9.25">
            <div className="bg-white flex items-start justify-between border border-l-4 border-solid border-gray-3600 border-l-green56 rounded-lg p-4 shadow-64xl">
              <div className="">
                <span className="text-gray-1900 text-[13px] leading-5 font-normal">Open Tickets</span>
                <h3 className="text-blue-1300 font-bold text-2xl leading-8 mt-1">3</h3>
              </div>
              <span className="bg-gray1700 rounded-lg w-9 h-9 flex items-center justify-center">
                <Image
                  src='/icons/Ticket-icon.svg'
                  width='20'
                  height='20'
                  alt=''
                />
              </span>
            </div>
            <div className="bg-white flex items-start justify-between border border-solid border-gray-3600 rounded-lg p-4 shadow-64xl">
              <div className="">
                <span className="text-gray-1900 text-[13px] leading-5 font-normal">Avg. Response</span>
                <h3 className="text-blue-1300 font-bold text-2xl leading-8 mt-1">12m</h3>
                <p className="flex items-center gap-1 text-green-1500 text-[11.4px] leading-4 mt-1">
                  <Image
                    src='/images/price-arrow-green.svg'
                    width='12'
                    height='12'
                    alt=''
                  />
                  12% vs last week</p>
              </div>
              <span className="bg-gray1700 rounded-lg w-9 h-9 flex items-center justify-center">
                <Image
                  src='/images/clock-gray.svg'
                  width='20'
                  height='20'
                  alt=''
                />
              </span>
            </div>
            <div className="bg-white flex items-start justify-between border border-l-4 border-solid border-gray-3600 border-l-green-1500 rounded-lg p-4 shadow-64xl">
              <div className="">
                <span className="text-gray-1900 text-[13px] leading-5 font-normal">Resolved Today</span>
                <h3 className="text-blue-1300 font-bold text-2xl leading-8 mt-1">8</h3>
              </div>
              <span className="bg-gray1700 rounded-lg w-9 h-9 flex items-center justify-center">
                <Image
                  src='/images/check-green-round.svg'
                  width='20'
                  height='20'
                  alt=''
                />
              </span>
            </div>
            <div className="bg-white flex items-start justify-between border border-l-4 border-solid border-gray-3600 border-l-red-1300 rounded-lg p-4 shadow-64xl">
              <div className="">
                <span className="text-gray-1900 text-[13px] leading-5 font-normal">Urgent Issues</span>
                <h3 className="text-blue-1300 font-bold text-2xl leading-8 mt-1">1</h3>
              </div>
              <span className="bg-gray1700 rounded-lg w-9 h-9 flex items-center justify-center">
                <Image
                  src='/images/info-icon.svg'
                  width='20'
                  height='20'
                  alt=''
                />
              </span>
            </div>
            <div className="bg-white flex items-start justify-between border border-solid border-gray-3600 rounded-lg p-4 shadow-64xl">
              <div className="">
                <span className="text-gray-1900 text-[13px] leading-5 font-normal">Active Chats</span>
                <h3 className="text-blue-1300 font-bold text-2xl leading-8 mt-1">2</h3>
              </div>
              <span className="bg-gray1700 rounded-lg w-9 h-9 flex items-center justify-center">
                <Image
                  src='/images/chat-icon2.svg'
                  width='20'
                  height='20'
                  alt=''
                />
              </span>
            </div>
          </div>
          <div className="flex xl:flex-row flex-col items-start gap-6 mt-6">
            <div className="xl:w-[calc(100%-608px)] w-full p">
              <div className="border border-solid border-gray-3600 bg-white shadow-64xl">
                <div className="px-6 pt-6 pb-4">
                  <div className="flex items-center justify-between">
                    <div className="">
                      <h4 className="text-blue-1300 font-semibold text-[17.3px] leading-7 mb-0.5">Support Tickets</h4>
                      <p className="text-gray-1900 font-normal text-[13px] leading-5">Manage and track all support requests</p>
                    </div>
                    <Link href={"#"} className="flex items-center justify-center gap-2 border border-solid border-gray-3600 bg-gray-1500 rounded-md h-9 px-3 text-blue-1300 font-normal text-[13.1px] leading-5">
                      <Image src="/icons/filter-icon.svg" width={16} height={16} alt="" />
                      Advanced Filters
                    </Link>
                  </div>
                  <div className="flex items-center max-w-152.5 w-full mt-4 gap-3">
                    <div className="relative flex-1 max-w-full w-full">
                      <input
                        type="text"
                        className="text-sm transition duration-300 ring-2 ring-transparent focus:ring-transparent font-normal font-neulis-sans text-gray-1900 placeholder:text-gray-1400 px-4 pl-10 h-10 bg-gray-1500 border border-gray-3600 rounded-md w-full outline-0"
                        placeholder="Search by ticket ID or subject..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <div className="absolute top-1/2 -translate-y-1/2 left-3">
                        <Image
                          src="../images/search-icon.svg"
                          width="16"
                          height="16"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className='relative w-37.5!'>
                      <CustomSelect
                        value={status}
                        className='h-10 w-full! text-center'
                        onChange={(e) => setStatus(e.target.value)}
                        options={[
                          { label: "All…", value: "All…" },
                        ]}
                      />
                      <div className="absolute top-1/2 -translate-y-1/2 left-3">
                        <Image
                          src="../icons/single-filter.svg"
                          width="16"
                          height="16"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <UserSupportTicketsTable />
              </div>
              <div className="mt-6 border border-solid border-gray-3600 bg-white shadow-64xl p-6 rounded-lg">
                <h4 className="text-blue-1300 font-semibold text-[17.3px] leading-7 mb-0.5 flex items-center gap-2"><Image src="/icons/meter-icon.svg" width={16} height={16} alt="" /> Customer Satisfaction</h4>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div className="bg-gray1700/50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-1900 font-normal uppercase text-xs leading-4 block">NPS</span>
                      <Image src="/images/price-arrow-red.svg" width={14} height={14} alt="" />
                    </div>
                    <h4 className="text-green56 font-bold text-xl leading-8">+42</h4>
                  </div>
                  <div className="bg-gray1700/50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-1900 font-normal uppercase text-xs leading-4 block">Avg Rating</span>
                    </div>
                    <h4 className="text-blue-1300 flex items-center gap-1.5 font-bold text-[21px] leading-8">
                      <Image src="/images/star-icon.svg" width={16} height={16} alt="" />
                      4.2
                    </h4>
                  </div>
                </div>
                <div className="bg-white mt-5 border border-solid border-gray-3600 rounded-lg p-3">
                  <div className="flex items-center justify-between max-w-133.25 w-full">
                    <h4 className="text-blue-1300 flex items-center gap-2 font-bold text-[13px] leading-5">
                      <Image src="/icons/warning-yellow.svg" width={16} height={16} alt="" />
                      Frustration Level
                    </h4>
                    <span className="text-green56 font-bold text-[11.4px] leading-4 inline-flex items-center justify-center h-5 rounded-full px-2 bg-Orange57">Medium</span>
                  </div>
                  <div className="max-w-133.25 w-full">
                    <div className="mt-3 flex items-center justify-between mb-1.5">
                      <h4 className="text-gray-1900 flex items-center gap-1.5 font-normal text-[11.1px] leading-4">
                        <Image src="/icons/renew-gray.svg" width={12} height={12} alt="" />
                        Reopened tickets
                      </h4>
                      <span className="text-blue-1300 font-normal text-[11.4px] leading-4 inline-flex items-center">2/15</span>
                    </div>
                    <ProgressBar value={10} barColor="bg-green56" bgColor="bg-gray-3600" />
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-gray-1900 flex items-center font-normal text-xs leading-4 uppercase">
                    Reopened tickets
                  </h4>
                  <ul className="mt-3">
                    <li className="bg-gray1700/30 rounded-md px-2 py-1.5 flex items-center justify-between mb-1.5">
                      <h4 className="text-blue-1300 flex items-center font-normal text-[13.2px] leading-5">Sophie Martin</h4>
                      <span className="text-blue-1300 flex items-center font-normal gap-1 text-[13.5px] leading-5"><Image src="/images/star-icon.svg" width={12} height={12} alt="" />5.0</span>
                    </li>
                    <li className="bg-gray1700/30 rounded-md px-2 py-1.5 flex items-center justify-between">
                      <h4 className="text-blue-1300 flex items-center font-normal text-[13.2px] leading-5">Jean-Pierre Blanc</h4>
                      <span className="text-blue-1300 flex items-center font-normal gap-1 text-[13.5px] leading-5"><Image src="/images/star-icon.svg" width={12} height={12} alt="" />4.5</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 border border-solid border-gray-3600 bg-white shadow-64xl p-6 rounded-lg">
                <h4 className="text-blue-1300 font-semibold text-[15.6px] leading-7 mb-3 flex items-center gap-2"><Image src="/icons/action-icon.svg" width={16} height={16} alt="" /> Quick Actions</h4>
                <Link href={"#"} className="flex items-center text-white gap-3 text-[13px] leading-5 bg-blue1400 rounded-lg px-4 py-3">
                  <Image src="/icons/plus-rounded.svg" width={16} height={16} alt="" />
                  Create New Ticket
                </Link>
                <ul className="grid grid-cols-2 gap-2 mt-2 max-w-139.25 w-full">
                  <li>
                    <Link href={"#"} className="flex items-center text-red-1300 gap-3 text-[13px] leading-5 bg-gray-1500 border border-solid border-red-1300/30 rounded-lg px-4 py-3">
                      <Image src="/icons/escalate-top.svg" width={16} height={16} alt="" />
                      Escalate
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className="flex items-center text-blue-1300 gap-3 text-[13px] leading-5 bg-gray-1500 border border-solid border-gray-3600 rounded-lg px-4 py-3">
                      <Image src="/icons/bell-dark.svg" width={16} height={16} alt="" />
                      Notify
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:max-w-152 w-full">
              <div className="mb-4 border border-solid border-gray-3600 bg-white rounded-lg shadow-64xl">
                <div className="flex items-center justify-between border-b border-solid border-gray-3600 py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="relative bg-blue1400/10 rounded-full w-9 h-9 flex items-center justify-center text-blue1400 font-normal text-[13.6px] leading-6">
                      MD
                      <span className="absolute bottom-0 right-0 flex items-center justify-center w-2.5 h-2.5 rounded-full border-2 border-solid border-white bg-green-1500"></span>
                    </div>
                    <div className="flex-1 w-full">
                      <div className="flex items-center gap-2">
                        <h4 className="text-blue-1300 font-bold text-[13.5px] leading-5">Marie Dupont</h4>
                        <div className="text-green-1500 font-normal text-[9.5px] leading-4 bg-green-1500/10 rounded-full h-5 px-1.5 inline-flex items-center gap-1"><span className="bg-green-1500 rounded-full flex items-center justify-center w-1.5 h-1.5"></span> Live</div>
                      </div>
                      <p className="text-gray-1900 text-[10.3px] leading-4 font-normal flex items-center gap-2">
                        <Image
                          src="../icons/world-icon.svg"
                          width="12"
                          height="12"
                          alt=""
                        />
                        French
                      </p>
                    </div>
                  </div>
                  <ul className="flex items-center gap-0.5">
                    <li>
                      <Link href={"#"} className="flex items-center justify-center w-8 h-8">
                        <Image
                          src="../icons/phone-dark.svg"
                          width="16"
                          height="16"
                          alt=""
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"} className="flex items-center justify-center w-8 h-8">
                        <Image
                          src="../icons/video-icon.svg"
                          width="16"
                          height="16"
                          alt=""
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"} className="flex items-center justify-center w-8 h-8">
                        <Image
                          src="../icons/expend-screen.svg"
                          width="16"
                          height="16"
                          alt=""
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2">
                    <div className="relative bg-blue1400/10 rounded-full w-7 h-7 flex items-center justify-center text-blue1400 font-normal text-[9.7px] leading-4">
                      MD
                    </div>
                    <div className="flex-1 w-full">
                      <div className="inline-flex items-center bg-gray1700 pl-3.5 pr-6 py-2 rounded-t-2xl rounded-bl-md rounded-br-2xl">
                        <p className="text-blue-1300 text-[13px] font-normal leading-5.5 max-w-98.5 w-full">Hi, my card stopped working at the ATM today. It just says 'Card
                          Declined'.</p>
                      </div>
                      <p className="text-gray-1900 text-[9.5px] font-normal leading-4 p-1">10:32 AM</p>
                    </div>
                  </div>
                  

                </div>
                <div className="flex items-center gap-2 border-t border-solid border-gray-3600 p-3">
                  <Link href={"#"} className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-Orange57">
                    <Image
                      src="../icons/attachment-icon.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                  </Link>
                  <div className="relative flex-1 w-full">
                    <input type="text" className="text-gray-1900 w-full placeholder:text-gray-1900 text-[13.2px] font-normal bg-gray1700/50 rounded-md px-3 h-10" placeholder="Type a message..." />
                    <Link href={"#"} className="group absolute top-1/2 -translate-y-1/2 right-1 flex items-center justify-center w-7 h-7  hover:bg-Orange57 rounded-md">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="group-hover:stroke-azureblue13"
                          d="M7.99967 14.6673C11.6816 14.6673 14.6663 11.6825 14.6663 8.00065C14.6663 4.31875 11.6816 1.33398 7.99967 1.33398C4.31778 1.33398 1.33301 4.31875 1.33301 8.00065C1.33301 11.6825 4.31778 14.6673 7.99967 14.6673Z"
                          stroke="#65758B"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path className="group-hover:stroke-azureblue13"
                          d="M5.33301 9.33398C5.33301 9.33398 6.33301 10.6673 7.99967 10.6673C9.66634 10.6673 10.6663 9.33398 10.6663 9.33398"
                          stroke="#65758B"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path className="group-hover:stroke-azureblue13" d="M6 6H6.00667" stroke="#65758B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path className="group-hover:stroke-azureblue13" d="M10 6H10.0067" stroke="#65758B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                  <Link href={"#"} className="flex items-center justify-center w-8 h-8 bg-blue1400 hover:bg-blue1400/90 opacity-50 rounded-md">
                    <Image
                      src="../icons/send-icon.svg"
                      width="16"
                      height="16"
                      alt=""
                      className="brightness-10000"
                    />
                  </Link>
                </div>
              </div>
              <div className="bg-white border border-solid border-gray-3100 rounded-lg shadow-4xl md:p-6 p-4">
                <h4 className="text-blue-1300 font-inter font-semibold text-base leading-6 tracking-[-0.4px] gap-2 flex items-center">
                  <Image
                    src="../images/sheild-active.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                  Administrative Actions
                </h4>
                <ul className="mt-3">
                  <li className="mb-2">
                    <Link
                      href={"#"}
                      className="text-white text-sm leading-5 font-inter font-medium flex items-center gap-2 bg-blue1400 hover:bg-blue-1400 transition-all duration-500 ease-in-out rounded-md px-4 h-10"
                    >
                      <Image
                        src="../images/eye-icon.svg"
                        width="16"
                        height="16"
                        alt=""
                        className="brightness-1000"
                      />
                      Impersonate User
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href={"#"}
                      className="text-white text-sm leading-5 font-inter font-medium flex items-center gap-2 bg-red1700 hover:bg-red1700/90 transition-all duration-500 ease-in-out rounded-md px-4 h-10"
                    >
                      <Image
                        src="../images/freeze-icon.svg"
                        width="16"
                        height="16"
                        alt=""
                      />
                      Freeze Account
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="text-yellow-1100 border border-solid border-yellow-1100/50 text-sm leading-5 font-inter font-medium flex items-center justify-between bg-gray-1600 hover:bg-skyblue2434 transition-all duration-500 ease-in-out rounded-md px-4 h-10"
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          src="../images/filter-yellow.svg"
                          width="16"
                          height="16"
                          alt=""
                        />
                        Adjust Limits
                      </div>
                      <span className="text-yellow-1100 font-inter font-medium text-[10px] leading-5 bg-yellow-1100/10 rounded px-1.5 h-6">
                        4-Eyes
                      </span>
                    </Link>
                  </li>
                </ul>
                <div className="border-t border-b border-solid border-gray-3100 py-3 mt-3">
                  <h4 className="text-gray-1900 font-inter font-medium text-xs leading-4 tracking-[-0.3px] uppercase">
                    Send Message
                  </h4>
                  <ul className="mt-2 grid grid-cols-2 gap-3">
                    <li>
                      <Link
                        href={"#"}
                        className="w-full inline-flex items-center gap-2 text-blue-1300 font-inter font-normal text-sm leading-5 border border-solid border-gray-3100 rounded-md bg-gray-1600 h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out"
                      >
                        <Image
                          src="../images/email-black.svg"
                          width="16"
                          height="16"
                          alt=""
                        />
                        Email
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"#"}
                        className="w-full inline-flex items-center gap-2 text-blue-1300 font-inter font-normal text-sm leading-5 border border-solid border-gray-3100 rounded-md bg-gray-1600 h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out"
                      >
                        <Image
                          src="../images/puch-icon.svg"
                          width="16"
                          height="16"
                          alt=""
                        />
                        Push
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="pt-3">
                  <h4 className="text-gray-1900 font-inter font-medium text-xs leading-4 tracking-[-0.3px] uppercase">
                    Quick Stats
                  </h4>
                  <ul className="grid grid-cols-2 gap-3 mt-2">
                    <li>
                      <span className="block text-gray-1900 font-normal text-xs leading-4 mb-0.5">
                        Account Age
                      </span>
                      <p className="text-blue-1300 font-medium text-sm leading-5">
                        2y 4mo
                      </p>
                    </li>
                    <li>
                      <span className="block text-gray-1900 font-normal text-xs leading-4 mb-0.5">
                        Total Txns
                      </span>
                      <p className="text-blue-1300 font-medium text-sm leading-5">
                        1,247
                      </p>
                    </li>
                    <li>
                      <span className="block text-gray-1900 font-normal text-xs leading-4 mb-0.5">
                        Avg. Monthly
                      </span>
                      <p className="text-blue-1300 font-medium text-sm leading-5">
                        €3,450
                      </p>
                    </li>
                    <li>
                      <span className="block text-gray-1900 font-normal text-xs leading-4 mb-0.5">
                        Support Tickets
                      </span>
                      <p className="text-blue-1300 font-medium text-sm leading-5">
                        12
                      </p>
                    </li>
                  </ul>
                </div>
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
        <Link
          onClick={() => setIsOpen(false)}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:py-3.5 md:px-6 p-4">
          <h4 className="text-blue-1300 font-semibold text-lg leading-5 tracking-[-0.45px]">
            Freeze Wallet
          </h4>
          <p className="text-gray-1900 font-normal text-sm leading-5 mt-1.5">
            This is a high-security action. Freezing the wallet will immediately
            block all crypto withdrawals. Use this only for suspicious activity.
          </p>
          <div className="bg-red2300 border border-solid border-red2200/20 mt-5.5 rounded-lg p-1.5">
            <p className="text-red2200 flex items-center justify-center gap-2 text-sm leading-5 font-bold">
              <Image src="/images/warning.svg" width={16} height={16} alt="" />
              All pending and future withdrawals will be blocked
            </p>
          </div>
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
              <button className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-red2100/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-red2100 border-solid border-red2100 h-10">
                Confirm Terminate
              </button>
            </li>
          </ul>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen2}
        onClose={() => setIsOpen2(false)}
        panelClassName="max-w-[512px] bg-gray-1500 border-gray-3600! relative"
      >
        <Link
          onClick={() => setIsOpen2(false)}
          href={"#"}
          className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4"
        >
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="md:p-6 p-4">
          <h4 className="text-blue-1300 flex items-center gap-3 font-bold text-lg leading-5 tracking-[-0.45px]">
            <span className="bg-blue-1000/10 flex items-center justify-center rounded-xl w-10 h-10">
              <Image
                src="../icons/converter-blue.svg"
                width="20"
                height="20"
                alt=""
              />
            </span>
            Convert Crypto to Fiat
          </h4>
          <p className="text-lighrgrey38 font-normal text-sm leading-5 mt-4">
            Sell crypto to cover student expenses like rent or fees.
          </p>
          <div className="mt-8">
            <label className="text-blue-1300 block mb-1.5 font-medium text-sm leading-5">
              Card Purpose
            </label>
            <CustomSelect
              className="shadow-57xl"
              options={[
                { label: "Select Asset", value: "Select Asset" },
                { label: "2000", value: "2000" },
              ]}
            />
          </div>
          <div className="mt-4 mb-8">
            <label className="text-blue-1300 block mb-1.5 font-medium text-sm leading-5">
              Amount
            </label>
            <input
              type="text"
              className="border border-solid border-lighrgrey40 rounded-[10px] h-10 text-lighrgrey38 text-sm leading-4 px-3 w-full"
              placeholder="0.00"
            />
          </div>
          <button className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-blue-1000/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-blue-1000 border-solid border-blue-1000 opacity-50 h-10">
            Convert to EUR
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default UsersStudentsPage;
