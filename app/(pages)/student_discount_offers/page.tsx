"use client";

import { useRef, useState } from "react";

import Image from "next/image";
import StudentDiscountsOffersTable from "@/app/components/StudentDiscountsOffersTable";
import CustomSelect from "@/app/components/CustomSelect"
import Button from "@/app/ui/Button"


const KycDocumentPage = () => {
      const [status, setStatus] = useState<string>("All Types");
      const [cashback, setcashback] = useState<string>("All Partners");
      const [Currency, setCurrency] = useState<string>("All Status");
      return (
            <div className="max-w-309.5 w-full mx-auto pt-2">
                  <div className="mb-8 flex xl:flex-row flex-col xl:items-center justify-between">
                        <div className="2xl:max-w-full xl:max-w-100 max-w-full 2xl:w-auto w-full xl:mb-0 mb-3">
                              <h4 className="text-black-1200 font-bold md:text-[30px] text-2xl leading-9 mb-2">Student Discount & Offers</h4>
                              <p className="text-gray-1100 font-normal md:text-base text-sm leading-6 xl:max-w-full w-full max-w-full">Manage discount campaigns, partner deals, and student-exclusive offers</p>
                        </div>
                        <ul className="flex sm:flex-row flex-col sm:items-center gap-3">
                              <li>
                                    <Button
                                          label="Add New Offer"
                                          iconSrc="/images/plus-icon.svg"
                                          className="text-white sm:w-auto w-full justify-center h-10 gap-4 px-4 py-0 border-0 gradient-bg font-segoe font-normal rounded-[10px]"
                                          onClick={() => {
                                                console.log("Add New Offer clicked");
                                          }}
                                    />
                              </li>
                              <li>
                                    <Button
                                          label="Export CSV"
                                          iconSrc="/images/download-icon.svg"
                                          className="text-white sm:w-auto w-full justify-center h-10 gap-4 px-4.25 py-0 border-0 bg-blue-1000 font-segoe font-normal rounded-[10px]"
                                          onClick={() => {
                                                console.log("Export CSV clicked");
                                          }}
                                    />
                              </li>
                              <li>
                                    <Button
                                          label="Export PDF"
                                          iconSrc="/images/file-blue.svg"
                                          className="justify-center sm:w-auto w-full h-10 gap-4 px-4.25 py-0  bg-blue-1000/10 border border-solid border-blue-1000 text-blue-1000 font-segoe font-normal rounded-[10px]"
                                          onClick={() => {
                                                console.log("Export PDF clicked");
                                          }}
                                    />
                              </li>
                        </ul>
                  </div>
                  <div className="bg-white sm:mt-6 mt-4 md:p-6.25 p-4 rounded-xl border border-solid border-gray-1600 shadow-4xl">
                        <form className="">
                              <div className="grid xl:grid-cols-5 sm:grid-cols-3 grid-cols-1 items-end gap-4">
                                    <div className="">
                                          <label className="text-blueNexus12 font-segoe font-normal text-sm leading-5 block mb-2.25">Search</label>
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
                                    <div className="w-full">
                                          <div className="">
                                                <label className="text-blueNexus12 font-segoe font-normal text-sm leading-5 block mb-2.25">Offer Type</label>
                                                <CustomSelect
                                                      value={status}
                                                      onChange={(e) => setStatus(e.target.value)}
                                                      options={[
                                                            { label: "All Types", value: "All Types" },
                                                            { label: "Approved", value: "Approved" },
                                                            { label: "Rejected", value: "Rejected" },
                                                      ]}
                                                />
                                          </div>
                                    </div>
                                    <div className="w-full">
                                          <div className="">
                                                <label className="text-blueNexus12 font-segoe font-normal text-sm leading-5 block mb-2.25">Partner Name</label>
                                                <CustomSelect
                                                      value={cashback}
                                                      onChange={(e) => setcashback(e.target.value)}
                                                      options={[
                                                            { label: "All Partners", value: "All Partners" },
                                                            { label: "Approved", value: "Approved" },
                                                            { label: "Rejected", value: "Rejected" },
                                                      ]}
                                                />
                                          </div>
                                    </div>
                                    <div className="w-full">
                                          <label className="text-blueNexus12 font-segoe font-normal text-sm leading-5 block mb-2.25">Status</label>
                                          <CustomSelect
                                                value={Currency}
                                                onChange={(e) => setCurrency(e.target.value)}
                                                options={[
                                                      { label: "All Status", value: "All Status" },
                                                      { label: "Active", value: "Active" },
                                                      { label: "Inactive", value: "Inactive" },
                                                ]}
                                          />
                                    </div>
                                    <div className="w-full">
                                          <Button
                                                label="Reset"
                                                iconSrc="/images/reset-icon.svg"
                                                className="text-white  justify-center h-10 w-full gap-4 px-4 py-0 border-0 bg-blue-1000 font-segoe font-normal rounded-[10px]"
                                                onClick={() => {
                                                      console.log("Reset Filters clicked");
                                                }}
                                          />
                                    </div>
                              </div>
                        </form>
                  </div>
                  <div className="mt-6.25">
                        <StudentDiscountsOffersTable />
                  </div>
            </div>
      )
}

export default KycDocumentPage