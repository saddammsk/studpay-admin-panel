
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
     UserCog,
     CreditCard,
} from "lucide-react";

import ProgressBar from "@/app/components/ProgressBar";

function page() {
     return (
          <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
               <TopBar></TopBar>
               <div className="p-6">
                    <div className="bg-white rounded-xl  border border-gray-3600 flex-wrap gap-5 p-6 flex justify-between">
                         <div className="flex gap-4">
                              <div className="bg-red-1300/10 w-14 h-14 rounded-full flex items-center justify-center">
                                   <AlertTriangle className="text-red-600" size={22} />
                              </div>

                              <div>
                                   <h1 className="text-xl font-bold text-blue-1300">Fraud Investigation</h1>
                                   <div className="flex items-center gap-2 my-1">
                                        <img src="/images/user-icon3.svg" alt="" />
                                        <p className="text-sm text-gray-1900">
                                             <span className="font-medium text-blue-1300 text-base">Ahmed Khan</span> • ahmed.khan@university.edu
                                        </p>
                                   </div>

                                   <p className="text-xs text-gray-1900">
                                        ALT-2024-0892 • Detected: Jan 28, 2024 at 14:32
                                   </p>
                              </div>
                         </div>

                         <div className="flex items-center justify-end gap-4">
                              <span className="text-sm leading-5 text-blue-1300 font-semibold bg-gray-6100/50 border-gray-3600 px-3 py-1 rounded-full border">
                                   Identity Theft
                              </span>
                              <div className="mt-3 bg-red-1300/10 border border-red-1300/10 text-red-600 font-bold text-2xl px-4 py-2 rounded-lg">

                                   <span className="block text-xs font-normal text-gray-1900">
                                        Risk Score
                                   </span>
                                   87
                              </div>
                         </div>
                    </div>

                    {/* Main Grid */}
                    <div className="grid xl:grid-cols-2 gap-6 mt-6">
                         <div className="space-y-6">
                              {/* Document Comparison */}
                              <div className="bg-white border-gray-3600/50 rounded-xl shadow-4xl border p-6">
                                   <div className="flex justify-between items-center flex-wrap gap-4 mb-4">
                                        <div>
                                             <h2 className="font-semibold text-blue-1300 text-lg leading-7">Document Comparison</h2>
                                             <p className="text-sm font-normal leading-5 text-gray-1900">Comparing identity documents for <span className="text-blue-1300">Ahmed Khan</span></p>
                                        </div>
                                        <span className="text-xs text-red-1300 leading-4 font-semibold h-auto flex items-center gap-1.5 bg-red-100 px-2 py-0.5 rounded-full">
                                             <img src="/images/cross-circle.svg" className="w-[14px] h-[14px]" alt="" /> Identity Mismatch
                                        </span>
                                   </div>


                                   <div className="grid md:grid-cols-2 gap-6">

                                        {/* Original ID */}
                                        <div>
                                             <div className="flex justify-between items-center mb-3">
                                                  <p className="text-sm text-gray-1900 leading-5 max-w-[70px]">
                                                       Original ID Document
                                                  </p>
                                                  <span className="text-xs bg-gray-6100 text-blue-1300 font-semibold px-2.5 py-0.5 rounded-full">
                                                       Government Issued
                                                  </span>
                                             </div>

                                             <div className="bg-gray-6100/50 border-gray-3600/50 border rounded-lg h-[264px] flex flex-col items-center justify-center relative">
                                                  {/* ID Placeholder */}
                                                  <div className="w-24 h-32 bg-gray-300 rounded-md flex flex-col items-center justify-center opacity-60">
                                                       <div className="w-12 h-2 bg-gray-200 rounded mb-2"></div>
                                                       <div className="w-10 h-2 bg-gray-200 rounded mb-2"></div>
                                                       <div className="w-8 h-6 bg-gray-200 rounded"></div>
                                                  </div>

                                                  {/* ID Number */}
                                                  <p className=" mt-2 text-xs leading-4 text-gray-1900">
                                                       ID-2024-XXXX-7892
                                                  </p>
                                             </div>
                                        </div>

                                        {/* Live Selfie */}
                                        <div>
                                             <div className="flex justify-between items-center mb-3">
                                                  <p className="text-sm text-gray-1900 leading-5 max-w-[70px]">
                                                       Live Selfie (KYC)
                                                  </p>
                                                  <span className="text-xs bg-gray-6100 text-blue-1300 font-semibold px-2.5 py-0.5 rounded-full">
                                                       Captured Live
                                                  </span>
                                             </div>

                                             <div className="bg-gray-6100/50 border-gray-3600/50 border rounded-lg h-[178px] flex flex-col items-center justify-center relative">

                                                  {/* Circle Avatar Placeholder */}
                                                  <div className="w-20 h-20 bg-gray-300 rounded-full opacity-50"></div>

                                                  {/* Capture Date */}
                                                  <p className=" mt-2 text-xs leading-4 text-gray-1900">
                                                       Captured: Jan 15, 2024
                                                  </p>
                                             </div>
                                        </div>

                                   </div>
                                   {/* Face Match */}
                                   <div className="mt-6 bg-gray-6100/30 border border-gray-3600/30 rounded-lg p-3">
                                        <div className="flex justify-between text-sm mb-2">
                                             <span className="text-sm font-medium leading-5 text-blue-1300">Facial Recognition Match</span>
                                             <span className="text-red-1300 font-bold text-sm leading-5">34%</span>
                                        </div>
                                        <ProgressBar value={34} barColor="bg-red-1300" />
                                   </div>
                              </div>
                              <div className="bg-white border-gray-3600/50 rounded-xl shadow-4xl border p-6">
                                   {/* Header */}
                                   <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                             <img src="/images/link-icon2.svg" alt="" />
                                             <h2 className="font-semibold text-lg leading-7 text-blue-1300">
                                                  Linked Accounts
                                             </h2>
                                             <span className="flex items-center gap-1 text-xs font-semibold leading-4 bg-red-1300 text-white px-2.5 py-0.5 rounded-full">
                                                  ⚠ 3 found
                                             </span>
                                        </div>
                                   </div>

                                   <p className="text-sm leading-5  text-gray-1900 mb-3">
                                        Accounts linked via shared device, bank account, or other identifiers
                                   </p>

                                   <div className="space-y-4">
                                        <div className="bg-gray-6100/20 flex-wrap gap-4 border border-gray-3600/50 rounded-lg p-3 flex md:justify-between justify-end">
                                             {/* Left */}
                                             <div className="flex gap-4">
                                                  <div className="w-10 h-10 rounded-full bg-gray-6100 flex items-center justify-center">
                                                       <img src="/images/user-icon3.svg" className="w-5 h-5" alt="" />
                                                  </div>

                                                  <div>
                                                       <div className="flex items-center gap-2">
                                                            <p className="font-medium text-sm text-blue-1300">
                                                                 Mohammad Ali
                                                            </p>
                                                            <span className="text-xs font-semibold bg-yellow-1100/10 border-yellow-1100/20 border text-yellow-1100 px-2 py-0.5 rounded-full">
                                                                 Suspended
                                                            </span>
                                                       </div>

                                                       <p className="text-xs text-gray-1900 leading-4 mt-1">
                                                            m.ali@email.com
                                                       </p>
                                                       <div className="flex mt-3  items-center gap-2">
                                                            <div className="inline-flex items-center gap-2 text-xs bg-gray-6100 text-blue-1300 px-2.5 font-semibold py-1 rounded-full">
                                                                 <img src="/images/mobile-dark.svg" alt="" /> Same Device ID
                                                            </div>
                                                            <span className="text-gray-1900 text-xs font-normal leading-4">
                                                                 DEV-A1B2C3D4
                                                            </span>
                                                       </div>
                                                  </div>
                                             </div>

                                             {/* Right */}
                                             <div className="flex flex-col items-end justify-between">
                                                  <div className="text-right">
                                                       <p className="text-gray-1900 text-xs font-normal leading-4">Risk</p>
                                                       <p className="font-bold text-sm leading-5 text-yellow-1100">72</p>
                                                  </div>

                                                  <button className="text-xs font-medium leading-4 text-blue-1300 flex items-center gap-1 ">
                                                       View <img src="/images/export-icon2.svg" alt="" />
                                                  </button>
                                             </div>
                                        </div>
                                        <div className="bg-gray-6100/20 flex-wrap gap-4 border border-gray-3600/50 rounded-lg p-3 flex md:justify-between justify-end">
                                             {/* Left */}
                                             <div className="flex gap-4">
                                                  <div className="w-10 h-10 rounded-full bg-gray-6100 flex items-center justify-center">
                                                       <img src="/images/user-icon3.svg" className="w-5 h-5" alt="" />
                                                  </div>

                                                  <div>
                                                       <div className="flex items-center gap-2">
                                                            <p className="font-medium text-sm text-blue-1300">
                                                                 Mohammad Ali
                                                            </p>
                                                            <span className="text-xs font-semibold bg-green-1600/10 border-green-1600/20 border text-green-1600 px-2 py-0.5 rounded-full">
                                                                 Active
                                                            </span>
                                                       </div>

                                                       <p className="text-xs text-gray-1900 leading-4 mt-1">
                                                            m.ali@email.com
                                                       </p>
                                                       <div className="flex mt-3  items-center gap-2">
                                                            <div className="inline-flex items-center gap-2 text-xs bg-gray-6100 text-blue-1300 px-2.5 font-semibold py-1 rounded-full">
                                                                 <img src="/images/card-yellow.svg" alt="" /> Same Bank Account
                                                            </div>
                                                            <span className="text-gray-1900 text-xs font-normal leading-4">
                                                                 ****7892
                                                            </span>
                                                       </div>
                                                  </div>
                                             </div>

                                             {/* Right */}
                                             <div className="flex flex-col items-end justify-between">
                                                  <div className="text-right">
                                                       <p className="text-gray-1900 text-xs font-normal leading-4">Risk</p>
                                                       <p className="font-bold text-sm leading-5 text-green-1600">45</p>
                                                  </div>

                                                  <button className="text-xs font-medium leading-4 text-blue-1300 flex items-center gap-1 ">
                                                       View <img src="/images/export-icon2.svg" alt="" />
                                                  </button>
                                             </div>
                                        </div>
                                        <div className="bg-gray-6100/20 flex-wrap gap-4 border border-gray-3600/50 rounded-lg p-3 flex md:justify-between justify-end">
                                             {/* Left */}
                                             <div className="flex gap-4">
                                                  <div className="w-10 h-10 rounded-full bg-gray-6100 flex items-center justify-center">
                                                       <img src="/images/user-icon3.svg" className="w-5 h-5" alt="" />
                                                  </div>

                                                  <div>
                                                       <div className="flex items-center gap-2">
                                                            <p className="font-medium text-sm text-blue-1300">
                                                                 Mohammad Ali
                                                            </p>
                                                            <span className="text-xs font-semibold bg-red-1300/10 border-red-1300/20 border text-red-1300 px-2 py-0.5 rounded-full">
                                                                 Blocked
                                                            </span>
                                                       </div>

                                                       <p className="text-xs text-gray-1900 leading-4 mt-1">
                                                            m.ali@email.com
                                                       </p>
                                                       <div className="flex mt-3  items-center gap-2">
                                                            <div className="inline-flex items-center gap-2 text-xs bg-gray-6100 text-blue-1300 px-2.5 font-semibold py-1 rounded-full">
                                                                 <img src="/images/link-icon3.svg" alt="" /> Same IP Address
                                                            </div>
                                                            <span className="text-gray-1900 text-xs font-normal leading-4">
                                                                 185.220.101.xx
                                                            </span>
                                                       </div>
                                                  </div>
                                             </div>

                                             {/* Right */}
                                             <div className="flex flex-col items-end justify-between">
                                                  <div className="text-right">
                                                       <p className="text-gray-1900 text-xs font-normal leading-4">Risk</p>
                                                       <p className="font-bold text-sm leading-5 text-red-1300">45</p>
                                                  </div>

                                                  <button className="text-xs font-medium leading-4 text-blue-1300 flex items-center gap-1 ">
                                                       View <img src="/images/export-icon2.svg" alt="" />
                                                  </button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="bg-white border-gray-3600/50 rounded-xl shadow-4xl border p-6">
                              <div className="flex  items-center mb-1.5 gap-2">
                                   <h2 className="font-semibold text-blue-1300 text-lg leading-7">Activity Timeline</h2>
                                   <span className="text-xs  text-blue-1300 leading-4 py-0.5 px-2.5 bg-gray-6100 rounded-full inline-block">6 events</span>
                              </div>
                              <p className="text-sm mb-3 leading-5 font-normal text-gray-1900">Chronological view of suspicious activities</p>
                              <div className="relative">
                                   {/* Vertical Line */}
                                   <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gray-200"></div>

                                   <div className="space-y-8">

                                        {/* CRITICAL ITEM */}
                                        <div className="relative flex gap-4">
                                             {/* Icon */}
                                             <div className="relative z-10">
                                                  <div className="w-8 h-8 rounded-full bg-red-1300 shadow-16xl flex items-center justify-center border border-red-200">
                                                       <AlertTriangle size={16} className="text-white" />
                                                  </div>
                                             </div>

                                             {/* Content */}
                                             <div className="flex-1 pb-2">
                                                  <div className="flex justify-between items-start">
                                                       <div>
                                                            <p className="text-sm font-medium text-blue-1300">
                                                                 High-Risk Alert Triggered
                                                            </p>
                                                            <p className="text-sm leading-5 text-gray-1900 mt-1">
                                                                 Face recognition mismatch detected during KYC verification
                                                            </p>
                                                            <p className="text-xs text-gray-1900 font-normal mt-1">
                                                                 Jan 28, 2024 • 14:32
                                                            </p>
                                                       </div>

                                                       <span className="text-xs font-semibold bg-red-1300/10 border border-red-1300/20 text-red-1300 px-2 py-0.5 rounded-full">
                                                            critical
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>

                                        {/* LOGIN FROM RUSSIA */}
                                        <div className="relative flex gap-4">
                                             <div className="relative z-10">
                                                  <div className="w-8 h-8 rounded-full bg-red-1300 shadow-16xl flex items-center justify-center border border-red-200">
                                                       <Globe size={16} className="text-white" />
                                                  </div>
                                             </div>

                                             {/* Content */}
                                             <div className="flex-1 pb-2">
                                                  <div className="flex justify-between items-start">
                                                       <div>
                                                            <p className="text-sm font-medium text-blue-1300">
                                                                 Attempted Login from Russia
                                                            </p>
                                                            <p className="text-sm leading-5 text-gray-1900 mt-1">
                                                                 Login attempt from IP 185.220.101.xx (Moscow, Russia) - blocked
                                                                 by system
                                                            </p>
                                                            <div className="flex items-center gap-3">
                                                                 <p className="text-xs text-gray-1900 font-normal mt-1">
                                                                      Jan 28, 2024 • 14:28
                                                                 </p>
                                                                 <p className="text-xs text-gray-1900 flex items-center gap-1 font-normal mt-1">
                                                                      <img src="/images/location-gray.svg" alt="" />  Moscow, Russia
                                                                 </p>
                                                            </div>
                                                       </div>

                                                       <span className="text-xs font-semibold bg-red-1300/10 border border-red-1300/20 text-red-1300 px-2 py-0.5 rounded-full">
                                                            critical
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                        {/* LOGIN FROM RUSSIA */}
                                        <div className="relative flex gap-4">
                                             <div className="relative z-10">
                                                  <div className="w-8 h-8 rounded-full bg-red-1300 shadow-16xl flex items-center justify-center border border-red-200">
                                                       <CreditCard size={16} className="text-white" />
                                                  </div>
                                             </div>

                                             {/* Content */}
                                             <div className="flex-1 pb-2">
                                                  <div className="flex justify-between items-start">
                                                       <div>
                                                            <p className="text-sm font-medium text-blue-1300">
                                                                 3 Failed Bank Transfers
                                                            </p>
                                                            <p className="text-sm leading-5 text-gray-1900 mt-1">
                                                                 Three consecutive failed transfers to different accounts within 5
                                                                 minutes
                                                            </p>
                                                            <div className="flex items-center gap-3">
                                                                 <p className="text-xs text-gray-1900 font-normal mt-1">
                                                                      Jan 28, 2024 • 14:15
                                                                 </p>
                                                            </div>
                                                       </div>

                                                       <span className="text-xs font-semibold bg-red-1300/10 border border-red-1300/20 text-red-1300 px-2 py-0.5 rounded-full">
                                                            critical
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                        {/* WARNING */}
                                        <div className="relative flex gap-4">
                                             <div className="relative z-10">
                                                  <div className="w-8 h-8 rounded-full bg-yellow-1100 flex items-center justify-center border border-yellow-200">
                                                       <Smartphone size={16} className="text-white" />
                                                  </div>
                                             </div>
                                             {/* Content */}
                                             <div className="flex-1 pb-2">
                                                  <div className="flex justify-between items-start">
                                                       <div>
                                                            <p className="text-sm font-medium text-blue-1300">
                                                                 New Device Detected
                                                            </p>
                                                            <p className="text-sm leading-5 text-gray-1900 mt-1">
                                                                 Account accessed from previously unseen Android device
                                                            </p>
                                                            <div className="flex items-center gap-3">
                                                                 <p className="text-xs text-gray-1900 font-normal mt-1">
                                                                      Jan 28, 2024 • 13:45
                                                                 </p>
                                                            </div>
                                                       </div>

                                                       <span className="text-xs font-semibold bg-yellow-1100/10 border border-yellow-1100/20 text-yellow-1100 px-2 py-0.5 rounded-full">
                                                            warning
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                        {/* WARNING */}
                                        <div className="relative flex gap-4">
                                             <div className="relative z-10">
                                                  <div className="w-8 h-8 rounded-full bg-yellow-1100 flex items-center justify-center border border-yellow-200">
                                                       <UserCog size={16} className="text-white" />
                                                  </div>
                                             </div>
                                             {/* Content */}
                                             <div className="flex-1 pb-2">
                                                  <div className="flex justify-between items-start">
                                                       <div>
                                                            <p className="text-sm font-medium text-blue-1300">
                                                                 Profile Information Changed
                                                            </p>
                                                            <p className="text-sm leading-5 text-gray-1900 mt-1">
                                                                 Phone number and email address updated simultaneously
                                                            </p>
                                                            <div className="flex items-center gap-3">
                                                                 <p className="text-xs text-gray-1900 font-normal mt-1">
                                                                      Jan 27, 2024 • 22:10
                                                                 </p>
                                                            </div>
                                                       </div>

                                                       <span className="text-xs font-semibold bg-yellow-1100/10 border border-yellow-1100/20 text-yellow-1100 px-2 py-0.5 rounded-full">
                                                            warning
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                        {/* INFO */}
                                        <div className="relative flex gap-4">
                                             <div className="relative z-10">
                                                  <div className="w-8 h-8 rounded-full bg-gray-1900 flex items-center justify-center">
                                                       <Shield size={16} className="text-white" />
                                                  </div>
                                             </div>

                                             <div className="flex-1 pb-2">
                                                  <div className="flex justify-between items-start">
                                                       <div>
                                                            <p className="text-sm font-medium text-blue-1300">
                                                                 KYC Document Uploaded
                                                            </p>
                                                            <p className="text-sm leading-5 text-gray-1900 mt-1">
                                                                 New identity document submitted for verification
                                                            </p>
                                                            <div className="flex items-center gap-3">
                                                                 <p className="text-xs text-gray-1900 font-normal mt-1">
                                                                      Jan 25, 2024 • 09:00
                                                                 </p>
                                                            </div>
                                                       </div>

                                                       <span className="text-xs font-semibold bg-gray-6100 border border-gray-3600 text-gray-1900 px-2 py-0.5 rounded-full">
                                                            info
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>

                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default page
