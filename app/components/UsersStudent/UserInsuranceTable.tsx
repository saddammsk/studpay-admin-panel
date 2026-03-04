"use client";
import Image from "next/image";
import Link from "next/link";

interface Transaction {
  id: number;
  document: {
    name: string;
    sub: string;
  };
  type: string;
  issuedate: string;
  expiry: string;
  status: "Verified" | "Pending";
  icon?: string;      // Status icon
  eyesicon?: string;  // View icon
  downicon?: string;  // Download icon
}

const statusConfig = {
  Verified: "text-green54",
  Pending: "text-yellow1900",
} as const;

// Sample icons (replace with actual paths)
const transactions: Transaction[] = [
  {
    id: 1,
    document: {
      name: "Rights Certificate",
      sub: "Attestation de Droits",
    },
    type: "Health",
    issuedate: "Sept 1, 2024",
    expiry: "Aug 31, 2025",
    status: "Verified",
    icon: "/icons/check-icon3.svg",
    eyesicon: "/images/eye-icon.svg",
    downicon: "/icons/export-icon-4.svg",
  }, {
    id: 2,
    document: {
      name: "Insurance Card",
      sub: "Carte Vitale",
    },
    type: "Health",
    issuedate: "Jan 15, 2024",
    expiry: "Permanent",
    status: "Verified",
    icon: "/icons/check-icon3.svg",
    eyesicon: "/images/eye-icon.svg",
    downicon: "/icons/export-icon-4.svg",
  }, {
    id: 3,
    document: {
      name: "Housing Certificate",
      sub: "Attestation Habitation",
    },
    type: "Housing",
    issuedate: "Sept 1, 2024",
    expiry: "Aug 31, 2025",
    status: "Verified",
    icon: "/icons/check-icon3.svg",
    eyesicon: "/images/eye-icon.svg",
    downicon: "/icons/export-icon-4.svg",
  }, {
    id: 4,
    document: {
      name: "Liability Certificate",
      sub: "Attestation RC",
    },
    type: "Liability",
    issuedate: "Sept 1, 2024",
    expiry: "Aug 31, 2025",
    status: "Pending",
    icon: "/images/clock-yellow.svg",
    eyesicon: "/images/eye-icon.svg",
    downicon: "/icons/export-icon-4.svg",
  }, {
    id: 5,
    document: {
      name: "Payment Receipt - Q1",
      sub: "Quittance",
    },
    type: "Premium",
    issuedate: "Jan 5, 2025",
    expiry: "—",
    status: "Verified",
    icon: "/icons/check-icon3.svg",
    eyesicon: "/images/eye-icon.svg",
    downicon: "/icons/export-icon-4.svg",
  },
];

export default function UserInsuranceTable() {
  return (
    <div className="overflow-x-auto p-5">
      <table className="4xl:w-full w-187.5 border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Document</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Issue Date</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Expiry</th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Status</th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => (
            <tr key={item.id} className="border-b border-solid border-gray-1000 last:border-b-0">
              <td className="px-4 py-3">
                <h4 className="text-blue-1300 text-sm font-medium leading-5">{item.document.name}</h4>
                <span className="text-gray-1200 text-xs leading-4 block">{item.document.sub}</span>
              </td>
              <td className="px-4 py-3">
                <div className="inline-flex items-center justify-center bg-gray-1600 text-gray-1200 text-xs font-medium rounded-md h-6 px-2">
                  {item.type}
                </div>
              </td>
              <td className="px-4 py-3 text-gray-1200 text-sm leading-5 font-normal">{item.issuedate}</td>
              <td className="px-4 py-3 text-gray-1200 text-sm leading-5 font-normal">{item.expiry}</td>
              <td className="px-4 py-3 text-center">
                <div className="flex items-center justify-center gap-2">
                  {item.icon && (
                    <Image src={item.icon} width={16} height={16} alt="" />
                  )}
                  <span className={`text-xs leading-4 font-semibold ${statusConfig[item.status]}`}>
                    {item.status}
                  </span>
                </div>
              </td>
              <td className="px-4 py-3 text-center">
                <ul className="flex items-center justify-center gap-2">
                  {item.eyesicon && (
                    <li>
                      <Link
                        href="#"
                        className="flex items-center justify-center bg-white rounded-md h-8 w-8 hover:bg-gray-100"
                      >
                        <Image src={item.eyesicon} width={16} height={16} alt="View" />
                      </Link>
                    </li>
                  )}
                  {item.downicon && (
                    <li>
                      <Link
                        href="#"
                        className="flex items-center justify-center bg-white rounded-md h-8 w-8 hover:bg-gray-100"
                      >
                        <Image src={item.downicon} width={16} height={16} alt="Download" />
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
  );
}