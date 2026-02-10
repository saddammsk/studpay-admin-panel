"use client";

import { useRef, useState } from "react";

import Image from "next/image";
import CashbackManagementTable from "@/app/components/CashbackManagementTable"
import CustomSelect from "@/app/components/CustomSelect"
import Link from "next/dist/client/link";


const KycDocumentPage = () => {
      const [status, setStatus] = useState<string>("Select Status");
      const [cashback, setcashback] = useState<string>("Cashback Type");
      const [Currency, setCurrency] = useState<string>("Currency");

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
            <div className="max-w-309.5 w-full mx-auto pt-2">
                  <div className="mb-8">
                        <div className="w-full">
                              <h4 className="text-black-1200 font-bold md:text-[30px] text-2xl leading-9 mb-2">Cashback Management</h4>
                              <p className="text-gray-1100 font-normal md:text-base text-sm leading-6 xl:max-w-full w-full md:max-w-87.5 max-w-full">Track and manage cashback earnings, eligibility, and payouts for student activities.</p>
                        </div>
                  </div>
                  <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4">
                        <div className="bg-white flex items-center justify-between border border-solid border-gray1600 rounded-xl shadow-4xl md:p-6.25 p-4">
                              <div className="">
                                    <p className="text-gray-1100 font-neulis-sans font-normal text-sm leading-5">Total Cashback Paid</p>
                                    <h4 className="text-black-1200 font-normal text-2xl leading-8 my-2">€15.75</h4>
                                    <p className="text-gray-1200 font-normal text-[13.56px] leading-5 flex items-center gap-2"><span className="text-green-1000 text-sm">+12.5%</span>from last month</p>
                              </div>
                              <div className="bg-gray-1300 rounded-xl flex items-center justify-center w-12 h-12">
                                    <Image
                                          src="../images/euro-blue2.svg"
                                          width='15'
                                          height='18'
                                          alt=""
                                    />
                              </div>
                        </div>
                        <div className="bg-white flex items-center justify-between border border-solid border-gray1600 rounded-xl shadow-4xl md:p-6.25 p-4">
                              <div className="">
                                    <p className="text-gray-1100 font-neulis-sans font-normal text-sm leading-5">Pending Amount</p>
                                    <h4 className="text-black-1200 font-normal text-2xl leading-8 my-2">€25.00</h4>
                                    <div className="flex items-center gap-4.5">
                                          <p className="text-gray-1100 font-normal text-[13.56px] leading-5">1<br />pending</p>
                                          <p className="text-gray-1100 font-normal text-[13.56px] leading-5">awaiting<br />approval</p>
                                    </div>
                              </div>
                              <div className="bg-gray-1300 rounded-xl flex items-center justify-center w-12 h-12">
                                    <Image
                                          src="../images/clock-blue.svg"
                                          width='20'
                                          height='20'
                                          alt=""
                                    />
                              </div>
                        </div>
                        <div className="bg-white flex items-center justify-between border border-solid border-gray1600 rounded-xl shadow-4xl md:p-6.25 p-4">
                              <div className="">
                                    <p className="text-gray-1100 font-neulis-sans font-normal text-sm leading-5">Cashback This Month</p>
                                    <h4 className="text-black-1200 font-normal text-2xl leading-8 my-2">€0.00</h4>
                                    <p className="text-gray-1200 font-normal text-[13.56px] leading-5 flex items-center gap-2"><span className="text-green-1000 text-sm">+8.2%</span>vs last month</p>
                              </div>
                              <div className="bg-gray-1300 rounded-xl flex items-center justify-center w-12 h-12">
                                    <Image
                                          src="../images/price-arrow.svg"
                                          width='20'
                                          height='20'
                                          alt=""
                                    />
                              </div>
                        </div>
                        <div className="bg-white flex items-center justify-between border border-solid border-gray1600 rounded-xl shadow-4xl md:p-6.25 p-4">
                              <div className="">
                                    <p className="text-gray-1100 font-neulis-sans font-normal text-sm leading-5">Active Earners</p>
                                    <h4 className="text-black-1200 font-normal text-2xl leading-8 my-2">4</h4>
                                    <p className="text-gray-1200 font-normal text-[13.56px] leading-5 flex items-center gap-2"><span className="text-green-1000 text-sm">+15 new</span>this month</p>
                              </div>
                              <div className="bg-gray-1300 rounded-xl flex items-center justify-center w-12 h-12">
                                    <Image
                                          src="../images/user-blue2.svg"
                                          width='24'
                                          height='24'
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
                              </div>
                              <div className="grid 2xl:grid-cols-6 sm:grid-cols-3 grid-cols-1 gap-4 mt-5">
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
                                    <div className="w-full">
                                          <CustomSelect
                                                value={status}
                                                onChange={(e) => setStatus(e.target.value)}
                                                options={[
                                                      { label: "Select Status", value: "Select Status" },
                                                      { label: "Approved", value: "Approved" },
                                                      { label: "Rejected", value: "Rejected" },
                                                ]}
                                          />
                                    </div>
                                    <div className="w-full">
                                          <CustomSelect
                                                value={cashback}
                                                onChange={(e) => setcashback(e.target.value)}
                                                options={[
                                                      { label: "Cashback Type", value: "Cashback Type" },
                                                      { label: "Approved", value: "Approved" },
                                                      { label: "Rejected", value: "Rejected" },
                                                ]}
                                          />
                                    </div>
                                    <div className="w-full">
                                          <CustomSelect
                                                value={Currency}
                                                onChange={(e) => setCurrency(e.target.value)}
                                                options={[
                                                      { label: "Currency", value: "Currency" },
                                                      { label: "Last 7 Days", value: "Last 7 Days" },
                                                      { label: "Last 30 Days", value: "Last 30 Days" },
                                                ]}
                                          />
                                    </div>
                                    <div className="w-full">
                                          <div onClick={openFromCalendar}
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
                                                      className="w-full appearance-none pl-10 pr-3 border border-solid border-gray1600 rounded-md font-neulis-sans font-normal text-sm leading-5 h-10 cursor-pointer outline-0 focus:ring-0 focus:ring-transparent"
                                                />
                                          </div>
                                    </div>
                                    <div className="w-full">
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
                                                      className="w-full appearance-none pl-10 pr-3 border border-solid border-gray1600 rounded-md font-neulis-sans font-normal text-sm leading-5 h-10 cursor-pointer outline-0 focus:ring-0 focus:ring-transparent"
                                                />
                                          </div>
                                    </div>
                              </div>
                              <div className="flex items-center justify-end mt-4">
                                    <Link href={"#"} className="sm:w-auto hover:bg-gray-1600 transition-all duration-500 ease-in-out w-full inline-flex items-center justify-center px-4.25 text-black13 font-medium text-sm leading-5 gap-2 border border-gray1600 rounded-md h-10">
                                          Reset Filters
                                    </Link>
                              </div>
                        </form>
                  </div>
                  <div className="mt-6.25">
                        <CashbackManagementTable />
                  </div>
            </div>
      )
}

export default KycDocumentPage