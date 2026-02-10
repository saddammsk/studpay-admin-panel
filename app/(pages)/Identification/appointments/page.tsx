'use client'

import ProfileTabs from "@/app/components/ProfileTabs";
import Button from "@/app/components/ui/Button";
import Link from "next/link";
import Image from "next/image";


type PaymentStatus = "completed" | "support";

interface Payment {
     id: number;
     schedul: any;
     time: any;
     video: any;
     name: string;
     status: PaymentStatus;
}
const statusConfig = {
     completed: {
          classes: "bg-lightgreen12 text-green12",
     },
     support: {
          classes: "bg-green-1200 text-blue-1000",
     },
} as const;

const payments: Payment[] = [
     {
          id: 1,
          name: "KYC Document Review",
          schedul: { icon: "/images/date-icon.svg", date: "12/20/2024", },
          time: { icon: "/images/clock-gray.svg", dic: "14:00", },
          video: { icon: "/images/video-icon.svg", dic: "video", },
          status: "support",
     },
     {
          id: 2,
          name: "Financial Planning Session",
          schedul: { icon: "/images/date-icon.svg", date: "12/18/2024", },
          time: { icon: "/images/clock-gray.svg", dic: "10:30", },
          video: { icon: "/images/video-icon.svg", dic: "phone", },
          status: "completed",
     },


];


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
                    <div className="flex sm:flex-row flex-col sm:items-center items-start sm:justify-between sm:mb-6 mb-4 sm:gap-0 gap-4">
                         <h4 className="text-black13 flex items-center gap-2 font-segoe! sm:text-2xl text-xl font-normal leading-6 tracking-[-0.6px]">
                              <Image
                                   src="/images/appointment-icon.svg"
                                   width='20'
                                   height='20'
                                   alt=""
                                   className="brightness-0"
                              />
                              Appointment Scheduling
                         </h4>
                         <Button
                              iconSrc="/images/plus-icon.svg"
                              label="Schedule"
                              className="text-white text-[13.45px] gap-4 h-9 ml-auto px-3! bg-blue-1000 hover:bg-blue800 rounded-md m-0!"
                         />
                    </div>
                    {payments.map((item) => (
                         <div key={item.id} className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between border border-solid border-gray-1000 rounded-lg p-4.25 mb-4 last:mb-0">
                              <div className="">
                                   <h4 className="text-black13 font-segoe font-normal text-base leading-5 mb-2">
                                        {item.name}
                                   </h4>
                                   <ul className="flex items-center gap-4">
                                        <li>
                                             <span className="flex items-center text-gray-1200 font-segoe font-normal text-[13.78px] leading-4 gap-2">
                                                  <Image
                                                       src={item.schedul.icon}
                                                       width='12'
                                                       height='12'
                                                       alt=""
                                                  />
                                                  {item.schedul.date}
                                             </span>
                                        </li>
                                        <li>
                                             <span className="flex items-center text-gray-1200 font-segoe font-normal text-[13.78px] leading-4 gap-2">
                                                  <Image
                                                       src={item.time.icon}
                                                       width='12'
                                                       height='12'
                                                       alt=""
                                                  />
                                                  {item.time.dic}
                                             </span>
                                        </li>
                                        <li>
                                             <span className="flex items-center text-gray-1200 font-segoe font-normal text-[13.78px] leading-4 gap-2">
                                                  <Image
                                                       src={item.video.icon}
                                                       width='12'
                                                       height='12'
                                                       alt=""
                                                  />
                                                  {item.video.dic}
                                             </span>
                                        </li>
                                   </ul>
                              </div>
                              <div className="flex items-center gap-2">
                                   <span
                                        className={`px-2 h-6 inline-flex items-center justify-center rounded-full font-segoe text-xs font-normal leading-4 ${statusConfig[item.status].classes}`}
                                   >

                                        {item.status}
                                   </span>
                              </div>
                         </div>
                    ))
                    }
               </div >
          </div >
     );
}
