'use client'
import Image from "next/image";

import {
  useBlockedStore,
} from "@/app/store/zustand/UseAVIBlockedStore";



const TopBar = () => {
     const collapsed = useBlockedStore((s) => s.sidebarCollapsed);
     const toggle = useBlockedStore((s) => s.toggleSidebar);
       const exportCSV = useBlockedStore((s) => s.exportCSV);


     return (
            <div className={`bg-white/80 border-b border-gray-200/50 backdrop-blur-md fixed w-full z-50 top-0 right-0 transition-all duration-300 ${collapsed ? "xl:pl-16 lg:pl-8" : "xl:pl-72 lg:pl-64"}`}>
      <div className="flex items-center justify-between md:gap-0 gap-4 py-4 xl:px-8 px-4 bg-white border-b border-gray-200">
        <h1 className="text-slate-800 font-bold sm:text-lg text-base flex items-center gap-2">
          <Image
               src="/icons/lock-blueDark.svg"
               width="16"
               height="16"
               alt=""
          />
          Global AVI &amp; Blocked Management
        </h1>
        <div className="flex items-center md:gap-4 gap-1">
          <div className="md:flex hidden items-center md:gap-4 gap-1">
            <div className="inline-flex items-center gap-1.5 text-gray-600 text-xs border border-gray-200 rounded-md bg-gradient-to-r from-gray-50 to-gray-100 h-7 px-2">
               <Image
                    src="/images/shield-dark.svg"
                    width="14"
                    height="14"
                    alt=""
               />
              Logs are cryptographically signed
            </div>
            <button onClick={exportCSV} className="inline-flex items-center gap-2 text-gray-600 text-sm border border-gray-200 rounded-md bg-white h-9 px-3 hover:bg-gray-50 transition-colors cursor-pointer">
              <Image
                    src="/images/export-icon4.svg"
                    width="16"
                    height="16"
                    alt=""
               />
              Export
            </button>
          </div>
          <button onClick={toggle} className="lg:hidden p-1 text-gray-700 cursor-pointer" aria-label="Toggle sidebar">
                <img src="/images/hamburger.svg" className="w-6 h-6" alt="menu" />
          </button>
        </div>
      </div>
    </div>

     )
}

export default TopBar
