"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import CustomSelect from "@/app/components/CustomSelect";

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

interface MenuItem {
  name: string;
  href: string;
  icon: string;
  active?: boolean;
}

const menuItems = [
  {
    name: "Loan Ledger",
    href: "global_financing",
    icon: "../../icons/loan-file.svg",
    iconActive: "../../icons/loan-file-active.svg",
    active: false,
  },
  {
    name: "Partner Management",
    href: "partner_management",
    icon: "../../icons/Partner-icon.svg",
    iconActive: "../../icons/Partner-icon-active.svg",
    active: false,
  },
  {
    name: "API Console",
    href: "financing_api_console",
    icon: "../../icons/api-keys.svg",
    iconActive: "../../icons/api-keys-active.svg",
    active: true,
  },
];

{
  /*******/
}
interface MenuItem2 {
  name: string;
  href: string;
  icon: string;
  active?: boolean;
}

const menuItems2 = [
  {
    name: "API Keys",
    href: "/global_financing/financing_api_console",
    icon: "../../icons/api-key.svg",
    iconActive: "../../icons/api-key-active.svg",
    active: false,
  },
  {
    name: "Access Control",
    href: "/global_financing/financing_api_console/api_access_control",
    icon: "../../icons/access-icon.svg",
    iconActive: "../../icons/access-icon-active.svg",
    active: false,
  },
  {
    name: "Monitoring",
    href: "/global_financing/financing_api_console/monitoring",
    icon: "../../icons/monitoring-icon.svg",
    iconActive: "../../icons/monitoring-icon-active.svg",
    active: true,
  },
  {
    name: "Emergency",
    href: "/global_financing/financing_api_console/emergency",
    icon: "../../icons/Emergency-icon.svg",
    iconActive: "../../icons/Emergency-icon-active.svg",
    active: false,
  },
];

const financingapiconsole = () => {
  return (
    <>
      <div className="font-inter">
        {/**** MOBILE SHOW ****/}
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
              onClick={() => {}}
              iconSrc="/images/plus-icon.svg"
              label="New Application"
              className="text-white text-sm font-normal gap-2 h-9 px-3! bg-blue-1000 hover:bg-blue800 rounded-md border border-solid border-gray1600 m-0!"
            />
          </li>
        </ul>
        {/**** MOBILE SHOW ****/}
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
              <Image
                src="/icons/review-copy.svg"
                width="24"
                height="24"
                alt=""
              />
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
                <span className="text-gray-1900 text-xs leading-5">
                  Late: 67
                </span>
              </div>
            </div>
          </div>
        </div>
        {/**** TAB NAV START *****/}
        <div className="bg-white my-4 border border-solid border-gray-3600 shadow-68xl p-4 rounded-xl">
          <ul className="flex sm:flex-row flex-col items-center md:gap-6 gap-4">
            {menuItems.map((item) => (
              <li key={item.name} className="sm:w-auto w-full">
                <Link
                  href={item.href}
                  className={`inline-flex sm:justify-start justify-center md:w-48 sm:w-auto w-full items-center h-10 px-3 gap-2 font-inter font-normal text-sm leading-5 relative rounded-md border border-solid ${
                    item.active
                      ? "text-white border-ElectricBlue bg-linear-to-r from-royalBlue125 via-royalBlue126 to-royalBlue127"
                      : "text-lighrgrey42 bg-gray-1500 border-gray-3600"
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
        <div className="mt-6">
          <div className="bg-gray-6200/50 inline-flex sm:w-auto w-full border border-solid border-grey5800 rounded-md px-1 py-0.75">
            <ul className="sm:flex grid grid-cols-2 items-center  sm:w-auto w-full">
              {menuItems2.map((item) => (
                <li key={item.name} className="sm:w-auto w-full">
                  <Link
                    href={item.href}
                    className={`inline-flex sm:w-auto w-full sm:justify-start justify-center items-center h-8 px-3 gap-1.5 font-inter font-normal text-sm leading-5 relative rounded ${
                      item.active
                        ? "text-blue1700 bg-white shadow-4xl"
                        : "text-gray-5000"
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
        </div>
        <div className="bg-white border border-solid border-grey5800 mt-7 rounded-lg shadow-4xl">
          <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between border-b border-solid border-grey5800 px-5 py-4 ">
            <div className="flex items-center gap-2">
              <h4 className="text-blue1700 sm:text-base text-sm font-semibold leading-6 flex items-center gap-2">
                <Image
                  src="/icons/monitoring-icon.svg"
                  width="16"
                  height="16"
                  alt=""
                />
                Endpoint Monitoring
              </h4>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-green59 text-xs leading-4 font-medium flex items-center gap-1.5">
                <span className="bg-green59 w-2 h-2 flex items-center rounded-full"></span>
                99.97% uptime
              </p>
              <span className="inline-flex items-center justify-center rounded-full border border-solid border-grey5800 h-5.5 px-2.5 text-blue1700 text-xs leading-4 font-bold font-JetBrainsMono">
                24h
              </span>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center mb-5">
              <Image
                src="/images/Monitoring-chart.png"
                width="1542"
                height="184"
                alt=""
              />
            </div>
            <div className="bg-lighrgrey36/30 mb-2 flex items-center justify-between border border-solid border-grey5800 rounded-md px-3 py-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center rounded-full border border-solid border-grey5800 h-4.25 px-1.5 text-blue1700 text-[10px] leading-4 font-bold font-JetBrainsMono">
                  GET
                </span>
                <p className="text-blue1700 text-sm leading-5 font-normal font-JetBrainsMono">
                  /api/v1/dossiers
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-gray-5000 text-xs leading-4 font-normal">
                  142 req/s
                </p>
                <p className="text-gray-5000 text-xs leading-4 font-normal font-JetBrainsMono">
                  142 req/s
                </p>
                <p className="flex items-center gap-3 text-green59 text-xs leading-4 font-normal">
                  <Image
                    src="/images/arrow-up.svg"
                    width="12"
                    height="12"
                    alt=""
                  />
                  Healthy
                </p>
              </div>
            </div>
            <div className="bg-lighrgrey36/30 mb-2 flex items-center justify-between border border-solid border-grey5800 rounded-md px-3 py-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center rounded-full border border-solid border-grey5800 h-4.25 px-1.5 text-blue1700 text-[10px] leading-4 font-bold font-JetBrainsMono">
                  POST
                </span>
                <p className="text-blue1700 text-sm leading-5 font-normal font-JetBrainsMono">
                  /api/v1/decisions
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-gray-5000 text-xs leading-4 font-normal">
                  38 req/s
                </p>
                <p className="text-gray-5000 text-xs leading-4 font-normal font-JetBrainsMono">
                  120ms
                </p>
                <p className="flex items-center gap-3 text-green59 text-xs leading-4 font-normal">
                  <Image
                    src="/images/arrow-up.svg"
                    width="12"
                    height="12"
                    alt=""
                  />
                  Healthy
                </p>
              </div>
            </div>
             <div className="bg-lighrgrey36/30 mb-2 flex items-center justify-between border border-solid border-grey5800 rounded-md px-3 py-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center rounded-full border border-solid border-grey5800 h-4.25 px-1.5 text-blue1700 text-[10px] leading-4 font-bold font-JetBrainsMono">
                  POST
                </span>
                <p className="text-blue1700 text-sm leading-5 font-normal font-JetBrainsMono">
                  /api/v1/webhooks/hbl
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-gray-5000 text-xs leading-4 font-normal">
                  12 req/s
                </p>
                <p className="text-gray-5000 text-xs leading-4 font-normal font-JetBrainsMono">
                  89ms
                </p>
                <p className="flex items-center gap-3 text-yellow-1100 text-xs leading-4 font-normal">
                  <Image
                    src="/icons/down-yellow-right.svg"
                    width="12"
                    height="12"
                    alt=""
                  />
                  Degraded
                </p>
              </div>
            </div>
             <div className="bg-lighrgrey36/30 flex items-center justify-between border border-solid border-grey5800 rounded-md px-3 py-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center rounded-full border border-solid border-grey5800 h-4.25 px-1.5 text-blue1700 text-[10px] leading-4 font-bold font-JetBrainsMono">
                  POST
                </span>
                <p className="text-blue1700 text-sm leading-5 font-normal font-JetBrainsMono">
                  /api/v1/auth/token
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-gray-5000 text-xs leading-4 font-normal">
                  67 req/s
                </p>
                <p className="text-gray-5000 text-xs leading-4 font-normal font-JetBrainsMono">
                  32ms
                </p>
                <p className="flex items-center gap-3 text-green59 text-xs leading-4 font-normal">
                  <Image
                    src="/images/arrow-up.svg"
                    width="12"
                    height="12"
                    alt=""
                  />
                  Healthy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default financingapiconsole;
