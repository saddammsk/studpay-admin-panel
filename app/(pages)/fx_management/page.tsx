"use client";
import { useState } from 'react'
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import CustomSelect from "@/app/components/CustomSelect";
import FxManagementTable from '@/app/components/FxManagementTable';

const UsersStudentsPage = () => {
  const [status, setStatus] = useState<string>("All Countries");

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
        <div className=''>
          <div className='flex items-center gap-2 mb-4'>
            <h4 className='text-blue-1300 text-lg leading-7 font-bold'>Real-Time Rate Monitor</h4>
            <p className='text-gray-1900 text-xs leading-4 font-normal flex items-center gap-2'> <span className='bg-lightgreen17 w-2 h-2 rounded-full inline-flex items-center justify-center'></span> Live Rates</p>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            <div className="bg-white rounded-lg border border-solid border-gray-3600 border-l-4 border-l-blue-2200 p-5 shadow-4xl">
              <div className='flex items-start justify-between w-full'>
                <div className='flex items-center gap-2'>
                  <ul className='flex items-center'>
                    <li>
                      <span className='inline-flex items-center justify-center text-blue-2200 text-xs font-bold leading-4 uppercase bg-gray1700 rounded-full w-8 h-8'>EUR</span>
                    </li>
                    <li className='-ml-2'>
                      <span className='inline-flex items-center justify-center text-blue-1300 text-xs font-bold leading-4 uppercase bg-gray1700 border-2 border-solid border-white rounded-full w-8 h-8'>USD</span>
                    </li>
                  </ul>
                  <h4 className='text-blue-1300 text-base leading-6 font-bold'>EUR/USD</h4>
                </div>
                <p className='text-gray-1900 text-xs leading-4 font-normal flex items-center gap-2'> <span className='bg-lightgreen17 w-2 h-2 rounded-full inline-flex items-center justify-center'></span>Live</p>
              </div>
              <div className='mb-6'>
                <ul className='grid grid-cols-3 gap-3'>
                  <li>
                    <span className='block text-xs leading-4 font-medium text-gray-1900 uppercase'>Market Rate</span>
                    <h4 className='text-blue-1300 text-lg leading-7 font-bold'>1.0847</h4>
                  </li>
                  <li>
                    <span className='block text-xs leading-4 font-medium text-gray-1900 uppercase'>Markup</span>
                    <h4 className='text-blue-2200 text-lg leading-7 font-bold'>+0.65%</h4>
                  </li>
                  <li>
                    <span className='block text-xs leading-4 font-medium text-gray-1900 uppercase'>Final Rate</span>
                    <h4 className='text-blue-1300 text-lg leading-7 font-bold'>1.0917</h4>
                  </li>
                </ul>
              </div>
              <span className='bg-green-1600 w-21.5 h-px flex items-center'></span>
              <div className='flex items-center justify-end'>
                <span className='inline-flex items-center gap-1 bg-green-1600/10 rounded-full h-6 px-2'>
                  <Image
                    src="../images/price-arrow-green.svg"
                    width='12'
                    height='12'
                    alt=""
                  />
                  <p className='flex items-center gap-1 text-green-1600 text-xs leading-4 font-medium'>+0.23% <span className='text-gray-1900 block'>24h</span> </p>
                </span>
              </div>

            </div>
            <div className="bg-white rounded-lg border border-solid border-gray-3600 border-l-4 border-l-blue-2200 p-5 shadow-4xl">
              <div className='flex items-start justify-between w-full'>
                <div className='flex items-center gap-2'>
                  <ul className='flex items-center'>
                    <li>
                      <span className='inline-flex items-center justify-center text-blue-2200 text-xs font-bold leading-4 uppercase bg-gray1700 rounded-full w-8 h-8'>EUR</span>
                    </li>
                    <li className='-ml-2'>
                      <span className='inline-flex items-center justify-center text-blue-1300 text-xs font-bold leading-4 uppercase bg-gray1700 border-2 border-solid border-white rounded-full w-8 h-8'>PKR</span>
                    </li>
                  </ul>
                  <h4 className='text-blue-1300 text-base leading-6 font-bold'>EUR/PKR</h4>
                </div>
                <p className='text-gray-1900 text-xs leading-4 font-normal flex items-center gap-2'> <span className='bg-lightgreen17 w-2 h-2 rounded-full inline-flex items-center justify-center'></span>Live</p>
              </div>
              <div className='mb-6'>
                <ul className='grid grid-cols-3 gap-3'>
                  <li>
                    <span className='block text-xs leading-4 font-medium text-gray-1900 uppercase'>Market Rate</span>
                    <h4 className='text-blue-1300 text-lg leading-7 font-bold'>302.4500</h4>
                  </li>
                  <li>
                    <span className='block text-xs leading-4 font-medium text-gray-1900 uppercase'>Markup</span>
                    <h4 className='text-blue-2200 text-lg leading-7 font-bold'>+1.20%</h4>
                  </li>
                  <li>
                    <span className='block text-xs leading-4 font-medium text-gray-1900 uppercase'>Final Rate</span>
                    <h4 className='text-blue-1300 text-lg leading-7 font-bold'>306.0800</h4>
                  </li>
                </ul>
              </div>
              <span className='bg-red-1300 w-21.5 h-px flex items-center'></span>
              <div className='flex items-center justify-end'>
                <span className='inline-flex items-center gap-1 bg-red-1300/10 rounded-full h-6 px-2'>
                  <Image
                    src="../images/price-arrow-red.svg"
                    width='12'
                    height='12'
                    alt=""
                  />
                  <p className='flex items-center gap-1 text-red-1300 text-xs leading-4 font-medium'>+0.23% <span className='text-gray-1900 block'>24h</span> </p>
                </span>
              </div>

            </div>
            <div className="bg-white rounded-lg border border-solid border-gray-3600 border-l-4 border-l-blue-2200 p-5 shadow-4xl">
              <div className='flex items-start justify-between w-full'>
                <div className='flex items-center gap-2'>
                  <ul className='flex items-center'>
                    <li>
                      <span className='inline-flex items-center justify-center text-blue-2200 text-xs font-bold leading-4 uppercase bg-gray1700 rounded-full w-8 h-8'>USD</span>
                    </li>
                    <li className='-ml-2'>
                      <span className='inline-flex items-center justify-center text-blue-1300 text-xs font-bold leading-4 uppercase bg-gray1700 border-2 border-solid border-white rounded-full w-8 h-8'>GBP</span>
                    </li>
                  </ul>
                  <h4 className='text-blue-1300 text-base leading-6 font-bold'>USD/GBP</h4>
                </div>
                <p className='text-gray-1900 text-xs leading-4 font-normal flex items-center gap-2'> <span className='bg-lightgreen17 w-2 h-2 rounded-full inline-flex items-center justify-center'></span>Live</p>
              </div>
              <div className='mb-6'>
                <ul className='grid grid-cols-3 gap-3'>
                  <li>
                    <span className='block text-xs leading-4 font-medium text-gray-1900 uppercase'>Market Rate</span>
                    <h4 className='text-blue-1300 text-lg leading-7 font-bold'>0.7923</h4>
                  </li>
                  <li>
                    <span className='block text-xs leading-4 font-medium text-gray-1900 uppercase'>Markup</span>
                    <h4 className='text-blue-2200 text-lg leading-7 font-bold'>+0.45%</h4>
                  </li>
                  <li>
                    <span className='block text-xs leading-4 font-medium text-gray-1900 uppercase'>Final Rate</span>
                    <h4 className='text-blue-1300 text-lg leading-7 font-bold'>0.7959</h4>
                  </li>
                </ul>
              </div>
              <span className='bg-green-1600 w-21.5 h-px flex items-center'></span>
              <div className='flex items-center justify-end'>
                <span className='inline-flex items-center gap-1 bg-green-1600/10 rounded-full h-6 px-2'>
                  <Image
                    src="../images/price-arrow-green.svg"
                    width='12'
                    height='12'
                    alt=""
                  />
                  <p className='flex items-center gap-1 text-green-1600 text-xs leading-4 font-medium'>+0.15% <span className='text-gray-1900 block'>24h</span> </p>
                </span>
              </div>

            </div>
          </div>
        </div>
        <div className='mt-6'>
          <h4 className='text-blue-1300 text-lg leading-7 font-bold mb-4'>FX Volume & Revenue Analytics</h4>
          <div className='grid grid-cols-4 gap-4'>
            <div className="bg-white rounded-lg border border-solid border-gray-3600 border-l-4 border-l-blue-2200 p-5 shadow-4xl">
              <div className='flex items-center justify-between'>
                <div className='bg-gray1700 w-10 h-10 flex items-center justify-center rounded-lg'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1.66669V18.3334" stroke="#2463EB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.1667 4.16669H7.91667C7.14312 4.16669 6.40125 4.47398 5.85427 5.02096C5.30729 5.56794 5 6.30981 5 7.08335C5 7.8569 5.30729 8.59877 5.85427 9.14575C6.40125 9.69273 7.14312 10 7.91667 10H12.0833C12.8569 10 13.5987 10.3073 14.1457 10.8543C14.6927 11.4013 15 12.1431 15 12.9167C15 13.6902 14.6927 14.4321 14.1457 14.9791C13.5987 15.5261 12.8569 15.8334 12.0833 15.8334H5" stroke="#2463EB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className='inline-flex items-center gap-1 bg-green-1600/10 rounded-full h-6 px-2'>
                  <Image
                    src="../images/price-arrow-green.svg"
                    width='12'
                    height='12'
                    alt=""
                  />
                  <p className='flex items-center gap-1 text-green-1600 text-xs leading-4 font-medium'>+12.5%</p>
                </span>
              </div>
              <div className='mt-3'>
                <p className='text-gray-1900 text-xs leading-4 font-medium mb-1 uppercase'>Total FX Volume (24h)</p>
                <h4 className='text-blue-1300 text-2xl leading-8 font-bold'>$2.4M</h4>
                <p className='text-gray-1900 text-xs leading-4 font-normal mt-1'>4,328 transactions</p>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-solid border-gray-3600 border-l-4 border-l-lightgreen17 p-5 shadow-4xl">
              <div className='flex items-center justify-between'>
                <div className='bg-yellow1800 w-10 h-10 flex items-center justify-center rounded-lg'>
                  <Image
                    src="../images/price-arrow-green.svg"
                    width='20'
                    height='20'
                    alt=""
                  />
                </div>
                <span className='inline-flex items-center gap-1 bg-green-1600/10 rounded-full h-6 px-2'>
                  <Image
                    src="../images/price-arrow-green.svg"
                    width='12'
                    height='12'
                    alt=""
                  />
                  <p className='flex items-center gap-1 text-green-1600 text-xs leading-4 font-medium'>+8.2%</p>
                </span>
              </div>
              <div className='mt-3'>
                <p className='text-gray-1900 text-xs leading-4 font-medium mb-1 uppercase'>Revenue from Spreads</p>
                <h4 className='text-blue-1300 text-2xl leading-8 font-bold'>$34,892</h4>
                <p className='text-gray-1900 text-xs leading-4 font-normal mt-1'>1.45% avg margin</p>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-solid border-gray-3600 border-l-4 border-l-blue-2200 p-5 shadow-4xl">
              <div className='flex items-center justify-between'>
                <div className='bg-gray1700 w-10 h-10 flex items-center justify-center rounded-lg'>
                  <Image
                    src="../icons/trade-arrow.svg"
                    width='20'
                    height='20'
                    alt=""
                  />
                </div>
              </div>
              <div className='mt-3'>
                <p className='text-gray-1900 text-xs leading-4 font-medium mb-1 uppercase'>Most Traded Pair</p>
                <h4 className='text-blue-1300 text-2xl leading-8 font-bold'>EUR/PKR</h4>
                <p className='text-gray-1900 text-xs leading-4 font-normal mt-1'>1,247 trades today</p>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-solid border-gray-3600 border-l-4 border-l-red-1300 p-5 shadow-4xl">
              <div className='flex items-center justify-between gap-3'>
                <div className='bg-yellow1800 w-10 h-10 flex items-center justify-center rounded-lg'>
                  <Image
                    src="../images/warning.svg"
                    width='20'
                    height='20'
                    alt=""
                  />
                </div>
                <div className='flex-1 w-full'>
                  <h4 className='text-blue-1300 text-sm leading-5 font-medium'>Rate Anomalies</h4>
                  <p className='text-red-1300 text-xs leading-4 font-normal'>1 active alert</p>
                </div>
              </div>
              <div className='mt-3 flex items-center justify-between bg-yellow1800 rounded-lg p-2'>
                <h4 className='text-blue-1300 text-sm leading-5 font-normal uppercase'>EUR/PKR</h4>
                <p className='text-red-1300 text-xs leading-4 font-medium'>+5.80%</p>
                <p className='text-gray-1900 text-xs leading-4 font-normal'>2 min ago</p>
              </div>
            </div>
          </div>
        </div>
        {/**** TAB NAV END *****/}
        <FxManagementTable />

      </div>
    </>
  );
};

export default UsersStudentsPage;
