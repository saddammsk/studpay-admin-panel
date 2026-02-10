'use client'

import ProfileTabs from "@/app/components/ProfileTabs";;
import Link from "next/link";
import Image from "next/image";

export default function page() {
     return (
          <div className="">
               <div className="flex md:flex-row flex-col md:items-center items-start gap-4">
                    <Link href="/" className="flex items-center gap-2 py-1.5 px-3 bg-white rounded-md border border-gray1600 text-sm font-normal leading-5 font-segoe text-black13"><img src="/images/left-arrow3.svg" alt="" /> Back to Search</Link>
                    <div className="flex items-center sm:gap-4 gap-2.5">
                         <div className="flex items-center sm:gap-4 gap-2.5">
                              <img src="/images/profile-img.png" alt="" />
                              <div>
                                   <h6 className="sm:text-2xl text-xl font-segoe font-normal leading-8 text-black-1200">Sarah Johnson</h6>
                                   <span className="block font-segoe font-normal leading-6 sm:text-base text-sm text-gray-1200">sarah.johnson@email.com • ID: 2345234</span>
                              </div>
                         </div>
                         <div className="font-segoe font-normal leading-5 sm:text-[13.78px] text-xs text-green-1100 py-1 px-3 bg-green-1200 rounded-full">verified</div>
                    </div>
               </div>
               <ProfileTabs />
               <div className="mt-2 grid grid-cols-2 gap-6">
                    <div className="bg-white border border-solid border-gray-1000 rounded-lg">
                         <div className="p-6.25">
                              <h4 className="text-black13 justify-center font-segoe font-normal text-2xl leading-6 flex items-center gap-2">
                                   <Image
                                        src="../images/wallet-black.svg"
                                        width='20'
                                        height='20'
                                        alt=""
                                   />
                                   Student Wallet
                              </h4>
                         </div>
                         <div className="px-6 pb-6">
                              <ul>
                                   <li className="flex items-center justify-between mb-4">
                                        <p className="text-gray-1200 text-sm font-normal font-segoe leading-4">Balance</p>
                                        <span className="font-normal text-sm font-segoe leading-4 block text-black13">$2,450.75</span>
                                   </li>
                                   <li className="flex items-center justify-between mb-4">
                                        <p className="text-gray-1200 text-sm font-normal font-segoe leading-4">Wallet ID</p>
                                        <span className="font-normal text-sm font-segoe leading-4 block text-black13">STUW_345234</span>
                                   </li>
                                     <li className="flex items-center justify-between mb-4">
                                        <p className="text-gray-1200 text-sm font-normal font-segoe leading-4">Status</p>
                                        <span className="px-2 h-6 inline-flex items-center justify-center rounded-full font-segoe text-[11.63px] font-normal leading-4 bg-green-1200 text-green-1100">Active</span>
                                   </li>
                              </ul>
                              <Link href={"#"} className="flex items-center justify-center text-black13 font-segoe font-normal text-[13.89px] leading-5 border border-solid border-gray1600 rounded-md h-10 hover:bg-gray-1600 transition-all duration-500 ease-in-out">Manage Wallet</Link>
                         </div>
                    </div>
                    <div className="bg-white border border-solid border-gray-1000 rounded-lg">
                         <div className="p-6.25">
                              <h4 className="text-black13 justify-center font-segoe font-normal text-2xl leading-6 flex items-center gap-2">
                                   <Image
                                        src="../images/sheild-block.svg"
                                        width='20'
                                        height='20'
                                        alt=""
                                   />
                                   Blocked AVI Account
                              </h4>
                         </div>
                         <div className="px-6 pb-6">
                              <ul>
                                   <li className="flex items-center justify-between mb-4">
                                        <p className="text-gray-1200 text-sm font-normal font-segoe leading-4">Blocked Amount</p>
                                        <span className="font-normal text-lg font-segoe leading-7 block text-red-1200">$15,000.00</span>
                                   </li>
                                   <li className="flex items-center justify-between mb-4">
                                        <p className="text-gray-1200 text-sm font-normal font-segoe leading-5">Account ID</p>
                                        <span className="font-normal text-sm font-segoe leading-5 block text-black13">STUW_345234</span>
                                   </li>
                                     <li className="flex items-center justify-between mb-4">
                                        <p className="text-gray-1200 text-sm font-normal font-segoe leading-5">Release Date</p>
                                        <span className="font-normal text-sm font-segoe leading-5 block text-black13">March 15, 2025</span>
                                   </li>
                              </ul>
                              <Link href={"#"} className="flex items-center justify-center text-black13 font-segoe font-normal text-[13.89px] leading-5 border border-solid border-gray1600 rounded-md h-10 hover:bg-gray-1600 transition-all duration-500 ease-in-out">View Details</Link>
                         </div>
                    </div>
                    <div className="bg-white border border-solid border-gray-1000 rounded-lg">
                         <div className="p-6.25">
                              <h4 className="text-black13 justify-center font-segoe font-normal text-2xl leading-6 flex items-center gap-2">
                                   <Image
                                        src="../images/card-black.svg"
                                        width='20'
                                        height='20'
                                        alt=""
                                   />
                                   Crypto Transfers
                              </h4>
                         </div>
                         <div className="px-6 pb-6">
                              <ul>
                                   <li className="flex items-center justify-between mb-4">
                                        <p className="text-gray-1200 text-sm font-normal font-segoe leading-4">Total Transfers</p>
                                        <span className="font-normal text-lg font-segoe leading-7 block text-black13">8</span>
                                   </li>
                                   <li className="flex items-center justify-between mb-4">
                                        <p className="text-gray-1200 text-sm font-normal font-segoe leading-5">Volume (USD)</p>
                                        <span className="font-normal text-sm font-segoe leading-5 block text-black13">$8,450.00</span>
                                   </li>
                                     <li className="flex items-center justify-between mb-4">
                                        <p className="text-gray-1200 text-sm font-normal font-segoe leading-5">Last Transfer</p>
                                        <span className="font-normal text-sm font-segoe leading-5 block text-black13">Dec 10, 2024</span>
                                   </li>
                              </ul>
                              <Link href={"#"} className="flex items-center justify-center text-black13 font-segoe font-normal text-[13.89px] leading-5 border border-solid border-gray1600 rounded-md h-10 hover:bg-gray-1600 transition-all duration-500 ease-in-out">View History</Link>
                         </div>
                    </div>
               </div>
          </div>
     );
}
