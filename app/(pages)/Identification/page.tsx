'use client'
export default function Home() {
     return (
          <div className="">
               <h4 className="font-segoe text-2xl font-normal leading-8 text-black-1200 mb-6">Identification</h4>
               <div className="rounded-lg bg-white border border-gray-1000 shadow-4xl p-6">
                    <div className="flex items-center gap-2 text-2xl font-normal leading-6 text-black13 mb-6">
                         <img src="/images/search-icon2.svg" alt="" />User Search
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                         <div>
                              <label htmlFor="" className="font-segoe text-sm font-normal leading-5 block mb-2 text-gray-1700">First Name</label>
                              <div className="relative">
                                   <input type="text" placeholder="Enter first name" className="font-segoe   text-sm font-normal leading-normal text-gray-1400 placeholder:text-gray-1400 w-full pl-10 h-10 rounded-md border border-gray-1000 block" />
                                   <div className="absolute top-1/2 left-3 -translate-y-1/2">
                                        <img src="/images/user-icon2.svg" alt="" />
                                   </div>
                              </div>
                         </div>
                         <div>
                              <label htmlFor="" className="font-segoe text-sm font-normal leading-5 block mb-2 text-gray-1700">Last Name</label>
                              <div className="relative">
                                   <input type="text" placeholder="Enter last name" className="font-segoe   text-sm font-normal leading-normal text-gray-1400 placeholder:text-gray-1400 w-full pl-10 h-10 rounded-md border border-gray-1000 block" />
                                   <div className="absolute top-1/2 left-3 -translate-y-1/2">
                                        <img src="/images/user-icon2.svg" alt="" />
                                   </div>
                              </div>
                         </div>
                         <div>
                              <label htmlFor="" className="font-segoe text-sm font-normal leading-5 block mb-2 text-gray-1700">Email</label>
                              <div className="relative">
                                   <input type="text" placeholder="Enter email address" className="font-segoe   text-sm font-normal leading-normal text-gray-1400 placeholder:text-gray-1400 w-full pl-10 h-10 rounded-md border border-gray-1000 block" />
                                   <div className="absolute top-1/2 left-3 -translate-y-1/2">
                                        <img src="/images/msg-icon.svg" alt="" />
                                   </div>
                              </div>
                         </div>
                         <div>
                              <label htmlFor="" className="font-segoe text-sm font-normal leading-5 block mb-2 text-gray-1700">Phone Number</label>
                              <div className="relative">
                                   <input type="text" placeholder="Enter phone number" className="font-segoe   text-sm font-normal leading-normal text-gray-1400 placeholder:text-gray-1400 w-full pl-10 h-10 rounded-md border border-gray-1000 block" />
                                   <div className="absolute top-1/2 left-3 -translate-y-1/2">
                                        <img src="/images/call-icon.svg" alt="" />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
