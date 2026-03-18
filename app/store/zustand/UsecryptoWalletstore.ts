import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type AssetFilter   = "All" | "BTC" | "ETH" | "Stablecoins";
export type RiskFilter    = "All" | "Low" | "Medium" | "High" | "Critical";
export type SortDir       = "asc" | "desc";
export type ExportFormat  = "CSV" | "JSON" | "PDF" | "XLSX";
export type ExportRange   = "24h" | "7d" | "30d" | "90d" | "All Time";

export interface Wallet {
  id:       string;
  address:  string;
  owner:    string;
  asset:    string;
  balance:  string;
  kyc:      "Verified" | "Pending" | "Failed";
  risk:     number;
  status:   "Active" | "Flagged" | "Suspended";
  txCount:  number;
}

export interface Transaction {
  id:     string;
  hash:   string;
  from:   string;
  to:     string;
  asset:  string;
  amount: string;
  fee:    string;
  risk:   "Low" | "Medium" | "High" | "Critical";
  type:   string;
  time:   string;
  status: "Confirmed" | "Pending" | "Flagged";
}

interface ExportState {
  format: ExportFormat;
  range:  ExportRange;
}

interface CryptoWalletState {
  assetFilter:       AssetFilter;
  walletSearch:      string;
  walletSortKey:     keyof Wallet;
  walletSortDir:     SortDir;
  walletPage:        number;
  walletPageSize:    number;
  txSearch:          string;
  txRiskFilter:      RiskFilter;
  txPage:            number;
  txPageSize:        number;
  exportModal:       boolean;
  exportState:       ExportState;
  walletDetailModal: Wallet | null;

  setAssetFilter:    (filter: AssetFilter)    => void;
  setWalletSearch:   (search: string)         => void;
  setWalletSort:     (key: keyof Wallet)      => void;
  setWalletPage:     (page: number)           => void;
  setTxSearch:       (search: string)         => void;
  setTxRiskFilter:   (filter: RiskFilter)     => void;
  setTxPage:         (page: number)           => void;
  openExportModal:   ()                       => void;
  closeExportModal:  ()                       => void;
  setExportFormat:   (format: ExportFormat)   => void;
  setExportRange:    (range: ExportRange)     => void;
  openWalletDetail:  (wallet: Wallet)         => void;
  closeWalletDetail: ()                       => void;
  resetWalletFilters:()                       => void;
  resetTxFilters:    ()                       => void;
}

export const UsecryptoWalletstore = create<CryptoWalletState>()(
  devtools(
    (set) => ({
      assetFilter:       "All",
      walletSearch:      "",
      walletSortKey:     "balance",
      walletSortDir:     "desc",
      walletPage:        1,
      walletPageSize:    5,
      txSearch:          "",
      txRiskFilter:      "All",
      txPage:            1,
      txPageSize:        5,
      exportModal:       false,
      exportState: {
        format: "CSV",
        range:  "7d",
      },
      walletDetailModal: null,

      setAssetFilter: (filter) =>
        set(
          { assetFilter: filter, walletPage: 1, txPage: 1 },
          false,
          "setAssetFilter"
        ),

      setWalletSearch: (search) =>
        set(
          { walletSearch: search, walletPage: 1 },
          false,
          "setWalletSearch"
        ),

      setWalletSort: (key) =>
        set(
          (state) => ({
            walletSortKey: key,
            walletSortDir:
              state.walletSortKey === key && state.walletSortDir === "asc"
                ? "desc"
                : "asc",
            walletPage: 1,
          }),
          false,
          "setWalletSort"
        ),

      setWalletPage: (page) =>
        set({ walletPage: page }, false, "setWalletPage"),

      setTxSearch: (search) =>
        set({ txSearch: search, txPage: 1 }, false, "setTxSearch"),

      setTxRiskFilter: (filter) =>
        set({ txRiskFilter: filter, txPage: 1 }, false, "setTxRiskFilter"),

      setTxPage: (page) =>
        set({ txPage: page }, false, "setTxPage"),

      openExportModal: () =>
        set({ exportModal: true }, false, "openExportModal"),

      closeExportModal: () =>
        set({ exportModal: false }, false, "closeExportModal"),

      setExportFormat: (format) =>
        set(
          (state) => ({ exportState: { ...state.exportState, format } }),
          false,
          "setExportFormat"
        ),

      setExportRange: (range) =>
        set(
          (state) => ({ exportState: { ...state.exportState, range } }),
          false,
          "setExportRange"
        ),

      openWalletDetail: (wallet) =>
        set({ walletDetailModal: wallet }, false, "openWalletDetail"),

      closeWalletDetail: () =>
        set({ walletDetailModal: null }, false, "closeWalletDetail"),

      resetWalletFilters: () =>
        set(
          {
            walletSearch:  "",
            walletSortKey: "balance",
            walletSortDir: "desc",
            walletPage:    1,
          },
          false,
          "resetWalletFilters"
        ),

      resetTxFilters: () =>
        set(
          { txSearch: "", txRiskFilter: "All", txPage: 1 },
          false,
          "resetTxFilters"
        ),
    }),
    { name: "CryptoWalletStore" }
  )
);

export const selectFilteredWallets = (
  wallets:       Wallet[],
  assetFilter:   AssetFilter,
  walletSearch:  string,
  walletSortKey: keyof Wallet,
  walletSortDir: SortDir
): Wallet[] => {
  let result = wallets.filter((w) => {
    if (assetFilter === "All")          return true;
    if (assetFilter === "Stablecoins")  return ["USDT", "USDC"].includes(w.asset);
    return w.asset === assetFilter;
  });

  if (walletSearch.trim()) {
    const q = walletSearch.toLowerCase();
    result = result.filter(
      (w) =>
        w.owner.toLowerCase().includes(q) ||
        w.address.toLowerCase().includes(q)
    );
  }

  return [...result].sort((a, b) => {
    let av: number | string = a[walletSortKey] as number | string;
    let bv: number | string = b[walletSortKey] as number | string;

    if (walletSortKey === "balance") {
      av = parseFloat(String(av).replace(/[$,]/g, ""));
      bv = parseFloat(String(bv).replace(/[$,]/g, ""));
    }
    if (walletSortKey === "risk" || walletSortKey === "txCount") {
      av = Number(av);
      bv = Number(bv);
    }

    if (av < bv) return walletSortDir === "asc" ? -1 : 1;
    if (av > bv) return walletSortDir === "asc" ? 1  : -1;
    return 0;
  });
};

export const selectFilteredTransactions = (
  transactions: Transaction[],
  assetFilter:  AssetFilter,
  txSearch:     string,
  txRiskFilter: RiskFilter
): Transaction[] => {
  let result = transactions.filter((t) => {
    if (assetFilter === "All")         return true;
    if (assetFilter === "Stablecoins") return ["USDT", "USDC"].includes(t.asset);
    return t.asset === assetFilter;
  });

  if (txSearch.trim()) {
    const q = txSearch.toLowerCase();
    result = result.filter(
      (t) =>
        t.hash.toLowerCase().includes(q) ||
        t.from.toLowerCase().includes(q) ||
        t.to.toLowerCase().includes(q)
    );
  }

  if (txRiskFilter !== "All") {
    result = result.filter((t) => t.risk === txRiskFilter);
  }

  return result;
};

export const paginateData = <T>(
  data:     T[],
  page:     number,
  pageSize: number
): T[] => data.slice((page - 1) * pageSize, page * pageSize);