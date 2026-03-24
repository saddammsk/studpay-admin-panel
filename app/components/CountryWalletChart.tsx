"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

type DataType = {
  country: string;
  avgWallet: number;
  housingRate: number;
};

const data: DataType[] = [
  { country: "🇩🇪 Germany", avgWallet: 2850, housingRate: 8 },
  { country: "🇬🇧 UK", avgWallet: 2400, housingRate: 7 },
  { country: "🇨🇦 Canada", avgWallet: 2150, housingRate: 6 },
  { country: "🇦🇺 Australia", avgWallet: 2650, housingRate: 9 },
  { country: "🇺🇸 USA", avgWallet: 1900, housingRate: 5 },
  { country: "🇦🇪 UAE", avgWallet: 3200, housingRate: 10 },
];

export default function CountryWalletChart() {
  return (
    <div className="w-full h-[500px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 60, left: 20, bottom: 20 }}
          barCategoryGap="30%"
        >
          {/* Grid */}
          <CartesianGrid strokeDasharray="3 3" horizontal vertical={false} />

          {/* Bottom Axis (Wallet €) */}
          <XAxis
            type="number"
            xAxisId="wallet"
            domain={[0, 3500]}
            tick={{ fontSize: 12 }}
            tickFormatter={(v) => `€${v}`}
          />

          {/* Top Axis (Housing %) */}
          <XAxis
            type="number"
            xAxisId="rate"
            orientation="top"
            domain={[0, 12]}
            tick={{ fontSize: 12 }}
            tickFormatter={(v) => `${v}%`}
          />

          {/* Y Axis */}
          <YAxis
            type="category"
            dataKey="country"
            tick={{ fontSize: 14 }}
          />

          {/* Tooltip */}
          <Tooltip
            formatter={(value: number, name: string) => {
              if (name === "Housing Rate %") return `${value}%`;
              return `€${value}`;
            }}
            contentStyle={{
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          />

          {/* Legend */}
          <Legend />

          {/* Wallet Bar */}
          <Bar
            xAxisId="wallet"
            dataKey="avgWallet"
            fill="#1F8A8A"
            radius={[0, 10, 10, 0]}
            name="Avg Wallet Size"
          />

          {/* Housing Bar */}
          <Bar
            xAxisId="rate"
            dataKey="housingRate"
            fill="#22C55E"
            radius={[0, 10, 10, 0]}
            name="Housing Rate %"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}