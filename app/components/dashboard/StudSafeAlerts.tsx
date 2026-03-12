"use client";

import Image from "next/image";
import Link from "next/link";


type AlertType = "warning" | "location";

interface Alert {
  id: number;
  type: AlertType;
  name: string;
  detail: string;
  subLabel: string;
  timestamp?: string;
}

const alerts: Alert[] = [
  {
    id: 1,
    type: "warning",
    name: "Rana Shah",
    detail: "Dorm Rent Guarantee",
    subLabel: "Expiring soon",
  },
  {
    id: 2,
    type: "location",
    name: "Marco Rossi",
    detail: "Rome, Italy",
    subLabel: "Locating from",
    timestamp: "2h ago",
  },
];


const alertConfig: Record<
  AlertType,
  { iconSrc: string; iconBg: string }
> = {
  warning: {
    iconSrc: "/images/warning-orange.svg",
    iconBg: "bg-yellow1400",
  },
  location: {
    iconSrc: "/images/location-blue.svg",
    iconBg: "bg-white-1000",
  },
};


function AlertRow({ alert }: { alert: Alert }) {
  const { type, name, detail, subLabel, timestamp } = alert;
  const { iconSrc, iconBg } = alertConfig[type];

  return (
    <div className="flex items-center gap-3">
      <span
        className={`${iconBg} rounded-full flex items-center justify-center w-8 h-8 shrink-0`}
      >
        <Image src={iconSrc} alt="" width={16} height={16} />
      </span>

      <div className="flex-1 flex items-start justify-between">
        <div>
          <h4 className="text-blue-1200 font-inter text-xs font-semibold leading-4 mb-0.5">
            {name}{" "}
            <span className="text-grey-5000 font-normal">{detail}</span>
          </h4>
          <p className="text-grey-5000 font-inter text-[10px] font-normal leading-4">
            {subLabel}
          </p>
        </div>

        {timestamp && (
          <span className="flex items-center text-lighrgrey34 font-normal font-inter text-[9px]">
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
}


export default function StudSafeAlerts() {
  return (
    <div className="bg-white shadow-48xl mb-4.5 rounded-2xl p-5 w-full">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-black-5100 font-inter font-semibold text-sm leading-5">
          StudSafe Alerts
        </h4>
        <Link
          href="#"
          className="inline-flex items-center border border-solid border-grey-5200 rounded-2xl h-7.5 px-3.25 text-grey-5100 font-inter font-medium text-xs leading-5"
        >
          View Details
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        {alerts.map((alert) => (
          <AlertRow key={alert.id} alert={alert} />
        ))}
      </div>
    </div>
  );
}