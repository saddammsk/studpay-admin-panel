import Link from "next/link";
import Image from "next/image";

type PaymentStatus = "Active" | "Completed" | "Draft";



interface Payment {
  id: number;
  name: string;
  type: {
    icon: string;
    name: string;
  }
  status: PaymentStatus;
  audience: string;
  OpenRate: string;
  ClickRate: string;
  date: string;
  actions: string;
}

const statusConfig = {
  Active: {
    classes: "bg-green-1200 text-green-1100",
  },
  Completed: {
    classes: "bg-white-1000 text-blue200",
  },
  Draft: {
    classes: "bg-gray-1600 text-blue-1100",
  },
} as const;

const payments: Payment[] = [
  {
    id: 1,
    name: "Welcome New Students",
    type: {
      icon: "/images/email-blue.svg",
      name: "Email"
    },
    status: "Active",
    audience: "1,250",
    OpenRate: "24.5%",
    ClickRate: "3.2%",
    date: "2024-05-28",
    actions: "/images/graph-icon2.svg",
  },
  {
    id: 2,
    name: "AVI Wallet Promo",
    type: {
      icon: "/images/SMS.svg",
      name: "SMS"
    },
    status: "Completed",
    audience: "892",
    OpenRate: "89.2%",
    ClickRate: "12.1%",
    date: "2024-05-25",
    actions: "/images/graph-icon2.svg",
  },
  {
    id: 3,
    name: "Insurance Reminder",
    type: {
      icon: "/images/email-blue.svg",
      name: "Email"
    },
    status: "Draft",
    audience: "456",
    OpenRate: "-",
    ClickRate: "-",
    date: "-",
    actions: "/images/graph-icon2.svg",
  },
];

export default function MarketingCampaignTable() {

  return (
    <div className="bg-white border border-gray-1600 rounded-xl shadow-4xl md:p-6 p-4">
      <div className="md:pb-6 pb-4">
        <h4 className="text-black13 font-normal font-segoe leading-6 text-2xl tracking-[-0.6px]">Recent Campaigns</h4>
      </div>

      <div className="overflow-x-auto">
        <table className="2xl:w-full w-341.25">
          <thead>
            <tr className="border-b border-gray1600">
              <th className="px-4 py-3 text-left text-base font-normal leading-6 text-gray-1100">Campaign Name</th>
              <th className="px-4 py-3 text-left text-base font-normal leading-6 text-gray-1100">Type</th>
              <th className="px-4 py-3 text-left text-base font-normal leading-6 text-gray-1100">Status</th>
              <th className="px-4 py-3 text-left text-base font-normal leading-6 text-gray-1100">Audience</th>
              <th className="px-4 py-3 text-left text-base font-normal leading-6 text-gray-1100">Open Rate</th>
              <th className="px-4 py-3 text-left text-base font-normal leading-6 text-gray-1100">Click Rate</th>
              <th className="px-4 py-3 text-left text-base font-normal leading-6 text-gray-1100">Sent Date</th>
              <th className="px-4 py-3 text-left text-base font-normal leading-6 text-gray-1100">Actions</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((item) => (
              <tr key={item.id} className="border-b border-gray1600 hover:bg-gray1700/50 transition">
                <td className="py-3 px-4 text-black13 font-segoe font-normal text-base leading-6">{item.name}</td>
                <td className="y-3 px-4">
                  <span className="flex items-center gap-2 text-black13 font-segoe font-normal text-base leading-6">
                    <Image
                      src={item.type.icon}
                      alt=""
                      width={16}
                      height={16}
                    />
                    {item.type.name}
                  </span>
                </td>
                <td className="y-3 px-4">
                  <span
                    className={`font-segoe font-normal text-xs leading-4 rounded-full h-5.5 px-3 inline-flex items-center justify-center pb-px ${statusConfig[item.status].classes}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="y-3 px-4 text-black13 font-segoe font-normal text-base leading-6">{item.audience}</td>
                <td className="y-3 px-4 text-black13 font-segoe font-normal text-base leading-6">{item.OpenRate}</td>
                <td className="y-3 px-4 text-black13 font-segoe font-normal text-base leading-6">{item.ClickRate}</td>
                <td className="y-3 px-4 text-black13 font-segoe font-normal text-base leading-6">{item.date}</td>
                <td className="y-3 px-4">
                  <Link href="#" className="border border-solid border-gray1600 w-10.5 h-9 flex items-center justify-center rounded-md hover:bg-gray-1600 transition">
                    <Image src={item.actions} alt="" width={16} height={16} />
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
