
'use client'
import { useState } from "react";
import CustomSelect from '@/app/components/CustomSelect'
import { LineChart2 } from "@/app/components/LineChart2";
import CountryChart from "@/app/components/CountryChart";
import DonutChart from "@/app/components/DonutChart";
import Funnel from "@/app/components/Funnel";
import CountryBarChart from "@/app/components/CountryBarChart";
function page() {
     const [status, setStatus] = useState<string>("all");
     const [status2, setStatus2] = useState<string>("All Countries");
     const [status3, setStatus3] = useState<string>("EUR (€)");
     const [status4, setStatus4] = useState<string>("All Types");
     return (
          <div className='md:p-6'>
               <h6 className='text-[30px] font-bold leading-8 text-black-1200 mb-2'>Country-Based Statistics</h6>
               <p className='text-base font-normal leading-6 text-gray-1100'>Monitor platform usage, financial activity, and user trends across different countries and regions.</p>
               <div className="border border-gray-1000 my-8 rounded-xl bg-white shadow-4xl sm:p-[25px] p-4">
                    <div className="grid  sm:grid-cols-3 gap-4">
                         <div>
                              <label htmlFor="" className="text-sm font-normal leading-5 block text-gray-1700 mb-2">Region</label>
                              <CustomSelect
                                   value={status}
                                   onChange={(e) => setStatus(e.target.value)}
                                   options={[
                                        { label: "All Regions", value: "all" },
                                        { label: "Active", value: "active" },
                                        { label: "Inactive", value: "inactive" },
                                   ]}
                              />
                         </div>
                         <div>
                              <label htmlFor="" className="text-sm font-normal leading-5 block text-gray-1700 mb-2">Date Range</label>
                              <CustomSelect
                                   value={status2}
                                   onChange={(e) => setStatus2(e.target.value)}
                                   options={[
                                        { label: "Last 30 days", value: "All Countries" },
                                        { label: "Active", value: "active" },
                                        { label: "Inactive", value: "inactive" },
                                   ]}
                              />
                         </div>
                         <div>
                              <label htmlFor="" className="text-sm font-normal leading-5 block text-gray-1700 mb-2">Sort By</label>
                              <CustomSelect
                                   value={status3}
                                   onChange={(e) => setStatus3(e.target.value)}
                                   options={[
                                        { label: "Active Users", value: "EUR (€)" },
                                        { label: "Active", value: "active" },
                                        { label: "Inactive", value: "inactive" },
                                   ]}
                              />
                         </div>

                    </div>
               </div>
               <div className="grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 4xl:gap-6 gap-4">
                    <div className="border border-gray-1600 rounded-xl bg-white shadow-4xl 4xl:p-6 p-4 flex items-start justify-between">
                         <div>
                              <h6 className="text-gray-1100 text-sm font-normal leading-5 ">Active Countries</h6>
                              <span className="block text-2xl mt-1 mb-2 font-normal leading-8 text-black-1200">47</span>
                              <div className="flex items-center text-xs font-segoe font-normal leading-4 text-gray-1200">
                                   <span className="text-green-1300 inline-block mr-1">↗ +3 </span> vs last month
                              </div>
                         </div>
                         <img src="/images/globe-icon3.svg" className="w-6 h-6" alt="" />
                    </div>
                    <div className="border border-gray-1600 rounded-xl bg-white shadow-4xl 4xl:p-6 p-4 flex items-start justify-between">
                         <div>
                              <h6 className="text-gray-1100 text-sm font-normal leading-5 ">Top Country</h6>
                              <span className="block text-2xl mt-1 mb-2 font-normal leading-8 text-black-1200">Germany</span>
                              <div className="flex items-center text-xs font-segoe font-normal leading-4 text-gray-1200">
                                   €2.4M volume
                              </div>
                         </div>
                         <img src="/images/location-icon.svg" alt="" />
                    </div>
                    <div className="border border-gray-1600 rounded-xl bg-white shadow-4xl 4xl:p-6 p-4 flex items-start justify-between">
                         <div>
                              <h6 className="text-gray-1100 text-sm font-normal leading-5 ">EU Transactions</h6>
                              <span className="block text-2xl mt-1 mb-2 font-normal leading-8 text-black-1200">89,450</span>
                              <div className="flex items-center text-xs font-segoe font-normal leading-4 text-gray-1200">
                                   <span className="text-green-1300 inline-block mr-1">↗ +8.7%</span>vs last month
                              </div>
                         </div>
                         <img src="/images/trend-up-blue.svg" alt="" />
                    </div>
                    <div className="border border-gray-1600 rounded-xl bg-white shadow-4xl 4xl:p-6 p-4 flex items-start justify-between">
                         <div>
                              <h6 className="text-gray-1100 text-sm font-normal leading-5 ">Highest AVI Volume</h6>
                              <span className="block text-2xl mt-1 mb-2 font-normal leading-8 text-black-1200">€850K</span>
                              <div className="flex items-center text-xs font-segoe font-normal leading-4 text-gray-1200">
                                   France - This month
                              </div>
                         </div>
                         <img src="/images/CurrencyEur.svg" alt="" />
                    </div>
               </div>
               <div className="border border-gray-1000 my-8 rounded-xl bg-white shadow-4xl sm:p-[25px] p-4">
                    <h4 className="text-2xl font-segoe font-normal leading-6 mb-6 text-black13">Global User Activity Heatmap</h4>
                    <CountryChart></CountryChart>
               </div>
               <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="border border-gray-1000 md:my-8 my-2 rounded-xl bg-white shadow-4xl sm:p-[25px] p-4">
                         <h4 className="text-2xl font-segoe font-normal leading-6 mb-6 text-black13">Country Transaction Volume</h4>
                         <CountryBarChart></CountryBarChart>
                    </div>
                    <div className="border border-gray-1000 md:my-8 my-2 rounded-xl bg-white shadow-4xl sm:p-[25px] p-4">
                         <h4 className="text-2xl font-segoe font-normal leading-6 mb-6 text-black13">Feature Usage Distribution</h4>
                         <DonutChart></DonutChart>
                    </div>
               </div>
               <div className="border border-gray-1000  rounded-xl bg-white shadow-4xl sm:p-[25px] p-4">
                    <h4 className="text-2xl font-segoe font-normal leading-6 mb-6 text-black13">Onboarding Completion Funnel</h4>

               </div>

          </div>
     )
}

export default page
