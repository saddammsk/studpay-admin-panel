
'use client'
import TopBar from "@/app/components/common/TopBar";
import Link from "next/link";
import {
     Euro,
     Clock,
     Megaphone,
     Users,
     Gift,
     Banknote,
     Repeat,
     RefreshCcw,
     Speaker,
     Mic
} from "lucide-react";
import { useState } from "react";
import ServiceInventory from "@/app/components/ServiceInventory";
import OrdersTable from "@/app/components/OrdersTable";
import CashbackStatsCard from "@/app/components/CashbackStatsCard";
import CampaignTable from "@/app/components/CampaignTable";
import Image from "next/image";
import RewardTransaction from "@/app/components/RewardTransaction";
function page() {
     const CashbackIcon = () => (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
               <path d="M6.6665 11.668C9.42793 11.668 11.6665 9.42939 11.6665 6.66797C11.6665 3.90654 9.42793 1.66797 6.6665 1.66797C3.90508 1.66797 1.6665 3.90654 1.6665 6.66797C1.6665 9.42939 3.90508 11.668 6.6665 11.668Z" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
               <path d="M15.075 8.64062C15.8628 8.93432 16.5638 9.4219 17.1132 10.0583C17.6625 10.6947 18.0426 11.4593 18.2182 12.2815C18.3937 13.1037 18.3591 13.9569 18.1176 14.7622C17.876 15.5674 17.4353 16.2988 16.8362 16.8886C16.2371 17.4785 15.499 17.9077 14.69 18.1366C13.8811 18.3656 13.0275 18.3869 12.2081 18.1985C11.3888 18.0101 10.6301 17.6182 10.0024 17.059C9.37465 16.4997 8.89806 15.7912 8.6167 14.999" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
               <path d="M5.8335 5H6.66683V8.33333" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
               <path d="M13.9249 11.5664L14.5082 12.1581L12.1582 14.5081" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
     );

     const users = [
          {
               name: "Sarah Chen",
               role: "Finance Manager",
               time: "Now",
               value: 47,
               status: "online",
          },
          {
               name: "Ahmed Hassan",
               role: "Security Lead",
               time: "2m ago",
               value: 32,
               status: "away",
          },
          {
               name: "Maria Rodriguez",
               role: "System Admin",
               time: "15m ago",
               value: 28,
               status: "online",
          },
          {
               name: "James Wilson",
               role: "Compliance Officer",
               time: "5m ago",
               value: 19,
               status: "offline",
          },
          {
               name: "Priya Sharma",
               role: "Operations",
               time: "1h ago",
               value: 12,
               status: "online",
          },
     ];

     return (
          <div>
               <div className="bg-[url(/images/body-bg.png)] bg-cover p-4 bg-no-repeat xl:mt-[-45px] mt-[-35px] xl:-m-8 -m-4 font-inter">
                    <TopBar></TopBar>
                    <div>
                         <div className="flex mb-6 itesm-center flex-wrap gap-4 justify-between">
                              <div className="flex items-start gap-3">
                                   <div className="flex items-center justify-center bg-blue-2800/10 rounded-lg w-11 h-11">
                                        <Gift className="w-5 h-5 text-blue-2800" />
                                   </div>
                                   <div>
                                        <h1 className="text-[22px] font-bold leading-7 text-black-2000">
                                             Cashback & Rewards
                                        </h1>
                                        <p className="text-xs leading-4 font-normal text-gray-6400">
                                             Manage Rewards, Cashback, Permotion
                                        </p>
                                   </div>
                              </div>
                              <Link href={'#'} className='inline-flex items-center justify-center gap-2 text-white font-inter font-normal text-sm leading-5  rounded-md bg-blue-1000 h-10 px-4 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
                                   <Gift className="w-5 h-5 text-white" />
                                   Manual Credit
                              </Link>
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                              <CashbackStatsCard
                                   title="Total Cashback Paid"
                                   value="€47,892.50"
                                   subtitle="+12.3%"
                                   subtitleColor="text-lightgreen17"
                                   icon={<CashbackIcon />}
                                   iconBg="bg-blue-1700/20 text-blue-1700"
                              />

                              <CashbackStatsCard
                                   title="Pending Approvals"
                                   value="34"
                                   subtitleColor="text-blue-1000"
                                   subtitle="5 urgent"
                                   icon={<Clock size={18} />}
                                   iconBg="bg-blue-1700/10 text-blue-1700"
                              />

                              <CashbackStatsCard
                                   title="Active Campaigns"
                                   value="12"
                                   subtitleColor="text-gray-1200"
                                   subtitle="3 ending soon"
                                   icon={<Megaphone size={18} />}
                                   iconBg="bg-gray-7400/10 text-gray-7400"
                              />

                              <CashbackStatsCard
                                   title="Referrals Converted"
                                   value="1,248"
                                   subtitleColor="text-lightgreen17"
                                   subtitle="+8.7%"
                                   icon={<Users size={18} />}
                                   iconBg="bg-lightgreen17/10 text-lightgreen17"
                              />
                         </div>
                         <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                              <div className="border border-gray-7100/50 mt-6 bg-white rounded-lg">
                                   <div className="flex py-7 px-5 items-center justify-between">
                                        <div className="flex items-center gap-2">
                                             <div className="flex items-center justify-center bg-blue-1700/20 rounded-lg w-7 h-7">
                                                  <img src="/images/mic-icon.svg" alt="" />
                                             </div>
                                             <h6 className="text-lg font-bold text-blue-2900">Reward Campaigns</h6>
                                        </div>
                                        <Link href={'#'} className='inline-flex items-center justify-center gap-2 text-white font-inter font-normal text-sm leading-5  rounded-md bg-blue-1000 h-10 px-4 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
                                             New Campaign
                                        </Link>
                                   </div>
                                   <CampaignTable></CampaignTable>
                              </div>
                              <div className="border border-gray-7100/50 mt-6 bg-white rounded-lg">
                                   <div className="flex py-7 px-5 items-center justify-between">
                                        <div className="flex items-center gap-2">
                                             <div className="flex items-center justify-center bg-gray-7400/10 rounded-lg w-7 h-7">
                                                  <img src="/images/transaction-slip.svg" alt="" />
                                             </div>
                                             <h6 className="text-lg font-bold text-blue-2900">Reward Transactions</h6>
                                        </div>
                                        <div className="relative max-w-[192px] w-full">
                                             <input type="text" className='text-sm font-normal text-gray-1200 placeholder:text-gray-1200 px-4 pl-10 h-10 bg-gray-1600 border border-gray-1000 rounded-md w-full outline-0' placeholder='Search...' />
                                             <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                                                  <Image
                                                       src="../images/search-icon.svg"
                                                       width='16'
                                                       height='16'
                                                       alt=""
                                                  />
                                             </div>
                                        </div>
                                   </div>
                                   <RewardTransaction></RewardTransaction>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default page
