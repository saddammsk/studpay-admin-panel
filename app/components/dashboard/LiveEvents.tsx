"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type EventType = "payment" | "failed" | "kyc" | "avi" | "registration";

interface LiveEvent {
  id: string;
  type: EventType;
  title: string;
  description: string;
  time: string;
  canRetry?: boolean;
  iconBg: string;
  icon: string;
  statusIcon: string;
}

const INITIAL_EVENTS: LiveEvent[] = [
  {
    id: "1",
    type: "payment",
    title: "Payment Processed",
    description: "€1,200 from DE → PK (Ahmed H.)",
    time: "2s ago",
    iconBg: "bg-lightgreen17/10",
    icon: "/images/payment-icon.svg",
    statusIcon: "/images/payment-check.svg",
  },
  {
    id: "2",
    type: "failed",
    title: "Transfer Failed",
    description: "€500 from UK → IN (Priya S.) - Insufficient funds",
    time: "15s ago",
    canRetry: true,
    iconBg: "bg-red1600/10",
    icon: "/images/card-icon3.svg",
    statusIcon: "/images/failed-icon.svg",
  },
  {
    id: "3",
    type: "kyc",
    title: "KYC Submitted",
    description: "New document upload - Maria G.",
    time: "2m ago",
    iconBg: "bg-yellow-1100/10",
    icon: "/images/file-check-icon.svg",
    statusIcon: "/images/clock-yellow.svg",
  },
  {
    id: "4",
    type: "avi",
    title: "AVI Issued",
    description: "Housing guarantee for John D.",
    time: "1m ago",
    iconBg: "bg-lightgreen17/10",
    icon: "/images/file-check-green-.svg",
    statusIcon: "/images/check-green-round.svg",
  },
  {
    id: "5",
    type: "registration",
    title: "New Registration",
    description: "Student account - Li W. (China)",
    time: "2m ago",
    iconBg: "bg-lightgreen17/10",
    icon: "/images/user-plus.svg",
    statusIcon: "/images/check-green-round.svg",
  },
  {
    id: "6",
    type: "failed",
    title: "FX Timeout",
    description: "€2,100 from FR → MA - Gateway timeout",
    time: "3m ago",
    canRetry: true,
    iconBg: "bg-red1600/10",
    icon: "/images/card-icon3.svg",
    statusIcon: "/images/failed-icon.svg",
  },
];

export const LiveEvents = () => {
  const [paused, setPaused] = useState(false);
  const [events] = useState<LiveEvent[]>(INITIAL_EVENTS);

  return (
    <div className="5xl:max-w-116.5 max-w-full w-full border border-solid border-gray-3600 rounded-lg bg-white">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2 px-1.5">
          <p className="text-sm font-semibold leading-5 text-black-1600">
            Live Events
          </p>
          <p className="gap-1 bg-lightgreen17/10 px-1.5 rounded-full h-4.75 flex items-center">
            <span
              className="w-1.5 h-1.5 rounded-full bg-lightgreen17 flex items-center"
              style={{
                animation: paused ? "none" : "pulse 1.5s ease-in-out infinite",
              }}
            />
            <span className="text-[10px] flex pt-[1.8px] font-medium leading-3.75 text-lightgreen17">
              LIVE
            </span>
          </p>
        </div>
        <button
          onClick={() => setPaused((p) => !p)}
          className="text-black-1600 text-xs font-medium leading-4 hover:opacity-70 transition-opacity"
        >
          {paused ? "Resume" : "Pause"}
        </button>
      </div>

      <div className="h-87.5 overflow-x-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center justify-between p-3 border-t border-solid border-gray-3600"
          >
            <div className="flex items-center gap-3">
              <div>
                <span
                  className={`${event.iconBg} flex rounded-lg items-center justify-center w-8 h-8`}
                >
                  <Image
                    src={event.icon}
                    alt=""
                    width={16}
                    height={16}
                  />
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1.75">
                  <span>
                    <Image
                      src={event.statusIcon}
                      alt=""
                      width={14}
                      height={14}
                    />
                  </span>
                  <p>{event.title}</p>
                </div>
                <p className="text-[11px] leading-4 text-gray-1900">
                  {event.description}
                </p>
              </div>
            </div>

            <div>
              {event.canRetry ? (
                <div className="text-right">
                  <p className="text-[10px] mb-1 leading-3.75 text-gray-1900 font-normal">
                    {event.time}
                  </p>
                  <Link
                    href="#"
                    className="py-1 px-2 flex items-center gap-3 text-red1600 font-inter font-medium text-[10px] leading-3.75"
                  >
                    <Image
                      src="/images/retry-red.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                    Retry
                  </Link>
                </div>
              ) : (
                <p className="text-[10px] leading-3.75 text-gray-1900 font-normal">
                  {event.time}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};