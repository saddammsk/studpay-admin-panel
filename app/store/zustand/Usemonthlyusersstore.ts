import { create } from "zustand";

export interface CountryPoint {
  name: string;
  flag: string;
  lat: number;
  lon: number;
  users: number;
  color: string;
}

export interface PeriodData {
  label: string;
  value: string;
  totalUsers: string;
  growth: string;
  isPositive: boolean;
  totalAmount: string;
  accounts: number;
  donutValue: number;
  countries: CountryPoint[];
}

const DATA: Record<string, PeriodData> = {
  "this-month": {
    label: "This Month",
    value: "this-month",
    totalUsers: "72.8K",
    growth: "2.1%",
    isPositive: true,
    totalAmount: "€9,124,230",
    accounts: 306,
    donutValue: 65,
    countries: [
      { name: "Germany",   flag: "🇩🇪", lat: 51.165,  lon: 10.451,   users: 12400, color: "#38BDF8" },
      { name: "Australia", flag: "🇦🇺", lat: -25.274, lon: 133.775,  users: 8900,  color: "#34D399" },
      { name: "Pakistan",  flag: "🇵🇰", lat: 30.375,  lon: 69.345,   users: 15200, color: "#FBBF24" },
      { name: "Brazil",    flag: "🇧🇷", lat: -14.235, lon: -51.925,  users: 19300, color: "#F472B6" },
      { name: "Canada",    flag: "🇨🇦", lat: 56.13,   lon: -106.346, users: 17000, color: "#A78BFA" },
    ],
  },
  "last-month": {
    label: "Last Month",
    value: "last-month",
    totalUsers: "68.4K",
    growth: "1.4%",
    isPositive: true,
    totalAmount: "€8,540,100",
    accounts: 289,
    donutValue: 58,
    countries: [
      { name: "Germany",   flag: "🇩🇪", lat: 51.165,  lon: 10.451,   users: 11200, color: "#38BDF8" },
      { name: "Australia", flag: "🇦🇺", lat: -25.274, lon: 133.775,  users: 7800,  color: "#34D399" },
      { name: "Pakistan",  flag: "🇵🇰", lat: 30.375,  lon: 69.345,   users: 13900, color: "#FBBF24" },
      { name: "Brazil",    flag: "🇧🇷", lat: -14.235, lon: -51.925,  users: 17200, color: "#F472B6" },
      { name: "Canada",    flag: "🇨🇦", lat: 56.13,   lon: -106.346, users: 18300, color: "#A78BFA" },
    ],
  },
  "last-3-months": {
    label: "Last 3 Months",
    value: "last-3-months",
    totalUsers: "198.6K",
    growth: "5.7%",
    isPositive: true,
    totalAmount: "€24,310,500",
    accounts: 841,
    donutValue: 72,
    countries: [
      { name: "Germany",   flag: "🇩🇪", lat: 51.165,  lon: 10.451,   users: 34200, color: "#38BDF8" },
      { name: "Australia", flag: "🇦🇺", lat: -25.274, lon: 133.775,  users: 25600, color: "#34D399" },
      { name: "Pakistan",  flag: "🇵🇰", lat: 30.375,  lon: 69.345,   users: 45100, color: "#FBBF24" },
      { name: "Brazil",    flag: "🇧🇷", lat: -14.235, lon: -51.925,  users: 52300, color: "#F472B6" },
      { name: "Canada",    flag: "🇨🇦", lat: 56.13,   lon: -106.346, users: 41400, color: "#A78BFA" },
    ],
  },
};

interface MonthlyUsersState {
  selectedPeriod: string;
  data: PeriodData;
  options: { label: string; value: string }[];
  setSelectedPeriod: (period: string) => void;
}

export const useMonthlyUsersStore = create<MonthlyUsersState>((set) => ({
  selectedPeriod: "this-month",
  data: DATA["this-month"],
  options: Object.values(DATA).map((d) => ({ label: d.label, value: d.value })),
  setSelectedPeriod: (period) =>
    set({ selectedPeriod: period, data: DATA[period] ?? DATA["this-month"] }),
}));