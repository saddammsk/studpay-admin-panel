"use client";

import Image from "next/image";

type StatItem = {
  id: string;
  title: string;
  value: string;
  change: string;
  pricetext: string;
};

type StatConfig = {
  icon: string;
  bgcolor: string;
  iconbg: string;
};

const STAT_CONFIG: Record<string, StatConfig> = {
  active_students: {
    icon: "/images/user-icon.svg",
    bgcolor: "bg-gray-1300",
    iconbg: "bg-sky-5000",
  },
  verified_users: {
    icon: "/images/deposit-icon.svg",
    bgcolor: "bg-sky-5000",
    iconbg: "bg-sky-5000",
  },
  amount_blocked: {
    icon: "/images/folder-icon.svg",
    bgcolor: "bg-sky-5000",
    iconbg: "bg-sky-5000",
  },
  monthly_volume: {
    icon: "/images/revenue-icon.svg",
    bgcolor: "bg-gray-1300",
    iconbg: "bg-sky-5000",
  },
  new_subscriptions: {
    icon: "/images/block-icon.svg",
    bgcolor: "bg-lightred1300",
    iconbg: "bg-sky-5000",
  },
  pending_docs: {
    icon: "/images/pending-icon.svg",
    bgcolor: "bg-gray-1300",
    iconbg: "bg-sky-5000",
  },
};

const DEFAULT_CONFIG: StatConfig = {
  icon: "/images/default-icon.svg",
  bgcolor: "bg-gray-1300",
  iconbg: "bg-sky-5000",
};

function getPriceIcon(change: string): string {
  return change.startsWith("-") ? "/images/down-icon.svg" : "/images/up-icon.svg";
}

function getChangeColor(change: string): string {
  return change.startsWith("-") ? "text-red-500" : "text-green-5000";
}

export default function DashboardStatsClient({ stats }: { stats: StatItem[] }) {
  return (
    <div className="w-full">
      <div className="grid 4xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 5xl:gap-6 gap-3 mb-8">
        {stats.map((item) => {
          const config = STAT_CONFIG[item.id] ?? DEFAULT_CONFIG;
          const priceIcon = getPriceIcon(item.change);
          const changeColor = getChangeColor(item.change);

          return (
            <div
              key={item.id}
              className="shadow-48xl rounded-2xl bg-white 2xl:p-6 p-4 flex items-start justify-between"
            >
              <div className="w-full">
                <div className="flex items-center justify-between pb-4">
                  <h6 className="text-sm font-medium leading-5 text-gray-1400">
                    {item.title}
                  </h6>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${config.bgcolor}`}>
                    <Image src={config.icon} width={16} height={16} alt={item.title} />
                  </div>
                </div>

                <span className="block text-3xl font-semibold leading-9 text-blue-1200 mb-2">
                  {item.value}
                </span>

                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-0.5 px-1.5 h-5 text-xs leading-4 ${config.iconbg}`}>
                    <Image src={priceIcon} width={12} height={12} alt="" />
                    {item.change}
                  </span>
                  <p className={`text-xs font-normal leading-4 ${changeColor}`}>
                    {item.pricetext}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}