import React from 'react'
import ProgressBar from '../ProgressBar'
import Image from 'next/image'

const RecurringPulse = () => {
  return (
    <div>
         <div className=''>
          <h4 className='text-black-1400 font-bold text-lg leading-7'>Recurring Pulse</h4>
          <p className='text-gray-2300 font-normal text-xs leading-4'>Monthly overview of scheduled inflows & fixed outflows</p>
        </div>

        <div className='mt-6 grid sm:grid-cols-2 grid-cols-1 gap-4'>
          <div className='bg-white border border-solid border-gray23 p-5 rounded-[10px]'>
            <div className='flex items-start justify-between mb-3'>
              <div className=''>
                <span className='text-gray-2300 font-bold text-xs leading-4 tracking-[0.6px] uppercase block'>Total Expected Inflows</span>
                <h4 className='text-lightgreen19 font-bold text-[30px] mt-2.5 mb-1 leading-9 tracking-[-0.75px]'>€3,220</h4>
                <p className='text-gray-2300 font-normal text-xs leading-4'>6 recurring sources this month</p>
              </div>
              <span className='w-7 h-7 flex items-center justify-center rounded-lg bg-lightgreen20'>
                <Image
                  src="/images/arrow-up.svg"
                  width={16}
                  height={16}
                  alt="Price arrow green"
                />
              </span>
            </div>
            <ProgressBar value={78} barColor="bg-lightgreen19" bgColor="bg-lightgreen20" className='h-1.5!' />
            <p className='text-gray-2300 mt-1 font-normal text-[10px] leading-3.75'>78% collected so far</p>
          </div>
          <div className='bg-white border border-solid border-gray23 p-5 rounded-[10px]'>
            <div className='flex items-start justify-between mb-3'>
              <div className=''>
                <span className='text-gray-2300 font-bold text-xs leading-4 tracking-[0.6px] uppercase block'>Total Fixed Outflows</span>
                <h4 className='text-red1900 font-bold text-[30px] mt-2.5 mb-1 leading-9 tracking-[-0.75px]'>€1,361</h4>
                <p className='text-gray-2300 font-normal text-xs leading-4'>6 fixed charges due this month</p>
              </div>
              <span className='w-7 h-7 flex items-center justify-center rounded-lg bg-gray-1600'>
                <Image
                  src="/images/down-arrow-red.svg"
                  width={16}
                  height={16}
                  alt=""
                />
              </span>
            </div>
            <ProgressBar value={62} barColor="bg-red1900" bgColor="bg-gray-1600" className='h-1.5!' />
            <p className='text-gray-2300 mt-1 font-normal text-[10px] leading-3.75'>62% debited so far</p>
          </div>
        </div>
    </div>
  )
}

export default RecurringPulse