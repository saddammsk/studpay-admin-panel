"use client";
import TopBarFinance from "@/app/components/common/TopBarFinance";
import { useFinancingStore } from "@/app/store/zustand/useGlobalFinancingStore";
import { usePathname } from "next/navigation";
import CustomSelect from "@/app/components/CustomSelect";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "@/app/components/ui/Button";

const CircularProgress = ({ value }: { value: number }) => {
  const r = 44;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;

  return (
    <div className="relative w-36 h-36">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="#f0fdf4"
          strokeWidth="10"
        />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="#22c55e"
          strokeWidth="10"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[30px] leading-9 font-bold text-green57">
          {value}%
        </span>
        <span className="text-xs leading-4 text-gray-1900 font-normal">
          On-Time
        </span>
      </div>
    </div>
  );
};

const menuItems = [
  {
    name: "Loan Ledger",
    href: "/global_financing",
    icon: "/icons/loan-file.svg",
    iconActive: "/icons/loan-file-active.svg",
  },
  {
    name: "Partner Management",
    href: "/global_financing/partner_management",
    icon: "/icons/Partner-icon.svg",
    iconActive: "/icons/Partner-icon-active.svg",
  },
  {
    name: "API Console",
    href: "/global_financing/financing_api_console",
    icon: "/icons/api-keys.svg",
    iconActive: "/icons/api-keys-active.svg",
  },
];

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const openNewAppModal = useFinancingStore((s) => s.openNewAppModal);

  return (
    <div className="flex-1">
      <TopBarFinance />

      <ul className="md:hidden flex items-center justify-end mb-4 gap-1">
        <li>
          <CustomSelect
            className="h-9! w-34! text-gray-1900!"
            options={[
              { label: "Last 30 days", value: "Last 30 days" },
              { label: "2000", value: "2000" },
            ]}
          />
        </li>
        <li>
          <Button
            onClick={openNewAppModal}
            iconSrc="/images/plus-icon.svg"
            label="New Application"
            className="text-white text-sm font-normal gap-2 h-9 px-3! bg-blue-1000 hover:bg-blue800 rounded-md border border-solid border-gray1600 m-0!"
          />
        </li>
      </ul>

      <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 gap-4">
        <div className="flex items-start justify-between bg-white rounded-xl border border-gray-3600/50 4xl:p-6 p-4 shadow-68xl">
          <div className="">
            <p className="text-gray-1900 font-normal text-sm leading-5 mb-3">
              Total Loan Volume
            </p>
            <h4 className="4xl:text-[30px] text-2xl leading-9 font-bold text-blue-1300 tracking-[-0.75px]">
              €2,450,000
            </h4>
            <p className="text-gray-1900 text-sm leading-5 mt-1">
              Active portfolio
            </p>
            <div className="flex items-center gap-1 mt-3">
              <span className="4xl:text-sm text-xs leading-5 font-normal block text-green57">
                ↑ 12.5%
              </span>
              <span className="4xl:text-sm text-xs leading-5 font-normal block text-gray-1900">
                vs last month
              </span>
            </div>
          </div>
          <div className="4xl:w-12 w-11 4xl:h-12 h-11 bg-blue-2200/10 rounded-xl flex items-center justify-center">
            <Image
              src="/images/wallet-blue.svg"
              width="24"
              height="24"
              alt=""
            />
          </div>
        </div>
        <div className="flex items-start justify-between bg-white rounded-xl border border-gray-3600/50 4xl:p-6 p-4 shadow-68xl">
          <div className="">
            <p className="text-gray-1900 font-normal text-sm leading-5 mb-3">
              Pending Applications
            </p>
            <h4 className="4xl:text-[30px] text-2xl leading-9 font-bold text-blue-1300 tracking-[-0.75px]">
              12
            </h4>
            <p className="text-gray-1900 text-sm leading-5 mt-1">
              Awaiting review
            </p>
            <div className="flex items-center gap-1 mt-3">
              <span className="4xl:text-sm text-xs leading-5 font-normal block text-green57">
                ↑ 3 new today
              </span>
              <span className="4xl:text-sm text-xs leading-5 font-normal block text-gray-1900">
                vs last month
              </span>
            </div>
          </div>
          <div className="4xl:w-12 w-11 4xl:h-12 h-11 bg-yellow-1100/10 rounded-xl flex items-center justify-center">
            <Image src="/icons/review-copy.svg" width="24" height="24" alt="" />
          </div>
        </div>
        <div className="flex items-start justify-between bg-white rounded-xl border border-gray-3600/50 4xl:p-6 p-4 shadow-68xl">
          <div className="">
            <p className="text-gray-1900 font-normal text-sm leading-5 mb-3">
              Avg. Processing Time
            </p>
            <h4 className="4xl:text-[30px] text-2xl leading-9 font-bold text-blue-1300 tracking-[-0.75px]">
              2.4 days
            </h4>
            <p className="text-gray-1900 text-sm leading-5 mt-1">
              Application to approval
            </p>
            <div className="flex items-center gap-1 mt-3">
              <span className="4xl:text-sm text-xs leading-5 font-normal block text-green57">
                ↑ 8%
              </span>
              <span className="4xl:text-sm text-xs leading-5 font-normal block text-gray-1900">
                vs last month
              </span>
            </div>
          </div>
          <div className="4xl:w-12 w-11 4xl:h-12 h-11 bg-green57/10 rounded-xl flex items-center justify-center">
            <Image
              src="/images/price-arrow-green.svg"
              width="24"
              height="24"
              alt=""
            />
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-3600/50 p-6 shadow-68xl">
          <div className="flex items-start justify-between mb-4">
            <p className="text-sm text-gray-1900 font-normal">
              Repayment Health
            </p>
          </div>
          <div className="flex items-center justify-center">
            <CircularProgress value={92.6} />
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green57" />
              <span className="text-gray-1900 text-xs leading-5">
                On-Time: 847
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-1100" />
              <span className="text-gray-1900 text-xs leading-5">Late: 67</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white my-4 border border-solid border-gray-3600 shadow-68xl p-4 rounded-xl">
        <ul className="flex sm:flex-row flex-col items-center md:gap-6 gap-4">
          {menuItems.map(({ name, href, icon, iconActive }) => {
            const isActive = pathname === href;

            return (
              <li key={name} className="sm:w-auto w-full">
                <Link
                  href={href}
                  className={`inline-flex sm:justify-start justify-center md:w-48 sm:w-auto w-full items-center h-10 px-3 gap-2 font-inter font-normal text-sm leading-5 relative rounded-md border border-solid ${
                    isActive
                      ? "text-white border-ElectricBlue bg-linear-to-r from-royalBlue125 via-royalBlue126 to-royalBlue127"
                      : "text-lightgrey42 bg-gray-1500 border-gray-3600"
                  }`}
                >
                  <span className="flex items-center justify-center">
                    <Image
                      src={isActive ? iconActive : icon}
                      width={16}
                      height={16}
                      alt={name}
                    />
                  </span>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {children}
    </div>
  );
}
