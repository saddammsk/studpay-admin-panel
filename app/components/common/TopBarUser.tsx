'use client'
import { useState } from 'react'

import Image from "next/image";
import Link from 'next/link';
import Button from "../ui/Button";
import { useSidebarStore } from "@/app/store/zustand/useSidebarStore";





const TopBar = () => {
     const toggleSidebar = useSidebarStore((state: any) => state.toggle);
     return (

          <div className='bg-white/80 border-b border-solid border-gray1600/50 backdrop-blur-md fixed w-full z-100 top-0 right-0 xl:pl-72 lg:pl-62.5'>
               <div className='flex items-center justify-between md:gap-0 gap-4 py-4.5 xl:px-8 px-4 bg-white border-b border-gray-1000'>
                    <div className="flex-1 flex items-center gap-4">
                         <div className=''>
                              <h1 className="font-semibold font-inter sm:text-2xl text-lg leading-8 tracking-[-0.6px]">
                                   User Management
                              </h1>
                              <p className='text-gray-1900 font-inter font-normal sm:text-sm text-xs leading-5'>
                                   Manage and monitor all StudPay users
                              </p>
                         </div>

                    </div>
                    <div className='flex items-center md:gap-4 gap-1'>
                         <ul className='md:flex hidden items-center md:gap-4 gap-1'>
                              <li>
                                   <Link href={'#'} className='inline-flex items-center justify-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
                                        <Image
                                             src="/images/refresh-icon.svg"
                                             width="16"
                                             height="16"
                                             alt=""
                                        />
                                        Refresh
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
                              <li>
                                   <Button onClick={() => { }}
                                        iconSrc="/images/userplus-white.svg"
                                        label="Add User"
                                        className="text-white text-sm font-normal gap-2 h-9 px-3! bg-blue-1000 hover:bg-blue800 rounded-md border border-solid border-gray1600 m-0!"
                                   />
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
