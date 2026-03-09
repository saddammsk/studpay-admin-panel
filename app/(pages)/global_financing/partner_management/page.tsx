"use client";
import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import CustomSelect from "@/app/components/CustomSelect";
import Modal from "@/app/components/Modal";
import AddPartnerModal from "@/app/components/GlobalFinancing/AddPartnerModal";
import FinancePartnerTable from '@/app/components/GlobalFinancing/FinancePartnerTable';

const CircularProgress = ({ value }: { value: number }) => {
  const r = 44;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;

  return (
    <div className="relative w-36 h-36">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="#f0fdf4"
          strokeWidth="10"
        />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="#22c55e"
          strokeWidth="10"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[30px] leading-9 font-bold text-green57">{value}%</span>
        <span className="text-xs leading-4 text-gray-1900 font-normal">On-Time</span>
      </div>
    </div>
  );
};


interface MenuItem {
  name: string;
  href: string;
  icon: string;
  active?: boolean;
}

const menuItems = [
  {
    name: "Loan Ledger",
    href: "/global_financing",
    icon: "../icons/loan-file.svg",
    iconActive: "../icons/loan-file-active.svg",
    active: false,
  },
  {
    name: "Partner Management",
    href: "/global_financing/partner_management",
    icon: "../icons/Partner-icon.svg",
    iconActive: "../icons/Partner-icon-active.svg",
    active: true,
  },
  {
    name: "API Console",
    href: "/global_financing/financing_api_console",
    icon: "../icons/api-keys.svg",
    iconActive: "../icons/api-keys-active.svg",
    active: false,
  },
];


const UsersStudentsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className='font-inter'>
        {/**** MOBILE SHOW ****/}
        <ul className='md:hidden flex items-center justify-end mb-4 gap-1'>
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
              onClick={() => { }}
              iconSrc="/images/plus-icon.svg"
              label="New Application"
              className="text-white text-sm font-normal gap-2 h-9 px-3! bg-blue-1000 hover:bg-blue800 rounded-md border border-solid border-gray1600 m-0!"
            />
          </li>
        </ul>
        {/**** MOBILE SHOW ****/}
        <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 gap-4">
          <div className="flex items-start justify-between bg-white rounded-xl border border-gray-3600/50 4xl:p-6 p-4 shadow-68xl">
            <div className="">
              <p className="text-gray-1900 font-normal text-sm leading-5 mb-3">
                Total Loan Volume
              </p>
              <h4 className="4xl:text-[30px] text-2xl leading-9 font-bold text-blue-1300 tracking-[-0.75px]">
                €2,450,000
              </h4>
              <p className="text-gray-1900 text-sm leading-5 mt-1">Active portfolio</p>
              <div className="flex items-center gap-1 mt-3">
                <span className="4xl:text-sm text-xs leading-5 font-normal block text-green57">
                  ↑ 12.5%
                </span>
                <span className="4xl:text-sm text-xs leading-5 font-normal block text-gray-1900">vs last month</span>
              </div>
            </div>
            <div className="4xl:w-12 w-11 4xl:h-12 h-11 bg-blue-2200/10 rounded-xl flex items-center justify-center">
              <Image
                src="/images/wallet-blue.svg"
                width="24"
                height="24"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-start justify-between bg-white rounded-xl border border-gray-3600/50 4xl:p-6 p-4 shadow-68xl">
            <div className="">
              <p className="text-gray-1900 font-normal text-sm leading-5 mb-3">
                Pending Applications
              </p>
              <h4 className="4xl:text-[30px] text-2xl leading-9 font-bold text-blue-1300 tracking-[-0.75px]">
                12
              </h4>
              <p className="text-gray-1900 text-sm leading-5 mt-1">Awaiting review</p>
              <div className="flex items-center gap-1 mt-3">
                <span className="4xl:text-sm text-xs leading-5 font-normal block text-green57">
                  ↑ 3 new today
                </span>
                <span className="4xl:text-sm text-xs leading-5 font-normal block text-gray-1900">vs last month</span>
              </div>
            </div>
            <div className="4xl:w-12 w-11 4xl:h-12 h-11 bg-yellow-1100/10 rounded-xl flex items-center justify-center">
              <Image
                src="/icons/review-copy.svg"
                width="24"
                height="24"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-start justify-between bg-white rounded-xl border border-gray-3600/50 4xl:p-6 p-4 shadow-68xl">
            <div className="">
              <p className="text-gray-1900 font-normal text-sm leading-5 mb-3">
                Avg. Processing Time
              </p>
              <h4 className="4xl:text-[30px] text-2xl leading-9 font-bold text-blue-1300 tracking-[-0.75px]">
                2.4 days
              </h4>
              <p className="text-gray-1900 text-sm leading-5 mt-1">Application to approval</p>
              <div className="flex items-center gap-1 mt-3">
                <span className="4xl:text-sm text-xs leading-5 font-normal block text-green57">
                  ↑ 8%
                </span>
                <span className="4xl:text-sm text-xs leading-5 font-normal block text-gray-1900">vs last month</span>
              </div>
            </div>
            <div className="4xl:w-12 w-11 4xl:h-12 h-11 bg-green57/10 rounded-xl flex items-center justify-center">
              <Image
                src="/images/price-arrow-green.svg"
                width="24"
                height="24"
                alt=""
              />
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-3600/50 p-6 shadow-68xl">
            <div className="flex items-start justify-between mb-4">
              <p className="text-sm text-gray-1900 font-normal">
                Repayment Health
              </p>
            </div>
            <div className="flex items-center justify-center">
              <CircularProgress value={92.6} />
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green57" />
                <span className="text-gray-1900 text-xs leading-5">On-Time: 847</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-1100" />
                <span className="text-gray-1900 text-xs leading-5">Late: 67</span>
              </div>
            </div>
          </div>
        </div>
        {/**** TAB NAV START *****/}
        <div className='bg-white my-4 border border-solid border-gray-3600 shadow-68xl p-4 rounded-xl'>
          <ul className='flex sm:flex-row flex-col items-center md:gap-6 gap-4'>
            {menuItems.map((item) => (
              <li key={item.name} className='sm:w-auto w-full'>
                <Link
                  href={item.href}
                  className={`inline-flex sm:justify-start justify-center md:w-48 sm:w-auto w-full items-center h-10 px-3 gap-2 font-inter font-normal text-sm leading-5 relative rounded-md border border-solid ${item.active ? "text-white border-ElectricBlue bg-linear-to-r from-royalBlue125 via-royalBlue126 to-royalBlue127" : "text-lighrgrey42 bg-gray-1500 border-gray-3600"
                    }`}
                >
                  <span className="flex items-center justify-center">
                    <Image
                      src={item.active ? item.iconActive : item.icon}
                      width={16}
                      height={16}
                      alt={item.name}
                    />

                  </span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-6 xl:p-6'>
          <div className='flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between mb-6'>
            <div className=''>
              <h4 className='text-blue-1300 font-bold text-2xl leading-8'>Bank Partner Management</h4>
              <p className='text-gray-1900 font-normal text-sm leading-5 mt-1-0.5'>Manage partnerships, track portfolios, and onboard new banks.</p>
            </div>
            <Button
              onClick={() => setIsOpen(true)}
              iconSrc="/images/plus-icon.svg"
              label="Add New Partner Bank"
              className="text-white text-sm font-normal gap-2 h-9 px-3! bg-blue-1000 hover:bg-blue800 rounded-md border border-solid border-gray1600 m-0!"
            />
          </div>
          <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 gap-4">
            <div className="flex items-start justify-between bg-white rounded-xl border border-gray-3600/50 4xl:p-6 p-4 shadow-68xl">
              <div className="">
                <p className="text-gray-1900 font-normal text-sm leading-5 mb-3">
                  Total Onboarded Banks
                </p>
                <h4 className="4xl:text-[30px] text-2xl leading-9 font-bold text-blue-1300 tracking-[-0.75px]">
                  24
                </h4>
                <span className="mt-1 4xl:text-sm text-xs leading-5 font-normal block text-green57">
                  +3 this quarter
                </span>
              </div>
              <div className="4xl:w-12 w-11 4xl:h-12 h-11 bg-blue-2200/10 rounded-xl flex items-center justify-center">
                <Image
                  src="/icons/Banks-icon.svg"
                  width="20"
                  height="20"
                  alt=""
                />
              </div>
            </div>
            <div className="flex items-start justify-between bg-white rounded-xl border border-gray-3600/50 4xl:p-6 p-4 shadow-68xl">
              <div className="">
                <p className="text-gray-1900 font-normal text-sm leading-5 mb-3">
                  Active Loan Portfolios
                </p>
                <h4 className="4xl:text-[30px] text-2xl leading-9 font-bold text-blue-1300 tracking-[-0.75px]">
                  1,847
                </h4>
                <span className="mt-1 4xl:text-sm text-xs leading-5 font-normal block text-green57">
                  +12.4% vs last month
                </span>
              </div>
              <div className="4xl:w-12 w-11 4xl:h-12 h-11 bg-blue-2200/10 rounded-xl flex items-center justify-center">
                <Image
                  src="/icons/briefcase-blue.svg"
                  width="20"
                  height="20"
                  alt=""
                />
              </div>
            </div>
            <div className="flex items-start justify-between bg-white rounded-xl border border-gray-3600/50 4xl:p-6 p-4 shadow-68xl">
              <div className="">
                <p className="text-gray-1900 font-normal text-sm leading-5 mb-3">
                  Total Partner Revenue
                </p>
                <h4 className="4xl:text-[30px] text-2xl leading-9 font-bold text-blue-1300 tracking-[-0.75px]">
                  €4.2M
                </h4>
                <span className="mt-1 4xl:text-sm text-xs leading-5 font-normal block text-green57">
                  +8.7% vs last quarter
                </span>
              </div>
              <div className="4xl:w-12 w-11 4xl:h-12 h-11 bg-blue-2200/10 rounded-xl flex items-center justify-center">
                <Image
                  src="/icons/doller-blue.svg"
                  width="20"
                  height="20"
                  alt=""
                />
              </div>
            </div>
            <div className="flex items-start justify-between bg-white rounded-xl border border-gray-3600/50 4xl:p-6 p-4 shadow-68xl">
              <div className="">
                <p className="text-gray-1900 font-normal text-sm leading-5 mb-3">
                  Avg. Approval Rate
                </p>
                <h4 className="4xl:text-[30px] text-2xl leading-9 font-bold text-blue-1300 tracking-[-0.75px]">
                  73.2%
                </h4>
                <span className="mt-1 4xl:text-sm text-xs leading-5 font-normal block text-red-2000">
                  -1.3% vs last month
                </span>
              </div>
              <div className="4xl:w-12 w-11 4xl:h-12 h-11 bg-blue-2200/10 rounded-xl flex items-center justify-center">
                <Image
                  src="/icons/price-down-blue.svg"
                  width="20"
                  height="20"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/****  *****/}
          <div className='mt-6'>
            <h4 className='text-blue-1300 text-base leading-6 font-semibold mb-3'>Partner Directory</h4>
            <FinancePartnerTable />
          </div>
        </div>
      </div>

      {/* MODAL */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        panelClassName="max-w-[512px] bg-gray-1500 shadow-7xl relative rounded-[10px]! md:p-6 p-4"
      >
        <Link onClick={() => setIsOpen(false)} href={"#"} className="flex items-center justify-center  w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <AddPartnerModal />

      </Modal >


    </>
  );
};

export default UsersStudentsPage;
