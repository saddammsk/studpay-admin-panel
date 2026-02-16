"use client";
import { useState } from 'react'
import Image from "next/image";
import { Checkbox, Field, Label } from '@headlessui/react'

const options = [
      { id: 1, label: "USA" },
      { id: 2, label: "Canada" },
      { id: 3, label: "UK" },
      { id: 4, label: "Australia" },
      { id: 5, label: "Germany" },
      { id: 6, label: "France" },
      { id: 7, label: "India" },
      { id: 8, label: "China" },
];

const options2 = [
      { id: 1, label: "Harvard University" },
      { id: 2, label: "MIT" },
      { id: 3, label: "Stanford" },
      { id: 4, label: "Oxford" },
      { id: 5, label: "Cambridge" },
      { id: 6, label: "University of Toronto" },
];

const options3 = [
      { id: 1, label: "Computer Science" },
      { id: 2, label: "Business" },
      { id: 3, label: "Engineering" },
      { id: 4, label: "Medicine" },
      { id: 5, label: "Arts" },
      { id: 6, label: "Law" },
];

const options4 = [
      { id: 1, label: "AVI Wallet" },
      { id: 2, label: "Insurance" },
      { id: 3, label: "Housing" },
      { id: 4, label: "Student Discounts" },
      { id: 5, label: "Crypto Transfers" },
];


const AudienceTargeting = () => {
      const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
      const [checkedItems2, setCheckedItems2] = useState<Record<number, boolean>>({});
      const [checkedItems3, setCheckedItems3] = useState<Record<number, boolean>>({});
      const [checkedItems4, setCheckedItems4] = useState<Record<number, boolean>>({});
      return (
            <div className="bg-white border border-solid border-gray1600 rounded-lg xl:p-6.25 p-4 shadow-4xl">
                  <div className="">
                        <h4 className="text-black-1200 font-segoe font-normal text-2xl leading-8 mb-2">Audience Targeting</h4>
                        <p className="text-gray-1100 font-segoe font-normal text-[15.75px] leading-6">Select the criteria to target your campaign audience</p>
                  </div>
                  <div className='flex items-center mt-6 rounded-lg gap-3 bg-gray-1300 border border-solid border-blue300 shadow-4xl p-4.25'>
                        <span>
                              <Image
                                    src="../images/user-blue.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                              />
                        </span>
                        <div className=''>
                              <span className='text-blue600 font-segoe font-normal text-sm leading-5 block'>Estimated Audience</span>
                              <h4 className='text-blue200 font-segoe font-normal text-2xl leading-8'>0 students</h4>
                        </div>
                  </div>
                  <div className="xl:px-4 grid sm:grid-cols-2 gap-y-6 mt-6">
                        <div className="border border-solid border-gray1600 bg-white rounded-lg shadow-4xl sm:p-6.25 p-4">
                              <h4 className="flex items-center gap-2 text-black13 mb-6 font-segoe font-normal text-lg leading-7 tracking-[-0.45px]">
                                    <Image
                                          src="../images/globe-icon4.svg"
                                          alt=""
                                          width={20}
                                          height={20}
                                    />
                                    Countries
                              </h4>
                              <div className=''>
                                    {options.map((item) => (
                                          <Field key={item.id} className="flex items-center cursor-pointer gap-2 mb-3 last:mb-0">
                                                <Checkbox
                                                      checked={checkedItems[item.id] || false}
                                                      onChange={(value) =>
                                                            setCheckedItems((prev) => ({
                                                                  ...prev,
                                                                  [item.id]: value,
                                                            }))
                                                      }
                                                      className="group block w-4 h-4 rounded border border-solid border-black-1200 bg-white data-checked:bg-blue-500 data-checked:border-blue-500 outline-0 focus:outline-0"
                                                >
                                                      <svg
                                                            className="stroke-white opacity-0 group-data-checked:opacity-100"
                                                            viewBox="0 0 14 14"
                                                            fill="none"
                                                      >
                                                            <path
                                                                  d="M3 8L6 11L11 3.5"
                                                                  strokeWidth={2}
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                            />
                                                      </svg>
                                                </Checkbox>
                                                <Label className="text-black13 cursor-pointer font-segoe font-normal text-sm leading-3.5 block">{item.label}</Label>
                                          </Field>
                                    ))}
                              </div>
                        </div>
                        <div className="border border-solid border-gray1600 bg-white rounded-lg shadow-4xl sm:p-6.25 p-4 sm:-ml-1 relative z-50">
                              <h4 className="flex items-center gap-2 text-black13 mb-6 font-segoe font-normal text-lg leading-7 tracking-[-0.45px]">
                                    <Image
                                          src="../images/uni-cap.svg"
                                          alt=""
                                          width={20}
                                          height={20}
                                    />
                                    Universities
                              </h4>
                              <div className=''>
                                    {options2.map((item) => (
                                          <Field key={item.id} className="flex items-center cursor-pointer gap-2 mb-3 last:mb-0">
                                                <Checkbox
                                                      checked={checkedItems2[item.id] || false}
                                                      onChange={(value) =>
                                                            setCheckedItems2((prev) => ({
                                                                  ...prev,
                                                                  [item.id]: value,
                                                            }))
                                                      }
                                                      className="group block w-4 h-4 rounded border border-solid border-black-1200 bg-white data-checked:bg-blue-500 data-checked:border-blue-500 outline-0 focus:outline-0"
                                                >
                                                      <svg
                                                            className="stroke-white opacity-0 group-data-checked:opacity-100"
                                                            viewBox="0 0 14 14"
                                                            fill="none"
                                                      >
                                                            <path
                                                                  d="M3 8L6 11L11 3.5"
                                                                  strokeWidth={2}
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                            />
                                                      </svg>
                                                </Checkbox>
                                                <Label className="text-black13 cursor-pointer font-segoe font-normal text-sm leading-3.5 block">{item.label}</Label>
                                          </Field>
                                    ))}
                              </div>
                        </div>
                        <div className="border border-solid border-gray1600 bg-white rounded-lg shadow-4xl sm:p-6.25 p-4">
                              <h4 className="flex items-center gap-2 text-black13 mb-6 font-segoe font-normal text-lg leading-7 tracking-[-0.45px]">
                                    <Image
                                          src="../images/uni-cap2.svg"
                                          alt=""
                                          width={20}
                                          height={20}
                                    />
                                    Study Programs
                              </h4>
                              <div className=''>
                                    {options3.map((item) => (
                                          <Field key={item.id} className="flex items-center cursor-pointer gap-2 mb-3 last:mb-0">
                                                <Checkbox
                                                      checked={checkedItems3[item.id] || false}
                                                      onChange={(value) =>
                                                            setCheckedItems3((prev) => ({
                                                                  ...prev,
                                                                  [item.id]: value,
                                                            }))
                                                      }
                                                      className="group block w-4 h-4 rounded border border-solid border-black-1200 bg-white data-checked:bg-blue-500 data-checked:border-blue-500 outline-0 focus:outline-0"
                                                >
                                                      <svg
                                                            className="stroke-white opacity-0 group-data-checked:opacity-100"
                                                            viewBox="0 0 14 14"
                                                            fill="none"
                                                      >
                                                            <path
                                                                  d="M3 8L6 11L11 3.5"
                                                                  strokeWidth={2}
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                            />
                                                      </svg>
                                                </Checkbox>
                                                <Label className="text-black13 cursor-pointer font-segoe font-normal text-sm leading-3.5 block">{item.label}</Label>
                                          </Field>
                                    ))}
                              </div>
                        </div>
                        <div className="border border-solid border-gray1600 bg-white rounded-lg shadow-4xl sm:p-6.25 p-4 sm:-ml-1 relative z-50">
                              <h4 className="flex items-center gap-2 text-black13 mb-6 font-segoe font-normal text-lg leading-7 tracking-[-0.45px]">
                                    <Image
                                          src="../images/card-icon3.svg"
                                          alt=""
                                          width={20}
                                          height={20}
                                    />
                                    StudPay Products
                              </h4>
                              <div className=''>
                                    {options4.map((item) => (
                                          <Field key={item.id} className="flex items-center cursor-pointer gap-2 mb-3 last:mb-0">
                                                <Checkbox
                                                      checked={checkedItems4[item.id] || false}
                                                      onChange={(value) =>
                                                            setCheckedItems4((prev) => ({
                                                                  ...prev,
                                                                  [item.id]: value,
                                                            }))
                                                      }
                                                      className="group block w-4 h-4 rounded border border-solid border-black-1200 bg-white data-checked:bg-blue-500 data-checked:border-blue-500 outline-0 focus:outline-0"
                                                >
                                                      <svg
                                                            className="stroke-white opacity-0 group-data-checked:opacity-100"
                                                            viewBox="0 0 14 14"
                                                            fill="none"
                                                      >
                                                            <path
                                                                  d="M3 8L6 11L11 3.5"
                                                                  strokeWidth={2}
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                            />
                                                      </svg>
                                                </Checkbox>
                                                <Label className="text-black13 cursor-pointer font-segoe font-normal text-sm leading-3.5 block">{item.label}</Label>
                                          </Field>
                                    ))}
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default AudienceTargeting