'use client'
import ApprovalStats from '@/app/components/ApprovalStats';
import CustomSelect from '@/app/components/CustomSelect';
import InputField from '@/app/components/InputField';
import ListingTable from '@/app/components/ListingTable';
import ManagementTable from '@/app/components/ManagementTable';
import ProgressBar from '@/app/components/ProgressBar';
import Button from '@/app/components/ui/Button';
import Link from "next/link";
import { useState } from "react";


export default function FinanceAnalytics() {
     const [status, setStatus] = useState<string>("Select Status");

     return (
          <div className="font-inter">
               <div className="mb-8">
                    <h2 className="text-[30px] font-bold leading-8 text-gray-2500 mb-1">Property Listings Management</h2>
                    <p className="text-base font-normal leading-6 text-gray-1200">Manage, review, and control all listings under this property</p>
               </div>
               <div className='bg-white mb-6 xl:flex-nowrap flex-wrap border border-gray-1000/50 rounded-2xl shadow-8xl 2xl:p-6 p-3 flex items-center justify-between gap-3'>
                    <div className='flex items-center gap-4'>
                         <div className='bg-blue-1400/10 flex w-12 h-12 rounded-[14px] flex items-center justify-center'>
                              <img src="/images/building-icon3.svg" alt="" />
                         </div>
                         <div>
                              <h6 className='text-lg font-bold leading-7 text-black-1600'>Mitte Residences</h6>
                              <div className="flex items-center gap-1.5">
                                   <img src="/images/location-icon3.svg" alt="" />
                                   <h6 className="text-sm font-normal leading-5 text-gray-1900">Alexanderplatz 15, Berlin, Germany</h6>
                              </div>
                         </div>
                    </div>
                    <div className='flex items-center flex-wrap gap-4'>
                         <div className='flex items-center gap-3 2xl:pr-8 pr-4 border-r border-gray-3600'>
                              <h6 className="text-sm font-normal leading-5 text-gray-1900">Status:</h6>
                              <div className="text-xs font-normal leading-4 text-green-1600 py-1 px-3 rounded-full bg-green-1900">Approved · Active</div>
                         </div>
                         <div className='flex items-center gap-3 2xl:px-8 px-4 border-r border-gray-3600'>
                              <img src="/images/home-icon3.svg" alt="" />
                              <h6 className="text-sm font-normal leading-5 text-gray-1900"><span className='text-black-1600 font-bold'>20</span> Total Units</h6>
                         </div>
                         <div className='flex items-center gap-3 2xl:pl-8 pl-4'>
                              <img src="/images/wallet-icon.svg" alt="" />
                              <h6 className="text-sm font-normal leading-5 text-gray-1900"><span className='text-black-1600 font-bold'>€30,000</span> Deposits Held</h6>
                         </div>
                    </div>
               </div>
               <ListingTable></ListingTable>
               <div className='bg-white border border-gray-3600 mt-4 rounded-[14px] shadow-10xl p-6'>
                    <h6 className="text-lg font-bold text-black-1600 leading-7 mb-4">Recent Listing Activity</h6>
                    <div className='space-y-4'>
                         <div className='flex items-center gap-3'>
                              <div className='w-8 h-8 flex items-center justify-center rounded-full bg-blue-1400/10'>
                                   <img src="/images/plus-blue.svg" alt=''></img>
                              </div>
                              <div>
                                   <h6 className='text-black-1600 text-sm'>Listing Created – Unit 4B</h6>
                                   <span className="text-gray-1900 block text-sm">
                                        Jan 15, 2024
                                   </span>
                              </div>
                         </div>
                         <div className='flex items-center gap-3'>
                              <div className='w-8 h-8 flex items-center justify-center rounded-full bg-green-1900'>
                                   <img src="/images/dollar-green.svg" alt=''></img>
                              </div>
                              <div>
                                   <h6 className='text-black-1600 text-sm'>Deposit Received – €1,050 for Unit 1A</h6>
                                   <span className="text-gray-1900 block text-sm">
                                        Jan 15, 2024
                                   </span>
                              </div>
                         </div>
                         <div className='flex items-center gap-3'>
                              <div className='w-8 h-8 flex items-center justify-center rounded-full bg-gray-3500'>
                                   <img src="/images/caution-icon4.svg" alt=''></img>
                              </div>
                              <div>
                                   <h6 className='text-black-1600 text-sm'>Listing Suspended by Admin – Unit 5A</h6>
                                   <span className="text-gray-1900 block text-sm">
                                        Jan 15, 2024
                                   </span>
                              </div>
                         </div>
                         <div className='flex items-center gap-3'>
                              <div className='w-8 h-8 flex items-center justify-center rounded-full bg-green-1900'>
                                   <img src="/images/tick-circle6.svg" className='w-4' alt=''></img>
                              </div>
                              <div>
                                   <h6 className='text-black-1600 text-sm'>Listing Activated – Unit 6D</h6>
                                   <span className="text-gray-1900 block text-sm">
                                        Jan 15, 2024
                                   </span>
                              </div>
                         </div>
                    </div>
               </div>
               <ul className='flex gap-4 flex-wrap items-center justify-between mt-8'>
                    <li>
                         <Link href="/" className='text-sm font-normal leading-5 text-black-1600 py-2 px-4 flex items-center gap-4 bg-gray-1500 border border-gray-3600 rounded-lg'>
                              <img src="/images/left-arrow3.svg"></img>
                              Back to Property Details</Link>
                    </li>
                    <li>
                         <Link href="/" className='text-sm font-normal leading-5 text-black-1600 py-2 px-4 flex items-center gap-4 bg-gray-1500 border border-gray-3600 rounded-lg'>
                              <img src="/images/user-icon3.svg"></img>
                              View Owner Profile</Link>
                    </li>
               </ul>
          </div>
     );
}
