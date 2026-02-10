'use client'

import ProfileTabs from "@/app/components/ProfileTabs";
import TransectionHistoryTable from "@/app/components/TransectionHistoryTable";
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
               <div className="bg-white mb-6.25 mt-2 border border-solid border-gray-1000 rounded-lg shadow-4xl sm:p-6.25 p-4">
                    <h4 className="text-black13 font-segoe sm:text-2xl text-xl font-normal leading-6 tracking-[-0.6px]">Transaction Summary</h4>
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-6">
                         <div className="bg-gray-1300 rounded-lg p-4">
                              <span className="text-blue-1000 block font-segoe sm:text-2xl text-xl font-normal leading-8 text-center">$2,450</span>
                              <h5 className="text-blue-1000 font-segoe text-[13.67px] font-normal leading-5 text-center">Total Balance</h5>
                         </div>
                         <div className="bg-gray-1300 rounded-lg p-4">
                              <span className="text-green14 block font-segoe sm:text-2xl text-xl font-normal leading-8 text-center">$1,200</span>
                              <h5 className="text-green14 font-segoe text-sm font-normal leading-5 text-center">This Month In</h5>
                         </div>
                         <div className="bg-gray-1300 rounded-lg p-4">
                              <span className="text-red1300 block font-segoe sm:text-2xl text-xl font-normal leading-8 text-center">$850</span>
                              <h5 className="text-red1300 font-segoe text-sm font-normal leading-5 text-center">This Month Out</h5>
                         </div>
                         <div className="bg-white-1100 rounded-lg p-4">
                              <span className="text-purpal13 block font-segoe sm:text-2xl text-xl font-normal leading-8 text-center">24</span>
                              <h5 className="text-purpal14 font-segoe text-sm font-normal leading-5 text-center">Total Transactions</h5>
                         </div>
                    </div>
               </div>
                <TransectionHistoryTable />
          </div>
     );
}
