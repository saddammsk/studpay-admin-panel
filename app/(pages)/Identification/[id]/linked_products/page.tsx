
import Link from "next/link";
import Image from "next/image";

export default function page() {
     return (
          <div className="flex-1">
               <div className="mt-2 grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
                    <div className="bg-white border border-solid border-gray-1000 rounded-lg">
                         <div className="md:p-6.25 p-4">
                              <h4 className="text-black13 justify-center font-segoe font-normal text-2xl leading-6 flex items-center gap-2">
                                   <Image
                                        src="/images/wallet-black.svg"
                                        width='20'
                                        height='20'
                                        alt=""
                                   />
                                   Student Wallet
                              </h4>
                         </div>
                         <div className="md:px-6 md:pb-6 px-4 pb-4">
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
                         <div className="md:p-6.25 p-4">
                              <h4 className="text-black13 justify-center font-segoe font-normal text-2xl leading-6 flex items-center gap-2">
                                   <Image
                                        src="/images/sheild-block.svg"
                                        width='20'
                                        height='20'
                                        alt=""
                                   />
                                   Blocked AVI Account
                              </h4>
                         </div>
                         <div className="md:px-6 md:pb-6 px-4 pb-4">
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
                         <div className="md:p-6.25 p-4">
                              <h4 className="text-black13 justify-center font-segoe font-normal text-2xl leading-6 flex items-center gap-2">
                                   <Image
                                        src="/images/card-black.svg"
                                        width='20'
                                        height='20'
                                        alt=""
                                   />
                                   Crypto Transfers
                              </h4>
                         </div>
                         <div className="md:px-6 md:pb-6 px-4 pb-4">
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
                    <div className="bg-white border border-solid border-gray-1000 rounded-lg">
                         <div className="md:p-6.25 p-4">
                              <h4 className="text-black13 justify-center font-segoe font-normal text-2xl leading-6 flex items-center gap-2">
                                   <Image
                                        src="/images/home-icon.svg"
                                        width='20'
                                        height='20'
                                        alt=""
                                        className="brightness-0"
                                   />
                                   Housing & Insurance
                              </h4>
                         </div>
                         <div className="md:px-6 md:pb-6 px-4 pb-4">
                              <div className="bg-gray-1300 rounded-lg p-3 mb-3">
                                   <p className="text-blue-1000 font-segoe text-[15.88px] leading-6">Student Housing</p>
                                   <p className="text-blue-1000 font-segoe text-sm leading-5">Central London Residence</p>
                                   <p className="text-blue-1000 font-segoe text-[11.81px] leading-4">Active until Aug 2025</p>
                              </div>
                              <div className="bg-gray-1300 rounded-lg p-3 mb-4">
                                   <p className="text-darkgreen2300 font-segoe text-sm leading-6">Health Insurance</p>
                                   <p className="text-green14 font-segoe text-sm leading-5">Comprehensive Coverage</p>
                                   <p className="text-green-1000 font-segoe text-xs leading-4">Active until Dec 2025</p>
                              </div>
                              <Link href={"#"} className="flex items-center justify-center text-black13 font-segoe font-normal text-[13.89px] leading-5 border border-solid border-gray1600 rounded-md h-10 hover:bg-gray-1600 transition-all duration-500 ease-in-out">View History</Link>
                         </div>
                    </div>
               </div>
          </div>
     );
}
