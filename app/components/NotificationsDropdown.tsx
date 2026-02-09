import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import React from 'react'

const notifications = [
    {
         id: 1,
         title: "New student registered",
         time: "2 min ago",
    },
    {
         id: 2,
         title: "KYC document pending review",
         time: "15 min ago",
    },
    {
         id: 3,
         title: "High-value transaction flagged",
         time: "1 hr ago",
    },
];


export const NotificationsDropdown = () => {
  return (
    
    <Menu as="div" className="relative">
    <MenuButton className="w-10 h-9 flex outline-0 items-center justify-center relative rounded-md hover:bg-gray-1600 transition-colors">
         <img src="/images/bell-icon.svg" alt="Notifications" />
         {notifications.length > 0 && (
              <span className='text-xs font-medium text-white flex items-center justify-center absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-1000'>
                   {notifications.length}
              </span>
         )}
    </MenuButton>

    <MenuItems
         anchor="bottom end"
         className="z-50 mt-2 w-80 origin-top-right rounded-xl border border-gray-100 bg-white p-2 text-sm shadow-lg focus:outline-none"
    >
         <div className="flex items-center justify-between px-2 py-1.5 border-b border-gray-100">
              <span className="text-sm font-medium text-blue-1200">Notifications</span>
              <span className="text-xs text-gray-1200">
                   {notifications.length} new
              </span>
         </div>

         <div className="max-h-72 overflow-y-auto py-1">
              {notifications.map((item) => (
                   <MenuItem key={item.id}>
                        {({ active }) => (
                             <button
                                  type="button"
                                  className={`w-full text-left px-2 py-2 rounded-lg text-xs md:text-sm ${
                                       active ? "bg-gray-1300" : ""
                                  }`}
                             >
                                  <div className="text-gray-900">
                                       {item.title}
                                  </div>
                                  <div className="text-gray-1200 mt-0.5">
                                       {item.time}
                                  </div>
                             </button>
                        )}
                   </MenuItem>
              ))}
              {notifications.length === 0 && (
                   <div className="px-2 py-3 text-xs text-gray-1200">
                        No new notifications
                   </div>
              )}
         </div>
    </MenuItems>
</Menu>
  )
}
