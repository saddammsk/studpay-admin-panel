"use client";
import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import Modal from "@/app/components/Modal";
import AddPartnerModal from "@/app/components/GlobalFinancing/AddPartnerModal";
import FinancePartnerTable from '@/app/components/GlobalFinancing/FinancePartnerTable';



const PartnerManagementPage = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <>
      <div className='w-full'>
   
        <div className='mt-6 xl:p-6'>
          <div className='flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between mb-6'>
            <div className=''>
              <h4 className='text-blue-1300 font-bold text-2xl leading-8'>Bank Partner Management</h4>
              <p className='text-gray-1900 font-normal text-sm leading-5 mt-1-0.5'>Manage partnerships, track portfolios, and onboard new banks.</p>
            </div>
            <Button
              onClick={() => setIsOpen(true)}
              iconSrc="/images/plus-icon.svg"
              label="Add New Partner Bank"
              className="text-white text-sm font-normal gap-2 h-9 px-3! bg-blue-1000 hover:bg-blue800 rounded-md border border-solid border-gray1600 m-0!"
            />
          </div>
          <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 gap-4">
            <div className="flex items-start justify-between bg-white rounded-xl border border-gray-3600/50 4xl:p-6 p-4 shadow-68xl">
              <div className="">
                <p className="text-gray-1900 font-normal text-sm leading-5 mb-3">
                  Total Onboarded Banks
                </p>
                <h4 className="4xl:text-[30px] text-2xl leading-9 font-bold text-blue-1300 tracking-[-0.75px]">
                  24
                </h4>
                <span className="mt-1 4xl:text-sm text-xs leading-5 font-normal block text-green57">
                  +3 this quarter
                </span>
              </div>
              <div className="4xl:w-12 w-11 4xl:h-12 h-11 bg-blue-2200/10 rounded-xl flex items-center justify-center">
                <Image
                  src="/icons/Banks-icon.svg"
                  width="20"
                  height="20"
                  alt=""
                />
              </div>
            </div>
            <div className="flex items-start justify-between bg-white rounded-xl border border-gray-3600/50 4xl:p-6 p-4 shadow-68xl">
              <div className="">
                <p className="text-gray-1900 font-normal text-sm leading-5 mb-3">
                  Active Loan Portfolios
                </p>
                <h4 className="4xl:text-[30px] text-2xl leading-9 font-bold text-blue-1300 tracking-[-0.75px]">
                  1,847
                </h4>
                <span className="mt-1 4xl:text-sm text-xs leading-5 font-normal block text-green57">
                  +12.4% vs last month
                </span>
              </div>
              <div className="4xl:w-12 w-11 4xl:h-12 h-11 bg-blue-2200/10 rounded-xl flex items-center justify-center">
                <Image
                  src="/icons/briefcase-blue.svg"
                  width="20"
                  height="20"
                  alt=""
                />
              </div>
            </div>
            <div className="flex items-start justify-between bg-white rounded-xl border border-gray-3600/50 4xl:p-6 p-4 shadow-68xl">
              <div className="">
                <p className="text-gray-1900 font-normal text-sm leading-5 mb-3">
                  Total Partner Revenue
                </p>
                <h4 className="4xl:text-[30px] text-2xl leading-9 font-bold text-blue-1300 tracking-[-0.75px]">
                  €4.2M
                </h4>
                <span className="mt-1 4xl:text-sm text-xs leading-5 font-normal block text-green57">
                  +8.7% vs last quarter
                </span>
              </div>
              <div className="4xl:w-12 w-11 4xl:h-12 h-11 bg-blue-2200/10 rounded-xl flex items-center justify-center">
                <Image
                  src="/icons/doller-blue.svg"
                  width="20"
                  height="20"
                  alt=""
                />
              </div>
            </div>
            <div className="flex items-start justify-between bg-white rounded-xl border border-gray-3600/50 4xl:p-6 p-4 shadow-68xl">
              <div className="">
                <p className="text-gray-1900 font-normal text-sm leading-5 mb-3">
                  Avg. Approval Rate
                </p>
                <h4 className="4xl:text-[30px] text-2xl leading-9 font-bold text-blue-1300 tracking-[-0.75px]">
                  73.2%
                </h4>
                <span className="mt-1 4xl:text-sm text-xs leading-5 font-normal block text-red-2000">
                  -1.3% vs last month
                </span>
              </div>
              <div className="4xl:w-12 w-11 4xl:h-12 h-11 bg-blue-2200/10 rounded-xl flex items-center justify-center">
                <Image
                  src="/icons/price-down-blue.svg"
                  width="20"
                  height="20"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className='mt-6'>
            <h4 className='text-blue-1300 text-base leading-6 font-semibold mb-3'>Partner Directory</h4>
            <FinancePartnerTable />
          </div>
        </div>

      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        panelClassName="max-w-[512px] bg-gray-1500 shadow-7xl relative rounded-[10px]! md:p-6 p-4"
      >
        <Link onClick={() => setIsOpen(false)} href={"#"} className="flex items-center justify-center  w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <AddPartnerModal />

      </Modal >


    </>
  );
};

export default PartnerManagementPage;
