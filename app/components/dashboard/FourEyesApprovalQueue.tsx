"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ApprovalTag {
  label: string;
  textColor: string;
  bgColor: string;
  filled: boolean;
}

interface ApprovalItem {
  id: string;
  tags: ApprovalTag[];
  title: string;
  description: string;
  by: string;
  amount?: string;
  time: string;
  borderLeft?: string; 
}

const INITIAL_ITEMS: ApprovalItem[] = [
  {
    id: "1",
    tags: [
      { label: "refund", textColor: "text-red1600", bgColor: "bg-red1600/10", filled: true },
      { label: "urgent", textColor: "text-red1600", bgColor: "", filled: false },
    ],
    title: "Refund Request",
    description: "Full refund for failed AVI application",
    by: "Sarah K.",
    amount: "€450",
    time: "5m ago",
    borderLeft: "border-l-red1600",
  },
  {
    id: "2",
    tags: [
      { label: "limit change", textColor: "text-yellow-1100", bgColor: "bg-yellow-1100/10", filled: true },
    ],
    title: "Limit Increase",
    description: "Monthly transfer limit → €50,000",
    by: "Michael B.",
    time: "12m ago",
    borderLeft: undefined,
  },
  {
    id: "3",
    tags: [
      { label: "account unlock", textColor: "text-purple-5000", bgColor: "bg-purple-5000/10", filled: true },
      { label: "urgent", textColor: "text-red1600", bgColor: "", filled: false },
    ],
    title: "Account Unlock",
    description: "Locked due to suspicious activity",
    by: "Chen W.",
    time: "18m ago",
    borderLeft: "border-l-gray-3600",
  },
];

export const FourEyesApprovalQueue = () => {
  const [items, setItems] = useState<ApprovalItem[]>(INITIAL_ITEMS);

  const handleApprove = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleReject = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="5xl:max-w-134.5 max-w-full w-full border border-solid border-gray-3600 rounded-lg bg-white">
      <div className="border-b border-solid border-gray-3600 flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <Image src="/images/shield-blue.svg" alt="" width={16} height={16} />
          <p className="text-sm font-semibold leading-5 text-black-1600">
            4-Eyes Approval Queue
          </p>
        </div>
        <p className="text-red1600 font-inter text-xs font-medium leading-4 bg-red1600/10 inline-flex items-center justify-center rounded-full h-5 px-2">
          {items.length} pending
        </p>
      </div>

      {/* Items */}
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const hasBorderLeft = !!item.borderLeft;

        return (
          <div
            key={item.id}
            className={[
              hasBorderLeft ? `border-l-2 border-l-${item.borderLeft?.replace("border-l-", "")}` : "",
              !isLast ? "border-b border-solid border-b-gray-3600" : "",
              isLast ? "rounded-b-lg" : "",
              hasBorderLeft ? "border-solid" : "",
              "p-3 flex items-start justify-between",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div>
              <ul className="flex items-center gap-3">
                {item.tags.map((tag, ti) => (
                  <li key={ti}>
                    <span
                      className={[
                        tag.textColor,
                        "font-inter font-medium text-[10px] leading-3.75 inline-flex items-center justify-center h-4.75 uppercase",
                        tag.filled ? `${tag.bgColor} rounded px-1.5` : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {tag.label}
                    </span>
                  </li>
                ))}
              </ul>

              <h4 className="mt-1 text-black-1600 font-inter font-medium text-xs leading-4">
                {item.title}
              </h4>
              <p className="mt-0.5 text-gray-1900 font-inter font-normal text-[11px] leading-4">
                {item.description}
              </p>

              <ul className="mt-1.5 flex items-center gap-3">
                <li className="text-gray-1900 font-inter font-normal text-[10px] leading-4">
                  By: {item.by}
                </li>
                <li className="text-gray-1900 font-inter font-normal text-[10px] leading-4">•</li>
                {item.amount && (
                  <>
                    <li className="text-black-1600 font-inter font-medium text-[10px] leading-4">
                      {item.amount}
                    </li>
                    <li className="text-gray-1900 font-inter font-normal text-[10px] leading-4">•</li>
                  </>
                )}
                <li className="text-gray-1900 font-inter font-normal text-[10px] leading-4 flex items-center gap-0.5">
                  <Image src="/images/timer-icon3.svg" alt="" width={12} height={12} />
                  {item.time}
                </li>
              </ul>
            </div>

            <div>
              <ul className="flex items-center gap-1.5">
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-center w-7 h-7"
                    onClick={(e) => { e.preventDefault(); handleApprove(item.id); }}
                  >
                    <Image src="/images/checkgreendark.svg" alt="" width={16} height={16} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-center w-7 h-7"
                    onClick={(e) => { e.preventDefault(); handleReject(item.id); }}
                  >
                    <Image src="/images/cross-circle.svg" alt="" width={16} height={16} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        );
      })}

      {items.length === 0 && (
        <div className="p-6 text-center text-gray-1900 text-sm font-inter">
          No pending approvals
        </div>
      )}
    </div>
  );
};