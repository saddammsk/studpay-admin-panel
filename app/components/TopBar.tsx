'use client'
import { useSidebarStore } from "@/app/store/zustand/useSidebarStore";
import { LanguageSelector } from "./LanguageSelector";
import { NotificationsDropdown } from "./NotificationsDropdown";
import { TopUserDropdown } from "./TopUserDropdown";
import { GlobalSearchbox } from "./ui/GlobalSearchbox";

const TopBar = () => {
     const toggleSidebar = useSidebarStore((state: any) => state.toggle);


   
     return (

          <div className='fixed w-full z-50 top-0 right-0 lg:pl-64'>
               <div className='flex items-center justify-between md:gap-0 gap-4 py-4.5 md:px-6 px-4 bg-white border-b border-gray-1000'>
                    <GlobalSearchbox/>

                    <div className='flex items-center md:gap-4 gap-1'>
                    <LanguageSelector />
                    <NotificationsDropdown/>
                    <TopUserDropdown/>
                   
                    <button onClick={toggleSidebar} className='lg:hidden'>
                         <img src="/images/hamburger.svg" className="w-6 h-6" alt="menu" />
                    </button>
                    </div>
               </div>
          </div>
     )
}

export default TopBar
