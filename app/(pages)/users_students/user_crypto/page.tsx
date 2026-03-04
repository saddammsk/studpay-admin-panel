"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/app/components/Modal";
import Button from "@/app/components/ui/Button";
import CustomSelect from "@/app/components/CustomSelect";
import UserCryptoAssetTable from "@/app/components/UsersStudent/UserCryptoAssetTable";
import UserCryptoLedgerTable from "@/app/components/UsersStudent/UserCryptoLedgerTable";

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
    active: true,
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
  const [isOpen2, setIsOpen2] = useState(false);
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
              onClick={() => {}}
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
                  className={`inline-flex items-center py-3 px-4 gap-2 font-inter font-medium text-sm leading-5 relative ${
                    item.active ? "text-blue1400" : "text-gray-1900"
                  } after:absolute after:content-[''] after:left-0 after:bottom-0 after:rounded-full after:bg-blue1400 after:h-0.5 after:w-full ${
                    item.active ? "" : "after:opacity-0"
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
        <div className="flex xl:flex-row flex-col items-start gap-6 mt-12 5xl:pl-6 5xl:pr-12.5">
          <div className="xl:w-[calc(100%-300px)] w-full p">
            <div className="grid 4xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              <div className="bg-white border border-solid border-gray-1000 rounded-lg shadow-61xl 2xl:p-5 px-2.5 py-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl gradient-new">
                    <Image
                      src="/images/wallet-blue.svg"
                      width="24"
                      height="24"
                      alt=""
                      className="brightness-10000"
                    />
                  </span>
                  <span className="text-green-1600 text-sm leading-5 font-normal flex items-center gap-1">
                    <Image
                      src="/images/price-arrow-green.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                    +3.24%
                  </span>
                </div>
                <p className="text-lighrgrey38 text-sm leading-5 font-normal mb-1">
                  Total Crypto Value
                </p>
                <h4 className="text-Black234 text-[30px] leading-9 font-bold">
                  6.387,15 €
                </h4>
              </div>
              <div className="bg-white border border-solid border-gray-1000 rounded-lg shadow-61xl 2xl:p-5 px-2.5 py-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-lighrgrey39">
                    <Image
                      src="/icons/sheild-dark-blue.svg"
                      width="24"
                      height="24"
                      alt=""
                    />
                  </span>
                  <span className="text-white text-xs leading-4 font-bold flex items-center bg-green-1600 rounded-full h-5.5 px-2.5">
                    Wallet Active
                  </span>
                </div>
                <p className="text-lighrgrey38 text-sm leading-5 font-normal mb-1">
                  Wallet Status
                </p>
                <h4 className="text-Black234 text-lg leading-7 font-bold">
                  Security Level: High
                </h4>
                <p className="text-lighrgrey38 text-sm leading-5 font-normal mt-1">
                  Last verified: 2 hours ago
                </p>
              </div>
              <div className="bg-white border border-solid border-gray-1000 rounded-lg shadow-61xl 2xl:p-5 px-2.5 py-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-lighrgrey39">
                    <Image
                      src="/icons/Connecte.svg"
                      width="24"
                      height="24"
                      alt=""
                    />
                  </span>
                  <span className="text-lighrgrey38 text-sm leading-5 font-normal">
                    2 Connected
                  </span>
                </div>
                <p className="text-lighrgrey38 text-sm leading-5 font-normal mb-3">
                  Connected Wallets
                </p>
                <ul>
                  <li className="flex items-center justify-between mb-2">
                    <p className="text-Black234 font-normal text-xs leading-6 flex items-center gap-2">
                      <span className="bg-violet55 rounded-full flex items-center w-2 h-2"></span>{" "}
                      StudPay Wallet
                    </p>
                    <span className="text-lighrgrey38 text-xs leading-4 font-normal inline-flex items-center rounded bg-lighrgrey39 h-5 max-w-27.5 w-full px-2">
                      0x742d...f7e8
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <p className="text-Black234 font-normal text-xs leading-6 flex items-center gap-2">
                      <span className="bg-lighrgrey38 rounded-full flex items-center w-2 h-2"></span>{" "}
                      MetaMask
                    </p>
                    <span className="text-lighrgrey38 text-xs leading-4 font-normal inline-flex items-center rounded bg-lighrgrey39 h-5 max-w-27.5 w-full px-2">
                      0x8ba1...9a1c
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white mt-6 border border-solid border-gray-1000 rounded-lg shadow-61xl">
              <div className="flex sm:flex-row flex-col sm:items-center items-start px-2 pt-6 pb-4 border-b border-solid border-gray-1000">
                <h4 className="text-Black234 font-bold text-lg leading-7">
                  Asset Holdings
                </h4>
              </div>
              <UserCryptoAssetTable />
            </div>
            <div className="bg-white mt-6 border border-solid border-gray-1000 rounded-lg shadow-61xl">
              <div className="flex sm:flex-row flex-col sm:items-center items-start justify-between px-2 pt-6 pb-4 border-b border-solid border-gray-1000">
                <h4 className="text-Black234 font-bold text-lg leading-7">
                  Crypto Transaction Ledger
                </h4>
                <span className="text-lighrgrey38 texrt-xs leading-4 font-bold border border-solid border-lighrgrey40 rounded-full h-5.5 px-2.5 flex items-center justify-center">
                  5 Transactions
                </span>
              </div>
              <UserCryptoLedgerTable />
            </div>

            <div className="bg-white mt-6  rounded-xl shadow-63xl p-6">
              <h4 className="text-Black234 text-lg leading-7 font-bold">
                Admin Control Actions
              </h4>
              <p className="text-lighrgrey38 text-sm leading-5 font-normal">
                High-security administrative actions for wallet management
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div
                  onClick={() => setIsOpen(true)}
                  className=" group cursor-pointer flex items-center gap-4 border-2 border-solid border-red-1300 rounded-[10px] hover:border-red-1300/90 bg-red-1300 hover:bg-red-1300/90 transition-all duration-500 ease-in-out px-6 py-4"
                >
                  <span className="bg-white/20 flex items-center justify-center rounded-xl w-10 h-10">
                    <Image
                      src="../icons/freez-icon.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                  </span>
                  <div className="">
                    <h4 className="text-white text-sm leading-5 font-bold">
                      Convert to Fiat
                    </h4>
                    <p className="text-white text-xs leading-4 font-normal">
                      Sell crypto to cover expenses
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => setIsOpen2(true)}
                  className="group cursor-pointer flex items-center gap-4 border-2 border-solid border-lighrgrey40 rounded-[10px] hover:border-violet55 bg-white hover:bg-violet55/5 transition-all duration-500 ease-in-out px-6 py-4"
                >
                  <span className="bg-violet55/10 flex items-center justify-center rounded-xl w-10 h-10">
                    <Image
                      src="../icons/convert-icon.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                  </span>
                  <div className="">
                    <h4 className="text-Black234  text-sm leading-5 font-bold">
                      Freeze Crypto Wallet
                    </h4>
                    <p className="text-lighrgrey38  text-xs leading-4 font-normal">
                      Stop all withdrawals immediately
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:max-w-75 w-full">
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
