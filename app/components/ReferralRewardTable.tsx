"use client";

import Link from "next/link";
import Image from "next/image";

type actionStatus = "Paid" | "Scheduled";

type PaymentStatus = "Paid" | "Approved" | "Pending";
type rewardstatus = "Cash" | "Bonus Credit" | "Voucher";



interface Payment {
  id: number;
  referrer: {
    name: string;
    email: string;
  };
  student: {
    name: string;
    email: string;
  };
  date: string;
  reward: string;
  rewardstatus: rewardstatus;
  status: PaymentStatus;
  actions: actionStatus;
}

const statusConfig = {
  Paid: {
    classes: "bg-green-1200 text-green-1100",
  },
  Approved: {
    classes: "bg-white-1000 text-blue200",
  },
  Pending: {
    classes: "bg-white-1000 text-blue200",
  },
} as const;

const rewardStatusConfig = {
  Cash: {
    classes: "bg-lightgreen16 border-lightgreen13 text-green14",
  },
  "Bonus Credit": {
    classes: "bg-gray-1300 border-blue300 text-blue800",
  },
  Voucher: {
    classes: "bg-gray-1300 border-blue300 text-blue800",
  },
} as const;


const actionConfig: Record<actionStatus, {
  label: string;
  icon: string;
  className?: string;
}[]> = {
  Paid: [
    {
      label: "View Profile",
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
      label: "View Profile",
      icon: "/images/eyes-icon.svg",
    },
    {
      label: "Mark as Paid",
      icon: "/images/card-green.svg",
      className: "text-green-1000 border-green-1000 bg-green-1000/10",
    },
  ], 
};


const payments: Payment[] = [
  {
    id: 1,
    referrer: { name: "Sarah Johnson", email: "sarah.j@email.com", },
    student: { name: "Mike Chen", email: "mike.chen@email.com", },
    date: "5/20/2024",
    reward: "€25",
    status: "Paid",
    rewardstatus: "Cash",
    actions: "Paid",
  },
  {
    id: 2,
    referrer: { name: "Alex Rodriguez", email: "alex.r@email.com", },
    student: { name: "Emma Wilson", email: "emma.w@email.com", },
    date: "5/18/2024",
    reward: "15%",
    status: "Approved",
    rewardstatus: "Bonus Credit",
    actions: "Scheduled",
  },
  {
    id: 3,
    referrer: { name: "David Park", email: "david.p@email.com", },
    student: { name: "Lisa Brown", email: "lisa.b@email.com", },
    date: "5/15/2024",
    reward: "€30",
    status: "Pending",
    rewardstatus: "Voucher",
    actions: "Scheduled",
  },
  {
    id: 4,
    referrer: { name: "Maria Santos", email: "maria.s@email.com", },
    student: { name: "John Smith", email: "john.s@email.com", },
    date: "5/12/2024",
    reward: "€25",
    status: "Paid",
    rewardstatus: "Cash",
    actions: "Paid",
  },
 {
    id: 5,
    referrer: { name: "Ahmed Hassan", email: "ahmed.h@email.com", },
    student: { name: "Sophie Martin", email: "sophie.m@email.com", },
    date: "5/10/2024",
    reward: "20%",
    status: "Approved",
    rewardstatus: "Bonus Credit",
    actions: "Scheduled",
  },
];

export default function ReferralRewardTable() {
  return (
    <div className="bg-white border border-gray1600 rounded-xl shadow-45xl">
      <div className="p-6">
        <h4 className="text-blue-1200 font-segoe font-normal leading-7 text-lg mb-1">
          Referrals & Rewards Data
        </h4>
        <span className="text-gray1900 font-segoe font-normal text-sm leading-5 block">Showing 5 referrals</span>
      </div>

      <div className="overflow-x-auto">
        <table className="2xl:w-full w-341.25">
          <thead>
            <tr className="border-b border-gray1600">
              <th className="px-4 py-.5 font-segoe font-normal text-sm leading-5 text-left text-black13">Referrer</th>
              <th className="px-4 py-3.5 font-segoe font-normal text-sm leading-5 text-left text-black13">Referred Student</th>
              <th className="px-4 py-3.5 font-segoe font-normal text-sm leading-5 text-left text-black13">Referral Date</th>
              <th className="px-4 py-3.5 font-segoe font-normal text-sm leading-5 text-left text-black13">Reward Earned</th>
              <th className="px-4 py-3.5 font-segoe font-normal text-sm leading-5 text-left text-black13">Status</th>
              <th className="px-4 py-3.5 font-segoe font-normal text-sm leading-5 text-left text-black13">Reward Type</th>
              <th className="px-4 py-3.5 font-segoe font-normal text-sm leading-5 text-right text-black13">Actions</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray1600 hover:bg-gray1700/50 transition"
              >
                <td className="p-4 text-blue-1200 font-segoe font-normal text-sm leading-5">
                  {item.referrer.name}
                  <span className="block text-gray-1400">
                    {item.referrer.email}
                  </span>
                </td>
                <td className="p-4 text-blue-1200 font-segoe font-normal text-sm leading-5">
                  {item.student.name}
                  <span className="block text-gray-1400">{item.student.email}</span>
                </td>

                {/* Referral Date */}
                <td className="p-4 text-blue-1200 font-segoe font-normal text-sm leading-5">
                  {item.date}
                </td>

                {/* Amount */}
                <td className="p-4 text-blue-1200 font-segoe font-normal text-sm leading-5">
                  {item.reward}
                </td>

                {/* Status */}
                <td className="p-4">
                  <span
                    className={`px-3 h-6 inline-flex items-center rounded-full text-xs font-normal leading-4 ${statusConfig[item.status].classes}`}
                  >
                    {item.status}
                  </span>
                </td>

                {/* reward Type */}
                <td className="py-6 px-4">
                  <span
                    className={`px-3 h-5.5 inline-flex border border-solid items-center rounded-full text-xs font-normal leading-4 ${rewardStatusConfig[item.rewardstatus].classes}`}
                  >
                    {item.rewardstatus}
                  </span>
                </td>

                {/* Actions */}
                <td className="py-6 px-4">
                  <ul className="flex items-center justify-end gap-2">
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
