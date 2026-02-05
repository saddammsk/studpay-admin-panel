import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link'

interface TopBarProps {
     onMenuClick: () => void;
}
const TopBar = ({ onMenuClick }: TopBarProps) => {
     return (
          <div className='fixed w-full z-50 top-0 right-0 lg:pl-64'>
               <div className='flex items-center justify-between md:gap-0 gap-4 py-4.5 md:px-6 px-4 bg-white border-b border-gray-1000'>
                    <form action="" className='w-full xl:max-w-md md:max-w-75 max-w-full relative'>
                         <input type="text" className='text-sm font-normal font-neulis-sans text-gray-1400 placeholder:text-gray-1400 px-4 pl-10 h-10 bg-gray-1500 border border-gray-1000 rounded-md w-full' placeholder='Search students, transactions...' />
                         <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                              <img src="/images/search-icon.svg" alt="" />
                         </div>
                    </form>
                    <div className='flex items-center md:gap-4 gap-1'>
                         <Menu>
                              <MenuButton className="flex items-center cursor-pointer gap-4 py-2 md:px-3 px-1 transition-all ease-in-out duration-500 hover:bg-gray-1600 rounded-md text-sm font-medium leading-5 text-gray-1100">
                                   <img src="/images/globe-icon2.svg" className='md:block hidden' alt="" />
                                   <span> EN</span>
                                   <img src="/images/droparrow.svg" className='md:block hidden' alt="" />
                              </MenuButton>

                              <MenuItems
                                   transition
                                   anchor="bottom end"
                                   className="w-52 origin-top-right rounded-xl border border-white/5 bg-black/9 p-1 text-sm/6  transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                              >
                                   <MenuItem>
                                        <button className="group flex w-full text-black items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                                             Edit
                                        </button>
                                   </MenuItem>

                              </MenuItems>
                         </Menu>
                         <Link href="/" className='w-10 h-9 flex items-center justify-center relative'><img src="/images/bell-icon.svg" alt="" />
                              <span className='text-xs font-medium text-white flex items-center justify-center absolute top-0 right-0 w-5 h-5 rounded-full bg-red-1000'>3</span>
                         </Link>
                         <Menu>
                              <MenuButton className="flex items-center cursor-pointer gap-4 md:px-3 px-2 transition-all ease-in-out duration-500 rounded-md text-sm font-medium leading-5 text-gray-1100">
                                   <img src="/images/user-avatar.png" alt="" />
                                   <div className="text-start md:block hidden">
                                        Admin
                                        <span className='block text-gray-1200'>Super Admin</span>
                                   </div>
                                   <img src="/images/droparrow.svg" className='md:block hidden' alt="" />
                              </MenuButton>

                              <MenuItems
                                   transition
                                   anchor="bottom end"
                                   className="w-52 origin-top-right rounded-xl border border-white/5 bg-black/9 p-1 text-sm/6  transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                              >
                                   <MenuItem>
                                        <button className="group flex w-full items-center gap-2 text-black rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                                             Edit
                                        </button>
                                   </MenuItem>

                              </MenuItems>
                         </Menu>
                         <button onClick={onMenuClick} className='lg:hidden'>
                              <img src="/images/hamburger.svg" className="w-6 h-6" alt="menu" />
                         </button>
                    </div>
               </div>
          </div>
     )
}

export default TopBar
