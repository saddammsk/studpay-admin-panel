"use client";

import Link from "next/link";
import Image from "next/image";

type actionStatus = "Scheduled" | "Edit";


type PaymentStatus = "Active" | "Scheduled" | "Expired";
type OfferStatus = "Housing" | "Insurance" | "Retail" | "Education";



interface Payment {
  id: number;
  title: string;
  partner: string;
  offer: OfferStatus;
  duration: {
    date: string;
    time: string;
  };
  discount: string;
  status: PaymentStatus;
  actions: actionStatus;
}

const statusConfig = {
  Active: {
    classes: "bg-green-1200 text-green-1100",
  },
  Scheduled: {
    classes: "bg-white-1000 text-blue200",
  },
  Expired: {
    classes: "bg-gray-1600 text-blue-1100",
  },
} as const;

const OfferConfig = {
  Housing: {
    classes: "bg-gray-1300 border-blue300 text-blue800",
  },
  Insurance: {
    classes: "bg-lightgreen16 border-lightgreen13 text-green14",
  },
  Retail: {
    classes: "bg-purple13 border-purpal12 text-purple12",
  },
  Education: {
    classes: "bg-brownNx13 border-orange83 text-brownNx12",
  },
} as const





const actionConfig: Record<actionStatus, {
  label: string;
  icon: string;
  className?: string;
}[]> = {
  Edit: [
    {
      label: "Edit",
      icon: "/images/edit-icon.svg",
      className: "bg-blue-1000 text-white",
    },
    {
      label: "Deactivate",
      icon: "/images/switch-icon.svg",
      className: "text-red-1200 border-red-1200/10 bg-red-1200/10",
    },
    {
      label: "Delete",
      icon: "/images/delete-icon.svg",
      className: "text-blue-1000",
    },
  ],

  Scheduled: [
    {
      label: "Edit",
      icon: "/images/edit-icon.svg",
      className: "bg-blue-1000 text-white",
    },
    {
      label: "Delete",
      icon: "/images/delete-icon.svg",
      className: "text-blue-1000",
    },
  ],
};


const payments: Payment[] = [
  {
    id: 1,
    title: "Student Housing Discount",
    partner: "UniLodgers",
    offer: "Housing",
    duration: { date: "5/1/2024", time: "to 12/31/2024", },
    discount: "15%",
    status: "Active",
    actions: "Edit",
  },
  {
    id: 2,
    title: "Health Insurance for Students",
    partner: "Allianz Insurance",
    offer: "Insurance",
    duration: { date: "6/1/2024", time: "to 11/30/2024", },
    discount: "€50",
    status: "Active",
    actions: "Edit",
  },
  {
    id: 3,
    title: "Premium Music Streaming",
    partner: "Spotify Premium",
    offer: "Retail",
    duration: { date: "7/1/2024", time: "to 9/30/2024", },
    discount: "50%",
    status: "Scheduled",
    actions: "Scheduled",
  },
  {
    id: 4,
    title: "Online Course Discount",
    partner: "Coursera",
    offer: "Education",
    duration: { date: "3/1/2024", time: "to 5/20/2024", },
    discount: "30%",
    status: "Expired",
    actions: "Scheduled",
  },
  {
    id: 5,
    title: "Student Accommodation Deal",
    partner: "Uniplaces",
    offer: "Housing",
    duration: { date: "5/15/2024", time: "to 12/15/2024", },
    discount: "€100",
    status: "Active",
    actions: "Edit",
  },
];


export default function StudentDiscountsOffersTable() {
  return (
    <div className="bg-white shadow-44xl border border-gray1600 rounded-xl">
      <div className="block border-b border-solid border-gray1600 sm:p-6 p-4">
        <h4 className="text-blue-1200 font-segoe font-normal text-lg leading-7 mb-1">Student Discounts & Offers</h4>
        <span className="inline-flex items-center text-gray1900 font-segoe font-normal text-xs leading-5">Showing 5 offers</span>
      </div>
      <div className="overflow-x-auto">
        <table className="2xl:w-full w-341.25">
          <thead>
            <tr className=" border-b border-solid border-gray1600">
              <th className="px-4 py-3 text-left text-black13 font-normal leading-5 font-neulis-sans text-sm">Offer Title</th>
              <th className="px-4 py-3 text-left text-black13 font-normal leading-5 font-neulis-sans text-sm">Partner Name</th>
              <th className="px-4 py-3 text-left text-black13 font-normal leading-5 font-neulis-sans text-sm">Offer Type</th>
              <th className="px-4 py-3 text-left text-black13 font-normal leading-5 font-neulis-sans text-sm">Duration</th>
              <th className="px-4 py-3 text-left text-black13 font-normal leading-5 font-neulis-sans text-sm">Discount</th>
              <th className="px-4 py-3 text-left text-black13 font-normal leading-5 font-neulis-sans text-sm">Status</th>
              <th className="px-4 py-3 text-right text-black13 font-normal leading-5 font-neulis-sans text-sm">Actions</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((item) => (
              <tr
                key={item.id}
                className="last:border-b-0 border-b border-gray1600 hover:bg-gray1700/50 transition"
              >
                <td className="px-4 py-4.5 text-blue-1200 font-segoe font-normal text-sm leading-5">
                  {item.title}

                </td>
                <td className="px-4 py-4.5 text-blue-1200 font-segoe font-normal text-sm leading-5">
                  <div className="flex items-center gap-2">
                    {item.partner}
                  </div>
                </td>

                {/* Offer Type */}
                <td className="px-4 py-4.5">
                  <span
                    className={`px-2.75 h-5.5 inline-flex items-center border border-solid rounded-full text-xs font-normal leading-4 ${OfferConfig[item.offer].classes}`}
                  >
                    {item.offer}
                  </span>
                </td>


                <td className="px-4 py-4.5 text-blue-1200 font-segoe font-normal text-[13.56px] leading-5">
                  {item.duration.date}
                  <span className="block text-gray-1400">
                    {item.duration.time}
                  </span>
                </td>

                {/* Date Credited */}
                <td className="px-4 py-4.5 text-blue-1200 font-segoe font-normal text-sm leading-5">
                  {item.discount}
                </td>

                {/* Status */}
                <td className="p-4">
                  <span
                    className={`px-2.75 h-5.5 inline-flex items-center rounded-full text-xs font-normal leading-4 ${statusConfig[item.status].classes}`}
                  >
                    {item.status}
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
                            className={`inline-flex items-center gap-3 rounded-[10px] h-9 px-3.25 font-segoe text-sm font-normal leading-5 border border-solid border-blue-1000 transition ${action.className}`}
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
