
'use client'
import { useState } from "react";
import TopBar from "@/app/components/common/TopBar";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import Link from "next/link";
import LedgerTable from "@/app/components/LedgerTable";
import ManagementTable from "@/app/components/ManagementTable";
import ManagerTable from "@/app/components/ManagerTable";
function page() {
     return (
          <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
               <TopBar></TopBar>
               <div className="flex xl:flex-nowrap flex-wrap xl:gap-0 gap-4 items-center bg-white justify-between 2xl:p-6 p-4">
                    <div className="xl:flex-1">
                         <h6 className="text-xl font-bold leading-7 text-black-1600">Content CMS Hub</h6>
                         <p className="text-sm font-normal leading-5 text-gray-1900">Manage all student-facing communications</p>
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
                         <Link href="/" className="w-10 h-10  flex items-center justify-center">
                              <img src="/images/recycle-icon2.svg" alt="" />
                         </Link>
                    </form>
               </div>
               <div className="p-6">
                    <div className="flex items-center justify-between flex-wrap gap-5 mb-6">
                         <h6 className="text-sm font-normal leading-5 text-gray-1200">Last updated: <span className="text-black-2600">Today at 2:45 PM</span></h6>
                         <ul className="flex gap-3">
                              <li>
                                   <Button
                                        label=" Create New Content"
                                        className="text-white bg-blue-1000 justify-center h-10 px-4 rounded-md! hover:bg-blue-1000/90 font-neulis-sans"
                                        iconSrc="/images/plus-icon.svg"
                                   /></li>
                              <li>
                                   <Button
                                        label=" Emergency Alert"
                                        className="text-white bg-red-1300 justify-center h-10 px-4 rounded-md! hover:bg-blue-1000/90 font-neulis-sans"
                                        iconSrc="/images/caution-icon5.svg"
                                   /></li>
                         </ul>
                    </div>
                    <div className="flex items-center gap-2">
                         <span className="w-1 h-5 bg-blue-3000 rounded-full block"></span>
                         <h6 className="text-lg font-bold leading-7 text-black-2600">Campaign Visibility Metrics</h6>
                    </div>
                    <div className="grid 2xl:grid-cols-4 md:grid-cols-2 gap-4 mt-4 mb-6">
                         <div className="bg-white border  border-gray-1000 shadow-13xl rounded-2xl 4xl:p-6 pr-[18px] p-3">
                              <div className="flex items-start justify-between">
                                   <div className="">
                                        <div className="bg-blue-3000/10 w-10 h-10 mb-3 flex items-center justify-center shadow-4xl rounded-xl">
                                             <img src="/images/eyes-blue.svg" className="w-5 h-5" alt="" />
                                        </div>
                                        <h4 className="4xl:text-2xl text-[17px] font-bold mt-1 leading-9 text-black-2600">32.5%</h4>
                                        <span className="block text-sm font-medium leading-5 text-gray-1200">DAU/MAU Ratio</span>
                                   </div>
                                   <div className="text-xs font-normal leading-4 text-green-1600 ">
                                        8.2%
                                   </div>
                              </div>
                         </div>
                         <div className="bg-white border  border-gray-1000 shadow-13xl rounded-2xl 4xl:p-6 pr-[18px] p-3">
                              <div className="flex items-start justify-between">
                                   <div className="">
                                        <div className="bg-blue-3000/10 w-10 h-10 mb-3 flex items-center justify-center shadow-4xl rounded-xl">
                                             <img src="/images/bell-icon-blue.svg" className="w-5 h-5" alt="" />
                                        </div>
                                        <h4 className="4xl:text-2xl text-[17px] font-bold mt-1 leading-9 text-black-2600">8</h4>
                                        <span className="block text-sm font-medium leading-5 text-gray-1200">Active Push Campaigns</span>
                                   </div>
                                   <div className="text-xs font-normal leading-4 text-gray-1200 ">
                                        2 scheduled
                                   </div>
                              </div>
                         </div>
                         <div className="bg-white border  border-gray-1000 shadow-13xl rounded-2xl 4xl:p-6 pr-[18px] p-3">
                              <div className="flex items-start justify-between">
                                   <div className="">
                                        <div className="bg-blue-3000/10 w-10 h-10 mb-3 flex items-center justify-center shadow-4xl rounded-xl">
                                             <img src="/images/file-tick-icon.svg" className="w-5 h-5" alt="" />
                                        </div>
                                        <h4 className="4xl:text-2xl text-[17px] font-bold mt-1 leading-9 text-black-2600">5</h4>
                                        <span className="block text-sm font-medium leading-5 text-gray-1200">Pending Content Reviews</span>
                                   </div>
                                   <div className="text-xs font-normal leading-4 text-red-1300 ">
                                        3 urgent
                                   </div>
                              </div>
                         </div>
                         <div className="bg-white border  border-gray-1000 shadow-13xl rounded-2xl 4xl:p-6 pr-[18px] p-3">
                              <div className="flex items-start justify-between">
                                   <div className="">
                                        <div className="bg-blue-3000/10 w-10 h-10 mb-3 flex items-center justify-center shadow-4xl rounded-xl">
                                             <img src="/images/mobile-icon.svg" className="w-5 h-5" alt="" />
                                        </div>
                                        <h4 className="4xl:text-2xl text-[17px] font-bold mt-1 leading-9 text-black-2600">94.2%</h4>
                                        <span className="block text-sm font-medium leading-5 text-gray-1200">App Version Adoption</span>
                                   </div>
                                   <div className="text-xs font-normal leading-4 text-green-1600 ">
                                        +2.1%
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="flex items-center gap-2">
                         <span className="w-1 h-5 bg-blue-3000 rounded-full block"></span>
                         <h6 className="text-lg font-bold leading-7 text-black-2600">Communication Ledger</h6>
                    </div>
                    <div className="border border-gray-1000 mt-4 bg-white rounded-xl shadow-14xl">
                         <div className="py-4 px-5 flex items-center justify-between flex-wrap gap-5">
                              <div>
                                   <h6 className="text-base font-bold leading-6 text-black-2600">Communication Ledger</h6>
                                   <p className="text-sm font-normal leading-5 text-gray-1200">Manage all student-facing communications</p>
                              </div>
                              <ul className="flex gap-2">
                                   <li>
                                        <Button
                                             label=" All Channels"
                                             className="text-black-2600 bg-transparent border border-gray-1000 justify-center h-10 px-4 rounded-md! hover:bg-blue-1000/90 font-neulis-sans"
                                        />
                                   </li>
                                   <li>
                                        <Button
                                             label=" All Status"
                                             className="text-black-2600 bg-transparent border border-gray-1000 justify-center h-10 px-4 rounded-md! hover:bg-blue-1000/90 font-neulis-sans"
                                        />
                                   </li>
                              </ul>
                         </div>
                         <LedgerTable></LedgerTable>
                         <div className="py-4 px-5 flex items-center justify-between">
                              <div>
                                   <p className="text-sm font-normal leading-5 text-gray-1200">Showing 6 of 24 communications</p>
                              </div>
                              <ul className="flex gap-2">
                                   <li>
                                        <Button
                                             label=" Previous"
                                             className="text-black-2600 bg-transparent border border-gray-1000 justify-center h-10 px-4 rounded-md! hover:bg-blue-1000/90 font-neulis-sans"
                                        />
                                   </li>
                                   <li>
                                        <Button
                                             label="Next"
                                             className="text-black-2600 bg-transparent border border-gray-1000 justify-center h-10 px-4 rounded-md! hover:bg-blue-1000/90 font-neulis-sans"
                                        />
                                   </li>
                              </ul>
                         </div>
                    </div>
                    <div className="flex mt-6 items-center gap-2">
                         <span className="w-1 h-5 bg-blue-3000 rounded-full block"></span>
                         <h6 className="text-lg font-bold leading-7 text-black-2600">Knowledge Base Manager</h6>
                    </div>
                    <div className="border border-gray-1000 mt-4 bg-white rounded-xl shadow-14xl">
                         <div className="py-4 px-5 flex items-center justify-between flex-wrap gap-5">
                              <div>
                                   <h6 className="text-base font-bold leading-6 text-black-2600">Knowledge Base Manager</h6>
                                   <p className="text-sm font-normal leading-5 text-gray-1200">Top searched help articles and FAQs</p>
                              </div>
                              <Link href="/" className="flex items-center gap-1 text-sm font-normal text-blue-3000">View All <img src="/images/export-blue.svg" alt="" /></Link>
                         </div>
                         <ManagerTable></ManagerTable>
                    </div>
               </div>
          </div>
     )
}

export default page
