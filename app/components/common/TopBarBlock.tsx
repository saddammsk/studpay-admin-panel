'use client'
import { useState } from 'react'

import Image from "next/image";
import Link from 'next/link';
import Button from "../ui/Button";
import { useSidebarStore } from "@/app/store/zustand/useSidebarStore";





const TopBar = () => {
     const toggleSidebar = useSidebarStore((state: any) => state.toggle);
      const { collapsed } = useSidebarStore();


     return (

          <div className={`bg-white/80 border-b border-solid border-gray1600/50 backdrop-blur-md fixed w-full z-50 top-0 right-0 ${collapsed ? "xl:pl-16 lg:pl-8" : "xl:pl-72 lg:pl-62.5"} `}>
               <div className='flex items-center justify-between md:gap-0 gap-4 py-4.5 xl:px-8 px-4 bg-white border-b border-gray-1000'>
                    <div className="flex-1 flex items-center gap-4">
                         <div className=''>
                              <h1 className="text-blue-1300 font-bold font-inter sm:text-lg text-base sm:leading-7 leading-6 flex items-center gap-2">
                                   <Image
                                        src="/icons/lock-blueDark.svg"
                                        width="16"
                                        height="16"
                                        alt=""
                                   />
                                   Global AVI & Blocked Management
                              </h1>
                         </div>

                    </div>
                    <div className='flex items-center md:gap-4 gap-1'>
                         <ul className='md:flex hidden items-center md:gap-4 gap-1'> 
                              <li>
                                   <Link href={'#'} className='inline-flex items-center justify-center gap-1.5 text-black-1600 font-inter font-normal text-xs leading-4 border border-solid border-gray-3600 rounded-md bg-linear-to-r from-gray-1500 to-gray-1600 h-6.5 px-2 transition-all duration-500 ease-in-out'>
                                        <Image
                                             src="/images/shield-dark.svg"
                                             width="14"
                                             height="14"
                                             alt=""
                                        />
                                       Logs are cryptographically signed
                                   </Link>
                              </li>
                              <li>
                                   <Link href={'#'} className='inline-flex items-center justify-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
                                        <Image
                                             src="/images/export-icon4.svg"
                                             width="16"
                                             height="16"
                                             alt=""
                                        />
                                        Export
                                   </Link>
                              </li> 
                         </ul>
                         <button onClick={toggleSidebar} className='lg:hidden'>
                              <img src="/images/hamburger.svg" className="w-6 h-6" alt="menu" />
                         </button>
                    </div>
               </div>
          </div>
     )
}

export default TopBar
