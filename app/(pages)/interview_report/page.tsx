"use client";


import Image from "next/image";


const page = () => {
  return (
    <div>
      <div>
        <h4 className="text-black12 font-normal font-segoe md:text-[30px] text-2xl leading-9 mb-2">
          Interview Reports
        </h4>
        <p className="text-gray-1100 font-normal md:text-base text-sm leading-6">
          Manage and track all interview reports and feedback
        </p>
      </div>
      <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4 sm:mt-8 mt-6'>
        <div className='flex items-center justify-between shadow-4xl bg-white border border-solid border-gray-1600 p-6.25 rounded-xl'>
          <div className=''>
            <span className='text-gray-1100 font-neulis-sans font-normal text-[13.78px] leading-5'>Total Interviews</span>
            <h2 className='text-black-1200 my-1 font-neulis-sans font-normal text-2xl leading-8'>156</h2>
            <p className='text-gray-1200 font-normal text-sm leading-4 flex items-center gap-1'><span className='text-green-1300 flex items-center'>+12%</span></p>
          </div>
          <div className=''>
            <Image
              src={"/images/file-blue.svg"}
              alt=""
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className='flex items-center justify-between shadow-4xl bg-white border border-solid border-gray-1600 p-6.25 rounded-xl'>
          <div className=''>
            <span className='text-gray-1100 font-neulis-sans font-normal text-sm leading-5'>This Week</span>
            <h2 className='text-black-1200 my-1 font-neulis-sans font-normal text-2xl leading-8'>23</h2>
            <p className='text-gray-1200 font-normal text-sm leading-4 flex items-center gap-1'><span className='text-green-1300 flex items-center'>+8%</span></p>
          </div>
          <div className=''>
            <Image
              src={"/images/calendar-blue.svg"}
              alt=""
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className='flex items-center justify-between shadow-4xl bg-white border border-solid border-gray-1600 p-6.25 rounded-xl'>
          <div className=''>
            <span className='text-gray-1100 font-neulis-sans font-normal text-sm leading-5'>Pending Reviews</span>
            <h2 className='text-black-1200 my-1 font-neulis-sans font-normal text-2xl leading-8'>7</h2>
            <p className='text-gray-1200 font-normal text-sm leading-4 flex items-center gap-1'><span className='text-green-1300 flex items-center'>-3%</span></p>
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
        <div className='flex items-center justify-between shadow-4xl bg-white border border-solid border-gray-1600 p-6.25 rounded-xl'>
          <div className=''>
            <span className='text-gray-1100 font-neulis-sans font-normal text-sm leading-5'>Success Rate</span>
            <h2 className='text-black-1200 my-1 font-neulis-sans font-normal text-2xl leading-8'>78%</h2>
            <p className='text-gray-1200 font-normal text-sm leading-4 flex items-center gap-1'><span className='text-green-1300 flex items-center'>+5%</span></p>
          </div>
          <div className=''>
            <Image
              src={"/images/price-arrow.svg"}
              alt=""
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      <div className="mt-6.25 border border-solid border-gray-1000 bg-white rounded-lg p-6.25">
        <h4 className="text-black13 flex items-center font-normal font-segoe md:text-2xl text-lg leading-6 tracking-[-0.6px]">
          Interview Reports Management
        </h4>
        <div className="py-12">
          <p className="text-gray-1200 font-segoe font-normal text-[15.88px] leading-6 text-center">Interview reports management interface will be implemented here</p>
        </div>
      </div>
    </div>
  )
}

export default page