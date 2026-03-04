"use client";
import Image from "next/image";
import Link from "next/link";


type TransactionType =
  | "Buy"
  | "Sell"
  | "Withdraw"
  | "Deposit"
  | "Staking Rewards";


interface Transaction {
  id: number;
  type: TransactionType;
  asset: string;
  amount: string;
  value: string;
  hash: {
    name: string;
    icon: string,
  },
  amlIcon: string;
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
    hash: {
      name: "0x8f4b2c3d...89abcdef",
      icon: "/images/copyIcon2.svg",
    },
    aml: "Passed",
    amlIcon: "/icons/passes-sheild.svg",
    date: "15 Jan 2024, 14:32",
  },
  {
    id: 2,
    type: "Staking Rewards",
    asset: "ETH",
    amount: "+0.0234",
    value: "67,65 €",
    hash: {
      name: "0x1a2b3c4d...23456789",
      icon: "/images/copyIcon2.svg",
    },
    aml: "Passed",
    amlIcon: "/icons/passes-sheild.svg",
    date: "14 Jan 2024, 09:15",
  },
  {
    id: 3,
    type: "Deposit",
    asset: "USDC",
    amount: "+500",
    value: "460,00 €",
    hash: {
      name: "0xabcdef01...456789ab",
      icon: "/images/copyIcon2.svg",
    },
    aml: "Passed",
    amlIcon: "/icons/passes-sheild.svg",
    date: "12 Jan 2024, 16:45",
  },
  {
    id: 4,
    type: "Withdraw",
    asset: "ETH",
    amount: "-0.15",
    value: "433,58 €",
    hash: {
      name: "0x7890abcd...ef012345",
      icon: "/images/copyIcon2.svg",
    },
    aml: "Pending",
    amlIcon: "/icons/pending-icon.svg",
    date: "10 Jan 2024, 11:20",
  },
  {
    id: 5,
    type: "Sell",
    asset: "SOL",
    amount: "-2.5",
    value: "246,25 €",
    hash: {
      name: "0xdef01234...6789abcd",
      icon: "/images/copyIcon2.svg",
    },
    aml: "Flagged",
    amlIcon: "/icons/Flagged-sheild.svg",
    date: "08 Jan 2024, 08:50",
  },
];
const amlConfig = {
  Passed: "text-green-1600 bg-green-1600/10",
  Pending: "text-yellow-1100 bg-yellow-1100/10",
  Flagged: "text-red-1300 bg-red-1300/10",
};


const typeConfig = {
  Buy: {
    className: "bg-green-1600/10 border-green-1600/20 text-green-1600",
    icon: "/images/down-left-arrow.svg",
  },
  "Staking Rewards": {
    className: "bg-purpal14/10 border-purpal14/20 text-purpal14",
    icon: "/icons/rewards-icon.svg",
  },
  Deposit: {
    className: "bg-violet55/10 border-violet55/20 text-violet55",
    icon: "/icons/Deposit-icon.svg",
  },
    Withdraw: {
    className: "bg-yellow-1100/10 border-yellow-1100/20 text-yellow-1100",
    icon: "/icons/Withdraw-arrow.svg",
  },
  Sell: {
    className: "bg-red-1300/10 border-red-1300/20 text-red-1300",
    icon: "/icons/Sell-arrow.svg",
  },



};
export default function UserInsuranceTable() {
  return (
    <div className="overflow-x-auto">
      <table className="5xl:w-full w-[1100px] border-collapse">
        <thead>
          <tr className="border-b border-lighrgrey40">
            <th className="px-6 py-3.5 text-left text-sm leading-5 font-normal text-lighrgrey38">
              Type
            </th>
            <th className="px-6 py-3.5 text-left text-sm leading-5 font-normal text-lighrgrey38">
              Asset
            </th>
            <th className="px-6 py-3.5 text-left text-sm leading-5 font-normal text-lighrgrey38">
              Amount
            </th>
            <th className="px-6 py-3.5 text-right text-sm leading-5 font-normal text-lighrgrey38">
              Value
            </th>
            <th className="px-6 py-3.5 text-center text-sm leading-5 font-normal text-lighrgrey38">
              Hash/TXID
            </th>
            <th className="px-6 py-3.5 text-center text-sm leading-5 font-normal text-lighrgrey38">
              AML Check
            </th>
            <th className="px-6 py-3.5 text-center text-sm leading-5 font-normal text-lighrgrey38">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => {
            const isNegative = item.amount.startsWith("-");

            return (
              <tr key={item.id} className="border-b border-lighrgrey40">
                <td className="px-6 py-5">
                  <span
                    className={`px-3 py-1 border border-solid rounded-full text-xs inline-flex items-center gap-2 
    ${typeConfig[item.type]?.className}`}
                  >
                    <Image
                      src={typeConfig[item.type]?.icon}
                      width={14}
                      height={14}
                      alt=""
                    />
                    {item.type}
                  </span>
                </td>

                <td className="px-6 py-5 text-Black234 text-sm leading-5 font-normal">{item.asset}</td>

                <td
                  className={`px-6 py-5 text-Black234 text-sm leading-5 font-normal ${isNegative ? "text-red-1300" : "text-Black234"
                    }`}
                >
                  {item.amount}
                </td>

                <td className="px-6 py-5 text-right text-Black234 text-sm leading-5 font-normal">{item.value}</td>

                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <div className="text-lighrgrey38 flex-1 text-xs leading-4 font-normal bg-lighrgrey39 rounded px-2 py-1">
                      {item.hash.name}
                    </div>
                    <Link href={"#"} className="flex items-center justify-center w-7 h-7">
                      <Image
                        src={item.hash.icon}
                        width="16"
                        height="16"
                        alt=""
                      />
                    </Link>
                  </div>
                </td>

                <td className="px-6 py-5">
                  <span className={`px-2 py-1 text-xs  leading-4 font-normal inline-flex items-center gap-2 rounded-full ${amlConfig[item.aml]}`}
                  >
                    <Image
                      src={item.amlIcon}
                      width="16"
                      height="16"
                      alt=""
                    />
                    {item.aml}
                  </span>
                </td>

                <td className="px-6 py-5 text-sm leading-5 text-lighrgrey38">{item.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div >
  );
}
