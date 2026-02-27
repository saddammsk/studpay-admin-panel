'use client'
import ApprovalStats from '@/app/components/ApprovalStats';
import ProgressBar from '@/app/components/ProgressBar';
import Link from "next/link";
import { useState } from "react";


export default function FinanceAnalytics() {
     const [status, setStatus] = useState<string>("Select Status");
     return (
          <div className="font-inter">
               <div className="mb-8">
                    <h2 className="text-[30px] font-bold leading-8 text-gray-2500 mb-1">Housing Management</h2>
                    <p className="text-base font-normal leading-6 text-gray-1200">Monitor and manage all housing operations from this command center.</p>
               </div>
               <div className='my-8 grid xl:grid-cols-5 sm:grid-cols-3 grid-cols-2 4xl:gap-[54px] 2xl:gap-8 gap-3'>
                    <div className='bg-white border border-gray-1000/50 rounded-2xl shadow-8xl md:p-5 p-3'>
                         <div className='flex items-start justify-between mb-4'>
                              <div className='bg-blue-1700/10 rounded-xl w-11 h-11 flex items-center justify-center'>
                                   <img src="/images/building-icon3.svg" alt="" />
                              </div>
                              <div className='flex items-center gap-1 text-xs font-normal leading-4 text-green-1800 py-1 px-2 bg-gray-1600 rounded-full'>
                                   <img src="/images/trend-up2.svg" alt="" />  12%
                              </div>
                         </div>
                         <h6 className="text-sm font-normal leading-5 text-gray-1200 mb-1">Total Properties</h6>
                         <span className="text-[30px] leading-9 font-bold text-black-1600 block">192</span>
                    </div>
                    <div className='bg-white border border-gray-1000/50 rounded-2xl shadow-8xl md:p-5 p-3'>
                         <div className='flex items-start justify-between mb-4'>
                              <div className='bg-blue-1700/10 rounded-xl w-11 h-11 flex items-center justify-center'>
                                   <img src="/images/user-blue.svg" className='w-5' alt="" />
                              </div>
                              <div className='flex items-center gap-1 text-xs font-normal leading-4 text-green-1800 py-1 px-2 bg-gray-1600 rounded-full'>
                                   <img src="/images/trend-up2.svg" alt="" />  8%
                              </div>
                         </div>
                         <h6 className="text-sm font-normal leading-5 text-gray-1200 mb-1">Total Landlords</h6>
                         <span className="text-[30px] leading-9 font-bold text-black-1600 block">84</span>
                    </div>
                    <div className='bg-white border border-gray-1000/50 rounded-2xl shadow-8xl md:p-5 p-3'>
                         <div className='flex items-start justify-between mb-4'>
                              <div className='bg-green-1300/10 rounded-xl w-11 h-11 flex items-center justify-center'>
                                   <img src="/images/home-icon3.svg" alt="" />
                              </div>
                         </div>
                         <h6 className="text-sm font-normal leading-5 text-gray-1200 mb-1">Active Listings</h6>
                         <span className="text-[30px] leading-9 font-bold text-black-1600 block">142</span>
                    </div>
                    <div className='bg-white border border-gray-1000/50 rounded-2xl shadow-8xl md:p-5 p-3'>
                         <div className='flex items-start justify-between mb-4'>
                              <div className='bg-yellow-1300/10 rounded-xl w-11 h-11 flex items-center justify-center'>
                                   <img src="/images/wallet-yellow.svg" alt="" />
                              </div>
                              <div className='flex items-center gap-1 text-xs font-normal leading-4 text-green-1800 py-1 px-2 bg-gray-1600 rounded-full'>
                                   <img src="/images/trend-up2.svg" alt="" />5%
                              </div>
                         </div>
                         <h6 className="text-sm font-normal leading-5 text-gray-1200 mb-1">Deposits Held</h6>
                         <span className="text-[30px] leading-9 font-bold text-black-1600 block">€45.2k</span>
                    </div>
                    <div className='bg-white border border-gray-1000/50 rounded-2xl shadow-8xl md:p-5 p-3'>
                         <div className='flex items-start justify-between mb-4'>
                              <div className='bg-red-1500/10 rounded-xl w-11 h-11 flex items-center justify-center'>
                                   <img src="/images/timer-icon-red.svg" alt="" />
                              </div>
                              <div className='flex items-center gap-1 text-xs font-normal leading-4 text-red-1400 py-1 px-2 bg-gray-1600 rounded-full'>
                                   <img src="/images/trend-down2.svg" alt="" />3%
                              </div>
                         </div>
                         <h6 className="text-sm font-normal leading-5 text-gray-1200 mb-1">Pending Approvals</h6>
                         <span className="text-[30px] leading-9 font-bold text-black-1600 block">23</span>
                    </div>
               </div>
               <div className='grid xl:grid-cols-2 gap-6 mb-8'>
                    <div className='bg-white border border-gray-1000/50 rounded-2xl shadow-8xl p-6'>
                         <div className='flex items-start justify-between mb-8'>
                              <div>
                                   <h6 className='text-lg font-bold leading-7 text-black-1600 mb-0.5'>Properties by Status</h6>
                                   <span className="text-sm font-normal leading-5 text-gray-1200">Click to filter listings</span>
                              </div>
                              <h6 className='text-2xl font-bold leading-8 text-black-1600'>192</h6>
                         </div>
                         <ApprovalStats></ApprovalStats>
                    </div>
                    <div className='bg-white border border-gray-1000/50 rounded-2xl shadow-8xl p-6 '>
                         <div className='flex items-start justify-between mb-6'>
                              <div>
                                   <h6 className='text-lg font-bold leading-7 text-black-1600'>Deposits Overview</h6>
                                   <span className="text-sm font-normal leading-5 text-gray-1200">Click to view details</span>
                              </div>
                              <div className="text-end">
                                   <span className="text-sm font-normal leading-5 text-gray-1200">Click to view details</span>
                                   <h6 className='text-2xl font-bold leading-8 text-black-1600'>€82,000.00</h6>
                              </div>
                         </div>
                         <div className='flex items-center md:flex-nowrap flex-wrap md:gap-14 gap-5 mb-4 justify-between'>
                              <div className='flex items-center gap-4'>
                                   <div className='bg-blue-1700/10 rounded-xl w-10 h-10 flex items-center justify-center'>
                                        <img src="/images/wallet-blue.svg" alt="" />
                                   </div>
                                   <div>
                                        <h6 className='text-sm font-normal leading-5 text-black-1600 '>Held</h6>
                                        <span className="text-xs font-normal leading-4 text-gray-1200">Click to filter listings</span>
                                   </div>
                              </div>
                              <div className="text-end md:flex-1 md:w-auto w-full">
                                   <span className='block text-lg font-bold leading-7 mb-3 text-black-1600'>€45,200.00</span>
                                   <div className=''>
                                        <ProgressBar value={100}></ProgressBar>
                                   </div>
                              </div>
                         </div>
                         <div className='flex items-center md:flex-nowrap flex-wrap md:gap-14 gap-5 mb-4 justify-between'>
                              <div className='flex items-center gap-4'>
                                   <div className='bg-green-1300/8 rounded-xl w-10 h-10 flex items-center justify-center'>
                                        <img src="/images/arrow-up.svg" alt="" />
                                   </div>
                                   <div>
                                        <h6 className='text-sm font-normal leading-5 text-black-1600 '>Released</h6>
                                        <span className="text-xs font-normal leading-4 text-gray-1200">Paid to landlords</span>
                                   </div>
                              </div>
                              <div className="text-end md:flex-1 md:w-auto w-full  md:max-w-[522px] ml-auto">
                                   <span className='block text-lg font-bold leading-7 mb-3 text-black-1600'>€28,500.00</span>
                                   <div className=''>
                                        <ProgressBar value={60} barColor="bg-green-1300"></ProgressBar>
                                   </div>
                              </div>
                         </div>
                         <div className='flex items-center md:flex-nowrap flex-wrap md:gap-14 gap-5 mb-4 justify-between'>
                              <div className='flex items-center gap-4'>
                                   <div className='bg-yellow-1300/10 rounded-xl w-10 h-10 flex items-center justify-center'>
                                        <img src="/images/recycle-icon-yellow.svg" alt="" />
                                   </div>
                                   <div>
                                        <h6 className='text-sm font-normal leading-5 text-black-1600 '>Refunded</h6>
                                        <span className="text-xs font-normal leading-4 text-gray-1200">Returned to tenants</span>
                                   </div>
                              </div>
                              <div className="text-end md:flex-1 md:w-auto w-full md:max-w-[522px] ml-auto">
                                   <span className='block text-lg font-bold leading-7 mb-3 text-black-1600'>€8,300.00</span>
                                   <div className=''>
                                        <ProgressBar value={100} barColor='bg-yellow-1300'></ProgressBar>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className='bg-white border border-gray-1000/50 rounded-2xl shadow-8xl md:p-6 p-4'>
                    <div className='flex items-start justify-between mb-8'>
                         <div>
                              <h6 className='text-lg font-bold leading-7 text-black-1600 mb-0.5'>Recent Activity</h6>
                              <span className="text-sm font-normal leading-5 text-gray-1200">Latest updates across the platform</span>
                         </div>
                         <Link href="/" className='flex items-center gap-1 text-sm font-normal leading-5 text-blue-2200'>View all <img src="/images/right-arrow-blue.svg" alt="" /></Link>
                    </div>
                    <div className='flex items-center justify-between md:flex-nowrap flex-wrap md:gap-0 gap-4 md:p-3 py-2'>
                         <div className='flex items-center gap-4'>
                              <div className='bg-blue-1700/10 rounded-xl w-10 h-10 flex items-center justify-center'>
                                   <img src="/images/building-icon3.svg" alt="" />
                              </div>
                              <div className='flex-1'>
                                   <h6 className="text-sm font-normal leading-5 text-black-1600">New Property Submitted</h6>
                                   <h6 className="text-xs font-normal leading-4 text-gray-1200">3BR Apartment at 42 Oak Street awaiting review</h6>
                              </div>
                         </div>
                         <span className="text-xs font-normal leading-4 text-gray-1200">5 min ago</span>
                    </div>
                    <div className='flex items-center justify-between md:flex-nowrap flex-wrap md:gap-0 gap-4 md:p-3 py-2'>
                         <div className='flex items-center gap-4'>
                              <div className='bg-green-1300/8 rounded-xl w-10 h-10 flex items-center justify-center'>
                                   <img src="/images/tick-circle6.svg" alt="" />
                              </div>
                              <div className='flex-1'>
                                   <h6 className="text-sm font-normal leading-5 text-black-1600">Listing Approved</h6>
                                   <h6 className="text-xs font-normal leading-4 text-gray-1200">Studio at 15 Pine Avenue is now live</h6>
                              </div>
                         </div>
                         <span className="text-xs font-normal leading-4 text-gray-1200">5 min ago</span>
                    </div>
                    <div className='flex items-center justify-between md:flex-nowrap flex-wrap md:gap-0 gap-4 md:p-3 py-2'>
                         <div className='flex items-center gap-4'>
                              <div className="bg-yellow-1300/10 rounded-xl w-10 h-10 flex items-center justify-center">
                                   <img src="/images/wallet-yellow.svg" alt="" /></div>
                              <div className='flex-1'>
                                   <h6 className="text-sm font-normal leading-5 text-black-1600">Deposit Received</h6>
                                   <h6 className="text-xs font-normal leading-4 text-gray-1200">€1,200 deposit paid for 8 Maple Court</h6>
                              </div>
                         </div>
                         <span className="text-xs font-normal leading-4 text-gray-1200">5 min ago</span>
                    </div>
                    <div className='flex items-center justify-between md:flex-nowrap flex-wrap md:gap-0 gap-4 md:p-3 py-2'>
                         <div className='flex items-center gap-4'>
                              <div className="bg-blue-1700/10 rounded-xl w-10 h-10 flex items-center justify-center">
                                   <img src="/images/user-icon4.svg" className="w-5" alt="" /></div>
                              <div className='flex-1'>
                                   <h6 className="text-sm font-normal leading-5 text-black-1600">New Landlord Registered</h6>
                                   <h6 className="text-xs font-normal leading-4 text-gray-1200">John Murphy submitted verification documents</h6>
                              </div>
                         </div>
                         <span className="text-xs font-normal leading-4 text-gray-1200">5 min ago</span>
                    </div>
                    <div className='flex items-center justify-between md:flex-nowrap flex-wrap md:gap-0 gap-4 md:p-3 py-2'>
                         <div className='flex items-center gap-4'>
                              <div className="bg-red-1500/10 rounded-xl w-10 h-10 flex items-center justify-center">
                                   <img src="/images/cross-red.svg" className="w-5" alt="" /></div>
                              <div className='flex-1'>
                                   <h6 className="text-sm font-normal leading-5 text-black-1600">Listing Rejected</h6>
                                   <h6 className="text-xs font-normal leading-4 text-gray-1200">John Murphy submitted verification documents</h6>
                              </div>
                         </div>
                         <span className="text-xs font-normal leading-4 text-gray-1200">5 min ago</span>
                    </div>
                    <div className='flex items-center justify-between md:flex-nowrap flex-wrap md:gap-0 gap-4 md:p-3 py-2'>
                         <div className='flex items-center gap-4'>
                              <div className="bg-yellow-1300/10 rounded-xl w-10 h-10 flex items-center justify-center">
                                   <img src="/images/wallet-yellow.svg" alt="" /></div>
                              <div className='flex-1'>
                                   <h6 className="text-sm font-normal leading-5 text-black-1600">Deposit Received</h6>
                                   <h6 className="text-xs font-normal leading-4 text-gray-1200">€1,200 deposit paid for 8 Maple Court</h6>
                              </div>
                         </div>
                         <span className="text-xs font-normal leading-4 text-gray-1200">5 min ago</span>
                    </div>
               </div>
          </div>
     );
}
