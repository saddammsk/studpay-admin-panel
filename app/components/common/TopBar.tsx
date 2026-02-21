'use client'
import { useState } from 'react'


import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/app/store/zustand/useSidebarStore";
import { GlobalSearchbox } from "../ui/GlobalSearchbox";
import { LanguageSelector } from "../LanguageSelector";
import { NotificationsDropdown } from "../NotificationsDropdown";
import { TopUserDropdown } from "../TopUserDropdown";
import Button from "../ui/Button";


const pageConfig: any = {
     "/": {
          title: "Dashboard",
          showSearch: true,
     },
     "/users_students": {
          title: "Users",
          description: "Manage and monitor all StudPay users",
          showSearch: false,
     },
     "/settings": {
          title: "Settings",
     },
     "/reports": {
          title: "Reports",
          description: "View and analyze system reports",
     },
};

const TopBar = () => {
     const toggleSidebar = useSidebarStore((state: any) => state.toggle);

     const pathname = usePathname();

     // for dynamic routes like /users/123
     const basePath = "/" + pathname.split("/")[1];

     const pageData = pageConfig[basePath] || {
          title: "Dashboard",
          showSearch: false,
     };
     return (

          <div className='bg-white/80 border-b border-solid border-gray1600/50 backdrop-blur-md fixed w-full z-50 top-0 right-0  xl:pl-72 lg:pl-62.5'>
               <div className='flex items-center justify-between md:gap-0 gap-4 py-4.5 xl:px-8 px-4 bg-white border-b border-gray-1000'>
                    <div className="flex-1 flex items-center gap-4">
                         <div className=''>
                              <h1 className="font-semibold font-inter text-2xl leading-8 tracking-[-0.6px]">
                                   {pageData.title}
                              </h1>
                              <p className='text-gray-1900 font-inter font-normal text-sm leading-5'>
                                   {pageData.description}
                              </p>
                         </div>
                         {pageData.showSearch && <GlobalSearchbox />}
                    </div>
                    <div className='flex items-center md:gap-4 gap-1'>
                         <Button onClick={() => { }}
                              iconSrc="/images/user-white.svg"
                              label="Impersonate User"
                              className="text-white text-sm font-medium gap-1 h-10 px-4! bg-blue-1000 hover:bg-blue800 rounded-lg border border-solid border-gray1600 m-0!"
                         />
                         <NotificationsDropdown />
                         <span className='bg-gray1600 w-px h-8 flex items-center justify-center'></span>
                         <LanguageSelector />
                         <button className="w-9 h-9 cursor-pointer flex items-center justify-center rounded-full hover:bg-gray1700">
                              <img src="/images/info-icon2.svg" alt="info" />
                         </button>
                         <TopUserDropdown />

                         <button onClick={toggleSidebar} className='lg:hidden'>
                              <img src="/images/hamburger.svg" className="w-6 h-6" alt="menu" />
                         </button>
                    </div>
               </div>
          </div>
     )
}

export default TopBar
