"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import CustomSelect from "@/app/components/CustomSelect";
import ProgressBar from "@/app/components/ProgressBar";
import PaymentsTransfersTable from "@/app/components/PaymentsTransfersTable";
import { usePaymentsStore } from "@/app/store/zustand/Usepaymentsstore";

const UsersStudentsPage = () => {
  const search = usePaymentsStore((s) => s.search);
  const filterProvider = usePaymentsStore((s) => s.filterProvider);
  const filterCurrency = usePaymentsStore((s) => s.filterCurrency);
  const filterRisk = usePaymentsStore((s) => s.filterRisk);
  const filterStatus = usePaymentsStore((s) => s.filterStatus);

  const setSearch = usePaymentsStore((s) => s.setSearch);
  const setFilterProvider = usePaymentsStore((s) => s.setFilterProvider);
  const setFilterCurrency = usePaymentsStore((s) => s.setFilterCurrency);
  const setFilterRisk = usePaymentsStore((s) => s.setFilterRisk);
  const setFilterStatus = usePaymentsStore((s) => s.setFilterStatus);

  return (
    <>
      <div className="font-inter">
        <ul className="md:hidden flex items-center justify-end mb-4 gap-1">
          <li>
            <CustomSelect
              className="h-9! w-34! text-gray-1900!"
              options={[
                { label: "Last 30 days", value: "Last 30 days" },
                { label: "2000", value: "2000" },
              ]}
            />
          </li>
          <li>
            <Button
              onClick={() => {}}
              iconSrc="/images/plus-icon.svg"
              label="New Application"
              className="text-white text-sm font-normal gap-2 h-9 px-3! bg-blue-1000 hover:bg-blue800 rounded-md border border-solid border-gray1600 m-0!"
            />
          </li>
        </ul>

        <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 gap-4">
          <div className="flex items-start justify-between bg-white rounded-xl border border-gray-3600/50 4xl:p-6 p-4 shadow-68xl">
            <div className="">
              <p className="text-gray-1900 font-normal text-sm leading-5 mb-3">Total Volume (24h)</p>
              <h4 className="4xl:text-[30px] text-2xl leading-9 font-bold text-blue-1300 tracking-[-0.75px]">€847,320</h4>
              <p className="text-gray-1900 text-sm leading-5 mt-1">Live processing</p>
              <div className="flex items-center gap-1 mt-3">
                <span className="4xl:text-sm text-xs leading-5 font-normal text-green57 flex items-center gap-1">
                  <Image src="/icons/top-right-arrow-green.svg" width="16" height="16" alt="" /> 8.2%
                </span>
                <span className="4xl:text-sm text-xs leading-5 font-normal block text-gray-1900">vs yesterday</span>
              </div>
            </div>
            <div className="4xl:w-12 w-11 4xl:h-12 h-11 bg-blue-2200/10 rounded-xl flex items-center justify-center">
              <Image src="/images/wallet-blue.svg" width="24" height="24" alt="" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-3600/50 4xl:p-6 p-4 shadow-68xl">
            <div className="flex items-start justify-between">
              <div className="">
                <p className="text-gray-1900 font-normal text-sm leading-5 mb-3">Success vs Failure Rate</p>
                <h4 className="4xl:text-[30px] text-2xl leading-9 font-bold text-blue-1300 tracking-[-0.75px]">96.8%</h4>
              </div>
              <div className="4xl:w-12 w-11 4xl:h-12 h-11 bg-blue-2200/10 rounded-xl flex items-center justify-center">
                <Image src="/images/price-arrow.svg" width="24" height="24" alt="" />
              </div>
            </div>
            <div className="mt-4">
              <ProgressBar value={96.8} className="h-3" barColor="bg-green57" bgColor="bg-red-1300" />
              <div className="flex items-center justify-between my-2">
                <p className="text-gray-1900 text-xs leading-4 font-normal flex items-center gap-1.5">
                  <span className="flex items-center w-2 h-2 rounded-full bg-green57"></span> Success (96.8%)
                </p>
                <p className="text-gray-1900 text-xs leading-4 font-normal flex items-center gap-1.5">
                  <span className="flex items-center w-2 h-2 rounded-full bg-red-1300"></span> Failed (3.2%)
                </p>
              </div>
              <p className="text-gray-1900 text-xs leading-4 font-normal flex items-center gap-1.5">2,847 transactions today</p>
            </div>
          </div>

          <div className="flex items-start justify-between bg-white rounded-xl border border-gray-3600/50 4xl:p-6 p-4 shadow-68xl">
            <div className="">
              <p className="text-gray-1900 font-normal text-sm leading-5 mb-3">Active Disputes</p>
              <h4 className="4xl:text-[30px] text-2xl leading-9 font-bold text-blue-1300 tracking-[-0.75px]">7</h4>
              <p className="text-gray-1900 text-sm leading-5 mt-1">Open chargebacks</p>
              <div className="flex items-center gap-1 mt-3">
                <span className="4xl:text-sm text-xs leading-5 font-normal text-green57 flex items-center gap-1">
                  <Image src="/icons/top-right-arrow-green.svg" width="16" height="16" alt="" /> 2 resolved
                </span>
                <span className="4xl:text-sm text-xs leading-5 font-normal block text-gray-1900">vs yesterday</span>
              </div>
            </div>
            <div className="4xl:w-12 w-11 4xl:h-12 h-11 bg-yellow-1100/10 rounded-xl flex items-center justify-center">
              <Image src="/images/warning-yellow.svg" width="24" height="24" alt="" />
            </div>
          </div>

          <div className="flex items-start justify-between bg-white rounded-xl border border-gray-3600/50 4xl:p-6 p-4 shadow-68xl">
            <div className="">
              <p className="text-gray-1900 font-normal text-sm leading-5 mb-3">Pending Review</p>
              <h4 className="4xl:text-[30px] text-2xl leading-9 font-bold text-blue-1300 tracking-[-0.75px]">23</h4>
              <p className="text-gray-1900 text-sm leading-5 mt-1">AML flagged</p>
              <div className="flex items-center gap-1 mt-3">
                <span className="4xl:text-sm text-xs leading-5 font-normal text-red-1300 flex items-center gap-1">
                  <Image src="/icons/down-red-right.svg" width="16" height="16" alt="" /> 5 new
                </span>
                <span className="4xl:text-sm text-xs leading-5 font-normal block text-gray-1900">vs yesterday</span>
              </div>
            </div>
            <div className="4xl:w-12 w-11 4xl:h-12 h-11 bg-red-1300/10 rounded-xl flex items-center justify-center">
              <Image src="/images/warning.svg" width="24" height="24" alt="" />
            </div>
          </div>
        </div>

        <div className="bg-white border my-6 border-gray-1000 rounded-lg p-4">
          <div className="flex xl:flex-row flex-col flex-wrap items-center gap-3 4xl:flex-1">
            <div className="relative flex-1 w-full">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-sm font-normal text-gray-1900 placeholder:text-gray-1900 px-4 pl-9 h-10 bg-gray-6600 border border-gray-1000 rounded-md w-full outline-0"
                placeholder="Search by Transaction ID, Student Name..."
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-3">
                <Image src="/icons/search-dark.svg" width="16" height="16" alt="" />
              </div>
            </div>
            <div className="xl:flex grid sm:grid-cols-4 grid-cols-2 xl:w-auto w-full items-center gap-3">
              <div className="relative xl:w-35 w-full">
                <CustomSelect
                  className="w-full bg-gray-6600 border border-gray-1000"
                  value={filterProvider}
                  onChange={setFilterProvider}
                  options={[
                    { label: "All Providers", value: "All Providers" },
                    { label: "Stripe", value: "Stripe" },
                    { label: "Adyen", value: "Adyen" },
                  ]}
                />
              </div>
              <div className="relative xl:w-35 w-full">
                <CustomSelect
                  className="w-full bg-gray-6600 border border-gray-1000"
                  value={filterCurrency}
                  onChange={setFilterCurrency}
                  options={[
                    { label: "All Currencies", value: "All Currencies" },
                    { label: "EUR", value: "EUR" },
                    { label: "USD", value: "USD" },
                  ]}
                />
              </div>
              <div className="relative xl:w-35 w-full">
                <CustomSelect
                  className="w-full bg-gray-6600 border border-gray-1000"
                  value={filterRisk}
                  onChange={setFilterRisk}
                  options={[
                    { label: "All Levels", value: "All Levels" },
                    { label: "Low", value: "Low" },
                    { label: "Medium", value: "Medium" },
                    { label: "High", value: "High" },
                  ]}
                />
              </div>
              <div className="relative xl:w-35 w-full">
                <CustomSelect
                  className="w-full bg-gray-6600 border border-gray-1000"
                  value={filterStatus}
                  onChange={setFilterStatus}
                  options={[
                    { label: "Status", value: "Status" },
                    { label: "Completed", value: "Completed" },
                    { label: "Pending", value: "Pending" },
                    { label: "On Hold", value: "On Hold" },
                    { label: "Failed", value: "Failed" },
                    { label: "Refunded", value: "Refunded" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <PaymentsTransfersTable />
      </div>
    </>
  );
};

export default UsersStudentsPage;