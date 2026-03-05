"use client";

import { useState } from 'react'

import Image from "next/image";
import BlockedTable from "@/app/components/BlockedTable"
import CustomSelect from "@/app/components/CustomSelect"


const BlockedPage = () => {
      const [status, setStatus] = useState<string>("All Countries");
      const [search, setSearch] = useState("");
      const [date, setdate] = useState("");
      const [date2, setdate2] = useState("");
      return (
            <div>
                  <div className='grid 2xl:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4'>
                        <div className='border border-solid border-gray-1000 rounded-lg bg-white shadow-4xl p-4'>
                              <span className='block text-gray-1200 font-normal text-xs leading-4 mb-1 tracking-[0.6px] uppercase'>Total AUM</span>
                              <h4 className='block text-blue-1300 font-bold md:text-2xl text-xl leading-8'>82.656,00 €</h4>
                              <p className='block text-gray-1200 font-normal text-xs leading-4 mt-1'>Total AUM</p>
                        </div>
                        <div className='border border-solid border-gray-1000 rounded-lg bg-white shadow-4xl p-4'>
                              <span className='block text-gray-1200 font-normal text-xs leading-4 mb-1 tracking-[0.6px] uppercase'>Pending Payouts</span>
                              <h4 className='block text-blue-1300 font-bold md:text-2xl text-xl leading-8'>20.664,00 €</h4>
                              <p className='block text-gray-1200 font-normal text-xs leading-4 mt-1'>To be released this month</p>
                        </div>
                        <div className='border border-solid border-gray-1000 rounded-lg bg-white shadow-4xl p-4'>
                              <span className='block text-gray-1200 font-normal text-xs leading-4 mb-1 tracking-[0.6px] uppercase'>Active Accounts</span>
                              <h4 className='block text-blue-1300 font-bold md:text-2xl text-xl leading-8'>8</h4>
                              <p className='block text-gray-1200 font-normal text-xs leading-4 mt-1'>In pipeline</p>
                        </div>
                        <div className='border border-solid border-gray-1000 rounded-lg bg-white shadow-4xl p-4'>
                              <span className='block text-gray-1200 font-normal text-xs leading-4 mb-1 tracking-[0.6px] uppercase'>Number of the Refund Request</span>
                              <h4 className='block text-red86 font-bold text-2xl leading-8'>4</h4>
                              <p className='block text-gray-1200 font-normal text-xs leading-4 mt-1'>This month</p>
                        </div>
                        <div className='border border-solid border-gray-1000 rounded-lg bg-white shadow-4xl p-4'>
                              <span className='block text-gray-1200 font-normal text-xs leading-4 mb-1 tracking-[0.6px] uppercase'>AVI Issued</span>
                              <h4 className='block text-blue-1300 font-bold md:text-2xl text-xl leading-8'>2</h4>
                              <p className='block text-gray-1200 font-normal text-xs leading-4 mt-1'>This month</p>
                        </div>
                  </div>
                  <div className="mt-6 border border-solid border-gray-1000 bg-white rounded-lg p-4">
                        <form className="2xl:flex items-center gap-3">
                              <div className="relative flex-1 w-full 2xl:mb-0 mb-4">
                                    <input
                                          type="text"
                                          className="text-sm transition duration-300 ring-2 ring-transparent focus:ring-transparent font-normal font-neulis-sans text-gray-1900 placeholder:text-gray-1400 px-4 pl-10 h-10 bg-gray-1500 border border-gray-3600 rounded-md w-full outline-0"
                                          placeholder="Search by name, ID, email, or university..."
                                          value={search}
                                          onChange={(e) => setSearch(e.target.value)}
                                    />
                                    <div className="absolute top-1/2 -translate-y-1/2 left-3">
                                          <Image
                                                src="../images/search-icon.svg"
                                                width="16"
                                                height="16"
                                                alt=""
                                          />
                                    </div>
                              </div>
                              <div className='2xl:flex items-center grid sm:grid-cols-4 grid-cols-2 gap-3'>
                                    <div className='2xl:w-40 w-full'>
                                          <CustomSelect
                                                value={status}
                                                className='h-10'
                                                onChange={(e) => setStatus(e.target.value)}
                                                options={[
                                                      { label: "All", value: "All" },
                                                ]}
                                          />
                                    </div>
                                    <div className='2xl:w-45 w-full'>
                                          <CustomSelect
                                                value={status}
                                                className='h-10'
                                                onChange={(e) => setStatus(e.target.value)}
                                                options={[
                                                      { label: "All", value: "All" },
                                                ]}
                                          />
                                    </div>
                                    <div className="relative 2xl:w-35 w-full">
                                          <input
                                                type="text"
                                                className="text-sm transition duration-300 ring-2 ring-transparent focus:ring-transparent font-normal font-neulis-sans text-black-2000 placeholder:text-black-2000 px-4 pl-10 h-9 bg-gray-1500 border border-gray-3600 rounded-md w-full outline-0"
                                                placeholder="From"
                                                value={date}
                                                onChange={(e) => setdate(e.target.value)}
                                          />
                                          <div className="absolute top-1/2 -translate-y-1/2 left-3">
                                                <Image
                                                      src="../images/calendar-icon4.svg"
                                                      width="16"
                                                      height="16"
                                                      alt=""
                                                />
                                          </div>
                                    </div>
                                    <div className="relative 2xl:w-35 w-full">
                                          <input
                                                type="text"
                                                className="text-sm transition duration-300 ring-2 ring-transparent focus:ring-transparent font-normal font-neulis-sans text-black-2000 placeholder:text-black-2000 px-4 pl-10 h-9 bg-gray-1500 border border-gray-3600 rounded-md w-full outline-0"
                                                placeholder="To"
                                                value={date2}
                                                onChange={(e) => setdate2(e.target.value)}
                                          />
                                          <div className="absolute top-1/2 -translate-y-1/2 left-3">
                                                <Image
                                                      src="../images/calendar-icon4.svg"
                                                      width="16"
                                                      height="16"
                                                      alt=""
                                                />
                                          </div>
                                    </div>
                              </div>
                        </form>
                  </div>
                  <div className="mt-6.25">
                        <BlockedTable />
                  </div>
            </div>
      )
}

export default BlockedPage