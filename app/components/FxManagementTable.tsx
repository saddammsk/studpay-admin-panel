"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import ToggleSwitch from "@/app/components/ToggleSwitch";

type PaymentStatus = "Basic" | "Premium" | "VIP";

interface Payment {
  id: number;
  currency: string;
  status: PaymentStatus;
  markup: string;
  weekendRule: boolean;
  spread: string;
  limit: string;
  action: string;
}

const initialPayments: Payment[] = [
  {
    id: 1,
    currency: "EUR/USD",
    status: "Basic",
    markup: "1.50%",
    weekendRule: true,
    spread: "+0.50%",
    limit: "$5,000",
    action: "/icons/edit-icon.svg",
  },
  {
    id: 2,
    currency: "EUR/USD",
    status: "Premium",
    markup: "0.80%",
    weekendRule: true,
    spread: "+0.30%",
    limit: "$25,000",
    action: "/icons/edit-icon.svg",
  },
  {
    id: 3,
    currency: "EUR/USD",
    status: "VIP",
    markup: "0.30%",
    weekendRule: false,
    spread: "—",
    limit: "$100,000",
    action: "/icons/edit-icon.svg",
  },
  {
    id: 4,
    currency: "EUR/PKR",
    status: "Basic",
    markup: "2.00%",
    weekendRule: true,
    spread: "+0.80%",
    limit: "$3,000",
    action: "/icons/edit-icon.svg",
  },
  {
    id: 5,
    currency: "EUR/PKR",
    status: "Premium",
    markup: "1.20%",
    weekendRule: true,
    spread: "+0.50%",
    limit: "$15,000",
    action: "/icons/edit-icon.svg",
  },
  {
    id: 6,
    currency: "EUR/PKR",
    status: "VIP",
    markup: "0.50%",
    weekendRule: false,
    spread: "—",
    limit: "$50,000",
    action: "/icons/edit-icon.svg",
  },
  {
    id: 7,
    currency: "USD/GBP",
    status: "Basic",
    markup: "1.20%",
    weekendRule: true,
    spread: "+0.40%",
    limit: "$5,000",
    action: "/icons/edit-icon.svg",
  },
  {
    id: 8,
    currency: "USD/GBP",
    status: "Premium",
    markup: "0.60%",
    weekendRule: true,
    spread: "+0.20%",
    limit: "$30,000",
    action: "/icons/edit-icon.svg",
  },
  {
    id: 9,
    currency: "USD/GBP",
    status: "VIP",
    markup: "0.25%",
    weekendRule: false,
    spread: "—",
    limit: "$150,000",
    action: "/icons/edit-icon.svg",
  },
];

const statusConfig = {
  Basic: {
    classes: "bg-gray1700 text-blue-1300",
  },
  Premium: {
    classes: "bg-gray1700 text-blue-2200",
  },
  VIP: {
    classes: "bg-yellow1800 text-lightgreen17",
  },
} as const;

export default function FxManagementTable() {
  const [payments, setPayments] = useState(initialPayments);

  const toggleWeekendRule = (id: number) => {
    setPayments((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, weekendRule: !item.weekendRule }
          : item
      )
    );
  };

  return (
    <div>
      <div className="mt-6 bg-white border border-gray-3600 rounded-lg overflow-x-auto">
        <div className="p-4 border-b border-solid border-gray-3600">
          <h4 className="text-black-2000 text-lg leading-7 font-bold">
            Markup & Fee Engine
          </h4>
          <p className="text-gray-1900 text-sm leading-5 font-normal">
            Configure conversion rules by user plan
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="5xl:w-full w-325">
            <thead>
              <tr className="bg-gray-1800">
                <th className="px-4 py-3 text-left text-gray-1900 font-inter font-bold text-xs leading-4 uppercase">
                  Currency Pair
                </th>
                <th className="px-4 py-3 text-left text-gray-1900 font-inter font-bold text-xs leading-4 uppercase">
                  User Plan
                </th>
                <th className="px-4 py-3 text-left text-gray-1900 font-inter font-bold text-xs leading-4 uppercase">
                  Markup %
                </th>
                <th className="px-4 py-3 text-left text-gray-1900 font-inter font-bold text-xs leading-4 uppercase">
                  Weekend Rule
                </th>
                <th className="px-4 py-3 text-left text-gray-1900 font-inter font-bold text-xs leading-4 uppercase">
                  Weekend Spread
                </th>
                <th className="px-4 py-3 text-left text-gray-1900 font-inter font-bold text-xs leading-4 uppercase">
                  Daily Limit
                </th>
                <th className="px-4 py-3 text-right text-gray-1900 font-inter font-bold text-xs leading-4 uppercase">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {payments.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray1600 hover:bg-gray1700/50 transition last:border-b-0"
                >
                  <td className="px-4 py-5 text-blue-1300 text-sm leading-5 font-normal">
                    {item.currency}
                  </td>

                  <td className="px-4 py-5">
                    <span
                      className={`inline-flex items-center rounded-full justify-center font-inter font-medium text-xs leading-4 px-2.5 h-5.5 ${statusConfig[item.status].classes}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-4 py-5 text-blue-2200 text-sm leading-5 font-normal">
                    {item.markup}
                  </td>

                  <td className="px-4 py-5">
                    <ToggleSwitch
                      checked={item.weekendRule}
                      className="bg-blue-2200"
                      onChange={() => toggleWeekendRule(item.id)}
                    />
                  </td>

                  <td className="px-4 py-5 text-blue-1300 text-sm leading-5 font-normal">
                    {item.spread}
                  </td>

                  <td className="px-4 py-5 text-blue-1300 text-sm leading-5 font-normal">
                    {item.limit}
                  </td>

                  <td className="px-4 py-5">
                    <Link
                      className="flex items-center justify-center w-8 h-8 ml-auto"
                      href="#"
                    >
                      <Image
                        src={item.action}
                        width={16}
                        height={16}
                        alt="edit"
                      />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}