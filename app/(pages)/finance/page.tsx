"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  ChevronDown,
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
  Settings,
  HelpCircle,
  Bell,
  Plus,
  SlidersHorizontal,
  ArrowUpDown,
  TrendingUp,
  Clock,
  Heart,
  ChevronLeft,
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
  const config: Record<Status, { icon: React.ReactNode; label: string; className: string }> = {
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
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${c.className}`}>
      {c.icon}
      {c.label}
    </span>
  );
};

const ScoreBadge = ({ score, colorClass }: { score: number; colorClass: string }) => (
  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${colorClass} border border-current/20`}>
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
        <circle cx="50" cy="50" r={r} fill="none" stroke="#f0fdf4" strokeWidth="10" />
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

export default function GlobalFinancing() {
  const [activeTab, setActiveTab] = useState<"loan" | "partner" | "api">("loan");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      

      <main className="flex-1 flex flex-col overflow-hidden">
         
        
      </main>
    </div>
  );
}
