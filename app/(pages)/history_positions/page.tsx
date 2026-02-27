"use client";
import { useState } from "react";
import Image from "next/image";
import TopBar from "@/app/components/common/TopBar";
import CustomSelect from "@/app/components/CustomSelect";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import TrackingMap from "@/app/components/TrackingMap";
import TimeRangeSlider from "@/app/components/TimeRangeSlider";
import Link from "next/link";

function page() {
     const [status, setStatus] = useState<string>("Select Status");
     const [status2, setStatus2] = useState<string>("Select Status");
     return (
          <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
               <TopBar></TopBar>
               <div className="md:p-6 p-4">
                    <div className="flex items-center gap-4 mb-8">
                         <div className="bg-blue-2500 rounded-xl  w-10  h-10 flex items-center justify-center">
                              <img src="/images/location-blue.svg" className="w-5 h-5" alt="" />
                         </div>
                         <div className="flex-1">
                              <h6 className="text-xl font-bold leading-8 text-black-1600">History & Positions</h6>
                              <p className="text-sm font-normal leading-5 text-gray-1200">Audit trail · Last known positions · Movement playback</p>
                         </div>
                    </div>
                    <form action="" className="mt-2 mb-7">
                         <div className="relative">
                              <input type="text" className='text-sm font-normal font-neulis-sans text-gray-2300 placeholder:text-gray-2300 px-4 pl-10 h-10 bg-gray-1800 border border-gray-5600 rounded-[10px] w-full outline-0' placeholder='Search user by name or ID...' />
                              <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                                   <Image
                                        src="/images/search-icon.svg"
                                        width='16'
                                        height='16'
                                        alt=""
                                   />
                              </div>
                         </div>
                    </form>
                    <div className="bg-white rounded-xl border-l-2 border-blue1400 p-5">
                         <div className="max-w-[1060px]">
                              <div className="flex mb-4 items-start justify-between">
                                   <div>
                                        <h6 className="text-xs font-bold text-gray-1200 uppercase mb-1">Last Known Position</h6>
                                        <h4 className="text-lg font-bold leading-7 text-black-1600">Marie Dupont</h4>
                                        <span className="text-xs font-normal text-gray-1200 block">USR-1042</span>
                                   </div>
                                   <div className="text-xs font-bold text-blue1400 py-0.5 px-2.5 border border-blue1400 rounded-full">LKP</div>
                              </div>
                              <div className="grid md:grid-cols-4 gap-4">
                                   <div>
                                        <div className="flex items-center mb-1 gap-1.5">
                                             <img src="/images/location-gray.svg" alt="" />
                                             <h6 className="text-xs font-normal leading-4 text-gray-1200">Timestamp</h6>
                                        </div>
                                        <h6 className="text-sm font-bold leading-5 text-black-1600">2026-02-12 14:32:07</h6>
                                   </div>
                                   <div>
                                        <div className="flex items-center mb-1 gap-1.5">
                                             <img src="/images/battery-icon.svg" alt="" />
                                             <h6 className="text-xs font-normal leading-4 text-gray-1200">Battery</h6>
                                        </div>
                                        <h6 className="text-sm font-bold leading-5 text-green-1500">72%</h6>
                                   </div>
                                   <div>
                                        <div className="flex items-center mb-1 gap-1.5">
                                             <img src="/images/signal-icon2.svg" alt="" />
                                             <h6 className="text-xs font-normal leading-4 text-gray-1200">Signal</h6>
                                        </div>
                                        <h6 className="text-sm font-bold leading-5 text-green-1500">Strong</h6>
                                   </div>
                                   <div>
                                        <div className="flex items-center mb-1 gap-1.5">
                                             <img src="/images/gps-icon.svg" alt="" />
                                             <h6 className="text-xs font-normal leading-4 text-gray-1200">GPS Source</h6>
                                        </div>
                                        <h6 className="text-sm font-bold leading-5 text-black-1600">Satellite</h6>
                                   </div>
                              </div>
                              <div className="bg-gray-1600 mt-3 rounded-[10px]  py-2 px-3">
                                   <h6 className="text-xs font-normal leading-4 text-gray-1200">Coordinates: 48.8566°N, 2.3522°E</h6>
                              </div>
                         </div>
                    </div>
                    <div className="flex md:gap-6 gap-4 md:flex-nowrap flex-wrap mt-6">
                         <div className="2xl:w-8/12 md:w-1/2 w-full">
                              <div className="bg-white border border-gray-1000 rounded-xl mb-6 shadow-4xl">
                                   <div className=" 2xl:p-6 p-4">
                                        <div className="flex items-center justify-between mb-3">
                                             <h6 className="text-base font-bold leading-6 text-black-1600">History Explorer</h6>
                                             <CustomSelect className="bg-gray-1800 w-full min-w-[130px] rounded-[10px]! border border-gray-1000"
                                                  value={status}
                                                  onChange={(e) => setStatus(e.target.value)}
                                                  options={[
                                                       { label: "Last 24 hours", value: "Last 24 hours" },
                                                       { label: "Last 29 days", value: "Last 29 days" },
                                                  ]}
                                             />
                                        </div>
                                        <TabGroup>
                                             <TabList className="bg-gray-6000 mb-3 rounded-[10px] grid grid-cols-2 p-1">
                                                  <Tab className="flex items-center justify-center gap-1.5 text-sm font-normal text-gray-1200 p-1.5 data-selected:bg-gray-1800 rounded-lg data-selected:text-black-1600 cursor-pointer"><img src="/images/map-icon.svg" alt="" /> Map View</Tab>
                                                  <Tab className="flex items-center justify-center gap-1.5 text-sm font-normal text-gray-1200 p-1.5 data-selected:bg-gray-1800 rounded-lg data-selected:text-black-1600 cursor-pointer"><img src="/images/list-icon.svg" alt="" />List View</Tab>
                                             </TabList>
                                             <TabPanels>
                                                  <TabPanel>
                                                       <div className="bg-gray-1600/50 border border-gray-1000 rounded-xl">
                                                            <TrackingMap></TrackingMap>
                                                       </div>
                                                  </TabPanel>
                                                  <TabPanel>Content 2</TabPanel>
                                             </TabPanels>
                                        </TabGroup>
                                   </div>
                              </div>
                              <div className="bg-white border border-gray-1000 rounded-xl shadow-4xl p-4">
                                   <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                             <img src="/images/timer-icon2.svg" alt="" />
                                             <h6 className="text-sm font-bold leading-5 text-black-1600">Timeline Playback</h6>
                                        </div>
                                        <h6 className="text-xs font-normal text-gray-1200">14:32 — Now</h6>
                                   </div>
                                   <TimeRangeSlider></TimeRangeSlider>
                                   <div className="flex items-center mt-3 justify-between">
                                        <h6 className="text-[10px] font-normal text-gray-1200">12:20</h6>
                                        <h6 className="text-[10px] font-normal text-gray-1200">13:22</h6>
                                        <h6 className="text-[10px] font-normal text-gray-1200">14:32</h6>
                                   </div>
                                   <ul className="flex items-center mt-3 justify-center gap-2">
                                        <li>
                                             <Link href="/" className="w-8 h-8 flex items-center justify-center"><img src="/images/left-icon.svg" alt="" /></Link>
                                        </li>
                                        <li>
                                             <Link href="/" className="w-9 h-9 flex items-center justify-center bg-blue1400 rounded-full"><img src="/images/play-icon.svg" alt="" /></Link>
                                        </li>
                                        <li>
                                             <Link href="/" className="w-8 h-8 flex items-center justify-center"><img src="/images/right-icon.svg" alt="" /></Link>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                         <div className="2xl:w-4/12 md:w-1/2 w-full">
                              <div className="bg-white border border-gray-1000 rounded-xl shadow-4xl p-6">
                                   <div className="flex items-center mb-3 gap-2">
                                        <img src="/images/shield-blue.svg" alt="" />
                                        <h6 className="text-base font-bold leading-5 text-black-1600">Data Retention & Privacy</h6>
                                   </div>
                                   <div className="flex items-center mb-3 gap-2">
                                        <img src="/images/timer-gray.svg" className="w-[14px] h-[14px]" alt="" />
                                        <h6 className="text-xs font-normal leading-4 text-gray-1200">GPS Data Retention Period</h6>
                                   </div>
                                   <CustomSelect className="bg-gray-1800 rounded-[10px]! border border-gray-1000"
                                        value={status2}
                                        onChange={(e) => setStatus2(e.target.value)}
                                        options={[
                                             { label: "14 days", value: "14 days" },
                                             { label: "Last 29 days", value: "Last 29 days" },
                                        ]}
                                   />
                                   <p className="text-[11px] mt-2 mb-5 leading-4 font-normal text-gray-1200">Data older than 14 days is automatically purged per
                                        GDPR/local regulations.</p>
                                   <ul className="flex gap-2 mb-5">
                                        <li className="4xl:w-5/12 w-1/2">
                                             <Link href='/' className="text-sm leading-5 justify-center w-full text-white flex items-center gap-1.5 py-2 px-2.5 rounded-[10px] bg-red-1300"><img src="/images/del-icon3.svg" alt="" /> Manual Purge</Link>
                                        </li>
                                        <li className="4xl:w-7/12 w-1/2">
                                             <Link href='/' className="text-sm leading-5 justify-center w-full text-black-1600 flex items-center gap-1.5 py-2 px-2.5 rounded-[10px] bg-gray-1800 border border-gray-1000"><img src="/images/download-file.svg" alt="" /> Legal Export </Link>
                                        </li>
                                   </ul>
                                   <div className="bg-gray-6000 rounded-[10px] p-3 flex items-center gap-2">
                                        <div className="text-[10px] leading-[15px] text-white py-1 px-2.5 bg-blue-2700 rounded-full">GDPR</div>
                                        <h6 className="text-[11px] leading-4 text-gray-1200">Compliant with EU data retention laws.
                                             Consent-based purge available.</h6>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default page
