'use client'

import Link from "next/link";
import Image from "next/image";
import PropertyUnitListingTable from "@/app/components/PropertyUnitListingTable";


export default function propertylisting() {


     return (
          <div className="font-inter">
               <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-6">
                    <div className="bg-white border border-solid border-gray-1000 rounded-xl shadow-9xl p-5 flex items-center justify-between">
                         <div className="">
                              <span className="text-gray-1200 text-sm font-normal leading-5 block mb-2">Total Units</span>
                              <h2 className="text-black-1600 text-2xl font-bold leading-8">24</h2>
                         </div>
                         <span className="rounded-xl bg-blue-2200/10 w-12 h-12 flex items-center justify-center">
                              <Image
                                   src="/images/home-icon4.svg"
                                   alt=""
                                   width={24}
                                   height={24}
                              />
                         </span>
                    </div>
                    <div className="bg-white border border-solid border-gray-1000 rounded-xl shadow-9xl p-5 flex items-center justify-between">
                         <div className="">
                              <span className="text-gray-1200 text-sm font-normal leading-5 block mb-2">Occupancy Rate</span>
                              <h2 className="text-black-1600 text-2xl font-bold leading-8">87.5%</h2>
                         </div>
                         <span className="rounded-xl bg-green-1600/10 w-12 h-12 flex items-center justify-center">
                              <Image
                                   src="/images/rate-arrow.svg"
                                   alt=""
                                   width={24}
                                   height={24}
                              />
                         </span>
                    </div>
                    <div className="bg-white border border-solid border-gray-1000 rounded-xl shadow-9xl p-5 flex items-center justify-between">
                         <div className="">
                              <span className="text-gray-1200 text-sm font-normal leading-5 block mb-2">Monthly Revenue</span>
                              <h2 className="text-black-1600 text-2xl font-bold leading-8">€18,900</h2>
                         </div>
                         <span className="rounded-xl bg-skyblue23/10 w-12 h-12 flex items-center justify-center">
                              <Image
                                   src="/images/doller-icon.svg"
                                   alt=""
                                   width={24}
                                   height={24}
                              />
                         </span>
                    </div>
                    <div className="bg-white border border-solid border-gray-1000 rounded-xl shadow-9xl p-5 flex items-center justify-between">
                         <div className="">
                              <span className="text-gray-1200 text-sm font-normal leading-5 block mb-2">Available Units</span>
                              <h2 className="text-black-1600 text-2xl font-bold leading-8">3</h2>
                         </div>
                         <span className="rounded-xl bg-yellow-1100/10 w-12 h-12 flex items-center justify-center">
                              <Image
                                   src="/images/user-group.svg"
                                   alt=""
                                   width={24}
                                   height={24}
                              />
                         </span>
                    </div>
               </div>
               <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="bg-white  border border-solid border-gray-3600 rounded-[14px] shadow-10xl p-6">
                         <div className="flex items-center justify-between border-b border-solid border-gray-1000">
                              <h4 className="text-black-1600 font-inter font-bold text-lg leading-7 pb-4">Property Summary</h4>
                              <Image
                                   src="/images/building-icon2.svg"
                                   alt=""
                                   width={20}
                                   height={20}
                              />
                         </div>
                         <div className="pt-4">
                              <div className="max-w-140 w-full grid grid-cols-2 gap-y-4">
                                   <div className="">
                                        <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Property Name</span>
                                        <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">Mitte Residences</h4>
                                   </div>
                                   <div className="">
                                        <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Property Typee</span>
                                        <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">Student Housing Complex</h4>
                                   </div>
                                   <div className="col-span-2">
                                        <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Address</span>
                                        <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">Friedrichstraße 123, 10117 Berlin, Germany</h4>
                                   </div>
                                   <div className="">
                                        <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Total Units</span>
                                        <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">24</h4>
                                   </div>
                                   <div className="">
                                        <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Available</span>
                                        <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">3</h4>
                                   </div>
                                   <div className="">
                                        <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Occupied</span>
                                        <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">19</h4>
                                   </div>
                                   <div className="">
                                        <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Reserved</span>
                                        <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">2</h4>
                                   </div>
                                   <div className="">
                                        <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Created On</span>
                                        <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">Oct 15, 2023</h4>
                                   </div>
                                   <div className="">
                                        <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Last Updated</span>
                                        <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">Jan 18, 2024</h4>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="bg-white border border-solid border-gray-3600 rounded-[14px] shadow-10xl p-6">
                         <div className="flex items-center justify-between border-b border-solid border-gray-1000">
                              <h4 className="text-black-1600 font-inter font-bold text-lg leading-7 pb-4">Owner Information</h4>
                              <Image
                                   src="/images/user-icon2.svg"
                                   alt=""
                                   width={20}
                                   height={20}
                              />
                         </div>
                         <div className="pt-4">
                              <div className="max-w-140 w-full grid grid-cols-2 gap-y-4 mb-4">
                                   <div className="col-span-2">
                                        <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Company Name</span>
                                        <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">Berlin Student Housing GmbH</h4>
                                   </div>
                                   <div className="">
                                        <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Contact Person</span>
                                        <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">Hans Müller</h4>
                                   </div>
                                   <div className="">
                                        <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Verification</span>
                                        <div className="text-green-1600 font-normal text-xs bg-green-1600/10 border border-solid border-green-1600/20 rounded-full h-5.5 px-2.5 inline-flex items-center">Verified</div>
                                   </div>
                                   <div className="">
                                        <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Email</span>
                                        <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">h.mueller@bsh-berlin.de</h4>
                                   </div>
                                   <div className="">
                                        <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Phone</span>
                                        <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">+49 30 1234567</h4>
                                   </div>

                              </div>
                              <Link href={"#"} className="text-sm font-normal leading-5 text-black-1600 h-10 px-3 flex items-center justify-center gap-2 bg-gray-1500 border border-gray-3600 transition-all duration-500 ease-in-out hover:bg-gray-1600 rounded-[10px]">
                                   <Image
                                        src="/images/export-icon2.svg"
                                        alt=""
                                        width={20}
                                        height={20}
                                   />
                                   View Owner Profile
                              </Link>
                         </div>
                    </div>
               </div>
               <div className="bg-white mt-6 border border-solid border-gray-3600 rounded-[14px] shadow-10xl p-6">
                    <div className="flex items-center justify-between border-b border-solid border-gray-1000">
                         <h4 className="text-black-1600 font-inter font-bold text-lg leading-7 pb-4">Financial Overview</h4>
                         <Image
                              src="/images/dollar-icon.svg"
                              alt=""
                              width={20}
                              height={20}
                         />
                    </div>
                    <div className="pt-4">
                         <div className="grid lg:grid-cols-5 grid-cols-2 gap-6">
                              <div className="">
                                   <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Total Monthly Revenue</span>
                                   <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">€18,900</h4>
                              </div>
                              <div className="">
                                   <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Average Rent</span>
                                   <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">€995</h4>
                              </div>
                              <div className="">
                                   <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Occupancy Rate</span>
                                   <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">87.5%</h4>
                              </div>
                              <div className="">
                                   <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Pending Deposits</span>
                                   <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">€2,100</h4>
                              </div>
                              <div className="">
                                   <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Total Deposits Held</span>
                                   <h4 className="text-black-1600 font-inter font-normal text-sm leading-5">€19,950</h4>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="mt-6">
                    <PropertyUnitListingTable />
               </div>

               <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-6 gap-4 mt-7 max-w-283 w-full mx-auto">
                    <div className="bg-white border border-solid border-gray-1000 rounded-xl p-6">
                         <div className="flex items-center justify-between border-b border-solid border-gray-1000">
                              <h4 className="text-black-1600 font-inter font-bold text-lg leading-7 pb-4">Verification</h4>
                              <Image
                                   src="/images/sheild-block.svg"
                                   alt=""
                                   width={20}
                                   height={20}
                              />
                         </div>
                         <ul className="mt-4">
                              <li className="text-black-1600 font-inter font-normal text-sm leading-5 border-b border-solid border-gray-1000 py-3 flex items-center justify-between">
                                   Property Ownership Documents
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
                                   Building Permits & Licenses
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
                                   Safety & Fire Compliance
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
                                   Insurance Coverage
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
                                   Tax Registration
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
                    <div className="bg-white border border-solid border-gray-1000 rounded-xl p-6">
                         <div className="flex items-center justify-between border-b border-solid border-gray-1000">
                              <h4 className="text-black-1600 font-inter font-bold text-lg leading-7 pb-4">Admin Notes</h4>
                              <Image
                                   src="/images/file-black.svg"
                                   alt=""
                                   width={20}
                                   height={20}
                              />
                         </div>
                         <div className="mt-4">
                              <div className="bg-gray-1600 mb-4 rounded-xl p-3">
                                   <h4 className="text-black-1600 font-inter font-normal text-sm leading-6 mb-2">Property inspection completed. All safety
                                        requirements met.</h4>
                                   <p className="text-gray-1200 font-inter font-normal text-xs leading-4">Admin • Oct 26, 2023 at 02:30 PM</p>
                              </div>
                              <div className="bg-gray-1600 mb-4 rounded-xl p-3">
                                   <h4 className="text-black-1600 font-inter font-normal text-sm leading-6 mb-2">Owner requested priority listing for Unit 5A.</h4>
                                   <p className="text-gray-1200 font-inter font-normal text-xs leading-4">Support • Jan 10, 2024 at 09:15 AM</p>
                              </div>
                              <div className="">
                                   <textarea className="text-gray-1200 placeholder:text-gray-1200 font-inter font-normal text-sm leading-5 bg-gray-1800 border border-solid border-gray-1000 py-2.5 px-3.5 h-20 rounded-xl w-full" placeholder="Add a note..."></textarea>
                                   <Link href={"#"} className="text-sm mt-3 font-normal leading-5 text-white h-9 px-3 flex items-center justify-center gap-2 bg-blue-2200 border border-blue-2200 transition-all duration-500 ease-in-out hover:bg-blue-2200/90 rounded-[10px]">
                                        <Image
                                             src="/images/send-icon.svg"
                                             alt=""
                                             width={16}
                                             height={16}
                                        />
                                        Add Note
                                   </Link>
                              </div>
                         </div>
                    </div>
                    <div className="bg-white border border-solid border-gray-1000 rounded-xl p-6">
                         <div className="flex items-center justify-between border-b border-solid border-gray-1000">
                              <h4 className="text-black-1600 font-inter font-bold text-lg leading-7 pb-4">Activity Timeline</h4>
                              <Image
                                   src="/images/clock-gray.svg"
                                   alt=""
                                   width={20}
                                   height={20}
                              />
                         </div>
                         <div className="mt-4">
                              <ul className="relative after:absolute after:content='' after:left-[4.5px] after:top-0 after:bg-gray-1000 after:w-0.5 after:h-[78%]">
                                   <li className="flex items-start gap-8 pb-6 z-10 relative">
                                        <span className="bg-blue-2200 rounded-full flex items-center w-3 h-3"></span>
                                        <div className="">
                                             <h4 className="text-black-1600 font-inter font-normal text-sm leading-5 mb-1 ">Property registered</h4>
                                             <p className="text-gray-1200 font-inter font-normal text-xs leading-4">Oct 15, 2023 at 10:30 AM</p>
                                        </div>
                                   </li>
                                   <li className="flex items-start gap-8 pb-6 z-10 relative">
                                        <span className="bg-blue-2200 rounded-full flex items-center w-3 h-3"></span>
                                        <div className="">
                                             <h4 className="text-black-1600 font-inter font-normal text-sm leading-5 mb-1 ">Ownership documents verified</h4>
                                             <p className="text-gray-1200 font-inter font-normal text-xs leading-4">Oct 18, 2023 at 03:15 PM</p>
                                        </div>
                                   </li>
                                   <li className="flex items-start gap-8 pb-6 z-10 relative">
                                        <span className="bg-blue-2200 rounded-full flex items-center w-3 h-3"></span>
                                        <div className="">
                                             <h4 className="text-black-1600 font-inter font-normal text-sm leading-5 mb-1 ">First listing created (Unit 1A)</h4>
                                             <p className="text-gray-1200 font-inter font-normal text-xs leading-4">Oct 20, 2023 at 09:00 AM</p>
                                        </div>
                                   </li>
                                   <li className="flex items-start gap-8 pb-6 z-10 relative">
                                        <span className="bg-blue-2200 rounded-full flex items-center w-3 h-3"></span>
                                        <div className="">
                                             <h4 className="text-black-1600 font-inter font-normal text-sm leading-5 mb-1 ">24 units added</h4>
                                             <p className="text-gray-1200 font-inter font-normal text-xs leading-4">Oct 25, 2023 at 11:45 AM</p>
                                        </div>
                                   </li>
                                   <li className="flex items-start gap-8 pb-6 z-10 relative">
                                        <span className="bg-blue-2200 rounded-full flex items-center w-3 h-3"></span>
                                        <div className="">
                                             <h4 className="text-black-1600 font-inter font-normal text-sm leading-5 mb-1 ">Property approved by admin</h4>
                                             <p className="text-gray-1200 font-inter font-normal text-xs leading-4">Oct 26, 2023 at 02:30 PM</p>
                                        </div>
                                   </li>
                                   <li className="flex items-start gap-8 pb-6 z-10 relative">
                                        <span className="bg-blue-2200 rounded-full flex items-center w-3 h-3"></span>
                                        <div className="">
                                             <h4 className="text-black-1600 font-inter font-normal text-sm leading-5 mb-1 ">First booking confirmed</h4>
                                             <p className="text-gray-1200 font-inter font-normal text-xs leading-4">Nov 1, 2023 at 10:00 AM</p>
                                        </div>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </div>
     );
}
