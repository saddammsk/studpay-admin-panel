"use client";
import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import UserStudentTable from "@/app/components/UsersStudent/UserStudentTable";
import CustomSelect from "@/app/components/CustomSelect";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
     resetFilters,
     setCountryFilter,
     setSearch,
} from "@/app/store/slices/UsersStudentsSlice";
import GuranteeBar from '@/app/components/GuranteeBar';
import DashboardStats from '@/app/components/DashboardStats';
import StudentTable from '@/app/components/StudentTable';

const UsersStudentsPage = () => {
     const [status, setStatus] = useState<string>("All Countries");
     const [status2, setStatus2] = useState<string>("All Countries");
     const [status3, setStatus3] = useState<string>("All Countries");
     const dispatch = useAppDispatch();
     const { filters } = useAppSelector((state) => state.usersStudents);

     const handleClear = () => {
          dispatch(resetFilters());
     };

     return (
          <div className='xl:-mt-30.75 md:-mt-27.5! -mt-24 bg-gray-6700 lg:-m-8 -m-4 '>
               <GuranteeBar></GuranteeBar>
               <div className='lg:p-8 p-4'>
                    <DashboardStats></DashboardStats>
                    <div className='bg-white border my-6 border-gray-1000 rounded-lg p-4'>
                         <div className="flex flex-wrap items-center gap-3 4xl:flex-1">
                              <div className="relative max-w-[384px] w-full">
                                   <input type="text" className='text-sm font-normal text-gray-1900 placeholder:text-gray-1900 px-4 pl-10 h-10 bg-gray-6600 border border-gray-1000 rounded-md w-full outline-0' placeholder='Search partners...' />
                                   <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                                        <Image
                                             src="../images/search-icon.svg"
                                             width='16'
                                             height='16'
                                             alt=""
                                        />
                                   </div>
                              </div>
                              <div className="relative w-32.5">
                                   <CustomSelect
                                        className="w-full bg-gray-6600 border border-gray-1000"
                                        value={status}
                                        onChange={(value) => setStatus(value)}
                                        options={[
                                             { label: "Type", value: "Type" },
                                             { label: "Types1", value: "Types1" },
                                             { label: "Types2", value: "Types2" },
                                        ]}
                                   />
                              </div>
                              <div className="relative w-32.5">
                                   <CustomSelect className="w-full bg-gray-6600 border border-gray-1000"
                                        value={status2}
                                        onChange={(value) => setStatus(value)}
                                        options={[
                                             { label: "Risk Score ", value: "All Status" },
                                             { label: "Types1", value: "Types1" },
                                             { label: "Types2", value: "Types2" },
                                        ]}
                                   />
                              </div>
                              <div className="relative w-40">
                                   <CustomSelect className="w-full bg-gray-6600 border border-gray-1000"
                                        value={status3}
                                       onChange={(value) => setStatus(value)}
                                        options={[
                                             { label: "Source/Campaign ", value: "Source/Campaign" },
                                             { label: "Types1", value: "Types1" },
                                             { label: "Types2", value: "Types2" },
                                        ]}
                                   />
                              </div>
                              <div>
                                   <Link href={'#'} className='inline-flex items-center justify-center gap-2 text-blue-1300 font-inter font-normal text-sm leading-5  rounded-md bg-gray-6600 border border-gray-1000 h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
                                        <Image
                                             src="/images/filter.svg"
                                             width="16"
                                             height="16"
                                             alt=""
                                        />
                                        More Filters
                                   </Link>
                              </div>
                         </div>
                    </div>
                    <div className='flex items-center mb-3 justify-between'>
                         <h6 className="text-lg font-bold leading-7 text-blue-1300">Application Ledger</h6>
                         <p className="text-sm font-normal text-gray-1200">Showing 10 of 247 applications</p>
                    </div>
                    <StudentTable></StudentTable>
               </div>
          </div>
     );
};

export default UsersStudentsPage;
