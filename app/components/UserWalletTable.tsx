import Link from "next/link";
import Image from "next/image";

type PaymentStatus = "Active" | "Suspended";

interface Actions {
  eyesimg: string;
}

interface Payment {
  id: number;
  name: string;
  email: string;
  document: string;
  balance: string;
  currency: string;
  activity: string;
  documenticon: string;
  status: PaymentStatus;
  actions: Actions;
}

const statusConfig = {
  Active: {
    classes: "bg-blue-1000 text-white",
  },
  Suspended: {
    classes: "bg-red-1000 text-white",
  },
} as const;

const payments: Payment[] = [
  {
    id: 1,
    name: "Emma Johnson",
    email: "emma.johnson@university.edu",
    document: "Main",
    documenticon: "/images/document-icon.svg",
    balance: "2,450.00",
    currency: "EUR",
    activity: "2024-01-15",
    status: "Active",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
];

export default function UserWalletTable() {
  return (
    <div className="bg-white border border-gray-1600 rounded-xl shadow-4xl md:p-6 p-4">
      <div className="flex items-center gap-2 md:pb-6 pb-4 border-b border-gray-1600">
        <Image src="/images/wallet-icon.svg" alt="" width={20} height={20} />
        <h4 className="text-black13 font-semibold text-2xl">
          User Wallets (5)</h4>
      </div>

      <div className="overflow-x-auto">
        <table className="2xl:w-full w-341.25">
          <thead>
            <tr className="border-b border-gray1600">
              <th className="px-4 py-3.5 text-left font-medium text-sm text-gray-1400">Student Name</th>
              <th className="px-4 py-3.5 text-left font-medium text-sm text-gray-1400">Email</th>
              <th className="px-4 py-3.5 text-left font-medium text-sm text-gray-1400">Wallet Type</th>
              <th className="px-4 py-3.5 text-left font-medium text-sm text-gray-1400">Balance</th>
              <th className="px-4 py-3.5 text-left font-medium text-sm text-gray-1400">Currency</th>
              <th className="px-4 py-3.5 text-left font-medium text-sm text-gray-1400">Last Activity</th>
              <th className="px-4 py-3.5 text-left font-medium text-sm text-gray-1400">Status</th>
              <th className="px-4 py-3.5 text-left font-medium text-sm text-gray-1400">Actions</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((item) => (
              <tr key={item.id} className="border-b border-gray1600 hover:bg-gray1700/50 transition">
                <td className="p-4">{item.name}</td>
                <td className="p-4 text-gray-1100">{item.email}</td>

                <td className="p-4 flex items-center gap-2 text-black13 text-sm leading-5 font-normal">
                   <Image src={item.documenticon} alt="" width={16} height={16} />
                  {item.document}
                </td>

                <td className="p-4 text-black13 text-sm leading-5 font-semibold">{item.balance}</td>
                <td className="p-4 text-black13 text-xs leading-5 font-semibold">
                  <span className="inline-flex items-center justify-center border border-solid border-gray1600 rounded-full h-5.5 w-11.5"> {item.currency} </span>
                  </td>
                <td className="p-4 text-black13 text-sm leading-5 font-normal"> {item.activity}</td>

                <td className="p-4">
                  <span
                    className={`px-2.75 h-5.5 inline-flex items-center justify-center rounded-full text-xs font-semibold ${statusConfig[item.status].classes}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-4">
                  <Link href="#" className="w-10 h-9 flex items-center justify-center rounded-md hover:bg-gray-1600 transition">
                    <Image src={item.actions.eyesimg} alt="" width={16} height={16} />
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
