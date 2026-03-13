/* eslint-disable @typescript-eslint/no-explicit-any */
import InputField from '@/app/components/InputField';
import Modal from '@/app/components/Modal';
import ToggleSwitch from '@/app/components/ToggleSwitch';
import CurrencyDropdown from '@/app/components/ui/CurrencyDropdown';
import { Radio, RadioGroup } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import AccountStatusDropdown from './AccountStatusDropdown';

const plans = [
  { name: 'Current Accountp', disk: 'Standard transactional account for daily use' },
  { name: 'Savings Pot', disk: 'Interest-bearing account for savings goals' },
  { name: 'Blocked AVI Account', disk: 'Visa-compliant blocked account for international students' },
]


const statuses = [
  { name: "Active", color: "bg-green51" },
  { name: "Inactive", color: "bg-red-500" },
  { name: "Pending", color: "bg-yellow-500" },
];


interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;

}

export const AddAccount = ({isOpen, setIsOpen}: Props) => {

      const [selectedPlan, setSelectedPlan] = useState(plans[0])
      const [enabled, setEnabled] = useState(true);
      const [email, setEmail] = useState("");
      const [open, setOpen] = useState(false);
      const [selectedStatus, setSelectedStatus] = useState(statuses[0]);



  return (
        <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        panelClassName="max-w-[660px] bg-gray-1500 relative h-full overflow-x-auto"
      >
        <div className="sticky top-0 z-10 bg-white">
        <Link onClick={() => setIsOpen(false)} href={"#"} className="flex items-center justify-center rounded-lg w-8 h-8 absolute top-4.5 right-6">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className='border-b border-solid border-grey-5400 md:px-6 px-5 py-5'>
          <h4 className='text-black-2000 font-semibold text-lg leading-7 tracking-[-0.45px]'>Add New Account</h4>
          <p className='text-gray-3800 font-normal text-sm leading-5 mt-1.5'>Create a new sub-account for this student profile</p>
        </div>
        </div>
        <div className="py-5 md:px-6 px-5">
          <div className=''>
            <label className='text-black-2000 block mb-2 font-semibold text-sm leading-3.5'>Account Type</label>
            <RadioGroup by="name" value={selectedPlan} onChange={setSelectedPlan} aria-label="Server size" className="space-y-2">
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
            <label className='text-black-2000 mb-2 block font-medium sm:text-sm text-xs leading-3.5'>Base Currency</label>
            <CurrencyDropdown />
          </div>
          <div className='mt-5 flex items-center justify-between'>
            <div className=''>
              <h4 className='text-black-2000 font-medium text-sm leading-3.5'>IBAN Generation</h4>
              <p className='text-gray-3800 font-normal text-xs leading-4'>Auto-assign a new IBAN/Account Number</p>
            </div>
            <ToggleSwitch checked={enabled} onChange={setEnabled} />
          </div>
          <div className='mt-5'>
            <label className='text-black-2000 mb-2 block font-medium sm:text-sm text-xs leading-3.5'>Account Label</label>
            <InputField
              ClassName="bg-gray-1500 text-gray-3800 rounded-md! h-10! pl-3.5!"
              type="email"
              placeholder="e.g., Main Spending, Germany Rent Fund"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <p className='text-gray-3800 font-normal text-xs leading-4 mt-2'>A custom name to identify this account</p>
          </div>
          <div className='grid grid-cols-2 gap-4 mt-5'>
            <div className=''>
              <label className='text-black-2000 mb-2 block font-medium sm:text-sm text-xs leading-3.5'>Initial Deposit (Optional)</label>
              <InputField
                ClassName="bg-gray-1500 text-gray-3800 rounded-md! h-10! pl-3.5!"
                type="email"
                placeholder="EUR  0.00"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </div>
            
            <AccountStatusDropdown/>
          
          </div>
          <div className='mt-5'>
            <label className='text-black-2000 mb-2 block font-medium sm:text-sm text-xs leading-3.5'>Reason for Creation <span className='text-red2100'>*</span> </label>
            <textarea className="text-gray-1200 placeholder:text-gray-1200 font-inter font-normal text-sm leading-5 bg-gray-1800 border border-solid border-gray-1000 py-2.5 px-3.5 h-25 rounded-[10px] w-full" placeholder="Explain why this account is being created manually (e.g., 'Manual AVI 
setup for French Visa application')"></textarea>
            <p className='text-gray-3800 mt-2 font-normal text-xs leading-4 flex items-center gap-1'> <Image src="/icons/info-blue.svg" width={14} height={14} alt="" /> This information is logged for compliance and audit purposes</p>
          </div>
          <div className='mt-5 flex items-center gap-2 rounded-lg bg-blue1900/50 border border-solid border-blue1400/20 p-4'>
            <span className='bg-blue1400/10 rounded-full flex items-center justify-center w-8 h-8'><Image src="/icons/info-blue.svg" width={16} height={16} alt="" /></span>
            <div className=''>
              <h4 className='text-black-2000 font-medium text-sm leading-5'>4-Eyes Principle</h4>
              <p className='text-gray-3800 font-normal text-xs leading-6'>Large initial deposits will require supervisor approval before activation</p>
            </div>
          </div>

        </div>
        <div className="w-full sticky bottom-0 bg-white">
        <div className="bg-grey5500/30 border border-solid border-gray-3900/60 px-6 py-4">
          <ul className="flex items-center justify-end gap-3">
            <li>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 cursor-pointer hover:bg-blue1900 hover:text-blue2000 transition-all duration-500 ease-in-out w-full border rounded-md text-gray-3800 font-medium text-sm leading-5 bg-gray-1500 border-solid border-grey-5400 h-10"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-blue-1000/90 hover:border-blue-1000/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal  text-sm leading-5 bg-blue-1000 border-solid border-blue-1000 h-10"
              > 
                Send Campaign
              </button>
            </li>
          </ul>
        </div> 
        </div>
      </Modal >
  )
}
