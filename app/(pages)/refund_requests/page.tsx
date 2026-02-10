"use client";

import { useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link"
import RefundRequestTable from "@/app/components/RefundRequestTable"
import CustomSelect from "@/app/components/CustomSelect"


const KycDocumentPage = () => {
      const [status, setStatus] = useState<string>("Select Status");
      const [country, setCountry] = useState<string>("Select Country");
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
            <div className="max-w-309.5 w-full mx-auto">
                  <div>
                        <h4 className="text-black12 font-bold md:text-[30px] text-2xl leading-9 mb-2">Refund Requests</h4>
                        <p className="text-gray-1100 font-normal md:text-base text-sm leading-6">Manage and process refund requests from students whose visa applications were refused.</p>
                  </div>
                  <div className="bg-white mt-6 md:p-6.25 p-4 rounded-xl border border-solid border-gray-1600 shadow-4xl">
                        <form className="">
                              <h4 className='flex items-center gap-2 text-black-1200 font-neulis-sans font-normal text-lg leading-7'>
                                    <Image
                                          src="../images/filter-blue.svg"
                                          width='20'
                                          height='20'
                                          alt=""
                                    />
                                    Filters
                              </h4>
                              <div className='grid grid-cols-5 gap-4 mt-5'>
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
                                                value={country}
                                                onChange={(e) => setCountry(e.target.value)}
                                                options={[
                                                      { label: "Select Country", value: "Select Country" },
                                                      { label: "USA", value: "USA" },
                                                      { label: "Canada", value: "Canada" },
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
                        <RefundRequestTable />
                  </div>
            </div>
      )
}

export default KycDocumentPage