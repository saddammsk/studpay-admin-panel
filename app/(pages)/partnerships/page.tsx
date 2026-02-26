'use client'
import { useRef, useState } from "react";
import Image from "next/image";
import TopBar from "@/app/components/common/TopBar";
import CustomSelect from "@/app/components/CustomSelect";
import Link from "next/link";
import Button from "@/app/components/ui/Button";
import PartnershipTable from "@/app/components/PartnershipTable";
function page() {
     const [status, setStatus] = useState<string>("All Statuses");
     return (
          <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
               <TopBar></TopBar>
               <div className="grid bg-gray-1500 p-4 2xl:grid-cols-4 md:grid-cols-2 gap-4 border-b border-gray-3600">
                    <div className="bg-white border border-gray-3600 shadow-13xl rounded-lg 4xl:p-4 p-2 flex items-start justify-between">
                         <div>
                              <h6 className="text-xs font-medium leading-4 text-gray-1900">Total Partner Referrals</h6>
                              <span className="text-2xl font-bold my-1 leading-8 text-blue-1300 block">2,847 </span>
                              <h6 className="text-xs font-medium leading-4 text-gray-1900"><span className="text-green-1500">+12.3%</span> This month</h6>
                         </div>
                         <div className="bg-black-2500/10 rounded-lg w-9 h-9 flex items-center justify-center">
                              <img src="/images/user-black.svg" alt="" />
                         </div>
                    </div>
                    <div className="bg-white border border-gray-3600 shadow-13xl rounded-lg 4xl:p-4 p-2 flex items-start justify-between">
                         <div>
                              <h6 className="text-xs font-medium leading-4 text-gray-1900">Direct vs Partner Revenue</h6>
                              <span className="text-2xl font-bold my-1 leading-8 text-blue-1300 block">34% / 66% </span>
                              <h6 className="text-xs font-medium leading-4 text-gray-1900"><span className="text-green-1500">+8.2%</span> Partner-led growth</h6>
                         </div>
                         <div className="bg-black-2500/10 rounded-lg w-9 h-9 flex items-center justify-center">
                              <img src="/images/trend-up5.svg" alt="" />
                         </div>
                    </div>
                    <div className="bg-white border border-gray-3600 shadow-13xl rounded-lg 4xl:p-4 p-2 flex items-start justify-between">
                         <div>
                              <h6 className="text-xs font-medium leading-4 text-gray-1900">Top Performing University</h6>
                              <span className="text-2xl font-bold my-1 leading-8 text-blue-1300 block">TU Berlin </span>
                              <h6 className="text-xs font-medium leading-4 text-gray-1900"><span className="text-green-1500">847 leads</span> This quarter</h6>
                         </div>
                         <div className="bg-black-2500/10 rounded-lg w-9 h-9 flex items-center justify-center">
                              <img src="/images/building-icon2.svg" alt="" />
                         </div>
                    </div>
                    <div className="bg-white border border-gray-3600 shadow-13xl rounded-lg 4xl:p-4 p-2 flex items-start justify-between">
                         <div>
                              <h6 className="text-xs font-medium leading-4 text-gray-1900">Pending Onboarding</h6>
                              <span className="text-2xl font-bold my-1 leading-8 text-blue-1300 block">12 </span>
                              <h6 className="text-xs font-medium leading-4 text-gray-1900"><span className="font-medium">3 urgent</span> Awaiting verification</h6>
                         </div>
                         <div className="bg-black-2500/10 rounded-lg w-9 h-9 flex items-center justify-center">
                              <img src="/images/timer-icon4.svg" alt="" />
                         </div>
                    </div>
               </div>
               <div className="xl:flex">
                    <div className="xl:w-[calc(100%_-_304px)]">
                         <div className="p-4 bg-gray-1500 flex items-center justify-between gap-4 4xl:flex-nowrap flex-wrap">
                              <div className="flex flex-wrap items-center gap-3 4xl:flex-1">
                                   <div className="relative max-w-[384px] w-full">
                                        <input type="text" className='text-sm font-normal text-gray-1900 placeholder:text-gray-1900 px-4 pl-10 h-10 bg-gray1700/50 border border-gray-3600 rounded-md w-full outline-0' placeholder='Search partners...' />
                                        <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                                             <Image
                                                  src="../images/search-icon.svg"
                                                  width='16'
                                                  height='16'
                                                  alt=""
                                             />
                                        </div>
                                   </div>
                                   <div className="relative w-[140px]">
                                        <CustomSelect className="w-full pl-12! bg-gray1700/50 border border-gray-3600"
                                             value={status}
                                             options={[
                                                  { label: "All ", value: "All" },
                                                  { label: "Types1", value: "Types1" },
                                                  { label: "Types2", value: "Types2" },
                                             ]}
                                        />
                                        <div className="absolute top-1/2 -translate-y-1/2 left-3">
                                             <img src="/images/filter.svg" alt="" />
                                        </div>
                                   </div>
                                   <div className="relative w-[140px]">
                                        <CustomSelect className="w-full bg-gray1700/50 border border-gray-3600"
                                             value={status}
                                             options={[
                                                  { label: "All Status ", value: "All Status" },
                                                  { label: "Types1", value: "Types1" },
                                                  { label: "Types2", value: "Types2" },
                                             ]}
                                        />
                                   </div>
                              </div>
                              <div className="flex flex-wrap items-center gap-2">
                                   <Link href="/" className="text-blue-1300 text-sm font-medium leading-5 flex items-center gap-2 px-3 py-1.5 bg-gray-1500 border border-gray-3600 rounded-md"><img src="/images/setting-icon.svg" alt="" /> Manage Commissions</Link>
                                   <Button
                                        label=" Onboard New Partner"
                                        className="text-white bg-black-2500 justify-center h-9 px-3 rounded-md! hover:bg-blue-1000/90 font-neulis-sans"
                                        iconSrc="/images/plus-icon.svg"
                                   />
                              </div>
                         </div>
                         <PartnershipTable></PartnershipTable>
                         <div className="flex items-center px-4 py-3 justify-between">
                              <h6 className="text-sm font-normal leading-5 text-gray-1900">Showing 10 of 10 partners</h6>
                              <div className="flex items-center gap-4">
                                   <h6 className="text-sm font-normal leading-5 text-gray-1900">Total Active Students: <span className="font-bold text-blue-1300">4,249</span></h6>
                                   <h6 className="text-sm font-normal leading-5 text-gray-1900">Avg Conversion:  <span className="font-bold text-green-1500">57.9%</span></h6>
                              </div>
                         </div>
                    </div>
                    <div className="xl:max-w-[304px] max-w-full xl:px-0 px-4 w-full ">
                         <div className="border-l border-b border-gray-3600 bg-gray-1500 p-4">
                              <div className="flex items-start justify-between border-b border-gray-3600 pb-4 mb-4">
                                   <div>
                                        <h6 className="text-lg font-bold leading-7 text-blue-1300">TU Berlin</h6>
                                        <span className="text-sm font-normal leading-5 text-gray-1900 block">P-001</span>
                                        <div className="flex items-start gap-3 mt-3">
                                             <div className="flex items-center gap-2 flex-1">
                                                  <img src="/images/location-gray.svg" alt="" />
                                                  <p className="text-sm font-normal leading-5 text-gray-1900">Germany •</p>
                                                  <div className="py-0.5 px-2.5 border border-gray-3600 rounded-full inline-block text-xs font-normal text-blue-1300">Education</div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="px-3 h-5.5 rounded-full text-xs border inline-flex items-center justify-center bg-green-1500/10 border-green-1500/20 text-green-1500">
                                        Verified
                                   </div>
                              </div>
                              <div className="bg-black-2500/5 mb-4 border border-black-2500/20 py-3 px-2 rounded-lg">
                                   <div className="flex items-center gap-2 mb-2">
                                        <img src="/images/gift-icon2.svg" alt="" />
                                        <h6 className="text-sm font-medium leading-5 text-blue-1300">Referral Code</h6>
                                   </div>
                                   <div className="my-2 bg-gray-1500 border border-gray-3600 rounded-md flex items-center justify-between py-2 px-4">
                                        <h6 className="text-sm font-bold leading-5 text-black-2500">TUBERLIN2024</h6>
                                        <Link href="/"><img src="/images/copy-icon.svg" alt="" /></Link>
                                   </div>
                                   <div className="flex items-center justify-between gap-2">
                                        <h6 className="text-sm font-normal leading-5 text-gray-1900">Total Usage</h6>
                                        <h6 className="text-sm font-bold leading-5 text-blue-1300">Referral Code</h6>
                                   </div>
                              </div>
                              <div className="bg-white border mb-4 border-gray-3600 py-3 px-2 rounded-lg">
                                   <div className="flex items-center gap-2 mb-2">
                                        <img src="/images/grapgh-icon2.svg" alt="" />
                                        <h6 className="text-sm font-medium leading-5 text-blue-1300">Performance Stats</h6>
                                   </div>
                                   <div className="grid grid-cols-2 mt-2 gap-4 p-2">
                                        <div>
                                             <h6 className="text-xs font-normal leading-4 text-gray-1900">Active Students</h6>
                                             <span className="text-lg font-bold leading-7 text-blue-1300 block">847</span>
                                        </div>
                                        <div>
                                             <h6 className="text-xs font-normal leading-4 text-gray-1900">Conversion Rate</h6>
                                             <span className="text-lg font-bold leading-7 text-green-1500 block">68.5%</span>
                                        </div>
                                   </div>
                                   <div className="flex items-center justify-between">
                                        <h6 className="text-xs font-normal leading-4 text-gray-1900">Commission Rate</h6>
                                        <span className="text-base font-bold leading-7 text-blue-1300 block">15%</span>
                                   </div>
                                   <div className="flex items-center justify-between">
                                        <h6 className="text-xs font-normal leading-4 text-gray-1900">Est. Monthly Payout</h6>
                                        <span className="text-base font-bold leading-7 text-green-1500 block">€1,524.6</span>
                                   </div>
                              </div>
                              <div className="bg-white border mb-4 border-gray-3600 py-3 px-2 rounded-lg">
                                   <div className="flex items-center gap-2 mb-2">
                                        <img src="/images/trend-up4.svg" className="w-4 h-4" alt="" />
                                        <h6 className="text-sm font-medium leading-5 text-blue-1300">Active Campaigns</h6>
                                   </div>
                                   <div className="flex items-center justify-between p-2 border-b border-gray1700/30">
                                        <div>
                                             <h6 className="text-sm font-medium leading-5 text-blue-1300">Welcome Offer 2024</h6>
                                             <p className="text-xs font-normal leading-4 text-gray-1900">234 leads • 72% conv.</p>
                                        </div>
                                        <div className="text-xs font-bold leading-4 text-green-1500 py-0.5 px-2.5 rounded-full border border-green-1500/30">Active</div>
                                   </div>
                                   <div className="flex items-center justify-between p-2 border-b border-gray1700/30">
                                        <div>
                                             <h6 className="text-sm font-medium leading-5 text-blue-1300">Summer Housing Deal</h6>
                                             <p className="text-xs font-normal leading-4 text-gray-1900">156 leads • 58% conv.</p>
                                        </div>
                                        <div className="text-xs font-bold leading-4 text-green-1500 py-0.5 px-2.5 rounded-full border border-green-1500/30">Active</div>
                                   </div>
                                   <div className="flex items-center justify-between p-2 border-b border-gray1700/30">
                                        <div>
                                             <h6 className="text-sm font-medium leading-5 text-blue-1300">Insurance Bundle</h6>
                                             <p className="text-xs font-normal leading-4 text-gray-1900">89 leads • 45% conv.</p>
                                        </div>
                                        <div className="text-xs font-bold leading-4 text-gray-1900 py-0.5 px-2.5 rounded-full border border-gray-3600">Ended</div>
                                   </div>
                              </div>
                              <div className="bg-white border mb-4 border-gray-3600 py-3 px-2 rounded-lg">
                                   <div className="flex items-center gap-2 mb-2">
                                        <img src="/images/calendar.svg" className="w-4 h-4" alt="" />
                                        <h6 className="text-sm font-medium leading-5 text-blue-1300">Recent Activity</h6>
                                   </div>
                                   <div className="space-y-3">
                                        <div className="flex items-start gap-2">
                                             <div className="bg-black-2500 mt-1.5 w-1.5 h-1.5 rounded-full block"></div>
                                             <div>
                                                  <h6 className="text-sm font-medium leading-5 text-blue-1300">Welcome Offer 2024</h6>
                                                  <p className="text-xs font-normal leading-4 text-gray-1900">234 leads • 72% conv.</p>
                                             </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                             <div className="bg-black-2500 mt-1.5 w-1.5 h-1.5 rounded-full block"></div>
                                             <div>
                                                  <h6 className="text-sm font-medium leading-5 text-blue-1300">Welcome Offer 2024</h6>
                                                  <p className="text-xs font-normal leading-4 text-gray-1900">234 leads • 72% conv.</p>
                                             </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                             <div className="bg-black-2500 mt-1.5 w-1.5 h-1.5 rounded-full block"></div>
                                             <div>
                                                  <h6 className="text-sm font-medium leading-5 text-blue-1300">Welcome Offer 2024</h6>
                                                  <p className="text-xs font-normal leading-4 text-gray-1900">234 leads • 72% conv.</p>
                                             </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                             <div className="bg-black-2500 mt-1.5 w-1.5 h-1.5 rounded-full block"></div>
                                             <div>
                                                  <h6 className="text-sm font-medium leading-5 text-blue-1300">Welcome Offer 2024</h6>
                                                  <p className="text-xs font-normal leading-4 text-gray-1900">234 leads • 72% conv.</p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="bg-white border mb-4 border-gray-3600 py-3 px-2 rounded-lg">
                                   <div className="flex items-center gap-2 mb-2">
                                        <h6 className="text-sm font-medium leading-5 text-blue-1300">Contact Information</h6>
                                   </div>
                                   <div className="space-y-2">
                                        <Link href="" className="flex items-center gap-2 text-sm font-normal leading-5 text-gray-1900"><img src="/images/mail-icon.svg" alt="" /> partnerships@tuberlin.com</Link>
                                        <Link href="" className="flex items-center gap-2 text-sm font-normal leading-5 text-gray-1900"><img src="/images/phone-gray.svg" alt="" /> +49 30 1234 5678</Link>
                                   </div>
                              </div>
                         </div>
                         <ul className="flex items-center py-3 gap-2">
                              <li>
                                   <Link href="/" className="text-blue-1300 text-sm font-medium leading-5 flex items-center gap-2 px-2.5 py-1.5 bg-gray-1500 border border-gray-3600 rounded-md"><img src="/images/file-icon3.svg" alt="" />View Contract</Link>
                              </li>
                              <li>
                                   <Button
                                        label=" Partner Portal"
                                        className="text-white text-sm! bg-black-2500 justify-center h-9 px-3 rounded-md! hover:bg-blue-1000/90 font-neulis-sans"
                                        iconSrc="/images/export-icon3.svg"
                                   />
                              </li>
                         </ul>
                    </div>
               </div>
          </div>
     )
}

export default page
