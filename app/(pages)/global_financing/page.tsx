"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  ShieldAlert,
  CreditCard,
  ArrowLeftRight,
  Wallet,
  PiggyBank,
  Home,
  ShieldCheck,
  Umbrella,
  ShoppingBag,
  Gift,
  AlertTriangle,
  Bitcoin,
  Lock,
  ClipboardList,
  MessageSquare,
  Handshake,
  FileText,
  BarChart2,
  Activity,
  Globe,
  Eye, 
  SlidersHorizontal,
  ArrowUpDown,
  TrendingUp,
  Clock, 
  BookOpen,
  Users2,
  Terminal,
  CheckCircle,
  AlertCircle,
  XCircle,
} from "lucide-react";

type Status = "Approved" | "Under Review" | "Pending" | "Rejected";
type NavItem = {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  href?: string;
};
type NavGroup = { title: string; items: NavItem[] };

const loanData = [
  {
    id: "STD-2024-001",
    applicant: "Ahmed Benali",
    amount: "€25,000",
    bank: "Deutsche Bank",
    manager: "Klaus Fischer",
    phone: "+49 170 123456",
    sla: 3,
    slaColor: "text-green-600",
    status: "Approved" as Status,
    score: 87,
    scoreColor: "text-green-600 bg-green-50",
  },
  {
    id: "STD-2024-002",
    applicant: "Marie Dupont",
    amount: "€18,500",
    bank: "BNP Paribas",
    manager: "Jean-Pierre Moreau",
    phone: "+33 6 12345678",
    sla: 7,
    slaColor: "text-yellow-500",
    status: "Under Review" as Status,
    score: 72,
    scoreColor: "text-yellow-600 bg-yellow-50",
  },
  {
    id: "STD-2024-003",
    applicant: "Carlos Mendes",
    amount: "€32,000",
    bank: "Société Générale",
    manager: "Isabelle Laurent",
    phone: "+33 7 06765432",
    sla: 12,
    slaColor: "text-red-500",
    status: "Pending" as Status,
    score: 58,
    scoreColor: "text-red-500 bg-red-50",
  },
  {
    id: "STD-2024-004",
    applicant: "Fatima Zahra",
    amount: "€21,000",
    bank: "Deutsche Bank",
    manager: "Klaus Fischer",
    phone: "+49 170 123456",
    sla: 1,
    slaColor: "text-green-600",
    status: "Approved" as Status,
    score: 93,
    scoreColor: "text-green-600 bg-green-50",
  },
  {
    id: "STD-2024-005",
    applicant: "Liam O'Brien",
    amount: "€15,000",
    bank: "ABN AMRO",
    manager: "Pieter van den Berg",
    phone: "+31 6 87054321",
    sla: 5,
    slaColor: "text-yellow-500",
    status: "Under Review" as Status,
    score: 65,
    scoreColor: "text-yellow-600 bg-yellow-50",
  },
  {
    id: "STD-2024-006",
    applicant: "Yuki Tanaka",
    amount: "€28,000",
    bank: "BNP Paribas",
    manager: "Sophie Martin",
    phone: "+33 6 55483323",
    sla: 15,
    slaColor: "text-red-500",
    status: "Rejected" as Status,
    score: 34,
    scoreColor: "text-red-500 bg-red-50",
  },
  {
    id: "STD-2024-007",
    applicant: "Anna Kowalski",
    amount: "€19,500",
    bank: "Deutsche Bank",
    manager: "Markus Weber",
    phone: "+49 171 654321",
    sla: 2,
    slaColor: "text-green-600",
    status: "Approved" as Status,
    score: 88,
    scoreColor: "text-green-600 bg-green-50",
  },
];

const navGroups: NavGroup[] = [
  {
    title: "CORE OPS",
    items: [
      { label: "Dashboard", icon: <LayoutDashboard size={16} /> },
      { label: "Users / Students", icon: <Users size={16} /> },
    ],
  },
  {
    title: "FINANCIAL SERVICES",
    items: [
      { label: "AVI & Blocked", icon: <ShieldAlert size={16} /> },
      { label: "Financing", icon: <CreditCard size={16} />, active: true },
      { label: "Financing Guaranty", icon: <ShieldCheck size={16} /> },
      { label: "Payments & Transfers", icon: <ArrowLeftRight size={16} /> },
      { label: "Accounts & Balance", icon: <Wallet size={16} /> },
      { label: "FX Management", icon: <BarChart2 size={16} /> },
      { label: "Savings & Pots", icon: <PiggyBank size={16} /> },
    ],
  },
  {
    title: "MARKETPLACE & SERVICES",
    items: [
      { label: "Housing", icon: <Home size={16} /> },
      { label: "Guarantees", icon: <ShieldCheck size={16} /> },
      { label: "Insurance", icon: <Umbrella size={16} /> },
      { label: "Marketplace", icon: <ShoppingBag size={16} /> },
      { label: "Cashback & Rewards", icon: <Gift size={16} /> },
    ],
  },
  {
    title: "COMPLIANCE & SAFETY",
    items: [
      { label: "Risk & Fraud", icon: <AlertTriangle size={16} /> },
      { label: "Crypto Wallet", icon: <Bitcoin size={16} /> },
      { label: "Stud Safe", icon: <Lock size={16} /> },
      { label: "Audit Logs", icon: <ClipboardList size={16} /> },
    ],
  },
  {
    title: "PLATFORM MANAGEMENT",
    items: [
      { label: "Support Inbox", icon: <MessageSquare size={16} /> },
      { label: "Partnerships", icon: <Handshake size={16} /> },
      { label: "Content CMS", icon: <FileText size={16} /> },
    ],
  },
  {
    title: "GLOBAL INSIGHTS",
    items: [
      { label: "Finance Analytics", icon: <TrendingUp size={16} /> },
      { label: "User Activity Insights", icon: <Activity size={16} /> },
      { label: "Country-Based Stats", icon: <Globe size={16} /> },
      { label: "Sale view", icon: <Eye size={16} /> },
    ],
  },
];

const StatusBadge = ({ status }: { status: Status }) => {
  const config: Record<
    Status,
    { icon: React.ReactNode; label: string; className: string }
  > = {
    Approved: {
      icon: <CheckCircle size={12} className="text-green-600" />,
      label: "Approved",
      className: "bg-green-50 text-green-700 border border-green-200",
    },
    "Under Review": {
      icon: <AlertCircle size={12} className="text-yellow-500" />,
      label: "Under Review",
      className: "bg-yellow-50 text-yellow-700 border border-yellow-200",
    },
    Pending: {
      icon: <Clock size={12} className="text-blue-500" />,
      label: "Pending",
      className: "bg-blue-50 text-blue-700 border border-blue-200",
    },
    Rejected: {
      icon: <XCircle size={12} className="text-red-500" />,
      label: "Rejected",
      className: "bg-red-50 text-red-700 border border-red-200",
    },
  };

  const c = config[status];
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${c.className}`}
    >
      {c.icon}
      {c.label}
    </span>
  );
};

const ScoreBadge = ({
  score,
  colorClass,
}: {
  score: number;
  colorClass: string;
}) => (
  <span
    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${colorClass} border border-current/20`}
  >
    <Activity size={11} />
    {score}
  </span>
);

const CircularProgress = ({ value }: { value: number }) => {
  const r = 44;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;

  return (
    <div className="relative w-28 h-28">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="#f0fdf4"
          strokeWidth="10"
        />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="#22c55e"
          strokeWidth="10"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-bold text-gray-800">{value}%</span>
        <span className="text-[10px] text-gray-500 font-medium">On-Time</span>
      </div>
    </div>
  );
};

export default function FinanceAnalytics() {
  const [activeTab, setActiveTab] = useState<"loan" | "partner" | "api">(
    "loan",
  ); 
  return (
    <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <p className="text-xs text-gray-500 font-medium">
                Total Loan Volume
              </p>
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <BookOpen size={15} className="text-blue-500" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 tracking-tight">
              €2,450,000
            </p>
            <p className="text-xs text-gray-400 mt-1">Active portfolio</p>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp size={12} className="text-green-500" />
              <span className="text-xs font-semibold text-green-600">
                12.5%
              </span>
              <span className="text-xs text-gray-400">vs last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <p className="text-xs text-gray-500 font-medium">
                Pending Applications
              </p>
              <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                <Users2 size={15} className="text-orange-400" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 tracking-tight">
              12
            </p>
            <p className="text-xs text-gray-400 mt-1">Awaiting review</p>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp size={12} className="text-green-500" />
              <span className="text-xs font-semibold text-green-600">
                3 new today
              </span>
              <span className="text-xs text-gray-400">vs last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <p className="text-xs text-gray-500 font-medium">
                Avg. Processing Time
              </p>
              <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                <TrendingUp size={15} className="text-purple-400" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 tracking-tight">
              2.4 days
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Application to approval
            </p>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp size={12} className="text-green-500" />
              <span className="text-xs font-semibold text-green-600">8%</span>
              <span className="text-xs text-gray-400">vs last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <p className="text-xs text-gray-500 font-medium">
                Repayment Health
              </p>
            </div>
            <div className="flex items-center justify-center">
              <CircularProgress value={92.6} />
            </div>
            <div className="flex items-center justify-center gap-4 mt-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs text-gray-500">On-Time: 847</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-orange-400" />
                <span className="text-xs text-gray-500">Late: 67</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center border-b border-gray-100 px-4">
            {[
              {
                key: "loan" as const,
                label: "Loan Ledger",
                icon: <BookOpen size={13} />,
              },
              {
                key: "partner" as const,
                label: "Partner Management",
                icon: <Handshake size={13} />,
              },
              {
                key: "api" as const,
                label: "API Console",
                icon: <Terminal size={13} />,
              },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-1.5 px-4 py-3 text-xs font-semibold border-b-2 transition-all ${
                  activeTab === tab.key
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  <SlidersHorizontal size={12} />
                  Filters
                </button>
                <button className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  <ArrowUpDown size={12} />
                  Sort
                </button>
              </div>
              <span className="text-xs text-gray-400">
                {loanData.length} records
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    {[
                      "DOSSIER ID",
                      "APPLICANT",
                      "AMOUNT",
                      "INSTRUCTING BANK",
                      "CASE MANAGER",
                      "SLA (DAYS)",
                      "STATUS",
                      "AI SCORE",
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left text-[10px] font-semibold text-gray-400 tracking-wider pb-2.5 pr-4"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {loanData.map((row) => (
                    <tr
                      key={row.id}
                      className="hover:bg-gray-50/50 transition-colors group"
                    >
                      <td className="py-3 pr-4">
                        <span className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer">
                          {row.id}
                        </span>
                      </td>
                      <td className="py-3 pr-4">
                        <span className="text-xs font-medium text-gray-700">
                          {row.applicant}
                        </span>
                      </td>
                      <td className="py-3 pr-4">
                        <span className="text-xs font-semibold text-gray-800">
                          {row.amount}
                        </span>
                      </td>
                      <td className="py-3 pr-4">
                        <span className="text-xs text-gray-600">
                          {row.bank}
                        </span>
                      </td>
                      <td className="py-3 pr-4">
                        <p className="text-xs font-medium text-gray-700">
                          {row.manager}
                        </p>
                        <p className="text-[10px] text-gray-400">{row.phone}</p>
                      </td>
                      <td className="py-3 pr-4">
                        <span className={`text-xs font-bold ${row.slaColor}`}>
                          {row.sla}d
                        </span>
                      </td>
                      <td className="py-3 pr-4">
                        <StatusBadge status={row.status} />
                      </td>
                      <td className="py-3">
                        <ScoreBadge
                          score={row.score}
                          colorClass={row.scoreColor}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
