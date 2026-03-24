'use client';

import TopBar from "@/app/components/common/TopBar";
import Link from "next/link";
import { AlertTriangle, Activity, Fuel, Wallet, Bitcoin, Hexagon, Coins } from "lucide-react";
import StatusCard2 from "@/app/components/StatusCard2";
import WalletMonitoringTable from "@/app/components/WalletMonitoringTable";
import RecentTransactionsTable from "@/app/components/RecentTransactionsTable";
import { UsecryptoWalletstore } from "@/app/store/zustand/UsecryptoWalletstore";
import type { AssetFilter } from "@/app/store/zustand/UsecryptoWalletstore";

const ASSET_TABS: { label: string; value: AssetFilter; icon?: React.ReactNode }[] = [
  { label: "All", value: "All" },
  { label: "BTC", value: "BTC", icon: <Bitcoin size={14} /> },
  { label: "ETH", value: "ETH", icon: <Coins size={14} /> },
  { label: "Stablecoins", value: "Stablecoins", icon: <Hexagon size={14} /> },
];

function CryptoWalletPage() {
  const assetFilter = UsecryptoWalletstore((s) => s.assetFilter);
  const setAssetFilter = UsecryptoWalletstore((s) => s.setAssetFilter);
  const wallets = UsecryptoWalletstore((s) => s.wallets);

  const handleExport = () => {
    const STABLECOINS = ["USDC", "USDT", "DAI"];
    const filtered =
      assetFilter === "All" ? wallets
      : assetFilter === "BTC" ? wallets.filter((w) => w.asset === "BTC")
      : assetFilter === "ETH" ? wallets.filter((w) => w.asset === "ETH")
      : wallets.filter((w) => STABLECOINS.includes(w.asset));

    const headers = ["Wallet Address", "Student", "Asset", "Value", "KYC Status", "Risk Score"];
    const rows = filtered.map((w) => [w.address, w.student, w.asset, w.value, w.kyc, String(w.risk)]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `wallet-ledger-${assetFilter.toLowerCase()}-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
        <TopBar />
        <div className="flex items-center mt-2 pb-4 px-6 justify-between flex-wrap gap-5 mb-6">
          <div className="xl:flex-1">
            <h6 className="text-2xl font-bold leading-7 text-black-1600">Crypto Assets Control</h6>
            <p className="text-sm font-normal leading-5 text-gray-1900">Monitor wallet activity and compliance status</p>
          </div>
          <Link href="/" className="text-sm font-medium leading-5 text-gray-1900 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-3500 block"></span>
            Real-time sync
          </Link>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
            <StatusCard2
              title="Total Crypto Volume"
              value="$2,847,392"
              subtitle="↑ 12.5% vs last month"
              subtitle2="Across all assets"
              icon={<Wallet size={18} />}
              variant="default"
            />
            <StatusCard2
              title="Active Wallets"
              value="1,284"
              subtitle="↑ 8.3% vs last month"
              icon={<Activity size={18} />}
              subtitle2="Across all assets"
              variant="success"
              highlight
            />
            <StatusCard2
              title="Flagged Transfers"
              value="23"
              subtitle="↓ 4.2% vs last month"
              positive={false}
              subtitle2="Across all assets"
              icon={<AlertTriangle size={18} />}
              variant="danger"
            />
            <StatusCard2
              title="Gas Fees Reimbursed"
              value="$12,450"
              subtitle2="Across all assets"
              subtitle="↑ 18.7% vs last month"
              icon={<Fuel size={18} />}
              variant="info"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <div className="flex items-center flex-wrap gap-3">
              <span className="text-sm font-normal text-gray-1900 flex items-center gap-2">
                <img src="/images/filter-icon2.svg" alt="" /> Filter by Asset:
              </span>
              <div className="flex gap-1">
                {ASSET_TABS.map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => setAssetFilter(tab.value)}
                    className={`px-3 py-1.5 border-0 text-sm flex items-center gap-1.5 rounded-lg transition-colors ${
                      assetFilter === tab.value
                        ? "bg-black text-white"
                        : "text-blue-1300 hover:bg-gray-100"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleExport}
              className="bg-yellow-2700 flex items-center gap-2 text-blue-1300 px-4 py-2 cursor-pointer rounded-lg text-sm font-normal transition"
            >
              <img src="/images/export-icon4.svg" alt="" />
              Export Ledger for Regulatory Reporting
            </button>
          </div>

          <div className="mb-6">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-blue-1300">Wallet Monitoring Ledger</h2>
              <p className="text-sm leading-5 text-gray-1900">Track wallet balances, KYC status, and risk scores</p>
            </div>
            <WalletMonitoringTable />
          </div>

          <div className="">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-blue-1300">Recent On-Chain Transactions</h2>
              <p className="text-sm leading-5 text-gray-1900">Latest blockchain activity with risk analysis</p>
            </div>
            <RecentTransactionsTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoWalletPage;