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
          margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />

          <XAxis
            type="number"
            domain={[0, 3200]}
            tick={{ fontSize: 12 }}
          />

          <YAxis
            type="category"
            dataKey="country"
            tick={{ fontSize: 14 }}
          />

          <Tooltip />
          <Legend />

          <Bar
            dataKey="avgWallet"
            fill="#1F8A8A"
            radius={[0, 10, 10, 0]}
            name="Avg Wallet Size"
          />

          <Bar
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