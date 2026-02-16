'use client'
import ProgressBar from '@/app/components/ProgressBar';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
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
                         <p className="text-sm font-medium block leading-5 text-black-1500">ID Details</p>
                    </li>
               </ul>
               <div className="bg-white border-b 2xl:flex-nowrap flex-wrap gap-5 border-gray-2800 4xl:p-6 p-4 flex items-center justify-between">
                    <div className="flex items-center  md:flex-nowrap flex-wrap 4xl:gap-4 gap-0 2xl:flex-1">
                         <Link href="" className="py-[9px] px-3 flex items-center gap-2 text-sm font-medium leading-5 text-gray-2500">
                              <img src="/images/left-arrow3.svg" alt="" />Back to Requests
                         </Link>
                         <div>
                              <h6 className="text-sm font-normal leading-5 text-gray-2900">AVI Financing → Requests → 4571</h6>
                              <h2 className="text-2xl font-bold mt-1 leading-8 text-gray-2500">AVI Request #4571</h2>
                              <h6 className="text-sm font-normal leading-5 text-gray-2900">Sarah Johnson • Apartment • $150,000</h6>
                         </div>
                    </div>
                    <ul className="flex items-center md:flex-nowrap flex-wrap gap-3">
                         <li>
                              <Link href="/" className="flex items-center gap-[18px] text-sm font-medium leading-5 text-gray-2500 py-1.5 px-3 border border-gray-3000 rounded-[10px]"><img className="w-4 h-4" src="/images/message-icon.svg" alt="" /> Request Info</Link>
                         </li>
                         <li>
                              <Link href="/" className="flex items-center gap-[18px] text-sm font-medium leading-5 text-white py-1.5 px-3 bg-red-1300 rounded-[10px]"><img className="w-4 h-4" src="/images/cross-circle-white.svg" alt="" /> Reject</Link>
                         </li>
                         <li>
                              <Link href="/" className="flex items-center gap-[18px] text-sm font-medium leading-5 text-gray-2500 py-1.5 px-3 border border-gray-3000 rounded-[10px]"><img className="w-4 h-4" src="/images/tick-circle4.svg" alt="" /> Approve</Link>
                         </li>
                         <li>
                              <Link href="/" className="flex items-center gap-[18px] text-sm font-medium leading-5 text-white bg-blue-1900 py-1.5 px-3  rounded-[10px]"><img className="w-4 h-4" src="/images/file-icon-white.svg" alt="" /> Generate Summary Sheet</Link>
                         </li>
                    </ul>
               </div>
               <TabGroup>
                    <TabList className="bg-gray-3000 my-6 rounded-[10px] p-1 w-full flex items-center justify-center">
                         <Tab className="w-full cursor-pointer md:text-sm text-xs font-medium leading-5 text-gray-2900 block text-center py-1.5 data-selected:bg-white rounded-lg data-selected:shadow-4xl">Overview</Tab>
                         <Tab className="w-full cursor-pointer md:text-sm text-xs font-medium leading-5 text-gray-2900 block text-center py-1.5 data-selected:bg-white rounded-lg data-selected:shadow-4xl">Documents</Tab>
                         <Tab className="w-full cursor-pointer md:text-sm text-xs font-medium leading-5 text-gray-2900 block text-center py-1.5 data-selected:bg-white rounded-lg data-selected:shadow-4xl">Risk Analysis</Tab>
                         <Tab className="w-full cursor-pointer md:text-sm text-xs font-medium leading-5 text-gray-2900 block text-center py-1.5 data-selected:bg-white rounded-lg data-selected:shadow-4xl">History</Tab>
                    </TabList>
                    <TabPanels>
                         <TabPanel>
                              <div className='grid md:grid-cols-2 xl:gap-[68px] gap-5 mb-6'>
                                   <div className='shadow-4xl bg-white border border-gray-2800 rounded-lg py-[26px] xl:px-6 px-3'>
                                        <div className="flex items-center gap-2 mb-6">
                                             <img src="/images/user-icon4.svg" alt="" />
                                             <h6 className='text-2xl font-semibold leading-6 text-gray-2500'>Student Profile</h6>
                                        </div>
                                        <div className="flex items-center sm:gap-4 gap-2.5 border-b border-gray-2800 pb-4 mb-4">
                                             <img src="/images/profile-img.png" alt="" />
                                             <div>
                                                  <h6 className="text-base font-semibold leading-6 text-gray-2500">Sarah Johnson</h6>
                                                  <span className="block font-normal mb-1 leading-5  text-sm text-gray-2900">STU2024001</span>
                                                  <div className="font-normal leading-5  text-xs text-white w-fit py-1 px-3 bg-green-1600 rounded-full">verified</div>
                                             </div>
                                        </div>
                                        <div className="grid xl:grid-cols-2 xl:gap-5 gap-2">
                                             <div className='space-y-4'>
                                                  <div>
                                                       <h6 className="text-sm font-normal leading-5 text-gray-2900">Email</h6>
                                                       <span className="text-sm font-medium leading-5 text-gray-2500">sarah.johnson@university.edu</span>
                                                  </div>
                                                  <div>
                                                       <h6 className="text-sm font-normal leading-5 text-gray-2900">University</h6>
                                                       <span className="text-sm font-medium leading-5 text-gray-2500">Stanford University</span>
                                                  </div>
                                             </div>
                                             <div className='space-y-4'>
                                                  <div>
                                                       <h6 className="text-sm font-normal leading-5 text-gray-2900">Phone</h6>
                                                       <span className="text-sm font-medium leading-5 text-gray-2500">+1 (555) 123-4567</span>
                                                  </div>
                                                  <div>
                                                       <h6 className="text-sm font-normal leading-5 text-gray-2900">Program</h6>
                                                       <span className="text-sm font-medium leading-5 text-gray-2500">MBA Program</span>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className='shadow-4xl bg-white border border-gray-2800 rounded-lg py-[26px] xl:px-6 px-3'>
                                        <div className="flex items-center gap-2 mb-6">
                                             <img src="/images/shield-blue.svg" alt="" />
                                             <h6 className='text-2xl font-semibold leading-6 text-gray-2500'>Guarantor Profile</h6>
                                        </div>
                                        <div className="flex items-center sm:gap-4 gap-2.5 border-b border-gray-2800 pb-4 mb-4">
                                             <img src="/images/profile-img.png" alt="" />
                                             <div>
                                                  <h6 className="text-base font-semibold leading-6 text-gray-2500">Sarah Johnson</h6>
                                                  <span className="block font-normal mb-1 leading-5  text-sm text-gray-2900">STU2024001</span>
                                                  <div className="font-normal leading-5  text-xs text-white w-fit py-1 px-3 bg-green-1600 rounded-full">verified</div>
                                             </div>
                                        </div>
                                        <div className="grid xl:grid-cols-2 xl:gap-5 gap-2">
                                             <div className='space-y-4'>
                                                  <div>
                                                       <h6 className="text-sm font-normal leading-5 text-gray-2900">Email</h6>
                                                       <span className="text-sm font-medium leading-5 text-gray-2500">sarah.johnson@university.edu</span>
                                                  </div>
                                                  <div>
                                                       <h6 className="text-sm font-normal leading-5 text-gray-2900">University</h6>
                                                       <span className="text-sm font-medium leading-5 text-gray-2500">Stanford University</span>
                                                  </div>
                                             </div>
                                             <div className='space-y-4'>
                                                  <div>
                                                       <h6 className="text-sm font-normal leading-5 text-gray-2900">Phone</h6>
                                                       <span className="text-sm font-medium leading-5 text-gray-2500">+1 (555) 123-4567</span>
                                                  </div>
                                                  <div>
                                                       <h6 className="text-sm font-normal leading-5 text-gray-2900">Program</h6>
                                                       <span className="text-sm font-medium leading-5 text-gray-2500">MBA Program</span>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className='shadow-4xl bg-white border border-gray-2800 rounded-lg py-[26px] px-6'>
                                   <div className="flex items-center gap-2 mb-6">
                                        <img src="/images/home-icon2.svg" alt="" />
                                        <h6 className='text-2xl font-semibold leading-6 text-gray-2500'>Request Details</h6>
                                   </div>
                                   <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-4 border-b border-gray-2800 pb-4 mb-4'>
                                        <div className='text-center'>
                                             <img src="/images/doller-icon.svg" className='inline-block w-8' alt="" />
                                             <h4 className='2xl:text-2xl text-xl mt-2 font-bold leading-8 text-gray-2500'>$150,000</h4>
                                             <p className="text-sm font-normal leading-5 text-gray-2900">Requested Amount</p>
                                        </div>
                                        <div className='text-center'>
                                             <img src="/images/calculator.svg" className='inline-block' alt="" />
                                             <h4 className='2xl:text-2xl text-xl mt-2 font-bold leading-8 text-gray-2500'>Apartment</h4>
                                             <p className="text-sm font-normal leading-5 text-gray-2900">Property Type</p>
                                        </div>
                                        <div className='text-center'>
                                             <img src="/images/wallet-icon4.svg" className='inline-block' alt="" />
                                             <h4 className='2xl:text-2xl text-xl mt-2 font-bold leading-8 text-gray-2500'>$180,000</h4>
                                             <p className="text-sm font-normal leading-5 text-gray-2900">Property Value</p>
                                        </div>
                                        <div className='text-center'>
                                             <img src="/images/location-icon2.svg" className='inline-block' alt="" />
                                             <h4 className='2xl:text-2xl text-xl mt-2 font-bold leading-8 text-gray-2500'>San Francisco, CA</h4>
                                             <p className="text-sm font-normal leading-5 text-gray-2900">Location</p>
                                        </div>
                                   </div>
                                   <div className='flex flex-wrap gap-4 items-center justify-between'>
                                        <div>
                                             <h6 className="text-sm font-normal leading-5 text-gray-2900">Request Date</h6>
                                             <span className='text-base font-medium leading-6 text-gray-2500 block'>3/1/2024</span>
                                        </div>
                                        <div>
                                             <h6 className="text-sm font-normal leading-5 text-gray-2900">Status</h6>
                                             <div className="font-normal leading-5  text-xs text-yellow-1100 w-fit py-1 px-3 bg-yellow1500 rounded-full">PENDING REVIEW</div>
                                        </div>
                                        <div>
                                             <h6 className="text-sm font-normal leading-5 text-gray-2900">Urgency</h6>
                                             <div className="font-normal leading-5  text-xs text-white w-fit py-1 px-3 bg-red-1300 rounded-full">HIGH</div>
                                        </div>
                                   </div>
                              </div>
                         </TabPanel>
                         <TabPanel>
                              <div className='bg-white shadow-4xl border border-gray-3100 rounded-lg md:p-6 p-3'>
                                   <h4 className="text-2xl font-medium leading-6 text-gray-3200 mb-6">Uploaded Documents</h4>
                                   <div className='space-y-4'>
                                        <div className="md:p-4 p-2 xl:flex-nowrap flex-wrap gap-4 flex items-center justify-between border border border-gray-3100 rounded-lg">
                                             <div className='flex items-center gap-4'>
                                                  <img src="/images/file-icon2.svg" alt="" />
                                                  <div>
                                                       <h6 className="text-gray-3200 text-base font-normal leading-6">Passport_Emma_Rodriguez.pdf</h6>
                                                       <span className='text-sm font-normal block leading-5 text-gray-3300'>ID Document</span>
                                                  </div>
                                             </div>
                                             <ul className='flex items-center gap-2'>
                                                  <li>
                                                       <Link href="/" className='bg-gray-1500 text-xs font-medium leading-4 text-green-1600 flex items-center gap-1 py-1 px-2.5'><img src="/images/tick-circle5.svg" alt="" /> AI Verified</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/" className='bg-gray-1500 text-sm bg-gray-3400 rounded-[10px] border border-gray-3100 font-medium leading-4 text-gray-3200 py-2 px-3'> Annotate</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/" className='bg-gray-1500 text-sm bg-gray-3400 rounded-[10px] border border-gray-3100 font-medium leading-4 text-gray-3200 py-2 px-3'> Validate</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/" className='bg-gray-1500 text-sm bg-gray-3400 rounded-[10px] border border-gray-3100 font-medium leading-4 text-red-1300 py-2 px-3'> Reject</Link>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div className="md:p-4 p-2 xl:flex-nowrap flex-wrap gap-4 flex items-center justify-between border border border-gray-3100 rounded-lg">
                                             <div className='flex items-center gap-4'>
                                                  <img src="/images/file-icon2.svg" alt="" />
                                                  <div>
                                                       <h6 className="text-gray-3200 text-base font-normal leading-6">Passport_Emma_Rodriguez.pdf</h6>
                                                       <span className='text-sm font-normal block leading-5 text-gray-3300'>ID Document</span>
                                                  </div>
                                             </div>
                                             <ul className='flex items-center gap-2'>
                                                  <li>
                                                       <Link href="/" className='bg-gray-1500 text-xs font-medium leading-4 text-green-1600 flex items-center gap-1 py-1 px-2.5'><img src="/images/tick-circle5.svg" alt="" /> AI Verified</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/" className='bg-gray-1500 text-sm bg-gray-3400 rounded-[10px] border border-gray-3100 font-medium leading-4 text-gray-3200 py-2 px-3'> Annotate</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/" className='bg-gray-1500 text-sm bg-gray-3400 rounded-[10px] border border-gray-3100 font-medium leading-4 text-gray-3200 py-2 px-3'> Validate</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/" className='bg-gray-1500 text-sm bg-gray-3400 rounded-[10px] border border-gray-3100 font-medium leading-4 text-red-1300 py-2 px-3'> Reject</Link>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div className="md:p-4 p-2 xl:flex-nowrap flex-wrap gap-4 flex items-center justify-between border border border-gray-3100 rounded-lg">
                                             <div className='flex items-center gap-4'>
                                                  <img src="/images/file-icon2.svg" alt="" />
                                                  <div>
                                                       <h6 className="text-gray-3200 text-base font-normal leading-6">Passport_Emma_Rodriguez.pdf</h6>
                                                       <span className='text-sm font-normal block leading-5 text-gray-3300'>ID Document</span>
                                                  </div>
                                             </div>
                                             <ul className='flex items-center gap-2'>
                                                  <li>
                                                       <Link href="/" className='bg-gray-1500 text-xs font-medium leading-4 text-yellow-1100 flex items-center gap-1 py-1 px-2.5'><img src="/images/caution-icon.svg" alt="" /> Pending Review</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/" className='bg-gray-1500 text-sm bg-gray-3400 rounded-[10px] border border-gray-3100 font-medium leading-4 text-gray-3200 py-2 px-3'> Annotate</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/" className='bg-gray-1500 text-sm bg-gray-3400 rounded-[10px] border border-gray-3100 font-medium leading-4 text-gray-3200 py-2 px-3'> Validate</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/" className='bg-gray-1500 text-sm bg-gray-3400 rounded-[10px] border border-gray-3100 font-medium leading-4 text-red-1300 py-2 px-3'> Reject</Link>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div className="md:p-4 p-2 xl:flex-nowrap flex-wrap gap-4 flex items-center justify-between border border border-gray-3100 rounded-lg">
                                             <div className='flex items-center gap-4'>
                                                  <img src="/images/file-icon2.svg" alt="" />
                                                  <div>
                                                       <h6 className="text-gray-3200 text-base font-normal leading-6">Passport_Emma_Rodriguez.pdf</h6>
                                                       <span className='text-sm font-normal block leading-5 text-gray-3300'>ID Document</span>
                                                  </div>
                                             </div>
                                             <ul className='flex items-center gap-2'>
                                                  <li>
                                                       <Link href="/" className='bg-gray-1500 text-xs font-medium leading-4 text-green-1600 flex items-center gap-1 py-1 px-2.5'><img src="/images/tick-circle5.svg" alt="" /> AI Verified</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/" className='bg-gray-1500 text-sm bg-gray-3400 rounded-[10px] border border-gray-3100 font-medium leading-4 text-gray-3200 py-2 px-3'> Annotate</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/" className='bg-gray-1500 text-sm bg-gray-3400 rounded-[10px] border border-gray-3100 font-medium leading-4 text-gray-3200 py-2 px-3'> Validate</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/" className='bg-gray-1500 text-sm bg-gray-3400 rounded-[10px] border border-gray-3100 font-medium leading-4 text-red-1300 py-2 px-3'> Reject</Link>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </TabPanel>
                         <TabPanel>
                              <div className='grid xl:grid-cols-2 gap-6'>
                                   <div className='bg-white shadow-4xl border border-gray-3100 rounded-lg md:p-6 p-3'>
                                        <h4 className='text-2xl font-medium leading-6 text-gray-3200 mb-6'>Risk Assessment</h4>
                                        <div className='mb-6'>
                                             <div className='flex items-center justify-between mb-2'>
                                                  <h6 className='text-sm font-normal leading-5 text-gray-3300'>AI Risk Score</h6>
                                                  <h6 className='text-sm font-medium leading-5 text-gray-3200'>75/100</h6>
                                             </div>
                                             <ProgressBar value={70} />
                                        </div>
                                        <div className='mb-6'>
                                             <div className='flex items-center justify-between mb-2'>
                                                  <h6 className='text-sm font-normal leading-5 text-gray-3300'>Manual Score</h6>
                                                  <h6 className='text-sm font-medium leading-5 text-gray-3200'>75/100</h6>
                                             </div>
                                             <ProgressBar value={70} barColor="bg-yellow-1100" />
                                        </div>
                                   </div>
                                   <div className='bg-white shadow-4xl border border-gray-3100 rounded-lg md:p-6 p-3'>
                                        <div className='flex items-center gap-2 mb-6'>
                                             <img src="/images/message-icon.svg" alt="" />
                                             <h4 className='text-2xl font-medium leading-6 text-gray-3200 mb-6'>Agent Comments</h4>
                                        </div>
                                        <div className='bg-gray-2000 mb-4 rounded-xl p-4'>
                                             <h4 className="text-sm font-normal leading-5 text-gray-3300 mb-2">Sarah Johnson - 2 hours ago</h4>
                                             <p className="text-sm font-normal leading-5 text-gray-3200">Property valuation report needs verification. Requesting additional documentation from local assessor.</p>
                                        </div>
                                        <div className='bg-gray-2000  rounded-xl p-4'>
                                             <h4 className="text-sm font-normal leading-5 text-gray-3300 mb-2">Mike Chen - 1 day ago</h4>
                                             <p className="text-sm font-normal leading-5 text-gray-3200">Income documentation looks solid. Employment contract verified with HR department.</p>
                                        </div>
                                   </div>
                              </div>
                         </TabPanel>
                         <TabPanel>
                              <div className='bg-white shadow-4xl border border-gray-3100 rounded-lg md:p-6 p-3'>
                                   <h4 className="text-2xl font-medium leading-6 text-gray-3200 mb-6">Request Summary</h4>
                                   <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6 mb-6">
                                        <div className="bg-green-1600/5 border border-gray-3100 rounded-xl p-6 text-center">
                                             <h6 className='text-2xl font-medium leading-9 text-green-1600 mb-1'>4/5</h6>
                                             <p className="text-sm font-normal leading-5 text-gray-3300">Documents Verified</p>
                                        </div>
                                        <div className="bg-blue-2000/5 border border-gray-3100 rounded-xl p-6 text-center">
                                             <h6 className='text-2xl font-medium leading-9 text-blue-2000 mb-1'>75%</h6>
                                             <p className="text-sm font-normal leading-5 text-gray-3300">Risk Score</p>
                                        </div>
                                        <div className="bg-yellow-1100/5 border border-gray-3100 rounded-xl p-6 text-center">
                                             <h6 className='text-2xl font-medium leading-9 text-yellow-1100 mb-1'>3 days</h6>
                                             <p className="text-sm font-normal leading-5 text-gray-3300">Processing Time</p>
                                        </div>
                                   </div>
                                   <h6 className='text-sm font-normal leading-6 text-gray-3200'>Recommendation <br />
                                        <span className="text-gray-3300">Based on the current assessment, this request shows moderate risk with strong income verification and employment stability. The property valuation requires final verification before approval can be processed.</span>
                                   </h6>
                              </div>
                         </TabPanel>
                    </TabPanels>
               </TabGroup>
               <div className="bg-white mt-10 p-6 border-t border-gray-2800">
                    <ul className="flex items-center flex-wrap gap-4 justify-end gap-3">
                         <li>
                              <Link href="/" className="flex items-center gap-[18px] text-sm font-medium leading-5 text-gray-2500 py-1.5 px-3 border border-gray-3000 rounded-[10px]"><img className="w-4 h-4" src="/images/message-icon.svg" alt="" /> Request Info</Link>
                         </li>
                         <li>
                              <Link href="/" className="flex items-center gap-[18px] text-sm font-medium leading-5 text-white py-1.5 px-3 bg-red-1300 rounded-[10px]"><img className="w-4 h-4" src="/images/cross-circle-white.svg" alt="" /> Reject</Link>
                         </li>
                         <li>
                              <Link href="/" className="flex items-center gap-[18px] text-sm font-medium leading-5 text-gray-2500 py-1.5 px-3 border border-gray-3000 rounded-[10px]"><img className="w-4 h-4" src="/images/tick-circle4.svg" alt="" /> Approve</Link>
                         </li>
                         <li>
                              <Link href="/" className="flex items-center gap-[18px] text-sm font-medium leading-5 text-white bg-blue-1900 py-1.5 px-3  rounded-[10px]"><img className="w-4 h-4" src="/images/file-icon-white.svg" alt="" /> Generate Summary Sheet</Link>
                         </li>
                    </ul>
               </div>
          </div>
     );
}
