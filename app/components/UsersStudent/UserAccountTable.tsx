"use client";

import Link from "next/link";
import Image from "next/image";

type PaymentStatus = "Active" | "Pending";

const statusConfig = {
  Active: {
    classes: "bg-lightgreen17/10 border-lightgreen17/20 text-lightgreen17",
  },
  Pending: {
    classes: "bg-yellow-1100/10 border-yellow-1100/20 text-yellow-1100",
  },
} as const;


interface Payment {
  id: number;
  account: {
    icon: string;
    name: string;
    number: string;
  };
  ibanAddress: string;
  balance: string;
  status: PaymentStatus;
  change: {
    icon: string,
    type: string,
    direction: string,
  },
  timestamp: string;
  doticon: string;
}

const payments: Payment[] = [
  {
    id: 1,
    account: {
      icon: "../images/wallet-black.svg",
      name: "Main Checking Account",
      number: "ACC-001",

    },
    ibanAddress: "DE89 3704 0044 0532 0130 00",
    balance: "€4.523,67",
    status: "Active",
    change: {
      icon: "../images/price-arrow-green.svg",
      type: "+12.5%",
      direction: "up"
    },
    timestamp: "2024-01-28 09:15",
    doticon: "../images/vertical-dots.svg",
  },{
    id: 2,
    account: {
      icon: "../images/card-black.svg",
      name: "Emergency Fund",
      number: "ACC-002",

    },
    ibanAddress: "DE89 3704 0044 0532 0130 01",
    balance: "€15.280,00",
    status: "Active",
    change: {
      icon: "../images/price-arrow-green.svg",
      type: "+3.2%",
      direction: "up"
    },
    timestamp: "2024-01-25 14:30",
    doticon: "../images/vertical-dots.svg",
  },{
    id: 3,
    account: {
      icon: "../images/price-arrow-gray.svg",
      name: "Investment Portfolio",
      number: "ACC-003",

    },
    ibanAddress: "DE89 3704 0044 0532 0130 02",
    balance: "€8.945,32",
    status: "Active",
    change: {
      icon: "../images/price-arrow-red.svg",
      type: "-2.1%",
      direction: "down"
    },
    timestamp: "2024-01-27 11:45",
    doticon: "../images/vertical-dots.svg",
  },{
    id: 4,
    account: {
      icon: "../images/wallet-black.svg",
      name: "Crypto Wallet",
      number: "ACC-004",

    },
    ibanAddress: "0x742d...3a4F",
    balance: "€2.156,89",
    status: "Pending",
    change: {
      icon: "../images/price-arrow-green.svg",
      type: "+8.7%",
      direction: "up"
    },
    timestamp: "2024-01-26 16:20",
    doticon: "../images/vertical-dots.svg",
  },

];

export default function KycDocumentTable() {
  return (
    <div className="5xl:px-6 xl:px-3 px-4">
      <div className="overflow-x-auto">
        <table className="4xl:w-full w-257.5">
          <thead>
            <tr className="border-b border-gray1600">
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-1900">
                Account
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-1900">
                IBAN / Address
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-1900">
                Balance
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-1900">
                Status
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-1900">
                Monthly Change
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-1900">
                Last Activity
              </th>
              <th className="px-3 py-2 text-right text-xs font-medium text-gray-1900">
              </th>
            </tr>
          </thead>

          <tbody>
            {payments.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray1600 hover:bg-gray1700/50 transition"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-gray-1600 rounded-lg w-10 h-10 flex items-center justify-center">
                      <Image
                        src={item.account.icon}
                        width="16"
                        height="16"
                        alt=""
                      />
                    </span>
                    <div className="flex-1 w-full">
                      <h4 className="text-black-1600 font-inter font-medium text-sm leading-5">
                        {item.account.name}
                      </h4>
                      <p className="text-gray-1900 font-inter font-normal text-xs leading-4">
                        {item.account.number}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="p-4">
                  <span className="inline-flex items-center text-black-1600 font-normal text-xs leading-4 bg-gray-1600 rounded pl-2 pr-5.5 h-6">
                    {item.ibanAddress}
                  </span>
                </td>

                <td className="p-4">
                  <span className="inline-flex items-center text-black-1600 font-inter font-medium text-xs leading-5">
                    {item.balance}
                  </span>
                </td>

                {/* Status */}
                <td className="p-4">
                  <span
                    className={`px-2.75 h-5.5 inline-flex items-center rounded-full text-xs border border-solid font-normal leading-4 ${statusConfig[item.status].classes}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className={`flex items-center text-sm font-medium leading-5 gap-1.5 ${item.change.direction === "down" ? "text-red1700" : "text-lightgreen17"}`}>
                    <Image
                      src={item.change.icon}
                      width="12"
                      height="12"
                      alt=""
                    />
                    <span className="block">
                      {item.change.type}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-gray-1900 font-inter font-normal text-sm leading-5">
                  {item.timestamp}
                </td>
                <td className="p-4">
                  <Link href={"#"}>
                    <Image
                      src={item.doticon}
                      width="16"
                      height="16"
                      alt=""
                    />
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
