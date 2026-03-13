"use client";

import Image from "next/image";

interface StatCard {
  label: string;
  value: string;
  icon: string;
  borderColor?: string;
  trend?: { icon: string; text: string };
}

const STATS: StatCard[] = [
  { label: "Open Tickets", value: "3", icon: "/icons/Ticket-icon.svg", borderColor: "border-l-green56" },
  { label: "Avg. Response", value: "12m", icon: "/images/clock-gray.svg", trend: { icon: "/images/price-arrow-green.svg", text: "12% vs last week" } },
  { label: "Resolved Today", value: "8", icon: "/images/check-green-round.svg", borderColor: "border-l-green-1500" },
  { label: "Urgent Issues", value: "1", icon: "/images/info-icon.svg", borderColor: "border-l-red-1300" },
  { label: "Active Chats", value: "2", icon: "/images/chat-icon2.svg" },
];

const SupportStatsCards = () => {
  return (
    <div className="grid 2xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:gap-9.25 gap-4">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className={`bg-white flex items-start justify-between border border-solid border-gray-3600 rounded-lg p-4 shadow-64xl ${stat.borderColor ? `border-l-4 ${stat.borderColor}` : ""}`}
        >
          <div>
            <span className="text-gray-1900 text-[13px] leading-5 font-normal">{stat.label}</span>
            <h3 className="text-blue-1300 font-bold text-2xl leading-8 mt-1">{stat.value}</h3>
            {stat.trend && (
              <p className="flex items-center gap-1 text-green-1500 text-[11.4px] leading-4 mt-1">
                <Image src={stat.trend.icon} width={12} height={12} alt="" />
                {stat.trend.text}
              </p>
            )}
          </div>
          <span className="bg-gray1700 rounded-lg w-9 h-9 flex items-center justify-center">
            <Image src={stat.icon} width={20} height={20} alt="" />
          </span>
        </div>
      ))}
    </div>
  );
};

export default SupportStatsCards;