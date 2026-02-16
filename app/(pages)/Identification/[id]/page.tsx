

import Link from "next/link";

export default function page() {


     return (
          <div className="flex-1">
          
               <div className="grid md:grid-cols-2 grid-cols-1 mt-2.5 xl:gap-6 gap-4">
                    <div className="bg-white border border-gray-1000 rounded-lg shadow-4xl">
                         <div className="py-7.5 md:px-6 px-4 flex items-center justify-between">
                              <h4 className="font-segoe  sm:text-2xl text-xl font-normal leading-6 text-black13">Basic Information</h4>
                              <Link href="/" className="flex items-center gap-4 py-2 px-3 bg-white rounded-md border border-gray1600 text-sm font-normal leading-5 font-segoe text-black13"><img src="/images/edit-icon.svg" alt="" /> Edit</Link>
                         </div>
                         <div className="md:px-6 px-4">
                              <div className="grid grid-cols-2 mb-4">
                                   <div>
                                        <h6 className="font-segoe font-normal text-sm leading-5 text-gray-1200">First Name</h6>
                                        <span className="block font-segoe font-normal text-base leading-6 text-black13">Sarah</span>
                                   </div>
                                   <div>
                                        <h6 className="font-segoe font-normal text-sm leading-5 text-gray-1200">Last Name</h6>
                                        <span className="block font-segoe font-normal text-base leading-6 text-black13">Johnson</span>
                                   </div>
                              </div>
                              <div className="flex items-center gap-3 mb-4">
                                   <img src="/images/msg-icon.svg" alt="" />
                                   <div>
                                        <h6 className="font-segoe font-normal text-sm leading-5 text-gray-1200">Email Address</h6>
                                        <span className="block font-segoe font-normal text-base leading-6 text-black13">sarah.johnson@email.com</span>
                                   </div>
                              </div>
                              <div className="flex items-center gap-3 mb-4">
                                   <img src="/images/phone-icon2.svg" alt="" />
                                   <div>
                                        <h6 className="font-segoe font-normal text-sm leading-5 text-gray-1200">Phone Number</h6>
                                        <span className="block font-segoe font-normal text-base leading-6 text-black13">+1-555-0123</span>
                                   </div>
                              </div>
                              <div className="flex items-center gap-3 mb-4">
                                   <img src="/images/calendar-icon2.svg" alt="" />
                                   <div>
                                        <h6 className="font-segoe font-normal text-sm leading-5 text-gray-1200">Date of Birth</h6>
                                        <span className="block font-segoe font-normal text-base leading-6 text-black13">3/15/1999</span>
                                   </div>
                              </div>
                              <div className="flex items-center gap-3 mb-4">
                                   <img src="/images/globe.svg" alt="" />
                                   <div>
                                        <h6 className="font-segoe font-normal text-sm leading-5 text-gray-1200">Country of Study</h6>
                                        <span className="block font-segoe font-normal text-base leading-6 text-black13">US</span>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="bg-white border border-gray-1000 rounded-lg shadow-4xl">
                         <div className="py-7.5 md:px-6 px-4 flex items-center justify-between">
                              <h4 className="font-segoe  sm:text-2xl text-xl font-normal leading-6 text-black13">Academic Information</h4>
                         </div>
                         <div className="md:px-6 px-4">
                              <div className="flex items-center gap-3 mb-4">
                                   <img src="/images/institute-icon.svg" alt="" />
                                   <div>
                                        <h6 className="font-segoe font-normal text-sm leading-5 text-gray-1200">Institution</h6>
                                        <span className="block font-segoe font-normal text-base leading-6 text-black13">University of Technology</span>
                                   </div>
                              </div>
                              <div className="flex items-center gap-3 mb-4">
                                   <img src="/images/location-icon.svg" alt="" />
                                   <div>
                                        <h6 className="font-segoe font-normal text-sm leading-5 text-gray-1200">Campus Location</h6>
                                        <span className="block font-segoe font-normal text-base leading-6 text-black13">London, UK</span>
                                   </div>
                              </div>
                              <div className="flex items-center gap-3 mb-4">
                                   <div>
                                        <h6 className="font-segoe font-normal text-sm leading-5 text-gray-1200">Program</h6>
                                        <span className="block font-segoe font-normal text-base leading-6 text-black13">Master of Computer Science</span>
                                   </div>
                              </div>
                              <div className="flex items-center gap-3 mb-4">
                                   <div>
                                        <h6 className="font-segoe font-normal text-sm leading-5 text-gray-1200">Student ID</h6>
                                        <span className="block font-segoe font-normal text-base leading-6 text-black13">STU2024005234</span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="bg-white border border-gray-1000 rounded-lg shadow-4xl md:p-6 p-4 mt-6">
                    <h4 className="font-segoe sm:text-2xl text-xl font-normal leading-6 text-black13">Account Status & Verification</h4>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-6">
                         <div className="bg-gray-1300 rounded-lg flex items-center justify-between p-4">
                              <div>
                                   <h6 className="text-sm font-segoe font-normal leading-5 text-green-1100">Email Verified</h6>
                                   <span className="block font-segoe font-normal leading-4 text-xs text-green-1000">Verified on Dec 15, 2024</span>
                              </div>
                              <div className="bg-green-1400 w-2 h-2 rounded-full block"></div>
                         </div>
                         <div className="bg-gray-1300 rounded-lg flex items-center justify-between p-4">
                              <div>
                                   <h6 className="text-sm font-segoe font-normal leading-5 text-green-1100">Phone Verified</h6>
                                   <span className="block font-segoe font-normal leading-4 text-xs text-green-1000">Verified on Dec 15, 2024</span>
                              </div>
                              <div className="bg-green-1400 w-2 h-2 rounded-full block"></div>
                         </div>
                         <div className="bg-yellow-1100 rounded-lg flex items-center justify-between p-4">
                              <div>
                                   <h6 className="text-sm font-segoe font-normal leading-5 text-brown1200">KYC Pending</h6>
                                   <span className="block font-segoe font-normal leading-4 text-xs text-yellow-1200">Awaiting documents</span>
                              </div>
                              <div className="bg-brown-1100 w-2 h-2 rounded-full block"></div>
                         </div>
                    </div>
               </div>
               
          </div>
     );
}
