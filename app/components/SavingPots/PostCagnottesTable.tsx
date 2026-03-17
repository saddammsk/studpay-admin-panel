"use client";

import Link from "next/link";
import Image from "next/image";
import { useSavingPotsStore, Risk, PotStatus } from "@/app/store/zustand/useSavingPotsStore";
import Pagination from "@/app/components/common/Pagination";

const riskDot: Record<Risk, React.ReactNode> = {
  Low:    <span className="w-2.5 h-2.5 rounded-full bg-lightgreen17 inline-block" />,
  Medium: <span className="w-2.5 h-2.5 rounded-full bg-yellow-1100 inline-block" />,
  High:   <Image src="/icons/sheild-error.svg" width={20} height={20} alt="High Risk" />,
};

const statusStyle: Record<PotStatus, string> = {
  Active:    "bg-rosepink23 text-royalBlue123",
  Flagged:   "bg-rosepink23 text-red2100",
  Completed: "bg-rosepink23 text-lightgreen17",
};

export default function PostCagnottesTable() {
  const {
    pots,
    potPage,
    potPageSize,
    paginatedPots,
    totalPotPages,
    setPotPage,
  } = useSavingPotsStore();

  const rows = paginatedPots();
  const pages = totalPotPages();

  return (
    <div className="mt-6 bg-white border border-gray-200 rounded-lg">
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
            <span className="w-2 h-2 rounded-full bg-lightgreen17" /> Low Risk
          </span>
          <span className="flex items-center gap-1 text-gray-2300 text-sm leading-5 font-normal">
            <span className="w-2 h-2 rounded-full bg-yellow-1100" /> Medium
          </span>
          <span className="flex items-center gap-1 text-gray-2300 text-sm leading-5 font-normal">
            <span className="w-2 h-2 rounded-full bg-red2100" /> High
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="2xl:w-full w-275 text-sm">
          <thead>
            <tr className="bg-gray-1600/30">
              {["Risk", "Pot Name", "Creator", "Participants", "Collected", "Progress", "Status"].map((h) => (
                <th key={h} className="px-4 py-3 text-left uppercase text-xs leading-4 font-bold text-gray-2300 whitespace-nowrap">
                  {h}
                </th>
              ))}
              <th className="px-4 py-3 text-right uppercase text-xs leading-4 font-bold text-gray-2300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
              <tr
                key={item.id}
                className={`border-t border-solid border-gray-1000 transition-colors ${
                  item.status === "Flagged" ? "bg-rosepink23/30" : "hover:bg-gray-1600/10"
                }`}
              >
                <td className="px-4 py-3">{riskDot[item.risk]}</td>

                <td className="px-4 py-3 text-black-2000 text-sm leading-5 font-medium">
                  <div>{item.name}</div>
                  {item.subtitle && (
                    <div className="flex items-center gap-1 text-red2100 text-xs leading-4 font-normal mt-1">
                      {item.icon && <Image src={item.icon} width={12} height={12} alt="icon" />}
                      <span>{item.subtitle}</span>
                    </div>
                  )}
                </td>

                <td className="px-4 py-3">
                  <div className="text-black-2000 text-sm leading-5 font-normal whitespace-nowrap">{item.creator}</div>
                  <div className="text-gray-2300 text-xs leading-4 font-normal">{item.date}</div>
                </td>

                <td className="px-4 py-3">
                  <div className="flex items-center text-black-2000 text-sm leading-5 font-medium gap-1.5">
                    <Image src="/images/user-blue.svg" width={14} height={14} alt="users" />
                    {item.participants}
                  </div>
                </td>

                <td className="px-4 py-3">
                  <div className="text-royalBlue123 text-sm leading-5 font-medium whitespace-nowrap">{item.collected}</div>
                  <div className="text-gray-2300 text-xs leading-4 font-normal whitespace-nowrap">of {item.limit}</div>
                </td>

                <td className="px-4 py-3">
                  <div className="w-24">
                    <div className="text-gray-2300 text-xs leading-4 font-normal mb-1 flex items-center justify-between">
                      Progress <span className="text-black-2000 font-medium">{item.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-1600 rounded">
                      <div
                        className={`h-2 rounded ${item.progress > 100 ? "bg-red2100" : "bg-royalBlue123"}`}
                        style={{ width: `${Math.min(item.progress, 100)}%` }}
                      />
                    </div>
                  </div>
                </td>

                <td className="px-4 py-3">
                  <span className={`px-2.5 h-6 rounded-full text-xs font-medium leading-4 inline-flex items-center justify-center ${statusStyle[item.status]}`}>
                    {item.status}
                  </span>
                </td>

                <td className="px-4 py-3 text-right">
                  <ul className="flex items-center justify-end gap-3">
                    <li>
                      <Link href="#" className="flex items-center justify-center w-8 h-8">
                        <Image src="/images/eyes-icon.svg" width={16} height={16} alt="view" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center justify-center w-8 h-8">
                        <Image src="/icons/dots-vertical.svg" width={16} height={16} alt="menu" />
                      </Link>
                    </li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pages > 1 && (
        <Pagination
          page={potPage}
          totalPages={pages}
          totalItems={pots.length}
          pageSize={potPageSize}
          onPageChange={setPotPage}
        />
      )}
    </div>
  );
}