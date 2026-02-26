
'use client'
import { useState } from "react";
import TopBar from "@/app/components/common/TopBar";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import Link from "next/link";
import LedgerTable from "@/app/components/LedgerTable";
import ManagerTable from "@/app/components/ManagerTable";
import AlertTable from "@/app/components/AlertTable";
import AlertLedgerTable from "@/app/components/AlertLedgerTable";
function page() {
     return (
          <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
               <TopBar></TopBar>
               <div className="p-6">
                    <div className="bg-blue-1000 mb-6 flex items-center justify-between py-3 px-6">
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
                    <div className="bg-red-2300 mb-4 rounded-lg border border-red-2400 py-3 px-4 flex items-center justify-between">
                         <div className="flex items-center gap-3">
                              <img src="/images/caution-icon4.svg" alt="" />
                              <p className="text-sm font-bold leading-5 text-red-2200">2 Critical SOS alerts requiring immediate attention</p>
                         </div>
                         <ul className="flex gap-2">
                              <li className="text-xs font-bold rounded leading-4 text-red-2200 px-1.5 py-[1px] bg-gray-3500 border border-red-2200/30">
                                   INC-2401
                              </li>
                              <li className="text-xs font-bold rounded leading-4 text-red-2200 px-1.5 py-[1px] bg-gray-3500 border border-red-2200/30">
                                   INC-2402
                              </li>
                         </ul>
                    </div>
                    <div className="border border-gray-1000 mt-4 bg-white rounded-xl shadow-14xl">
                         <div className="py-4 px-5 flex items-center justify-between flex-wrap gap-5">
                              <div>
                                   <h6 className="text-base font-bold leading-6 text-black-2600">Central Alert Ledger</h6>
                                   <p className="text-sm font-normal leading-5 text-gray-1200">6 total incidents · Click a row for details</p>
                              </div>
                         </div>
                         <AlertLedgerTable></AlertLedgerTable>
                    </div>
               </div>
          </div>
     )
}

export default page
