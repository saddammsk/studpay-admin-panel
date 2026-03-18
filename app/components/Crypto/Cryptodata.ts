import type { Wallet, Transaction } from "@/app/store/zustand/UsecryptoWalletstore";

export const VOLUME_DATA = [
  { day: "Mon", btc: 420000, eth: 280000, stable: 180000 },
  { day: "Tue", btc: 380000, eth: 310000, stable: 220000 },
  { day: "Wed", btc: 510000, eth: 260000, stable: 195000 },
  { day: "Thu", btc: 470000, eth: 340000, stable: 240000 },
  { day: "Fri", btc: 620000, eth: 390000, stable: 210000 },
  { day: "Sat", btc: 580000, eth: 420000, stable: 280000 },
  { day: "Sun", btc: 490000, eth: 360000, stable: 250000 },
];

export const RISK_CHART_DATA = [
  { hour: "00", flagged: 2 },
  { hour: "03", flagged: 1 },
  { hour: "06", flagged: 4 },
  { hour: "09", flagged: 8 },
  { hour: "12", flagged: 6 },
  { hour: "15", flagged: 11 },
  { hour: "18", flagged: 7 },
  { hour: "21", flagged: 3 },
];

export const WALLETS_DATA: Wallet[] = [
  { id: "W001", address: "0x3fA7...9cD2", owner: "Apex Capital LLC",    asset: "BTC",  balance: "$847,230",   kyc: "Verified", risk: 12, status: "Active",    txCount: 1842 },
  { id: "W002", address: "bc1q...m7Kp",   owner: "NovaTrade Partners", asset: "ETH",  balance: "$312,880",   kyc: "Pending",  risk: 67, status: "Flagged",   txCount: 394  },
  { id: "W003", address: "0x8bC1...4aF9", owner: "StellarFund Ltd",    asset: "USDT", balance: "$1,204,500", kyc: "Verified", risk: 8,  status: "Active",    txCount: 2910 },
  { id: "W004", address: "3J98t...1KyG",  owner: "Zeta Investments",   asset: "BTC",  balance: "$92,400",    kyc: "Failed",   risk: 89, status: "Suspended", txCount: 67   },
  { id: "W005", address: "0x2dE4...7bA3", owner: "Quantum Assets",     asset: "ETH",  balance: "$538,760",   kyc: "Verified", risk: 23, status: "Active",    txCount: 1105 },
  { id: "W006", address: "bc1p...n9Xw",   owner: "Meridian Trust",     asset: "USDC", balance: "$289,100",   kyc: "Verified", risk: 15, status: "Active",    txCount: 723  },
  { id: "W007", address: "0x5cA9...2eF1", owner: "Orion Capital",      asset: "ETH",  balance: "$176,340",   kyc: "Pending",  risk: 54, status: "Flagged",   txCount: 289  },
  { id: "W008", address: "1A1zP...7cGZ",  owner: "Genesis Holdings",   asset: "BTC",  balance: "$2,100,000", kyc: "Verified", risk: 5,  status: "Active",    txCount: 5421 },
  { id: "W009", address: "0x9fB2...3dC8", owner: "Vega Protocol",      asset: "USDT", balance: "$445,670",   kyc: "Verified", risk: 19, status: "Active",    txCount: 1650 },
  { id: "W010", address: "bc1q...r2Ht",   owner: "Polaris DAO",        asset: "ETH",  balance: "$67,890",    kyc: "Failed",   risk: 78, status: "Suspended", txCount: 43   },
  { id: "W011", address: "0x1dA7...8cB4", owner: "Cipher Ventures",    asset: "BTC",  balance: "$394,210",   kyc: "Verified", risk: 31, status: "Active",    txCount: 892  },
  { id: "W012", address: "3Ai1o...5pLm",  owner: "Nexus Digital",      asset: "USDC", balance: "$820,000",   kyc: "Verified", risk: 10, status: "Active",    txCount: 3201 },
];

export const TRANSACTIONS_DATA: Transaction[] = [
  { id: "TX001", hash: "0xf3a8...d21c", from: "0x3fA7...9cD2", to: "0x8bC1...4aF9", asset: "BTC",  amount: "$24,800",  fee: "$18.40", risk: "Low",      type: "Transfer",   time: "2m ago",  status: "Confirmed" },
  { id: "TX002", hash: "0xb7c2...09ef", from: "bc1q...m7Kp",   to: "3J98t...1KyG",  asset: "ETH",  amount: "$8,320",   fee: "$6.80",  risk: "High",     type: "Swap",       time: "7m ago",  status: "Flagged"   },
  { id: "TX003", hash: "0x1d94...77ab", from: "0x8bC1...4aF9", to: "0x2dE4...7bA3", asset: "USDT", amount: "$145,000", fee: "$2.10",  risk: "Medium",   type: "Transfer",   time: "15m ago", status: "Confirmed" },
  { id: "TX004", hash: "0xee31...4f88", from: "1A1zP...7cGZ",  to: "bc1p...n9Xw",   asset: "BTC",  amount: "$380,200", fee: "$42.00", risk: "Low",      type: "Transfer",   time: "23m ago", status: "Confirmed" },
  { id: "TX005", hash: "0xc5b7...2210", from: "0x5cA9...2eF1", to: "0x9fB2...3dC8", asset: "ETH",  amount: "$62,400",  fee: "$15.30", risk: "High",     type: "Bridge",     time: "31m ago", status: "Pending"   },
  { id: "TX006", hash: "0xa312...9d5f", from: "bc1q...r2Ht",   to: "0x1dA7...8cB4", asset: "USDT", amount: "$19,750",  fee: "$1.80",  risk: "Critical", type: "Transfer",   time: "44m ago", status: "Flagged"   },
  { id: "TX007", hash: "0x7fe9...c40b", from: "3Ai1o...5pLm",  to: "0x5cA9...2eF1", asset: "USDC", amount: "$94,600",  fee: "$3.20",  risk: "Low",      type: "Deposit",    time: "58m ago", status: "Confirmed" },
  { id: "TX008", hash: "0x28dc...1b77", from: "0x2dE4...7bA3", to: "bc1q...m7Kp",   asset: "ETH",  amount: "$11,280",  fee: "$9.10",  risk: "Medium",   type: "Withdrawal", time: "1h ago",  status: "Confirmed" },
];

export const STAT_CARDS = [
  { title: "Total Crypto Volume", value: "$2,847,392", sub2: "Across all assets", accent: "#f0c040", trend: "+12.5%", iconKey: "wallet"   as const },
  { title: "Active Wallets",      value: "1,284",      sub2: "Across all assets", accent: "#22d3a5", trend: "+8.3%",  iconKey: "activity" as const },
  { title: "Flagged Transfers",   value: "23",         sub2: "Requires review",   accent: "#ef4444", trend: "-4.2%",  iconKey: "alert"    as const },
  { title: "Gas Fees Reimbursed", value: "$12,450",    sub2: "Across all assets", accent: "#818cf8", trend: "+18.7%", iconKey: "fuel"     as const },
];

export const ASSET_FILTERS = ["All", "BTC", "ETH", "Stablecoins"] as const;
export const RISK_FILTERS  = ["All", "Low", "Medium", "High", "Critical"] as const;
export const EXPORT_FORMATS = ["CSV", "JSON", "PDF", "XLSX"] as const;
export const EXPORT_RANGES  = ["24h", "7d", "30d", "90d", "All Time"] as const;

export const WALLET_SORT_COLS: { label: string; key: keyof Wallet }[] = [
  { label: "Address",    key: "address" },
  { label: "Owner",      key: "owner"   },
  { label: "Asset",      key: "asset"   },
  { label: "Balance",    key: "balance" },
  { label: "Risk Score", key: "risk"    },
];

export const RISK_COLOR: Record<string, string> = {
  Low:      "#22d3a5",
  Medium:   "#f59e0b",
  High:     "#f97316",
  Critical: "#ef4444",
};

export const RISK_BG: Record<string, string> = {
  Low:      "rgba(34,211,165,0.12)",
  Medium:   "rgba(245,158,11,0.12)",
  High:     "rgba(249,115,22,0.12)",
  Critical: "rgba(239,68,68,0.12)",
};

export const KYC_COLOR: Record<string, string> = {
  Verified: "#22d3a5",
  Pending:  "#f59e0b",
  Failed:   "#ef4444",
};

export const STATUS_COLOR: Record<string, string> = {
  Active:    "#22d3a5",
  Flagged:   "#f97316",
  Suspended: "#ef4444",
  Confirmed: "#22d3a5",
  Pending:   "#f59e0b",
};

export const ASSET_COLOR: Record<string, string> = {
  BTC:  "#f0c040",
  ETH:  "#818cf8",
  USDT: "#22d3a5",
  USDC: "#22d3a5",
};