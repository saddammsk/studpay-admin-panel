"use client";
import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import CustomSelect from "@/app/components/CustomSelect";
import AccountLedgerTable from '@/app/components/AccountsBalance/AccountLedgerTable';




const UsersStudentsPage = () => {

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
        <div className='bg-white flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between border border-solid border-gray-3100 rounded-lg xl:p-5 p-2.5'>
          <div className='flex md:flex-row flex-col md:items-center items-start xl:gap-4 gap-2.5'>
            <Link href={"#"} className='group flex items-center justify-center xl:w-10 xl:h-10 w-6 h-6 rounded-[10px] hover:bg-lighrgrey46'>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path className='group-hover:stroke-royalBlue130'
                  d="M7.99967 12.6667L3.33301 8L7.99967 3.33334"
                  stroke="#020817"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path className='group-hover:stroke-royalBlue130'
                  d="M12.6663 8H3.33301"
                  stroke="#020817"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <div className='flex items-center gap-3'>
              <span className='bg-blue-1400/10 rounded-full xl:w-12 xl:h-12 w-10 h-10 flex items-center justify-center'>
                <Image
                  src="../icons/user-dark.svg"
                  width='24'
                  height='24'
                  alt=""
                />
              </span>
              <div className='flex-1 w-full'>
                <div className='flex items-center gap-2'>
                  <h4 className='text-blue1700 xl:text-lg text-base leading-7 font-bold'>Emma Johnson</h4>
                  <span className='text-green-1600 text-xs leading-6 font-bold border border-solid border-green-1600/20 bg-green-1600/10 h-5.5 px-2.5 rounded-full inline-flex items-center justify-center'>Active</span>
                </div>
                <ul className='flex md:flex-nowrap flex-wrap items-center sm:gap-4 gap-2'>
                  <li className='text-gray-1900 xl:text-sm text-xs leading-5 font-normal flex items-center gap-1'>
                    <Image
                      src="../icons/email23.svg"
                      width='12'
                      height='12'
                      alt=""
                    />
                    emma.j@university.edu
                  </li>
                  <li className='text-gray-1900 xl:text-sm text-xs leading-5 font-normal flex items-center gap-1'>
                    <Image
                      src="../icons/phone-icon2.svg"
                      width='12'
                      height='12'
                      alt=""
                    />
                    +49 123 456 7890
                  </li>
                  <li className='text-gray-1900 xl:text-sm text-xs leading-5 font-normal flex items-center gap-1'>
                    ID: USR-2024-0847
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <span className='text-blue1700 xl:text-sm text-xs leading-5 xl:gap-4 gap-2 bg-gray-1500 rounded-[10px] border border-solid border-gray-3600 h-10 px-4 inline-flex items-center justify-center'>
            <Image
              src="../icons/trail-icon.svg"
              width='16'
              height='16'
              alt=""
            />
            Audit Trail
          </span>
        </div>
        <div className='flex xl:flex-row flex-col gap-6 mt-8'>
          <div className='flex-1 xl:w-[calc(100%-324px)] w-full'>
            <div className=''>
              <p className='text-SteelGray text-sm leading-5 font-medium tracking-[0.7px] uppercase mb-4'>Global Liquidity Overview</p>
              <div className="grid 4xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 5xl:gap-4 gap-3">
                <div className='bg-white rounded-xl border border-solid border-gray-3600 5xl:px-10 4xl:px-2.5 5xl:pt-10 5xl:pb-8 py-5 px-5 shadow-74xl'>
                  <div className='flex items-center 5xl:gap-4 gap-3'>
                    <ul className='flex items-center 5xl:gap-4 gap-3'>
                      <li>
                        <Image
                          src="../icons/eur-icon.svg"
                          width='40'
                          height='20'
                          alt=""
                        />
                      </li>
                      <li className='flex items-center gap-2'>
                        <h5 className='text-blue1700 font-bold 5xl:text-lg text-base leading-9'>EUR</h5>
                        <span className='text-white text-xs leading-6 font-bold border border-solid border-green-1600 bg-green-1600 h-5.5 px-2.5 rounded-full inline-flex items-center justify-center'>Active</span>
                      </li>
                    </ul>
                    <Link className='flex items-center justify-center 5xl:w-8 5xl:h-8 w-5 h-5' href={"#"}>
                      <Image
                        src="../icons/refresh-icon.svg"
                        width='16'
                        height='16'
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className='mt-7'>
                    <p className='text-gray-1900 text-xs leading-4 uppercase font-normal'>Available Balance</p>
                    <h4 className='text-green-1600 text-2xl leading-8 font-bold mt-1'>€12,450.75</h4>
                    <p className='text-gray-1900 text-xs leading-4 uppercase font-normal mt-4'>Funds on Hold</p>
                    <h4 className='text-yellow-1100 text-lg leading-7 font-bold mt-1'>€2,500.00</h4>
                    <Link href={"#"} className='flex items-center mt-4'>
                      <Image
                        src="../icons/expend-icon.svg"
                        width='16'
                        height='16'
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className='bg-white rounded-xl border border-solid border-gray-3600 5xl:px-10 4xl:px-2.5 5xl:pt-10 5xl:pb-8 py-5 px-5 shadow-74xl'>
                  <div className='flex items-center 5xl:gap-4 gap-3'>
                    <ul className='flex items-center 5xl:gap-4 gap-3'>
                      <li>
                        <Image
                          src="../icons/usd.svg"
                          width='40'
                          height='20'
                          alt=""
                        />
                      </li>
                      <li className='flex items-center  gap-2'>
                        <h5 className='text-blue1700 font-bold 5xl:text-lg text-base leading-9'>USD</h5>
                        <span className='text-white text-xs leading-6 font-bold border border-solid border-green-1600 bg-green-1600 h-5.5 px-2.5 rounded-full inline-flex items-center justify-center'>Active</span>
                      </li>
                    </ul>
                    <Link className='flex items-center justify-center 5xl:w-8 5xl:h-8 w-5 h-5' href={"#"}>
                      <Image
                        src="../icons/refresh-icon.svg"
                        width='16'
                        height='16'
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className='mt-7'>
                    <p className='text-gray-1900 text-xs leading-4 uppercase font-normal'>Available Balance</p>
                    <h4 className='text-green-1600 text-2xl leading-8 font-bold mt-1'>$8,320.50</h4>
                    <p className='text-gray-1900 text-xs leading-4 uppercase font-normal mt-4'>Funds on Hold</p>
                    <h4 className='text-yellow-1100 text-lg leading-7 font-bold mt-1'>$1,200.00</h4>
                    <Link href={"#"} className='flex items-center mt-4 opacity-0'>
                      <Image
                        src="../icons/expend-icon.svg"
                        width='16'
                        height='16'
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className='bg-white rounded-xl border border-solid border-gray-3600 5xl:px-10 4xl:px-2.5 5xl:pt-10 5xl:pb-8 py-5 px-5 shadow-74xl'>
                  <div className='flex items-center 5xl:gap-4 gap-3'>
                    <ul className='flex items-center 5xl:gap-4 gap-3'>
                      <li>
                        <Image
                          src="../icons/pkr-icon.svg"
                          width='40'
                          height='20'
                          alt=""
                        />
                      </li>
                      <li className='flex items-center gap-2'>
                        <h5 className='text-blue1700 font-bold 5xl:text-lg text-base leading-9'>PKR</h5>
                        <span className='text-white text-xs leading-6 font-bold border border-solid border-green-1600 bg-green-1600 h-5.5 px-2.5 rounded-full inline-flex items-center justify-center'>Active</span>
                      </li>
                    </ul>
                    <Link className='flex items-center justify-center 5xl:w-8 5xl:h-8 w-5 h-5' href={"#"}>
                      <Image
                        src="../icons/refresh-icon.svg"
                        width='16'
                        height='16'
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className='mt-7'>
                    <p className='text-gray-1900 text-xs leading-4 uppercase font-normal'>Available Balance</p>
                    <h4 className='text-green-1600 text-2xl leading-8 font-bold mt-1'>₨485,000.00</h4>
                    <p className='text-gray-1900 text-xs leading-4 uppercase font-normal mt-4'>Funds on Hold</p>
                    <h4 className='text-yellow-1100 text-lg leading-7 font-bold mt-1'>₨50,000.00</h4>
                    <Link href={"#"} className='flex items-center mt-4 opacity-0'>
                      <Image
                        src="../icons/expend-icon.svg"
                        width='16'
                        height='16'
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className='bg-red2100/5 rounded-xl border border-solid border-red2100/30 5xl:pl-10 4xl:pl-2.5 5xl:pr-4 4xl:pr-2.5 5xl:pt-10 5xl:pb-8 py-5  px-5 shadow-74xl'>
                  <div className='flex items-center 5xl:gap-4 gap-3'>
                    <ul className='flex items-center 5xl:gap-4 gap-3'>
                      <li>
                        <span className='flex bg-Orange55  items-center justify-center w-5 h-5 rounded-full'>
                          <Image
                            src="../images/btc-icon.svg"
                            width='12'
                            height='12'
                            alt=""
                            className='brightness-10000'
                          />
                        </span>
                      </li>
                      <li className='flex items-center  gap-2'>
                        <h5 className='text-blue1700 font-bold 5xl:text-lg text-base leading-9'>CRYPTO</h5>
                        <span className='text-white text-xs leading-6 font-bold border border-solid border-red2100 bg-red2100 h-5.5 px-2.5 rounded-full inline-flex items-center justify-center'>Frozen</span>
                      </li>
                    </ul>
                    <Link className='flex items-center justify-center 5xl:w-8 5xl:h-8 w-5 h-5' href={"#"}>
                      <Image
                        src="../icons/refresh-icon.svg"
                        width='16'
                        height='16'
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className='mt-7'>
                    <p className='text-gray-1900 text-xs leading-4 uppercase font-normal'>Available Balance</p>
                    <h4 className='text-green-1600 text-2xl leading-8 font-bold mt-1'>₿0.08</h4>
                    <p className='text-gray-1900 text-xs leading-4 uppercase font-normal mt-4'>Funds on Hold</p>
                    <h4 className='text-yellow-1100 text-lg leading-7 font-bold mt-1'>₿0.00</h4>
                    <Link href={"#"} className='flex items-center mt-4 opacity-0'>
                      <Image
                        src="../icons/expend-icon.svg"
                        width='16'
                        height='16'
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <AccountLedgerTable />
          </div>
          <div className='w-full xl:max-w-81 max-w-full'>
            <div className='border border-solid border-gray-3600 rounded-xl bg-white shadow-4xl p-6'>
              <h4 className='text-blue1700 text-base font-bold leading-6 tracking-[-0.4px]'>Monthly Stats</h4>
              <div className='flex items-center gap-3 mb-6'>
                <span className='bg-green-1600/10 rounded-xl flex items-center justify-center w-8 h-8'>
                  <Image
                    src="../images/price-arrow-green.svg"
                    width='16'
                    height='16'
                    alt=""
                  />
                </span>
                <div className='flex-1 w-full'>
                  <p className='text-gray-1900 text-xs leading-4 font-normal'>Total Inflow</p>
                  <h4 className='text-green-1600 text-lg font-bold leading-7'>+€15,025.00</h4>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <span className='bg-red2100/10 rounded-xl flex items-center justify-center w-8 h-8'>
                  <Image
                    src="../images/price-arrow-red.svg"
                    width='16'
                    height='16'
                    alt=""
                  />
                </span>
                <div className='flex-1 w-full'>
                  <p className='text-gray-1900 text-xs leading-4 font-normal'>Total Outflow</p>
                  <h4 className='text-red2100 text-lg font-bold leading-7'>-€7,547.50</h4>
                </div>
              </div>
              <div className='text-center border-t border-b border-solid border-gray-3600 py-8 mt-6'>
                <p className='text-gray-1900 uppercase text-xs leading-4 font-normal'>Net Flow</p>
                <h4 className='text-green-1600 text-2xl font-bold leading-8 mt-1'>+€7,477.50</h4>
              </div>
              <div className=''>
                <p className='text-gray-1900 text-xs leading-4 font-normal'>Reconciliation Status</p>
                <span className='bg-green-1600/10 border border-solid border-green-1600/20 rounded-full h-8.5 flex items-center justify-center gap-2 text-green-1600 text-xs leading-4 mt-3 mb-2'>
                  <Image
                    src="../images/checkgreendark.svg"
                    width='16'
                    height='16'
                    alt=""
                  />
                  Matched
                </span>
                <p className='text-gray-1900 uppercase text-xs leading-4 font-normal'>Last checked: Today at 09:00 AM</p>
              </div>
            </div>
            <div className='border border-solid border-gray-3600 mt-6 rounded-xl bg-white shadow-4xl p-6'>
              <h4 className='text-blue1700 flex items-center gap-2 text-base font-bold leading-6 tracking-[-0.4px]'>
                <Image
                  src="../icons/filter2.svg"
                  width='16'
                  height='16'
                  alt=""
                />
                Financial Controls
              </h4>
              <ul className='mt-4'>
                <li className='mb-3'>
                  <Link href={"#"} className='flex items-center h-10 px-4 text-white 4xl:text-sm text-xs leading-5 gap-4 bg-red2100 rounded-[10px] '>
                    <Image
                      src="../icons/lock-blueDark.svg"
                      width='16'
                      height='16'
                      className='brightness-10000'
                      alt=""
                    />
                    Freeze Account
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link href={"#"} className='flex items-center h-10 pl-4 pr-0.5 text-blue1700 4xl:text-sm text-xs leading-5 gap-2 bg-gray-1500 border border-solid border-gray-3600 rounded-[10px] '>
                    <p className='flex items-center gap-4'>
                      <Image
                        src="../icons/filter2.svg"
                        width='16'
                        height='16'
                        className='brightness-0'
                        alt=""
                      />
                      Adjust Spending Limits
                    </p>
                    <span className='text-blue-1400 text-xs leading-4 font-normal bg-blue-1400/10 border border-solid border-blue-1400/20 rounded-full h-5.5 px-2 inline-flex items-center justify-center'>4-Eyes</span>
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className='flex items-center h-10 pl-4 pr-0.5 text-blue1700 4xl:text-sm text-xs leading-5 gap-2 bg-gray-1500 border border-solid border-gray-3600 rounded-[10px] '>
                    <p className='flex items-center gap-4'>
                      <Image
                        src="../icons/card-black.svg"
                        width='16'
                        height='16' 
                        alt=""
                      />
                      Manual Credit/Debit
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/**** TAB NAV END *****/}


      </div>
    </>
  );
};

export default UsersStudentsPage;
