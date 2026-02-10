"use client";

import Link from "next/link";
import Image from "next/image";

type ActionStatus = "Edit";
type PaymentStatus = "Active" | "Pending" | "Inactive";

interface Payment {
  id: number;
  partner: {
    icon: string;
    title: string;
    linkIcon: string;
    linkText: string;
  };
  type: {
    icon: string;
    name: string;
  };
  country: string;
  contact: string;
  student: string;
  status: PaymentStatus;
  actions: ActionStatus;
}

const statusConfig = {
  Active: { classes: "bg-green-1200 text-green-1100" },
  Pending: { classes: "bg-white-1000 text-blue-1000" },
  Inactive: { classes: "bg-gray1700 text-blueNexus13" },
} as const;

const actionConfig: Record<ActionStatus, {
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
      label: "Suspend",
      icon: "/images/userXBlue.svg",
      className: "text-blue-1000",
    },
    {
      label: "Remove",
      icon: "/images/delet-icon1.svg",
      className: "text-red1300 border-red1300 bg-red1300/10",
    },
  ],
};

const payments: Payment[] = [
  {
    id: 1,
    partner: {
      icon: "/images/building-icon.svg",
      title: "UniLodge Student Accommodation",
      linkIcon: "/images/linkIcon.svg",
      linkText: "Visit Website",
    },
    type: { icon: "/images/building-icon.svg", name: "Housing" },
    country: "United Kingdom",
    contact: "partnerships@unilodge.com",
    student: "2,450",
    status: "Active",
    actions: "Edit",
  },
  {
    id: 2,
    partner: {
      icon: "/images/shield-blue.svg",
      title: "Allianz Care International",
      linkIcon: "/images/linkIcon.svg",
      linkText: "Visit Website",
    },
    type: { icon: "/images/shield-blue.svg", name: "insurance" },
    country: "Germany",
    contact: "student@allianzcare.com",
    student: "1,680",
    status: "Active",
    actions: "Edit",
  },
  {
    id: 3,
    partner: {
      icon: "/images/building-icon.svg",
      title: "Student Housing Company",
      linkIcon: "/images/linkIcon.svg",
      linkText: "Visit Website",
    },
    type: { icon: "/images/building-icon.svg", name: "housing" },
    country: "United States",
    contact: "info@studenthousing.com",
    student: "890",
    status: "Pending",
    actions: "Edit",
  },
  {
    id: 4,
    partner: {
      icon: "/images/shield-blue.svg",
      title: "Campus Cover Insurance",
      linkIcon: "/images/linkIcon.svg",
      linkText: "Visit Website",
    },
    type: { icon: "/images/shield-blue.svg", name: "insurance" },
    country: "Australia",
    contact: "support@campuscover.com.au",
    student: "1,200",
    status: "Inactive",
    actions: "Edit",
  },
  {
    id: 5,
    partner: {
      icon: "/images/building-icon.svg",
      title: "Uniplaces Student Housing",
      linkIcon: "/images/linkIcon.svg",
      linkText: "Visit Website",
    },
    type: { icon: "/images/building-icon.svg", name: "housing" },
    country: "France",
    contact: "partners@uniplaces.com",
    student: "3,100",
    status: "Active",
    actions: "Edit",
  },
];

export default function StudentDiscountsOffersTable() {
  return (
    <div className="bg-white shadow-4xl border border-gray1600 rounded-xl">
      <div className="border-b border-gray1600 p-4">
        <h4 className="text-blue-1200 text-lg">Partners (5)</h4>
        <span className="text-gray1900 text-xs">Showing 5 offers</span>
      </div>

      <div className="overflow-x-auto">
        <table className="2xl:w-full w-325">
          <thead>
            <tr className="border-b border-gray1600 bg-gray2000">
              <th className="p-4 py-1 bg-gray2000 text-left font-normal text-blue-1200 font-segoe text-sm leading-5">Partner</th>
              <th className="p-4 py-1 bg-gray2000 text-left font-normal text-blue-1200 font-segoe text-sm leading-5">Type</th>
              <th className="p-4 py-1 bg-gray2000 text-left font-normal text-blue-1200 font-segoe text-sm leading-5">Country</th>
              <th className="p-4 py-1 bg-gray2000 text-left font-normal text-blue-1200 font-segoe text-sm leading-5">Contact</th>
              <th className="p-4 py-1 bg-gray2000 text-left font-normal text-blue-1200 font-segoe text-sm leading-5">Students Served</th>
              <th className="p-4 py-1 bg-gray2000 text-left font-normal text-blue-1200 font-segoe text-sm leading-5">Status</th>
              <th className="p-4 py-1 bg-gray2000 text-left font-normal text-blue-1200 font-segoe text-sm leading-5">Actions</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((item) => (
              <tr key={item.id} className="border-b border-gray1600 hover:bg-gray1700/50">
                {/* Partner */}
                <td className="p-4 text-blue-1200 font-segoe font-normal text-sm leading-5">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white-1000">
                      <Image src={item.partner.icon} alt="" width={16} height={16} />
                    </span>
                    <div className="flex-1 w-full">
                      {item.partner.title}
                      <Link href="#" className="flex mt-1 gap-1 text-xs text-blue-1000">
                        <Image src={item.partner.linkIcon} alt="" width={12} height={12} />
                        {item.partner.linkText}
                      </Link>
                    </div>
                  </div>
                </td>

                {/* Type */}
                <td className="p-4 text-blueNexus12 font-segoe font-normal text-[13.89px] leading-5">
                  <span className=" flex gap-2">
                    <Image src={item.type.icon} alt="" width={16} height={16} />
                    {item.type.name}
                  </span>
                </td>

                {/* Country */}
                <td className="p-4 text-blueNexus12 font-segoe font-normal text-[13.89px] leading-5">{item.country}</td>

                {/* Contact */}
                <td className="p-4 text-blue-1200 font-segoe font-normal text-sm leading-5">{item.contact}</td>

                {/* Students */}
                <td className="p-4 text-blue-1200 font-segoe font-normal text-sm leading-5">{item.student}</td>

                {/* Status */}
                <td className="p-4">
                  <span className={`px-2.75 h-5.5 rounded-full inline-flex items-center justify-center text-xs font-normal font-segoe ${statusConfig[item.status].classes}`}>
                    {item.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="p-4">
                  <div className="flex justify-end gap-2">
                    {actionConfig[item.actions].map((action, index) => (
                      <Link
                        key={index}
                        href="#"
                        className={`flex items-center justify-center gap-3 px-3.25 h-9 text-sm font-normal font-segoe rounded-[10px] border border-solid ${action.className}`}
                      >
                        <Image src={action.icon} alt="" width={16} height={16} />
                        {action.label}
                      </Link>
                    ))}
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
