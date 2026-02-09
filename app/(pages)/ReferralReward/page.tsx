"use client";

import { useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link"
import ReferralRewardTable from "@/app/components/ReferralRewardTable"
import CustomSelect from "@/app/components/CustomSelect"


const KycDocumentPage = () => {
      const [status, setStatus] = useState<string>("All Status");
      const [dateRange, setDateRange] = useState<string>("All Date Range");
      const [filterBy, setFilterBy] = useState<string>("All filter");
      const [countryBy, setCountryBy] = useState<string>("All Country");

      return (
            <div className="max-w-309.5 w-full mx-auto">
                  <div className="flex items-center justify-between mb-8">
                        <div>
                              <h4 className="text-black-1200 font-bold md:text-[30px] text-2xl leading-9 mb-2">Referrals & Rewards</h4>
                              <p className="text-gray-1100 font-normal md:text-base text-sm leading-6">Track referral usage, manage rewards, and monitor payout statuses</p>
                        </div>
                        <ul className='flex items-center gap-4'>
                              <li>
                                    <Link href={"#"} className="hover:bg-blue-1000/90 bg-blue-1000 transition-all duration-500 ease-in-out sm:w-auto w-full inline-flex items-center justify-center px-4.25 text-white font-normal text-sm leading-5 gap-4 border border-blue-1000 rounded-md h-10">
                                          <Image
                                                src="../images/download-icon.svg"
                                                width='16'
                                                height='16'
                                                alt=""
                                          />
                                          Export CSV
                                    </Link>
                              </li>
                              <li>
                                    <Link href={"#"} className="hover:bg-gray-1600 transition-all duration-500 ease-in-out sm:w-auto w-full inline-flex items-center justify-center px-4 text-blue-1000 font-medium text-sm leading-5 gap-4 border border-blue-1000 bg-blue-1000/10 rounded-md h-10">
                                          <Image
                                                src="../images/file-blue.svg"
                                                width='16'
                                                height='16'
                                                alt=""
                                          />
                                          Export PDF
                                    </Link>
                              </li>

                        </ul>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                        <div className="shadow-44xl border border-solid border-gray1600 rounded-xl bg-white p-6.25">
                              <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                          <span className="bg-blue700 rounded-xl w-12 h-12 flex items-center justify-center">
                                                <Image
                                                      src="../images/euro-blue.svg"
                                                      width='24'
                                                      height='24'
                                                      alt=""
                                                />
                                          </span>
                                          <div className="">
                                                <span className="flex items-center text-gray1900 font-neulis-sans font-normal text-sm leading-5">Total Rewards Paid</span>
                                                <h4 className="text-blue-1200 font-neulis-sans font-normal text-2xl leading-8">€28,450</h4>
                                          </div>
                                    </div>
                                    <span className="text-green-1000 font-neulis-sans font-normal text-sm leading-5 inline-flex items-center justify-center bg-gray1600 h-8 px-2 rounded-xl">+12.5%</span>
                              </div>
                              <div className="mt-4.5">
                                    <Image
                                          src="../images/graph-img.svg"
                                          width='68'
                                          height='33'
                                          alt=""
                                    />
                              </div>
                        </div>
                        <div className="shadow-44xl border border-solid border-gray1600 rounded-xl bg-white p-6.25">
                              <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                          <span className="bg-blue700 rounded-xl w-12 h-12 flex items-center justify-center">
                                                <Image
                                                      src="../images/user-blue.svg"
                                                      width='24'
                                                      height='24'
                                                      alt=""
                                                />
                                          </span>
                                          <div className="">
                                                <span className="flex items-center text-gray1900 font-neulis-sans font-normal text-sm leading-5">Active Referral Campaigns</span>
                                                <h4 className="text-blue-1200 font-neulis-sans font-normal text-2xl leading-8">15</h4>
                                          </div>
                                    </div>
                                    <span className="text-green-1000 font-neulis-sans font-normal text-sm leading-5 inline-flex items-center justify-center bg-gray1600 h-8 px-2 rounded-xl">+3</span>
                              </div>
                              <div className="mt-4.5">
                                    <Image
                                          src="../images/graph-img.svg"
                                          width='68'
                                          height='33'
                                          alt=""
                                    />
                              </div>
                        </div>
                        <div className="shadow-44xl border border-solid border-gray1600 rounded-xl bg-white p-6.25">
                              <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                          <span className="bg-blue700 rounded-xl w-12 h-12 flex items-center justify-center">
                                                <Image
                                                      src="../images/clock-blue.svg"
                                                      width='24'
                                                      height='24'
                                                      alt=""
                                                />
                                          </span>
                                          <div className="">
                                                <span className="flex items-center text-gray1900 font-neulis-sans font-normal text-sm leading-5">Pending Approvals</span>
                                                <h4 className="text-blue-1200 font-neulis-sans font-normal text-2xl leading-8">23</h4>
                                          </div>
                                    </div>
                                    <span className="text-red1300 font-neulis-sans font-normal text-sm leading-5 inline-flex items-center justify-center bg-gray1600 h-8 px-2 rounded-xl">-5</span>
                              </div>
                              <div className="mt-4.5">
                                    <Image
                                          src="../images/graph-img.svg"
                                          width='68'
                                          height='33'
                                          alt=""
                                    />
                              </div>
                        </div>
                  </div>
                  <div className="bg-white mt-6 md:p-6.25 p-4 rounded-xl border border-solid border-gray-1600 shadow-4xl">
                        <form className="">
                              <div className="flex items-center justify-between">
                                    <h4 className='flex items-center gap-2 text-black-1200 font-neulis-sans font-normal text-lg leading-7'>
                                          <Image
                                                src="../images/filter-blue.svg"
                                                width='20'
                                                height='20'
                                                alt=""
                                          />
                                          Filters
                                    </h4>
                                    <Link href={"#"} className="sm:w-auto hover:bg-blue-1000/90 pt-0.5 transition-all duration-500 ease-in-out w-full inline-flex items-center justify-center px-3.25 text-white font-medium text-sm leading-5 gap-2 border border-blue-1000 bg-blue-1000 rounded-md h-9">
                                          Clear All
                                    </Link>
                              </div>
                              <div className='flex items-center gap-4 mt-5'>
                                    <div className="max-w-48 w-full">
                                          <label className='text-gray1800 font-neulis-sans font-normal text-sm leading-6 block mb-2'>Status</label>
                                          <div className="w-full">
                                                <CustomSelect
                                                      value={status}
                                                      onChange={(e) => setStatus(e.target.value)}
                                                      options={[
                                                            { label: "All Status", value: "All Status" },
                                                            { label: "Approved", value: "Approved" },
                                                            { label: "Rejected", value: "Rejected" },
                                                      ]}
                                                />
                                          </div>
                                    </div>
                                    <div className="max-w-48 w-full">
                                          <label className='text-gray1800 font-neulis-sans font-normal text-sm leading-6 block mb-2'>Date Range</label>
                                          <div className="w-full">
                                                <CustomSelect
                                                      value={dateRange}
                                                      onChange={(e) => setDateRange(e.target.value)}
                                                      options={[
                                                            { label: "All Date Range", value: "All Date Range" },
                                                            { label: "Last 7 Days", value: "Last 7 Days" },
                                                            { label: "Last 30 Days", value: "Last 30 Days" },
                                                      ]}
                                                />
                                          </div>
                                    </div>
                                    <div className="max-w-48 w-full">
                                          <label className='text-gray1800 font-neulis-sans font-normal text-sm leading-6 block mb-2'>Filter By</label>
                                          <div className="w-full">
                                                <CustomSelect
                                                      value={filterBy}
                                                      onChange={(e) => setFilterBy(e.target.value)}
                                                      options={[
                                                            { label: "All filter", value: "All filter" },
                                                            { label: "filter1", value: "filter1" },
                                                            { label: "filter2", value: "filter2" },
                                                      ]}
                                                />
                                          </div>
                                    </div>
                                    <div className="max-w-48 w-full">
                                          <label className='text-gray1800 font-neulis-sans font-normal text-sm leading-6 block mb-2'>Filter By</label>
                                          <div className="w-full">
                                                <CustomSelect
                                                      value={countryBy}
                                                      onChange={(e) => setCountryBy(e.target.value)}
                                                      options={[
                                                            { label: "Country", value: "Country" },
                                                            { label: "filter1", value: "filter1" },
                                                            { label: "filter2", value: "filter2" },
                                                      ]}
                                                />
                                          </div>
                                    </div>
                                    <div className="max-w-99.75 flex-1 w-full">
                                          <label className='text-gray1800 font-neulis-sans font-normal text-sm leading-6 block mb-2'>Search</label>
                                          <div className="relative flex-1 w-full">
                                                <input type="text" className='text-sm font-normal font-neulis-sans text-gray-1400 placeholder:text-gray-1400 px-4 pl-10 h-10 bg-white border border-gray1600 rounded-md w-full outline-0' placeholder='Search by name or email...' />
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
                              </div>
                        </form>
                  </div>
                  <div className="mt-6.25">
                        <ReferralRewardTable />
                  </div>
            </div>
      )
}

export default KycDocumentPage