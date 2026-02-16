"use client";
import { useState } from 'react'
import Image from "next/image";
import InputField from "@/app/components/InputField"
import { Field, Label, Radio, RadioGroup } from '@headlessui/react'


const plans = [
      {
        name: 'Email Campaign', 
       icon: '/images/email-blue.svg', 
      },
      {
        name: 'SMS Campaign', 
        icon: '/images/SMS.svg', 
      },
]
const Schedule = [
      {
        name: 'Send Immediately', 
       icon: '/images/paper-send.svg', 
      },
      {
        name: 'Schedule for Later', 
        icon: '/images/Schedule-icon.svg', 
      },
]

const CampaignDetailStep = () => {
      let [selected, setSelected] = useState(plans[0])
      let [selected2, setSelected2] = useState(Schedule[0])
      return (
            <div className="bg-white border border-solid border-gray1600 rounded-lg xl:p-6.25 p-4 shadow-4xl">
                  <div className="">
                        <h4 className="text-black-1200 font-segoe font-normal text-2xl leading-8 mb-2">Campaign Details</h4>
                        <p className="text-gray-1100 font-segoe font-normal text-[15.75px] leading-6">Set up the basic information for your campaign</p>
                  </div>
                  <div className="xl:px-4 grid md:grid-cols-2 grid-cols-1 gap-6 mt-6">
                        <div className="border border-solid border-gray1600 rounded-lg shadow-4xl xl:p-6.25 p-4">
                              <h4 className="text-black13 mb-6 font-segoe font-normal text-lg leading-7 tracking-[-0.45px]">Basic Information</h4>
                              <div className="mb-4">
                                    <InputField
                                          label="Campaign Name"
                                          type="text"
                                          placeholder="e.g., Welcome New Students"
                                          ClassName="rounded-md px-3.5!"
                                    />
                              </div>
                              <div className="mb-4">
                                    <InputField
                                          label="Sender Name"
                                          type="text"
                                          placeholder="StudPay Team"
                                          ClassName="rounded-md px-3.5!"
                                    />
                              </div>
                              <div className="">
                                    <label className="text-black13 font-segoe font-normal text-sm leading-3.5">Campaign Type</label>
                                    <RadioGroup value={selected} onChange={setSelected} aria-label="Server size" className="flex xl:items-center xl:flex-row flex-col xl:gap-8 gap-4 mt-3.5">
                                          {plans.map((plan) => (
                                                <Field key={plan.name} className="flex items-center gap-2 cursor-pointer">
                                                      <Radio
                                                            value={plan}
                                                            className="group w-4 h-4 flex items-center justify-center rounded-full border border-solid border-black-1200 bg-white data-checked:bg-white focus:outline-0"
                                                      >
                                                            <span className="invisible w-2.5 h-2.5 rounded-full bg-black-1200 group-data-checked:visible" />
                                                      </Radio>
                                                      <Label className="cursor-pointer flex items-center gap-2 text-black13 font-segoe font-normal text-sm leading-3.5">
                                                            <Image
                                                                  src={plan.icon}
                                                                  alt=""
                                                                  width={16}
                                                                  height={16}
                                                            />
                                                            {plan.name}
                                                      </Label>
                                                </Field>
                                          ))}
                                    </RadioGroup>
                              </div>
                        </div>
                        <div className="border border-solid border-gray1600 rounded-lg shadow-4xl p-6.25">
                              <h4 className="text-black13 mb-6 font-segoe font-normal text-lg leading-7 tracking-[-0.45px]">Schedule Settings</h4>
                              <div className="mt-8">
                                    <label className="text-black13 font-segoe font-normal text-sm leading-3.5">When to Send</label>
                                    <RadioGroup value={selected2} onChange={setSelected2} aria-label="Server size" className="mt-3 flex flex-col gap-5">
                                          {Schedule.map((Schedule) => (
                                                <Field key={Schedule.name} className="flex items-center gap-2 cursor-pointer">
                                                      <Radio
                                                            value={Schedule}
                                                            className="group w-4 h-4 flex items-center justify-center rounded-full border border-solid border-black-1200 bg-white data-checked:bg-white focus:outline-0"
                                                      >
                                                            <span className="invisible w-2.5 h-2.5 rounded-full bg-black-1200 group-data-checked:visible" />
                                                      </Radio>
                                                      <Label className="flex items-center gap-2 cursor-pointer text-black13 font-segoe font-normal text-sm leading-3.5">
                                                            <Image
                                                                  src={Schedule.icon}
                                                                  alt=""
                                                                  width={16}
                                                                  height={16}
                                                            />
                                                            {Schedule.name}
                                                      </Label>
                                                </Field>
                                          ))}
                                    </RadioGroup>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default CampaignDetailStep