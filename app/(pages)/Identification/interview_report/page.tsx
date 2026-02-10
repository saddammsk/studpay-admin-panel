'use client'

import ProfileTabs from "@/app/components/ProfileTabs";
import Button from "@/app/components/ui/Button";
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
               <div className="bg-white mt-6 border border-solid border-gray-1000 rounded-lg shadow-4xl md:p-6.25 p-4">
                    <div className="flex md:flex-row flex-col md:items-center items-start md:justify-between md:mb-6 mb-4 md:gap-0 gap-4">
                         <h4 className="text-black13 flex items-center gap-2 font-segoe sm:text-2xl text-xl font-normal leading-6 tracking-[-0.6px]">
                              <Image
                                   src="/images/message-icon.svg"
                                   width='20'
                                   height='20'
                                   alt=""
                                   className="brightness-0"
                              />
                              Interview Reports & Opportunity Tags
                         </h4>
                         <Button
                              iconSrc="/images/plus-icon.svg"
                              label="Add Report"
                              className="text-white font-segoe! text-sm gap-4 h-9 ml-auto px-3! bg-blue-1000 hover:bg-blue800 rounded-md m-0!"
                         />
                    </div>
                    <div className="flex sm:flex-row flex-col-reverse  items-start sm:gap-0 gap-4 justify-between border border-solid border-gray-1000 rounded-lg p-4.25 mb-4 last:mb-0">
                         <div className="">
                              <h4 className="text-black13 font-segoe font-normal text-base leading-5">
                                   Initial Assessment Interview
                              </h4>
                              <p className="text-gray-1700 my-2 font-segoe font-normal text-[13.89px] leading-5">
                                   Excellent candidate with strong academic background. Recommended for premium services.
                              </p>
                              <ul className="flex items-center gap-2">
                                   <li>
                                        <span className="text-green-1100 inline-flex items-center justify-center  font-segoe font-normal text-[11.81px] leading-4.5 bg-green-1200 h-6 rounded-full px-2">High Priority</span>
                                   </li>
                                   <li>
                                        <span className="text-blue-1000  inline-flex items-center justify-center font-segoe font-normal text-[11.81px] leading-4.5 bg-green-1200 h-6 rounded-full px-2">Premium Candidate</span>
                                   </li>
                              </ul>
                         </div>
                         <ul className="flex items-center sm:justify-start justify-end sm:w-auto w-full gap-1">
                              <li>
                                   <Image
                                        src="/images/star-icon.svg"
                                        width='16'
                                        height='16'
                                        alt=""
                                   />
                              </li>
                              <li>
                                   <Image
                                        src="/images/star-icon.svg"
                                        width='16'
                                        height='16'
                                        alt=""
                                   />
                              </li>
                              <li>
                                   <Image
                                        src="/images/star-icon.svg"
                                        width='16'
                                        height='16'
                                        alt=""
                                   />
                              </li>
                              <li>
                                   <Image
                                        src="/images/star-icon.svg"
                                        width='16'
                                        height='16'
                                        alt=""
                                   />
                              </li>
                              <li>
                                   <Image
                                        src="/images/star-icon.svg"
                                        width='16'
                                        height='16'
                                        alt=""
                                   />
                              </li>
                         </ul>
                    </div>
               </div>
          </div>
     );
}
