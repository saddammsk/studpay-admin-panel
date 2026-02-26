
'use client'
import { useState } from "react";
import TopBar from "@/app/components/common/TopBar";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import Link from "next/link";
import SparklineChart2 from "@/app/components/SparklineChart2";
import { LineChart2 } from "@/app/components/LineChart2";
import Funnel from "@/app/components/Funnel";
import UsageBubbleChart from "@/app/components/UsageBubbleChart";
import CohortHeatmap from "@/app/components/CohortHeatmap";
import SoftAreaChart from "@/app/components/SoftAreaChart";
function page() {
     const [status, setStatus] = useState<string>("all");
     const [status2, setStatus2] = useState<string>("All Countries");
     const [status3, setStatus3] = useState<string>("EUR (€)");
     const [status4, setStatus4] = useState<string>("All Types");
     return (
          <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
               <TopBar></TopBar>
               <div className="flex xl:flex-nowrap flex-wrap xl:gap-0 gap-4 items-center bg-white justify-between 2xl:p-6 p-4">
                    <div className="xl:flex-1">
                         <h6 className="text-xl font-bold leading-7 text-blue-1300">Finance Analytics</h6>
                         <p className="text-sm font-normal leading-5 text-gray-1900">Executive Dashboard • Real-time Insights</p>
                    </div>
                    <form action="" className="flex flex-wrap items-center gap-3">
                         <div className="relative">
                              <input type="text" className='text-sm font-normal font-neulis-sans text-gray-1400 placeholder:text-gray-1400 px-4 pl-10 h-9 bg-white border border-gray1600 rounded-xl w-full outline-0' placeholder='Search metrics...' />
                              <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                                   <Image
                                        src="../images/search-icon.svg"
                                        width='16'
                                        height='16'
                                        alt=""
                                   />
                              </div>
                         </div>
                         <div
                              className="relative cursor-pointer"
                         >
                              <div className="absolute left-3 block top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none">
                                   <Image
                                        src="../images/calendar.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                   />
                              </div>
                              <input
                                   type="date"
                                   className="w-full appearance-none bg-gray-1800 pl-10 pr-3 border border-solid border-gray1600 rounded-md font-neulis-sans font-normal text-sm leading-5 h-9 cursor-pointer outline-0 focus:ring-0 focus:ring-transparent"
                              />
                         </div>
                         <Link href="/" className="bg-gray-1800 border border-gray-1000 w-10 h-10 rounded-xl flex items-center justify-center">
                              <img src="/images/recycle-icon2.svg" alt="" />
                         </Link>
                         <Button
                              label="Export Report"
                              className="text-white justify-center font-medium bg-lightgreen17 py-2.5!"
                              iconSrc="/images/export-icon.svg"
                         />
                    </form>
               </div>
               <div className="p-6">
                    <div className="grid 2xl:grid-cols-4 md:grid-cols-2 gap-4 mt-4 mb-6">
                         <div className="bg-white border  border-gray-1000/50 shadow-13xl rounded-2xl 4xl:p-6 pr-[18px] p-3">
                              <div className="flex items-start justify-between">
                                   <div className="">
                                        <div className="icon-bg1 w-12 h-12 mb-5 flex items-center justify-center shadow-4xl rounded-xl">
                                             <img src="/images/user-blue2.svg" className="w-5 h-5" alt="" />
                                        </div>
                                        <span className="block text-sm font-medium leading-5 text-gray-1200 mb-1">DAU/MAU Ratio</span>
                                        <h4 className="4xl:text-[30px] text-[17px] font-bold mt-1 leading-9 text-blue-1300">32.5%</h4>
                                   </div>
                                   <div>
                                        <SparklineChart2
                                             dataPoints={[40, 45, 42, 50, 55, 60, 58]}
                                             color="#3C83F6"
                                        />
                                   </div>
                              </div>
                              <div className="flex items-center mt-5 pt-3 border-t border-gray-1000/50 gap-1.5">
                                   <div className="flex items-center gap-1 py-1 px-2 text-xs font-bold leading-4 text-lightgreen17 bg-lightgreen17/10 rounded-full">
                                        <img src="/images/trend-up.svg" alt="" />8.2%
                                   </div>
                                   <h6 className="text-xs font-normal leading-4 text-gray-1200">vs last month</h6>
                              </div>
                         </div>
                         <div className="bg-white border  border-gray-1000/50 shadow-13xl rounded-2xl 4xl:p-6 pr-[18px] p-3">
                              <div className="flex items-start justify-between">
                                   <div className="">
                                        <div className="icon-bg2 w-12 h-12 mb-5 flex items-center justify-center shadow-4xl rounded-xl">
                                             <img src="/images/bookmark.svg" className="w-5 h-5" alt="" />
                                        </div>
                                        <span className="block text-sm font-medium leading-5 text-gray-1200 mb-1">Avg Session Depth</span>
                                        <h4 className="4xl:text-[30px] text-[17px] font-bold mt-1  leading-9 text-blue-1300">4.5 screens</h4>
                                   </div>
                                   <div>
                                        <SparklineChart2
                                             dataPoints={[25, 22, 20, 23, 21, 19, 18]}
                                             color="#10B77F"
                                        />
                                   </div>
                              </div>
                              <div className="flex items-center mt-5 pt-3 border-t border-gray-1000/50 gap-1.5">
                                   <div className="flex items-center gap-1 py-1 px-2 text-xs font-bold leading-4 text-lightgreen17 bg-lightgreen17/10 rounded-full">
                                        <img src="/images/trend-up.svg" alt="" />12.5%
                                   </div>
                                   <h6 className="text-xs font-normal leading-4 text-gray-1200">vs last week</h6>
                              </div>
                         </div>
                         <div className="bg-white border  border-gray-1000/50 shadow-13xl rounded-2xl 4xl:p-6 pr-[18px] p-3">
                              <div className="flex items-start justify-between">
                                   <div className="">
                                        <div className="icon-bg3 w-12 h-12 mb-5 flex items-center justify-center shadow-4xl rounded-xl">
                                             <img src="/images/caution-icon.svg" className="w-5 h-5" alt="" />
                                        </div>
                                        <span className="block text-sm font-medium leading-5 text-gray-1200 mb-1">Churn Risk</span>
                                        <h4 className="4xl:text-[30px] text-[17px] font-bold mt-1  leading-9 text-blue-1300">6.2%</h4>
                                   </div>
                                   <div>
                                        <SparklineChart2
                                             dataPoints={[5, 6, 6.5, 7, 7.5, 8, 8.4]}
                                             color="#FE7B02"
                                        />
                                   </div>
                              </div>
                              <div className="flex items-center mt-5 pt-3 border-t border-gray-1000/50 gap-1.5">
                                   <div className="flex items-center gap-1 py-1 px-2 text-xs font-bold leading-4 text-red-1300 bg-red-1300/10 rounded-full">
                                        <img src="/images/trend-down.svg" alt="" />12.5%
                                   </div>
                                   <h6 className="text-xs font-normal leading-4 text-gray-1200">inactive &gt;15d</h6>
                              </div>
                         </div>
                         <div className="bg-white border  border-gray-1000/50 shadow-13xl rounded-2xl 4xl:p-6 pr-[18px] p-3">
                              <div className="flex items-start justify-between">
                                   <div className="">
                                        <div className="icon-bg4 w-12 h-12 mb-5 flex items-center justify-center shadow-4xl rounded-xl">
                                             <img src="/images/heart-red.svg" className="w-5 h-5" alt="" />
                                        </div>
                                        <span className="block text-sm font-medium leading-5 text-gray-1200 mb-1">NPS Score</span>
                                        <h4 className="4xl:text-[30px] text-[17px] font-bold mt-1  leading-9 text-blue-1300">72</h4>
                                   </div>
                                   <div>
                                        <SparklineChart2
                                             dataPoints={[5, 6, 7, 6.5, 8, 7.5, 9]}
                                             color="#EF4343"
                                        />
                                   </div>
                              </div>
                              <div className="flex items-center mt-5 pt-3 border-t border-gray-1000/50 gap-1.5">
                                   <div className="flex items-center gap-1 py-1 px-2 text-xs font-bold leading-4 text-lightgreen17 bg-lightgreen17/10 rounded-full">
                                        <img src="/images/trend-up.svg" alt="" />15.2%
                                   </div>
                                   <h6 className="text-xs font-normal leading-4 text-gray-1200">sentiment trend</h6>
                              </div>
                         </div>
                    </div>
                    <div className="bg-white border mb-8 border-gray-1000/50 shadow-13xl rounded-2xl 4xl:p-6 pr-[18px] p-3">
                         <div className="flex items-center justify-between flex-wrap gap-4">
                              <div>
                                   <h4 className="text-lg font-bold leading-6  text-blue-1300">User Journey Funnel</h4>
                                   <p className="text-sm font-normal leading-5 text-gray-1900">Conversion flow from sign-up to purchase</p>
                              </div>
                              <div className="flex items-center gap-6">
                                   <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full block circle-bg1"></div>
                                        <h6 className="text-xs font-normal leading-4 text-gray-1200">Active Users</h6>
                                   </div>
                                   <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full block bg-red-1300"></div>
                                        <h6 className="text-xs font-normal leading-4 text-gray-1200">Critical Drop-off</h6>
                                   </div>
                              </div>
                         </div>
                         <div className="mt-8">
                              <Funnel></Funnel>
                              <div className="border-t border-gray-1000 pt-6 mt-8 grid md:grid-cols-3 gap-6">
                                   <div className="card-bg rounded-xl border border-blue1400/10 text-center py-4">
                                        <h4 className="text-[30px] font-bold leading-9 text-gradient10 mb-1">19.3%</h4>
                                        <p className="text-xs font-normal leading-4 text-gray-1200">Overall Conversion</p>
                                   </div>
                                   <div className="card-bg2 rounded-xl border border-blue1400/10 text-center py-4">
                                        <h4 className="text-[30px] font-bold leading-9 text-red-1300 mb-1">KYC</h4>
                                        <p className="text-xs font-normal leading-4 text-gray-1200">Biggest Drop-off</p>
                                   </div>
                                   <div className="card-bg3 rounded-xl border border-blue1400/10 text-center py-4">
                                        <h4 className="text-[30px] font-bold leading-9 text-lightgreen17 mb-1">2.4K</h4>
                                        <p className="text-xs font-normal leading-4 text-gray-1200">Completed Journey</p>
                                   </div>
                              </div>
                              <div className="grid grid-cols-2 gap-6">
                                   <div></div>
                              </div>
                         </div>
                    </div>
                    <div className="grid xl:grid-cols-2 grid-cols-1 mb-8 gap-6">
                         <div className="bg-white border  border-gray-1000/50 shadow-13xl rounded-2xl 4xl:p-6 pr-[18px] p-3">
                              <h6 className="text-lg font-bold leading-7 text-blue-1300">Feature Adoption Matrix</h6>
                              <p className="text-sm font-normal leading-5 text-gray-1900">Usage frequency vs. engagement time</p>
                              <UsageBubbleChart></UsageBubbleChart>
                         </div>
                         <div className="bg-white border  border-gray-1000/50 shadow-13xl rounded-2xl 4xl:p-6 pr-[18px] p-3">
                              <div className="bg-white relative w-fit">
                                   <h6 className="text-lg font-bold leading-7 text-blue-1300">Cohort Retention</h6>
                                   <p className="text-sm font-normal leading-5 text-gray-1900">Monthly retention by signup cohort</p>
                              </div>
                              <CohortHeatmap></CohortHeatmap>
                              <div className="border-t border-gray-1000 mt-6 pt-4">
                                   <div className="bg-lightgreen17/5 border border-lightgreen17/20 rounded-xl flex items-center gap-3 p-3">
                                        <span className="w-2.5 h-2.5 rounded-full block bg-lightgreen17"></span>
                                        <h6 className="text-sm font-normal leading-5 text-blue-1300"><span className="font-bold">March 2024</span> cohort shows strongest retention at  after 3 months</h6>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="bg-white border border-gray-1000/50 shadow-13xl rounded-2xl 4xl:p-6 pr-[18px] p-3">
                         <div className="flex items-center justify-between  flex-wrap gap-4">
                              <div>
                                   <h4 className="text-lg font-bold leading-6  text-blue-1300">Live Activity Map</h4>
                                   <p className="text-sm font-normal leading-5 text-gray-1900">Real-time student activity by region</p>
                              </div>
                              <div className="flex items-center gap-6">
                                   <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full block circle-bg1"></div>
                                        <h6 className="text-xs font-normal leading-4 text-gray-1200">High</h6>
                                   </div>
                                   <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full block bg-lightgreen17"></div>
                                        <h6 className="text-xs font-normal leading-4 text-gray-1200">Medium</h6>
                                   </div>
                                   <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full block bg-yellow-1800"></div>
                                        <h6 className="text-xs font-normal leading-4 text-gray-1200">Low</h6>
                                   </div>
                              </div>
                         </div>
                         <div className="mt-8">
                              <SoftAreaChart></SoftAreaChart>
                              <div className="border-t border-gray-1000 pt-6 mt-8 grid md:grid-cols-3 gap-6">
                                   <div className="card-bg4 rounded-xl border border-blue1400/10 text-center py-4">
                                        <h4 className="text-2xl font-bold leading-8 text-blue-1300 mb-1">8.0K</h4>
                                        <p className="text-xs font-normal leading-4 text-gray-1200">Active Now</p>
                                   </div>
                                   <div className="card-bg5 rounded-xl border border-blue1400/10 text-center py-4">
                                        <h4 className="text-2xl font-bold leading-8 text-blue-1300 mb-1">12</h4>
                                        <p className="text-xs font-normal leading-4 text-gray-1200">Countries</p>
                                   </div>
                                   <div className="card-bg3 rounded-xl border border-blue1400/10 text-center py-4">
                                        <h4 className="text-2xl font-bold leading-8 text-gradient10 mb-1">London</h4>
                                        <p className="text-xs font-normal leading-4 text-gray-1200">Top Region</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default page
