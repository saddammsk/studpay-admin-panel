'use client'

import Link from "next/link";
import Image from "next/image";
import PropertieOwnedTable from "@/app/components/PropertieOwnedTable";
import PropertieDocumentsTable from "@/app/components/PropertieDocumentsTable";


export default function propertydetail() {


     return (
          <div className="font-inter">
               <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-6">
                    <div className="bg-white border border-solid border-gray-1000 rounded-xl shadow-9xl px-4 py-5.5 gap-5.5 flex items-center">
                         <span className="rounded-xl bg-blue-2200/10 w-10 h-10 flex items-center justify-center">
                              <Image
                                   src="/images/home-icon4.svg"
                                   alt=""
                                   width={20}
                                   height={20}
                              />
                         </span>
                         <div className="flex-1 w-full">
                              <h2 className="text-black-1600 text-2xl font-bold leading-8">4</h2>
                              <span className="text-gray-1200 text-sm font-normal leading-5 block">Total Properties</span>

                         </div>

                    </div>
                    <div className="bg-white border border-solid border-gray-1000 rounded-xl shadow-9xl px-4 py-5.5 gap-5.5 flex items-center">
                         <span className="rounded-xl bg-green-1600/10 w-10 h-10 flex items-center justify-center">
                              <Image
                                   src="/images/user-green2.svg"
                                   alt=""
                                   width={20}
                                   height={20}
                              />
                         </span>
                         <div className="flex-1 w-full">
                              <h2 className="text-black-1600 text-2xl font-bold leading-8">30</h2>
                              <span className="text-gray-1200 text-sm font-normal leading-5 block">Total Units</span>
                         </div>

                    </div>
                    <div className="bg-white border border-solid border-gray-1000 rounded-xl shadow-9xl px-4 py-5.5 gap-5.5 flex items-center">
                         <span className="rounded-xl bg-skyblue23/10 w-10 h-10 flex items-center justify-center">
                              <Image
                                   src="/images/price-arrow.svg"
                                   alt=""
                                   width={20}
                                   height={20}
                              />
                         </span>
                         <div className="flex-1 w-full">
                              <h2 className="text-black-1600 text-2xl font-bold leading-8">90%</h2>
                              <span className="text-gray-1200 text-sm font-normal leading-5 block">Avg Occupancy</span>
                         </div>

                    </div>
                    <div className="bg-white border border-solid border-gray-1000 rounded-xl shadow-9xl px-4 py-5.5 gap-5.5 flex items-center">
                         <span className="rounded-xl bg-yellow-1100/10 w-10 h-10 flex items-center justify-center">
                              <Image
                                   src="/images/card-orange.svg"
                                   alt=""
                                   width={20}
                                   height={20}
                              />
                         </span>
                         <div className="flex-1 w-full">
                              <h2 className="text-black-1600 text-2xl font-bold leading-8">€45,200</h2>
                              <span className="text-gray-1200 text-sm font-normal leading-5 block">Deposits Held</span>
                         </div>

                    </div>
               </div>
               <div className="flex items-start gap-6">
                    <div className="flex-1 w-full">
                         <div className="bg-white mb-6 border border-solid border-gray-3600 rounded-[14px] shadow-10xl p-6">
                              <div className="flex items-center justify-between border-b border-solid border-gray-1000">
                                   <h4 className="text-black-1600 font-inter font-bold text-lg leading-7 pb-4">Company Information</h4>
                              </div>
                              <div className="pt-10">
                                   <div className="grid grid-cols-2 gap-y-4">
                                        <div className="">
                                             <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block uppercase">Company Name</span>
                                             <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">Berlin Student Housing GmbH</h4>
                                        </div>
                                        <div className="">
                                             <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block uppercase">Registration Number</span>
                                             <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">HRB 123456 B</h4>
                                        </div>
                                        <div className="">
                                             <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block uppercase">Tax ID</span>
                                             <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">DE123456789</h4>
                                        </div>
                                        <div className="">
                                             <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block uppercase">Registered</span>
                                             <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">Mar 15, 2023</h4>
                                        </div>

                                   </div>
                              </div>
                         </div>
                         <div className="bg-white mb-6 border border-solid border-gray-3600 rounded-[14px] shadow-10xl p-6">
                              <div className="flex items-center justify-between border-b border-solid border-gray-1000">
                                   <h4 className="text-black-1600 font-inter font-bold text-lg leading-7 pb-4">
                                        Contact Information
                                   </h4>
                              </div>
                              <div className="mt-4 p-6">
                                   <ul>
                                        <li className="text-black-1600 mb-4 flex items-center gap-3 font-inter font-normal text-sm leading-5">
                                             <Image
                                                  src="/images/email-gray.svg"
                                                  alt=""
                                                  width={16}
                                                  height={16}
                                             />
                                             contact@berlinstudenthousing.de
                                        </li>
                                        <li className="text-black-1600 mb-4 flex items-center gap-3 font-inter font-normal text-sm leading-5">
                                             <Image
                                                  src="/images/phone-gray.svg"
                                                  alt=""
                                                  width={16}
                                                  height={16}
                                             />
                                             +49 30 1234 5678
                                        </li>
                                        <li className="text-black-1600 flex items-center gap-3 font-inter font-normal text-sm leading-5">
                                             <Image
                                                  src="/images/location-gray.svg"
                                                  alt=""
                                                  width={16}
                                                  height={16}
                                             />
                                             Friedrichstraße 123, 10117 Berlin, Germany
                                        </li>
                                   </ul>
                                   <div className="mt-4 border-t border-solid border-gray-1000 pt-4">
                                        <span className="text-gray-1200 font-normal text-sm block mb-2 leading-4 tracking-[-0.3px]">Primary Contact</span>
                                        <h4 className="text-black-1600 font-normal text-sm leading-5">Hans Müller</h4>
                                        <p className="text-gray-1200 font-normal text-sm leading-4">Property Manager</p>
                                   </div>
                              </div>
                         </div>
                         <div className="mb-6">
                              <PropertieOwnedTable />
                         </div>
                         <div className="mb-6">
                              <PropertieDocumentsTable />
                         </div>
                         <div className="bg-white border border-solid border-gray-1000 rounded-xl p-6">
                              <div className="border-b border-solid border-gray-1000 pb-4">
                                   <h4 className="text-black-1600 font-inter font-bold text-lg leading-7 pb-1">Admin Notes</h4>
                                   <p className="text-gray-1200 font-normal text-sm leading-5">Internal notes - not visible to owners</p>

                              </div>
                              <div className="mt-4">
                                   <div className="border-b border-solid border-gray-1000 pb-4">
                                        <textarea className="text-gray-1200 placeholder:text-gray-1200 font-inter font-normal text-sm leading-5 bg-gray-1800 border border-solid border-gray-1000 py-2.5 px-3.5 h-25 rounded-[10px] w-full" placeholder="Add internal notes about this owner..."></textarea>
                                        <Link href={"#"} className="text-sm mt-4 font-normal leading-5 text-white h-9 px-3 inline-flex items-center justify-center gap-2 bg-blue-2200 border border-blue-2200 transition-all duration-500 ease-in-out hover:bg-blue-2200/90 rounded-[10px]">
                                             Add Note
                                        </Link>
                                   </div>
                                   <div className="bg-gray-1600/50 mb-3 rounded-xl p-3 mt-4">
                                        <div className="flex items-center justify-between mb-1">
                                             <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">Admin User
                                             </h4>
                                             <span className="text-gray-1200 font-inter font-normal text-xs leading-4">Jan 16, 2024 at 14:32</span>
                                        </div>
                                        <p className="text-gray-1200 font-inter font-normal text-xs leading-4">All verification documents reviewed and approved. Owner has excellent track record with timely responses.</p>
                                   </div>
                                   <div className="bg-gray-1600/50 rounded-xl p-3">
                                        <div className="flex items-center justify-between mb-1">
                                             <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">Admin User
                                             </h4>
                                             <span className="text-gray-1200 font-inter font-normal text-xs leading-4">Dec 20, 2023 at 09:15</span>
                                        </div>
                                        <p className="text-gray-1200 font-inter font-normal text-xs leading-4">Requested additional bank verification for new property listing. Owner responded within 24 hours.</p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="max-w-108.75 w-full">
                         <div className="bg-white mb-6 border border-solid border-gray-3600 rounded-[14px] shadow-10xl p-6">
                              <div className="flex items-center justify-between border-b border-solid border-gray-1000 pb-4">
                                   <h4 className="text-black-1600 font-inter font-bold text-lg leading-7">Financial Summary</h4>
                              </div>
                              <div className="p-6 mt-4">
                                   <ul>
                                        <li className="text-gray-1200 font-inter font-normal text-sm leading-5 flex items-center justify-between border-b border-solid border-gray-1000 py-2 mb-4">Total Revenue <span className="text-black-1600 font-black">€128,400</span></li>
                                        <li className="text-gray-1200 font-inter font-normal text-sm leading-5 flex items-center justify-between border-b border-solid border-gray-1000 py-2 mb-4">Deposits Held <span className="text-black-1600 font-black">€45,200</span></li>
                                        <li className="text-gray-1200 font-inter font-normal text-sm leading-5 flex items-center justify-between border-b border-solid border-gray-1000 py-2 mb-4">Completed Payouts <span className="text-green-1600 font-black">€82,500</span></li>
                                        <li className="text-gray-1200 font-inter font-normal text-sm leading-5 flex items-center justify-between border-b border-solid border-gray-1000 py-2 mb-4">Pending Payouts <span className="text-yellow-1100 font-black">€3,150</span></li>
                                        <li className="text-gray-1200 font-inter font-normal text-sm leading-5 flex items-center justify-between py-2 mb-4">Average Rent <span className="text-black-1600 font-black">€1,080</span></li>
                                   </ul>
                                   <Link href={"#"} className="text-sm font-normal leading-5 text-black-1600 h-10 px-3 flex items-center justify-center gap-2 bg-gray-1600 border border-gray-1000 transition-all duration-500 ease-in-out hover:bg-gray-1600 rounded-[10px]">View All Transactions</Link>
                              </div>
                         </div>
                         <div className="bg-white mb-6 border border-solid border-gray-1000 rounded-xl p-6">
                              <div className="flex items-center justify-between border-b border-solid border-gray-1000 pb-4">
                                   <h4 className="text-black-1600 font-inter font-bold text-lg leading-7">Verification Status</h4>
                              </div>
                              <div className="p-6 mt-4">
                                   <ul>
                                        <li className="text-black-1600 font-inter font-normal text-sm leading-5 border-b border-solid border-gray-1000 py-3 flex items-center justify-between">
                                             Business Registration
                                             <p className="text-green-1600 flex items-center gap-2 font-inter font-normal text-xs leading-4">
                                                  <span className="bg-green-1600/10 rounded-full w-6 h-6 flex items-center justify-center">
                                                       <Image
                                                            src="/images/checkgreen-icon.svg"
                                                            alt=""
                                                            width={10}
                                                            height={10}
                                                       />
                                                  </span>
                                                  approved
                                             </p>
                                        </li>
                                        <li className="text-black-1600 font-inter font-normal text-sm leading-5 border-b border-solid border-gray-1000 py-3 flex items-center justify-between">
                                             Tax Documentation
                                             <p className="text-green-1600 flex items-center gap-2 font-inter font-normal text-xs leading-4">
                                                  <span className="bg-green-1600/10 rounded-full w-6 h-6 flex items-center justify-center">
                                                       <Image
                                                            src="/images/checkgreen-icon.svg"
                                                            alt=""
                                                            width={10}
                                                            height={10}
                                                       />
                                                  </span>
                                                  approved
                                             </p>
                                        </li>
                                        <li className="text-black-1600 font-inter font-normal text-sm leading-5 border-b border-solid border-gray-1000 py-3 flex items-center justify-between">
                                             Identity Verification
                                             <p className="text-green-1600 flex items-center gap-2 font-inter font-normal text-xs leading-4">
                                                  <span className="bg-green-1600/10 rounded-full w-6 h-6 flex items-center justify-center">
                                                       <Image
                                                            src="/images/checkgreen-icon.svg"
                                                            alt=""
                                                            width={10}
                                                            height={10}
                                                       />
                                                  </span>
                                                  approved
                                             </p>
                                        </li>
                                        <li className="text-black-1600 font-inter font-normal text-sm leading-5 py-3 flex items-center justify-between">
                                             Bank Account
                                             <p className="text-green-1600 flex items-center gap-2 font-inter font-normal text-xs leading-4">
                                                  <span className="bg-green-1600/10 rounded-full w-6 h-6 flex items-center justify-center">
                                                       <Image
                                                            src="/images/checkgreen-icon.svg"
                                                            alt=""
                                                            width={10}
                                                            height={10}
                                                       />
                                                  </span>
                                                  approved
                                             </p>
                                        </li>
                                        <li className="text-black-1600 font-inter font-normal text-sm leading-5 py-3 flex items-center justify-between">
                                             Background Check
                                             <p className="text-green-1600 flex items-center gap-2 font-inter font-normal text-xs leading-4">
                                                  <span className="bg-green-1600/10 rounded-full w-6 h-6 flex items-center justify-center">
                                                       <Image
                                                            src="/images/checkgreen-icon.svg"
                                                            alt=""
                                                            width={10}
                                                            height={10}
                                                       />
                                                  </span>
                                                  approved
                                             </p>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                         <div className="bg-white mb-6 border border-solid border-gray-1000 rounded-xl p-6">
                              <div className="flex items-center justify-between border-b border-solid border-gray-1000 pb-4">
                                   <h4 className="text-black-1600 font-inter font-bold text-lg leading-7">Account Status</h4>
                              </div>
                              <div className="p-6 mt-4">
                                   <ul>
                                        <li className="text-gray-1200 mb-4 font-normal text-sm leading-5 flex items-center justify-between">
                                             Status
                                             <span className="px-2.75 h-5.5 inline-flex items-center justify-center rounded-full font-inter border border-solid text-xs font-normal bg-green-1600/10 border-green-1600/20 text-green-1600">Verified</span>
                                        </li>
                                        <li className="text-gray-1200 mb-4 font-normal text-sm leading-5 flex items-center justify-between">
                                             Registered On
                                             <span className="text-black-1600">Mar 15, 2023</span>
                                        </li>
                                        <li className="text-gray-1200 font-normal text-sm leading-5 flex items-center justify-between">
                                             Last Active
                                             <span className="text-black-1600">Jan 20, 2024</span>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                         <div className="bg-white border border-solid border-gray-1000 rounded-xl p-6">
                              <div className="flex items-center justify-between border-b border-solid border-gray-1000 pb-4">
                                   <h4 className="text-black-1600 font-inter font-bold text-lg leading-7">Recent Activity</h4>
                              </div>
                              <div className="p-6 mt-4">
                                   <ul className="relative after:absolute after:content='' after:left-[4.5px] after:top-0 after:bg-gray-1000 after:w-0.5 after:h-[85%]">
                                        <li className="flex items-start gap-8 pb-6 z-10 relative">
                                             <span className="bg-blue-2200 rounded-full flex items-center w-3 h-3"></span>
                                             <div className="">
                                                  <h4 className="text-black-1600 font-inter font-normal text-sm leading-5 mb-1 ">New listing added to Mitte Residences</h4>
                                                  <p className="text-gray-1200 font-inter font-normal text-xs leading-4">Jan 20, 2024</p>
                                             </div>
                                        </li>
                                        <li className="flex items-start gap-8 pb-6 z-10 relative">
                                             <span className="bg-blue-2200 rounded-full flex items-center w-3 h-3"></span>
                                             <div>
                                                  <h4 className="text-black-1600 font-inter font-normal text-sm leading-5 mb-1 ">Payout processed (€4,200)</h4>
                                                  <p className="text-gray-1200 font-inter font-normal text-xs leading-4">Jan 15, 2024</p>
                                             </div>
                                        </li>
                                        <li className="flex items-start gap-8 pb-6 z-10 relative">
                                             <span className="bg-blue-2200 rounded-full flex items-center w-3 h-3"></span>
                                             <div className="">
                                                  <h4 className="text-black-1600 font-inter font-normal text-sm leading-5 mb-1 ">Profile updated by owner</h4>
                                                  <p className="text-gray-1200 font-inter font-normal text-xs leading-4">Jan 10, 2024</p>
                                             </div>
                                        </li>
                                        <li className="flex items-start gap-8 pb-6 z-10 relative">
                                             <span className="bg-blue-2200 rounded-full flex items-center w-3 h-3"></span>
                                             <div className="">
                                                  <h4 className="text-black-1600 font-inter font-normal text-sm leading-5 mb-1 ">New property added: Charlottenburg Flats</h4>
                                                  <p className="text-gray-1200 font-inter font-normal text-xs leading-4">Dec 28, 2023</p>
                                             </div>
                                        </li>
                                        <li className="flex items-start gap-8 pb-6 z-10 relative">
                                             <span className="bg-blue-2200 rounded-full flex items-center w-3 h-3"></span>
                                             <div className="">
                                                  <h4 className="text-black-1600 font-inter font-normal text-sm leading-5 mb-1 ">Payout processed (€8,400)</h4>
                                                  <p className="text-gray-1200 font-inter font-normal text-xs leading-4">Dec 15, 2023</p>
                                             </div>
                                        </li>
                                        <li className="flex items-start gap-8 z-10 relative">
                                             <span className="bg-blue-2200 rounded-full flex items-center w-3 h-3"></span>
                                             <div className="">
                                                  <h4 className="text-black-1600 font-inter font-normal text-sm leading-5 mb-1 ">Verification completed</h4>
                                                  <p className="text-gray-1200 font-inter font-normal text-xs leading-4">Nov 20, 2023</p>
                                             </div>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>


          </div>
     );
}
