"use client";
import Image from "next/image";
import Link from "next/link";

interface Transaction {
  id: number;
  asset: {
    icon: string;
    name: string;
    sub: string;
  };
  balance: string;
  current: {
    price: string;
    priceicon: string;
    pricenumber: string;
  };
  value: string;
  explorer: {
    icon: string;
    name: string;
  };
}

const statusConfig = {
  Verified: "text-green54",
  Pending: "text-yellow1900",
} as const;

// Sample icons (replace with actual paths)
const transactions: Transaction[] = [
  {
    id: 1,
    asset: {
      icon: "₿",
      name: "BTC",
      sub: "Bitcoin",
    },
    balance: "0.0542 BTC",
    current: {
      price: "52.340,00 €",
      priceicon: "/images/price-arrow-green.svg",
      pricenumber: "+2.34%",
    },
    value: "2.836,83 €",
    explorer: {
      icon: "/icons/Explorer.svg",
      name: "Explorer",
    },
  },
  {
    id: 2,
    asset: {
      icon: "Ξ",
      name: "ETH",
      sub: "Ethereum",
    },
    balance: "0.8765 ETH",
    current: {
      price: "2.890,50 €",
      priceicon: "/images/price-arrow-red.svg",
      pricenumber: "-1.23%",
    },
    value: "2.533,69 €",
    explorer: {
      icon: "/icons/Explorer.svg",
      name: "Explorer",
    },
  },
  {
    id: 3,
    asset: {
      icon: "$",
      name: "USDC",
      sub: "USD Coin",
    },
    balance: "650 USDC",
    current: {
      price: "0,92 €",
      priceicon: "/images/price-arrow-green.svg",
      pricenumber: "+0.02%",
    },
    value: "598,00 €",
    explorer: {
      icon: "/icons/Explorer.svg",
      name: "Explorer",
    },
  },
  {
    id: 4,
    asset: {
      icon: "◎",
      name: "SOL",
      sub: "Solana",
    },
    balance: "4.25 SOL",
    current: {
      price: "98,50 €",
      priceicon: "/images/price-arrow-green.svg",
      pricenumber: "+5.67%",
    },
    value: "418,63 €",
    explorer: {
      icon: "/icons/Explorer.svg",
      name: "Explorer",
    },
  },
];
const assetBgConfig: Record<string, string> = {
  BTC: "bg-Orange55",
  ETH: "bg-blue55",
  USDC: "bg-blue556",
  SOL: " bg-linear-to-r from-blueviolet1 to-greenviolet1",
};
export default function UserInsuranceTable() {
  return (
    <div className="overflow-x-auto">
      <table className="4xl:w-full w-187.5 border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-3.5 text-left text-sm leading-5 font-normal text-lighrgrey38">
              Asset
            </th>
            <th className="px-6 py-3.5 text-right text-sm leading-5 font-normal text-lighrgrey38">
              Balance
            </th>
            <th className="px-6 py-3.5 text-right text-sm leading-5 font-normal text-lighrgrey38">
              Current Price
            </th>
            <th className="px-6 py-3.5 text-right text-sm leading-5 font-normal text-lighrgrey38">
              Market Value
            </th>
            <th className="px-6 py-3.5 text-right text-sm leading-5 font-normal text-lighrgrey38">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => {
            const isNegative = item.current.pricenumber.startsWith("-");

            return (
              <tr
                key={item.id}
                className="border-b border-solid border-gray-1000 last:border-b-0"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-white text-sm font-bold flex items-center justify-center rounded-full w-10 h-10
                      ${assetBgConfig[item.asset.name] || "bg-gray-500"}`}
                    >
                      {item.asset.icon}
                    </span>
                    <div className="">
                      <h4 className="text-blue-1300 text-sm font-medium leading-5">
                        {item.asset.name}
                      </h4>
                      <span className="text-gray-1200 text-xs leading-4 block">
                        {item.asset.sub}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="text-lighrgrey38 text-sm leading-5 font-normal">
                    {item.balance}
                  </div>
                </td>
                <td className="px-6 py-4 text-Black234 text-sm leading-5 font-normal text-right">
                  <h4>{item.current.price}</h4>
                  <span
                    className={`flex items-center gap-1 justify-end text-xs
                    ${isNegative ? "text-red-1300" : "text-green-1600"}`}
                  >
                    <Image
                      src={
                        isNegative
                          ? "/images/price-arrow-red.svg"
                          : item.current.priceicon
                      }
                      width={16}
                      height={16}
                      alt=""
                    />
                    {item.current.pricenumber}
                  </span>
                </td>
                <td className="px-4 py-3 text-right text-Black234 text-sm leading-5 font-bold">
                  {item.value}
                </td>

                <td className="px-4 py-3 text-center">
                  <Link
                    href="#"
                    className="flex items-center justify-end text-sm leading-5 text-violet55 gap-3 py-2.5 px-3 rounded-[10px] hover:bg-violet55/10"
                  >
                    <Image
                      src={item.explorer.icon}
                      width={16}
                      height={16}
                      alt="View"
                    />
                    {item.explorer.name}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
