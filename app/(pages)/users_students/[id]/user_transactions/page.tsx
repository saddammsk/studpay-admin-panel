"use client";
import Image from "next/image";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CustomSelect from "@/app/components/CustomSelect";
import AdminActions from "@/app/components/UsersStudent/AdminActions";
import UserTransactionTable from "@/app/components/UsersStudent/UserTransactionTable";
import { useTransactionStore } from "@/app/store/zustand/useUserTransactionStore";

const UsersStudentsPage = () => {
  const {
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    accountFilter,
    setAccountFilter,
    typeFilter,
    setTypeFilter,
    dateRange,
    setDateRange,
    totalInflow,
    totalOutflow,
    netBalance,
  } = useTransactionStore();

  return (
    <div className="font-inter">
      <div className="flex xl:flex-row flex-col items-start gap-4">
        <div className="xl:w-[calc(100%-300px)] w-full mt-5">
          <div className="mb-6">
            <h4 className="text-blue-1300 font-inter font-bold text-2xl leading-7">
              User Transaction Ledger
            </h4>
            <p className="text-gray-3800 font-normal text-sm leading-5">
              View and manage all user transactions
            </p>
          </div>
          <div className="grid 5xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            <div className="bg-white shadow-4xl rounded-lg p-4">
              <span className="text-gray-3800 font-inter font-normal text-sm leading-5 block">
                Total Inflow
              </span>
              <h4 className="text-green-5000 font-inter font-semibold md:text-2xl text-lg leading-8">
                {totalInflow}
              </h4>
            </div>
            <div className="bg-white shadow-4xl rounded-lg p-4">
              <span className="text-gray-3800 font-inter font-normal text-sm leading-5 block">
                Total Outflow
              </span>
              <h4 className="text-red2000 font-inter font-semibold md:text-2xl text-lg leading-8">
                {totalOutflow}
              </h4>
            </div>
            <div className="bg-white shadow-4xl rounded-lg p-4">
              <span className="text-gray-3800 font-inter font-normal text-sm leading-5 block">
                Net Balance
              </span>
              <h4 className="text-black-2000 font-inter font-semibold md:text-2xl text-lg leading-8">
                {netBalance}
              </h4>
            </div>
          </div>
          <div className="bg-white 4xl:flex-row flex-col flex items-center gap-3 rounded-lg p-4 mt-6 shadow-4xl">
            <div className="relative flex-1 xl:max-w-md md:max-w-90 md:mb-0 mb-4 max-w-full w-full">
              <input
                type="text"
                className="text-sm transition duration-300 ring-2 ring-transparent focus:ring-transparent font-normal font-neulis-sans text-gray-1900 placeholder:text-gray-1400 px-4 pl-10 h-10 bg-gray-1500 border border-gray-3600 rounded-md w-full outline-0"
                placeholder="Search students, transactions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-3">
                <Image
                  src="/images/search-icon.svg"
                  width="16"
                  height="16"
                  alt=""
                />
              </div>
            </div>
            <ul className="space-y-3 flex mt-3 gap-2 flex-1">
              <li>
                <div className="md:w-39 w-full">
                  <CustomSelect
                    value={accountFilter}
                    className="h-10"
                    onChange={setAccountFilter}
                    options={[
                      { label: "All Accounts", value: "All Accounts" },
                      { label: "Main EUR Account", value: "Main EUR Account" },
                      { label: "AVI Blocked Pot", value: "AVI Blocked Pot" },
                    ]}
                  />
                </div>
              </li>
              <li>

                <div className="md:w-35 w-full">
                  <CustomSelect
                    value={statusFilter}
                    className="h-10"
                    onChange={()=>setStatusFilter(statusFilter)}
                    options={[
                      { label: "All Status", value: "All Status" },
                      { label: "Completed", value: "Completed" },
                      { label: "Pending", value: "Pending" },
                      { label: "Failed", value: "Failed" },
                      { label: "Reversed", value: "Reversed" },
                    ]}
                  />
                </div>
              </li>
              <li>
                <div className="md:w-35 w-full">
                  <CustomSelect
                    value={typeFilter}
                    className="h-10"
                    onChange={setTypeFilter}
                    options={[{ label: "All Types", value: "All Types" }]}
                  />
                </div>
              </li>
              <li className="flex-1">
                <div className="relative flex-1 xl:max-w-md md:max-w-90 md:mb-0 mb-4 max-w-full w-full">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="text-sm flex-1 transition duration-300 font-normal font-neulis-sans px-4 pl-10 h-10 bg-gray-1500 border border-gray-3600 rounded-md w-full outline-0 text-left flex items-center"
                      >
                        {dateRange ? (
                          <span className="text-black-2000">
                            {format(dateRange, "MMM dd, yyyy")}
                          </span>
                        ) : (
                          <span className="text-black-2000">Date Range</span>
                        )}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={dateRange}
                        onSelect={setDateRange}
                      />
                    </PopoverContent>
                  </Popover>
                  <div className="absolute top-1/2 -translate-y-1/2 left-3 pointer-events-none">
                    <Image
                      src="/images/calendar-icon4.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-4xl mt-6 rounded-lg">
            <UserTransactionTable />
          </div>
        </div>

        <AdminActions />
      </div>
    </div>
  );
};

export default UsersStudentsPage;