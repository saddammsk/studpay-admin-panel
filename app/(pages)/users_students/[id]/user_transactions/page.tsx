"use client";
import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import Modal from "@/app/components/Modal";
import CustomSelect from "@/app/components/CustomSelect";
import RecentAuditTable from '@/app/components/UsersStudent/RecentAuditTable';
import UserAccountTable from '@/app/components/UsersStudent/UserAccountTable';
import { Radio, RadioGroup } from '@headlessui/react'

const plans = [
  { name: 'Current Accountp', disk: 'Standard transactional account for daily use' },
  { name: 'Savings Pot', disk: 'Interest-bearing account for savings goals' },
  { name: 'Blocked AVI Account', disk: 'Visa-compliant blocked account for international students' },
]


const UsersStudentsPage = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<string>("All Countries");

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(plans[0])
  return (
    <div className='font-inter'>

        <div className='flex xl:flex-row flex-col items-start gap-4'>
          <div className='xl:w-[calc(100%-300px)] w-full'>
            <div className='mb-6'>
              <h4 className='text-black-2000 font-semibold text-2xl mb-1 leading-8'>User Transaction Ledger</h4>
              <p className='text-gray-3800 font-normal text-sm leading-5'>View and manage all user transactions</p>
            </div>
            <div className='grid 5xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
              <div className='bg-white shadow-4xl rounded-lg p-4'>
                <span className='text-gray-3800 font-inter font-normal text-sm leading-5 block'>Total Inflow</span>
                <h4 className='text-green-5000 font-inter font-semibold md:text-2xl text-lg leading-8'>+€3.500,00</h4>
              </div>
              <div className='bg-white shadow-4xl rounded-lg p-4'>
                <span className='text-gray-3800 font-inter font-normal text-sm leading-5 block'>Total Inflow</span>
                <h4 className='text-red2000 font-inter font-semibold md:text-2xl text-lg leading-8'>+€3.500,00</h4>
              </div>
              <div className='bg-white shadow-4xl rounded-lg p-4'>
                <span className='text-gray-3800 font-inter font-normal text-sm leading-5 block'>Total Inflow</span>
                <h4 className='text-black-2000 font-inter font-semibold md:text-2xl text-lg leading-8'>+€3.500,00</h4>
              </div>
            </div>
            <div className='bg-white rounded-lg p-4 mt-6 shadow-4xl'>
              <div className="relative flex-1 xl:max-w-md md:max-w-90 md:mb-0 mb-4 max-w-full w-full">
                <input
                  type="text"
                  className="text-sm transition duration-300 ring-2 ring-transparent focus:ring-transparent font-normal font-neulis-sans text-gray-1900 placeholder:text-gray-1400 px-4 pl-10 h-9 bg-gray-1500 border border-gray-3600 rounded-md w-full outline-0"
                  placeholder="Search students, transactions..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
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
              <ul className='space-y-3 mt-3'>
                <li>
                  <div className='md:w-39 w-full'>
                    <CustomSelect
                      value={status}
                      className='h-10'
                      onChange={(e) => setStatus(e.target.value)}
                      options={[
                        { label: "All Accounts", value: "All Accounts" },
                      ]}
                    />
                  </div>
                </li>
                <li>
                  <div className='md:w-35 w-full'>
                    <CustomSelect
                      value={status}
                      className='h-10'
                      onChange={(e) => setStatus(e.target.value)}
                      options={[
                        { label: "All Status", value: "All Status" },
                      ]}
                    />
                  </div>
                </li>
                <li>
                  <div className='md:w-35 w-full'>
                    <CustomSelect
                      value={status}
                      className='h-10'
                      onChange={(e) => setStatus(e.target.value)}
                      options={[
                        { label: "All Types", value: "All Types" },
                      ]}
                    />
                  </div>
                </li>
                <li>
                  <div className="relative flex-1 xl:max-w-md md:max-w-90 md:mb-0 mb-4 max-w-full w-full">
                    <input
                      type="text"
                      className="text-sm transition duration-300 ring-2 ring-transparent focus:ring-transparent font-normal font-neulis-sans text-black-2000 placeholder:text-black-2000 px-4 pl-10 h-9 bg-gray-1500 border border-gray-3600 rounded-md w-full outline-0"
                      placeholder="Date Range"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 left-3">
                      <Image
                        src="../images/calendar-icon4.svg"
                        width="16"
                        height="16"
                        alt=""
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='bg-white pb-6 border border-solid border-gray-3100 shadow-4xl mt-6 rounded-lg'>
              <div className='flex items-center justify-between 5xl:px-6 xl:px-3 px-4 pt-6 pb-4'>
                <h4 className='text-blue-1300 font-inter font-semibold text-lg leading-7 tracking-[-0.45px]'>User Accounts</h4>
                <Button onClick={() => setIsOpen(true)}
                  iconSrc="/images/plus-icon.svg"
                  label="Add Account"
                  className="text-white text-sm font-normal gap-2 h-9 px-3! bg-blue-1000 hover:bg-blue800 rounded-md border border-solid border-gray1600 m-0!"
                />
              </div>
              <UserAccountTable />
            </div>
            <div className='bg-white pb-6 border border-solid border-gray-3100 shadow-4xl mt-6 rounded-lg'>
              <div className='flex items-center justify-between xl:px-6 px-4 xl:pt-6 pt-4 pb-4'>
                <h4 className='text-blue-1300 font-inter font-semibold text-lg leading-7 tracking-[-0.45px]'>Recent Transactions</h4>
                <Link href={'#'} className='inline-flex items-center justify-center text-blue-1300 font-inter font-medium text-sm leading-5 bg-gray-1600 border border-solid border-gray-3100 rounded-md px-3 h-9'>View All</Link>
              </div>
              <div className='xl:px-6 px-4'>
                <div className='flex items-center mb-3 gap-3 px-3 py-4 relative z-50 bg-gray-1600/50 rounded-lg hover:bg-gray-1600 transition-all duration-500 ease-in-out'>
                  <span className='bg-lightgreen17/10 w-8 h-8 flex items-center justify-center rounded-full'>
                    <Image src="../icons/left-down-arrow.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                  </span>
                  <div className='flex-1 w-full flex items-center justify-between'>
                    <div className=''>
                      <h4 className='text-blue-1300 font-inter font-medium text-sm leading-5'>Salary Payment</h4>
                      <p className='text-gray-1900 font-inter font-normal text-xs leading-4'>2024-01-28</p>
                    </div>
                    <span className='text-lightgreen17 font-inter font-semibold sm:text-sm text-xs leading-5 block'>+€2,450.00</span>
                  </div>
                </div>
                <div className='flex items-center mb-3 gap-3 px-3 py-4 relative z-50 bg-gray-1600/50 rounded-lg hover:bg-gray-1600 transition-all duration-500 ease-in-out'>
                  <span className='bg-red1700/10 w-8 h-8 flex items-center justify-center rounded-full'>
                    <Image src="../images/payment-red-arrow.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                  </span>
                  <div className='flex-1 w-full flex items-center justify-between'>
                    <div className=''>
                      <h4 className='text-blue-1300 font-inter font-medium text-sm leading-5'>Rent Payment</h4>
                      <p className='text-gray-1900 font-inter font-normal text-xs leading-4'>2024-01-27</p>
                    </div>
                    <span className='text-red1700 font-inter font-semibold sm:text-sm text-xs leading-5 block'>€850,00</span>
                  </div>
                </div>
                <div className='flex items-center mb-3 gap-3 px-3 py-4 relative z-50 bg-gray-1600/50 rounded-lg hover:bg-gray-1600 transition-all duration-500 ease-in-out'>
                  <span className='bg-lightgreen17/10 w-8 h-8 flex items-center justify-center rounded-full'>
                    <Image src="/icons/left-down-arrow.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                  </span>
                  <div className='flex-1 w-full flex items-center justify-between'>
                    <div className=''>
                      <h4 className='text-blue-1300 font-inter font-medium text-sm leading-5'>Transfer from Savings</h4>
                      <p className='text-gray-1900 font-inter font-normal text-xs leading-4'>2024-01-26</p>
                    </div>
                    <span className='text-lightgreen17 font-inter font-semibold sm:text-sm text-xs leading-5 block'>+€500,00</span>
                  </div>
                </div>
                <div className='flex items-center mb-3 gap-3 px-3 py-4 relative z-50 bg-gray-1600/50 rounded-lg hover:bg-gray-1600 transition-all duration-500 ease-in-out'>
                  <span className='bg-red1700/10 w-8 h-8 flex items-center justify-center rounded-full'>
                    <Image src="../images/payment-red-arrow.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                  </span>
                  <div className='flex-1 w-full flex items-center justify-between'>
                    <div className=''>
                      <h4 className='text-blue-1300 font-inter font-medium text-sm leading-5'>Grocery Store</h4>
                      <p className='text-gray-1900 font-inter font-normal text-xs leading-4'>2024-01-26</p>
                    </div>
                    <span className='text-red1700 font-inter font-semibold sm:text-sm text-xs leading-5 block'>€67,45</span>
                  </div>
                </div>
                <div className='flex items-center gap-3 px-3 py-4 relative z-50 bg-gray-1600/50 rounded-lg hover:bg-gray-1600 transition-all duration-500 ease-in-out'>
                  <span className='bg-red1700/10 w-8 h-8 flex items-center justify-center rounded-full'>
                    <Image src="../images/payment-red-arrow.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                  </span>
                  <div className='flex-1 w-full flex items-center justify-between'>
                    <div className=''>
                      <h4 className='text-blue-1300 font-inter font-medium text-sm leading-5'>Netflix Subscription</h4>
                      <p className='text-gray-1900 font-inter font-normal text-xs leading-4'>2024-01-25</p>
                    </div>
                    <span className='text-red1700 font-inter font-semibold sm:text-sm text-xs leading-5 block'>€15,99</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white border border-solid border-gray-3100 shadow-4xl 2xl:p-6 p-4 mt-4 rounded-lg'>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-blue-1300 font-inter font-semibold text-base leading-6 tracking-[-0.4px] flex items-center gap-2">
                  <Image src="../images/clock-gray.svg" width="16" height="16" alt="" />
                  Recent Audit Trail
                </h4>
                <Link className="inline-flex items-center hover:underline text-blue1400 font-inter font-normal text-sm leading-5" href="#">
                  View full log
                </Link>
              </div>
              <div className=''>
                <RecentAuditTable />
              </div>
            </div>
          </div>
          <div className='xl:max-w-75 w-full bg-white border border-solid border-gray-3100 rounded-lg shadow-4xl md:p-6 p-4'>
            <h4 className='text-blue-1300 font-inter font-semibold text-base leading-6 tracking-[-0.4px] gap-2 flex items-center'>
              <Image src="../images/sheild-active.svg"
                width="16"
                height="16"
                alt=""
              />
              Administrative Actions
            </h4>
            <ul className='mt-3'>
              <li className='mb-2'>
                <Link href={"#"} className='text-white text-sm leading-5 font-inter font-medium flex items-center gap-2 bg-blue1400 hover:bg-blue-1400 transition-all duration-500 ease-in-out rounded-md px-4 h-10'>
                  <Image src="../images/eye-icon.svg"
                    width="16"
                    height="16"
                    alt=""
                    className='brightness-1000'
                  />
                  Impersonate User
                </Link>
              </li>
              <li className='mb-2'>
                <Link href={"#"} className='text-white text-sm leading-5 font-inter font-medium flex items-center gap-2 bg-red1700 hover:bg-red1700/90 transition-all duration-500 ease-in-out rounded-md px-4 h-10'>
                  <Image src="../images/freeze-icon.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                  Freeze Account
                </Link>
              </li>
              <li>
                <Link href={"#"} className='text-yellow-1100 border border-solid border-yellow-1100/50 text-sm leading-5 font-inter font-medium flex items-center justify-between bg-gray-1600 hover:bg-skyblue2434 transition-all duration-500 ease-in-out rounded-md px-4 h-10'>
                  <div className='flex items-center gap-2'>
                    <Image src="../images/filter-yellow.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                    Adjust Limits
                  </div>
                  <span className='text-yellow-1100 font-inter font-medium text-[10px] leading-5 bg-yellow-1100/10 rounded px-1.5 h-6'>4-Eyes</span>
                </Link>
              </li>
            </ul>
            <div className='border-t border-b border-solid border-gray-3100 py-3 mt-3'>
              <h4 className='text-gray-1900 font-inter font-medium text-xs leading-4 tracking-[-0.3px] uppercase'>Send Message</h4>
              <ul className='mt-2 grid grid-cols-2 gap-3'>
                <li>
                  <Link href={"#"} className='w-full inline-flex items-center gap-2 text-blue-1300 font-inter font-normal text-sm leading-5 border border-solid border-gray-3100 rounded-md bg-gray-1600 h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
                    <Image src="../images/email-black.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                    Email
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className='w-full inline-flex items-center gap-2 text-blue-1300 font-inter font-normal text-sm leading-5 border border-solid border-gray-3100 rounded-md bg-gray-1600 h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
                    <Image src="../images/puch-icon.svg"
                      width="16"
                      height="16"
                      alt=""
                    />
                    Push
                  </Link>
                </li>
              </ul>
            </div>
            <div className='pt-3'>
              <h4 className='text-gray-1900 font-inter font-medium text-xs leading-4 tracking-[-0.3px] uppercase'>Quick Stats</h4>
              <ul className='grid grid-cols-2 gap-3 mt-2'>
                <li>
                  <span className='block text-gray-1900 font-normal text-xs leading-4 mb-0.5'>Account Age</span>
                  <p className="text-blue-1300 font-medium text-sm leading-5">2y 4mo</p>
                </li>
                <li>
                  <span className='block text-gray-1900 font-normal text-xs leading-4 mb-0.5'>Total Txns</span>
                  <p className="text-blue-1300 font-medium text-sm leading-5">1,247</p>
                </li>
                <li>
                  <span className='block text-gray-1900 font-normal text-xs leading-4 mb-0.5'>Avg. Monthly</span>
                  <p className="text-blue-1300 font-medium text-sm leading-5">€3,450</p>
                </li>
                <li>
                  <span className='block text-gray-1900 font-normal text-xs leading-4 mb-0.5'>Support Tickets</span>
                  <p className="text-blue-1300 font-medium text-sm leading-5">12</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        panelClassName="max-w-[560px] bg-gray-1500 relative"
      >
        <Link onClick={() => setIsOpen(false)} href={"#"} className="flex items-center justify-center border-2 border-solid border-blue1800 rounded-lg w-8 h-8 absolute top-4.5 right-6">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className='border-b border-solid border-grey-5400 px-6 py-5'>
          <h4 className='text-black-2000 font-semibold text-lg leading-7 tracking-[-0.45px]'>Add New Account</h4>
          <p className='text-gray-3800 font-normal text-sm leading-5 mt-1.5'>Create a new sub-account for this student profile</p>
        </div>
        <div className="py-5 px-6">
          <div className=''>
            <label className='text-black-2000 mb-2 font-semibold text-sm leading-3.5'>Account Type</label>
            <RadioGroup by="name" value={selected} onChange={setSelected} aria-label="Server size" className="space-y-2">
              {plans.map((plan) => (
                <Radio
                  key={plan.name}
                  value={plan}
                  className="group relative flex cursor-pointer rounded-lg bg-white p-3 border border-solid border-grey-5400 transition focus:not-data-focus:outline-none data-checked:bg-blue1900 data-checked:border-blue1400  data-checked:shadow-56xl data-focus:outline data-focus:outline-white"
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="text-sm/6">
                      <h4 className="font-semibold text-base mb-0.5 leading-6 text-black-2000">{plan.name}</h4>
                      <p className='font-normal text-xs leading-4 text-gray-3800'>{plan.disk}</p>
                    </div>
                    <div className="w-4 h-4 flex items-center justify-center relative rounded-full bg-white border-2 border-solid border-grey-5400 transition group-data-checked:bg-blue1400 group-data-checked:border-blue1400">
                      <span className='flex items-center justify-center rounded-full w-1.5 h-1.5 bg-white group-data-checked:opacity-100'></span>
                    </div>
                  </div>
                </Radio>
              ))}
            </RadioGroup>
          </div>
          <div className='mt-5'>
            <label className='text-black-2000 mb-2 font-medium text-sm leading-3.5'>Base Currency</label>
          </div>
        </div>
        <div className="bg-grey5500/30 border border-solid border-gray-3900/60 px-6 py-4">
          <ul className="grid grid-cols-2 gap-3">
            <li>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 cursor-pointer hover:bg-lightgreenNew2 hover:text-darkgreen59 transition-all duration-500 ease-in-out w-full shadow-55xl border rounded-[10px] text-blue1700 font-normal text-[13.3px] leading-5 bg-gray-1800 border-solid border-gray-3900 h-9.5"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer flex items-center justify-center w-full hover:bg-lightgreen17 hover:border-lightgreen17 transition-all duration-500 ease-in-out border rounded-[10px] text-white font-normal gap-2 text-[13.3px] leading-5 bg-blue-1000 border-solid border-blue-1000 h-9.5"
              >
                <Image src="/images/send-icon.svg" width={14} height={14} alt="" />
                Send Campaign
              </button>
            </li>
          </ul>
        </div>


      </Modal >
    </div>
  );
};

export default UsersStudentsPage;
