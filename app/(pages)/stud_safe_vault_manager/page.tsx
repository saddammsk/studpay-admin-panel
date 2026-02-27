
'use client'
import TopBar from "@/app/components/common/TopBar";
import Link from "next/link";
import ASAChart from "@/app/components/ASAChart";
import RadialProgress from "@/app/components/RadialProgress";
import ProgressBar from "@/app/components/ProgressBar";
function page() {
     return (
          <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
               <TopBar></TopBar>
               <div className="p-6">
                    <div className="flex items-center justify-between flex-wrap gap-5 mb-6">
                         <div className="xl:flex-1">
                              <h6 className="text-xl font-bold leading-7 text-black-1600">Safety Command Center</h6>
                              <p className="text-sm font-normal leading-5 text-gray-1900">Real-time student safety monitoring</p>
                         </div>
                         <div className="text-sm font-normal leading-5 text-gray-5000 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full block bg-green-3200"></span>
                              System Online
                         </div>
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
                                             <img src="/images/shield-blue.svg" className="w-5 h-5" alt="" />
                                        </div>
                                        <h4 className="4xl:text-2xl text-[17px] font-bold mt-1 leading-9 text-black-2600">1,247</h4>
                                        <span className="block text-sm font-medium leading-5 text-gray-1200">Active Monitoring</span>
                                   </div>
                                   <div className="text-xs flex items-center gap-1 font-normal leading-4 text-green-1600 ">
                                        <img src="/images/trend-up.svg" className="w-4 h-4" alt="" /> +12.5%
                                   </div>
                              </div>
                         </div>
                         <div className="bg-white border  border-gray-1000 shadow-13xl rounded-2xl 4xl:p-6 pr-[18px] p-3">
                              <div className="flex items-start justify-between">
                                   <div className="">
                                        <div className="bg-red-2000/10 w-10 h-10 mb-3 flex items-center justify-center shadow-4xl rounded-xl">
                                             <img src="/images/caution-icon4.svg" className="w-5 h-5" alt="" />
                                        </div>
                                        <h4 className="4xl:text-2xl text-[17px] font-bold mt-1 leading-9 text-black-2600">23</h4>
                                        <span className="block text-sm font-medium leading-5 text-gray-1200">Students at Risk</span>
                                   </div>
                                   <div className="text-xs flex items-center gap-1 font-normal leading-4 text-green-1600 ">
                                        <img src="/images/trend-up.svg" className="w-4 h-4 rotate-[60deg]" alt="" />-8.3%
                                   </div>
                              </div>
                         </div>
                         <div className="bg-white border  border-gray-1000 shadow-13xl rounded-2xl 4xl:p-6 pr-[18px] p-3">
                              <div className="flex items-start justify-between">
                                   <div className="">
                                        <div className="bg-green-3200/10 w-10 h-10 mb-3 flex items-center justify-center shadow-4xl rounded-xl">
                                             <img src="/images/tick-circle2.svg" className="w-5 h-5" alt="" />
                                        </div>
                                        <h4 className="4xl:text-2xl text-[17px] font-bold mt-1 leading-9 text-black-2600">156</h4>
                                        <span className="block text-sm font-medium leading-5 text-gray-1200">Resolved Incidents</span>
                                   </div>
                                   <div className="text-xs flex items-center gap-1 font-normal leading-4 text-green-1600 ">
                                        <img src="/images/trend-up.svg" className="w-4 h-4" alt="" /> +24.1%
                                   </div>
                              </div>
                         </div>
                         <div className="bg-white border  border-gray-1000 shadow-13xl rounded-2xl 4xl:p-6 pr-[18px] p-3">
                              <div className="flex items-start justify-between">
                                   <div className="">
                                        <div className="bg-yellow-1100/10 w-10 h-10 mb-3 flex items-center justify-center shadow-4xl rounded-xl">
                                             <img src="/images/storage-icon.svg" className="w-5 h-5" alt="" />
                                        </div>
                                        <h4 className="4xl:text-2xl text-[17px] font-bold mt-1 leading-9 text-black-2600">84%</h4>
                                        <span className="block text-sm font-medium leading-5 text-gray-1200">Storage Utilization</span>
                                   </div>
                                   <div className="text-xs flex items-center gap-1 font-normal leading-4 text-yellow-1100 ">
                                        <img src="/images/trend-up-yellow.svg" className="w-4 h-4" alt="" />+3.2%
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="flex xl:flex-nowrap flex-wrap gap-4 mb-5">
                         <div className="xl:w-8/12 w-full">
                              <div className="border py-5 px-4 border-gray-5100 bg-white rounded-xl shadow-14xl">
                                   <div className="flex pb-3 items-center justify-between">
                                        <div>
                                             <h6 className="text-base font-bold leading-6 text-black-2600">Safety Heatmap</h6>
                                             <p className="text-sm font-normal leading-5 text-gray-1200">Real-time risk distribution</p>
                                        </div>
                                        <Link href="/" className="flex items-center gap-1.5 text-xs font-normal leading-4 text-black-2700 py-1.5 px-2.5 bg-gray-5200 rounded-[10px]"><img src="/images/expend-icon.svg" alt="" /> Focus Mode</Link>
                                   </div>
                                   <ASAChart></ASAChart>
                              </div>
                         </div>
                         <div className="xl:w-4/12 w-full">
                              <div className="border p-4 border-gray-5100 bg-white rounded-xl shadow-14xl">
                                   <div className="flex items-center mb-[14px] justify-between">
                                        <div className="flex items-center gap-2">
                                             <span className="bg-red-2000 w-2 h-2 rounded-full block"></span>
                                             <h6 className="text-sm font-bold leading-5 text-black-2800">Critical Alerts</h6>
                                        </div>
                                        <h6 className="text-xs font-normal leading-4 text-gray-5000">6 active</h6>
                                   </div>
                                   <div className="overflow-y-auto scrollbar-hide">
                                        <div className="space-y-2 h-[333px]">
                                             <div className="bg-red-2000/5 border border-red-2000/20 rounded-[10px] flex items-end justify-between p-3">
                                                  <div>
                                                       <div className="flex items-center gap-2 mb-[5px]">
                                                            <div className="text-white text-[10px] font-bold leading-[15px] py-0.5 px-1.5 bg-red-2000 rounded">P1</div>
                                                            <h6 className="text-xs font-normal leading-4 text-black-2800">SOS Triggered</h6>
                                                       </div>
                                                       <div className="flex items-center gap-2 mb-1.5">
                                                            <img src="/images/wifi-icon2.svg" alt="" />
                                                            <h6 className="text-xs font-normal leading-4 text-gray-5000">Marie L.</h6>
                                                            <h6 className="text-xs font-normal leading-4 text-gray-5000">Paris 11e</h6>
                                                       </div>
                                                       <div className="flex items-center gap-1">
                                                            <img src="/images/timer-icon3.svg" className="w-2.5 h-2.5" alt="" />
                                                            <h6 className="text-xs font-normal leading-4 text-gray-5000">2 min ago</h6>
                                                       </div>
                                                  </div>
                                                  <Link href="/" className="flex items-center rounded-lg gap-1 py-1.5 px-2 bg-blue-3100/10 text-blue-3100 text-[10px] font-normal"><img src="/images/user-plus-blue.svg" alt="" /> Quick Assign</Link>
                                             </div>
                                             <div className="bg-red-2000/5 border border-red-2000/20 rounded-[10px] flex items-end justify-between p-3">
                                                  <div>
                                                       <div className="flex items-center gap-2 mb-[5px]">
                                                            <div className="text-white text-[10px] font-bold leading-[15px] py-0.5 px-1.5 bg-red-2000 rounded">P1</div>
                                                            <h6 className="text-xs font-normal leading-4 text-black-2800">SOS Triggered</h6>
                                                       </div>
                                                       <div className="flex items-center gap-2 mb-1.5">
                                                            <img src="/images/wifi-icon2.svg" alt="" />
                                                            <h6 className="text-xs font-normal leading-4 text-gray-5000">Marie L.</h6>
                                                            <h6 className="text-xs font-normal leading-4 text-gray-5000">Paris 11e</h6>
                                                       </div>
                                                       <div className="flex items-center gap-1">
                                                            <img src="/images/timer-icon3.svg" className="w-2.5 h-2.5" alt="" />
                                                            <h6 className="text-xs font-normal leading-4  text-gray-5000">2 min ago</h6>
                                                       </div>
                                                  </div>
                                                  <Link href="/" className="flex items-center gap-1 rounded-lg py-1.5 px-2 bg-blue-3100/10 text-blue-3100 text-[10px] font-normal"><img src="/images/user-plus-blue.svg" alt="" /> Quick Assign</Link>
                                             </div>
                                             <div className="bg-yellow-1100/5 border border-yellow-1100/20 rounded-[10px] flex items-end justify-between p-3">
                                                  <div>
                                                       <div className="flex items-center gap-2 mb-[5px]">
                                                            <div className="text-white text-[10px] font-bold leading-[15px] py-0.5 px-1.5 bg-yellow-1100 rounded">P1</div>
                                                            <h6 className="text-xs font-normal leading-4 text-black-2800">SOS Triggered</h6>
                                                       </div>
                                                       <div className="flex items-center gap-2 mb-1.5">
                                                            <img src="/images/wifi-icon2.svg" alt="" />
                                                            <h6 className="text-xs font-normal leading-4 text-gray-5000">Marie L.</h6>
                                                            <h6 className="text-xs font-normal leading-4 text-gray-5000">Paris 11e</h6>
                                                       </div>
                                                       <div className="flex items-center gap-1">
                                                            <img src="/images/timer-icon3.svg" className="w-2.5 h-2.5" alt="" />
                                                            <h6 className="text-xs font-normal leading-4 text-gray-5000">2 min ago</h6>
                                                       </div>
                                                  </div>
                                                  <Link href="/" className="flex items-center rounded-lg gap-1 py-1.5 px-2 bg-blue-3100/10 text-blue-3100 text-[10px] font-normal"><img src="/images/user-plus-blue.svg" alt="" /> Quick Assign</Link>
                                             </div>
                                             <div className="bg-red-2000/5 border border-red-2000/20 rounded-[10px] flex items-end justify-between p-3">
                                                  <div>
                                                       <div className="flex items-center gap-2 mb-[5px]">
                                                            <div className="text-white text-[10px] font-bold leading-[15px] py-0.5 px-1.5 bg-red-2000 rounded">P1</div>
                                                            <h6 className="text-xs font-normal leading-4 text-black-2800">SOS Triggered</h6>
                                                       </div>
                                                       <div className="flex items-center gap-2 mb-1.5">
                                                            <img src="/images/wifi-icon2.svg" alt="" />
                                                            <h6 className="text-xs font-normal leading-4 text-gray-5000">Marie L.</h6>
                                                            <h6 className="text-xs font-normal leading-4 text-gray-5000">Paris 11e</h6>
                                                       </div>
                                                       <div className="flex items-center gap-1">
                                                            <img src="/images/timer-icon3.svg" className="w-2.5 h-2.5" alt="" />
                                                            <h6 className="text-xs font-normal leading-4 text-gray-5000">2 min ago</h6>
                                                       </div>
                                                  </div>
                                                  <Link href="/" className="flex items-center rounded-lg gap-1 py-1.5 px-2 bg-blue-3100/10 text-blue-3100 text-[10px] font-normal"><img src="/images/user-plus-blue.svg" alt="" /> Quick Assign</Link>
                                             </div>
                                             <div className="bg-red-2000/5 border border-red-2000/20 rounded-[10px] flex items-end justify-between p-3">
                                                  <div>
                                                       <div className="flex items-center gap-2 mb-[5px]">
                                                            <div className="text-white text-[10px] font-bold leading-[15px] py-0.5 px-1.5 bg-red-2000 rounded">P1</div>
                                                            <h6 className="text-xs font-normal leading-4 text-black-2800">SOS Triggered</h6>
                                                       </div>
                                                       <div className="flex items-center gap-2 mb-1.5">
                                                            <img src="/images/wifi-icon2.svg" alt="" />
                                                            <h6 className="text-xs font-normal leading-4 text-gray-5000">Marie L.</h6>
                                                            <h6 className="text-xs font-normal leading-4 text-gray-5000">Paris 11e</h6>
                                                       </div>
                                                       <div className="flex items-center gap-1">
                                                            <img src="/images/timer-icon3.svg" className="w-2.5 h-2.5" alt="" />
                                                            <h6 className="text-xs font-normal leading-4  text-gray-5000">2 min ago</h6>
                                                       </div>
                                                  </div>
                                                  <Link href="/" className="flex items-center gap-1 rounded-lg py-1.5 px-2 bg-blue-3100/10 text-blue-3100 text-[10px] font-normal"><img src="/images/user-plus-blue.svg" alt="" /> Quick Assign</Link>
                                             </div>
                                             <div className="bg-yellow-1100/5 border border-yellow-1100/20 rounded-[10px] flex items-end justify-between p-3">
                                                  <div>
                                                       <div className="flex items-center gap-2 mb-[5px]">
                                                            <div className="text-white text-[10px] font-bold leading-[15px] py-0.5 px-1.5 bg-yellow-1100 rounded">P1</div>
                                                            <h6 className="text-xs font-normal leading-4 text-black-2800">SOS Triggered</h6>
                                                       </div>
                                                       <div className="flex items-center gap-2 mb-1.5">
                                                            <img src="/images/wifi-icon2.svg" alt="" />
                                                            <h6 className="text-xs font-normal leading-4 text-gray-5000">Marie L.</h6>
                                                            <h6 className="text-xs font-normal leading-4 text-gray-5000">Paris 11e</h6>
                                                       </div>
                                                       <div className="flex items-center gap-1">
                                                            <img src="/images/timer-icon3.svg" className="w-2.5 h-2.5" alt="" />
                                                            <h6 className="text-xs font-normal leading-4 text-gray-5000">2 min ago</h6>
                                                       </div>
                                                  </div>
                                                  <Link href="/" className="flex items-center rounded-lg gap-1 py-1.5 px-2 bg-blue-3100/10 text-blue-3100 text-[10px] font-normal"><img src="/images/user-plus-blue.svg" alt="" /> Quick Assign</Link>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                         <div className="border py-5 px-4 border-gray-5100 bg-white rounded-xl shadow-14xl">
                              <div className="">
                                   <h6 className="text-xl font-bold leading-7 text-black-1600">Trust Network Health</h6>
                                   <p className="text-sm font-normal leading-5 text-gray-1900">Trusted contacts setup completion</p>
                              </div>
                              <div className="flex justify-center my-4">
                                   <RadialProgress value={73}></RadialProgress>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                   <div className="bg-green-3200/10 rounded-[10px] text-center py-2">
                                        <h6 className="text-sm font-bold leading-5 text-green-3200">905</h6>
                                        <p className="text-[10px] font-normal leading-4 text-gray-5000">Configured</p>
                                   </div>
                                   <div className="bg-yellow-1100/10 rounded-[10px] text-center py-2">
                                        <h6 className="text-sm font-bold leading-5 text-green-3200">335</h6>
                                        <p className="text-[10px] font-normal leading-4 text-yellow-1100">Pending</p>
                                   </div>
                              </div>
                         </div>
                         <div className="border py-5 px-4 border-gray-5100 bg-white rounded-xl shadow-14xl">
                              <div className="mb-4">
                                   <h6 className="text-xl font-bold leading-7 text-black-1600">GPS Compliance Status</h6>
                                   <p className="text-sm font-normal leading-5 text-gray-1900">Permission distribution</p>
                              </div>
                              <div className="mb-3">
                                   <div className="flex items-center justify-between">
                                        <h6 className="text-xs font-normal leading-4 text-black-2800">Always Allow</h6>
                                        <p className="text-xs font-normal leading-4 text-gray-5000">62%</p>
                                   </div>
                                   <ProgressBar value={62} className="h-2.5" barColor="bg-green-3200" bgColor="bg-gray-5200"></ProgressBar>
                              </div>
                              <div className="mb-3">
                                   <div className="flex items-center justify-between">
                                        <h6 className="text-xs font-normal leading-4 text-black-2800">While Using</h6>
                                        <p className="text-xs font-normal leading-4 text-gray-5000">24%</p>
                                   </div>
                                   <ProgressBar value={24} className="h-2.5" barColor="bg-blue-3100" bgColor="bg-gray-5200"></ProgressBar>
                              </div>
                              <div className="mb-4">
                                   <div className="flex items-center justify-between">
                                        <h6 className="text-xs font-normal leading-4 text-black-2800">Denied</h6>
                                        <p className="text-xs font-normal leading-4 text-gray-5000">14%</p>
                                   </div>
                                   <ProgressBar value={14} className="h-2.5" barColor="bg-red-2000" bgColor="bg-gray-5200"></ProgressBar>
                              </div>
                              <div className="bg-gray-5300/50 rounded-[10px] flex items-center justify-between p-2.5">
                                   <h6 className="text-xs font-normal leading-4 text-gray-5000">Total Coverage</h6>
                                   <h6 className="text-sm font-bold leading-4 text-blue-3100">86%</h6>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default page
