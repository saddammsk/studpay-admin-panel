/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";


const chartData = [
  { time: "0:00",  requests: 520,  errors: 4  },
  { time: "1:00",  requests: 480,  errors: 3  },
  { time: "2:00",  requests: 620,  errors: 2  },
  { time: "3:00",  requests: 750,  errors: 3  },
  { time: "4:00",  requests: 920,  errors: 4  },
  { time: "5:00",  requests: 860,  errors: 3  },
  { time: "6:00",  requests: 780,  errors: 2  },
  { time: "7:00",  requests: 820,  errors: 3  },
  { time: "8:00",  requests: 980,  errors: 4  },
  { time: "9:00",  requests: 1520, errors: 5  },
  { time: "10:00", requests: 1380, errors: 4  },
  { time: "11:00", requests: 980,  errors: 3  },
  { time: "12:00", requests: 1020, errors: 5  },
  { time: "13:00", requests: 1100, errors: 4  },
  { time: "14:00", requests: 1050, errors: 6  },
  { time: "15:00", requests: 1320, errors: 5  },
  { time: "16:00", requests: 1380, errors: 4  },
  { time: "17:00", requests: 1420, errors: 8  },
  { time: "18:00", requests: 1350, errors: 18 },
  { time: "19:00", requests: 1280, errors: 12 },
  { time: "20:00", requests: 1100, errors: 7  },
  { time: "21:00", requests: 920,  errors: 5  },
  { time: "22:00", requests: 480,  errors: 4  },
  { time: "23:00", requests: 560,  errors: 3  },
  { time: "24:00", requests: 620,  errors: 4  },
];


const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-grey5800 rounded-md shadow-4xl px-3 py-2 text-xs font-JetBrainsMono">
      <p className="text-blue1700 font-semibold mb-1">{label}</p>
      {payload.map((entry: any) => (
        <p key={entry.name} style={{ color: entry.color }}>
          {entry.name}: <span className="font-bold">{entry.value}</span>
        </p>
      ))}
    </div>
  );
};


const menuItems2 = [
  {
    name: "API Keys",
    href: "/global_financing/financing_api_console",
    icon: "/icons/api-key.svg",
    iconActive: "/icons/api-key-active.svg",
    active: false,
  },
  {
    name: "Access Control",
    href: "/global_financing/financing_api_console/api_access_control",
    icon: "/icons/access-icon.svg",
    iconActive: "/icons/access-icon-active.svg",
    active: false,
  },
  {
    name: "Monitoring",
    href: "/global_financing/financing_api_console/monitoring",
    icon: "/icons/monitoring-icon.svg",
    iconActive: "/icons/monitoring-icon-active.svg",
    active: true,
  },
  {
    name: "Emergency",
    href: "/global_financing/financing_api_console/emergency",
    icon: "/icons/Emergency-icon.svg",
    iconActive: "/icons/Emergency-icon-active.svg",
    active: false,
  },
];


const endpoints = [
  {
    method: "GET",
    path: "/api/v1/dossiers",
    rps: "142 req/s",
    latency: "142 req/s",
    status: "Healthy",
    statusColor: "text-green59",
    icon: "/images/arrow-up.svg",
  },
  {
    method: "POST",
    path: "/api/v1/decisions",
    rps: "38 req/s",
    latency: "120ms",
    status: "Healthy",
    statusColor: "text-green59",
    icon: "/images/arrow-up.svg",
  },
  {
    method: "POST",
    path: "/api/v1/webhooks/hbl",
    rps: "12 req/s",
    latency: "89ms",
    status: "Degraded",
    statusColor: "text-yellow-1100",
    icon: "/icons/down-yellow-right.svg",
  },
  {
    method: "POST",
    path: "/api/v1/auth/token",
    rps: "67 req/s",
    latency: "32ms",
    status: "Healthy",
    statusColor: "text-green59",
    icon: "/images/arrow-up.svg",
  },
];


const FinancingApiConsole = () => {
  return (
    <div className="font-inter">
      {/* ── Tab Nav ── */}
      <div className="mt-6">
        <div className="bg-gray-6200/50 inline-flex sm:w-auto w-full border border-solid border-grey5800 rounded-md px-1 py-0.75">
          <ul className="sm:flex grid grid-cols-2 items-center sm:w-auto w-full">
            {menuItems2.map((item) => (
              <li key={item.name} className="sm:w-auto w-full">
                <Link
                  href={item.href}
                  className={`inline-flex sm:w-auto w-full sm:justify-start justify-center items-center h-8 px-3 gap-1.5 font-inter font-normal text-sm leading-5 relative rounded ${
                    item.active
                      ? "text-blue1700 bg-white shadow-4xl"
                      : "text-gray-5000"
                  }`}
                >
                  <span className="flex items-center justify-center">
                    <Image
                      src={item.active ? item.iconActive : item.icon}
                      width={16}
                      height={16}
                      alt={item.name}
                    />
                  </span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Monitoring Card ── */}
      <div className="bg-white border border-solid border-grey5800 mt-7 rounded-lg shadow-4xl">
        {/* Card Header */}
        <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between border-b border-solid border-grey5800 px-5 py-4">
          <h4 className="text-blue1700 sm:text-base text-sm font-semibold leading-6 flex items-center gap-2">
            <Image src="/icons/monitoring-icon.svg" width={16} height={16} alt="" />
            Endpoint Monitoring
          </h4>
          <div className="flex items-center gap-3">
            <p className="text-green59 text-xs leading-4 font-medium flex items-center gap-1.5">
              <span className="bg-green59 w-2 h-2 flex items-center rounded-full" />
              99.97% uptime
            </p>
            <span className="inline-flex items-center justify-center rounded-full border border-solid border-grey5800 h-5.5 px-2.5 text-blue1700 text-xs leading-4 font-bold font-JetBrainsMono">
              24h
            </span>
          </div>
        </div>

        <div className="p-5">
          {/* ── Recharts Area Chart ── */}
          <div className="mb-5 w-full">
            <ResponsiveContainer width="100%" height={184}>
              <AreaChart
                data={chartData}
                margin={{ top: 8, right: 0, left: -10, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="gradRequests" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="#3B82F6" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="gradErrors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="#EF4444" stopOpacity={0.15} />
                    <stop offset="100%" stopColor="#EF4444" stopOpacity={0.0}  />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  vertical={false}
                  stroke="#E5E7EB"
                  strokeDasharray="0"
                />

                <XAxis
                  dataKey="time"
                  tick={{ fontSize: 10, fill: "#9CA3AF", fontFamily: "JetBrains Mono, monospace" }}
                  tickLine={false}
                  axisLine={false}
                  interval={3}
                />

                <YAxis
                  tick={{ fontSize: 10, fill: "#9CA3AF", fontFamily: "JetBrains Mono, monospace" }}
                  tickLine={false}
                  axisLine={false}
                  ticks={[0, 400, 800, 1200, 1600]}
                />

                <Tooltip content={<CustomTooltip />} />

                <Legend
                  align="right"
                  verticalAlign="top"
                  wrapperStyle={{ fontSize: 11, paddingBottom: 8 }}
                  formatter={(value) => (
                    <span style={{ color: "#374151", fontSize: 11 }}>{value}</span>
                  )}
                />

                <Area
                  type="monotone"
                  dataKey="errors"
                  name="Errors"
                  stroke="#EF4444"
                  strokeWidth={1.5}
                  fill="url(#gradErrors)"
                  dot={false}
                  activeDot={{ r: 3, fill: "#EF4444" }}
                />

                {/* Requests area */}
                <Area
                  type="monotone"
                  dataKey="requests"
                  name="Requests"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  fill="url(#gradRequests)"
                  dot={false}
                  activeDot={{ r: 4, fill: "#3B82F6" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* ── Endpoint Rows ── */}
          {endpoints.map((ep, i) => (
            <div
              key={ep.path}
              className={`bg-lighrgrey36/30 flex items-center justify-between border border-solid border-grey5800 rounded-md px-3 py-2 ${
                i < endpoints.length - 1 ? "mb-2" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center rounded-full border border-solid border-grey5800 h-4.25 px-1.5 text-blue1700 text-[10px] leading-4 font-bold font-JetBrainsMono">
                  {ep.method}
                </span>
                <p className="text-blue1700 text-sm leading-5 font-normal font-JetBrainsMono">
                  {ep.path}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-gray-5000 text-xs leading-4 font-normal">{ep.rps}</p>
                <p className="text-gray-5000 text-xs leading-4 font-normal font-JetBrainsMono">{ep.latency}</p>
                <p className={`flex items-center gap-3 text-xs leading-4 font-normal ${ep.statusColor}`}>
                  <Image src={ep.icon} width={12} height={12} alt="" />
                  {ep.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancingApiConsole;