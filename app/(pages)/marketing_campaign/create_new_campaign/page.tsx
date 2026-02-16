"use client";

import Image from "next/image";
import Link from "next/link";
import Button from '@/app/components/ui/Button'
import CampaignDetailStep from "@/app/components/CreateCampaignSteps/CampaignDetailStep";
import AudienceTargeting from "@/app/components/CreateCampaignSteps/AudienceTargeting";
import MessageBuilder from "@/app/components/CreateCampaignSteps/MessageBuilder";
import SummaryLaunch from "@/app/components/CreateCampaignSteps/SummaryLaunch";


const page = () => {


  return (
    <div>
      <div className="flex gap-4 sm:flex-row flex-col sm:items-center items-start mb-6">
        <Link href={"#"} className="flex items-center justify-center w-8 h-8">
          <Image
            src={"/images/left-arrow3.svg"}
            alt=""
            width={16}
            height={16}
          />
        </Link>
        <div className="">
          <h4 className="text-black12 font-normal mb-1 font-segoe md:text-[30px] text-2xl leading-9">
            Create New Campaign
          </h4>
          <p className="text-gray-1100 md:max-w-full max-w-90 font-normal md:text-base text-sm leading-6">
            Follow the steps below to create your marketing campaign
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg overflow-x-auto border border-solid border-gray1600 shadow-4xl xl:p-6.25 p-4 mt-6">
        <ul className="flex items-center justify-between xl:gap-4 xl:w-full w-200">
          <li className="flex items-center xl:gap-4 gap-1.5">
            <Link href={"#"} className="flex items-center gap-2">
              <span className="text-white font-segoe font-normal text-sm leading-5 bg-blue-1000 rounded-full flex items-center justify-center w-8 h-8">1</span>
              <p className="text-blue-1000 font-segoe font-normal text-sm leading-5">Campaign Details</p>
            </Link>
            <span className="bg-gray-1000 w-12 h-0.5 flex items-center flex-1"></span>
          </li>
          <li className="flex items-center xl:gap-4 gap-1.5">
            <Link href={"#"} className="flex items-center gap-2">
              <span className="text-gray-1100 font-segoe font-normal text-sm leading-5 bg-gray-1000 rounded-full flex items-center justify-center w-8 h-8">2</span>
              <p className="text-gray-1200 font-segoe font-normal text-sm leading-5">Audience Targeting</p>
            </Link>
            <span className="bg-gray-1000 w-12 h-0.5 flex items-center flex-1"></span>
          </li>
          <li className="flex items-center xl:gap-4 gap-1.5">
            <Link href={"#"} className="flex items-center gap-2">
              <span className="text-gray-1100 font-segoe font-normal text-sm leading-5 bg-gray-1000 rounded-full flex items-center justify-center w-8 h-8">3</span>
              <p className="text-gray-1200 font-segoe font-normal text-sm leading-5">Message Builder</p>
            </Link>
            <span className="bg-gray-1000 w-12 h-0.5 flex items-center flex-1"></span>
          </li>
          <li className="flex items-center xl:gap-4 gap-1.5">
            <Link href={"#"} className="flex items-center gap-2">
              <span className="text-gray-1100 font-segoe font-normal text-sm leading-5 bg-gray-1000 rounded-full flex items-center justify-center w-8 h-8">4</span>
              <p className="text-gray-1200 font-segoe font-normal text-sm leading-5">Summary & Launch</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <div className="">
          <CampaignDetailStep />
        </div>
        <div className="hidden">
          <AudienceTargeting />
        </div>
        <div className="hidden">
          <MessageBuilder />
        </div>
        <div className="hidden">
          <SummaryLaunch />
        </div>
        <div className="flex items-center justify-between mt-6">
           <Button onClick={() => {}}
            iconSrc="/images/left-arrow3.svg"
            label="Back to Campaigns" 
            className="text-black13 text-sm gap-2 h-10 px-4! bg-white border border-solid border-gray1600 hover:bg-blue800 hover:text-white rounded-lg m-0!"
          />
          <Button onClick={() => {}}
            iconSrc="/images/right-arrow-white.svg"
            label="Next"
            iconPosition="end"
            className="text-white text-sm gap-2 h-10 px-4! bg-blue-1000 hover:bg-blue800 rounded-lg m-0!"
          />
        </div>
      </div>
    </div>
  )
}

export default page