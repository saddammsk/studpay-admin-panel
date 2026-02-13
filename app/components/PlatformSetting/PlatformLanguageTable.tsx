"use client";

import Link from "next/link";
import Image from "next/image";

type PaymentStatus = "Active" | "Pending";

const statusConfig = {
  Active: {
    classes: "bg-blue-1000 text-white",
  },
  Pending: {
    classes: "bg-gray1700 text-black-1200",
  },
} as const;




interface Payment {
  id: number;
  name: string;
  currency: string;
  status: PaymentStatus;
  actions: string;
}

const payments: Payment[] = [
  {
    id: 1,
    name: "European Union",
    currency: "EUR",
    status: "Active",
    actions: "Configure"
  },
  {
    id: 2,
    name: "United Kingdom",
    currency: "GBP",
    status: "Active",
    actions: "Configure"
  },
  {
    id: 3,
    name: "Canada",
    currency: "CAD",
    status: "Active",
    actions: "Configure"
  },
  {
    id: 4,
    name: "Australia",
    currency: "AUD",
    status: "Pending",
    actions: "Configure"
  },
];

export default function PlatformLanguage() {
  return (
    <div className="overflow-x-auto">
      <table className="sm:w-full w-120">
        <thead>
          <tr className="border-b border-gray1600">
            <th className="px-4 py-3.5 text-left text-sm leading-5 font-normal text-gray-1400">
              Region
            </th>
            <th className="px-4 py-3.5 text-left text-sm leading-5 font-normal text-gray-1400">
              Currency
            </th>
            <th className="px-4 py-3 text-left text-[13.67px] font-normal text-gray-1400">
              Status
            </th>
            <th className="px-4 py-3 text-left text-[13.67px] font-normal text-gray-1400">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {payments.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray1600 hover:bg-gray1700/50 transition"
            >
              <td className="px-4 py-6 text-black13 font-neulis-sans font-normal text-sm leading-5">
                {item.name}
              </td>

              <td className="px-4 py-6 text-black13 font-neulis-sans font-normal text-sm leading-5">
                {item.currency}
              </td>
              <td className="px-4 py-4.5">
                <span
                  className={`text-xs font-neulis-sans font-normal leading-4 h-5.5 px-2.75 rounded-full inline-flex items-center justify-center ${statusConfig[item.status].classes}`}
                >
                  {item.status}
                </span>
              </td>

              <td className="px-4 py-4.5">
                <Link
                  href="#"
                  className="h-9 px-3.25 inline-flex items-center justify-center rounded-md border border-solid border-gray1600 hover:bg-gray1700 transition"
                >
                  {item.actions}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
