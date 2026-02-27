"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Cell,
  XAxis,
  Tooltip,
} from "recharts";

const LOAN_DATA = [
  { month: "Jun", value: 42 },
  { month: "Jul", value: 37 },
  { month: "Aug", value: 66 },
  { month: "Sep", value: 58 },
  { month: "Oct", value: 87 },
  { month: "Nov", value: 74 },
];

const PURPLE = "#6952E0";

// Custom tooltip
const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid #E2E8F0",
          borderRadius: 8,
          padding: "6px 12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          fontSize: 12,
          color: "#1E293B",
          fontWeight: 600,
        }}
      >
        <p style={{ margin: 0, color: "#94A3B8", fontWeight: 400 }}>{label}</p>
        <p style={{ margin: 0, color: PURPLE }}>€{payload[0].value}K</p>
      </div>
    );
  }
  return null;
};

export const LoansOverviews = () => {
  return (
    <div>
      <div
        className="border-white/80 2xl:mb-4.5 mb-0 border border-solid rounded-3xl relative bg-white shadow-81xl p-5.25 4xl:pb-12 pb-5"
        style={{ minHeight: 200 }}
      >
        <div className="flex items-center justify-between 4xl:pb-4 pb-1.5">
          <p className="text-base font-bold leading-6 text-black-5000">
            Loans Overview
          </p>
          <div className="flex items-center">
                <button className="cursor-pointer">
                  <img src="images/arw-group.svg" alt="" />
                </button>
                <button className="cursor-pointer">
                  <img src="images/send-icon-grey.svg" alt="" />
                </button>
              </div>
        </div>
        <div className="w-full flex gap-10">
        <div className="flex-1">
        <h3 className="sm:text-3xl text-2xl font-bold leading-9 text-black-5000">
          €2.51M
        </h3>

        <div className="pt-6">
          <p className="text-grey-5100 text-sm leading-5 font-normal pb-1">
            Total Loans
          </p>
          <span className="flex items-center gap-2">
                <img src="images/rise-green.svg" alt="" />
                <p className="text-sm font-medium leading-5 text-green-1500">
                  155 19%
                </p>
              </span>
        </div>
        </div>
        

        <div
          className="4xl:h-auto 2xl:h-22.5 sm:h-20 h-17.5"
          style={{ width: "100%", height: 150 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={LOAN_DATA}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              barCategoryGap="1%"
            >
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 12,
                  fill: "#9CA3AF",
                  fontWeight: 500,
                }}
                height={20}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "rgba(105,82,224,0.06)", radius: 4 }}
              />
              <Bar dataKey="value" radius={[4, 4, 4, 4]} maxBarSize={34}>
                {LOAN_DATA.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={PURPLE} fillOpacity={1 + index * 0.02} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        </div>

      </div>
    </div>
  );
};