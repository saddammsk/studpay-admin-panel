"use client";
import Image from "next/image";
import { useFinanceAnalyticsStore } from "@/app/store/zustand/useFinanceAnalyticsStore";

export default function UniversityTable() {
  const { filteredUniversityData } = useFinanceAnalyticsStore();
  const rows = filteredUniversityData();

  return (
    <div className="bg-white overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-1000">
            <th className="px-4 py-3 text-left text-gray-1900 font-semibold text-xs uppercase">
              University Segment
            </th>
            <th className="px-4 py-3 text-left text-gray-1900 font-semibold text-xs uppercase">
              Students
            </th>
            <th className="px-4 py-3 text-left text-gray-1900 font-semibold text-xs uppercase">
              LTV
            </th>
            <th className="px-4 py-3 text-left text-gray-1900 font-semibold text-xs uppercase">
              CAC
            </th>
            <th className="px-4 py-3 text-left text-gray-1900 font-semibold text-xs uppercase">
              LTV:CAC Ratio
            </th>
            <th className="px-4 py-3 text-left text-gray-1900 font-semibold text-xs uppercase">
              Revenue
            </th>
            <th className="px-4 py-3 text-left text-gray-1900 font-semibold text-xs uppercase">
              Trend
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={7} className="px-4 py-8 text-center text-sm text-gray-1900">
                No universities match your search.
              </td>
            </tr>
          ) : (
            rows.map((item) => (
              <tr key={item.id} className="border-b border-gray-1000">
                <td className="px-4 py-6 text-black-1600 font-normal text-sm leading-5">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{item.flag}</span>
                    <div>
                      <p>{item.university}</p>
                      <p className="text-xs text-gray-1900">{item.country}</p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-6 text-gray-1900 font-normal text-sm leading-5">
                  {item.students.toLocaleString()}
                </td>

                <td className="px-4 py-6 text-green-2600 font-semibold text-sm leading-5">
                  €{item.ltv.toLocaleString()}
                </td>

                <td className="px-4 py-6 text-red-1300 font-semibold text-sm leading-5">
                  €{item.cac}
                </td>

                <td className="px-4 py-6">
                  <span
                    className={`px-2.5 h-6 font-semibold rounded-full text-sm inline-flex items-center justify-center ${
                      item.ratio >= 5
                        ? "bg-green-3100 text-green-3000"
                        : "bg-yellow-2000 text-yellow-2100"
                    }`}
                  >
                    {item.ratio}x
                  </span>
                </td>

                <td className="px-4 py-6 text-gray-1900 font-neulis-sans font-normal text-sm leading-5">
                  €{(item.revenue / 1000).toFixed(0)}K
                </td>

                <td className="px-4 py-6">
                  {item.trend === "up" && (
                    <Image src="/images/trend-up.svg" width={16} height={16} alt="trend up" />
                  )}
                  {item.trend === "down" && (
                    <Image src="/images/trend-down.svg" width={16} height={16} alt="trend down" />
                  )}
                  {item.trend === "neutral" && (
                    <Image src="/images/trend-neutral.svg" width={16} height={16} alt="trend neutral" />
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}