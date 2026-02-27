
'use client'
import TopBar from "@/app/components/common/TopBar";
import AlertLedgerTable from "@/app/components/AlertLedgerTable";
import Image from "next/image";
import SafetyList from "@/app/components/SafetyList";
function page() {
     return (
          <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
               <TopBar></TopBar>
               <div className="p-6">
                    <div className="bg-blue-1000 flex gap-4 flex-wrap items-center justify-between py-3 px-6">
                         <div className="flex items-center gap-3">
                              <img src="/images/shield-icon3.svg" className="w-6 h-6" alt="" />
                              <h5 className="text-lg font-bold leading-7 text-white-1100">StudSafe</h5>
                              <p className="text-xs font-normal leading-4 text-white-1100">Alerts & Incidents</p>
                         </div>
                         <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1.5">
                                   <img src="/images/curve-icon.svg" alt="" />
                                   <h6 className="text-xs font-normal leading-4 text-white-1100">5 Active</h6>
                              </div>
                              <div className="bg-red-2200 rounded flex items-center gap-1.5 py-0.5 px-2">
                                   <img src="/images/bell-icon-white.svg" alt="" />
                                   <h6 className="text-xs font-bold leading-4 text-white-1100">2 P1</h6>
                              </div>
                         </div>
                    </div>
                    <div className="bg-white mb-4 pt-8 flex-wrap gap-4 py-3 px-4">
                         <div className="flex items-center gap-3">
                              <img src="/images/shield-dark.svg" className="w-4 h-4" alt="" />
                              <p className="text-sm font-bold leading-5 text-black-2900">Global User Safety List</p>
                         </div>
                         <form action="" className="mt-2 mb-7">
                              <div className="relative">
                                   <input type="text" className='text-sm font-normal font-neulis-sans text-gray-2300 placeholder:text-gray-2300 px-4 pl-10 h-9 bg-gray-1800 border border-gray-5600 rounded-md w-full outline-0' placeholder='Search students…' />
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
                         <SafetyList></SafetyList>
                    </div>
               </div>
          </div>
     )
}

export default page
