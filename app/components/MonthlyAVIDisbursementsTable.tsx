"use client";

import Link from "next/link";
import Image from "next/image";

type PaymentStatus = "Paid" | "Scheduled" | "Failed";
type actionStatus = "Paid" | "Scheduled" | "Retry";



interface Payment {
  id: number;
  name: string;
  email: string;
  country: string;
  amount: string;
  payment: string;
  status: PaymentStatus;
  actions: actionStatus;
}

const statusConfig = {
  Paid: {
    classes: "bg-white-1000 text-green12",
  },
  Scheduled: {
    classes: "bg-white-1000 text-blue200",
  },
  Failed: {
    classes: "bg-lightred1200 text-red1200",
  },
} as const;

const actionConfig: Record<actionStatus, {
  label: string;
  icon: string;
  className?: string;
}[]> = {
  Paid: [
    {
      label: "Timeline",
      icon: "/images/eyes-icon.svg",
    },
    {
      label: "Pause",
      icon: "/images/Pause.svg",
      className: "text-red1300",
    },
  ],

  Scheduled: [
    {
      label: "Timeline",
      icon: "/images/eyes-icon.svg",
    },
    {
      label: "Pause",
      icon: "/images/pause-icon.svg",
    },
  ],

  Retry: [
    {
      label: "Timeline",
      icon: "/images/eyes-icon.svg",
    },
    {
      label: "Retry",
      icon: "/images/Retry-icon.svg",
      className: "text-green-1000",
    },
  ],
};


const payments: Payment[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@email.com",
    country: "Germany",
    amount: "€450.00",
    payment: "Jan 15, 2024",
    status: "Paid",
    actions: "Paid",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@email.com",
    country: "France",
    amount: "€520.00",
    payment: "Jan 20, 2024",
    status: "Scheduled",
    actions: "Paid",
  },
  {
    id: 3,
    name: "Carol Davis",
    email: "carol.davis@email.com",
    country: "Netherlands",
    amount: "€480.00",
    payment: "Jan 10, 2024",
    status: "Failed",
    actions: "Retry",
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david.wilson@email.com",
    country: "Spain",
    amount: "€380.00",
    payment: "Jan 25, 2024",
    status: "Paid",
    actions: "Paid",
  },
  {
    id: 5,
    name: "Emma Brown",
    email: "emma.brown@email.com",
    country: "Italy",
    amount: "€420.00",
    payment: "Jan 30, 2024",
    status: "Scheduled",
    actions: "Paid",
  },
];

export default function MonthlyAVIDisbursementsTable() {
  return (
    <div className="bg-white border border-gray1600 rounded-xl shadow-4xl md:p-6 p-4">
      <div className="flex items-center gap-2 md:pb-6 pb-4">
        <Image src="/images/doller-icon.svg" alt="" width={20} height={20} />
        <h4 className="text-black13 font-neulis-sans text-lg">
          AVI Disbursements (5)
        </h4>
      </div>

      <div className="overflow-x-auto">
        <table className="2xl:w-full w-341.25">
          <thead>
            <tr className="border-b border-gray1600">
              <th className="px-4 py-3 font-neulis-sans font-normal text-sm leading-5 text-left text-gray-1400">Student Name</th>
              <th className="px-4 py-3 font-neulis-sans font-normal text-sm leading-5 text-left text-gray-1400">Email</th>
              <th className="px-4 py-3 font-neulis-sans font-normal text-sm leading-5 text-left text-gray-1400">Country</th>
              <th className="px-4 py-3 font-neulis-sans font-normal text-sm leading-5 text-left text-gray-1400">Monthly Amount</th>
              <th className="px-4 py-3 font-neulis-sans font-normal text-sm leading-5 text-left text-gray-1400">Payment Date</th>
              <th className="px-4 py-3 font-neulis-sans font-normal text-sm leading-5 text-left text-gray-1400">Status</th>
              <th className="px-4 py-3 font-neulis-sans font-normal text-sm leading-5 text-left text-gray-1400">Actions</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray1600 hover:bg-gray1700/50 transition"
              >
                <td className="py-6 px-4 text-black13 font-neulis-sans font-normal text-sm leading-5">
                  {item.name}
                </td>
                <td className="py-6 px-4 text-gray-1100 font-neulis-sans font-normal text-sm leading-5">
                  <div className="flex items-center gap-2">
                    {item.email}
                  </div>
                </td>

                {/* Country Type */}
                <td className="py-6 px-4 text-black13 font-neulis-sans font-normal text-sm leading-5">
                  {item.country}
                </td>

                {/* Amount */}
                <td className="py-6 px-4 text-black13 font-neulis-sans font-normal text-lg leading-7">
                  {item.amount}
                </td>

                {/* Payment Date */}
                <td className="py-6 px-4 text-black13 font-neulis-sans font-normal text-sm leading-5">
                  {item.payment}

                </td>

                {/* Status */}
                <td className="py-6 px-4">
                  <span
                    className={`px-3 h-6 inline-flex items-center rounded-full text-xs font-normal leading-4 ${statusConfig[item.status].classes}`}
                  >
                    {item.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="py-6 px-4">
                  <ul className="flex items-center gap-2">
                    {actionConfig[item.actions]
                      .filter((action) => {
                        // Remove "Pause" button for first row and second last row
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
                            className={`inline-flex items-center gap-2 rounded-md h-9 px-3 border border-solid border-gray1600 hover:bg-white transition ${action.className}`}
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
