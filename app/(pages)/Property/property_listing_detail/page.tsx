'use client'

import Link from "next/link";
import Image from "next/image";


export default function FinanceAnalytics() {


     return (
          <div className="font-inter">
               <div className="bg-white flex md:flex-row flex-col md:items-center justify-between border border-solid border-gray-3600 rounded-[14px] shadow-10xl xl:pt-5 xl:pb-8 mb-4 xl:px-5.75 p-4">
                    <Link href={""} className="py-3 px-4 rounded-lg hover:bg-gray-1600 text-blue-1300 font-inter font-normal text-sm leading-5 inline-flex items-center gap-2">
                         <span className="w-4 h-4 flex items-center justify-center">
                              <Image
                                   src="/images/left-arrow.svg"
                                   alt=""
                                   width={16}
                                   height={16}
                              />
                         </span>
                         Back to Listings
                    </Link>
                    <ul className="md:flex grid sm:grid-cols-2 grid-cols-1 items-center gap-3">
                         <li>
                              <Link href="/" className='text-sm justify-center font-normal leading-5 text-blue-1300 py-2 px-4 flex items-center gap-4 bg-gray-1500 border border-gray-3600 rounded-lg'>
                                   <Image
                                        src="/images/building-icon2.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                   />
                                   View Property Details</Link>
                         </li>
                         <li>
                              <Link href="/" className='text-sm  justify-center font-normal leading-5 text-blue-1300 py-2 px-4 flex items-center gap-4 bg-gray-1500 border border-gray-3600 rounded-lg'>
                                   <Image
                                        src="/images/user-icon3.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                   />
                                   View Owner Profile</Link>
                         </li>
                    </ul>
               </div>
               <div className="bg-white flex md:flex-row flex-col md:gap-0 gap-4 md:items-center justify-between border border-solid border-gray-3600 rounded-[14px] shadow-10xl xl:px-12 xl:pt-8 xl:pb-6 p-4">
                    <h4 className="text-blue-1300 gap-4 flex items-center font-inter font-bold xl:text-2xl text-base leading-8">Listing Details <span className="text-blue-2200 font-normal text-xs bg-blue-2200/10 border border-solid border-blue-2200/20 rounded-full h-5.5 px-2.5 inline-flex items-center">Booked</span></h4>
                    <ul className="md:flex grid xl:grid-cols-3 grid-cols-1 items-center gap-3">
                         <li>
                              <Link href="/" className='text-sm font-normal leading-5 text-blue-1300 py-1.75 px-3 flex items-center justify-center gap-2 bg-gray-1500 border border-gray-3600 transition-all duration-500 ease-in-out hover:bg-gray-1600 rounded-lg'>
                                   <Image
                                        src="/images/Pause.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                        className="brightness-0"
                                   />
                                   Suspend Listing
                              </Link>
                         </li>
                         <li>
                              <Link href="/" className='text-sm font-normal leading-5 text-blue-1300 py-1.75 px-3 flex items-center justify-center gap-2 bg-gray-1500 border border-gray-3600 transition-all duration-500 ease-in-out hover:bg-gray-1600 rounded-lg'>
                                   <Image
                                        src="/images/flag-icon.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                   />
                                   Flag Listing
                              </Link>
                         </li>
                         <li>
                              <Link href="/" className='text-sm font-normal leading-5 text-white py-1.75 px-3 flex items-center justify-center gap-2 bg-red-1300 border border-red-1300 hover:bg-red-1300/90 hover:border-red-1300/90 transition-all duration-500 ease-in-out rounded-lg'>
                                   <Image
                                        src="/images/delet-icon1.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                        className="brightness-1000"
                                   />
                                   Delete Listing
                              </Link>
                         </li>
                    </ul>
               </div>
               <div className="py-8 2xl:px-6 xl:mt-4">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                         <div className="bg-white  border border-solid border-gray-3600 rounded-[14px] shadow-10xl p-6">
                              <div className="flex items-center justify-between border-b border-solid border-gray-1000">
                                   <h4 className="text-blue-1300 font-inter font-bold text-lg leading-7 pb-4">Listing Summary</h4>
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
                                             <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Unit Name</span>
                                             <h4 className="text-blue-1300 font-inter font-normal text-sm leading-5">Unit 4B</h4>
                                        </div>
                                        <div className="">
                                             <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Unit Type</span>
                                             <h4 className="text-blue-1300 font-inter font-normal text-sm leading-5">Studio</h4>
                                        </div>
                                        <div className="">
                                             <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Monthly Rent</span>
                                             <h4 className="text-blue-1300 font-inter font-normal text-sm leading-5">€1,050</h4>
                                        </div>
                                        <div className="">
                                             <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Deposit Amount</span>
                                             <h4 className="text-blue-1300 font-inter font-normal text-sm leading-5">€1,050</h4>
                                        </div>
                                        <div className="">
                                             <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Availability</span>
                                             <div className="text-blue-2200 font-normal text-xs bg-blue-2200/10 border border-solid border-blue-2200/20 rounded-full h-5.5 px-2.5 inline-flex items-center">Booked</div>
                                        </div>
                                        <div className="">
                                             <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Created On</span>
                                             <h4 className="text-blue-1300 font-inter font-normal text-sm leading-5">Jan 10, 2024</h4>
                                        </div>
                                        <div className="">
                                             <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Listing Source</span>
                                             <h4 className="text-blue-1300 font-inter font-normal text-sm leading-5">Web Portal</h4>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="bg-white border border-solid border-gray-3600 rounded-[14px] shadow-10xl p-6">
                              <div className="flex items-center justify-between border-b border-solid border-gray-1000">
                                   <h4 className="text-blue-1300 font-inter font-bold text-lg leading-7 pb-4">Tenant Information</h4>
                                   <Image
                                        src="/images/user-icon.svg"
                                        alt=""
                                        width={20}
                                        height={20}
                                   />
                              </div>
                              <div className="pt-4">
                                   <div className="max-w-140 w-full grid grid-cols-2 gap-y-4 mb-4">
                                        <div className="">
                                             <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Tenant Name</span>
                                             <h4 className="text-blue-1300 font-inter font-normal text-sm leading-5">Max Schmidt</h4>
                                        </div>
                                        <div className="">
                                             <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Nationality</span>
                                             <h4 className="text-blue-1300 font-inter font-normal text-sm leading-5">Germany</h4>
                                        </div>
                                        <div className="">
                                             <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Booking Period</span>
                                             <h4 className="text-blue-1300 font-inter font-normal text-sm leading-5">Feb 1, 2024 → Jul 31, 2024</h4>
                                        </div>
                                        <div className="">
                                        </div>
                                        <div className="">
                                             <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Deposit Status</span>
                                             <div className="text-blue-2200 font-normal text-xs bg-blue-2200/10 border border-solid border-blue-2200/20 rounded-full h-5.5 px-2.5 inline-flex items-center">Held</div>
                                        </div>
                                        <div className="">
                                             <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Verification</span>
                                             <div className="text-green-1600 font-normal text-xs bg-green-1600/10 border border-solid border-green-1600/20 rounded-full h-5.5 px-2.5 inline-flex items-center">Verified</div>
                                        </div>
                                   </div>
                                   <Link href={"#"} className="text-sm font-normal leading-5 text-blue-1300 h-10 px-3 flex items-center justify-center gap-2 bg-gray-1500 border border-gray-3600 transition-all duration-500 ease-in-out hover:bg-gray-1600 rounded-[10px]">
                                        <Image
                                             src="/images/export-icon2.svg"
                                             alt=""
                                             width={20}
                                             height={20}
                                        />
                                        View Tenant Profile
                                   </Link>
                              </div>
                         </div>
                    </div>
                    <div className="bg-white mt-6 border border-solid border-gray-3600 rounded-[14px] shadow-10xl p-6">
                         <div className="flex items-center justify-between border-b border-solid border-gray-1000">
                              <h4 className="text-blue-1300 font-inter font-bold text-lg leading-7 pb-4">Deposit Overview</h4>
                              <Image
                                   src="/images/card-gray.svg"
                                   alt=""
                                   width={20}
                                   height={20}
                              />
                         </div>
                         <div className="pt-4">
                              <div className="grid sm:grid-cols-4 grid-cols-2 gap-6 pb-6">
                                   <div className="">
                                        <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Deposit Amount</span>
                                        <h4 className="text-blue-1300 font-inter font-normal text-sm leading-5">€1,050</h4>
                                   </div>
                                   <div className="">
                                        <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Deposit Status</span>
                                        <div className="text-blue-2200 font-normal text-xs bg-blue-2200/10 border border-solid border-blue-2200/20 rounded-full h-5.5 px-2.5 inline-flex items-center">Held</div>
                                   </div>
                                   <div className="">
                                        <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Payment Date</span>
                                        <h4 className="text-blue-1300 font-inter font-normal text-sm leading-5">Jan 14, 2024</h4>
                                   </div>
                                   <div className="">
                                        <span className="text-gray-1200 font-inter font-normal text-xs leading-4 mb-1 tracking-[0.3px] block">Payment Method</span>
                                        <h4 className="text-blue-1300 font-inter font-normal text-sm leading-5">Bank Transfer</h4>
                                   </div>
                              </div>
                              <div className="pt-4 border-t border-solid border-gray-1000">
                                   <ul className="flex md:flex-row flex-col md:items-center gap-3">
                                        <li>
                                             <Link href={"#"} className="text-sm font-normal leading-5 text-blue-1300 h-10 px-3 flex items-center justify-center gap-2 bg-gray-1500 border border-gray-3600 transition-all duration-500 ease-in-out hover:bg-gray-1600 rounded-[10px]">
                                                  <Image
                                                       src="/images/file-black.svg"
                                                       alt=""
                                                       width={20}
                                                       height={20}
                                                  />
                                                  View Deposit Transactions
                                             </Link>
                                        </li>
                                        <li>
                                             <Link href={"#"} className="text-sm font-normal leading-5 text-white h-10 px-3 flex items-center justify-center gap-2 bg-blue-2200 border border-blue-2200 transition-all duration-500 ease-in-out hover:bg-blue-2200/90 rounded-[10px]">
                                                  Release Deposit
                                             </Link>
                                        </li>
                                        <li>
                                             <Link href={"#"} className="text-sm font-normal leading-5 text-blue-1300 h-10 px-3 flex items-center justify-center gap-2 bg-gray-1600 border border-gray-1600 transition-all duration-500 ease-in-out hover:bg-gray-1600 rounded-[10px]">
                                                  Refund Deposit
                                             </Link>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
                    <div className="bg-white mt-6 border border-solid border-gray-3600 rounded-[14px] shadow-10xl p-6">
                         <div className="flex items-center justify-between border-b border-solid border-gray-1000">
                              <h4 className="text-blue-1300 font-inter font-bold text-lg leading-7 pb-4">Listing Content</h4>
                              <Image
                                   src="/images/image-icon.svg"
                                   alt=""
                                   width={20}
                                   height={20}
                              />
                         </div>
                         <div className="pt-4">
                              <div className="">
                                   <h5 className="text-gray-1200 font-normal font-inter text-sm leading-5 mb-0.5">Images</h5>
                                   <ul className="grid xl:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-3">
                                        <li>
                                             <Link href={"#"}>
                                                  <img src="/images/listing-img.jpg" alt="" className="w-full rounded-xl border border-solid border-gray-1000" />
                                             </Link>
                                        </li>
                                        <li>
                                             <Link href={"#"}>
                                                  <img src="/images/listing-img.jpg" alt="" className="w-full rounded-xl border border-solid border-gray-1000" />
                                             </Link>
                                        </li>
                                        <li>
                                             <Link href={"#"}>
                                                  <img src="/images/listing-img.jpg" alt="" className="w-full rounded-xl border border-solid border-gray-1000" />
                                             </Link>
                                        </li>
                                        <li>
                                             <Link href={"#"}>
                                                  <img src="/images/listing-img.jpg" alt="" className="w-full rounded-xl border border-solid border-gray-1000" />
                                             </Link>
                                        </li>
                                        <li>
                                             <Link href={"#"}>
                                                  <img src="/images/listing-img.jpg" alt="" className="w-full rounded-xl border border-solid border-gray-1000" />
                                             </Link>
                                        </li>
                                        <li>
                                             <Link href={"#"}>
                                                  <img src="/images/listing-img.jpg" alt="" className="w-full rounded-xl border border-solid border-gray-1000" />
                                             </Link>
                                        </li>
                                   </ul>
                              </div>
                              <div className="">
                                   <h5 className="text-gray-1200 font-normal font-inter text-sm leading-5 mb-0.5">Video</h5>
                                   <ul className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
                                        <li>
                                             <Link href={"#"} className="flex items-center">
                                                  <img src="/images/video-img.jpg" alt="" className="w-full rounded-xl border border-solid border-gray-1000" />
                                             </Link>
                                        </li>
                                   </ul>
                              </div>
                              <div className="mt-6">
                                   <h4 className="text-gray-1200 font-inter font-normal text-sm leading-5 mb-3">Description</h4>
                                   <p className="text-blue-1300 max-w-307.5 w-full font-inter font-normal text-sm leading-[22.8px]">Bright and modern studio apartment located in the heart of Berlin Mitte. This fully furnished unit features high ceilings, large windows with plenty of natural light, and a fully equipped
                                        kitchenette. Perfect for students or young professionals looking for a comfortable living space close to public transportation and local amenities.</p>
                              </div>
                              <div className="mt-6">
                                   <h4 className="text-gray-1200 font-inter font-normal text-sm leading-5 mb-3">Amenities</h4>
                                   <ul className="flex xl:flex-nowrap flex-wrap items-center gap-3">
                                        <li>
                                             <Link href={"#"} className="text-blue-1300 gap-2 bg-gray-1600 font-inter font-normal text-sm leading-5 inline-flex items-center justify-center px-3 h-9 rounded-xl">
                                                  <span className="flex items-center justify-center">
                                                       <Image
                                                            src="/images/wifi-icon.svg"
                                                            alt=""
                                                            width={16}
                                                            height={16}
                                                       />
                                                  </span>
                                                  High-Speed WiFi
                                             </Link>
                                        </li>
                                        <li>
                                             <Link href={"#"} className="text-blue-1300 gap-2 bg-gray-1600 font-inter font-normal text-sm leading-5 inline-flex items-center justify-center px-3 h-9 rounded-xl">
                                                  <span className="flex items-center justify-center">
                                                       <Image
                                                            src="/images/air-conditioning.svg"
                                                            alt=""
                                                            width={16}
                                                            height={16}
                                                       />
                                                  </span>
                                                  Air Conditioning
                                             </Link>
                                        </li>
                                        <li>
                                             <Link href={"#"} className="text-blue-1300 gap-2 bg-gray-1600 font-inter font-normal text-sm leading-5 inline-flex items-center justify-center px-3 h-9 rounded-xl">
                                                  <span className="flex items-center justify-center">
                                                       <Image
                                                            src="/images/equipped-kitchen.svg"
                                                            alt=""
                                                            width={16}
                                                            height={16}
                                                       />
                                                  </span>
                                                  Fully Equipped Kitchen
                                             </Link>
                                        </li>
                                        <li>
                                             <Link href={"#"} className="text-blue-1300 gap-2 bg-gray-1600 font-inter font-normal text-sm leading-5 inline-flex items-center justify-center px-3 h-9 rounded-xl">
                                                  <span className="flex items-center justify-center">
                                                       <Image
                                                            src="/images/tv.svg"
                                                            alt=""
                                                            width={16}
                                                            height={16}
                                                       />
                                                  </span>
                                                  Smart TV
                                             </Link>
                                        </li>
                                        <li>
                                             <Link href={"#"} className="text-blue-1300 gap-2 bg-gray-1600 font-inter font-normal text-sm leading-5 inline-flex items-center justify-center px-3 h-9 rounded-xl">
                                                  <span className="flex items-center justify-center">
                                                       <Image
                                                            src="/images/car-icon.svg"
                                                            alt=""
                                                            width={16}
                                                            height={16}
                                                       />
                                                  </span>
                                                  Parking Available
                                             </Link>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-6 gap-4 mt-7 max-w-283 w-full mx-auto">
                         <div className="bg-white border border-solid border-gray-1000 rounded-xl p-6">
                              <div className="flex items-center justify-between border-b border-solid border-gray-1000">
                                   <h4 className="text-blue-1300 font-inter font-bold text-lg leading-7 pb-4">Verification</h4>
                                   <Image
                                        src="/images/sheild-block.svg"
                                        alt=""
                                        width={20}
                                        height={20}
                                   />
                              </div>
                              <ul className="mt-4">
                                   <li className="text-blue-1300 font-inter font-normal text-sm leading-5 border-b border-solid border-gray-1000 py-3 flex items-center justify-between">
                                        Property Ownership Proof
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
                                   <li className="text-blue-1300 font-inter font-normal text-sm leading-5 border-b border-solid border-gray-1000 py-3 flex items-center justify-between">
                                        Property Ownership Proof
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
                                   <li className="text-blue-1300 font-inter font-normal text-sm leading-5 border-b border-solid border-gray-1000 py-3 flex items-center justify-between">
                                        Property Ownership Proof
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
                                   <li className="text-blue-1300 font-inter font-normal text-sm leading-5 py-3 flex items-center justify-between">
                                        Property Ownership Proof
                                        <p className="text-green-1600 flex items-center gap-2 font-inter font-normal text-xs leading-4">
                                             <span className="bg-green-1600/10 rounded-full w-6 h-6 flex items-center justify-center">
                                                  <Image
                                                       src="/images/checkgreen-icon.svg"
                                                       alt=""
                                                       width={10}
                                                       height={10}
                                                  />
                                             </span>
                                             passed
                                        </p>
                                   </li>
                              </ul>
                         </div>
                         <div className="bg-white border border-solid border-gray-1000 rounded-xl p-6">
                              <div className="flex items-center justify-between border-b border-solid border-gray-1000">
                                   <h4 className="text-blue-1300 font-inter font-bold text-lg leading-7 pb-4">Admin Notes</h4>
                                   <Image
                                        src="/images/file-black.svg"
                                        alt=""
                                        width={20}
                                        height={20}
                                   />
                              </div>
                              <div className="mt-4">
                                   <div className="bg-gray-1600 mb-4 rounded-xl p-3">
                                        <h4 className="text-blue-1300 font-inter font-normal text-sm leading-6 mb-2">Verified property documents - all in order.</h4>
                                        <p className="text-gray-1200 font-inter font-normal text-xs leading-4">Admin • Jan 16, 2024 at 11:45 AM</p>
                                   </div>
                                   <div className="bg-gray-1600 mb-4 rounded-xl p-3">
                                        <h4 className="text-blue-1300 font-inter font-normal text-sm leading-6 mb-2">Tenant verification completed successfully.</h4>
                                        <p className="text-gray-1200 font-inter font-normal text-xs leading-4">System • Jan 15, 2024 at 10:30 AM</p>
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
                                   <h4 className="text-blue-1300 font-inter font-bold text-lg leading-7 pb-4">Activity Timeline</h4>
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
                                                  <h4 className="text-blue-1300 font-inter font-normal text-sm leading-5 mb-1 ">Listing created</h4>
                                                  <p className="text-gray-1200 font-inter font-normal text-xs leading-4">Jan 10, 2024 at 09:15 AM</p>
                                             </div>
                                        </li>
                                        <li className="flex items-start gap-8 pb-6 z-10 relative">
                                             <span className="bg-blue-2200 rounded-full flex items-center w-3 h-3"></span>
                                              <div className="">
                                                  <h4 className="text-blue-1300 font-inter font-normal text-sm leading-5 mb-1 ">Deposit received (€1,050)</h4>
                                                  <p className="text-gray-1200 font-inter font-normal text-xs leading-4">Jan 14, 2024 at 02:30 PM</p>
                                             </div>
                                        </li>
                                        <li className="flex items-start gap-8 pb-6 z-10 relative">
                                             <span className="bg-blue-2200 rounded-full flex items-center w-3 h-3"></span>
                                              <div className="">
                                                  <h4 className="text-blue-1300 font-inter font-normal text-sm leading-5 mb-1 ">Booking confirmed</h4>
                                                  <p className="text-gray-1200 font-inter font-normal text-xs leading-4">Jan 15, 2024 at 10:00 AM</p>
                                             </div>
                                        </li>
                                        <li className="flex items-start gap-8 pb-6 z-10 relative">
                                             <span className="bg-blue-2200 rounded-full flex items-center w-3 h-3"></span>
                                              <div className="">
                                                  <h4 className="text-blue-1300 font-inter font-normal text-sm leading-5 mb-1 ">Listing reviewed by admin</h4>
                                                  <p className="text-gray-1200 font-inter font-normal text-xs leading-4">Jan 16, 2024 at 11:45 AM</p>
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
