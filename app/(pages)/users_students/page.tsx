"use client";

import Image from "next/image";
import UserStudentTable from "@/app/components/UserStudentTable";
import CustomSelect from "@/app/components/CustomSelect";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  resetFilters,
  setCountryFilter,
  setSearch,
  setStatusFilter,
} from "@/app/store/slices/UsersStudentsSlice";

const UsersStudentsPage = () => {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.usersStudents);

  const handleClear = () => {
    dispatch(resetFilters());
  };

  return (
    <div>
      <div>
        <h4 className="text-black12 font-bold md:text-[30px] text-2xl leading-9 mb-2">
          User Management
        </h4>
        <p className="text-gray-1100 font-normal md:text-base text-sm leading-6">
          Manage student accounts and their verification status
        </p>
      </div>
      <div className="bg-white mt-6 md:p-6.25 p-4 rounded-xl border border-solid border-gray-1600 shadow-4xl">
        <form className="flex md:flex-row flex-col items-center gap-4">
          <div className="relative flex-1 w-full">
            <input
              type="text"
              className="text-sm transition duration-300 ring-2 ring-transparent focus:ring-blue-1000 font-normal font-neulis-sans text-gray-1400 placeholder:text-gray-1400 px-4 pl-10 h-10 bg-white border border-gray1600 rounded-md w-full outline-0"
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
          <div className="flex sm:flex-row flex-col items-center gap-4 md:w-auto w-full">
            <div className="flex items-center gap-4 sm:w-auto w-full md:flex-none flex-1">
              <div className="xl:w-48 md:w-34 w-full">
                <CustomSelect
                  value={filters.country}
                  onChange={(e) => dispatch(setCountryFilter(e.target.value))}
                  options={[
                    { label: "All Countries", value: "All Countries" },
                    { label: "Country", value: "Country" },
                    { label: "Spain", value: "Spain" },
                    { label: "Canada", value: "Canada" },
                    { label: "UK", value: "UK" },
                    { label: "UAE", value: "UAE" },
                    { label: "Australia", value: "Australia" },
                  ]}
                />
              </div>
              <div className="xl:w-48 md:w-34 w-full">
                <CustomSelect
                  value={filters.status}
                  onChange={(e) => dispatch(setStatusFilter(e.target.value))}
                  options={[
                    { label: "All Status", value: "All Status" },
                    { label: "Verified", value: "Verified" },
                    { label: "Pending", value: "Pending" },
                  ]}
                />
              </div>
            </div>
            <button
              type="button"
              onClick={handleClear}
              className="hover:bg-gray-1600 cursor-pointer transition-all duration-500 ease-in-out sm:w-auto w-full inline-flex items-center justify-center px-4.25 text-black13 font-medium text-sm leading-5 gap-2 border border-gray1600 rounded-md h-10"
            >
              <Image src="../images/filter.svg" width="16" height="16" alt="" />
              Clear
            </button>
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
