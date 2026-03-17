"use client";
import Link from "next/link";
import Image from "next/image";

type Risk = "Low" | "Medium" | "High";
type Status = "Active" | "Flagged" | "Completed";

interface Pot {
  id: number;
  risk: Risk;
  name: string;
  subtitle: string;
  icon: string;
  creator: string;
  date: string;
  participants: number;
  collected: string;
  limit: string;
  progress: number;
  status: Status;
}

const pots: Pot[] = [
  {
    id: 1,
    risk: "Low",
    name: "Birthday Gift - Rahul",
    creator: "Priya Sharma",
    date: "2024-01-15",
    participants: 12,
    collected: "EUR 8,450",
    limit: "EUR 10,000",
    progress: 84,
    status: "Active",
    subtitle: "",
    icon: ""
  },
  {
    id: 2,
    risk: "Medium",
    name: "College Trip Fund",
    subtitle: "High transaction frequency",
    icon: "/images/warning.svg",
    creator: "Amit Verma",
    date: "2024-01-10",
    participants: 28,
    collected: "EUR 42,800",
    limit: "EUR 50,000",
    progress: 86,
    status: "Active",
  },
  {
    id: 3,
    risk: "High",
    name: "Emergency Fund - Class",
    subtitle: "Suspicious P2P volume detected",
    icon: "/images/warning.svg",
    creator: "Unknown User",
    date: "2024-01-08",
    participants: 45,
    collected: "EUR 1,25,000",
    limit: "EUR 1,00,000",
    progress: 125,
    status: "Flagged",
  },
  {
    id: 4,
    risk: "Low",
    name: "Hostel Rent Collection",
    creator: "Sneha Patel",
    date: "2024-01-05",
    participants: 8,
    collected: "EUR 24,000",
    limit: "EUR 24,000",
    progress: 100,
    status: "Completed",
    subtitle: "",
    icon: ""
  },{
    id:  5,
    risk: "Low",
    name: "Sports Equipment",
    creator: "Vikram Singh",
    date: "2024-01-12",
    participants: 15,
    collected: "EUR 15,750",
    limit: "of EUR 25,000",
    progress: 63,
    status: "Active",
    subtitle: "",
    icon: ""
  },
];

const riskDot = {
  Low: <span className="w-2.5 h-2.5 rounded-full bg-lightgreen17 inline-block"></span>,
  Medium: <span className="w-2.5 h-2.5 rounded-full bg-yellow-1100 inline-block"></span>,
  High: (
    <span className=""> 
      <Image src="/icons/sheild-error.svg" width={20} height={20} alt="High Risk" />
    </span>
  ),
};

const statusStyle = {
  Active: "bg-rosepink23 text-royalBlue123",
  Flagged: "bg-rosepink23 text-red2100",
  Completed: "bg-rosepink23 text-lightgreen17",
};

export default function PotsMonitoringTable() {
  return (
    <div className="mt-6 bg-white border border-gray-200 rounded-lg">

      {/* Header */}
      <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between px-5 py-4 border-b border-solid border-gray-1000">
        <div>
          <h4 className="text-lg leading-7 font-bold text-black-2000">
            Pots & Cagnottes Monitoring
          </h4>
          <p className="text-sm leading-5 font-normal text-gray-2300">
            Active user pots with anti-fraud monitoring
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="flex items-center gap-1 text-gray-2300 text-sm leading-5 font-normal">
            <span className="w-2 h-2 rounded-full bg-lightgreen17"></span> Low Risk
          </span>
          <span className="flex items-center gap-1 text-gray-2300 text-sm leading-5 font-normal">
            <span className="w-2 h-2 rounded-full bg-yellow-1100"></span> Medium
          </span>
          <span className="flex items-center gap-1 text-gray-2300 text-sm leading-5 font-normal">
            <span className="w-2 h-2 rounded-full bg-red2100"></span> High
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="2xl:w-full w-275 text-sm">

          <thead className="">
            <tr className="bg-gray-1600/30">
              <th className="px-4 py-3 text-left uppercase text-xs leading-4 font-bold text-gray-2300">Risk</th>
              <th className="px-4 py-3 text-left uppercase text-xs leading-4 font-bold text-gray-2300">Pot Name</th>
              <th className="px-4 py-3 text-left uppercase text-xs leading-4 font-bold text-gray-2300">Creator</th>
              <th className="px-4 py-3 text-left uppercase text-xs leading-4 font-bold text-gray-2300">Participants</th>
              <th className="px-4 py-3 text-left uppercase text-xs leading-4 font-bold text-gray-2300">Collected</th>
              <th className="px-4 py-3 text-left uppercase text-xs leading-4 font-bold text-gray-2300">Progress</th>
              <th className="px-4 py-3 text-left uppercase text-xs leading-4 font-bold text-gray-2300">Status</th>
              <th className="px-4 py-3 text-right uppercase text-xs leading-4 font-bold text-gray-2300">Actions</th>
            </tr>
          </thead>

          <tbody>
            {pots.map((item) => (
              <tr
                key={item.id}
                className={`border-t border-solid border-gray-1000 ${item.id === 3 ? "bg-rosepink23/30" : ""}`}
              >

                {/* Risk */}
                <td className="px-4 py-3">
                  {riskDot[item.risk]}
                </td>

                {/* Name */}
                <td className="px-4 py-3 text-black-2000 text-sm leading-5 font-medium">
                  <div>{item.name}</div>
                  {item.subtitle && (
                    <div className="flex items-center gap-1 text-red2100 text-xs leading-4 font-normal mt-1">
                      {item.icon && (
                        <Image src={item.icon} width={12} height={12} alt="icon" />
                      )}
                      <span>{item.subtitle}</span>
                    </div>
                  )}
                </td>

                {/* Creator */}
                <td className="px-4 py-3">
                  <div className="text-black-2000 text-sm leading-5 font-normal">{item.creator}</div>
                  <div className="text-gray-2300 text-xs leading-4 font-normal">{item.date}</div>
                </td>

                {/* Participants */}
                <td className="px-4 py-3">
                  <div className="flex items-center text-black-2000 text-sm leading-5 font-medium gap-1.5">
                    <Image
                      src="/images/user-blue.svg"
                      width={14}
                      height={14}
                      alt="users"
                    />
                    {item.participants}
                  </div>
                </td>

                {/* Collected */}
                <td className="px-4 py-3">
                  <div className="text-royalBlue123 text-sm leading-5 font-medium">
                    {item.collected}
                  </div>
                  <div className="text-gray-2300 text-xs leading-4 font-normal">
                    of {item.limit}
                  </div>
                </td>

                {/* Progress */}
                <td className="px-4 py-3">
                  <div className="w-24">
                    <div className="text-gray-2300 text-xs leading-4 font-normal mb-1 flex items-center justify-between">
                      Progress <span className="block text-black-2000 font-medium">{item.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-1600 rounded">
                      <div
                        className={`h-2 rounded ${item.progress > 100
                          ? "bg-red2100"
                          : "bg-royalBlue123"
                          }`}
                        style={{ width: `${Math.min(item.progress, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </td>

                {/* Status */}
                <td className="px-4 py-3">
                  <span
                    className={`px-2.5 h-6 rounded-full text-xs font-medium leading-4 inline-flex items-center justify-center ${statusStyle[item.status]}`}
                  >
                    {item.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-4 py-3 text-right">
                  <ul className="flex items-center justify-end gap-3">
                    <li>
                      <Link href={"#"} className="flex items-center justify-center w-8 h-8">
                        <Image
                          src="/images/eyes-icon.svg"
                          width={16}
                          height={16}
                          alt="view"
                          className="cursor-pointer"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"} className="flex items-center justify-center w-8 h-8">
                        <Image
                          src="/icons/dots-vertical.svg"
                          width={16}
                          height={16}
                          alt="menu"
                          className="cursor-pointer"
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