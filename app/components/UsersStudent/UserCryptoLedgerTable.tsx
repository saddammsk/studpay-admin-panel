"use client";
import Image from "next/image";
import Link from "next/link";

interface Transaction {
  id: number;
  type: string;
  asset: string;
  amount: string;
  value: string;
  hash: string;
  aml: "Passed" | "Pending" | "Flagged";
  date: string;
}
const transactions: Transaction[] = [
  {
    id: 1,
    type: "Buy",
    asset: "BTC",
    amount: "+0.0125",
    value: "654,25 €",
    hash: "0x8f4b2c3d...89abcdef",
    aml: "Passed",
    date: "15 Jan 2024, 14:32",
  },
  {
    id: 2,
    type: "Staking Rewards",
    asset: "ETH",
    amount: "+0.0234",
    value: "67,65 €",
    hash: "0x12ab3c4d...23456789",
    aml: "Passed",
    date: "14 Jan 2024, 09:15",
  },
  {
    id: 3,
    type: "Deposit",
    asset: "USDC",
    amount: "+500",
    value: "460,00 €",
    hash: "0xabcded01...456789ab",
    aml: "Passed",
    date: "12 Jan 2024, 16:45",
  },
  {
    id: 4,
    type: "Withdraw",
    asset: "ETH",
    amount: "-0.15",
    value: "433,58 €",
    hash: "0x7890abcd...ef012345",
    aml: "Pending",
    date: "10 Jan 2024, 11:20",
  },
  {
    id: 5,
    type: "Sell",
    asset: "SOL",
    amount: "-2.5",
    value: "246,25 €",
    hash: "0xdef01234...6789abcd",
    aml: "Flagged",
    date: "08 Jan 2024, 08:50",
  },
];
const amlConfig = {
  Passed: "text-green-1600 bg-green-1600/10",
  Pending: "text-yellow-1100 bg-yellow-1100/10",
  Flagged: "text-red-1300 bg-red-1300/10",
};
export default function UserInsuranceTable() {
  return (
    <div className="overflow-x-auto">
      <table className="4xl:w-full w-275 border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-3.5 text-left text-sm leading-5 font-normal text-lighrgrey38">
              Type
            </th>
            <th className="px-6 py-3.5 text-right text-sm leading-5 font-normal text-lighrgrey38">
              Asset
            </th>
            <th className="px-6 py-3.5 text-right text-sm leading-5 font-normal text-lighrgrey38">
              Amount
            </th>
            <th className="px-6 py-3.5 text-right text-sm leading-5 font-normal text-lighrgrey38">
              Value
            </th>
            <th className="px-6 py-3.5 text-right text-sm leading-5 font-normal text-lighrgrey38">
              Hash/TXID
            </th>
            <th className="px-6 py-3.5 text-right text-sm leading-5 font-normal text-lighrgrey38">
              AML Check
            </th>
            <th className="px-6 py-3.5 text-right text-sm leading-5 font-normal text-lighrgrey38">
              Date  
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => {
            const isNegative = item.amount.startsWith("-");

            return (
              <tr key={item.id} className="border-b">
                <td className="px-6 py-5">
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-1600 text-xs">
                    {item.type}
                  </span>
                </td>

                <td className="px-6 py-5 text-Black234 text-sm leading-5 font-normal">{item.asset}</td>

                <td
                  className={`px-6 py-5 text-Black234 text-sm leading-5 font-normal ${
                    isNegative ? "text-red-1300" : "text-Black234"
                  }`}
                >
                  {item.amount}
                </td>

                <td className="px-6 py-5 text-Black234 text-sm leading-5 font-normal">{item.value}</td>

                <td className="px-6 py-5">
                  <div className="text-lighrgrey38 text-xs leading-4 font-normal bg-lighrgrey39 rounded px-2 py-1">{item.hash}</div> 
                  </td>

                <td className="px-6 py-5">
                  <span
                    className={`px-2 py-1 text-xs  leading-4 font-normal inline-flex items-center gap-2 rounded-full ${amlConfig[item.aml]}`}
                  >
                    {item.aml}
                  </span>
                </td>

                <td className="px-6 py-5 text-sm leading-5 text-lighrgrey38">{item.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
