"use client";
import { useRouter } from "next/navigation"
import {
     Link2, Copy, CheckCircle2, AlertCircle, AlertTriangle,
     XCircle,
} from "lucide-react";

type Wallet = {
     address: string;
     student: string;
     asset: string;
     value: string;
     kyc: "Verified" | "Pending" | "Failed";
     risk: number;
};

const wallets: Wallet[] = [
     {
          address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0b1e2",
          student: "Emma Johnson",
          asset: "ETH",
          value: "€4,523.50",
          kyc: "Verified",
          risk: 12,
     },
     {
          address: "0x1f98431c8aD98523631AE4a59f267346ea31F984",
          student: "Michael Chen",
          asset: "USDC",
          value: "€12,890.00",
          kyc: "Verified",
          risk: 8,
     },
     {
          address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          student: "Sarah Williams",
          asset: "BTC",
          value: "€8,750.25",
          kyc: "Pending",
          risk: 45,
     },
     {
          address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          student: "Lisa Park",
          asset: "DAI",
          value: "€6,420.00",
          kyc: "Failed",
          risk: 78,
     },
     {
          address: "0x3A98B43bD3f29C2C2c0dA16E176b6a66CCa6E234",
          student: "David Thompson",
          asset: "ETH",
          value: "€2,150.90",
          kyc: "Verified",
          risk: 18,
     },
     {
          address: "0x98f3c9E6b1F7E1a72D27D6e92f3E17E43C9bA678",
          student: "Olivia Martinez",
          asset: "USDT",
          value: "€15,300.75",
          kyc: "Pending",
          risk: 52,
     },
];

export default function WalletMonitoringTable() {
const router = useRouter()
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
                         {wallets.map((wallet, index) => {
                              const riskLabel =
                                   wallet.risk < 20
                                        ? "Low"
                                        : wallet.risk < 60
                                             ? "Medium"
                                             : "High";

                              return (
                                   <tr onClick={() => router.push(`/crupto_wallet/wallet_investigation`)}
                                        key={index}
                                        className="border-b border-grey-5400 last:border-none hover:bg-gray-50 transition"
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
                                                  />
                                             </div>
                                        </td>

                                        <td className="text-sm font-normal text-black-1300">{wallet.student}</td>
                                        <td className="font-normal text-black-1300 text-xs"><span className="py-0.5 px-2.5 rounded-full bg-gray-6100">{wallet.asset}</span></td>
                                        <td className="text-sm font-normal text-black-1300">{wallet.value}</td>

                                        <td>
                                             <span
                                                  className={`flex items-center gap-1 px-2  text-xs border rounded-full font-medium w-fit
                    ${wallet.kyc === "Verified"
                                                            ? "bg-green-3500/10 text-green-3500 border-green-3500/30"
                                                            : wallet.kyc === "Pending"
                                                                 ? "bg-yellow-1100/10 text-yellow-1100 border-yellow-1100/30"
                                                                 : "bg-red-1300/10 text-red-1300 border-red-1300/30"
                                                       }`}
                                             >
                                                  {wallet.kyc === "Verified" && (
                                                       <CheckCircle2 size={12} />
                                                  )}
                                                  {wallet.kyc === "Pending" && (
                                                       <AlertTriangle size={12} />
                                                  )}
                                                  {wallet.kyc === "Failed" && (
                                                       <XCircle size={12} />
                                                  )}

                                                  {wallet.kyc}
                                             </span>
                                        </td>

                                        <td>
                                             <span
                                                  className={`px-2 py-1 text-xs min-w-6 flex text-gray-1900 items-center gap-2 rounded-full font-medium`}
                                             >
                                                  <span className={`py-2 px-2 rounded-lg text-xs leading-4 ${riskLabel === "Low"
                                                       ? "bg-green-3500/10 text-green-3500 border-green-3500/30"
                                                       : riskLabel === "Medium"
                                                            ? "bg-yellow-1100/10 text-yellow-1100 border-yellow-1100/30"
                                                            : "bg-red-1300/10 text-red-1300 border-red-1300/30"
                                                       }`}> {wallet.risk}</span>  <span className="bg-transparent">{riskLabel}</span>
                                             </span>
                                        </td>
                                   </tr>
                              );
                         })}
                    </tbody>
               </table>
          </div>
     );
}