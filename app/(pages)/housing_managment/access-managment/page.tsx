'use client'
import ApprovalStats from '@/app/components/ApprovalStats';
import CustomSelect from '@/app/components/CustomSelect';
import InputField from '@/app/components/InputField';
import ManagementTable from '@/app/components/ManagementTable';
import ProgressBar from '@/app/components/ProgressBar';
import Button from '@/app/components/ui/Button';
import Link from "next/link";
import { useState } from "react";


export default function FinanceAnalytics() {
     const [status, setStatus] = useState<string>("Select Status");
     const [status2, setStatus2] = useState<string>("Select Status");
     const [status3, setStatus3] = useState<string>("Select Status");
     return (
          <div className="font-inter">
               <div className="mb-8">
                    <h2 className="text-[30px] font-bold leading-8 text-gray-2500 mb-1">Owners & Access Management</h2>
                    <p className="text-base font-normal leading-6 text-gray-1200">Manage landlords, housing partners, and their permissions</p>
               </div>
               <div className='my-8 grid 2xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4'>
                    <div className='bg-white border border-gray-1000/50 rounded-2xl shadow-8xl md:p-5 p-3 flex items-center gap-3'>
                         <div className='bg-blue-1700/10 rounded-xl w-11 h-11 flex items-center justify-center'>
                              <img src="/images/user-blue.svg" className='w-5' alt="" />
                         </div>
                         <div className='flex-1'>
                              <span className="4xl:text-[30px] text-2xl  leading-9 font-bold text-black-1600 block">6</span>
                              <h6 className="text-sm font-normal leading-5 text-gray-1200 mb-1">Total Owners</h6>
                         </div>
                    </div>
                    <div className='bg-white border border-gray-1000/50 rounded-2xl shadow-8xl md:p-5 p-3 flex items-center gap-3'>
                         <div className='bg-green-1500/10 rounded-xl w-11 h-11 flex items-center justify-center'>
                              <img src="/images/user-green2.svg" className='w-5' alt="" />
                         </div>
                         <div className='flex-1'>
                              <span className="4xl:text-[30px] text-2xl  leading-9 font-bold text-black-1600 block">4</span>
                              <h6 className="text-sm font-normal leading-5 text-gray-1200 mb-1">Active</h6>
                         </div>
                    </div>
                    <div className='bg-white border border-gray-1000/50 rounded-2xl shadow-8xl md:p-5 p-3 flex items-center gap-3'>
                         <div className='bg-blue-1700/10 rounded-xl w-11 h-11 flex items-center justify-center'>
                              <img src="/images/building-icon3.svg" className='w-5' alt="" />
                         </div>
                         <div className='flex-1'>
                              <span className="4xl:text-[30px] text-2xl  leading-9 font-bold text-black-1600 block">38</span>
                              <h6 className="text-sm font-normal leading-5 text-gray-1200 mb-1">Properties</h6>
                         </div>
                    </div>
                    <div className='bg-white border border-gray-1000/50 rounded-2xl shadow-8xl md:p-5 p-3 flex items-center gap-3'>
                         <div className='bg-blue-1700/10 rounded-xl w-11 h-11 flex items-center justify-center'>
                              <img src="/images/euro-blue.svg" className='w-5' alt="" />
                         </div>
                         <div className='flex-1'>
                              <span className="4xl:text-[30px] text-[22px]  leading-9 font-bold text-black-1600 block">€214,500</span>
                              <h6 className="text-sm font-normal leading-5 text-gray-1200 mb-1">Deposits Held</h6>
                         </div>
                    </div>
                    <div className='bg-white border border-gray-1000/50 rounded-2xl shadow-8xl md:p-5 p-3 flex items-center gap-3'>
                         <div className='bg-yellow-1100/10 rounded-xl w-11 h-11 flex items-center justify-center'>
                              <img src="/images/info-yellow.svg" className='w-5' alt="" />
                         </div>
                         <div className='flex-1'>
                              <span className="4xl:text-[30px] text-2xl  leading-9 font-bold text-black-1600 block">1</span>
                              <h6 className="text-sm font-normal leading-5 text-gray-1200 mb-1">Pending Verification</h6>
                         </div>
                    </div>
               </div>
               <div className='bg-white border border-gray-1000/50 rounded-2xl flex-wrap shadow-8xl p-4 items-center flex gap-4'>
                    <div className='w-full 2xl:flex-1'>
                         <InputField
                              ClassName='bg-gray-1500 w-full rounded-lg! h-10'
                              type="text"
                              placeholder="Search owner, email, or company..."
                              iconSrc="/images/search-icon.svg"
                         />
                    </div>
                    <div className='flex items-center gap-3 flex-wrap'>
                         <div className='flex items-center text-sm font-normal leading-5 text-gray-1900 gap-2'>
                              <img src="/images/filter-icon2.svg" alt="" />
                              Filters:
                         </div>
                         <CustomSelect className='bg-gray-1500!'
                              value={status}
                              onChange={(e) => setStatus(e.target.value)}
                              options={[
                                   { label: "All Status", value: "All Status" },
                                   { label: "Last 29 days", value: "Last 29 days" },
                              ]}
                         />
                         <CustomSelect className='bg-gray-1500!'
                              value={status2}
                              onChange={(e) => setStatus2(e.target.value)}
                              options={[
                                   { label: "All Verification", value: "All Verification" },
                                   { label: "Last 29 days", value: "Last 29 days" },
                              ]}
                         />
                         <CustomSelect className='bg-gray-1500!'
                              value={status3}
                              onChange={(e) => setStatus3(e.target.value)}
                              options={[
                                   { label: "All Countries", value: "All Countries" },
                                   { label: "Last 29 days", value: "Last 29 days" },
                              ]}
                         />
                         <Button
                              label="Add New Owner"
                              className="text-white gap-4 px-4 justify-center bg-blue-1500"
                              iconSrc='/images/plus-icon.svg'
                         />
                    </div>
               </div>
               <h6 className='mt-6 mb-4 text-sm font-normal leading-5 text-gray-1900'>Showing 6 of 6 owners</h6>
               <ManagementTable></ManagementTable>
          </div>
     );
}
