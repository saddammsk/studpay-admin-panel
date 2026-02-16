"use client";
import { useState } from 'react'
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import InputField from "@/app/components/InputField"
import Link from 'next/link';




const SummaryLaunch = () => {
      const [message, setMessage] = useState("");
      return (
            <div className="bg-white border border-solid border-gray1600 rounded-lg xl:p-6.25 p-4 shadow-4xl">
                  <div className="">
                        <h4 className="text-black-1200 font-segoe font-normal text-2xl leading-8 mb-2">Review & Launch Campaign</h4>
                        <p className="text-gray-1100 font-segoe font-normal text-[15.75px] leading-6">Review all campaign details before launching</p>
                  </div>
                  <div className='grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-4 mt-6'>
                        <div className='bg-white shadow-4xl xl:p-6.25 p-4 border border-solid border-gray1600 rounded-lg'>
                              <h4 className='text-black13 flex items-center gap-2 font-segoe font-normal text-lg leading-7 tracking-[-0.45px]'>
                                    <Image
                                          src={"/images/checkgreendark.svg"}
                                          alt=""
                                          width={16}
                                          height={16}
                                    />
                                    Campaign Overview
                              </h4>
                              <div className='grid grid-cols-2 gap-4  mt-6'>
                                    <div className=''>
                                          <span className='text-gray1800 font-segoe font-normal text-sm leading-5'>Campaign Name</span>
                                          <h4 className='text-black-1200 font-segoe font-normal text-[15.75px] leading-8'>Untitled Campaign</h4>
                                    </div>
                                    <div className=''>
                                          <span className='text-gray1800 font-segoe font-normal text-sm leading-5'>Type</span>
                                          <h4 className='text-black-1200 gap-2 flex items-center font-segoe font-normal text-[15.75px] leading-8'>
                                                <Image
                                                      src={"/images/email-blue2.svg"}
                                                      alt=""
                                                      width={16}
                                                      height={16}
                                                />
                                                Email
                                          </h4>
                                    </div>
                                    <div className=''>
                                          <span className='text-gray1800 font-segoe font-normal text-sm leading-5'>Sender Name</span>
                                          <h4 className='text-black-1200 gap-2 flex items-center font-segoe font-normal text-[15.75px] leading-8'>
                                                StudPay Team
                                          </h4>
                                    </div>
                                    <div className=''>
                                          <span className='text-gray1800 font-segoe font-normal text-sm leading-5'>Schedule</span>
                                          <h4 className='text-black-1200 gap-2 flex items-center font-segoe font-normal text-[15.75px] leading-8'>
                                                <Image
                                                      src={"/images/paper-send.svg"}
                                                      alt=""
                                                      width={16}
                                                      height={16}
                                                />
                                                Send Now
                                          </h4>
                                    </div>
                              </div>
                        </div>
                        <div className='bg-white shadow-4xl xl:p-6.25 p-4 border border-solid border-gray1600 relative rounded-lg md:-ml-1'>
                              <h4 className='text-black13 mb-6 flex items-center gap-2 font-segoe font-normal text-lg leading-7 tracking-[-0.45px]'>
                                    <Image
                                          src={"/images/user-blue2.svg"}
                                          alt=""
                                          width={16}
                                          height={16}
                                    />
                                    Target Audience
                              </h4>
                              <div className='rounded-lg bg-gray-1300 p-4 text-center'>
                                    <h4 className='text-blue600 font-segoe font-normal text-[30px] leading-6'>0</h4>
                                    <p className='text-blue600 font-segoe font-normal text-sm leading-5'>Students will receive this campaign</p>
                              </div>
                        </div>
                  </div>
                  <div className='bg-white shadow-4xl xl:p-6.25 p-4 border border-solid border-gray1600 rounded-lg mt-6'>
                        <div className='flex items-center justify-between'>
                              <h4 className='text-black13 mb-6 flex items-center gap-2 font-segoe font-normal text-lg leading-7 tracking-[-0.45px]'>
                                    <Image
                                          src={"/images/email-blue2.svg"}
                                          alt=""
                                          width={20}
                                          height={20}
                                    />
                                    Message Preview
                              </h4>
                              <Button onClick={() => { }}
                                    iconSrc="/images/edit-icon.svg"
                                    label="Edit"
                                    className="text-black13 text-sm gap-4 h-9 px-3.25! bg-white border border-solid border-gray1600 hover:bg-blue800 hover:text-white rounded-lg m-0!"
                              />
                        </div>
                        <div className="mb-4">
                              <InputField
                                    label="Subject Line"
                                    type="text"
                                    placeholder="No subject set"
                                    ClassName="rounded! text-black13 placeholder:text-black13! border-gray1600! bg-gray-1500 px-3.5!"
                              />
                        </div>
                        <div className="mb-4">
                              <InputField
                                    label="Email Body"
                                    placeholder="No message content set"
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows={9}
                                    ClassName="rounded! text-black13 placeholder:text-black13! border-gray1600! bg-gray-1500 px-3.5!"
                              />
                        </div>
                  </div>
                  <div className='text-center bg-linear-to-r from-blueNexus13 to-blueNexus13 border border-solid border-blue300 sm:p-6.25 p-4 rounded-lg mt-6'>
                        <h4 className='text-black-1200 font-segoe font-normal text-xl leading-7 mb-2'>Ready to Launch?</h4>
                        <p className='text-gray-1100 font-segoe font-normal text-[15.75px] leading-8'>Your campaign will be sent to 0 students immediately.?</p>
                        <div className="flex items-center justify-center mt-4">
                              <Button onClick={() => { }}
                                    iconSrc="/images/send-icon.svg"
                                    label="Launch Campaign Now"
                                    className="text-white text-sm gap-4.5 h-10 px-8! bg-blue600 hover:bg-blue800 rounded-lg m-0!"
                              />
                        </div>
                  </div>

            </div>
      )
}

export default SummaryLaunch