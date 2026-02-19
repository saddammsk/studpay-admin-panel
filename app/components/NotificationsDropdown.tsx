import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';


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
               <MenuButton className="group w-9 h-9 flex outline-0 items-center justify-center relative rounded-full cursor-pointer hover:bg-gray-1600 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path className='group-hover:stroke-gray1900' d="M8.55664 17.5C8.70293 17.7533 8.91332 17.9637 9.16668 18.11C9.42003 18.2563 9.70743 18.3333 9.99997 18.3333C10.2925 18.3333 10.5799 18.2563 10.8333 18.11C11.0866 17.9637 11.297 17.7533 11.4433 17.5" stroke="#94A3B8" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                         <path className='group-hover:stroke-gray1900' d="M2.7187 12.772C2.60984 12.8913 2.538 13.0397 2.51191 13.1991C2.48583 13.3585 2.50663 13.522 2.57179 13.6698C2.63695 13.8176 2.74365 13.9433 2.87891 14.0316C3.01418 14.1198 3.17218 14.1669 3.3337 14.167H16.667C16.8285 14.167 16.9866 14.1202 17.1219 14.0321C17.2573 13.944 17.3641 13.8184 17.4294 13.6708C17.4948 13.5231 17.5158 13.3596 17.4899 13.2001C17.464 13.0407 17.3924 12.8923 17.2837 12.7728C16.1754 11.6303 15.0004 10.4162 15.0004 6.66699C15.0004 5.34091 14.4736 4.06914 13.5359 3.13146C12.5982 2.19378 11.3265 1.66699 10.0004 1.66699C8.67429 1.66699 7.40252 2.19378 6.46483 3.13146C5.52715 4.06914 5.00037 5.34091 5.00037 6.66699C5.00037 10.4162 3.82453 11.6303 2.7187 12.772Z" stroke="#94A3B8" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {notifications.length > 0 && (
                         <span className='flex items-center justify-center absolute top-2.25 right-1.5 w-2 h-2 shadow-46xl rounded-full bg-red-1000'></span>
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
                                             className={`w-full text-left px-2 py-2 rounded-lg text-xs md:text-sm ${active ? "bg-gray-1300" : ""
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
