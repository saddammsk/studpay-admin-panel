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

const UsersStudentsPage = () => {
  const [status, setStatus] = useState<string>("All Countries");

  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.usersStudents);

  const handleClear = () => {
    dispatch(resetFilters());
  };

  return (
    <div>
      <ul className='md:hidden flex items-center justify-end mb-4 gap-1'>
        <li>
          <Link href={'#'} className='inline-flex items-center justify-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
            <Image
              src="/images/refresh-icon.svg"
              width="16"
              height="16"
              alt=""
            />
            Refresh
          </Link>
        </li>
        <li>
          <Link href={'#'} className='inline-flex items-center justify-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
            <Image
              src="/images/export-icon4.svg"
              width="16"
              height="16"
              alt=""
            />
            Export
          </Link>
        </li>
        <li>
          <Button onClick={() => { }}
            iconSrc="/images/userplus-white.svg"
            label="Add User"
            className="text-white text-sm font-normal gap-2 h-9 px-3! bg-blue-1000 hover:bg-blue800 rounded-md border border-solid border-gray1600 m-0!"
          />
        </li>
      </ul>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        <div className="bg-white border border-solid border-gray-3600 rounded-lg py-4 pl-5 pr-2">
          <span className="flex items-center gap-2 text-gray-1900 font-inter font-normal text-sm leading-5">
            <Image
              src="/images/user-icon.svg"
              width="16"
              height="16"
              alt=""
            />
            Total Users
          </span>
          <div className="flex items-center justify-between mt-2">
            <h4 className="text-black-1600 font-inter font-bold text-2xl leading-8">87</h4>
            <span className="text-lightgreen17 font-inter font-normal text-xs leading-4">+12.5%</span>
          </div>
        </div>
        <div className="bg-white border border-solid border-gray-3600 rounded-lg py-4 pl-5 pr-2">
          <span className="flex items-center gap-2 text-gray-1900 font-inter font-normal text-sm leading-5">
            <Image
              src="/images/user-icon.svg"
              width="16"
              height="16"
              alt=""
            />
            KYC Verified
          </span>
          <div className="flex items-center justify-between mt-2">
            <h4 className="text-black-1600 font-inter font-bold text-2xl leading-8">54</h4>
            <span className="text-lightgreen17 font-inter font-normal text-xs leading-4">62.1%</span>
          </div>
        </div>
        <div className="bg-white border border-solid border-gray-3600 rounded-lg py-4 pl-5 pr-2">
          <span className="flex items-center gap-2 text-gray-1900 font-inter font-normal text-sm leading-5">
            <Image
              src="/images/user-icon.svg"
              width="16"
              height="16"
              alt=""
            />
            Pending Review
          </span>
          <div className="flex items-center justify-between mt-2">
            <h4 className="text-black-1600 font-inter font-bold text-2xl leading-8">23</h4>
            <span className="text-yellow-1100 font-inter font-normal text-xs leading-4">Needs attention</span>
          </div>
        </div>
        <div className="bg-white border border-solid border-gray-3600 rounded-lg py-4 pl-5 pr-2">
          <span className="flex items-center gap-2 text-gray-1900 font-inter font-normal text-sm leading-5">
            <Image
              src="/images/user-icon.svg"
              width="16"
              height="16"
              alt=""
            />
            High Risk
          </span>
          <div className="flex items-center justify-between mt-2">
            <h4 className="text-black-1600 font-inter font-bold text-2xl leading-8">29</h4>
            <span className="text-red1600 font-inter font-normal text-xs leading-4">Monitor closely</span>
          </div>
        </div>
      </div>
      <div className="bg-white mt-6 p-4 rounded-xl border border-solid border-gray-3600">
        <form className="">
          <div className="flex md:flex-row flex-col items-center justify-between">
            <div className="relative flex-1 xl:max-w-md md:max-w-90 md:mb-0 mb-4 max-w-full w-full">
              <input
                type="text"
                className="text-sm transition duration-300 ring-2 ring-transparent focus:ring-transparent font-normal font-neulis-sans text-gray-1900 placeholder:text-gray-1400 px-4 pl-10 h-9 bg-gray-1500 border border-gray-3600 rounded-md w-full outline-0"
                placeholder="Search students, transactions..."
                value={filters.search}
                onChange={(e) => dispatch(setSearch(e.target.value))}
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
            <ul className='md:w-auto w-full md:flex grid grid-cols-2 items-center gap-2'>
              <li>
                <div className='md:w-39 w-full'>
                  <CustomSelect
                    value={status}
                    className='h-9'
                    onChange={(e) => setStatus(e.target.value)}
                    options={[
                      { label: "Bulk Actions", value: "Bulk Actions" },
                    ]}
                  />
                </div>
              </li>
              <li className='md:w-auto w-full'>
                <button
                  type="button"
                  onClick={handleClear}
                  className="cursor-pointer transition-all duration-500 ease-in-out md:w-auto w-full inline-flex items-center justify-center px-3 text-black-1600 font-normal text-sm leading-5 gap-2  bg-gray-1500 border border-gray-3600 hover:bg-gray-3600 rounded-md h-9"
                >
                  <Image src="../images/filter.svg" width="16" height="16" alt="" />
                  More Filters
                </button>
              </li>
            </ul>
          </div>
          <div className="md:flex grid grid-cols-2 items-center lg:flex-nowrap flex-wrap gap-3 sm:w-auto w-full md:flex-none mt-4">
            <div className="xl:w-40 lg:w-34 md:w-41.5 w-full">
              <CustomSelect
                value={filters.country}
                onChange={(e) => dispatch(setCountryFilter(e.target.value))}
                options={[
                  { label: "All Destinations", value: "All Destinations" },
                  { label: "Country", value: "Country" },
                  { label: "Spain", value: "Spain" },
                  { label: "Canada", value: "Canada" },
                  { label: "UK", value: "UK" },
                  { label: "UAE", value: "UAE" },
                  { label: "Australia", value: "Australia" },
                ]}
              />
            </div>
            <div className="xl:w-35 lg:w-34 md:w-41.5 w-full">
              <CustomSelect
                value={filters.status}
                onChange={(e) => setStatus(e.target.value)}
                options={[
                  { label: "All Status", value: "All Status" },
                  { label: "Verified", value: "Verified" },
                  { label: "Pending", value: "Pending" },
                ]}
              />
            </div>
            <div className="xl:w-35 lg:w-34 md:w-41.5 w-full">
              <CustomSelect
                value={filters.status}
                onChange={(e) => setStatus(e.target.value)}
                options={[
                  { label: "All Scores", value: "All Scores" },
                  { label: "High Score", value: "High Score" },
                  { label: "Medium Score", value: "Medium Score" },
                  { label: "Low Score", value: "Medium Score" },
                ]}
              />
            </div>
            <div className="xl:w-32.5 lg:w-34 md:w-41.5 w-full">
              <CustomSelect
                value={filters.status}
                onChange={(e) => setStatus(e.target.value)}
                options={[
                  { label: "All Plans", value: "All Plans" },
                  { label: "Free", value: "Free" },
                  { label: "Basic", value: "Basic" },
                  { label: "Premium", value: "Premium" },
                ]}
              />
            </div>
            <div className="xl:w-40 lg:w-34 md:w-41.5 w-full">
              <CustomSelect
                value={filters.status}
                onChange={(e) => setStatus(e.target.value)}
                options={[
                  { label: "All Sources", value: "All Sources" },
                  { label: "Internal", value: "Internal" },
                  { label: "External", value: "External" },
                ]}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="mt-6.25">
        <UserStudentTable />
      </div>
    </div>
  );
};

export default UsersStudentsPage;
