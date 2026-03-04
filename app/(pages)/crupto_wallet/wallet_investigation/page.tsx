
'use client'
import TopBar from "@/app/components/common/TopBar";
import Link from "next/link";
import {
     AlertTriangle,
     Shield,
     Activity,
     Wallet,
} from "lucide-react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import WalletGraph from "@/app/components/WalletGraph";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import CustomSelect from "@/app/components/CustomSelect";
import { useState } from "react";
import TransactionTable from "@/app/components/TransactionTable";
function page() {
     const [status, setStatus] = useState<string>("all");
     const [status2, setStatus2] = useState<string>("all");
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
                         <div className="flex items-baseline justify-between mb-8 flex-wrap gap-4">
                              <div className="flex items-start gap-4 md:flex-nowrap flex-wrap">
                                   <Link href="/" className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-1500 border border-grey-5400">
                                        <img src="/images/left-arrow3.svg" alt="" />
                                   </Link>
                                   <div>
                                        <div className="flex items-center gap-4">
                                             <h4 className="md:text-[30px] text-xl font-bold leading-9 text-blue-1300">Wallet Investigation</h4>
                                             <div className="text-sm leading-5 text-red-1300 font-bold rounded-full py-1 px-3 bg-red-1300/10 border border-red-1300/30">78/100 · High Risk</div>
                                        </div>
                                        <div className="flex items-center mt-3 gap-4">
                                             <img src="/images/wallet-icon.svg" alt="" />
                                             <h6 className="text-base leading-6 text-gray-1900">Sarah Williams</h6>
                                             <span className="text-base leading-6 text-gray-1900">•</span>
                                             <h6 className="text-sm leading-5 text-blue-1300 py-1 px-2 bg-gray-6200 rounded-lg">0xdAC17F95...3D831ec7</h6>
                                        </div>
                                   </div>
                              </div>
                              <Link href="/" className="text-sm font-medium leading-5 text-white flex items-center gap-2 px-4 py-2.5 bg-red-1300 rounded-lg">
                                   <img src="/images/freeze-icon2.svg" alt="" />
                                   Freeze Withdrawals
                              </Link>
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
                              <div
                                   className="bg-white border border-grey-5400 rounded-xl p-5 shadow-sm flex flex-col gap-3"
                              >
                                   {/* Top Row */}
                                   <div className="flex items-start justify-between">
                                        <div>
                                             <p className="text-sm mb-2 text-gray-1900">Total Value</p>
                                             {/* Value */}
                                             <h3 className="text-2xl mb-2 font-bold text-blue-1300">€8,750.25</h3>
                                             {/* Subtitle */}
                                             <p
                                                  className="text-xs font-medium  text-emerald-500">
                                                  +12.5% this month
                                             </p>
                                        </div>
                                        <div
                                             className={`w-11 h-11 bg-gray-6100 text-blue-1300 flex items-center justify-center rounded-lg`}
                                        >
                                             <Wallet size={18} />
                                        </div>


                                   </div>
                              </div>
                              <div
                                   className="bg-white border border-grey-5400 rounded-xl p-5 shadow-sm flex flex-col gap-3"
                              >
                                   {/* Top Row */}
                                   <div className="flex items-start justify-between">
                                        <div>
                                             <p className="text-sm mb-2 text-gray-1900">Primary Asset</p>
                                             {/* Value */}
                                             <h3 className="text-2xl mb-2 font-bold text-blue-1300">BTC</h3>
                                             {/* Subtitle */}
                                             <p
                                                  className="text-xs font-medium  text-emerald-500">
                                                  Most traded asset
                                             </p>
                                        </div>
                                        <div
                                             className={`w-11 h-11 bg-yellow-2700/10 text-yellow-2700 flex items-center justify-center rounded-lg`}
                                        >
                                             <Activity size={18} />
                                        </div>
                                   </div>
                              </div>
                              <div
                                   className="bg-white border border-grey-5400 rounded-xl p-5 shadow-sm flex flex-col gap-3"
                              >
                                   {/* Top Row */}
                                   <div className="flex items-start justify-between">
                                        <div>
                                             <p className="text-sm mb-2 text-gray-1900">KYC Status</p>
                                             {/* Value */}
                                             <div className="flex mb-2.5 items-center text-xs font-normal py-1 px-2.5 w-fit rounded-full bg-yellow-1100/10 border border-yellow-1100/30 gap-1.5 text-yellow-1100"><AlertTriangle size={18} /> Pending</div>
                                             {/* Subtitle */}
                                             <p
                                                  className="text-xs font-medium  text-emerald-500">
                                                  Last checked 2h ago
                                             </p>
                                        </div>
                                        <div
                                             className={`w-11 h-11 bg-yellow-1100/10  text-yellow-1100 flex items-center justify-center rounded-lg`}
                                        >
                                             <AlertTriangle size={18} />
                                        </div>
                                   </div>
                              </div>
                              <div
                                   className="bg-white border border-grey-5400 rounded-xl p-5 shadow-sm flex flex-col gap-3"
                              >
                                   {/* Top Row */}
                                   <div className="flex items-start justify-between">
                                        <div>
                                             <p className="text-sm mb-2 text-gray-1900">Wallet Status</p>
                                             {/* Value */}
                                             <div className="flex items-center text-base font-bold mb-2 leading-6 text-green-3500 gap-2">
                                                  <span className="block w-2.5 h-2.5 rounded-full bg-green-3500"></span>
                                                  <h6>Active</h6>
                                             </div>
                                             {/* Subtitle */}
                                             <p
                                                  className="text-xs font-medium  text-emerald-500">
                                                  No restrictions applied
                                             </p>
                                        </div>
                                        <div
                                             className={`w-11 h-11 bg-green-3500/10  text-green-3500 flex items-center justify-center rounded-lg`}
                                        >
                                             <Shield size={18} />
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <TabGroup>
                              <TabList className="flex items-center p-1 w-fit bg-gray-6200 rounded-lg">
                                   <Tab className="py-2 px-4 text-sm leading-5 cursor-pointer text-gray-1900 rounded-md data-selected:bg-gray-1500">Connection Map</Tab>
                                   <Tab className="py-2 px-4 text-sm leading-5 cursor-pointer text-gray-1900 rounded-md data-selected:bg-gray-1500">Transaction History</Tab>
                              </TabList>
                              <TabPanels className="mt-6">
                                   <TabPanel>
                                        <div className="bg-white rounded-[10px] shadow-7xl">
                                             <div className="flex items-center justify-between p-6 border-b border-grey-5400">
                                                  <div className="flex items-center gap-3">
                                                       <div className="w-10 h-10 rounded-xl bg-blue-1300/10 flex items-center justify-center">
                                                            <img src="/images/map-icon2.svg" alt="" />
                                                       </div>
                                                       <div>
                                                            <h2 className="text-lg font-bold text-blue-1300">Connection Map</h2>
                                                            <p className="text-sm leading-5 text-gray-1900">5 connected wallets detected</p>
                                                       </div>
                                                  </div>
                                                  <div className="flex items-center gap-1 text-xs font-bold leading-4 text-blue-1300 py-0.5 px-2.5 rounded-full border border-grey-5400"><img src="/images/arrows.svg" alt="" /> Live Analysis</div>
                                             </div>
                                             <WalletGraph></WalletGraph>
                                        </div>
                                   </TabPanel>
                                   <TabPanel>
                                        <div className="bg-white rounded-[10px] shadow-7xl">
                                             <div className="flex items-center xl:flex-nowrap flex-wrap gap-4 justify-between p-6 border-b border-grey-5400">
                                                  <h2 className="text-lg font-bold text-blue-1300">Transaction History</h2>
                                                  <form action="" className="flex xl:flex-1 md:flex-nowrap flex-wrap justify-end items-center gap-3">
                                                       <Button
                                                            label="Export Report"
                                                            className="text-white justify-center font-medium bg-blue-1000 py-2.5!"
                                                            iconSrc="/images/export-icon.svg"
                                                       />
                                                       <div className="relative w-full 2xl:max-w-[250px] max-w-[180px]">
                                                            <input type="text" className='text-sm font-normal font-neulis-sans text-white placeholder:text-white px-4 pl-10 h-9 bg-blue-1300  rounded-xl w-full outline-0' placeholder='Search by hash or address...' />
                                                            <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                                                                 <Image className="brightness-[40]"
                                                                      src="../images/search-icon.svg"
                                                                      width='16'
                                                                      height='16'
                                                                      alt=""
                                                                 />
                                                            </div>
                                                       </div>
                                                       <div className="relative customselect">
                                                            <CustomSelect className="text-white rounded-[10px]! min-w-[130px] bg-blue-1300! pl-10!"
                                                                 value={status}
                                                                 onChange={(e) => setStatus(e.target.value)}
                                                                 options={[
                                                                      { label: "All Risks", value: "All Risks" },
                                                                      { label: "Active", value: "active" },
                                                                      { label: "Inactive", value: "inactive" },
                                                                 ]}
                                                            />
                                                            <div className="absolute top-1/2 -translate-y-1/2 left-3">
                                                                 <img src="/images/filter-icon4.svg" alt="" />
                                                            </div>
                                                       </div>
                                                       <div className="relative customselect">
                                                            <CustomSelect className="text-white rounded-[10px]! min-w-[130px] bg-blue-1300! "
                                                                 value={status2}
                                                                 onChange={(e) => setStatus2(e.target.value)}
                                                                 options={[
                                                                      { label: "All Types", value: "All Types" },
                                                                      { label: "Active", value: "active" },
                                                                      { label: "Inactive", value: "inactive" },
                                                                 ]}
                                                            />
                                                       </div>
                                                  </form>
                                             </div>
                                             <TransactionTable></TransactionTable>
                                        </div>
                                   </TabPanel>
                              </TabPanels>
                         </TabGroup>


                    </div>
               </div>
          </div>
     )
}

export default page
