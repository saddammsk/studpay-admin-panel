"use client";

import Link from "next/link";
import Image from "next/image";

interface CaseItem {
  id: string;
  name: string;
  secret: string;
  created: string;
  time: string;
  status: "Active" | "inactive" | "revoked";
  action: string;
}

const cases: CaseItem[] = [
  {
    id: "1",
    name: "DB_Production_Key",
    secret: "sk_live_••••••••••••••••",
    created: "2025-01-15",
    time: "2 min ago",
    status: "Active",
    action: "/icons/dots-vertical.svg",
  },{
    id: "2",
    name: "HBL_Staging_Key",
    secret: "sk_test_••••••••••••••••",
    created: "2025-02-01",
    time: "1 hour ago",
    status: "Active",
    action: "/icons/dots-vertical.svg",
  },{
    id: "3",
    name: "MCB_Webhook_Secret",
    secret: "whsec_••••••••••••••••",
    created: "2024-12-20",
    time: "3 days ago",
    status: "inactive",
    action: "/icons/dots-vertical.svg",
  },{
    id: "4",
    name: "UBL_Legacy_Key",
    secret: "sk_live_••••••••••••••••",
    created: "2024-08-10",
    time: "30 days ago",
    status: "revoked",
    action: "/icons/dots-vertical.svg",
  },
];

const statusConfig: Record<string, string> = {
  Active: "bg-green59/10 border-green59/20 text-blue1700",
  inactive: "bg-gray-6200 border-grey5800 text-blue1700",
  revoked: "bg-red2100/10 border-red2100/20 text-blue1700",
};

export default function TransactionTable() {
  return (
    <div className="overflow-x-auto">
      <table className="lg:w-full w-200">
        <thead>
          <tr className="border-b border-solid border-grey-5400">
            <th className="p-4 tracking-[0.6px] text-left text-xs font-bold text-gray-5000 uppercase">
              Key Name
            </th>
            <th className="p-4 tracking-[0.6px] text-left text-xs font-bold text-gray-5000 uppercase">
              Secret
            </th>
            <th className="p-4 tracking-[0.6px] text-center text-xs font-bold text-gray-5000 uppercase">
              Created
            </th>
            <th className="p-4 tracking-[0.6px] text-left text-xs font-bold text-gray-5000 uppercase">
              Time
            </th>
            <th className="p-4 tracking-[0.6px] text-center text-xs font-bold text-gray-5000 uppercase">
              Status
            </th>
            <th className="p-4"></th>
          </tr>
        </thead>

        <tbody>
          {cases.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 hover:bg-gray-50 transition last:border-b-0"
            >
              <td className="px-4 py-5">
                <h4 className="text-blue1700 font-medium text-sm">
                  {item.name}
                </h4>
              </td>

              <td className="px-4 py-5">
                <span className="inline-flex items-center text-gray-5000 text-sm bg-gray-6200 rounded px-2 py-1">
                  {item.secret}
                </span>
              </td>

              <td className="px-4 py-5 text-gray-5000 text-xs">
                {item.created}
              </td>

              <td className="px-4 py-5 text-gray-5000 text-xs">
                {item.time}
              </td>

              <td className="p-4 text-center">
                <span
                  className={`px-2 h-5.5 text-xs font-semibold border rounded-full inline-flex items-center ${statusConfig[item.status]}`}
                >
                  {item.status}
                </span>
              </td>

              <td className="p-4">
                <Link
                  href="#"
                  className="flex items-center justify-center w-8 h-8"
                >
                  <Image
                    src={item.action}
                    width={16}
                    height={16}
                    alt="actions"
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}