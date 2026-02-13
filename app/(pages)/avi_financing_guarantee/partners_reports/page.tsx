'use client'
import CustomSelect from '@/app/components/CustomSelect';
import PartnerCard from '@/app/components/PartnerCard';
import ProgressBar from '@/app/components/ProgressBar';
import Button from '@/app/components/ui/Button';
import Link from "next/link";
import { useState } from "react";


export default function FinanceAnalytics() {
     const [status, setStatus] = useState<string>("Select Status");
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
                         <p className="text-sm font-medium block leading-5 text-black-1500">Partners & Reports</p>
                    </li>
               </ul>
               <div className="2xl:flex-nowrap flex-wrap gap-5  4xl:p-6 md:p-4 p-0 pb-4 flex items-center justify-between">
                    <div className="">
                         <h2 className="text-[30px] font-bold mt-1 leading-8 text-gray-2500">AVI Financing — Partners & Reports</h2>
                    </div>
                    <ul className="flex items-center md:flex-nowrap flex-wrap gap-3">
                         <li>
                              <CustomSelect
                                   value={status}
                                   onChange={(e) => setStatus(e.target.value)}
                                   options={[
                                        { label: "Last 30 days", value: "Last 30 days" },
                                        { label: "Last 29 days", value: "Last 29 days" },
                                   ]}
                              />
                         </li>
                         <li>
                              <Link href="/" className="flex items-center gap-4 text-sm font-medium leading-5 text-gray-2500 py-1.5 px-3 border border-gray-1000 rounded-[10px]"><img className="w-4 h-4" src="/images/filter.svg" alt="" /> Reports Dashboard</Link>
                         </li>
                         <li>
                              <Link href="/" className="flex items-center gap-4.5 text-sm font-medium leading-5 text-white bg-blue-1900 py-1.5 px-3  rounded-[10px]"><img className="w-4 h-4" src="/images/export-icon.svg" alt="" /> Export All</Link>
                         </li>
                    </ul>
               </div>
               <div className='flex 4xl:gap-6 gap-3 mb-6 2xl:flex-nowrap flex-wrap'>
                    <div className="2xl:w-3/12 xl:w-[48%] w-full">
                         <div className='border border-gray-1000 bg-white rounded-lg shadow-4xl 4xl:p-6 p-3'>
                              <div className='flex items-center justify-between mb-6'>
                                   <h4 className='text-2xl font-bold leading-6 text-gray-2500'>Lending Partners</h4>
                                   <div className='flex items-center gap-2'>
                                        <div className='text-xs font-bold text-gray-2500 leading-4 py-0.75 px-2.75 rounded-full bg-gray-1600'>4</div>
                                   </div>
                              </div>
                              <PartnerCard></PartnerCard>
                         </div>
                    </div>
                    <div className='2xl:w-6/12 xl:w-[50%] w-full'>
                         <div className='border border-gray-1000 bg-white rounded-lg shadow-4xl 4xl:p-6 p-3'>
                              <div className='flex items-center justify-between mb-6'>
                                   <h4 className='text-lg font-bold leading-7 text-gray-2500 '>Capital Finance Ltd</h4>
                                   <div className="text-xs font-bold leading-4 py-0.5 px-2.5 rounded-full text-green-1500 bg-green-1700">Active</div>
                              </div>
                              <div className="grid xl:grid-cols-2 xl:gap-5 gap-2 pb-4 mb-4 border-b border-gray-1000">
                                   <div className='flex items-center gap-2'>
                                        <img src="/images/user-icon3.svg" alt="" />
                                        <h6 className="text-sm font-normal leading-5 text-gray-2900">James Smith</h6>
                                   </div>
                                   <div className='flex items-center gap-2'>
                                        <img src="/images/location-icon3.svg" alt="" />
                                        <h6 className="text-sm font-normal leading-5 text-gray-2900">123 Financial Street, London, EC2V 8RF</h6>
                                   </div>
                                   <div className='flex items-center gap-2'>
                                        <img src="/images/mail-icon.svg" alt="" />
                                        <h6 className="text-sm font-normal leading-5 text-gray-2900">james.smith@capitalfinance.co.uk</h6>
                                   </div>
                                   <div className='flex items-center gap-2'>
                                        <img src="/images/calendar-icon3.svg" alt="" />
                                        <h6 className="text-sm font-normal leading-5 text-gray-2900">Partner since March 15, 2023</h6>
                                   </div>
                                   <div className='flex items-center gap-2'>
                                        <img src="/images/phone-icon3.svg" alt="" />
                                        <h6 className="text-sm font-normal leading-5 text-gray-2900">+44 20 7946 0958</h6>
                                   </div>
                              </div>
                              <h6 className="text-sm font-normal leading-5 mb-3 text-gray-2500">Agreement Summary</h6>
                              <div className="grid xl:grid-cols-2 xl:gap-5 gap-2 pb-4 mb-4 border-b border-gray-1000">
                                   <h6 className="text-sm font-normal leading-5 text-gray-2900">Agreement Type: <span className='text-gray-2500'>Preferred Partner</span></h6>
                                   <h6 className="text-sm font-normal leading-5 text-gray-2900">Commission: <span className='text-gray-2500'>2.5%</span></h6>
                              </div>
                              <h6 className="text-sm font-normal leading-5 mb-3 text-gray-2500">Processing Workflow</h6>
                              <ul className='space-y-2 pb-4 mb-4 border-b border-gray-1000'>
                                   <li className="flex items-center gap-3">
                                        <span className='text-xs font-normal text-white w-6 h-6 rounded-full flex items-center justify-center bg-blue-2000'>1</span>
                                        <h6 className="text-sm font-normal leading-5 text-gray-2500">Application received via API</h6>
                                   </li>
                                   <li className="flex items-center gap-3">
                                        <span className='text-xs font-normal text-white w-6 h-6 rounded-full flex items-center justify-center bg-blue-2000'>2</span>
                                        <h6 className="text-sm font-normal leading-5 text-gray-2500">Automated risk assessment</h6>
                                   </li>
                                   <li className="flex items-center gap-3">
                                        <span className='text-xs font-normal text-white w-6 h-6 rounded-full flex items-center justify-center bg-blue-2000'>3</span>
                                        <h6 className="text-sm font-normal leading-5 text-gray-2500">Manual review (if required)</h6>
                                   </li>
                                   <li className="flex items-center gap-3">
                                        <span className='text-xs font-normal text-white w-6 h-6 rounded-full flex items-center justify-center bg-blue-2000'>4</span>
                                        <h6 className="text-sm font-normal leading-5 text-gray-2500">Decision notification</h6>
                                   </li>
                                   <li className="flex items-center gap-3">
                                        <span className='text-xs font-normal text-white w-6 h-6 rounded-full flex items-center justify-center bg-blue-2000'>5</span>
                                        <h6 className="text-sm font-normal leading-5 text-gray-2500">Funding disbursement</h6>
                                   </li>
                              </ul>
                              <h6 className="text-sm font-normal leading-5 mb-3 text-gray-2500">API Integration</h6>
                              <div className='flex items-center justify-between mb-2'>
                                   <h6 className="text-sm font-normal leading-5 mb-3 text-gray-2600">Endpoint:</h6>
                                   <div className='text-xs font-normal leading-4 font-segoe text-gray-2500 py-1 px-2 bg-gray-1600 rounded-md'>https://api.capitalfinance.co.uk/v2/applications</div>
                              </div>
                              <div className='flex items-center justify-between'>
                                   <h6 className="text-sm font-normal leading-5 mb-3 text-gray-2600">Documentation:</h6>
                                   <Link href="/" className="text-xs font-normal leading-4 text-gray-2500 flex items-center gap-2 py-2.5 px-3"><img src="/images/export-icon2.svg" alt="" /> View API Docs</Link>
                              </div>
                         </div>
                    </div>
                    <div className="2xl:w-3/12 w-full">
                         <div className='border mb-4 border-gray-1000 bg-white rounded-lg shadow-4xl 4xl:p-6 p-3'>
                              <h4 className='text-lg font-bold leading-7 text-gray-2500 mb-6'>Performance Metrics</h4>
                              <div>
                                   <div className='flex items-center justify-between'></div>
                                   <ProgressBar value={70}></ProgressBar>
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
                                        iconSrc="/images/setting-icon2.svg"
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
