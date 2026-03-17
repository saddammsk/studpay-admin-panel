
'use client'
import TopBar from "@/app/components/common/TopBar";
import Link from "next/link";
import Image from "next/image";
import {
     AlertTriangle,
     ShieldAlert,
     Smartphone,
     Globe,
     FileText,
     Shield,
     Activity,
     UserCog,
     Fuel,
     Wallet,
     Receipt,
     CreditCard,
     Bitcoin,
     Hexagon,
     Coins,
} from "lucide-react";

import ProgressBar from "@/app/components/ProgressBar";
import StatusCard2 from "@/app/components/StatusCard2";
import WalletMonitoringTable from "@/app/components/WalletMonitoringTable";
import { RecentActivity } from "@/app/components/dashboard/RecentActivity";
import RecentTransactionsTable from "@/app/components/RecentTransactionsTable";


function page() {
     return (
          <div>

               <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
                    <TopBar></TopBar>
                    <div className="flex items-center bg-white mt-2 pb-4 px-6 justify-between flex-wrap gap-5 mb-6">
                         <div className="xl:flex-1">
                              <h6 className="text-xl font-bold leading-7 text-black-1600">Crypto Assets Control</h6>
                              <p className="text-sm font-normal leading-5 text-gray-1900">Monitor wallet activity and compliance status </p>
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
                         {/* FILTER + EXPORT */}
                         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
                              <div className="flex items-center flex-wrap gap-3">
                                   <span className="text-sm font-normal text-gray-1900 flex items-center gap-2">
                                        <img src="/images/filter-icon2.svg" alt="" />   Filter by Asset:
                                   </span>

                                   <div className="flex gap-1">
                                        <button className="px-3 py-1.5 border-0 text-sm text-blue-1300 flex items-center gap-3 rounded-lg bg-black">
                                             All
                                        </button>
                                        <button className="px-3 py-1.5 border-0 text-sm text-blue-1300 flex items-center gap-3 rounded-lg ">
                                             <Bitcoin size={14} />
                                             BTC
                                        </button>
                                        <button className="px-3 py-1.5 border-0 text-sm text-blue-1300 flex items-center gap-3 rounded-lg ">
                                             <Coins size={14} />
                                             ETH
                                        </button>
                                        <button className="px-3 py-1.5 border-0 text-sm text-blue-1300 flex items-center gap-3 rounded-lg ">
                                             <Hexagon size={14} />
                                             Stablecoins
                                        </button>
                                   </div>
                              </div>

                              <button className="bg-yellow-2700 flex items-center gap-2 text-blue-1300 px-4 py-2 rounded-lg text-sm font-normal transition">
                                   <img src="/images/export-icon4.svg" alt="" />   Export Ledger for Regulatory Reporting
                              </button>
                         </div>

                         {/* WALLET MONITORING */}
                         <div className=" mb-6">
                              <div className="mb-4">
                                   <h2 className="text-lg font-bold text-blue-1300">
                                        Wallet Monitoring Ledger
                                   </h2>
                                   <p className="text-sm leading-5 text-gray-1900">
                                        Track wallet balances, KYC status, and risk scores
                                   </p>
                              </div>

                              <WalletMonitoringTable />
                         </div>

                         {/* RECENT TRANSACTIONS */}
                         <div className="">
                              <div className="mb-4">
                                   <h2 className="text-lg font-bold text-blue-1300">
                                        Recent On-Chain Transactions
                                   </h2>
                                   <p className="text-sm leading-5 text-gray-1900">
                                        Latest blockchain activity with risk analysis
                                   </p>
                              </div>

                              <RecentTransactionsTable />
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default page
