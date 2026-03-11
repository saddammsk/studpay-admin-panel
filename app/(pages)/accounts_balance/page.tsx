"use client";
import { useState } from 'react' 
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import CustomSelect from "@/app/components/CustomSelect"; 
import AccountBalanceTable from '@/app/components/AccountsBalance/AccountBalanceTable';




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
          <p className='text-SteelGray text-sm leading-5 font-medium tracking-[0.7px] uppercase mb-4'>Global Liquidity Overview</p>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            <div className="bg-lightgreen17/5 rounded-xl border border-solid border-grey-5400 border-l-4 border-l-lightgreen17 p-5 shadow-74xl">
              <div className='flex items-start justify-between max-w-92.75 w-full'>
                <div className="w-10 h-10 bg-lightgreen17/10 rounded-lg flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8333 5.83333V3.33333C15.8333 3.11232 15.7455 2.90036 15.5893 2.74408C15.433 2.5878 15.221 2.5 15 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667C2.5 4.60869 2.67559 5.03262 2.98816 5.34518C3.30072 5.65774 3.72464 5.83333 4.16667 5.83333H16.6667C16.8877 5.83333 17.0996 5.92113 17.2559 6.07741C17.4122 6.23369 17.5 6.44565 17.5 6.66667V10M17.5 10H15C14.558 10 14.134 10.1756 13.8215 10.4882C13.5089 10.8007 13.3333 11.2246 13.3333 11.6667C13.3333 12.1087 13.5089 12.5326 13.8215 12.8452C14.134 13.1577 14.558 13.3333 15 13.3333H17.5C17.721 13.3333 17.933 13.2455 18.0893 13.0893C18.2455 12.933 18.3333 12.721 18.3333 12.5V10.8333C18.3333 10.6123 18.2455 10.4004 18.0893 10.2441C17.933 10.0878 17.721 10 17.5 10Z"
                      stroke="#10B77F"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.5 4.16675V15.8334C2.5 16.2754 2.67559 16.6994 2.98816 17.0119C3.30072 17.3245 3.72464 17.5001 4.16667 17.5001H16.6667C16.8877 17.5001 17.0996 17.4123 17.2559 17.256C17.4122 17.0997 17.5 16.8878 17.5 16.6667V13.3334"
                      stroke="#10B77F"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className='text-lightgreen17 text-xs leading-4 font-medium flex items-center gap-1'>
                  <Image
                    src="../images/price-arrow-green.svg"
                    width='14'
                    height='14'
                    alt=""
                  />
                  +3.2%
                </p>
              </div>
              <div className="mt-4">
                <p className="text-SteelGray font-medium text-sm leading-5 mb-1">
                  Total System Balance
                </p>
                <h4 className="text-2xl leading-8 font-bold text-black-2000">
                  €2,847,532.45
                </h4>
                <p className="text-SteelGray text-xs leading-4 font-normal mt-0.5">EUR Equivalent</p>
              </div>
            </div>
            <div className="bg-yellow-1100/5 rounded-xl border border-solid border-grey-5400 border-l-4 border-l-yellow-1100 p-5 shadow-74xl">
              <div className='flex items-start justify-between max-w-92.75 w-full'>
                <div className="w-10 h-10 bg-yellow-1100/10 rounded-lg flex items-center justify-center">
                  <Image
                    src="../images/warning-yellow.svg"
                    width='20'
                    height='20'
                    alt=""
                  />
                </div>
                <p className='text-red2100 text-xs leading-4 font-medium flex items-center gap-1'>
                  <Image
                    src="../images/price-arrow-red.svg"
                    width='14'
                    height='14'
                    alt=""
                  />
                  -1.8%
                </p>
              </div>
              <div className="mt-4">
                <p className="text-SteelGray font-medium text-sm leading-5 mb-1">
                  Total On-Hold Funds
                </p>
                <h4 className="text-2xl leading-8 font-bold text-black-2000">
                  €342,150.00
                </h4>
                <p className="text-SteelGray text-xs leading-4 font-normal mt-0.5">Across 156 accounts</p>
              </div>
            </div>
            <div className="bg-red1600/5 rounded-xl border border-solid border-grey-5400 border-l-4 border-l-red1600 p-5 shadow-74xl">
              <div className='flex items-start justify-between max-w-92.75 w-full'>
                <div className="w-10 h-10 bg-red1600/10 rounded-lg flex items-center justify-center">
                  <Image
                    src="../icons/Frozen-icon.svg"
                    width='20'
                    height='20'
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-SteelGray font-medium text-sm leading-5 mb-1">
                  Total Frozen Accounts
                </p>
                <h4 className="text-2xl leading-8 font-bold text-black-2000">
                  23
                </h4>
                <p className="text-SteelGray text-xs leading-4 font-normal mt-0.5">Requires review</p>
              </div>
            </div>
          </div> 
        </div>
        {/**** TAB NAV END *****/}
        <AccountBalanceTable />

      </div>
    </>
  );
};

export default UsersStudentsPage;
