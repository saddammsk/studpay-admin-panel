"use client";
import Image from "next/image";
import Link from "next/link";

type PaymentStatus = "Success" | "Pending" | "Failed";
type TypeStatus = "Top-Up" | "Crypto" | "AVI" | "Withdraw" | "Transfer";

interface Payment {
  id: number;
  date: string;
  name: string;
  transaction: string;
  type: TypeStatus;
  method: string;
  amount: string;
  status: PaymentStatus;
  actions: string;
}

const statusConfig: Record<PaymentStatus, { classes: string }> = {
  Success: {
    classes: "bg-lightgreen12 border-lightgreen13 text-green12",
  },
  Pending: {
    classes: "bg-yellow1200 border-yellow1300 text-brown1200",
  },
  Failed: {
    classes: "bg-lightred1200 border-red1400 text-red1200",
  },
};

const typeConfig: Record<TypeStatus, { classes: string }> = {
  "Top-Up": {
    classes: "bg-white-1000 border-blue300 text-blue200",
  },
  Crypto: {
    classes: "bg-lightred1200 border-blue500 text-blue400",
  },
  AVI: {
    classes: "bg-lightgreen14 border-lightgreen15 text-green13",
  },
  Withdraw: {
    classes: "bg-purpal12 border-orange83 text-brown2000",
  },
  Transfer: {
    classes: "bg-blueNexus border-purpal12 text-violet39",
  },
};

const payments: Payment[] = [
  {
    id: 1,
    date: "5/25/2024, 2:30:22 PM",
    name: "Emma Johnson",
    transaction: "TXN-2024-001",
    type: "Top-Up",
    method: "Card",
    amount: "€500",
    status: "Success",
    actions: "View Details",
  },
  {
    id: 2,
    date: "5/25/2024, 1:15:45 PM",
    name: "Marcus Chen",
    transaction: "TXN-2024-002",
    type: "Crypto",
    method: "Crypto",
    amount: "250 USDT",
    status: "Pending",
    actions: "View Details",
  },
  {
    id: 3,
    date: "5/25/2024, 12:45:10 PM",
    name: "Sofia Rodriguez",
    transaction: "TXN-2024-003",
    type: "AVI",
    method: "Bank",
    amount: "€1,200",
    status: "Success",
    actions: "View Details",
  },
   {
    id: 4,
    date: "5/25/2024, 11:20:33 AM",
    name: "Ahmed Hassan",
    transaction: "TXN-2024-004",
    type: "Withdraw",
    method: "Bank",
    amount: "€150",
    status: "Failed",
    actions: "View Details",
  },
    {
    id: 5,
    date: "5/25/2024, 10:55:17 AM",
    name: "Anna Kowalski",
    transaction: "TXN-2024-005",
    type: "Transfer",
    method: "Card",
    amount: "€75",
    status: "Success",
    actions: "View Details",
  },
];

export default function TransactionTable() {
  return (
    <div className="bg-white border border-gray-1000 rounded-lg overflow-x-auto">
      <table className="2xl:w-full w-341.25">
        <thead>
          <tr className="bg-gray-1500 border-b border-gray1600">
            <th className="px-4 py-3 text-left text-black-1200 font-normal font-neulis-sans text-sm">Date & Time</th>
            <th className="px-4 py-3 text-left text-black-1200 font-normal font-neulis-sans text-sm">Student Name</th>
            <th className="px-4 py-3 text-left text-black-1200 font-normal font-neulis-sans text-sm">Transaction ID</th>
            <th className="px-4 py-3 text-left text-black-1200 font-normal font-neulis-sans text-sm">Type</th>
            <th className="px-4 py-3 text-left text-black-1200 font-normal font-neulis-sans text-sm">Method</th>
            <th className="px-4 py-3 text-left text-black-1200 font-normal font-neulis-sans text-sm">Amount</th>
            <th className="px-4 py-3 text-left text-black-1200 font-normal font-neulis-sans text-sm">Status</th>
            <th className="px-4 py-3 text-left text-black-1200 font-normal font-neulis-sans text-sm">Actions</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((item) => (
            <tr key={item.id} className="border-b border-gray1600 hover:bg-gray1700/50">
              <td className="px-4 py-6 text-black-1200 font-neulis-sans font-normal text-sm leading-5">{item.date}</td>
              <td className="px-4 py-6 text-black-1200 font-neulis-sans font-normal text-sm leading-5">{item.name}</td>

              <td className="px-4 py-6">
                <span className="bg-gray-1600 text-gray-1100 font-neulis-sans font-normal text-sm leading-5 px-2 h-6 rounded-sm inline-flex items-center justify-center">
                  {item.transaction}
                </span>
              </td>

              <td className="px-4 py-6">
                <span className={`px-2.75 py-1 rounded-full h-5.5 text-[11.44px] font-normal leading-4 border border-solid  ${typeConfig[item.type].classes}`}>
                  {item.type}
                </span>
              </td>

              <td className="px-4 py-6">
                <span className="bg-gray-1600 text-gray1800 font-neulis-sans font-normal text-sm leading-5 px-2 h-5.5 rounded-sm inline-flex items-center justify-center">
                  {item.method}
                </span>
              </td>
              <td className="px-4 py-6 text-black-1200 font-neulis-sans font-normal text-sm leading-5">{item.amount}</td>

              <td className="px-4 py-6">
                <span
                  className={`px-3 h-5.5 rounded-full text-xs font-normal leading-4 border border-solid inline-flex items-center justify-center ${statusConfig[item.status].classes}`}
                >
                  {item.status}
                </span>
              </td>

              <td className="px-4 py-6">
                <Link
                  href="#"
                  className="group hover:bg-gray-1300 hover:text-blue-1200 transition-all duration-500 ease-in-out border border-solid border-blue300 rounded-md inline-flex items-center justify-center gap-2 h-9 px-3.25 text-blue600 font-neulis-sans text-sm leading-5"
                >
                  <Image
                    src="../images/eyes-blue.svg"
                    width='16'
                    height='16'
                    alt=""
                    className="group-hover:brightness-0 transition-all duration-500 ease-in-out"
                  />
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
