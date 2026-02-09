"use client";

import { useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import RechargeWithdrawTable from "@/app/components/RechargeWithdrawTable"
import CustomSelect from "@/app/components/CustomSelect"



const TransectionPage = () => {
      const [status, setStatus] = useState<string>("All Statuses");
      const [status2, setStatus2] = useState<string>("Currencies");
      const [status3, setStatus3] = useState<string>("Types");
      const fromRef = useRef<HTMLInputElement>(null);
      const toRef = useRef<HTMLInputElement>(null);

      const [fromDate, setFromDate] = useState("");
      const [toDate, setToDate] = useState("");

      const openFromCalendar = () => {
            fromRef.current?.showPicker(); // open calendar
      };

      const openToCalendar = () => {
            toRef.current?.showPicker();
      };
      return (
            <div>
                  <div>
                        <h4 className="text-black12 font-bold md:text-[30px] text-2xl leading-9 mb-2">Recharge & Withdraw Logs</h4>
                        <p className="text-gray-1100 font-normal md:text-base text-sm leading-6">Monitor all financial transactions made by users</p>
                  </div>
                  <div className="bg-white border border-gray-1000 border-solid rounded-lg md:mt-6 mt-4 md:p-6.25 md:pb-12 p-4">
                        <div className="flex items-center justify-between mb-5">
                              <h4 className="text-black-1200 font-normal font-neulis-sans text-lg flex items-center gap-2">
                                    <Image
                                          src="../images/filter.svg"
                                          alt=""
                                          width={16}
                                          height={16}
                                    />
                                    Filters
                              </h4>
                              <Link href={"#"} className="inline-flex hover:bg-gray-1600 transition-all duration-500 ease-in-out items-center justify-center text-black13 font-neulis-sans font-normal text-sm leading-5 border border-solid border-gray1600 h-9 rounded-md px-3.25">Reset Filters</Link>
                        </div>
                        <form className="flex flex-col items-start">
                              <div className="w-full flex xl:flex-row flex-col gap-4 max-w-325.5">
                                    <div className="flex-1 w-full">
                                          <label className="text-gray1800 mb-2.25 font-neulis-sans font-normal text-sm leading-5 block">Search</label>
                                          <div className="relative">
                                                <input type="text" className='text-sm font-normal font-neulis-sans text-gray-1400 placeholder:text-gray-1400 px-4 pl-10 h-10 bg-white border border-gray1600 rounded-md w-full outline-0' placeholder='Search by student name or transaction ID...' />
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
                                    <div className="grid sm:grid-cols-3 gap-4 flex-1 w-full">
                                          <div className="sm:max-w-61.75 max-w-full w-full">
                                                <label className="text-gray1800 mb-2.25 font-neulis-sans font-normal text-sm leading-5 block">Transaction Type</label>
                                                <CustomSelect
                                                      value={status}
                                                      onChange={(e) => setStatus(e.target.value)}
                                                      options={[
                                                            { label: "All Types", value: "Types" },
                                                            { label: "Types1", value: "Types1" },
                                                            { label: "Types2", value: "Types2" },
                                                      ]}
                                                />
                                          </div>
                                          <div className="sm:max-w-61.75 max-w-full w-full">
                                                <label className="text-gray1800 mb-2.25 font-neulis-sans font-normal text-sm leading-5 block">Status</label>
                                                <CustomSelect
                                                      value={status2}
                                                      onChange={(e) => setStatus2(e.target.value)}
                                                      options={[
                                                            { label: "All Statuses", value: "All Statuses" },
                                                            { label: "Completed", value: "Completed" },
                                                            { label: "Failed", value: "Failed" },
                                                      ]}
                                                />
                                          </div>
                                          <div className="sm:max-w-61.75 max-w-full w-full">
                                                <label className="text-gray1800 mb-2.25 font-neulis-sans font-normal text-sm leading-5 block">Payment Method</label>
                                                <CustomSelect
                                                      value={status3}
                                                      onChange={(e) => setStatus3(e.target.value)}
                                                      options={[
                                                            { label: "All Methods", value: "All Methods" },
                                                            { label: "Credit Card", value: "Credit Card" },
                                                            { label: "Debit Card", value: "Debit Card" },
                                                      ]}
                                                />
                                          </div>
                                    </div>
                              </div>
                              <div className="w-full  max-w-127.75">
                                    <div className="w-full  grid grid-cols-2 gap-4 mt-4">
                                          <div className="">
                                                <label className="text-gray1800 mb-2.25 font-neulis-sans font-normal text-sm leading-5 block">From Date</label>
                                                <div
                                                      onClick={openFromCalendar}
                                                      className="relative cursor-pointer"
                                                >
                                                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none">
                                                            <Image
                                                                  src="../images/calendar.svg"
                                                                  alt=""
                                                                  width={16}
                                                                  height={16}
                                                            />
                                                      </div>
                                                      <input
                                                            ref={fromRef}
                                                            type="date"
                                                            value={fromDate}
                                                            onChange={(e) => setFromDate(e.target.value)}
                                                            className="w-full appearance-none pl-10 pr-3 border border-solid border-gray1600 rounded-md font-neulis-sans font-normal sm:text-sm text-xs leading-5 h-10 cursor-pointer outline-0 focus:ring-0 focus:ring-transparent"
                                                      />
                                                </div>
                                          </div>
                                          <div className="">
                                                <label className="text-gray1800 mb-2.25 font-neulis-sans font-normal text-sm leading-5 block">From Date</label>
                                                <div
                                                      onClick={openToCalendar}
                                                      className="relative cursor-pointer"
                                                >
                                                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none">
                                                            <Image
                                                                  src="../images/calendar.svg"
                                                                  alt=""
                                                                  width={16}
                                                                  height={16}
                                                            />
                                                      </div>
                                                      <input
                                                            ref={toRef}
                                                            type="date"
                                                            value={toDate}
                                                            min={fromDate}
                                                            onChange={(e) => setToDate(e.target.value)}
                                                            className="w-full appearance-none pl-10 pr-3 border border-solid border-gray1600 rounded-md font-neulis-sans font-normal sm:text-sm text-xs leading-5 h-10 cursor-pointer outline-0 focus:ring-0 focus:ring-transparent"
                                                      />
                                                </div>
                                          </div> 
                                    </div>
                              </div>
                        </form>
                  </div>
                  <div className="md:mt-6.25 mt-4">
                        <RechargeWithdrawTable />
                  </div>
            </div>
      )
}

export default TransectionPage