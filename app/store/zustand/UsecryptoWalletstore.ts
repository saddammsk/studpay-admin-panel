import { create } from "zustand";

export type KycStatus = "Verified" | "Pending" | "Failed";
export type TxStatus = "Confirmed" | "Pending";
export type RiskFlag = "High Value" | "Linked to Mixer";
export type AssetFilter = "All" | "BTC" | "ETH" | "Stablecoins";

export interface Wallet {

  id: string;
  address: string;
  student: string;
  asset: string;
  value: string;
  valueRaw: number;
  kyc: KycStatus;
  risk: number;
}

export interface Transaction {
  hash: string;
  from: string;
  to: string;
  amount: string;
  asset: string;
  status: TxStatus;
  risk?: RiskFlag;
  time: string;
}

const STABLECOINS = ["USDC", "USDT", "DAI"];

const allWallets: Wallet[] = [
  {id: "1",address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0b1e2", student: "Emma Johnson", asset: "ETH", value: "€4,523.50", valueRaw: 4523.5, kyc: "Verified", risk: 12 },
  {id: "2", address: "0x1f98431c8aD98523631AE4a59f267346ea31F984", student: "Michael Chen", asset: "USDC", value: "€12,890.00", valueRaw: 12890, kyc: "Verified", risk: 8 },
  {id: "3",  address: "0xdAC17F958D2ee523a2206206994597C13D831ec7", student: "Sarah Williams", asset: "BTC", value: "€8,750.25", valueRaw: 8750.25, kyc: "Pending", risk: 45 },
  {id: "4", address: "0x6B175474E89094C44Da98b954EedeAC495271d0F", student: "Lisa Park", asset: "DAI", value: "€6,420.00", valueRaw: 6420, kyc: "Failed", risk: 78 },
  {id: "5", address: "0x3A98B43bD3f29C2C2c0dA16E176b6a66CCa6E234", student: "David Thompson", asset: "ETH", value: "€2,150.90", valueRaw: 2150.9, kyc: "Verified", risk: 18 },
  {id: "6", address: "0x98f3c9E6b1F7E1a72D27D6e92f3E17E43C9bA678", student: "Olivia Martinez", asset: "USDT", value: "€15,300.75", valueRaw: 15300.75, kyc: "Pending", risk: 52 },
];

const allTransactions: Transaction[] = [
  { hash: "0x8a7d953e...0c9d8e7f", from: "0x742d...b1e2", to: "0x1f98...F984", amount: "2.5", asset: "ETH", status: "Confirmed", time: "2 min ago" },
  { hash: "0x1b2c3d4e...9f0a1b2c", from: "0xdAC1...1ec7", to: "0xA0b8...eB48", amount: "15,000", asset: "USDC", status: "Pending", risk: "High Value", time: "5 min ago" },
  { hash: "0x3c4d5e6f...1a2b3c4d", from: "0x6B17...De0F", to: "0x2260...C599", amount: "0.85", asset: "BTC", status: "Confirmed", risk: "Linked to Mixer", time: "12 min ago" },
  { hash: "0x5e6f7a8b...3c4d5e6f", from: "0x1f98...F984", to: "0x742d...b1e2", amount: "500", asset: "DAI", status: "Confirmed", time: "18 min ago" },
  { hash: "0x7a8b9c0d...5e6f7a8b", from: "0x2260...C599", to: "0x6B17...De0F", amount: "3.2", asset: "ETH", status: "Pending", time: "24 min ago" },
];

// Detail page transaction history (TransactionTable data)
export interface TxHistoryItem {
  hash: string;
  from: string;
  to: string;
  amount: string;
  asset: string;
  type: "Incoming" | "Outgoing" | "Internal";
  risk: "Low" | "Medium" | "High" | "None";
  status: TxStatus;
  time: string;
}

const allTxHistory: TxHistoryItem[] = [
  { hash: "0x8a7d953e...0c9d8e7f", from: "0x742d...b1e2", to: "0x1f98...F984", amount: "2.5 BTC", asset: "BTC", type: "Incoming", risk: "Low", status: "Confirmed", time: "2 min ago" },
  { hash: "0x1b2c3d4e...9f0a1b2c", from: "0xdAC1...1ec7", to: "0xA0b8...eB48", amount: "15,000 USDC", asset: "USDC", type: "Outgoing", risk: "High", status: "Pending", time: "5 min ago" },
  { hash: "0x3c4d5e6f...1a2b3c4d", from: "0x6B17...De0F", to: "0x2260...C599", amount: "0.85 BTC", asset: "BTC", type: "Internal", risk: "High", status: "Confirmed", time: "12 min ago" },
  { hash: "0x5e6f7a8b...3c4d5e6f", from: "0x1f98...F984", to: "0x742d...b1e2", amount: "500 DAI", asset: "DAI", type: "Incoming", risk: "None", status: "Confirmed", time: "18 min ago" },
  { hash: "0x7a8b9c0d...5e6f7a8b", from: "0x2260...C599", to: "0x6B17...De0F", amount: "3.2 ETH", asset: "ETH", type: "Outgoing", risk: "Medium", status: "Pending", time: "24 min ago" },
  { hash: "0x9c0d1e2f...7a8b9c0d", from: "0x3A98...E234", to: "0x742d...b1e2", amount: "1.1 ETH", asset: "ETH", type: "Incoming", risk: "Low", status: "Confirmed", time: "31 min ago" },
];

interface CryptoStore {
  // Main page
  assetFilter: AssetFilter;
  setAssetFilter: (f: AssetFilter) => void;
  getFilteredWallets: () => Wallet[];

  // Detail page
  txSearch: string;
  txRiskFilter: string;
  txTypeFilter: string;
  setTxSearch: (v: string) => void;
  setTxRiskFilter: (v: string) => void;
  setTxTypeFilter: (v: string) => void;
  getFilteredTxHistory: () => TxHistoryItem[];

  // Raw data (for tables that don't filter)
  wallets: Wallet[];
  transactions: Transaction[];
}

export const UsecryptoWalletstore = create<CryptoStore>((set, get) => ({
  assetFilter: "All",
  txSearch: "",
  txRiskFilter: "All Risks",
  txTypeFilter: "All Types",
  wallets: allWallets,
  transactions: allTransactions,

  setAssetFilter: (assetFilter) => set({ assetFilter }),
  setTxSearch: (txSearch) => set({ txSearch }),
  setTxRiskFilter: (txRiskFilter) => set({ txRiskFilter }),
  setTxTypeFilter: (txTypeFilter) => set({ txTypeFilter }),

  getFilteredWallets: () => {
    const { assetFilter, wallets } = get();
    if (assetFilter === "All") return wallets;
    if (assetFilter === "BTC") return wallets.filter((w) => w.asset === "BTC");
    if (assetFilter === "ETH") return wallets.filter((w) => w.asset === "ETH");
    if (assetFilter === "Stablecoins") return wallets.filter((w) => STABLECOINS.includes(w.asset));
    return wallets;
  },

  getFilteredTxHistory: () => {
    const { txSearch, txRiskFilter, txTypeFilter } = get();
    return allTxHistory.filter((tx) => {
      const q = txSearch.toLowerCase();
      const matchSearch = q === "" || tx.hash.toLowerCase().includes(q) || tx.from.toLowerCase().includes(q) || tx.to.toLowerCase().includes(q);
      const matchRisk = txRiskFilter === "All Risks" || tx.risk === txRiskFilter;
      const matchType = txTypeFilter === "All Types" || tx.type === txTypeFilter;
      return matchSearch && matchRisk && matchType;
    });
  },
}));