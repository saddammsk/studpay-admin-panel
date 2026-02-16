'use client'
import Button from "@/app/components/ui/Button";
import Link from "next/link";
import { useState } from "react";

export default function FinanceAnalytics() {
     return (
          <div className="font-inter">
               <ul className="flex items-center gap-2 mb-6">
                    <li>
                         <Link href="/" className="text-sm font-normal block leading-5 text-gray-2400">Dashboard</Link>
                    </li>
                    <li>
                         <span className="text-sm font-normal block leading-5 text-gray-2400">/</span>
                    </li>
                    <li>
                         <Link href="/" className="text-sm font-normal block leading-5 text-gray-2400">AVI Financing Guarantee</Link>
                    </li>
                    <li>
                         <span className="text-sm font-normal block leading-5 text-gray-2400">/</span>
                    </li>
                    <li>
                         <p className="text-sm font-medium block leading-5 text-black-1500">Overview</p>
                    </li>
               </ul>
               <h2 className="text-[30px] font-bold leading-9 text-black-1500 mb-2">AVI Financing Guarantee — Overview</h2>
               <p className="text-lg font-normal leading-7 text-gray-2400">Monitor and manage student financing guarantee applications</p>
               <div className="grid xl:grid-cols-4 md:grid-cols-2 xl:gap-6 gap-3 my-6">
                    <div className="bg-white border rounded-lg shadow-4xl border-gray-1600 2xl:p-6 p-4">
                         <div className="flex items-center justify-between mb-4">
                              <div className="w-12 h-12 flex items-center justify-center bg-green-1400 rounded-lg">
                                   <img src="/images/file-icon-blue.svg" alt="" />
                              </div>
                              <div className="py-1 px-2 gap-1 text-sm font-medium leading-5 text-green-1500 flex items-center justify-center bg-green-1400 rounded-lg">
                                   <img src="/images/trend-up.svg" alt="" />    +8.2%
                              </div>
                         </div>
                         <h4 className="text-2xl font-bold leading-8 text-black-1500 mb-1">47</h4>
                         <p className='text-sm font-normal leading-5 text-gray-2400'>Applications In Progress</p>
                    </div>
                    <div className="bg-white border rounded-lg shadow-4xl border-gray-1600 2xl:p-6 p-4">
                         <div className="flex items-center justify-between mb-4">
                              <div className="w-12 h-12 flex items-center justify-center bg-green-1400 rounded-lg">
                                   <img src="/images/tick-circle2.svg" alt="" />
                              </div>
                              <div className="py-1 px-2 gap-1 text-sm font-medium leading-5 text-green-1500 flex items-center justify-center bg-green-1400 rounded-lg">
                                   <img src="/images/trend-up.svg" alt="" />  +15.4%
                              </div>
                         </div>
                         <h4 className="text-2xl font-bold leading-8 text-black-1500 mb-1">23</h4>
                         <p className='text-sm font-normal leading-5 text-gray-2400'>Accepted Today/Week</p>
                    </div>
                    <div className="bg-white border rounded-lg shadow-4xl border-gray-1600 2xl:p-6 p-4">
                         <div className="flex items-center justify-between mb-4">
                              <div className="w-12 h-12 flex items-center justify-center bg-green-1400 rounded-lg">
                                   <img src="/images/cross-circle.svg" alt="" />
                              </div>
                              <div className="py-1 px-2 gap-1 text-sm font-medium leading-5 text-red-1300 flex items-center justify-center bg-green-1400 rounded-lg">
                                   <img src="/images/trend-down.svg" alt="" />  -12.1%
                              </div>
                         </div>
                         <h4 className="text-2xl font-bold leading-8 text-black-1500 mb-1">8</h4>
                         <p className='text-sm font-normal leading-5 text-gray-2400'>Denied</p>
                    </div>
                    <div className="bg-white border rounded-lg shadow-4xl border-gray-1600 2xl:p-6 p-4">
                         <div className="flex items-center justify-between mb-4">
                              <div className="w-12 h-12 flex items-center justify-center bg-green-1400 rounded-lg">
                                   <img src="/images/doller-icon.svg" alt="" />
                              </div>
                              <div className="py-1 px-2 gap-1 text-sm font-medium leading-5 text-green-1500 flex items-center justify-center bg-green-1400 rounded-lg">
                                   <img src="/images/trend-up.svg" alt="" />  +24.7%
                              </div>
                         </div>
                         <h4 className="text-2xl font-bold leading-8 text-black-1500 mb-1">$2.8M</h4>
                         <p className='text-sm font-normal leading-5 text-gray-2400'>Guaranteed Funding Volume</p>
                    </div>
               </div>
               <div className="flex 2xl:flex-nowrap flex-wrap gap-6">
                    <div className="2xl:w-3/12 lg:w-[48%] w-full">
                         <div className="bg-white border rounded-lg shadow-4xl border-gray-1600 p-6">
                              <div className="flex items-center gap-2 mb-4">
                                   <img src="/images/caution-icon.svg" alt="" />
                                   <h6 className="text-lg font-semibold leading-7 text-black-1500">Alerts & Priorities</h6>
                              </div>
                              <div className="space-y-3 mb-4">
                                   <div className="border border-gray-1600 rounded-lg p-3 flex items-start justify-between">
                                        <div>
                                             <h6 className="text-sm font-medium leading-5 mb-3 text-black-1500">Document Review</h6>
                                             <p className="text-xs font-normal leading-4 text-gray-2400">KYC verification pending</p>
                                        </div>
                                        <div className="text-xs font-medium leading-4 text-yellow-1100 rounded-full bg-green-1400 py-1 px-2">12</div>
                                   </div>
                                   <div className="border border-gray-1600 rounded-lg p-3 flex items-start justify-between">
                                        <div>
                                             <h6 className="text-sm font-medium leading-5 mb-3 text-black-1500">Manual Approval</h6>
                                             <p className="text-xs font-normal leading-4 text-gray-2400">High-value applications</p>
                                        </div>
                                        <div className="text-xs font-medium leading-4 rounded-full text-white bg-red-1300 py-1 px-2">3</div>
                                   </div>
                                   <div className="border border-gray-1600 rounded-lg p-3 flex items-start justify-between">
                                        <div>
                                             <h6 className="text-sm font-medium leading-5 mb-3 text-black-1500">Address Verification</h6>
                                             <p className="text-xs font-normal leading-4 text-gray-2400">International addresses</p>
                                        </div>
                                        <div className="text-xs font-medium leading-4 rounded-full text-blue-1800 bg-green-1400 py-1 px-2">7</div>
                                   </div>
                              </div>
                              <Link href="/" className="flex items-center justify-center rounded-md border border-blue-1800 bg-white flex gap-4 text-sm font-medium leading-5 text-blue-1800 py-2.5">View All Alerts <img src="/images/timer-icon2.svg" alt="" /></Link>
                         </div>
                    </div>
                    <div className="2xl:w-6/12 lg:w-[48%]  w-full">
                         <div className="bg-white border rounded-lg mb-6 shadow-4xl border-gray-1600 p-6">
                              <h4 className="text-lg font-semibold leading-7 text-black-1500 mb-7">Acceptance Rate by Country</h4>
                              <div className="text-center mb-2">
                                   <img src="/images/trendup-arrow2.svg" className="inline-block" alt="" />
                              </div>
                              <div className="space-y-2 max-w-[200px] mx-auto">
                                   <div className="flex items-center justify-between px-[17px] py-[9px] bg-white rounded border border-gray1600">
                                        <h6 className="text-sm font-normal leading-5 text-gray-2500">Canada</h6>
                                        <span className="blok text-sm font-semibold leading-5 text-green-1500">94.2%</span>
                                   </div>
                                   <div className="flex items-center justify-between px-[17px] py-[9px] bg-white rounded border border-gray1600">
                                        <h6 className="text-sm font-normal leading-5 text-gray-2500">Australia</h6>
                                        <span className="blok text-sm font-semibold leading-5 text-green-1500">91.8%</span>
                                   </div>
                                   <div className="flex items-center justify-between px-[17px] py-[9px] bg-white rounded border border-gray1600">
                                        <h6 className="text-sm font-normal leading-5 text-gray-2500">United Kingdom</h6>
                                        <span className="blok text-sm font-semibold leading-5 text-yellow-1100">87.5%</span>
                                   </div>
                                   <div className="flex items-center justify-between px-[17px] py-[9px] bg-white rounded border border-gray1600">
                                        <h6 className="text-sm font-normal leading-5 text-gray-2500">Spain</h6>
                                        <span className="blok text-sm font-semibold leading-5 text-yellow-1100">83.1%</span>
                                   </div>
                              </div>
                         </div>
                         <div className="bg-white border rounded-lg mb-6 shadow-4xl border-gray-1600 p-6">
                              <h4 className="text-lg font-semibold leading-7 text-black-1500 mb-7">Average Processing Time (Last 6 Months)</h4>
                              <div className="text-center mb-2">
                                   <img src="/images/timer-icon3.svg" className="inline-block mb-4" alt="" />
                                   <h4 className="text-2xl font-bold leading-7 text-black-1500 mb-2">4.2 days</h4>
                                   <h6 className="text-sm font-medium leading-5 text-green-1500 mb-4">-18% vs last month</h6>
                                   <div className="flex items-center justify-center gap-4">
                                        <div>
                                             <h6 className="text-sm font-semibold leading-5 text-gray-2500">Fastest</h6>
                                             <span className="text-sm font-normal leading-5 text-gray-2400">2.1 days</span>
                                        </div>
                                        <div>
                                             <h6 className="text-sm font-semibold leading-5 text-gray-2500">Average</h6>
                                             <span className="text-sm font-normal leading-5 text-gray-2400">4.2 days</span>
                                        </div>
                                        <div>
                                             <h6 className="text-sm font-semibold leading-5 text-gray-2500">Longest</h6>
                                             <span className="text-sm font-normal leading-5 text-gray-2400">7.8 days</span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="2xl:w-3/12 w-full">
                         <div className="bg-white mb-6 border rounded-lg shadow-4xl border-gray-1600 p-6">
                              <div className="flex items-center gap-2 mb-4">
                                   <h6 className="text-lg font-semibold leading-7 text-black-1500">Quick Actions</h6>
                              </div>
                              <div className="space-y-3 ">
                                   <Button
                                        label="New Application"
                                        className="text-white w-full justify-center bg-blue-1000"
                                        iconSrc="/images/file-icon-white.svg"
                                   />
                                   <Button
                                        label="Bulk Review"
                                        className="text-gray-2500 w-full justify-center font-medium bg-transparent border border-gray1600"
                                        iconSrc="/images/users-avatar.svg"
                                   />
                                   <Button
                                        label="Export Report"
                                        className="text-gray-2500 w-full justify-center font-medium bg-transparent border border-gray1600"
                                        iconSrc="/images/export-icon2.svg"
                                   />
                              </div>
                         </div>
                         <div className="bg-white  border rounded-lg shadow-4xl border-gray-1600 4xl:p-6 p-4">
                              <div className="flex items-center gap-2 mb-4">
                                   <h6 className="text-lg font-semibold leading-7 text-black-1500">Recent Requests</h6>
                              </div>
                              <div className="space-y-3">
                                   <div className="border border-gray-1600 rounded-lg p-3 flex items-center justify-between">
                                        <div className="text-end">
                                             <h6 className="text-sm mb-2 font-medium leading-5 text-black-1500">Sarah Chen</h6>
                                             <p className="text-xs font-normal leading-4 text-gray-2400">$45,000 • Canada</p>
                                        </div>
                                        <div className="text-end">
                                             <div className="text-xs mb-3 font-medium leading-4 bg-green-1400 rounded-full text-yellow-1100 py-1 px-2 rounded-full ">Pending</div>
                                             <ul className="flex items-center gap-3">
                                                  <li>
                                                       <Link href="/"><img src="/images/eye-icon.svg" alt="" /></Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/" className="text-xs font-medium leading-4 text-gray-2500">Open</Link>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                                   <div className="border border-gray-1600 rounded-lg p-3 flex items-center justify-between">
                                        <div className="text-end">
                                             <h6 className="text-sm mb-2 font-medium leading-5 text-black-1500">James Wilson</h6>
                                             <p className="text-xs font-normal leading-4 text-gray-2400">$38,500 • Australia</p>
                                        </div>
                                        <div className="text-end">
                                             <div className="text-xs mb-3 font-medium leading-4 bg-green-1400 rounded-full text-green-1500 py-1 px-2">Approved</div>
                                             <ul className="flex items-center gap-3">
                                                  <li>
                                                       <Link href="/"><img src="/images/eye-icon.svg" alt="" /></Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/" className="text-xs font-medium leading-4 text-gray-2500">Open</Link>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                                   <div className="border border-gray-1600 rounded-lg p-3 flex items-center justify-between">
                                        <div className="text-end">
                                             <h6 className="text-sm mb-2 font-medium leading-5 text-black-1500">James Wilson</h6>
                                             <p className="text-xs font-normal leading-4 text-gray-2400">$38,500 • Australia</p>
                                        </div>
                                        <div className="text-end">
                                             <div className="text-xs mb-3 font-medium leading-4 bg-green-1400 rounded-full text-blue-1800 py-1 px-2">Review</div>
                                             <ul className="flex items-center gap-3">
                                                  <li>
                                                       <Link href="/"><img src="/images/eye-icon.svg" alt="" /></Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/" className="text-xs font-medium leading-4 text-gray-2500">Open</Link>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                                   <div className="border border-gray-1600 rounded-lg p-3 flex items-center justify-between">
                                        <div className="text-end">
                                             <h6 className="text-sm mb-2 font-medium leading-5 text-black-1500">Sarah Chen</h6>
                                             <p className="text-xs font-normal leading-4 text-gray-2400">$45,000 • Canada</p>
                                        </div>
                                        <div className="text-end">
                                             <div className="text-xs mb-3 font-medium leading-4 bg-green-1400 rounded-full text-yellow-1100 py-1 px-2 rounded-full ">Pending</div>
                                             <ul className="flex items-center gap-3">
                                                  <li>
                                                       <Link href="/"><img src="/images/eye-icon.svg" alt="" /></Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/" className="text-xs font-medium leading-4 text-gray-2500">Open</Link>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                                   <div className="border border-gray-1600 rounded-lg p-3 flex items-center justify-between">
                                        <div className="text-end">
                                             <h6 className="text-sm mb-2 font-medium leading-5 text-black-1500">James Wilson</h6>
                                             <p className="text-xs font-normal leading-4 text-gray-2400">$38,500 • Australia</p>
                                        </div>
                                        <div className="text-end">
                                             <div className="text-xs mb-3 font-medium leading-4 bg-green-1400 rounded-full text-green-1500 py-1 px-2">Approved</div>
                                             <ul className="flex items-center gap-3">
                                                  <li>
                                                       <Link href="/"><img src="/images/eye-icon.svg" alt="" /></Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/" className="text-xs font-medium leading-4 text-gray-2500">Open</Link>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="lg:p-6 p-4 gap-4 mt-6 flex-wrap border border-gray-1600 bg-white shadow-4xl rounded-lg flex items-center justify-between">
                    <div>
                         <h6 className="text-lg font-semibold leading-7 mb-2 text-black-1500">AVI Guarantee Summary</h6>
                         <p className="text-base font-normal leading-6 text-gray-2400">Total of 78 applications processed this week with an average guarantee amount of $43,200. Processing efficiency improved by 18% compared to last month.</p>
                    </div>
                    <Button
                         label="View all requests"
                         className="text-white justify-center bg-blue-1000"
                         iconSrc="/images/export-icon3.svg"
                    />
               </div>
          </div>
     );
}
