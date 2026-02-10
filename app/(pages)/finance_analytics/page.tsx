'use client'
import { useState } from "react";
import CustomSelect from "@/app/components/CustomSelect";
import Link from "next/link";
import Button from "@/app/ui/Button";
import RevenueChart from "@/app/components/RevenueChart";
import ExpensePieChart from "@/app/components/ExpensePieChart";
import BarChart2 from "@/app/components/BarChart2";
import CountryStats from "@/app/components/CountryStats";
const countries = [
     { code: "GE", name: "Germany", students: 1240, amount: 285000, progress: 100 },
     { code: "FR", name: "France", students: 890, amount: 198000, progress: 80 },
     { code: "NE", name: "Netherlands", students: 670, amount: 167000, progress: 50 },
     { code: "IT", name: "Italy", students: 560, amount: 285000, progress: 40 },
     { code: "SP", name: "Spain", students: 480, amount: 123000, progress: 25 },
     { code: "OT", name: "Others", students: 290, amount: 82000, progress: 20 },
];

export default function Home() {
     const [status, setStatus] = useState<string>("all");
     const [status2, setStatus2] = useState<string>("All Countries");
     const [status3, setStatus3] = useState<string>("EUR (€)");
     const [status4, setStatus4] = useState<string>("All Types");
     return (
          <div className="max-w-7xl mx-auto">
               <div className="flex items-center justify-between xl:flex-nowrap flex-wrap gap-4">
                    <div>
                         <h4 className="text-[30px] font-bold leading-9 text-black12 mb-2">Finance Analytics</h4>
                         <p className="text-base font-normal leading-6 text-gray-1100">Comprehensive financial insights and performance metrics</p>
                    </div>
                    <ul className="flex items-center gap-3">
                         <li>
                              <Button
                                   label="Export Report"
                                   iconSrc="/images/export-icon.svg"
                                   className="text-white bg-blue-1000"
                                   onClick={() => {
                                        console.log("Export clicked");
                                   }}
                              />
                         </li>
                         <li>
                              <Link href="" className="py-0.75 px-2.5 text-xs font-normal leading-5 text-blue-1000 bg-blue-1000/10 border border-blue-1000/20 rounded-[10px]">Live Data</Link>
                         </li>
                    </ul>
               </div>
               <div className="border border-gray-1000 mt-6 rounded-xl bg-white shadow-4xl sm:p-6.25 p-4">
                    <div className="flex items-center gap-2 text-lg font-normal leading-7 text-black-1200">
                         <img src="/images/filter-icon.svg" alt="" />Filters & Controls
                    </div>
                    <div className="grid xl:grid-cols-5 sm:grid-cols-3 gap-4 mt-6">
                         <div>
                              <label htmlFor="" className="text-sm font-normal leading-5 block text-gray-1700 mb-2">Date Range</label>
                              <CustomSelect
                                   value={status}
                                   onChange={(e) => setStatus(e.target.value)}
                                   options={[
                                        { label: "All Status", value: "all" },
                                        { label: "Active", value: "active" },
                                        { label: "Inactive", value: "inactive" },
                                   ]}
                              />
                         </div>
                         <div>
                              <label htmlFor="" className="text-sm font-normal leading-5 block text-gray-1700 mb-2">Country</label>
                              <CustomSelect
                                   value={status2}
                                   onChange={(e) => setStatus2(e.target.value)}
                                   options={[
                                        { label: "All Countries", value: "All Countries" },
                                        { label: "Active", value: "active" },
                                        { label: "Inactive", value: "inactive" },
                                   ]}
                              />
                         </div>
                         <div>
                              <label htmlFor="" className="text-sm font-normal leading-5 block text-gray-1700 mb-2">Currency</label>
                              <CustomSelect
                                   value={status3}
                                   onChange={(e) => setStatus3(e.target.value)}
                                   options={[
                                        { label: "EUR (€)", value: "EUR (€)" },
                                        { label: "Active", value: "active" },
                                        { label: "Inactive", value: "inactive" },
                                   ]}
                              />
                         </div>
                         <div>
                              <label htmlFor="" className="text-sm font-normal leading-5 block text-gray-1700 mb-2">Transaction Type</label>
                              <CustomSelect
                                   value={status4}
                                   onChange={(e) => setStatus4(e.target.value)}
                                   options={[
                                        { label: "All Types", value: "All Types" },
                                        { label: "Active", value: "active" },
                                        { label: "Inactive", value: "inactive" },
                                   ]}
                              />
                         </div>
                         <div>
                              <label htmlFor="" className="text-sm font-normal leading-5 block text-gray-1700 mb-2">Quick Actions</label>
                              <Button
                                   label="Refresh Data"
                                   iconSrc="/images/calendar-icon.svg"
                                   className="text-white bg-blue-1000 w-full justify-center py-2.5!"
                                   onClick={() => {
                                        console.log("Export clicked");
                                   }}
                              />
                         </div>
                    </div>
               </div>
               <div className="grid 2xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-6">
                    <div className="border border-gray-1600 bg-white rounded-xl shadow-5xl p-6">
                         <div className="flex mb-4 items-center justify-between">
                              <div className="bg-blue-1000/10 w-10 h-10 rounded-xl flex items-center justify-center">
                                   <img src="/images/up-arrow.svg" alt="" />
                              </div>
                              <img src="/images/grapgh-img.svg" alt="" />
                         </div>
                         <h6 className="text-sm font-normal leading-5 text-gray-1100">Total Wallet Balance</h6>
                         <span className="text-2xl font-normal leadin-8 text-black-1200 block mt-1 mb-2">€12.4M</span>
                         <h6 className="flex items-center text-sm font-normal text-gray-1200">
                              <span className="text-green-1000">+12.5%</span>vs last month
                         </h6>
                    </div>
                    <div className="border border-gray-1600 bg-white rounded-xl shadow-5xl p-6">
                         <div className="flex mb-4 items-center justify-between">
                              <div className="bg-blue-1000/10 w-10 h-10 rounded-xl flex items-center justify-center">
                                   <img src="/images/up-arrow.svg" className="rotate-180" alt="" />
                              </div>
                              <img src="/images/grapgh-img2.svg" alt="" />
                         </div>
                         <h6 className="text-sm font-normal leading-5 text-gray-1100">AVI Blocked Funds</h6>
                         <span className="text-2xl font-normal leadin-8 text-black-1200 block mt-1 mb-2">€2.8M</span>
                         <h6 className="flex items-center text-sm font-normal text-gray-1200">
                              <span className="text-green-1000">+5.2%</span>vs last month
                         </h6>
                    </div>
                    <div className="border border-gray-1600 bg-white rounded-xl shadow-5xl p-6">
                         <div className="flex mb-4 items-center justify-between">
                              <div className="bg-blue-1000/10 w-10 h-10 rounded-xl flex items-center justify-center">
                                   <img src="/images/signal-icon.svg" alt="" />
                              </div>
                              <img src="/images/grapgh-img3.svg" alt="" />
                         </div>
                         <h6 className="text-sm font-normal leading-5 text-gray-1100">Monthly Disbursements</h6>
                         <span className="text-2xl font-normal leadin-8 text-black-1200 block mt-1 mb-2">€1.9M</span>
                         <h6 className="flex items-center text-sm font-normal text-gray-1200">
                              <span className="text-green-1000">+8.7%</span>vs last month
                         </h6>
                    </div>
                    <div className="border border-gray-1600 bg-white rounded-xl shadow-5xl p-6">
                         <div className="flex mb-4 items-center justify-between">
                              <div className="bg-blue-1000/10 w-10 h-10 rounded-xl flex items-center justify-center">
                                   <img src="/images/grapgh-icon.svg" alt="" />
                              </div>
                              <img src="/images/grapgh-img4.svg" alt="" />
                         </div>
                         <h6 className="text-sm font-normal leading-5 text-gray-1100">Recharge & Withdraw</h6>
                         <span className="text-2xl font-normal leadin-8 text-black-1200 block mt-1 mb-2">€967K</span>
                         <h6 className="flex items-center text-sm font-normal text-gray-1200">
                              <span className="text-red-1200">3.1%</span>vs last month
                         </h6>
                    </div>
                    <div className="border border-gray-1600 bg-white rounded-xl shadow-5xl p-6">
                         <div className="flex mb-4 items-center justify-between">
                              <div className="bg-blue-1000/10 w-10 h-10 rounded-xl flex items-center justify-center">
                                   <img src="/images/globe-icon3.svg" alt="" />
                              </div>
                              <img src="/images/grapgh-img5.svg" alt="" />
                         </div>
                         <h6 className="text-sm font-normal leading-5 text-gray-1100">Crypto Holdings</h6>
                         <span className="text-2xl font-normal leadin-8 text-black-1200 block mt-1 mb-2">€456K</span>
                         <h6 className="flex items-center text-sm font-normal text-gray-1200">
                              <span className="text-green-1000">+15.3%</span>vs last month
                         </h6>
                    </div>
               </div>
               <div className="border border-gray-1000 mt-6 rounded-xl bg-white shadow-4xl sm:p-6.25 p-4">
                    <h4 className="text-2xl font-normal leading-6 mb-6 text-blue-1200">Daily Transaction Volume Trend</h4>
                    <RevenueChart></RevenueChart>
               </div>
               <div className="grid xl:grid-cols-2 gap-4 mt-6">
                    <div className="border border-gray-1000  rounded-xl bg-white shadow-4xl p-6.25">
                         <h4 className="text-2xl font-normal leading-6 mb-6 text-blue-1200">Spending Categories Breakdown</h4>
                         <div className="text-center mx-auto w-fit">
                              <ExpensePieChart />
                         </div>
                    </div>
                    <div className="border border-gray-1000  rounded-xl bg-white shadow-4xl p-6.25">
                         <h4 className="text-2xl font-normal leading-6 mb-6 text-blue-1200">Recharge vs Withdrawal Trends</h4>
                         <div className="text-center mx-auto ">
                              <BarChart2></BarChart2>
                         </div>
                    </div>
               </div>
               <div className="space-y-4">
                    <div className="border border-gray-1000 mt-6 rounded-xl bg-white shadow-4xl sm:p-6.25 p-4">
                         <h4 className="text-2xl font-normal leading-6 mb-6 text-blue-1200">Country-wise Financial Volume</h4>
                         <CountryStats countries={countries} />
                    </div>
               </div>
          </div>
     );
}
