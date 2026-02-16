"use client";

import Image from "next/image";
import Button from '@/app/components/ui/Button'
import ProgressBar from '@/app/components/ProgressBar';
import Link from "next/link";


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
            Campaign Analytics
          </h4>
          <p className="text-gray-1100 md:max-w-full max-w-90 font-normal md:text-base text-sm leading-6">
            Campaign :id - Performance Report
          </p>
        </div>

      </div>
      <div className=" flex items-center justify-between border border-solid border-gray1600 bg-white rounded-lg shadow-4xl p-6.25">
        <div className="flex items-center gap-4 ">
          <span>
            <Image
              src={"/images/email-blue2.svg"}
              alt=""
              width={32}
              height={32}
            />
          </span>
          <div className="">
            <h4 className="text-black13 font-segoe font-normal text-xl leading-7">Campaign :id</h4>
            <p className="text-gray-1100 font-segoe font-normal text-base leading-7">Email Campaign • Sent on 2024-05-30</p>
          </div>
        </div>
        <span className=" text-green-1100 font-segoe font-normal text-xs leading-4 rounded-full h-5.5 px-2.75 bg-green-1200 inline-flex items-center justify-center">Completed</span>
      </div>
      <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4 sm:mt-8 mt-6'>
        <div className='flex items-center justify-between shadow-4xl bg-white border border-solid border-gray-1600 p-6.25 rounded-xl'>
          <div className=''>
            <span className='text-gray-1100 font-neulis-sans font-normal text-[13.78px] leading-5'>Total Sent</span>
            <h2 className='text-black-1200 my-1 font-neulis-sans font-normal text-2xl leading-8'>2,143</h2>
          </div>
          <div className=''>
            <Image
              src={"/images/email-blue2.svg"}
              alt=""
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className='flex items-center justify-between shadow-4xl bg-white border border-solid border-gray-1600 p-6.25 rounded-xl'>
          <div className=''>
            <span className='text-gray-1100 font-neulis-sans font-normal text-sm leading-5'>Open Rate</span>
            <h2 className='text-green-1000 my-1 font-neulis-sans font-normal text-2xl leading-8'>24.5%</h2>
            <p className='text-green-1000 font-normal text-sm leading-4 flex items-center gap-2'>
              <Image
                src={"/images/price-arrow-green.svg"}
                alt=""
                width={16}
                height={16}
              />
              <span className='text-green-1300 flex items-center'> Above average</span>
            </p>
          </div>
          <div className=''>
            <Image
              src={"/images/eyes-green.svg"}
              alt=""
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className='flex items-center justify-between shadow-4xl bg-white border border-solid border-gray-1600 p-6.25 rounded-xl'>
          <div className=''>
            <span className='text-gray-1100 font-neulis-sans font-normal text-sm leading-5'>Click Rate</span>
            <h2 className='text-purpal13 my-1 font-neulis-sans font-normal text-2xl leading-8'>3.2%</h2>
            <p className='text-purpal13 font-normal text-sm leading-4 flex items-center gap-2'>
              <Image
                src={"/images/price-purpal.svg"}
                alt=""
                width={16}
                height={16}
              />
              <span className='text-purpal13 flex items-center'> Above average</span>
            </p>
          </div>
          <div className=''>
            <Image
              src={"/images/click-icon.svg"}
              alt=""
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className='flex items-center justify-between shadow-4xl bg-white border border-solid border-gray-1600 p-6.25 rounded-xl'>
          <div className=''>
            <span className='text-gray-1100 font-neulis-sans font-normal text-sm leading-5'>Bounce Rate</span>
            <h2 className='text-orange12 my-1 font-neulis-sans font-normal text-2xl leading-8'>2.1%</h2>
            <p className='text-green-1000 font-normal text-sm leading-4 flex items-center gap-2'>
              <Image
                src={"/images/price-arrow-green-down.svg"}
                alt=""
                width={16}
                height={16}
              />
              <span className='text-green-1300 flex items-center'> Low bounce</span>
            </p>
          </div>
          <div className=''>
            <Image
              src={"/images/user-orange.svg"}
              alt=""
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 mt-6">
        <div className="bg-white border border-solid border-gray1600 sm:p-6.25 p-4 rounded-lg">
          <h4 className="text-black13 mb-6 font-segoe font-2xl font-normal leading-6">Engagement Breakdown</h4>
          <ul>
            <li className="mb-4 flex items-center justify-between">
              <span className="text-black13 font-segoe font-sm font-normal leading-5 block">Delivered</span>
              <div className="flex items-center gap-2">
                <ProgressBar value={96} className="w-32"></ProgressBar>
                <span className="text-black13 font-segoe font-normal text-sm leading-5">2098</span>
              </div>
            </li>
            <li className="mb-4 flex items-center justify-between">
              <span className="text-black13 font-segoe font-sm font-normal leading-5 block">Opened</span>
              <div className="flex items-center gap-2">
                <ProgressBar value={30} className="w-32" barColor="bg-green-1000"></ProgressBar>
                <span className="text-black13 font-segoe font-normal text-sm leading-5">514</span>
              </div>
            </li>
            <li className="mb-4 flex items-center justify-between">
              <span className="text-black13 font-segoe font-sm font-normal leading-5 block">Clicked</span>
              <div className="flex items-center gap-2">
                <ProgressBar value={10} className="w-32" barColor="bg-purpal13"></ProgressBar>
                <span className="text-black13 font-segoe font-normal text-sm leading-5">67</span>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-black13 font-segoe font-sm font-normal leading-5 block">Unsubscribed</span>
              <div className="flex items-center gap-2">
                <ProgressBar value={2} className="w-32" barColor="bg-red-1200"></ProgressBar>
                <span className="text-black13 font-segoe font-normal text-sm leading-5">12</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-white border border-solid border-gray1600 sm:p-6.25 p-4 rounded-lg">
          <h4 className="text-black13 mb-6 font-segoe font-2xl font-normal leading-6">Performance Insights</h4>
          <div className="bg-lightgreen16 mb-4 rounded-xl border border-solid border-lightgreen13 p-4.25">
            <h5 className="text-green-1100 font-segoe font-normal text-[15.5px] leading-6 mb-2">✅ What's working well</h5>
            <ul>
              <li className="text-green14 font-normal font-segoe text-sm leading-5 mb-1">• Open rate is above industry average (18%)</li>
              <li className="text-green14 font-normal font-segoe text-sm leading-5 mb-1">• Low bounce rate indicates good email hygiene</li>
              <li className="text-green14 font-normal font-segoe text-sm leading-5">• Subject line performed well</li>
            </ul>
          </div>
          <div className="bg-gray-1300 mb-4 rounded-xl border border-solid border-blue300 p-4.25">
            <h5 className="text-blue800 font-segoe font-normal text-[15.5px] leading-6 mb-2">💡 Opportunities to improve</h5>
            <ul>
              <li className="text-blue800 font-normal font-segoe text-sm leading-5 mb-1">• Consider A/B testing call-to-action buttons</li>
              <li className="text-blue800 font-normal font-segoe text-sm leading-5 mb-1">• Add more personalization to increase clicks</li>
              <li className="text-blue800 font-normal font-segoe text-sm leading-5">• Test different send times</li>
            </ul>
          </div>
          <div className="bg-gray-1500 rounded-xl border border-solid border-gray-1000 p-4.25">
            <h5 className="text-blue-1100 font-segoe font-normal text-[15.5px] leading-6 mb-2">📊 Benchmarks</h5>
            <ul>
              <li className="text-blue-1100 font-normal font-segoe text-sm leading-5 mb-1">• Industry avg open rate: 18-22%</li>
              <li className="text-blue-1100 font-normal font-segoe text-sm leading-5 mb-1">• Industry avg click rate: 2-5%</li>
              <li className="text-blue-1100 font-normal font-segoe text-sm leading-5">• Industry avg bounce rate: 2-5%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page