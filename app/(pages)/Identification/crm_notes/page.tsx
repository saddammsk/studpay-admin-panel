'use client'

import ProfileTabs from "@/app/components/ProfileTabs";
import Button from "@/app/components/ui/Button";
import Link from "next/link";
import Image from "next/image";


type PaymentStatus = "general" | "support";

interface Payment {
     id: number;
     name: string;
     dic: string;
     status: PaymentStatus;
     date: string;
     EditIcon: string;
}
const statusConfig = {
     general: {
          classes: "bg-green-1200 text-blue-1000",
     },
      support: {
          classes: "bg-green-1200 text-blue-1000",
     },
} as const;

const payments: Payment[] = [
     {
          id: 1,
          name: "Admin User",
          dic: "Student contacted regarding visa documentation. All documents approved.",
          status: "general",
          date: "12/15/2024",
          EditIcon: "/images/edit-icon.svg",
     },
     {
          id: 2,
          name: "Support Team",
          dic: "Wallet recharge issue resolved. Student satisfied with service.",
          status: "support",
          date: "12/15/2024",
          EditIcon: "/images/edit-icon.svg",
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
                                   src="/images/message-icon.svg"
                                   width='20'
                                   height='20'
                                   alt=""
                                   className="brightness-0"
                              />
                              CRM Notes & Contact History
                         </h4>
                         <Button
                              iconSrc="/images/plus-icon.svg"
                              label="Add Note"
                              className="text-white text-[13.45px] gap-4 h-9 ml-auto px-3! bg-blue-1000 hover:bg-blue800 rounded-md m-0!"
                         />
                    </div>
                    {payments.map((item) => (
                         <div key={item.id} className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between border border-solid border-gray-1000 rounded-lg p-4.25 mb-4 last:mb-0">
                              <div className="">
                                   <div className="flex items-center gap-2 mb-3.5">
                                        <h4 className="text-black13 font-segoe font-normal text-base leading-5">
                                             {item.name}
                                        </h4>
                                        <span
                                             className={`px-2 h-6 inline-flex items-center justify-center rounded-full font-segoe text-xs font-normal leading-4 ${statusConfig[item.status].classes}`}
                                        >
                                             {item.status}
                                        </span>
                                   </div>
                                   <p className="text-gray-1700 font-segoe font-normal text-[13.89px] leading-5">
                                        {item.dic}
                                   </p>
                              </div>
                              <div className="flex items-center gap-2">
                                   <span className="text-gray-1200 font-segoe font-normal text-[11.81px] leading-4">
                                        {item.date}
                                   </span>
                                   <Link href={"#"} className="flex items-center justify-center hover:bg-gray-1600 transition-all duration-500 ease-in-out rounded-md w-10.5 h-9">
                                        <Image
                                             src={item.EditIcon}
                                             width='16'
                                             height='16'
                                             alt=""
                                        />
                                   </Link>
                              </div> 
                         </div>
                    ))}
               </div>
          </div>
     );
}
