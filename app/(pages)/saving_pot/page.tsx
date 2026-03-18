"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/ui/Button";
import CustomSelect from "@/app/components/CustomSelect";
import SavingProductTable from "@/app/components/SavingPots/SavingProductTable";
import PostCagnottesTable from "@/app/components/SavingPots/PostCagnottesTable";

const overviewCards = [
  {
    label: "Total AUM",
    value: "EUR 49.3 Cr",
    change: "+2.4%",
    note: "vs yesterday",
    positive: true,
    iconSrc: "../icons/wallet-green.svg",
    iconBg: "bg-rosepink23",
  },
  {
    label: "Net Inflow (24h)",
    value: "EUR 1.24 Cr",
    change: "+18.2%",
    note: "vs yesterday",
    positive: true,
    iconSrc: "../icons/swipe-blue.svg",
    iconBg: "bg-rosepink23",
  },
  {
    label: "Net Outflow (24h)",
    value: "EUR 42.8 L",
    change: "-5.1%",
    note: "vs yesterday",
    positive: true,
    iconSrc: "../icons/swipe-yellow.svg",
    iconBg: "bg-rosepink23",
  },
  {
    label: "Yield Paid Today",
    value: "EUR 8.42 L",
    change: "+3.7%",
    note: "vs yesterday",
    positive: true,
    iconSrc: "/images/price-arrow-green.svg",
    iconBg: "bg-rosepink23",
  },
];

const complianceActions = [
  {
    icon: "/images/Pause.svg",
    title: "Emergency Freeze",
    subtitle: "StudSave VIP",
    badge: "completed",
    badgeClass: "bg-rosepink23 text-lightgreen17",
    time: "2 hours ago",
  },
  {
    icon: "/images/sheikd-rate.svg",
    title: "Rate Change",
    subtitle: "StudSave Premium",
    badge: "pending",
    badgeClass: "bg-rosepink23 text-yellow-1100",
    time: "5 hours ago",
  },
  {
    icon: "/images/recycle-icon-yellow.svg",
    title: "Refund Pot",
    subtitle: "Suspicious Collection #4521",
    badge: "completed",
    badgeClass: "bg-rosepink23 text-lightgreen17",
    time: "1 day ago",
  },
];

const SavingPotsPage = () => {
  return (
    <div className="font-inter">

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

      <div>
        <h4 className="text-blue-1300 text-lg leading-7 font-bold mb-4">Savings Ecosystem Overview</h4>
        <div className="grid 4xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {overviewCards.map((card) => (
            <div
              key={card.label}
              className="bg-white flex items-start justify-between rounded-xl border border-solid border-gray-1000 p-5 shadow-4xl"
            >
              <div>
                <p className="text-gray-1900 text-sm leading-5 font-medium mb-2 uppercase">{card.label}</p>
                <h4 className="text-black-2000 text-2xl leading-8 font-bold">{card.value}</h4>
                <span className="inline-flex items-center gap-1 mt-1">
                  <Image src="/images/price-arrow-green.svg" width={14} height={14} alt="" />
                  <p className="flex items-center gap-1 text-green-1600 text-xs leading-4 font-medium">
                    {card.change}{" "}
                    <span className="text-gray-2300 block">{card.note}</span>
                  </p>
                </span>
              </div>
              <div className={`${card.iconBg} w-10 h-10 flex items-center justify-center rounded-lg`}>
                <Image src={card.iconSrc} width={20} height={20} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tables ── */}
      <SavingProductTable />
      <PostCagnottesTable />

      <div className="mt-6">
        <h4 className="text-blue-1300 text-lg leading-7 font-bold mb-4">Compliance & Risk Controls</h4>
      </div>

      <div className="flex md:flex-row flex-col gap-6">
        <div className="2xl:max-w-130.5 xl:max-w-100 md:max-w-80 max-w-full w-full bg-white border border-solid border-gray-3600 rounded-xl p-5">
          <h4 className="text-black-2000 mb-4 text-base leading-6 font-bold flex items-center gap-2">
            <Image src="/icons/error-icon.svg" width={20} height={20} alt="warning" />
            Emergency Controls
          </h4>
          <Link
            href="#"
            className="flex items-center mb-3 justify-center h-9 text-white text-sm leading-5 font-medium gap-2 bg-red2100 hover:bg-red2100/90 rounded-md w-full"
          >
            <Image src="/images/Pause.svg" width={20} height={20} alt="warning" className="brightness-1000" />
            Emergency Freeze All Withdrawals
          </Link>
          <Link
            href="#"
            className="group flex items-center justify-center h-10 text-yellow-1100 text-sm leading-5 font-medium gap-4 bg-gray-1500 hover:bg-yellow-1100 hover:text-white border border-solid border-yellow-1100 rounded-md w-full"
          >
            <Image src="/images/recycle-icon-yellow.svg" width={20} height={20} alt="warning" className="group-hover:brightness-10000" />
            Refund Flagged Pot
          </Link>
          <p className="text-gray-2300 text-xs leading-4 font-normal mt-4">
            <span className="font-bold">Note:</span> Emergency actions require 4-Eyes approval and are logged for audit.
          </p>
        </div>

        <div className="w-full flex-1 bg-white border border-solid border-gray-3600 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-black-2000 text-base leading-6 font-bold flex items-center gap-2">
              <Image src="/icons/error-file-blue.svg" width={20} height={20} alt="warning" />
              Recent Compliance Actions
            </h4>
            <Link href="#" className="flex items-center text-royalBlue123 text-sm leading-5 font-normal">
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {complianceActions.map((action, i) => (
              <div key={i} className="bg-gray-1600/50 rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="bg-rosepink23 rounded-lg flex items-center justify-center w-8 h-8">
                    <Image src={action.icon} width={16} height={16} alt="action" />
                  </span>
                  <div className="flex-1 w-full">
                    <h4 className="text-black-2000 text-sm leading-5 font-medium">{action.title}</h4>
                    <p className="text-gray-2300 text-xs leading-4 font-normal">{action.subtitle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2.5 h-6 rounded-full text-xs font-medium leading-4 inline-flex items-center justify-center ${action.badgeClass}`}>
                    {action.badge}
                  </span>
                  <p className="text-gray-2300 text-xs leading-4 font-normal flex items-center mt-1 gap-1 justify-end">
                    <Image src="/images/clock-gray.svg" width={12} height={12} alt="clock" />
                    {action.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingPotsPage;