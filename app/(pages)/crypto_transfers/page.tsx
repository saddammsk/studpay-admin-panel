"use client";

import { useState } from 'react'

import Image from "next/image";
import Link from "next/link";
import CryptoTransfersTable from "@/app/components/CryptoTransfersTable" 


const CryptoTransfers = () => {
      const [active, setActive] = useState("EUR");
      const tabs = ["EUR", "USD", "Crypto"];
      const [active2, setActive2] = useState("All");
      const tabs2 = ["All", "Send", "Receive", "Convert"];
      const [active3, setActive3] = useState("All");
      const tabs3 = ["All", "Success", "Pending", "Failed"];
      const [active4, setActive4] = useState("All");
      const tabs4 = [
            { name: "All" },
            { name: "EUR", icon: "/images/USDT-icon.svg" },
            { name: "USD", icon: "/images/USDC-icon.svg" },
            { name: "Crypto", icon: "/images/BTC-icon2.svg" },
      ];

      return (
            <div>
                  <div className="">
                        <div>
                              <h4 className="text-black-1200 font-bold font-neulis-sans md:text-[30px] mb-0.5 text-2xl leading-9">Crypto Transfers</h4>
                              <p className="text-gray-1100 font-normal md:text-base text-sm leading-6">Monitor all cryptocurrency transactions including sending, receiving, and converting digital assets</p>
                        </div>
                        <div className='bg-white border border-solid border-gray1600 rounded-lg sm:p-6 p-4 sm:mt-8.25 mt-4'>
                              <form>
                                    <div className='flex md:flex-row flex-col md:items-center items-start gap-4'>
                                          <div className="relative flex-1 w-full ">
                                                <input type="text" className='text-sm font-normal font-neulis-sans text-gray-1400 placeholder:text-gray-1400 px-4 pl-10 h-10 bg-white border border-gray1600 rounded-md w-full outline-0' placeholder='Search by name, email, or user ID...' />
                                                <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                                                      <Image
                                                            src="../images/search-icon.svg"
                                                            width='16'
                                                            height='16'
                                                            alt=""
                                                      />
                                                </div>
                                          </div>
                                          <div className='flex sm:flex-row flex-col sm:items-center items-start gap-2 md:w-auto w-full'>
                                                <span className='text-gray1800 font-neulis-sans font-normal text-sm block'>Currency View:</span>
                                                <ul className="md:flex grid grid-cols-3 items-center gap-2 md:w-auto w-full md:flex-none flex-1">
                                                      {tabs.map((item) => (
                                                            <li key={item}>
                                                                  <Link
                                                                        href="#"
                                                                        onClick={(e) => {
                                                                              e.preventDefault();
                                                                              setActive(item);
                                                                        }}
                                                                        className={`flex items-center justify-center font-neulis-sans font-normal text-xs leading-4 border border-solid rounded-md transition-all duration-500 ease-in-out h-9 px-3.25 pt-0.5
                                                                        ${active === item
                                                                                    ? "bg-blue-1000 text-white border-blue-1000"
                                                                                    : "text-black13 border-gray1600 hover:bg-gray1700"
                                                                              }`}
                                                                  >
                                                                        {item}
                                                                  </Link>
                                                            </li>
                                                      ))}
                                                </ul>
                                          </div>
                                    </div>
                                    <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-4 md:mt-6 mt-4'>
                                          <div className=''>
                                                <h4 className='text-gray1800 font-normal text-sm leading-5 flex items-center gap-1'>
                                                      <Image
                                                            src="../images/filter.svg"
                                                            width='16'
                                                            height='16'
                                                            alt=""
                                                      />
                                                      Transaction Type
                                                </h4>
                                                <ul className="md:flex grid grid-cols-4 items-center gap-2 mt-1.5">
                                                      {tabs2.map((item) => (
                                                            <li key={item}>
                                                                  <Link
                                                                        href="#"
                                                                        onClick={(e) => {
                                                                              e.preventDefault();
                                                                              setActive2(item);
                                                                        }}
                                                                        className={`flex items-center justify-center font-neulis-sans font-normal text-xs leading-4 border border-solid rounded-md transition-all duration-500 ease-in-out h-9 px-3.25 pt-0.5
                                                                        ${active2 === item
                                                                                    ? "bg-blue-1000 text-white border-blue-1000"
                                                                                    : "text-black13 border-gray1600 hover:bg-gray1700"
                                                                              }`}
                                                                  >
                                                                        {item}
                                                                  </Link>
                                                            </li>
                                                      ))}
                                                </ul>
                                          </div>
                                          <div className=''>
                                                <h4 className='text-gray1800 font-normal text-sm leading-5 flex items-center gap-1'>
                                                      Status
                                                </h4>
                                                <ul className="md:flex grid grid-cols-4 items-center gap-2 mt-1.5">
                                                      {tabs3.map((item) => (
                                                            <li key={item}>
                                                                  <Link
                                                                        href="#"
                                                                        onClick={(e) => {
                                                                              e.preventDefault();
                                                                              setActive3(item);
                                                                        }}
                                                                        className={`flex items-center justify-center font-neulis-sans font-normal text-xs leading-4 border border-solid rounded-md transition-all duration-500 ease-in-out h-9 px-3.25 pt-0.5
                                                                        ${active3 === item
                                                                                    ? "bg-blue-1000 text-white border-blue-1000"
                                                                                    : "text-black13 border-gray1600 hover:bg-gray1700"
                                                                              }`}
                                                                  >
                                                                        {item}
                                                                  </Link>
                                                            </li>
                                                      ))}
                                                </ul>
                                          </div>
                                          <div className=''>
                                                <h4 className='text-gray1800 font-normal text-sm leading-5 flex items-center gap-1'>
                                                      Crypto Type
                                                </h4>
                                                <ul className="md:flex grid grid-cols-4 items-center gap-2 mt-1.5">
                                                      {tabs4.map((item) => (
                                                            <li key={item.name}>
                                                                  <Link
                                                                        href="#"
                                                                        onClick={(e) => {
                                                                              e.preventDefault();
                                                                              setActive4(item.name);
                                                                        }}
                                                                        className={`flex items-center gap-1 justify-center font-neulis-sans font-normal text-xs leading-4 border border-solid rounded-md transition-all duration-500 ease-in-out h-9 px-3.25 pt-0.5
                                                                        ${active4 === item.name
                                                                                    ? "bg-blue-1000 text-white border-blue-1000"
                                                                                    : "text-black13 border-gray1600 hover:bg-gray1700"
                                                                              }`}
                                                                  >
                                                                        {item.icon && <Image src={item.icon} alt={item.name} width={14} height={14} />}
                                                                        {item.name}
                                                                  </Link>
                                                            </li>
                                                      ))}
                                                </ul>
                                          </div>
                                    </div>
                                    <div className='flex items-center justify-between border-t border-solid border-gray1600 mt-6 pt-4'>
                                          <p className='text-gray-1200 font-neulis-sans font-normal text-sm leading-5'>Active filters:</p>
                                          <Link href={"#"} className='text-black13 font-normal text-xs leading-6 inline-flex items-center justify-center h-9 px-3'>Clear All</Link>
                                    </div>
                              </form>
                        </div>
                  </div>
                  <div className="mt-6.25">
                        <CryptoTransfersTable />
                  </div>
            </div >
      )
}

export default CryptoTransfers