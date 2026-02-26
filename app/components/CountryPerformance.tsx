"use client";

import Image from "next/image";

type StatusType = "Active" | "Growing" | "New";

interface CountryPerformanceItem {
  id: number;
  country: {
    name: string;
    flag: string;
  };
  users: string;
  serviceAdoption: {
    housing: string;
    insurance: string;
    crypto: string;
  };
  arpu: string;
  status: StatusType;
  trend: number[];
}

const statusConfig = {
  Active: {
    classes: "bg-green-1500/10 border-green-1500/10 text-green-1500",
    color: "#16a34a",
  },
  Growing: {
    classes: "bg-blue-1500/10 border-blue-1500/10 text-blue-1500",
    color: "#2563eb",
  },
  New: {
    classes: "bg-yellow-1100/10 border-yellow-1100/10 text-yellow-1100",
    color: "#ca8a04",
  },
} as const;

const countries: CountryPerformanceItem[] = [
  {
    id: 1,
    country: { name: "Germany", flag: "/images/🇩🇪.png" },
    users: "12,400",
    serviceAdoption: { housing: "78%", insurance: "45%", crypto: "23%" },
    arpu: "$89.50",
    status: "Active",
    trend: [10, 20, 15, 25, 30],
  },
  {
    id: 2,
    country: { name: "United Kingdom", flag: "/images/🇬🇧.png" },
    users: "9,200",
    serviceAdoption: { housing: "65%", insurance: "52%", crypto: "18%" },
    arpu: "$76.20",
    status: "Active",
    trend: [8, 12, 18, 22, 28],
  },
  {
    id: 3,
    country: { name: "Canada", flag: "/images/🇨🇦.png" },
    users: "5,400",
    serviceAdoption: { housing: "58%", insurance: "38%", crypto: "31%" },
    arpu: "$68.40",
    status: "Growing",
    trend: [5, 10, 8, 15, 20],
  },
  {
    id: 4,
    country: { name: "Australia", flag: "/images/🇦🇺.png" },
    users: "4,200",
    serviceAdoption: { housing: "72%", insurance: "41%", crypto: "28%" },
    arpu: "$92.10",
    status: "Active",
    trend: [12, 14, 16, 18, 22],
  },
  {
    id: 5,
    country: { name: "United States", flag: "/images/🇺🇸.png" },
    users: "7,500",
    serviceAdoption: { housing: "45%", insurance: "62%", crypto: "42%" },
    arpu: "$54.80",
    status: "Growing",
    trend: [6, 9, 14, 17, 19],
  },
  {
    id: 6,
    country: { name: "UAE", flag: "/images/🇦🇪.png" },
    users: "6,800",
    serviceAdoption: { housing: "82%", insurance: "35%", crypto: "15%" },
    arpu: "$124.50",
    status: "Active",
    trend: [15, 18, 20, 23, 27],
  },
  {
    id: 7,
    country: { name: "Netherlands", flag: "/images/🇳🇱.png" },
    users: "2,800",
    serviceAdoption: { housing: "68%", insurance: "48%", crypto: "35%" },
    arpu: "$71.30",
    status: "New",
    trend: [4, 7, 6, 9, 12],
  },
  {
    id: 8,
    country: { name: "France", flag: "/images/🇫🇷.png" },
    users: "3,100",
    serviceAdoption: { housing: "55%", insurance: "42%", crypto: "20%" },
    arpu: "$62.40",
    status: "Growing",
    trend: [3, 5, 8, 10, 14],
  },
];

function Sparkline({
  data,
  color,
}: {
  data: number[];
  color: string;
}) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data
    .map((value, i) => {
      const x = (i / (data.length - 1)) * 60;
      const y = 20 - ((value - min) / range) * 20;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width="60" height="20" viewBox="0 0 60 20">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={points}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function CountryPerformance() {
  return (
    <div className="bg-white border mt-6 border-gray1600 rounded-xl shadow-4xl shadow-9xl">
      <div className="flex items-center justify-between py-8 px-5">
        <div>
          <h6 className="text-sm font-bold leading-5 text-black-2000">
            Country Performance Ledger
          </h6>
          <h6 className="text-sm font-normal leading-5 text-gray-3800">
            High-density metrics by region
          </h6>
        </div>
        <span className="text-xs font-normal text-gray-1200 block">
          {countries.length} countries
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="4xl:w-full w-[1440px]">
          <thead>
            <tr className="border-b border-gray-3600 bg-gray1700/50">
              <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">#</th>
              <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">Country</th>
              <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">Users</th>
              <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">
                Service Adoption
                <div className="text-xs text-gray-1200 font-normal">
                  Housing / Insurance / Crypto
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">ARPU</th>
              <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">Status</th>
              <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">Trend</th>
            </tr>
          </thead>

          <tbody>
            {countries.map((item, index) => (
              <tr
                key={item.id}
                className="border-b border-gray1600 hover:bg-gray1700/50 transition"
              >
                <td className="px-4 py-4 text-sm text-gray-1900">
                  {index + 1}
                </td>

                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={item.country.flag}
                      alt={item.country.name}
                      width={18}
                      height={12}
                      className="rounded-sm"
                    />
                    <span className="text-sm text-blue-1300">
                      {item.country.name}
                    </span>
                  </div>
                </td>

                <td className="px-4 py-4 text-sm text-blue-1300">
                  {item.users}
                </td>

                <td className="px-4 py-4 text-sm">
                  <span className="text-green-1500">{item.serviceAdoption.housing}</span>
                  <span className="text-gray-1200"> / </span>
                  <span className="text-blue-1500">{item.serviceAdoption.insurance}</span>
                  <span className="text-gray-1200"> / </span>
                  <span className="text-yellow-1100">{item.serviceAdoption.crypto}</span>
                </td>

                <td className="px-4 py-4 text-sm text-black-2000 font-medium">
                  {item.arpu}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`text-xs font-normal border leading-4 h-5.5 px-2.75 rounded-full inline-flex items-center justify-center ${statusConfig[item.status].classes}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <Sparkline
                    data={item.trend}
                    color={statusConfig[item.status].color}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}