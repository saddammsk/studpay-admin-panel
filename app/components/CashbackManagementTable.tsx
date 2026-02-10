"use client";

import Link from "next/link";
import Image from "next/image";

type actionStatus = "Paid" | "Scheduled" | "Reject";

type PaymentStatus = "Paid" | "Approved" | "Pending";



interface Payment {
  id: number;
  referrer: {
    name: string;
    email: string;
  };
  student: {
    name: string;
    icon: string;
  };
  amount: string;
  date: string;
  status: PaymentStatus;
  actions: actionStatus;
}

const statusConfig = {
  Paid: {
    classes: "bg-green-1200 border-lightgreen13 text-green-1100",
  },
  Approved: {
    classes: "bg-white-1000 border-blue300 text-blue-1000",
  },
  Pending: {
    classes: "bg-yellow1200 border-yellow1300 text-brown1200",
  },
} as const;



const actionConfig: Record<actionStatus, {
  label: string;
  icon: string;
  className?: string;
}[]> = {
  Reject: [
    {
      label: "View Details",
      icon: "/images/eyes-icon.svg",
    },
    {
      label: "Reject",
      icon: "/images/cross-red.svg",
      className: "text-red1300 border-red1400",
    },
  ],

  Paid: [
    {
      label: "View Details",
      icon: "/images/eyes-icon.svg",
    },
  ],

  Scheduled: [
    {
      label: "View Details",
      icon: "/images/eyes-icon.svg",
    },
    {
      label: "Mark as Paid",
      icon: "/images/checkgreendark.svg",
      className: "text-green-1000 border-lightgreen13 bg-white",
    },
  ],
};


const payments: Payment[] = [
  {
    id: 1,
    referrer: { name: "Maria Garcia", email: "maria.garcia@email.com", },
    student: { name: "Referral", icon: "/images/source-icon.png", },
    amount: "EUR 25.00",
    date: "May 20, 2024",
    status: "Pending",
    actions: "Reject",
  },
  {
    id: 2,
    referrer: { name: "Ahmed Hassan", email: "ahmed.hassan@email.com", },
    student: { name: "Housing", icon: "/images/housing.png", },
    amount: "EUR 50.00",
    date: "May 18, 2024",
    status: "Approved",
    actions: "Scheduled",
  },
  {
    id: 3,
    referrer: { name: "Li Wei", email: "li.wei@email.com", },
    student: { name: "Card Spend", icon: "/images/card-spend.png", },
    amount: "EUR 15.75",
    date: "May 15, 2024",
    status: "Paid",
    actions: "Paid",
  },
  {
    id: 4,
    referrer: { name: "Sophie Martin", email: "sophie.martin@email.com", },
    student: { name: "Partner Offer", icon: "/images/partner-icon.png", },
    amount: "EUR 35.00",
    date: "May 14, 2024",
    status: "Approved",
    actions: "Scheduled",
  },
];


export default function CashbackManagementTable() {
  return (
    <div className="bg-white border border-gray-1000 rounded-lg sm:pt-4.25 sm:px-6.25 sm:pb-6.25 p-4">
      <div className="flex items-center gap-2 sm:pb-6 pb-4">
        <h4 className="text-black-1200 font-neulis-sans font-normal text-lg leading-7">Cashback Records</h4>
        <span className="inline-flex items-center text-blue-1000 font-normal text-xs leading-4 tracking-[-0.6px] bg-gray-1300 border border-solid border-gray1600 rounded-full h-5.5 px-3">4 records</span>
      </div>
      <div className="overflow-x-auto">
        <table className="2xl:w-full w-341.25">
          <thead>
            <tr className=" border-b border-solid border-gray1600">
              <th className="px-4 py-3 text-left text-gray-1400 font-normal leading-5 font-neulis-sans text-sm">Student</th>
              <th className="px-4 py-3 text-left text-gray-1400 font-normal leading-5 font-neulis-sans text-sm">Source</th>
              <th className="px-4 py-3 text-left text-gray-1400 font-normal leading-5 font-neulis-sans text-sm">Amount Earned</th>
              <th className="px-4 py-3 text-left text-gray-1400 font-normal leading-5 font-neulis-sans text-sm">Date Credited</th>
              <th className="px-4 py-3 text-left text-gray-1400 font-normal leading-5 font-neulis-sans text-sm">Status</th>
              <th className="px-4 py-3 text-right text-gray-1400 font-normal leading-5 font-neulis-sans text-sm">Actions</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray1600 hover:bg-gray1700/50 transition"
              >
                <td className="p-4 text-black-1200 font-neulis-sans font-normal text-sm leading-5">
                  {item.referrer.name}
                  <span className="block text-gray-1200">
                    {item.referrer.email}
                  </span>
                </td>
                <td className="p-4 text-black13 font-neulis-sans font-normal text-sm leading-5">
                  <div className="flex items-center gap-2">
                    <Image src={item.student.icon} alt={item.student.name} width={16} height={16} />
                    {item.student.name}
                  </div>
                </td>

                {/* Amount Earned */}
                <td className="p-4 text-black-1200 font-neulis-sans font-normal text-sm leading-5">
                  {item.amount}
                </td>

                {/* Date Credited */}
                <td className="p-4 text-gray-1100 font-neulis-sans font-normal text-sm leading-5">
                  {item.date}
                </td>

                {/* Status */}
                <td className="p-4">
                  <span
                    className={`px-2.75 h-5.5 inline-flex items-center border border-solid rounded-full text-xs font-normal leading-4 ${statusConfig[item.status].classes}`}
                  >
                    {item.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="py-6 px-4">
                  <ul className="flex items-center justify-end gap-2">
                    {actionConfig[item.actions]
                      .filter((action) => {
                        if (
                          (item.id === 1 || item.id === payments[payments.length - 2].id) &&
                          action.label === "Pause"
                        ) {
                          return false;
                        }
                        return true;
                      })
                      .map((action, index) => (
                        <li key={index}>
                          <Link
                            href="#"
                            className={`inline-flex items-center gap-2 rounded-[10px] h-9 px-3.25 text-black13 font-neulis-sans text-sm leading-5 border border-solid border-gray1600 hover:bg-white transition ${action.className}`}
                          >
                            <Image src={action.icon} alt={action.label} width={16} height={16} />
                            {action.label}
                          </Link>
                        </li>
                      ))}
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
