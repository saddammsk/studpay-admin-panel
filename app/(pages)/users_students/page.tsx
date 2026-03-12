"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import UserStudentTable from "@/app/components/UsersStudent/UserStudentTable";
import CustomSelect from "@/app/components/CustomSelect";
import { useUsersStudentsStore } from "@/app/store/zustand/Usersstudentsstore";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";


const stats = [
  {
    id: 1,
    icon: "/images/user-icon.svg",
    label: "Total Users",
    value: "87",
    badge: "+12.5%",
    badgeClass: "text-lightgreen17",
  },
  {
    id: 2,
    icon: "/images/user-icon.svg",
    label: "KYC Verified",
    value: "54",
    badge: "62.1%",
    badgeClass: "text-lightgreen17",
  },
  {
    id: 3,
    icon: "/images/user-icon.svg",
    label: "Pending Review",
    value: "23",
    badge: "Needs attention",
    badgeClass: "text-yellow-1100",
  },
  {
    id: 4,
    icon: "/images/user-icon.svg",
    label: "High Risk",
    value: "29",
    badge: "Monitor closely",
    badgeClass: "text-red1600",
  },
];


const UsersStudentsPage = () => {
  const {
    filters,
    setSearch,
    setCountryFilter,
    setStatusFilter,
    setScoreFilter,
    setPlanFilter,
    setSourceFilter,
    setBulkAction,
    resetFilters,
  } = useUsersStudentsStore();

  return (
    <div className="w-full">
      <ul className="md:hidden flex items-center justify-end mb-4 gap-1">
        <li>
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out"
          >
            <Image src="/images/refresh-icon.svg" width={16} height={16} alt="" />
            Refresh
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out"
          >
            <Image src="/images/export-icon4.svg" width={16} height={16} alt="" />
            Export
          </Link>
        </li>
        <li>
          <Button
            onClick={() => {}}
            iconSrc="/images/userplus-white.svg"
            label="Add User"
            className="text-white text-sm font-normal gap-2 h-9 px-3! bg-blue-1000 hover:bg-blue800 rounded-md border border-solid border-gray1600 m-0!"
          />
        </li>
      </ul>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white border border-solid border-gray-3600 rounded-lg py-4 pl-5 pr-2"
          >
            <span className="flex items-center gap-2 text-gray-1900 font-inter font-normal text-sm leading-5">
              <Image src={stat.icon} width={16} height={16} alt="" />
              {stat.label}
            </span>
            <div className="flex items-center justify-between mt-2">
              <h4 className="text-black-1600 font-inter font-bold text-2xl leading-8">
                {stat.value}
              </h4>
              <span className={`font-inter font-normal text-xs leading-4 ${stat.badgeClass}`}>
                {stat.badge}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white mt-6 p-4 rounded-xl border border-solid border-gray-3600">
        <form>
          <div className="flex md:flex-row flex-col items-center justify-between">
            <div className="relative flex-1 xl:max-w-md md:max-w-90 md:mb-0 mb-4 max-w-full w-full">
              <input
                type="text"
                className="text-sm transition duration-300 ring-2 ring-transparent focus:ring-transparent font-normal font-neulis-sans text-gray-1900 placeholder:text-gray-1400 px-4 pl-10 h-9 bg-gray-1500 border border-gray-3600 rounded-md w-full outline-0"
                placeholder="Search students, transactions..."
                value={filters.search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-3">
                <Image src="../images/search-icon.svg" width={16} height={16} alt="" />
              </div>
            </div>

            <ul className="md:w-auto w-full md:flex grid grid-cols-2 items-center gap-2">
              <li>
                <div className="md:w-39 w-full">
                  <CustomSelect
                    value={filters.bulkAction}
                    className="h-9"
                    onChange={setBulkAction}
                    options={[{ label: "Bulk Actions", value: "Bulk Actions" },
                      { label: "Delete Selected", value: "Delete Selected" },
                      { label: "Update Status", value: "Update Status" },
                      { label: "Export Selected", value: "Export Selected" },
                    ]}
                  />
                </div>
              </li>
              <li className="md:w-auto w-full">
                <Menu as="div" className="relative inline-block md:w-auto w-full">
                  <MenuButton
                    className="cursor-pointer transition-all duration-500 ease-in-out md:w-auto w-full inline-flex items-center justify-center px-3 text-black-1600 font-normal text-sm leading-5 gap-2 bg-gray-1500 border border-gray-3600 hover:bg-gray-3600 rounded-md h-9"
                  >
                    <Image src="/images/filter.svg" width={16} height={16} alt="" />
                    More Filters
                  </MenuButton>

                  <MenuItems
                    className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white border border-gray-200 shadow-lg focus:outline-none z-50"
                  >
                    <div className="p-2 space-y-1">
                      <MenuItem>
                        {({ active }) => (
                          <button
                            className={`w-full text-left px-3 py-1 rounded-md text-sm ${
                              active ? "bg-gray-100" : ""
                            }`}
                          >
                            Date Range
                          </button>
                        )}
                      </MenuItem>

                      <MenuItem>
                        {({ active }) => (
                          <button
                            className={`w-full text-left px-3 py-1 rounded-md text-sm ${
                              active ? "bg-gray-100" : ""
                            }`}
                          >
                            Status
                          </button>
                        )}
                      </MenuItem>

                      <MenuItem>
                        {({ active }) => (
                          <button
                            onClick={resetFilters}
                            className={`w-full text-left px-3 py-1 rounded-md text-sm text-red-600 ${
                              active ? "bg-red-50" : ""
                            }`}
                          >
                            Reset Filters
                          </button>
                        )}
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </li>
            </ul>
          </div>

          <div className="md:flex grid grid-cols-2 items-center lg:flex-nowrap flex-wrap gap-3 sm:w-auto w-full md:flex-none mt-4">
            <div className="xl:w-40 lg:w-34 md:w-41.5 w-full">
              <CustomSelect
                value={filters.country}
                onChange={setCountryFilter}
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
                onChange={setStatusFilter}
                options={[
                  { label: "All Status", value: "All Status" },
                  { label: "Verified", value: "Verified" },
                  { label: "Pending", value: "Pending" },
                  { label: "Rejected", value: "Rejected" },
                ]}
              />
            </div>
            <div className="xl:w-35 lg:w-34 md:w-41.5 w-full">
              <CustomSelect
                value={filters.score}
                onChange={setScoreFilter}
                options={[
                  { label: "All Scores", value: "All Scores" },
                  { label: "High Score", value: "High Score" },
                  { label: "Medium Score", value: "Medium Score" },
                  { label: "Low Score", value: "Low Score" },
                ]}
              />
            </div>
            <div className="xl:w-32.5 lg:w-34 md:w-41.5 w-full">
              <CustomSelect
                value={filters.plan}
                onChange={setPlanFilter}
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
                value={filters.source}
                onChange={setSourceFilter}
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