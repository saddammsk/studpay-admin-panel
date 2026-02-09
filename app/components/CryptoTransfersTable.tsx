"use client";

import Link from "next/link";
import Image from "next/image";

type PaymentStatus = "Success" | "Pending" | "Failed";
type ActionStatus = "Sent" | "Received" | "Converted";

interface Actions {
  eyesimg: string;
}

interface Payment {
  id: number;
  date: string;
  name: string;
  walletID: string;
  crypto: { icon: string; name: string };
  action: ActionStatus;
  amount: { price: string; value: string };
  status: PaymentStatus;
  actions: Actions;
}

const statusConfig = {
  Success: {
    classes: "bg-green-1200 text-green-1100",
  },
  Pending: {
    classes: "bg-yellow1200 text-brown-1000",
  },
  Failed: {
    classes: "bg-red-1100 text-red1200",
  },
} as const;

const actionConfig = {
  Sent: {
    classes: "bg-lightred1300 text-red1500",
  },
  Received: {
    classes: "bg-lightred1300 text-green14",
  },
  Converted: {
    classes: "bg-lightred1300 text-blue-1000",
  },
} as const;

const payments: Payment[] = [
  {
    id: 1,
    date: "2024-01-15 14:30:25",
    name: "Alice Johnson",
    walletID: "WAL001",
    crypto: {
      icon: "/images/USDT-icon.svg",
      name: "USDT",
    },
    action: "Sent",
    amount: {
      price: "500.00 USDT",
      value: "≈ €460.50",
    },
    status: "Success",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
  {
    id: 2,
    date: "2024-01-15 12:45:18",
    name: "Bob Smith",
    walletID: "WAL002",
    crypto: {
      icon: "/images/BTC-icon2.svg",
      name: "BTC",
    },
    action: "Received",
    amount: {
      price: "0.01500000 BTC",
      value: "≈ €645.30",
    },
    status: "Pending",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
  {
    id: 3,
    date: "2024-01-14 16:20:45",
    name: "Carol Davis",
    walletID: "WAL003",
    crypto: {
      icon: "/images/USDC-icon.svg",
      name: "USDC",
    },
    action: "Converted",
    amount: {
      price: "1000.00 USDC",
      value: "≈ €920.75",
    },
    status: "Failed",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
  {
    id: 4,
    date: "2024-01-14 10:15:33",
    name: "David Wilson",
    walletID: "WAL004",
    crypto: {
      icon: "/images/USDT-icon.svg",
      name: "USDT",
    },
    action: "Received",
    amount: {
      price: "750.00 USDT",
      value: "≈ €691.13",
    },
    status: "Success",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
  {
    id: 5,
    date: "2024-01-13 18:30:12",
    name: "Emma Brown",
    walletID: "WAL005",
    crypto: {
      icon: "/images/BTC-icon2.svg",
      name: "BTC",
    },
    action: "Sent",
    amount: {
      price: "0.00800000 BTC",
      value: "≈ €344.16",
    },
    status: "Pending",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
];

export default function CryptoTransfersTable() {
  return (
    <div className="bg-white border border-gray1600 rounded-xl shadow-4xl md:p-6 p-4">
      <div className="flex items-center gap-2 md:pb-6 pb-4">
        <Image src="/images/Btc-blue.svg" alt="" width={20} height={20} />
        <h4 className="text-black13 font-neulis-sans text-lg">
          Crypto Transactions ({payments.length})
        </h4>
      </div>

      <div className="overflow-x-auto">
        <table className="2xl:w-full w-341.25">
          <thead>
            <tr className="border-b border-gray1600">
              <th className="px-4 py-3 font-neulis-sans font-normal text-[13.89px] leading-5 text-left text-gray-1400">Date & Time</th>
              <th className="px-4 py-3 font-neulis-sans font-normal text-[13.89px] leading-5 text-left text-gray-1400">Student Name</th>
              <th className="px-4 py-3 font-neulis-sans font-normal text-[13.89px] leading-5 text-left text-gray-1400">Wallet ID</th>
              <th className="px-4 py-3 font-neulis-sans font-normal text-[13.89px] leading-5 text-left text-gray-1400">Crypto Type</th>
              <th className="px-4 py-3 font-neulis-sans font-normal text-[13.89px] leading-5 text-left text-gray-1400">Action</th>
              <th className="px-4 py-3 font-neulis-sans font-normal text-[13.89px] leading-5 text-left text-gray-1400">Amount</th>
              <th className="px-4 py-3 font-neulis-sans font-normal text-[13.89px] leading-5 text-left text-gray-1400">Status</th>
              <th className="px-4 py-3 font-neulis-sans font-normal text-[13.89px] leading-5 text-left text-gray-1400">Actions</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray1600 hover:bg-gray1700/50 transition"
              >
                <td className="py-7 px-4 text-black13 font-neulis-sans font-normal text-sm leading-5">{item.date}</td>
                <td className="py-7 px-4 text-black13 font-neulis-sans font-normal text-sm leading-5">
                  <div className="flex items-center gap-2">
                    {item.name}
                    {item.status === "Failed" && (
                      <Image src="/images/warning.svg" alt="warning" width={16} height={16} />
                    )}
                  </div>
                </td>
                <td className="py-7 px-4 text-gray-1100 font-neulis-sans font-normal text-sm leading-5">{item.walletID}</td>

                {/* Crypto Type */}
                <td className="py-7 px-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={item.crypto.icon}
                      alt={item.crypto.name}
                      width={20}
                      height={20}
                    />
                    <span className="text-black13 font-neulis-sans font-normal text-sm leading-5">
                      {item.crypto.name}
                    </span>
                  </div>
                </td>

                {/* Action */}
                <td className="py-7 px-4">
                  <span
                    className={`px-3 h-6 inline-flex items-center rounded-full text-xs font-normal ${actionConfig[item.action].classes}`}
                  >
                    {item.action}
                  </span>
                </td>

                {/* Amount */}
                <td className="py-7 px-4 text-black13 font-neulis-sans font-normal text-sm leading-5">
                  {item.amount.price}
                  <span className="block text-gray-1200 font-neulis-sans font-normal text-sm leading-5 mt-1">
                    {item.amount.value}
                  </span>
                </td>

                {/* Status */}
                <td className="py-7 px-4">
                  <span
                    className={`px-3 h-6 inline-flex items-center rounded-full text-xs font-normal leading-4 ${statusConfig[item.status].classes}`}
                  >
                    {item.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="py-7 px-4">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 border border-gray1600 rounded-md h-9 px-3 hover:bg-white transition"
                  >
                    <Image
                      src={item.actions.eyesimg}
                      alt="view"
                      width={16}
                      height={16}
                    />
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
