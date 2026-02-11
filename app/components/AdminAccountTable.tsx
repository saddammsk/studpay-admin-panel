"use client";

import Link from "next/link";
import Image from "next/image";

type PaymentStatus = "Active" | "Suspended";

const statusConfig = {
  Active: {
    classes: "bg-blue-1000 text-white",
  },
  Suspended: {
    classes: "bg-red-1000 text-white",
  },
} as const;

const RoleConfig = {
  "Super Admin": {
    classes: "bg-lightred1200 text-red1200",
  },
  "Finance Manager": {
    classes: "bg-white-1000 text-blue200",
  },
  "Support Agent": {
    classes: "bg-green-1200 text-green-1100",
  },
  "Compliance Officer": {
    classes: "bg-blueNexus text-violet39",
  },
} as const;

type RoleConfigStatus = keyof typeof RoleConfig;

interface Actions {
  Editimg: string;
  UserXimg?: string;
  Deletimg?: string;
}

interface Payment {
  id: number;
  rafel: {
    name: string;
    sub: string;
  };
  email: string;
  login: string;
  status: PaymentStatus;
  role: RoleConfigStatus;
  actions: Actions;
}

const payments: Payment[] = [
  {
    id: 1,
    rafel: { name: "John Smith", sub: "JS" },
    email: "john.smith@studpay.com",
    role: "Super Admin",
    status: "Active",
    login: "2024-05-25 14:30",
    actions: {
      Editimg: "/images/edit-icon.svg",
      UserXimg: "/images/userx.svg",
      Deletimg: "/images/delet-icon1.svg",
    },
  },
  {
    id: 2,
    rafel: { name: "Sarah Johnson", sub: "SJ" },
    email: "sarah.j@studpay.com",
    role: "Finance Manager",
    status: "Active",
    login: "2024-05-25 09:15",
    actions: {
      Editimg: "/images/edit-icon.svg",
      UserXimg: "/images/userx.svg",
      Deletimg: "/images/delet-icon1.svg",
    },
  },
  {
    id: 3,
    rafel: { name: "Mike Chen", sub: "MC" },
    email: "mike.chen@studpay.com",
    role: "Support Agent",
    status: "Active",
    login: "2024-05-24 16:45",
    actions: {
      Editimg: "/images/edit-icon.svg",
      UserXimg: "/images/userx.svg",
      Deletimg: "/images/delet-icon1.svg",
    },
  },
  {
    id: 4,
    rafel: { name: "Lisa Rodriguez", sub: "LR" },
    email: "lisa.r@studpay.com",
    role: "Compliance Officer",
    status: "Suspended",
    login: "2024-05-20 11:22",
    actions: {
      Editimg: "/images/edit-icon.svg",
      UserXimg: "/images/userx.svg",
      Deletimg: "/images/delet-icon1.svg",
    },
  },
];

export default function KycDocumentTable() {
  return (
    <div className="bg-white border border-gray1600 rounded-xl shadow-4xl sm:p-6.25 p-4">
      <div className="mb-6">
        <h4 className="text-black13 font-normal text-2xl leading-6">
          Admin Accounts
        </h4>
      </div>

      <div className="overflow-x-auto">
        <table className="2xl:w-full w-250">
          <thead>
            <tr className="border-b border-gray1600">
              <th className="px-4 py-3 text-left text-[13.67px] font-normal text-gray-1400">
                Admin
              </th>
              <th className="px-4 py-3 text-left text-[13.67px] font-normal text-gray-1400">
                Email
              </th>
              <th className="px-4 py-3 text-left text-[13.67px] font-normal text-gray-1400">
                Role
              </th>
              <th className="px-4 py-3 text-left text-[13.67px] font-normal text-gray-1400">
                Status
              </th>
              <th className="px-4 py-3 text-left text-[13.67px] font-normal text-gray-1400">
                Last Login
              </th>
              <th className="px-4 py-3 text-left text-[13.67px] font-normal text-gray-1400">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {payments.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray1600 hover:bg-gray1700/50 transition"
              >
                <td className="px-4 py-4.5">
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-1000 w-8 h-8 flex items-center justify-center rounded-full text-white font-neulis-sans font-normal text-sm leading-5">{item.rafel.sub}</span>
                    <span className="text-black13 font-neulis-sans font-normal text-sm leading-5">
                      {item.rafel.name}
                    </span>
                  </div>
                </td>

                <td className="px-4 py-4.5 text-black13 font-neulis-sans font-normal text-[13.89px] leading-5">
                  {item.email}
                </td>

                <td className="px-4 py-4.5">
                  <span
                    className={`text-xs font-neulis-sans font-normal leading-4 h-5.5 px-2.75 rounded-full inline-flex items-center justify-center ${RoleConfig[item.role].classes}`}
                  >
                    {item.role}
                  </span>
                </td>

                <td className="px-4 py-4.5">
                  <span
                    className={`text-xs font-neulis-sans font-normal leading-4 h-5.5 px-2.75 rounded-full inline-flex items-center justify-center ${statusConfig[item.status].classes}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-4 py-4.5 text-gray-1200 font-neulis-sans font-normal text-sm leading-5">{item.login}</td>

                <td className="px-4 py-4.5">
                  <ul className="flex items-center gap-2">
                    <li>
                      <Link
                        href="#"
                        className="w-10.5 h-9 flex items-center justify-center rounded-md border border-solid border-gray1600 hover:bg-gray-1600 transition"
                      >
                        <Image
                          src={item.actions.Editimg}
                          alt="Edit"
                          width={16}
                          height={16}
                        />
                      </Link>
                    </li>  
                    <li>
                      <Link
                        href="#"
                        className="w-10.5 h-9 flex items-center justify-center rounded-md border border-solid border-gray1600 hover:bg-gray-1600 transition"
                      >
                        <Image
                          src={item.actions.UserXimg!}
                          alt="User"
                          width={16}
                          height={16}
                        />
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="#"
                        className="w-10.5 h-9 flex items-center justify-center rounded-md border border-solid border-gray1600 hover:bg-gray-1600 transition"
                      >
                        <Image
                          src={item.actions.Deletimg!}
                          alt="Delet"
                          width={16}
                          height={16}
                        />
                      </Link>
                    </li>
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
