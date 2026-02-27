"use client";
import { useState } from "react";
import TopBar from "@/app/components/common/TopBar";
import ToggleSwitch from "@/app/components/ui/ToggleSwitch";
import Link from "next/link";
import TimeRangeSlider from "@/app/components/TimeRangeSlider";
import AlertItem from "@/app/components/AlertItem";
import { MapPin, Smartphone, Wifi } from "lucide-react";
import StepFlow, { StepItem } from "@/app/components/StepFlow";
import { Bell, Headphones, Users } from "lucide-react";
import CustomSelect from "@/app/components/CustomSelect";

function page() {
     const [switch1, setSwitch1] = useState(false)
     const [status, setStatus] = useState<string>("Select Status");
     const [status2, setStatus2] = useState<string>("Select Status");
     const steps: StepItem[] = [
          {
               id: 1,
               title: "Push Notification",
               description: "Send 'Are you okay?' notification to the user",
               badge: "Vibration + sound alert with one-tap response",
               time: "Immediate",
               icon: <Bell size={20} />,
               connectorText: "If no response...",
          },
          {
               id: 2,
               title: "Alert StudPay Support",
               description: "Notify support team if user doesn't respond",
               badge: "Support dashboard flagged with priority alert",
               time: "After 5 min",
               icon: <Headphones size={20} />,
               connectorText: "Simultaneously...",
          },
          {
               id: 3,
               title: "Notify Trusted Contacts",
               description: "Simultaneously alert emergency contacts",
               badge: "SMS + Push to all registered trusted contacts",
               time: "After 5 min",
               icon: <Users size={20} />,
          },
     ];
     return (
          <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
               <TopBar></TopBar>
               <div className="md:p-6 p-4">
                    <div className="bg-white border border-gray-1000 rounded-xl shadow-4xl md:p-6 p-2.5">
                         <div className="flex items-center md:flex-nowrap flex-wrap gap-4 justify-between">
                              <div className="flex items-center gap-4">
                                   <div className="bg-blue1400 rounded-xl md:w-12 w-10 md:h-12 h-10 flex items-center justify-center">
                                        <img src="/images/shield-icon3.svg" className="w-6 h-6" alt="" />
                                   </div>
                                   <div className="flex-1">
                                        <h6 className="md:text-2xl text-xl font-bold leading-8 text-black-1600">StudSafe — Inactivity Rules</h6>
                                        <p className="text-sm font-normal leading-5 text-gray-1200">Smart Safety Automation Engine</p>
                                   </div>
                              </div>
                              <div className="border border-gray-1000 flex-wrap px-4 py-2 bg-gray-1600 rounded-xl flex items-center gap-3">
                                   <h6 className="text-sm font-normal leading-5 text-gray-1200">Global Automation</h6>
                                   <ToggleSwitch enabled={switch1} setEnabled={setSwitch1} />
                                   <div className="text-white text-xs font-bold leading-4 px-2.5 py-0.5 rounded-full bg-green-1500">Active</div>
                              </div>
                         </div>
                         <div className="flex mt-6 flex-wrap items-center justify-start md:gap-3 gap-1">
                              <h6 className="text-sm font-normal leading-5 text-gray-1200">Active Policy:</h6>
                              <div className="bg-white border border-gray-1000 rounded-xl py-2 px-4 flex items-center gap-3">
                                   <h6 className="text-sm font-normal leading-5 text-black-1600">Standard Europe Policy</h6>
                                   <div className="text-xs font-bold leading-4 text-black-1600 py-0.5 px-2.5 rounded-full border border-gray-1000 rounded-full">4 rules</div>
                                   <img src="/images/droparrow.svg" alt="" />
                              </div>
                              <Link href="/" className="w-10 h-10 flex items-center justify-center"><img src="/images/setting-icon.svg" alt="" /></Link>
                         </div>
                    </div>
                    <div className="grid xl:grid-cols-2 mt-8 2xl:gap-8 gap-4">
                         <div className="bg-white border border-gray-1000 rounded-xl shadow-4xl 2xl:p-6 p-4">
                              <div className="flex items-center gap-3 mb-6">
                                   <div className="bg-gray-5900 rounded-xl w-9 h-9 flex items-center justify-center">
                                        <img src="/images/timer-yellow.svg" alt="" />
                                   </div>
                                   <div>
                                        <h6 className="text-lg font-bold leading-7 text-black-1600">Rule Configuration</h6>
                                        <p className="text-xs font-normal leading-4 text-gray-1200">Define inactivity thresholds and trigger conditions</p>
                                   </div>
                              </div>
                              <div className="border border-gray-1000 mb-6 rounded-xl bg-gray-1600/50 md:p-6 p-3">
                                   <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                             <img src="/images/sun-icon2.svg" alt="" />
                                             <h6 className="text-sm font-normal text-black-1600 leading-5">Day Mode</h6>
                                             <div className="text-xs font-bold leading-4 text-black-1600 py-0.5 px-2.5 rounded-full border border-gray-1000">6:00 AM — 10:00 PM</div>
                                        </div>
                                        <span className="md:text-2xl text-xl font-bold leading-8 text-yellow-2500">1h</span>
                                   </div>
                                   <TimeRangeSlider></TimeRangeSlider>
                              </div>
                              <div className="border border-gray-1000 mb-6 rounded-xl bg-gray-1600/50 md:p-6 p-3">
                                   <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                             <img src="/images/moon-icon-blue.svg" alt="" />
                                             <h6 className="text-sm font-normal text-black-1600 leading-5">Night Mode</h6>
                                             <div className="text-xs font-bold leading-4 text-black-1600 py-0.5 px-2.5 rounded-full border border-gray-1000">10:00 PM — 6:00 AM</div>
                                        </div>
                                        <span className="md:text-2xl text-xl font-bold leading-8 text-yellow-2500">15 min</span>
                                   </div>
                                   <TimeRangeSlider></TimeRangeSlider>
                              </div>
                              <h6 className="text-sm font-normal mb-4 text-black-1600">Trigger Conditions</h6>
                              <div className="space-y-3">
                                   <AlertItem title="No GPS Movement"
                                        description="No location change detected within threshold"
                                        icon={<MapPin size={20} />}></AlertItem>
                                   <AlertItem
                                        title="No App Activity"
                                        description="User hasn't opened StudPay within threshold"
                                        icon={<Smartphone size={20} />}
                                   />

                                   <AlertItem
                                        title="Device Offline"
                                        description="Device has been offline for specified duration"
                                        icon={<Wifi size={20} />}
                                   />
                              </div>
                         </div>
                         <div>
                              <div className="bg-white border border-gray-1000 rounded-xl shadow-4xl 2xl:p-6 p-4 mb-8">
                                   <div className="flex items-center gap-3 mb-6">
                                        <div className="bg-gray-5900 rounded-xl w-9 h-9 flex items-center justify-center">
                                             <img src="/images/tick-blue.svg" alt="" />
                                        </div>
                                        <div>
                                             <h6 className="text-lg font-bold leading-7 text-black-1600">Escalation Workflow</h6>
                                             <p className="text-xs font-normal leading-4 text-gray-1200">Step-by-step response when a rule is triggered</p>
                                        </div>
                                   </div>
                                   <div className="">
                                        <StepFlow steps={steps} />
                                   </div>
                              </div>
                              <div className="bg-white border border-gray-1000 rounded-xl shadow-4xl p-6 mb-8">
                                   <div className="flex items-center gap-3 mb-6">
                                        <div className="bg-gray-5900 rounded-xl w-9 h-9 flex items-center justify-center">
                                             <img src="/images/filter-icon3.svg" alt="" />
                                        </div>
                                        <div>
                                             <h6 className="text-lg font-bold leading-7 text-black-1600">Rule Simulator</h6>
                                             <p className="text-xs font-normal leading-4 text-gray-1200">Test your rules before deploying to production</p>
                                        </div>
                                   </div>
                                   <div className="rounded-xl bg-gray-1600/50 border border-gray-1000 p-4">
                                        <h6 className="text-sm font-normal leading-5 mb-3 text-black-1600">Scenario Injector</h6>
                                        <div className="grid md:grid-cols-2 mb-4 gap-3 max-w-[452px]">
                                             <div>
                                                  <label htmlFor="" className="block mb-1.5 text-xs font-normal leading-4 text-gray-1200">Scenario</label>
                                                  <CustomSelect className="bg-white rounded-[10px]! border border-gray-1000"
                                                       value={status}
                                                       onChange={(e) => setStatus(e.target.value)}
                                                       options={[
                                                            { label: "Last 30 days", value: "Last 30 days" },
                                                            { label: "Last 29 days", value: "Last 29 days" },
                                                       ]}
                                                  />
                                             </div>
                                             <div>
                                                  <label htmlFor="" className="block mb-1.5 text-xs font-normal leading-4 text-gray-1200">Target User</label>
                                                  <CustomSelect className="bg-white rounded-[10px]! border border-gray-1000"
                                                       value={status2}
                                                       onChange={(e) => setStatus2(e.target.value)}
                                                       options={[
                                                            { label: "User X (Test)", value: "Last 30 days" },
                                                            { label: "Last 29 days", value: "Last 29 days" },
                                                       ]}
                                                  />
                                             </div>
                                        </div>
                                        <Link href="/" className="flex items-center gap-2 px-4 py-3 text-sm font-normal leading-5 text-white w-fit bg-yellow-2500 rounded-[10px]"><img src="/images/play-icon.svg" alt="" /> Test Rule</Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default page
