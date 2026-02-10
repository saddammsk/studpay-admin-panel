'use client'

import ProfileTabs from "@/app/components/ProfileTabs";;
import Link from "next/link";
import Image from "next/image";


type PaymentStatus = "signed";

interface Payment {
     id: number;
     name: string;
     pdf: string;
     status: PaymentStatus;
     eyesImg: string;
     downloadImg: string;
}
const statusConfig = {
     signed: {
          classes: "bg-green-1200 text-green-1100",
     },
} as const;

const payments: Payment[] = [
     {
          id: 1,
          name: "Terms of Service Agreement",
          pdf: "Signed: 12/1/2024",
          status: "signed",
          eyesImg: "/images/eyes-icon.svg",
          downloadImg: "/images/download-icon.svg",
     },
     {
          id: 2,
          name: "AVI Disbursement Contract",
          pdf: "Signed: 12/5/2024",
          status: "signed",
          eyesImg: "/images/eyes-icon.svg",
          downloadImg: "/images/download-icon.svg",
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
                    <h4 className="text-black13 flex items-center gap-2 mb-6 font-segoe sm:text-2xl text-xl font-normal leading-6 tracking-[-0.6px]">
                         <Image
                              src="/images/contracts-icon.svg"
                              width='20'
                              height='20'
                              alt=""
                              className="brightness-0"
                         />
                         Contracts & E-signatures
                    </h4>
                    {payments.map((item) => (
                         <div key={item.id} className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between border border-solid border-gray-1000 rounded-lg p-4.25 mb-4 last:mb-0">
                              <div className="">
                                   <h4 className="text-black13 font-segoe font-normal text-base leading-6">
                                        {item.name}
                                   </h4>
                                   <span className="text-gray-1200 font-segoe font-normal text-sm leading-5">
                                        {item.pdf}
                                   </span>
                              </div>
                              <div className="flex items-center gap-3">
                                   <span
                                        className={`px-2 h-6 inline-flex items-center justify-center rounded-full font-segoe text-[11.63px] font-normal leading-4 ${statusConfig[item.status].classes}`}
                                   >
                                        {item.status}
                                   </span>
                                   <ul className="flex items-center gap-2">
                                        <li>
                                             <Link href={"#"} className="flex items-center justify-center border border-solid border-gray1600 rounded-md w-10.5 h-9">
                                                  <Image
                                                       src={item.eyesImg}
                                                       width='16'
                                                       height='16'
                                                       alt=""
                                                  />
                                             </Link>
                                        </li>
                                        <li>
                                             <Link href={"#"} className="flex items-center justify-center border border-solid border-gray1600 rounded-md w-10.5 h-9">
                                                  <Image
                                                       src={item.downloadImg}
                                                       width='16'
                                                       height='16'
                                                       alt=""
                                                       className="brightness-0"
                                                  />
                                             </Link>
                                        </li>
                                   </ul>
                              </div>

                         </div>
                    ))}
               </div>
          </div>
     );
}
