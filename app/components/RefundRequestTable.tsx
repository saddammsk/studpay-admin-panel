import Link from "next/link";
import Image from "next/image";

type PaymentStatus = "Pending" | "Approved" | "Rejected";

interface Actions {
  eyesimg: string;
  checkimg?: string;
  closeimg?: string;
}

interface Payment {
  id: number;
  date: string;
  name: string;
  email: string;
  amount: string;
  fee: string;
  refundable: string;
  status: PaymentStatus;
  actions: Actions;
}

const statusConfig = {
  Pending: {
    icon: "/images/clock-icon.svg",
    classes: "bg-yellow1200 text-brown1200",
  },
  Approved: {
    icon: "/images/checkgreendark.svg",
    classes: "bg-lightgreen12 text-green12",
  },
  Rejected: {
    icon: "/images/reject-icon.svg",
    classes: "bg-lightred1200 text-red1200",
  },
} as const;

const payments: Payment[] = [
  {
    id: 1,
    date: "May 20, 2024",
    name: "Maria Garcia",
    email: "maria.garcia@email.com",
    amount: "€8,500",
    fee: "-€150",
    refundable: "€8,350",
    status: "Pending",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
      checkimg: "/images/checkgreen-icon.svg",
      closeimg: "/images/closeRed.svg",
    },
  },
  {
    id: 2,
    date: "May 18, 2024",
    name: "Ahmed Hassan",
    email: "ahmed.hassan@uni.ae",
    amount: "€12,000",
    fee: "-€200",
    refundable: "€11,800",
    status: "Approved",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
  {
    id: 3,
    date: "May 15, 2024",
    name: "Li Wei",
    email: "li.wei@email.com",
    amount: "€15,000",
    fee: "-€250",
    refundable: "€14,750",
    status: "Rejected",
    actions: {
      eyesimg: "/images/eyes-icon.svg",
    },
  },
];

export default function RefundRequestTable() {
  return (
    <div className="bg-white border border-gray-1600 rounded-xl shadow-4xl p-6">
      <div className="md:pb-6 pb-4 flex items-center justify-between">
        <h4 className="text-black-1200 font-normal text-xl tracking-[-0.5px]">Refund Requests (3)</h4>
        <Link href={"#"} className="sm:w-auto hover:bg-gray-1600 transition-all duration-500 ease-in-out w-full inline-flex items-center justify-center px-4 text-black13 font-medium text-sm leading-5 gap-4 border border-gray1600 rounded-[10px] h-9">
          <Image
            src="../images/download-icon.svg"
            width='16'
            height='16'
            alt=""
            className="brightness-0"
          />
          Export CSV
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="2xl:w-full w-341.25">
          <thead>
            <tr className="border-b border-gray1600">
              <th className="px-4 py-3 text-left font-normal font-neulis-sans leading-5 text-sm text-gray-1400">Date of Request</th>
              <th className="px-4 py-3 text-left font-normal font-neulis-sans leading-5 text-sm text-gray-1400">Student Name</th>
              <th className="px-4 py-3 text-left font-normal font-neulis-sans leading-5 text-sm text-gray-1400">Email</th>
              <th className="px-4 py-3 text-left font-normal font-neulis-sans leading-5 text-sm text-gray-1400">Blocked Amount</th>
              <th className="px-4 py-3 text-left font-normal font-neulis-sans leading-5 text-sm text-gray-1400">Service Fee</th>
              <th className="px-4 py-3 text-left font-normal font-neulis-sans leading-5 text-sm text-gray-1400">Refundable Amount</th>
              <th className="px-4 py-3 text-left font-normal font-neulis-sans leading-5 text-sm text-gray-1400">Status</th>
              <th className="px-4 py-3 text-right font-normal font-neulis-sans leading-5 text-sm text-gray-1400">Actions</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((item) => (
              <tr key={item.id} className="border-b border-gray1600 hover:bg-gray1700/50 transition">
                <td className="p-4 text-black13 font-normal font-neulis-sans text-sm leading-5">
                  {item.date}
                </td>
                <td className="p-4 text-black13 font-normal font-neulis-sans text-sm leading-5">
                  {item.name}
                </td>

                <td className="p-4 text-gray-1100 font-normal font-neulis-sans text-sm leading-5">
                  {item.email}
                </td>

                <td className="p-4 text-black13 font-normal font-neulis-sans text-sm leading-5">
                  {item.amount}
                </td>
                <td className="p-4 text-red1300 font-normal font-neulis-sans text-sm leading-5">
                  {item.fee}
                </td>
                <td className="p-4 text-green-1000 font-normal font-neulis-sans text-sm leading-5">
                  {item.refundable}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 h-5.5 rounded-full text-xs leading-4 font-normal inline-flex items-center justify-center ${statusConfig[item.status].classes}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-4">
                  <ul className="flex items-center justify-end gap-2">

                    {/* Eye */}
                    <li>
                      <Link href="#" className="w-8 h-8 border border-solid border-gray1600 flex items-center justify-center rounded-md hover:bg-gray-1600 transition">
                        <Image src={item.actions.eyesimg} alt="" width={16} height={16} />
                      </Link>
                    </li>

                    {/* Check */}
                    {item.actions.checkimg && (
                      <li>
                        <Link href="#" className="w-8 h-8 border border-solid border-gray1600 flex items-center justify-center rounded-md hover:bg-lightred1300 transition">
                          <Image src={item.actions.checkimg} alt="" width={16} height={16} />
                        </Link>
                      </li>
                    )}

                    {/* Close */}
                    {item.actions.closeimg && (
                      <li>
                        <Link href="#" className="w-8 h-8 border border-solid border-gray1600 flex items-center justify-center rounded-md hover:bg-lightred1300 transition">
                          <Image src={item.actions.closeimg} alt="" width={16} height={16} />
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
    </div>
  );
}
