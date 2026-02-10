'use client'

import ProfileTabs from "@/app/components/ProfileTabs";;
import Link from "next/link";
import Image from "next/image";


type PaymentStatus = "approved" | "Pending" | "rejected";

interface Payment {
     id: number;
     Mainicon: string;
     name: string;
     pdf: string;
     date: string;
     status: PaymentStatus;
     eyesImg: string;
     downloadImg: string;
     quality: string;
}
const statusConfig = {
     approved: {
          classes: "bg-green-1200 text-green-1100",
     },
     Pending: {
          classes: "bg-yellow1200 text-brown-1000",
     },
     rejected: {
          classes: "bg-lightred1200 text-red1200",
     },
} as const;

const payments: Payment[] = [
     {
          id: 1,
          Mainicon: "/images/checkgreendark.svg",
          name: "Passport",
          pdf: "passport_scan.pdf",
          date: "Uploaded: 12/10/2024",
          status: "approved",
          eyesImg: "/images/eyes-icon.svg",
          downloadImg: "/images/download-icon.svg",
          quality: "",
     },
     {
          id: 2,
          Mainicon: "/images/checkgreendark.svg",
          name: "Student Visa",
          pdf: "student_visa.pdf",
          date: "Uploaded: 12/10/2024",
          status: "Pending",
          eyesImg: "/images/eyes-icon.svg",
          downloadImg: "/images/download-icon.svg",
          quality: ""
     },
     {
          id: 3,
          Mainicon: "/images/info-red.svg",
          name: "Enrollment Letter",
          pdf: "enrollment_letter.pdf",
          date: "Uploaded: 12/8/2024",
          status: "rejected",
          eyesImg: "/images/eyes-icon.svg",
          downloadImg: "/images/download-icon.svg",
          quality: "Document quality too low",
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
               <div className="bg-white mt-2 border border-solid border-gray-1000 rounded-lg shadow-4xl p-6.25">
                    <h4 className="text-black13 font-segoe sm:text-2xl text-xl font-normal leading-6 tracking-[-0.6px]">Document Overview</h4>
                    <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mt-6">
                         <div className="bg-gray-1300 rounded-lg p-4">
                              <span className="text-green-1000 block font-segoe sm:text-2xl text-xl font-normal leading-8 text-center">1</span>
                              <h5 className="text-green-1000 font-segoe text-[13.67px] font-normal leading-5 text-center">Approved</h5>
                         </div>
                         <div className="bg-yellow1500 rounded-lg p-4">
                              <span className="text-brown2100 block font-segoe sm:text-2xl text-xl font-normal leading-8 text-center">1</span>
                              <h5 className="text-brown2200 font-segoe text-sm font-normal leading-5 text-center">Pending Review</h5>
                         </div>
                         <div className="bg-gray-1300 rounded-lg p-4">
                              <span className="text-red-1200 block font-segoe sm:text-2xl text-xl font-normal leading-8 text-center">1</span>
                              <h5 className="text-red1500 font-segoe text-sm font-normal leading-5 text-center">Rejected</h5>
                         </div>
                    </div>
               </div>
               <div className="bg-white mt-6 border border-solid border-gray-1000 rounded-lg shadow-4xl p-6.25">
                    <h4 className="text-black13 mb-6 font-segoe sm:text-2xl text-xl font-normal leading-6 tracking-[-0.6px]">Uploaded Documents</h4>
                    {payments.map((item) => (
                         <div key={item.id} className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between border border-solid border-gray-1000 rounded-lg p-4.25 mb-4 last:mb-0">
                              <div className="flex items-center gap-4">
                                   <span className="w-4 h-4 flex items-center justify-center">
                                        <Image
                                             src={item.Mainicon}
                                             width='16'
                                             height='16'
                                             alt=""
                                        />
                                   </span>
                                   <div className="">
                                        <h4 className="text-black13 font-segoe font-normal text-sm leading-6">
                                             {item.name}
                                        </h4>
                                        <span className="text-gray-1200 font-segoe font-normal text-sm leading-5">
                                             {item.pdf}
                                        </span>
                                        <p className="text-gray2100 font-segoe font-normal text-[11.81px] leading-4">
                                             {item.date}
                                        </p>
                                        <span className="block text-red1300 font-segoe font-normal text-[11.63px] leading-4"> {item.quality}</span>
                                   </div>
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
