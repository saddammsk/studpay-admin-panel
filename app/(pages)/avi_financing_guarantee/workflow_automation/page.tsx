'use client'
import Pipeline from '@/app/components/Pipeline';
import ProgressBar from '@/app/components/ProgressBar';
import StageItems from '@/app/components/StageItems';
import TaskQueue from '@/app/components/TaskQueue';
import Button from '@/app/components/ui/Button';
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
                         <p className="text-sm font-medium block leading-5 text-black-1500">Workflow</p>
                    </li>
               </ul>
               <div className="2xl:flex-nowrap flex-wrap gap-5  4xl:p-6 md:p-4 p-0 pb-4 flex items-center justify-between">
                    <div className="">
                         <h2 className="text-[30px] font-bold mt-1 leading-8 text-gray-2500">AVI Financing — Workflow & Automation</h2>
                    </div>
                    <ul className="flex items-center md:flex-nowrap flex-wrap gap-3">

                         <li>
                              <Link href="/" className="flex items-center gap-[18px] text-sm font-medium leading-5 text-gray-2500 py-1.5 px-3 border border-gray-1000 rounded-[10px]"><img className="w-4 h-4" src="3xl:/images/setting-icon3.svg" alt="" /> Auto-assign Rules</Link>
                         </li>
                         <li>
                              <Link href="/" className="flex items-center gap-[18px] text-sm font-medium leading-5 text-white bg-blue-1900 py-1.5 px-3  rounded-[10px]"><img className="w-4 h-4" src="/images/plus-icon.svg" alt="" /> Create Task</Link>
                         </li>
                    </ul>
               </div>
               <div className='grid md:grid-cols-3 gap-6 mb-6'>
                    <div className='border border-gray-1000 bg-white rounded-lg shadow-4xl xl:p-6 p-3'>
                         <div className='flex items-start justify-between'>
                              <div>
                                   <h6 className='text-sm font-normal leading-5 text-gray-2600 mb-2'>Tasks Assigned Today</h6>
                                   <h4 className="text-2xl font-bold leading-8 text-gray-2500 mb-1">47</h4>
                                   <div className="py-1 px-2 gap-1 text-sm font-medium leading-5 text-green-1500 flex items-center justify-center">
                                        <img src="/images/trend-up.svg" alt="" />    +8.2% <span className="text-gray-2600">vs yesterday</span>
                                   </div>
                              </div>
                              <img src="/images/file-icon2.svg" className='w-4 h-4' alt="" />
                         </div>
                    </div>
                    <div className='border border-gray-1000 bg-white rounded-lg shadow-4xl xl:p-6 p-3'>
                         <div className='flex items-start justify-between'>
                              <div>
                                   <h6 className='text-sm font-normal leading-5 text-gray-2600 mb-2'>SLA Breaches</h6>
                                   <h4 className="text-2xl font-bold leading-8 text-gray-2500 mb-1">3</h4>
                                   <div className="py-1 px-2 gap-1 text-sm font-medium leading-5 text-red-1300 flex items-center justify-center">
                                        <img src="/images/trend-down.svg" alt="" />   -2 <span className="text-gray-2600">vs yesterday</span>
                                   </div>
                              </div>
                              <img src="/images/caution-icon3.svg" className='w-4 h-4' alt="" />
                         </div>
                    </div>
                    <div className='border border-gray-1000 bg-white rounded-lg shadow-4xl xl:p-6 p-3'>
                         <div className='flex items-start justify-between'>
                              <div>
                                   <h6 className='text-sm font-normal leading-5 text-gray-2600 mb-2'>Avg Handling Time</h6>
                                   <h4 className="text-2xl font-bold leading-8 text-gray-2500 mb-1">18.5h</h4>
                                   <div className="py-1 px-2 gap-1 text-sm font-medium leading-5 text-green-1500 flex items-center justify-center">
                                        <img src="/images/trend-up.svg" alt="" />  +2.3h <span className="text-gray-2600">improvement</span>
                                   </div>
                              </div>
                              <img src="/images/timer.svg" className='w-4 h-4' alt="" />
                         </div>
                    </div>
               </div>
               <div className='flex 4xl:gap-6 gap-3 mb-6 2xl:flex-nowrap flex-wrap'>
                    <div className="2xl:w-3/12 xl:w-[48%] w-full">
                         <div className='border border-gray-1000 bg-white rounded-lg shadow-4xl 4xl:p-6 p-3'>
                              <div className='flex items-center justify-between mb-6'>
                                   <h4 className='text-lg font-bold leading-7 text-gray-2500'>Task Queue</h4>
                                   <div className='flex items-center gap-2'>
                                        <div className='text-xs font-bold text-white leading-4 py-[3px] px-[11px] rounded-full bg-blue-2000'>Auto-assign ON</div>
                                        <Link href="/" className='w-10 h-10 flex items-center justify-center'>
                                             <img src="/images/filter.svg" alt="" />
                                        </Link>
                                   </div>
                              </div>
                              <TaskQueue></TaskQueue>
                         </div>
                    </div>
                    <div className='2xl:w-6/12 xl:w-[50%] w-full'>
                         <div className='border border-gray-1000 bg-white rounded-lg shadow-4xl 4xl:p-6 p-3'>
                              <h4 className='text-lg font-bold leading-7 text-gray-2500 mb-6'>Workflow Pipeline</h4>
                              <Pipeline></Pipeline>
                              <div className='mt-6'>
                                   <h6 className='text-sm font-normal leading-5 text-gray-2500 mb-3'>Active Items by Stage</h6>
                                   <StageItems></StageItems>
                              </div>
                         </div>
                    </div>
                    <div className="2xl:w-3/12 w-full">
                         <div className='border mb-4 border-gray-1000 bg-white rounded-lg shadow-4xl 4xl:p-6 p-3'>
                              <div className='flex items-center gap-2.5 mb-6'>
                                   <img src="/images/info-icon.svg" alt="" />
                                   <h4 className='text-lg font-bold leading-7 text-gray-2500'>SLA Alerts</h4>
                              </div>
                              <div className='border border-gray-1000 rounded-lg p-[13px] mb-3'>
                                   <div className='flex items-start justify-between mb-2'>
                                        <div>
                                             <h6 className="text-xs font-normal leading-4 text-gray-2500">AVI-2024-001</h6>
                                             <span className="text-xs font-normal leading-4 block text-gray-2600">Sarah Johnson</span>
                                        </div>
                                        <div className="text-xs font-bold leading-4 py-0.5 px-2.5 rounded-full text-red-1300 bg-gray-3500">2h 15m</div>
                                   </div>
                                   <span className="text-xs font-normal leading-4 block text-gray-2600">Risk Review</span>
                                   <ul className="flex items-center gap-1 mt-3">
                                        <li className="w-1/2">
                                             <Link href="/" className='text-white text-xs font-normal leading-4 p-2.5 rounded-md block bg-red-1300 w-full text-center'>Escalate</Link>
                                        </li>
                                        <li className="w-1/2">
                                             <Link href="/" className='text-gray-2500 text-xs font-normal leading-4 p-2.5 rounded-md block border border-gray-1000 w-full text-center'>Snooze</Link>
                                        </li>
                                   </ul>
                              </div>
                              <div className='border border-gray-1000 rounded-lg p-[13px]'>
                                   <div className='flex items-start justify-between mb-2'>
                                        <div>
                                             <h6 className="text-xs font-normal leading-4 text-gray-2500">AVI-2024-001</h6>
                                             <span className="text-xs font-normal leading-4 block text-gray-2600">Sarah Johnson</span>
                                        </div>
                                        <div className="text-xs font-bold leading-4 py-0.5 px-2.5 rounded-full text-red-1300 bg-gray-3500">2h 15m</div>
                                   </div>
                                   <span className="text-xs font-normal leading-4 block text-gray-2600">Risk Review</span>
                                   <ul className="flex items-center gap-1 mt-3">
                                        <li className="w-1/2">
                                             <Link href="/" className='text-white text-xs font-normal leading-4 p-2.5 rounded-md block bg-red-1300 w-full text-center'>Escalate</Link>
                                        </li>
                                        <li className="w-1/2">
                                             <Link href="/" className='text-gray-2500 text-xs font-normal leading-4 p-2.5 rounded-md block border border-gray-1000 w-full text-center'>Snooze</Link>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                         <div className='border border-gray-1000 bg-white rounded-lg shadow-4xl 4xl:p-6 p-3'>
                              <div className='flex items-center gap-2.5 mb-6'>
                                   <h4 className='text-lg font-bold leading-7 text-gray-2500'>Quick Actions</h4>
                              </div>
                              <div className="space-y-2">
                                   <Button
                                        label="Bulk Review"
                                        className="text-gray-2500 w-full py-2.5! justify-start font-medium bg-transparent border border-gray1600"
                                        iconSrc="/images/flash-icon.svg"
                                   />
                                   <Button
                                        label="SLA Report"
                                        className="text-gray-2500 w-full py-2.5! justify-start font-medium bg-transparent border border-gray1600"
                                        iconSrc="/images/timer-icon4.svg"
                                   />
                                   <Button
                                        label="Workflow Rules"
                                        className="text-gray-2500 w-full py-2.5! justify-start font-medium bg-transparent border border-gray1600"
                                        iconSrc="3xl:/images/setting-icon3.svg"
                                   />
                              </div>
                         </div>
                    </div>
               </div>
               <div className='border border-gray-1000 bg-white rounded-lg shadow-4xl md:p-6 p-3'>
                    <h4 className='text-lg font-bold leading-7 mb-6 text-gray-2500'>Automated Send Log</h4>
                    <div className='flex items-center flex-wrap gap-2 justify-between py-3 border-b border-gray-1000'>
                         <div className='flex items-start justify-between mb-2'>
                              <div className='flex items-center gap-3'>
                                   <img src="/images/tick-circle6.svg" className='w-4 h-4' alt="" />
                                   <div>
                                        <h6 className="text-xs font-normal leading-4 text-gray-2500">Partner API Call</h6>
                                        <span className="text-xs font-normal leading-4 block text-gray-2600">Sent AVI-2024-001 to Lending Partner A</span>
                                   </div>
                              </div>
                         </div>
                         <div className='flex items-center gap-3'>
                              <span className="text-xs font-normal leading-4 block text-gray-2600">2 minutes ago</span>
                              <div className="text-xs font-bold leading-4 py-0.5 px-2.5 rounded-full text-green-1500 bg-green-1700">success</div>
                         </div>
                    </div>
                    <div className='flex items-center flex-wrap gap-2 justify-between py-3 border-b border-gray-1000'>
                         <div className='flex items-start justify-between mb-2'>
                              <div className='flex items-center gap-3'>
                                   <img src="/images/tick-circle6.svg" className='w-4 h-4' alt="" />
                                   <div>
                                        <h6 className="text-xs font-normal leading-4 text-gray-2500">Partner API Call</h6>
                                        <span className="text-xs font-normal leading-4 block text-gray-2600">Sent AVI-2024-001 to Lending Partner A</span>
                                   </div>
                              </div>
                         </div>
                         <div className='flex items-center gap-3'>
                              <span className="text-xs font-normal leading-4 block text-gray-2600">2 minutes ago</span>
                              <div className="text-xs font-bold leading-4 py-0.5 px-2.5 rounded-full text-green-1500 bg-green-1700">success</div>
                         </div>
                    </div>
                    <div className='flex items-center flex-wrap gap-2 justify-between py-3'>
                         <div className='flex items-start justify-between mb-2'>
                              <div className='flex items-center gap-3'>
                                   <img src="/images/caution-icon4.svg" className='w-4 h-4' alt="" />
                                   <div>
                                        <h6 className="text-xs font-normal leading-4 text-gray-2500">Partner API Error</h6>
                                        <span className="text-xs font-normal leading-4 block text-gray-2600">Failed to send AVI-2024-003 - timeout error</span>
                                   </div>
                              </div>
                         </div>
                         <div className='flex items-center gap-3'>
                              <span className="text-xs font-normal leading-4 block text-gray-2600">2 minutes ago</span>
                              <div className="text-xs font-bold leading-4 py-0.5 px-2.5 rounded-full text-red-1300 bg-gray-3500">error</div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
