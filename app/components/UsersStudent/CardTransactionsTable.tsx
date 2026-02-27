"use client";

import Link from "next/link";
import Image from "next/image";

interface Payment {
  id: number;
  merchant: string;
  category: string;
  card: string;
  date: string;
  amount: {
    icon: string;
    type: string;
    direction: string;
  };

}

const payments: Payment[] = [
  {
    id: 1,
    merchant: "Amazon EU",
    category: "Online Shopping",
    card: "•••• 4589",
    date: "Jan 28, 2026",
    amount: {
      icon: "../images/top-right-arrow.svg",
      type: "-€89.99",
      direction: "up"
    },
  },{
    id: 2,
    merchant: "Spotify AB",
    category: "Subscriptions",
    card: "•••• 7823",
    date: "Jan 27, 2026",
    amount: {
      icon: "../images/top-right-arrow.svg",
      type: "-€9.99",
      direction: "up"
    },
  },{
    id: 3,
    merchant: "ATM - Frankfurt",
    category: "Cash Withdrawal",
    card: "•••• 4589",
    date: "Jan 26, 2026",
    amount: {
      icon: "../images/top-right-arrow.svg",
      type: "-€100",
      direction: "up"
    },
  },{
    id: 4,
    merchant: "Salary Deposit",
    category: "Income",
    card: "•••• 4589",
    date: "Jan 25, 2026",
    amount: {
      icon: "../images/down-left-arrow.svg",
      type: "+€2,500",
      direction: "down"
    },
  },{
    id: 5,
    merchant: "REWE Supermarkt",
    category: "Groceries",
    card: "•••• 4589",
    date: "Jan 24, 2026",
    amount: {
      icon: "../images/top-right-arrow.svg",
      type: "-€67.45",
      direction: "up"
    },
  },

];

export default function KycDocumentTable() {
  return (
    <div className="font-inter">
      <div className="border border-solid border-gray-3600 rounded-lg overflow-x-auto">
        <table className="5xl:w-full w-162.5">
          <thead>
            <tr className="bg-gray1700/50 border-b border-gray-3600">
              <th className="px-4 py-3.5 text-left text-sm font-bold text-gray-1900">
                Merchant
              </th>
              <th className="px-4 py-3.5 text-left text-sm font-bold text-gray-1900">
                Category
              </th>
              <th className="px-4 py-3.5 text-left text-sm font-bold text-gray-1900">
                Card
              </th>
              <th className="px-4 py-3.5 text-right text-sm font-bold text-gray-1900">
                Date
              </th>
              <th className="px-4 py-3.5 text-right text-sm font-bold text-gray-1900">
                Amount
              </th>
            </tr>
          </thead>

          <tbody>
            {payments.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-3600 hover:bg-gray1700/50 transition"
              >
                <td className="px-3 py-4.25 text-black-1600 font-inter font-medium text-sm leading-5">
                  {item.merchant}
                </td>
                <td className="px-3 py-4.25">
                  <span className="text-gray-1900 font-inter font-normal text-sm leading-5 block">
                    {item.category}
                  </span>
                </td>
                <td className="px-3 py-4.25 text-gray-1900 font-inter font-normal text-sm leading-5 block">
                  {item.card}
                </td>
                <td className="px-3 py-4.25 text-gray-1900 text-right font-normal font-inter text-xs leading-4">
                  {item.date}
                </td>
                <td className="px-3 py-4.25">
                  <div className={`flex items-center text-sm font-medium leading-5 gap-1.5 ${item.amount.direction === "down" ? "text-green-1600" : "text-black-1600"}`}>
                    <Image
                      src={item.amount.icon}
                      width="12"
                      height="12"
                      alt=""
                    />
                    <span className="block">
                      {item.amount.type}
                    </span>
                  </div>
                </td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
