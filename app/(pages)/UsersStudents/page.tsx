"use client";

import { useState } from 'react'

import Image from "next/image";
import Link from "next/link"
import UserStudentTable from "@/app/components/UserStudentTable"
import CustomSelect from "@/app/components/CustomSelect"


const UsersStudentsPage = () => {
      const [status, setStatus] = useState<string>("All Countries");
      const [status2, setStatus2] = useState<string>("All Status");

      return (
            <div>
                  <div>
                        <h4 className="text-black12 font-bold md:text-[30px] text-2xl leading-9 mb-2">User Management</h4>
                        <p className="text-gray-1100 font-normal md:text-base text-sm leading-6">Manage student accounts and their verification status</p>
                  </div>
                  <div className="bg-white mt-6 md:p-6.25 p-4 rounded-xl border border-solid border-gray-1600 shadow-4xl">
                        <form className="flex md:flex-row flex-col items-center gap-4">
                              <div className="relative flex-1 w-full">
                                    <input type="text" className='text-sm font-normal font-neulis-sans text-gray-1400 placeholder:text-gray-1400 px-4 pl-10 h-10 bg-white border border-gray1600 rounded-md w-full outline-0' placeholder='Search students, transactions...' />
                                    <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                                          <Image
                                                src="../images/search-icon.svg"
                                                width='16'
                                                height='16'
                                                alt=""
                                          />
                                    </div>
                              </div>
                              <div className="flex sm:flex-row flex-col items-center gap-4 md:w-auto w-full">
                                    <div className="flex items-center gap-4 sm:w-auto w-full md:flex-none flex-1">
                                          <div className='xl:w-48 md:w-34 w-full'>
                                                <CustomSelect
                                                      value={status}
                                                      onChange={(e) => setStatus(e.target.value)}
                                                      options={[
                                                            { label: "All Countries", value: "Countries" },
                                                            { label: "Country1", value: "Country1" },
                                                            { label: "Country2", value: "Country2" },
                                                      ]}
                                                />
                                          </div>
                                          <div className='xl:w-48 md:w-34 w-full'>
                                                <CustomSelect
                                                      value={status2}
                                                      onChange={(e) => setStatus2(e.target.value)}
                                                      options={[
                                                            { label: "All Status", value: "Status" },
                                                            { label: "Active", value: "Active" },
                                                            { label: "Inactive", value: "Inactive" },
                                                      ]}
                                                />
                                          </div>
                                    </div>
                                    <Link href={"#"} className="hover:bg-gray-1600 transition-all duration-500 ease-in-out sm:w-auto w-full inline-flex items-center justify-center px-4.25 text-black13 font-medium text-sm leading-5 gap-2 border border-gray1600 rounded-md h-10">
                                          <Image
                                                src="../images/filter.svg"
                                                width='16'
                                                height='16'
                                                alt=""
                                          />
                                          Clear
                                    </Link>
                              </div>
                        </form>
                  </div>
                  <div className="mt-6.25">
                        <UserStudentTable />
                  </div>
            </div>
      )
}

export default UsersStudentsPage