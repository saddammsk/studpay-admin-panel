"use client";

import { useState } from 'react'

import Image from "next/image";
import Link from "next/link";
import MonthlyAVIDisbursementsTable from "@/app/components/MonthlyAVIDisbursementsTable"
import CustomSelect from "@/app/components/CustomSelect"


const CryptoTransfers = () => {
      const [status, setStatus] = useState<string>("Select month");
      const [status2, setStatus2] = useState<string>("All statuses");
      const [status3, setStatus3] = useState<string>("All countries");

      return (
            <div>
                  <div className="">
                        <div>
                              <h4 className="text-black-1200 font-bold font-neulis-sans md:text-[30px] mb-0.5 text-2xl leading-9">Monthly AVI Disbursements</h4>
                              <p className="text-gray-1100 font-normal md:text-base text-sm leading-6">Track and manage monthly fund disbursements to students with active Blocked AVI Accounts</p>
                        </div>
                        <div className='bg-white shadow-4xl border border-solid border-gray1600 rounded-lg md:p-6 p-4 sm:mt-8.25 mt-4'>
                              <form>
                                    <div className='grid 2xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 md:gap-4 gap-3'>
                                          <div className=''>
                                                <label className='text-gray1800 font-neulis-sans font-normal text-sm leading-6 block mb-2'>Search Student</label>
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
                                          </div>
                                          <div className=''>
                                                <label className='text-gray1800 font-neulis-sans font-normal text-sm leading-6 block mb-2'>Month</label>
                                                <div className="relative flex-1 w-full ">
                                                      <CustomSelect
                                                            value={status}
                                                            onChange={(e) => setStatus(e.target.value)}
                                                            options={[
                                                                  { label: "Select month", value: "Select month" },
                                                                  { label: "January", value: "January" },
                                                                  { label: "February", value: "February" },
                                                                  { label: "March", value: "March" },
                                                                  { label: "April", value: "April" },
                                                                  { label: "May", value: "May" },
                                                                  { label: "June", value: "June" },
                                                                  { label: "July", value: "July" },
                                                                  { label: "August", value: "August" },
                                                                  { label: "September", value: "September" },
                                                                  { label: "October", value: "October" },
                                                                  { label: "November", value: "November" },
                                                                  { label: "December", value: "December" },
                                                            ]}
                                                      />
                                                </div>
                                          </div>
                                          <div className=''>
                                                <label className='text-gray1800 font-neulis-sans font-normal text-sm leading-6 block mb-2'>Status</label>
                                                <div className="relative flex-1 w-full ">
                                                      <CustomSelect
                                                            value={status2}
                                                            onChange={(e) => setStatus2(e.target.value)}
                                                            options={[
                                                                  { label: "All statuses", value: "All statuses" },
                                                            ]}
                                                      />
                                                </div>
                                          </div>
                                          <div className=''>
                                                <label className='text-gray1800 font-neulis-sans font-normal text-sm leading-6 block mb-2'>Country</label>
                                                <div className="relative flex-1 w-full ">
                                                      <CustomSelect
                                                            value={status3}
                                                            onChange={(e) => setStatus3(e.target.value)}
                                                            options={[
                                                                  { label: "All countries", value: "All countries" },
                                                            ]}
                                                      />
                                                </div>
                                          </div>
                                          <div className='flex items-end'>
                                                <ul className='flex items-center gap-2'>
                                                      <li>
                                                            <Link href={"#"} className="hover:bg-gray-1600 transition-all duration-500 ease-in-out sm:w-auto w-full inline-flex items-center justify-center px-4 text-black13 font-medium text-sm leading-5 gap-4 border border-gray1600 rounded-md h-9">
                                                                  <Image
                                                                        src="../images/filter.svg"
                                                                        width='16'
                                                                        height='16'
                                                                        alt=""
                                                                  />
                                                                  Reset
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link href={"#"} className="hover:bg-blue-1000/90 bg-blue-1000 transition-all duration-500 ease-in-out sm:w-auto w-full inline-flex items-center justify-center px-4 text-white font-normal text-sm leading-5 gap-4 border border-blue-1000 rounded-md h-9">
                                                                  <Image
                                                                        src="../images/download-icon.svg"
                                                                        width='16'
                                                                        height='16'
                                                                        alt=""
                                                                  />
                                                                  Export
                                                            </Link>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                              </form>
                        </div>
                  </div>
                  <div className="mt-6.25">
                        <MonthlyAVIDisbursementsTable />
                  </div>
            </div >
      )
}

export default CryptoTransfers