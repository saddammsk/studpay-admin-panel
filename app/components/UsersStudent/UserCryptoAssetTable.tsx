"use client";

import Image from "next/image";
import Link from "next/link";

type AssetSymbol = "BTC" | "ETH" | "USDC" | "SOL";

interface AssetInfo {
  icon: string;
  name: AssetSymbol;
  sub: string;
}

interface PriceInfo {
  price: string;
  priceicon: string;
  pricenumber: string;
}

interface ExplorerInfo {
  icon: string;
  name: string;
}

interface Transaction {
  id: number;
  asset: AssetInfo;
  balance: string;
  current: PriceInfo;
  value: string;
  explorer: ExplorerInfo;
}

const transactions: Transaction[] = [
  {
    id: 1,
    asset: { icon: "₿", name: "BTC", sub: "Bitcoin" },
    balance: "0.0542 BTC",
    current: { price: "52.340,00 €", priceicon: "/images/price-arrow-green.svg", pricenumber: "+2.34%" },
    value: "2.836,83 €",
    explorer: { icon: "/icons/Explorer.svg", name: "Explorer" },
  },
  {
    id: 2,
    asset: { icon: "Ξ", name: "ETH", sub: "Ethereum" },
    balance: "0.8765 ETH",
    current: { price: "2.890,50 €", priceicon: "/images/price-arrow-red.svg", pricenumber: "-1.23%" },
    value: "2.533,69 €",
    explorer: { icon: "/icons/Explorer.svg", name: "Explorer" },
  },
  {
    id: 3,
    asset: { icon: "$", name: "USDC", sub: "USD Coin" },
    balance: "650 USDC",
    current: { price: "0,92 €", priceicon: "/images/price-arrow-green.svg", pricenumber: "+0.02%" },
    value: "598,00 €",
    explorer: { icon: "/icons/Explorer.svg", name: "Explorer" },
  },
  {
    id: 4,
    asset: { icon: "◎", name: "SOL", sub: "Solana" },
    balance: "4.25 SOL",
    current: { price: "98,50 €", priceicon: "/images/price-arrow-green.svg", pricenumber: "+5.67%" },
    value: "418,63 €",
    explorer: { icon: "/icons/Explorer.svg", name: "Explorer" },
  },
];

const assetBgConfig: Record<AssetSymbol, string> = {
  BTC: "bg-Orange55",
  ETH: "bg-blue55",
  USDC: "bg-blue556",
  SOL: "bg-linear-to-r from-blueviolet1 to-greenviolet1",
};

const TABLE_HEADERS = [
  { label: "Asset", align: "text-left" },
  { label: "Balance", align: "text-right" },
  { label: "Current Price", align: "text-right" },
  { label: "Market Value", align: "text-right" },
  { label: "Action", align: "text-right" },
] as const;

export default function UserCryptoAssetTable() {
  return (
    <div className="overflow-x-auto">
      <table className="4xl:w-full w-187.5 border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            {TABLE_HEADERS.map((header) => (
              <th key={header.label} className={`px-6 py-3.5 ${header.align} text-sm leading-5 font-normal text-lighrgrey38`}>
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => {
            const isNegative = item.current.pricenumber.startsWith("-");

            return (
              <tr key={item.id} className="border-b border-solid border-gray-1000 last:border-b-0">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className={`text-white text-sm font-bold flex items-center justify-center rounded-full w-10 h-10 ${assetBgConfig[item.asset.name]}`}>
                      {item.asset.icon}
                    </span>
                    <div>
                      <h4 className="text-blue-1300 text-sm font-medium leading-5">{item.asset.name}</h4>
                      <span className="text-gray-1200 text-xs leading-4 block">{item.asset.sub}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="text-lighrgrey38 text-sm leading-5 font-normal">{item.balance}</div>
                </td>
                <td className="px-6 py-4 text-Black234 text-sm leading-5 font-normal text-right">
                  <h4>{item.current.price}</h4>
                  <span className={`flex items-center gap-1 justify-end text-xs ${isNegative ? "text-red-1300" : "text-green-1600"}`}>
                    <Image src={isNegative ? "/images/price-arrow-red.svg" : item.current.priceicon} width={16} height={16} alt="" />
                    {item.current.pricenumber}
                  </span>
                </td>
                <td className="px-4 py-3 text-right text-Black234 text-sm leading-5 font-bold">{item.value}</td>
                <td className="px-4 py-3 text-center">
                  <Link href="#" className="flex items-center justify-end text-sm leading-5 text-violet55 gap-3 py-2.5 px-3 rounded-[10px] hover:bg-violet55/10">
                    <Image src={item.explorer.icon} width={16} height={16} alt="View" />
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