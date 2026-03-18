"use client";
import React from "react";
import { AlertTriangle, Search, ShieldOff, TrendingUp } from "lucide-react";
import { useRiskFraudStore } from "@/app/store/zustand/useRiskFraudStore";

type CardProps = {
  title: string;
  value: string | number;
  subtitle: string;
  change?: string;
  changeType?: "up" | "down";
  icon: React.ReactNode;
  color: "red" | "orange" | "gray" | "green";
};

const colorStyles = {
  red:    { border: "border-red-1300/30",    bg: "bg-red-1300/10",    text: "text-red-1300"    },
  orange: { border: "border-yellow-1100/30", bg: "bg-yellow-1100/10", text: "text-yellow-1100" },
  gray:   { border: "border-gray-3600",      bg: "bg-gray-6100",      text: "text-blue-1300"   },
  green:  { border: "border-green-1600/30",  bg: "bg-green-1600/10",  text: "text-green-1600"  },
};

const StatCard: React.FC<CardProps> = ({
  title, value, subtitle, change, changeType, icon, color,
}) => {
  const styles = colorStyles[color];
  return (
    <div className={`rounded-xl border ${styles.border} bg-white p-5 shadow-sm flex justify-between`}>
      <div>
        <p className="text-sm leading-5 text-gray-1900">{title}</p>
        <h2 className={`text-[30px] font-bold mt-1 ${styles.text}`}>{value}</h2>
        <p className="text-xs text-gray-1900 mt-1">{subtitle}</p>
        {change && (
          <p className={`text-sm mt-2 ${changeType === "up" ? "text-green-600" : "text-red-600"}`}>
            {change} <span className="text-gray-1900">vs last week</span>
          </p>
        )}
      </div>
      <div className={`h-10 w-10 flex items-center justify-center rounded-lg ${styles.bg}`}>
        <div className={styles.text}>{icon}</div>
      </div>
    </div>
  );
};

export default function StatsCards() {
  const { highRiskCount, pendingCount, frozenCount, alerts } = useRiskFraudStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatCard
        title="High-Risk Alerts"
        value={highRiskCount()}
        subtitle="Requires immediate attention"
        change="↓ 12%"
        changeType="down"
        icon={<AlertTriangle size={20} />}
        color="red"
      />
      <StatCard
        title="Pending Investigations"
        value={pendingCount()}
        subtitle="Active fraud cases"
        change="↓ 5%"
        changeType="down"
        icon={<Search size={20} />}
        color="orange"
      />
      <StatCard
        title="Frozen Accounts"
        value={frozenCount()}
        subtitle="Temporarily suspended"
        icon={<ShieldOff size={20} />}
        color="gray"
      />
      <StatCard
        title="Auto-Block Success"
        value="94.2%"
        subtitle="Automated prevention rate"
        change="↑ 2.3%"
        changeType="up"
        icon={<TrendingUp size={20} />}
        color="green"
      />
    </div>
  );
}