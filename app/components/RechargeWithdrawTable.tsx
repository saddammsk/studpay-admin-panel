"use client";
import Image from "next/image";
import Link from "next/link";

type PaymentStatus = "Success" | "Pending" | "Failed";


interface Actions {
  eyesimg?: string;
  checkimg?: string;
  closeimg?: string;
}


interface Payment {
  id: number;
  file: {
    date: string;
    time: string;
  };
  student: {
    name: string;
    sub: string;
  };
  type: {
    name: string;
    icon: string;
  };
  wallet: string;
  payment: string;
  amount: {
    price: string;
    sign: string;
  };
  status: PaymentStatus;
  actions: Actions;
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



const payments: Payment[] = [
  {
    id: 1,
    file: { date: "2024-01-15", time: "14:30" },
    student: { name: "Alice Johnson", sub: "TXN001" },
    type: { name: "Recharge", icon: "/images/price-down-arrow.svg" },
    wallet: "Main",
    payment: "Card",
    amount: { price: "500.00", sign: "USD" },
    status: "Success",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
  {
    id: 2,
    file: { date: "2024-01-15", time: "12:45" },
    student: { name: "Bob Smith", sub: "TXN002" },
    type: { name: "Withdraw", icon: "/images/price-up-arrow.svg" },
    wallet: "Crypto",
    payment: "Crypto",
    amount: { price: "250.00", sign: "EUR" },
    status: "Pending",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
      checkimg: "/images/checkgreen-icon.svg",
      closeimg: "/images/closeRed.svg",
    },
  },
  {
    id: 3,
    file: { date: "2024-01-14", time: "16:20" },
    student: { name: "Carol Davis", sub: "TXN003" },
    type: { name: "Recharge", icon: "/images/price-down-arrow.svg" },
    wallet: "Main",
    payment: "Bank Transfer",
    amount: { price: "1000.00", sign: "GBP" },
    status: "Failed",
    actions: {

    },
  },
  {
    id: 4,
    file: { date: "2024-01-14", time: "10:15" },
    student: { name: "David Wilson", sub: "TXN004" },
    type: { name: "Withdraw", icon: "/images/price-up-arrow.svg" },
    wallet: "Crypto",
    payment: "Crypto",
    amount: { price: "750.00", sign: "USD" },
    status: "Success",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
  {
    id: 5,
    file: { date: "2024-01-13", time: "18:30" },
    student: { name: "Emma Brown", sub: "TXN005" },
    type: { name: "Recharge", icon: "/images/price-down-arrow.svg" },
    wallet: "Main",
    payment: "Card",
    amount: { price: "300.00", sign: "CAD" },
    status: "Pending",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
      checkimg: "/images/checkgreen-icon.svg",
      closeimg: "/images/closeRed.svg",
    },
  },
];


export default function RechargeWithdrawTable() {
  return (
    <div className="bg-white border border-gray-1000 rounded-lg ">
      <div className="border-b border-solid border-gray-1000 flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-3 justify-between sm:px-6 sm:pb-4.25 sm:pt-8.25 p-4">
        <h4 className="text-black-1200 font-neulis-sans font-normal text-lg leading-7">Transaction Logs</h4>
        <p className="text-gray-1200 font-neulis-sans font-normal text-sm leading-5">Showing 5 transactions</p>
      </div>
      <div className="overflow-x-auto">
        <table className="2xl:w-full w-341.25">
          <thead>
            <tr className="bg-gray-1500 border-b border-gray1600">
              <th className="px-4 py-3 text-left text-gray-1400 font-normal font-neulis-sans text-sm">Date</th>
              <th className="px-4 py-3 text-left text-gray-1400 font-normal font-neulis-sans text-sm">Student Name</th>
              <th className="px-4 py-3 text-left text-gray-1400 font-normal font-neulis-sans text-sm">Type</th>
              <th className="px-4 py-3 text-left text-gray-1400 font-normal font-neulis-sans text-sm">Wallet Type</th>
              <th className="px-4 py-3 text-left text-gray-1400 font-normal font-neulis-sans text-sm">Payment Method</th>
              <th className="px-4 py-3 text-left text-gray-1400 font-normal font-neulis-sans text-sm">Amount</th>
              <th className="px-4 py-3 text-left text-gray-1400 font-normal font-neulis-sans text-sm">Status</th>
              <th className="px-4 py-3 text-center text-gray-1400 font-normal font-neulis-sans text-sm">Actions</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((item) => (
              <tr key={item.id} className="border-b border-gray1600 hover:bg-gray1700/50 transition last:border-b-0">
                <td className="p-4 text-black13 font-neulis-sans font-normal text-sm leading-5">
                  {item.file.date}
                  <span className="block text-gray-1200 font-normal text-xs leading-4">
                    {item.file.time}
                  </span>
                </td>
                <td className="p-4 text-black13 font-neulis-sans font-normal text-sm leading-5">
                  {item.student.name}
                  <span className="block text-gray-1200 font-normal text-xs leading-4">
                    {item.student.sub}
                  </span>
                </td>
                <td className="p-4 text-black13 font-neulis-sans font-normal text-sm leading-5">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 flex items-center justify-center">
                      <Image src={item.type.icon} alt="" width={16} height={16} />
                    </span>
                    {item.type.name}
                  </div>
                </td>

                <td className="p-4 text-black13 font-neulis-sans font-normal text-[13.78px] leading-5">{item.wallet}</td>
                <td className="p-4 text-black13 font-neulis-sans font-normal text-[13.78px] leading-5">{item.payment}</td>
                <td className="p-4 text-black13 font-neulis-sans font-normal text-[13.78px] leading-5">
                  {item.amount.price}
                  <span className="text-gray-1200 font-neulis-sans font-normal text-xs leading-4 block">
                    {item.amount.sign}
                  </span>
                </td>

                <td className="p-4">
                  <span
                    className={`px-2.75 h-5.5 rounded-full text-xs font-normal font-neulis-sans inline-flex items-center justify-center ${statusConfig[item.status].classes}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-4">
                  <ul className="flex items-center justify-center gap-2">
                    {item.actions.eyesimg && (
                      <li>
                        <Link href="#" className="w-10 h-9 flex items-center justify-center rounded-md hover:bg-gray-1600 transition">
                          <Image src={item.actions.eyesimg} alt="" width={16} height={16} />
                        </Link>
                      </li>
                    )}
                    {item.actions.checkimg && (
                      <li>
                        <Link href="#" className="w-10 h-9 flex items-center justify-center rounded-md hover:bg-gray-1300">
                          <Image src={item.actions.checkimg} alt="" width={16} height={16} />
                        </Link>
                      </li>
                    )}

                    {item.actions.closeimg && (
                      <li>
                        <Link href="#" className="w-10 h-9 flex items-center justify-center rounded-md hover:bg-gray-1300">
                          <Image src={item.actions.closeimg} alt="" width={16} height={16} />
                        </Link>
                      </li>
                    )}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
