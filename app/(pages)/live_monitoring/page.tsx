
'use client'
import { useState } from "react";
import TopBar from "@/app/components/common/TopBar";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import Link from "next/link";
import LedgerTable from "@/app/components/LedgerTable";
import ManagementTable from "@/app/components/ManagementTable";
import ManagerTable from "@/app/components/ManagerTable";
import ASAChart from "@/app/components/ASAChart";
import RadialProgress from "@/app/components/RadialProgress";
import ProgressBar from "@/app/components/ProgressBar";
import NetworkMap from "@/app/components/NetworkMap";
function page() {
     return (
          <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
               <TopBar></TopBar>
               <div className="p-6 -mt-[45px]">
                    <div className="bg-white flex flex-wrap gap-4 items-center justify-between py-3 px-5">
                         <div className="flex items-center flex-wrap gap-2">
                              <div className="w-8 h-8 rounded-[10px] flex items-center justify-center bg-blue-3200">
                                   <img src="/images/location-icon4.svg" alt="" />
                              </div>
                              <div className="pr-4">
                                   <h6 className="text-sm font-bold leading-[14px] text-blue-3300">StudSafe</h6>
                                   <p className="text-[10px] font-normal leading-[15px] text-gray-5400">Live Monitoring</p>
                              </div>
                              <div className="bg-gray-5500 h-8 w-[1px] block"></div>
                              <div className="flex items-center gap-2">
                                   <div className="text-xs font-normal leading-4 text-blue-3300 py-1 px-2.5 bg-gray-5200 rounded-full">12 users</div>
                                   <div className="text-xs font-normal flex items-center gap-1 leading-4 text-green-3200 py-1 px-2.5 bg-green-3200/10 rounded-full"><span className="w-1.5 h-1.5 rounded-full block bg-green-3200"></span> 8</div>
                                   <div className="text-xs font-normal flex items-center gap-1 leading-4 text-yellow-2200 py-1 px-2.5 bg-yellow-2200/10 rounded-full"><span className="w-1.5 h-1.5 rounded-full block bg-yellow-2200"></span> 2</div>
                                   <div className="relative">
                                        <div className="text-xs font-normal flex items-center gap-1 leading-4 text-red-2100 py-1 px-2.5 bg-red-2100/10 rounded-full"><img src="/images/caution-icon4.svg" alt="" /> 2 SOS</div>
                                        <span className="bg-white/2 w-full rounded-full h-6 absolute left-0 top-0 shadow-15xl"></span>
                                   </div>
                              </div>
                         </div>
                         <form action="" className="flex flex-wrap justify-end 2xl:flex-1 items-center gap-3">
                              <div className="relative">
                                   <input type="text" className='text-sm font-normal font-neulis-sans text-gray-5400 placeholder:text-gray-5400 px-4 pl-10 h-9 bg-gray-5200 border border-gray1600 rounded-xl w-full outline-0' placeholder='Search metrics...' />
                                   <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                                        <Image
                                             src="../images/search-icon.svg"
                                             width='16'
                                             height='16'
                                             alt=""
                                        />
                                   </div>
                              </div>
                              <Link href="/" className="text-xs font-normal leading-3 text-blue-3300 px-[14px] py-[7px] bg-gray-5200 rounded-[10px]">All Cities</Link>
                              <Link href="/" className="text-xs font-normal leading-3 text-blue-3300 px-[14px] py-[7px] bg-gray-5200 rounded-[10px]">All Statuses</Link>
                              <Link href="/" className="text-xs font-normal leading-3 text-gray-5400 px-[14px] py-[7px] bg-gray-5200 rounded-[10px] flex items-center gap-1"><img src="/images/wallet-icon5.svg" alt="" /> &lt; 15%</Link>
                         </form>
                    </div>
                    <NetworkMap></NetworkMap>
               </div>
          </div>
     )
}

export default page
