"use client";
import { useState } from 'react'
import Image from "next/image";
import InputField from "@/app/components/InputField"
import Link from 'next/link';




const AudienceTargeting = () => {
      const [message, setMessage] = useState("");

      return (
            <div className="bg-white border border-solid border-gray1600 rounded-lg xl:p-6.25 p-4 shadow-4xl">
                  <div className="">
                        <h4 className="text-black-1200 font-segoe font-normal text-2xl leading-8 mb-2">Message Builder</h4>
                        <p className="text-gray-1100 font-segoe font-normal text-[15.75px] leading-6">Create your email message with personalization</p>
                  </div>
                  <div className="xl:px-4 flex lg:flex-row flex-col items-start gap-6 mt-6">
                        <div className="flex-1 w-full border border-solid border-gray1600 bg-white rounded-lg shadow-4xl xl:p-6.25 p-4">
                              <h4 className="flex items-center justify-center gap-2 text-black13 mb-6 font-segoe font-normal text-lg leading-7 tracking-[-0.45px]">
                                    <Image
                                          src="../images/email-blue2.svg"
                                          alt=""
                                          width={20}
                                          height={20}
                                    />
                                    Email Content
                              </h4>
                              <div className=''>
                                    <div className="mb-4">
                                          <InputField
                                                label="Subject Line"
                                                type="text"
                                                placeholder="Welcome to StudPay - Your Financial Journey Starts Here!"
                                                ClassName="rounded-md px-3.5!"
                                          />
                                    </div>
                                    <div className="mb-4">
                                          <InputField
                                                label="Email Body"
                                                placeholder="Hi {{firstName}},"
                                                onChange={(e) => setMessage(e.target.value)}
                                                rows={14}
                                                ClassName="px-3.5! rounded-md"
                                          />
                                    </div>
                                    <div className='flex items-center gap-2'>
                                          <Link href={"#"} className='hover:bg-gray1700 transition-all duration-500 ease-in-out inline-flex items-center justify-center text-black13 font-segoe font-normal text-[13.89px] leading-5 gap-4 border border-solid border-gray1600 rounded-md h-9 px-3.25'>
                                                <Image
                                                      src="../images/image-icon.svg"
                                                      alt=""
                                                      width={16}
                                                      height={16}
                                                      className='brightness-0'
                                                />
                                                Add Image
                                          </Link>
                                          <Link href={"#"} className='hover:bg-gray1700 transition-all duration-500 ease-in-out inline-flex items-center justify-center text-black13 font-segoe font-normal text-[13.89px] leading-5 gap-4 border border-solid border-gray1600 rounded-md h-9 px-3.25'>
                                                <Image
                                                      src="../images/eye-icon.svg"
                                                      alt=""
                                                      width={16}
                                                      height={16}
                                                      className='brightness-0'
                                                />
                                                Preview
                                          </Link>
                                    </div>
                              </div>

                        </div>
                        <div className='2xl:max-w-[495.34px] xl:max-w-75 lg:max-w-62.5 w-full'>
                              <div className='border border-solid border-gray1600 mb-6 bg-white rounded-lg shadow-4xl xl:p-6.25 p-4'>
                                    <h4 className="flex items-center justify-center gap-2 text-black13 mb-6 font-segoe font-normal text-lg leading-7 tracking-[-0.45px]">
                                          <Image
                                                src="../images/personalization.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                          />
                                          Personalization
                                    </h4>
                                    <p className='text-gray-1100 mb-4 font-segoe font-normal text-[13.89px] leading-5'>Click on tags below to insert them into your message</p>
                                    <div className="mb-2">
                                          <InputField
                                                type="text"
                                                placeholder="{{firstName}}"
                                                ClassName="px-2.5! h-5.5! text-black13! placeholder:text-black13! text-xs! rounded-full"
                                          />
                                    </div>
                                    <div className="mb-2">
                                          <InputField
                                                type="text"
                                                placeholder="{{lastName}}"
                                                ClassName="px-2.5! h-5.5! text-black13! placeholder:text-black13! text-xs! rounded-full"
                                          />
                                    </div>
                                    <div className="mb-2">
                                          <InputField
                                                type="text"
                                                placeholder="{{university}}"
                                                ClassName="px-2.5! h-5.5! text-black13! placeholder:text-black13! text-xs! rounded-full"
                                          />
                                    </div>
                                    <div className="mb-2">
                                          <InputField
                                                type="text"
                                                placeholder="{{country}}"
                                                ClassName="px-2.5! h-5.5! text-black13! placeholder:text-black13! text-xs! rounded-full"
                                          />
                                    </div>
                                    <div className="mb-2">
                                          <InputField
                                                type="text"
                                                placeholder="{{program}}"
                                                ClassName="px-2.5! h-5.5! text-black13! placeholder:text-black13! text-xs! rounded-full"
                                          />
                                    </div>
                                    <div className="">
                                          <InputField
                                                type="text"
                                                placeholder="{{walletBalance}}"
                                                ClassName="px-2.5! h-5.5! text-black13! placeholder:text-black13! text-xs! rounded-full"
                                          />
                                    </div>
                              </div>
                              <div className='border border-solid border-gray1600 mb-6 bg-white rounded-lg shadow-4xl xl:p-6.25 p-4'>
                                    <h4 className="flex items-center mb-6 text-black13 font-segoe font-normal text-lg leading-7 tracking-[-0.45px]">
                                          Quick Actions
                                    </h4>
                                    <Link href={"#"} className='hover:bg-gray1700 mb-2 transition-all duration-500 ease-in-out flex items-center justify-center text-black13 font-segoe font-normal text-[13.89px] leading-5 gap-4 border border-solid border-gray1600 rounded-md h-9 px-3.25'>
                                          <Image
                                                src="../images/image-icon.svg"
                                                alt=""
                                                width={16}
                                                height={16}
                                                className='brightness-0'
                                          />
                                          Preview Message
                                    </Link>
                                    <Link href={"#"} className='hover:bg-gray1700 transition-all duration-500 ease-in-out flex items-center justify-center text-black13 font-segoe font-normal text-[13.89px] leading-5 border border-solid border-gray1600 rounded-md h-9 px-3.25'>
                                          Save Draft
                                    </Link>
                              </div>
                              <div className='border border-solid border-gray1600 mb-6 bg-white rounded-lg shadow-4xl xl:p-6.25 p-4'>
                                    <h4 className="flex items-center mb-6 text-black13 font-segoe font-normal text-lg leading-7 tracking-[-0.45px]">
                                          Email Tips
                                    </h4>
                                     <ul>
                                          <li className='text-gray-1100 font-segoe font-normal text-sm leading-5 mb-2'>• Keep subject lines under 50 characters</li>
                                          <li className='text-gray-1100 font-segoe font-normal text-sm leading-5 mb-2'>• Use personalization to increase engagement</li>
                                          <li className='text-gray-1100 font-segoe font-normal text-sm leading-5 mb-2'>• Include a clear call-to-action</li>
                                          <li className='text-gray-1100 font-segoe font-normal text-sm leading-5'>• Test your email on mobile devices</li>
                                     </ul>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default AudienceTargeting