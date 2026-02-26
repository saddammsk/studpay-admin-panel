"use client";

import Link from "next/link";
import Image from "next/image";

interface Payment {
  id: number;
  name: string;
  performed: {
    icon: string;
    title: string;
  };
  change: string;
  timestamp: string;
}

const payments: Payment[] = [
  {
    id: 1,
    name: "Risk score updated",
    performed: { icon: "/icons/admin-icon.svg", title: "admin@studpay.com" },
    change: "42 → 67",
    timestamp: "2024-01-28 14:32:15",

  }, {
    id: 2,
    name: "KYC status changed",
    performed: { icon: "/icons/admin-icon.svg", title: "compliance@studpay.com" },
    change: "Pending → Verified",
    timestamp: "2024-01-27 09:15:00",

  },{
    id: 3,
    name: "Profile viewed",
    performed: { icon: "/icons/admin-icon.svg", title: "support@studpay.com" },
    change: "—",
    timestamp: "2024-01-26 16:45:30",

  },

];

export default function KycDocumentTable() {
  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="2xl:w-full w-162.5">
          <thead>
            <tr className="border-b border-gray1600">
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-1900">
                Action
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-1900">
                Performed By
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-1900">
                Change
              </th>
              <th className="px-3 py-2 text-right text-xs font-medium text-gray-1900">
                Timestamp
              </th>
            </tr>
          </thead>

          <tbody>
            {payments.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray1600 hover:bg-gray1700/50 transition"
              >
                <td className="p-3 text-blue-1300 font-inter font-normal text-sm leading-5">
                  {item.name}
                </td>

                <td className="p-3">
                  <span className="inline-flex items-center text-blue-1300 font-normal text-[10px] leading-5 gap-1 bg-gray-1600 border border-solid border-gray-3100 rounded-full px-2.5 h-6.5">
                    <Image
                      src={item.performed.icon}
                      width="16"
                      height="16"
                      alt=""
                    />
                    {item.performed.title}
                  </span>
                </td>

                <td className="p-3">
                  <span className="inline-flex items-center text-gray-1900 font-inter font-normal text-xs leading-4 bg-gray-1600 rounded h-4.5 px-1.5">
                    {item.change}
                  </span>
                </td>

                <td className="p-3 text-gray-1900 text-right font-normal font-inter text-xs leading-4">
                  {item.timestamp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
