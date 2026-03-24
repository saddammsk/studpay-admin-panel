"use client";

import { useRouter } from "next/navigation";
import { Link2, Copy, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { UsecryptoWalletstore } from "@/app/store/zustand/UsecryptoWalletstore";

export default function WalletMonitoringTable() {
  const router = useRouter();
  const assetFilter = UsecryptoWalletstore((s) => s.assetFilter);
  const wallets = UsecryptoWalletstore((s) => s.wallets);

  const filtered = (() => {
    const STABLECOINS = ["USDC", "USDT", "DAI"];
    if (assetFilter === "All") return wallets;
    if (assetFilter === "BTC") return wallets.filter((w) => w.asset === "BTC");
    if (assetFilter === "ETH") return wallets.filter((w) => w.asset === "ETH");
    if (assetFilter === "Stablecoins") return wallets.filter((w) => STABLECOINS.includes(w.asset));
    return wallets;
  })();

  return (
    <div className="overflow-x-auto bg-white border border-grey-5400 rounded-[10px]">
      <table className="w-full text-sm">
        <thead className="text-left text-gray-1900 border-b border-grey-5400">
          <tr>
            <th className="py-3 px-4 font-normal">Wallet Address</th>
            <th className="font-normal">Student Name</th>
            <th className="font-normal">Primary Asset</th>
            <th className="font-normal">Total Value (EUR)</th>
            <th className="font-normal">KYC Status</th>
            <th className="font-normal">Risk Score</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan={6} className="py-10 px-4 text-center text-sm text-gray-1900">
                No wallets found for selected filter.
              </td>
            </tr>
          ) : (
            filtered.map((wallet, index) => {
              const riskLabel =
                wallet.risk < 20 ? "Low" : wallet.risk < 60 ? "Medium" : "High";

              return (
                <tr
                  key={index}
                  onClick={() => router.push(`/crypto_wallet/${wallet.id}`)}
                  className="border-b border-grey-5400 last:border-none hover:bg-gray-50 transition cursor-pointer"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <Link2 size={14} className="text-blue1400" />
                      <span className="text-sm font-normal text-black-1300 truncate max-w-27.5">
                        {wallet.address}
                      </span>
                      <Copy
                        size={14}
                        className="text-gray-1900 cursor-pointer hover:text-black"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator.clipboard.writeText(wallet.address);
                        }}
                      />
                    </div>
                  </td>
                  <td className="text-sm font-normal text-black-1300">{wallet.student}</td>
                  <td className="font-normal text-black-1300 text-xs">
                    <span className="py-0.5 px-2.5 rounded-full bg-gray-6100">{wallet.asset}</span>
                  </td>
                  <td className="text-sm font-normal text-black-1300">{wallet.value}</td>
                  <td>
                    <span
                      className={`flex items-center gap-1 px-2 text-xs border rounded-full font-medium w-fit ${
                        wallet.kyc === "Verified"
                          ? "bg-green-3500/10 text-green-3500 border-green-3500/30"
                          : wallet.kyc === "Pending"
                          ? "bg-yellow-1100/10 text-yellow-1100 border-yellow-1100/30"
                          : "bg-red-1300/10 text-red-1300 border-red-1300/30"
                      }`}
                    >
                      {wallet.kyc === "Verified" && <CheckCircle2 size={12} />}
                      {wallet.kyc === "Pending" && <AlertTriangle size={12} />}
                      {wallet.kyc === "Failed" && <XCircle size={12} />}
                      {wallet.kyc}
                    </span>
                  </td>
                  <td>
                    <span className="px-2 py-1 text-xs min-w-6 flex text-gray-1900 items-center gap-2 rounded-full font-medium">
                      <span
                        className={`py-2 px-2 rounded-lg text-xs leading-4 ${
                          riskLabel === "Low"
                            ? "bg-green-3500/10 text-green-3500 border-green-3500/30"
                            : riskLabel === "Medium"
                            ? "bg-yellow-1100/10 text-yellow-1100 border-yellow-1100/30"
                            : "bg-red-1300/10 text-red-1300 border-red-1300/30"
                        }`}
                      >
                        {wallet.risk}
                      </span>
                      <span className="bg-transparent">{riskLabel}</span>
                    </span>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}