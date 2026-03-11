"use client";

import Link from "next/link";
import Image from "next/image";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";


interface DataPoint {
  month: string;
  value: number;
}


const data: DataPoint[] = [
  { month: "Jan", value: 32000 },
  { month: "Feb", value: 50000 },
  { month: "Mar", value: 68000 },
  { month: "Mar2", value: 26000 },
  { month: "Apr", value: 38000 },
  { month: "Apr2", value: 30000 },
  { month: "May", value: 28000 },
  { month: "May2", value: 38000 },
  { month: "Jun", value: 72000 },
  { month: "Jun2", value: 58000 },
  { month: "Jul", value: 65000 },
];

const xLabels: Record<string, string> = {
  Jan: "Jan",
  Feb: "Feb",
  Mar: "Mar",
  Mar2: "",
  Apr: "Apr",
  Apr2: "",
  May: "May",
  May2: "",
  Jun: "Jun",
  Jun2: "",
  Jul: "Jul",
};


const formatYAxis = (value: number): string => {
  if (value === 0) return "0";
  if (value >= 1000) return `${value / 1000}K`;
  return String(value);
};


const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const value = payload[0].value as number;
    return (
      <div className="bg-white border border-gray-200 rounded-lg px-3.5 py-2 shadow-md text-[13px] font-semibold text-blue-900 font-inter">
        ${value.toLocaleString()}
      </div>
    );
  }
  return null;
};


export default function RecentTransactionsCard() {
  return (
    <div className="border border-solid border-gray-200 rounded-lg bg-white">
      <div className="pl-3.5 pr-2 pt-5 pb-4 flex items-center justify-between">
        <div>
          <p className="mb-4.5 flex items-center gap-1.5 text-blue-1100 text-[17px] font-medium font-inter tracking-[-0.34px]">
            Recent Transactions
            <Image
              src="/icons/info-dark.svg"
              alt=""
              width={13}
              height={13}
            />
          </p>

          <div className="flex items-center gap-2.5">
            <h3 className="text-blue1600 font-publicSans font-bold 4xl:text-[22px] text-base tracking-[-1.1px] capitalize">
              $24,000
            </h3>
            <span className="inline-flex rounded-full items-center justify-center bg-lightgreenNew border border-solid border-darkgreen58 h-5 text-darkgreen57 font-inter font-medium text-[11.66px] pl-1.5 pr-1 gap-0.5">
              <Image
                src="/images/up-green-arrow.svg"
                alt=""
                width={9}
                height={9}
              />
              12%
            </span>
            <p className="text-grey-5300 font-normal text-xs uppercase leading-6 tracking-[-0.28px]">
              vs last month
            </p>
          </div>
        </div>

        <Link
          href="#"
          className="text-blue-1000 font-normal text-sm leading-normal border border-solid border-blue-1000 rounded-[7px] h-9 4xl:w-25.25 w-20 flex items-center justify-center"
        >
          View All
        </Link>
      </div>

      <div className="pl-3.5">
        <ResponsiveContainer width="100%" height={255}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity={0.03} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="6 4"
              stroke="#e5e7eb"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tickFormatter={(v: string) => xLabels[v] ?? ""}
              tick={{ fontSize: 11, fill: "#9ca3af", fontFamily: "Inter, sans-serif" }}
              axisLine={false}
              tickLine={false}
              interval={0}
            />

            <YAxis
              tickFormatter={formatYAxis}
              tick={{ fontSize: 11, fill: "#9ca3af", fontFamily: "Inter, sans-serif" }}
              axisLine={false}
              tickLine={false}
              ticks={[0, 10000, 25000, 50000, 75000]}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#3b82f6",
                strokeWidth: 1,
                strokeDasharray: "4 3",
              }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#colorValue)"
              dot={false}
              activeDot={{
                r: 5,
                fill: "#3b82f6",
                stroke: "white",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}