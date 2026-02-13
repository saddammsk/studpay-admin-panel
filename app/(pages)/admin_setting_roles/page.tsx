"use client";
import { useState } from "react";

import Image from "next/image";
import Button from "@/app/components/ui/Button";
import AdminAccountTable from '@/app/components/AdminAccountTable'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import ToggleSwitch from "@/app/components/ui/ToggleSwitch";
import PlatformLanguageTable from "@/app/components//PlatformSetting/PlatformLanguageTable";
import PlatformSystemLogTable from "@/app/components//PlatformSetting/PlatformSystemLogTable";
import Link from "next/link";


const page = () => {
  const [switch1, setSwitch1] = useState(false)
  const [switch2, setSwitch2] = useState(true)
  const [switch3, setSwitch3] = useState(false)
  const [switch4, setSwitch4] = useState(true)
  const [switch5, setSwitch5] = useState(true)
  const [switch6, setSwitch6] = useState(true)
  const [switch7, setSwitch7] = useState(false)
  const [switch8, setSwitch8] = useState(true)
  return (
    <div>
      <div>
        <h4 className="text-black12 font-bold md:text-[30px] text-2xl leading-9 mb-2">
          Admin Settings & Roles
        </h4>
        <p className="text-gray-1100 font-normal md:text-base text-sm leading-6">
          Manage admin accounts, roles, permissions, and platform settings securely.
        </p>
      </div>
      <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4 sm:mt-8 mt-6'>
        <div className='flex items-start justify-between shadow-4xl bg-white border border-solid border-gray-1600 p-6.25 rounded-xl'>
          <div className=''>
            <span className='text-gray-1100 font-neulis-sans font-normal text-[13.78px] leading-5'>Total Admins</span>
            <h2 className='text-black-1200 my-1 font-neulis-sans font-normal text-2xl leading-8'>12</h2>
            <p className='text-gray-1200 font-normal text-xs leading-4 flex items-center gap-1'><span className='text-green-1300 flex items-center'>↗ +2</span> vs last month</p>
          </div>
          <div className=''>
            <Image
              src={"/images/user-blue.svg"}
              alt=""
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className='flex items-start justify-between shadow-4xl bg-white border border-solid border-gray-1600 p-6.25 rounded-xl'>
          <div className=''>
            <span className='text-gray-1100 font-neulis-sans font-normal text-[13.78px] leading-5'>Super Admins</span>
            <h2 className='text-black-1200 my-1 font-neulis-sans font-normal text-2xl leading-8'>3</h2>
            <p className='text-gray-1200 font-normal text-xs leading-4 flex items-center'>Active accounts</p>
          </div>
          <div className=''>
            <Image
              src={"/images/sheild-green.svg"}
              alt=""
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className='flex items-start justify-between shadow-4xl bg-white border border-solid border-gray-1600 p-6.25 rounded-xl'>
          <div className=''>
            <span className='text-gray-1100 font-neulis-sans font-normal text-[13.78px] leading-5'>Pending Invitations</span>
            <h2 className='text-black-1200 my-1 font-neulis-sans font-normal text-2xl leading-8'>2</h2>
            <p className='text-gray-1200 font-normal text-xs leading-4 flex items-center'>Awaiting acceptance</p>
          </div>
          <div className=''>
            <Image
              src={"/images/invit-user.svg"}
              alt=""
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className='flex items-start justify-between shadow-4xl bg-white border border-solid border-gray-1600 p-6.25 rounded-xl'>
          <div className=''>
            <span className='text-gray-1100 font-neulis-sans font-normal text-[13.78px] leading-5'>Active Sessions</span>
            <h2 className='text-black-1200 font-neulis-sans my-1 font-normal text-2xl leading-8'>8</h2>
            <p className='text-gray-1200 font-normal text-xs leading-4 flex items-center gap-1'>Currently logged in</p>
          </div>
          <div className=''>
            <Image
              src={"/images/clock-blue.svg"}
              alt=""
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      <div className="mt-6.25">
        <TabGroup>
          <TabList className="border-b border-solid border-gray1600 flex items-center gap-9 -mb-px">
            <Tab
              className={({ selected }) =>
                `font-neulis-sans text-[13.891px] font-normal leading-5 -mb-px px-1 py-2.5 cursor-pointer border-b-2 border-solid focus:outline-0 ${selected
                  ? "border-blue-1000 text-blue-1000!"
                  : "border-transparent text-gray-1200  hover:text-blue-1000 hover:border-blue-1000"
                }`
              }
            >
              Admin Accounts
            </Tab>
            <Tab
              className={({ selected }) =>
                `text-gray-1200 font-neulis-sans text-[13.891px] font-normal leading-5 -mb-px px-1 py-2.5 cursor-pointer border-b-2 border-solid focus:outline-0 ${selected
                  ? "border-blue-1000 text-blue-1000!"
                  : "border-transparent text-gray-1200  hover:text-blue-1000 hover:border-blue-1000"
                }`
              }
            >
              Platform Settings
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel className="sm:py-6 py-4">
              <Button
                label=" Invite Admin"
                iconSrc="/images/adim-icon.svg"
                className="text-white bg-blue-1000 md:w-auto w-full justify-center h-10 px-4 hover:bg-blue-1000/90 rounded-md! gap-4 text-[13.67px]!"
                onClick={() => {
                  console.log("Export clicked");
                }}
              />
              <div className="mt-6">
                <AdminAccountTable />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="pt-6">
                <div className="">
                  <div className="bg-white border border-solid  border-gray1600 md:p-6.25 p-4 rounded-lg">
                    <h4 className="text-black13 mb-6 gap-2 flex items-center font-neulis-sans font-normal md:text-2xl text-lg leading-6 tracking-[-0.6px]">
                      <Image
                        src="..3xl:/images/setting-icon3.svg"
                        alt="Edit"
                        width={20}
                        height={20}
                      />
                      General Platform Settings
                    </h4>
                    <div className="flex items-center justify-between border border-solid border-gray1600 rounded-lg bg-white sm:p-6.25 p-4 mb-4">
                      <div className="">
                        <h4 className="text-black13 font-neulis-sans font-normal text-[15.75px] leading-6">maintenance Mode</h4>
                        <p className="text-gray-1200 font-neulis-sans font-normal text-[13.78px] leading-5">Put platform in maintenance mode</p>
                      </div>
                      <div className="">
                        <ToggleSwitch enabled={switch1} setEnabled={setSwitch1} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between border border-solid border-gray1600 rounded-lg bg-white sm:p-6.25 p-4 mb-4">
                      <div className="">
                        <h4 className="text-black13 font-neulis-sans font-normal text-[15.75px] leading-6">new Registrations</h4>
                        <p className="text-gray-1200 font-neulis-sans font-normal text-[13.78px] leading-5">Allow new user registrations</p>
                      </div>
                      <div className="">
                        <ToggleSwitch enabled={switch2} setEnabled={setSwitch2} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between border border-solid border-gray1600 rounded-lg bg-white sm:p-6.25 p-4 mb-4">
                      <div className="">
                        <h4 className="text-black13 font-neulis-sans font-normal text-[15.75px] leading-6">auto Kyc Approval</h4>
                        <p className="text-gray-1200 font-neulis-sans font-normal text-[13.78px] leading-5">Automatically approve basic KYC documents</p>
                      </div>
                      <div className="">
                        <ToggleSwitch enabled={switch3} setEnabled={setSwitch3} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between border border-solid border-gray1600 rounded-lg bg-white sm:p-6.25 p-4">
                      <div className="">
                        <h4 className="text-black13 font-neulis-sans font-normal text-[15.75px] leading-6">two Factor Required</h4>
                        <p className="text-gray-1200 font-neulis-sans font-normal text-[13.78px] leading-5">Require 2FA for all admin accounts</p>
                      </div>
                      <div className="">
                        <ToggleSwitch enabled={switch4} setEnabled={setSwitch4} />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white mt-6 border border-solid  border-gray1600 md:p-6.25 p-4 rounded-lg">
                    <h4 className="text-black13 mb-6 gap-2 flex items-center font-neulis-sans font-normal md:text-2xl text-lg leading-6 tracking-[-0.6px]">
                      <Image
                        src="../images/globe.svg"
                        alt="Edit"
                        width={20}
                        height={20}
                        className="brightness-0"
                      />
                      Language & Region Configuration
                    </h4>
                    <div className="">
                      <PlatformLanguageTable />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="bg-white border border-solid  border-gray1600 md:p-6.25 p-4 rounded-lg">
                    <h4 className="text-black13  mb-6  gap-2 flex items-center font-neulis-sans font-normal md:text-2xl text-lg leading-6 tracking-[-0.6px]">
                      <Image
                        src="../images/sms2.svg"
                        alt="Edit"
                        width={20}
                        height={20}
                      />
                      Default Email Notifications
                    </h4>
                    <div className="flex items-center justify-between border border-solid border-gray1600 rounded-lg bg-white sm:p-6.25 p-4 mb-4">
                      <div className="">
                        <h4 className="text-black13 font-neulis-sans font-normal text-[15.75px] leading-6">new Registrations</h4>
                        <p className="text-gray-1200 font-neulis-sans font-normal text-[13.78px] leading-5">Notify admins of new user registrations</p>
                      </div>
                      <div className="">
                        <ToggleSwitch enabled={switch5} setEnabled={setSwitch5} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between border border-solid border-gray1600 rounded-lg bg-white sm:p-6.25 p-4 mb-4">
                      <div className="">
                        <h4 className="text-black13 font-neulis-sans font-normal text-[15.75px] leading-6">transaction Alerts</h4>
                        <p className="text-gray-1200 font-neulis-sans font-normal text-[13.78px] leading-5">Send alerts for high-value transactions</p>
                      </div>
                      <div className="">
                        <ToggleSwitch enabled={switch6} setEnabled={setSwitch6} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between border border-solid border-gray1600 rounded-lg bg-white sm:p-6.25 p-4 mb-4">
                      <div className="">
                        <h4 className="text-black13 font-neulis-sans font-normal text-[15.75px] leading-6">kyc Updates</h4>
                        <p className="text-gray-1200 font-neulis-sans font-normal text-[13.78px] leading-5">Notifications for KYC status changes</p>
                      </div>
                      <div className="">
                        <ToggleSwitch enabled={switch7} setEnabled={setSwitch7} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between border border-solid border-gray1600 rounded-lg bg-white sm:p-6.25 p-4">
                      <div className="">
                        <h4 className="text-black13 font-neulis-sans font-normal text-[15.75px] leading-6">system Maintenance</h4>
                        <p className="text-gray-1200 font-neulis-sans font-normal text-[13.78px] leading-5">System maintenance and update notifications</p>
                      </div>
                      <div className="">
                        <ToggleSwitch enabled={switch8} setEnabled={setSwitch8} />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white mt-6 border border-solid  border-gray1600 md:p-6.25 p-4 rounded-lg">
                    <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-3 justify-between mb-6">
                      <h4 className="text-black13  gap-2 flex items-center font-neulis-sans font-normal md:text-2xl text-lg leading-6 tracking-[-0.6px]">
                        <Image
                          src="../images/file-black.svg"
                          alt="Edit"
                          width={20}
                          height={20}
                          className="brightness-0"
                        />
                        System Logs & Audit Trail
                      </h4>
                      <Link href={"#"} className="hover:bg-gray-1600 sm:w-auto w-full transition-all duration-500 ease-in-out inline-flex items-center justify-center px-4 text-black13 font-normal font-neulis-sans text-sm leading-5 gap-4 border border-gray1600 rounded-md h-9">
                        <Image
                          src="../images/download-icon.svg"
                          alt="Edit"
                          width={16}
                          height={16}
                          className="brightness-0"
                        />
                        Export Logs
                      </Link>
                    </div>
                    <div className="">
                      <PlatformSystemLogTable />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end mt-6">
                  <Button
                    label=" Save All Settings"
                    className="text-white bg-blue-1000 md:w-auto w-full justify-center h-10 px-4 rounded-md! hover:bg-blue-1000/90 font-neulis-sans"
                    onClick={() => {
                      console.log("Export clicked");
                    }}
                  />
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  )
}

export default page