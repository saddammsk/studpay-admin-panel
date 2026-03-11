"use client";
import Link from "next/link";
import Image from "next/image";

type Tier = "Basic" | "Premium" | "VIP";
type Status = "Active" | "Pending";

interface Product {
  id: number;
  product: string;
  tier: Tier;
  interest: string;
  index: string;
  margin: string;
  minDeposit: string;
  maxDeposit: string;
  withdrawal: string;
  aum: string;
  status: Status;
}

const products: Product[] = [
  {
    id: 1,
    product: "StudSave Basic",
    tier: "Basic",
    interest: "4.5%",
    index: "3.0%",
    margin: "1.5%",
    minDeposit: "EUR 500",
    maxDeposit: "EUR 50,000",
    withdrawal: "Instant, no lock-in",
    aum: "EUR 12.4 Cr",
    status: "Active",
  },
  {
    id: 2,
    product: "StudSave Premium",
    tier: "Premium",
    interest: "6.2%",
    index: "3.0%",
    margin: "3.2%",
    minDeposit: "EUR 5,000",
    maxDeposit: "EUR 2,00,000",
    withdrawal: "7-day notice period",
    aum: "EUR 28.7 Cr",
    status: "Active",
  },
  {
    id: 3,
    product: "StudSave VIP",
    tier: "VIP",
    interest: "8.0%",
    index: "3.0%",
    margin: "5.0%",
    minDeposit: "EUR 50,000",
    maxDeposit: "EUR 10,00,000",
    withdrawal: "30-day lock-in, early penalty 1%",
    aum: "EUR 8.2 Cr",
    status: "Pending",
  },
];

const tierStyle = {
  Basic: "bg-gray-1600 text-gray-2300",
  Premium: "bg-rosepink23 text-royalBlue123",
  VIP: "bg-rosepink23 text-yellow-1100",
};

const statusStyle = {
  Active: "bg-rosepink23 text-lightgreen17",
  Pending: "bg-rosepink23 text-yellow-1100",
};

export default function SavingsProductTable() {
  return (
    <div className="mt-6 bg-white border border-gray-200 rounded-lg">
      <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between py-4 px-5 border-b border-solid border-gray-1000">
        <div>
          <h4 className="text-black-2000 text-lg leading-7 font-bold">
            Savings Product Configuration
          </h4>
          <p className="text-sm leading-5 font-normal text-gray-2300">
            Manage savings tiers and interest rates
          </p>
        </div>

        <button className="text-black-2000 flex items-center gap-2 border border-solid border-gray-1000 px-4 h-9.5 rounded-lg text-sm leading-5 font-medium">
          <Image
            src="/icons/sheild-dark-blue.svg"
            width={16}
            height={16}
            alt="sheild"
            className="brightness-0"
          />
          4-Eyes Approval Log
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="4xl:w-full w-310 text-sm">

          <thead className="bg-gray-1600/30">
            <tr>
              <th className="px-4 py-3 text-left uppercase text-xs leading-4 text-gray-2300 font-bold">Product</th>
              <th className="px-4 py-3 text-left uppercase text-xs leading-4 text-gray-2300 font-bold">Tier</th>
              <th className="px-4 py-3 text-left uppercase text-xs leading-4 text-gray-2300 font-bold">Interest Rate</th>
              <th className="px-4 py-3 text-left uppercase text-xs leading-4 text-gray-2300 font-bold">Min/Max Deposit</th>
              <th className="px-4 py-3 text-left uppercase text-xs leading-4 text-gray-2300 font-bold">Withdrawal</th>
              <th className="px-4 py-3 text-left uppercase text-xs leading-4 text-gray-2300 font-bold">AUM</th>
              <th className="px-4 py-3 text-left uppercase text-xs leading-4 text-gray-2300 font-bold">Status</th>
              <th className="px-4 py-3 text-right uppercase text-xs leading-4 text-gray-2300 font-bold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => (
              <tr key={item.id} className="border-t border-solid border-gray-1000">

                <td className="px-4 py-4 text-black-2000 text-sm leading-5 font-medium">
                  {item.product}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`px-2.5 h-6 rounded-full text-xs leading-4 font-medium text-gray-2300 inline-flex items-center justify-center ${tierStyle[item.tier]}`}
                  >
                    {item.tier}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <div className="text-lightgreen17 text-sm leading-5 font-bold">
                    {item.interest}
                  </div>
                  <div className="text-xs leading-4 font-normal text-gray-23">
                    Index: {item.index} + Margin: {item.margin}
                  </div>
                </td>

                <td className="px-4 py-4  text-gray-2300 text-sm leading-5 font-normal">
                  <div className="flex items-center gap-1">Min: <span className="text-black-2000 block">{item.minDeposit}</span></div>
                  <div className="flex items-center gap-1">Max: <span className="text-black-2000 block">{item.maxDeposit}</span></div>
                </td>

                <td className="px-4 py-4 text-black-2000 text-sm leading-5 font-normal">
                  {item.withdrawal}
                </td>

                <td className="px-4 py-4 text-black-2000 text-sm leading-5 font-medium">{item.aum}</td>

                <td className="px-4 py-4">
                  <span
                    className={`px-2.5 h-6 rounded-full text-xs leading-4 font-medium inline-flex items-center justify-center ${statusStyle[item.status]}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-4 py-4 text-right">
                  <button className="text-black-2000 text-sm leading-5 font-medium border border-solid border-gray-1000 cursor-pointer hover:bg-gray-1600 px-3 h-8.5 rounded-lg  flex items-center gap-2.5 ml-auto">
                    <Image
                      src="/images/edit-icon.svg"
                      width={14}
                      height={14}
                      alt="edit"
                    />
                    Edit Rates
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}