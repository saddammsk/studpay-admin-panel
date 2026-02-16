"use client";

import Image from "next/image";
import Button from '@/app/components/ui/Button'
import MarketingCampaignTable from "@/app/components/MarketingCampaignTable";


const page = () => {


  return (
    <div>
      <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between mb-9">
        <div className="">
          <h4 className="text-black12 font-normal font-segoe md:text-[30px] text-2xl leading-9">
            Marketing & Campaigns
          </h4>
          <p className="text-gray-1100 md:max-w-full max-w-90 font-normal md:text-base text-sm leading-6">
            Create and manage email and SMS campaigns for students
          </p>
        </div>
        <Button onClick={() => { }}
          iconSrc="/images/plus-icon.svg"
          label="New Campaign"
          className="text-white text-sm gap-4 pt-3.25 h-10 px-4! bg-blue-1000 hover:bg-blue800 rounded-lg m-0!"
        />
      </div>
      <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4 sm:mt-8 mt-6'>
        <div className='flex items-center justify-between gap-4 shadow-4xl bg-white border border-solid border-gray-1600 p-6.25 rounded-lg'>
          <span className="w-8 h-8 flex items-center justify-center">
            <Image
              src={"/images/email-blue.svg"}
              alt=""
              width={32}
              height={32}
            />
          </span>
          <div className='flex-1 w-full'>
            <span className='text-gray-1100 font-segoe font-normal text-sm leading-5 block'>Total Campaigns</span>
            <h2 className='text-black-1200 font-segoe font-normal text-2xl leading-8'>24</h2>
          </div>
        </div>
        <div className='flex items-center justify-between gap-4 shadow-4xl bg-white border border-solid border-gray-1600 p-6.25 rounded-lg'>
          <span className="w-8 h-8 flex items-center justify-center">
            <Image
              src={"/images/user-green.svg"}
              alt=""
              width={32}
              height={32}
            />
          </span>
          <div className='flex-1 w-full'>
            <span className='text-gray-1100 font-segoe font-normal text-sm leading-5 block'>Students Reached</span>
            <h2 className='text-black-1200 font-segoe font-normal text-2xl leading-8'>12.4K</h2>
          </div>
        </div>
        <div className='flex items-center justify-between gap-4 shadow-4xl bg-white border border-solid border-gray-1600 p-6.25 rounded-lg'>
          <span className="w-8 h-8 flex items-center justify-center">
            <Image
              src={"/images/eyes-avg.svg"}
              alt=""
              width={32}
              height={32}
            />
          </span>
          <div className='flex-1 w-full'>
            <span className='text-gray-1100 font-segoe font-normal text-sm leading-5 block'>Avg Open Rate</span>
            <h2 className='text-black-1200 font-segoe font-normal text-2xl leading-8'>28.7%</h2>
          </div>
        </div>
        <div className='flex items-center justify-between gap-4 shadow-4xl bg-white border border-solid border-gray-1600 p-6.25 rounded-lg'>
          <span className="w-8 h-8 flex items-center justify-center">
            <Image
              src={"/images/chart-avg.svg"}
              alt=""
              width={32}
              height={32}
            />
          </span>
          <div className='flex-1 w-full'>
            <span className='text-gray-1100 font-segoe font-normal text-sm leading-5 block'>Avg Click Rate</span>
            <h2 className='text-black-1200 font-segoe font-normal text-2xl leading-8'>5.2%</h2>
          </div>
        </div>
      </div>
      <div className="mt-6.25">
        <MarketingCampaignTable />
      </div>
    </div>
  )
}

export default page