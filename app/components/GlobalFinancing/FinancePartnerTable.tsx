"use client";
import { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import Modal from "@/app/components/Modal";
import { usePartnerStore } from "@/app/store/zustand/usePartnerStore";
import OnboardPartnerModal from "@/app/components/GlobalFinancing/AddPartnerModal";

const statusConfig: Record<string, string> = {
  Active: "bg-lightgreenNew4 text-green58",
  "Pending Legal Review": "bg-yellow-3100 text-yellow-1100",
  Suspended: "bg-gray-6100 text-red2100",
}

export default function TransactionTable() {
  const { partners, isAddModalOpen, openAddModal, closeAddModal } = usePartnerStore();
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <div className="bg-white border border-solid border-gray-3100 rounded-lg">
       
        <div className="overflow-x-auto">
          <table className="2xl:w-full w-250">
            <thead>
              <tr className="border-b border-solid border-grey-5400">
                <th className="p-4 tracking-[0.6px] text-left text-xs leading-4 font-bold text-gray-5000 uppercase">Bank</th>
                <th className="p-4 tracking-[0.6px] text-left text-xs leading-4 font-bold text-gray-5000 uppercase">Account Manager</th>
                <th className="p-4 tracking-[0.6px] text-center text-xs leading-4 font-bold text-gray-5000 uppercase">Status</th>
                <th className="p-4 tracking-[0.6px] text-left text-xs leading-4 font-bold text-gray-5000 uppercase">Portfolio Health</th>
                <th className="p-4 tracking-[0.6px] text-right text-xs leading-4 font-bold text-gray-5000 uppercase">Total Loans</th>
              </tr>
            </thead>

            <tbody>
              {partners.map((item) => (
                <tr key={item.id} onClick={() => setIsOpen(true)} className="border-b border-gray-200 hover:bg-gray-50 transition last:border-b-0">
                  <td className="p-4 text-sm text-ElectricBlue2 font-normal">
                    <div className='flex items-center gap-3'>
                      <span className='w-8.5 h-8.5 p-0.75 border border-solid border-grey-5400 rounded-[10px] bg-gray-1500 flex items-center justify-center'>
                        <span className='bg-gray-7600 w-full h-full text-blue600 font-bold text-[12.5px] flex items-center justify-center'>
                          {item.bank.title}
                        </span>
                      </span>
                      <div className='flex-1 w-full'>
                        <h4 className='text-black-1300 font-medium text-sm leading-4'>{item.bank.name}</h4>
                        <p className='text-gray-5000 font-normal text-xs leading-4'>{item.bank.subtitle}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <h4 className='text-sm leading-5 font-normal text-black-1300'>
                      {item.account.name}
                    </h4>
                    <p className='flex items-center text-xs gap-1 leading-4 font-normal text-gray-5000'>
                      <Image
                        src={item.account.icon}
                        width={12}
                        height={12}
                        alt={item.account.name}
                      />
                      {item.account.email}
                    </p>
                  </td>
                  <td className="p-4 text-center">
                    <span
                      className={`px-2 h-5.5 text-xs font-medium leading-4 rounded-full inline-flex items-center ${statusConfig[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-1">
                      <div className='flex items-center justify-between mb-1'>
                        <div className="text-xs font-medium text-green-600">
                          {item.portfolioHealth.approved}% approved
                        </div>
                        <span className='text-gray-5000 text-xs leading-4 font-normal'>{item.portfolioHealth.pending}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-red-2000/15 rounded-full">
                        <div className="h-1.5 bg-green-3200 rounded-full" style={{  width: `${item.portfolioHealth.approved}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-black-1300 font-semibold text-sm leading-3 block text-right">
                      {item.loan}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Row detail modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        panelClassName="max-w-[512px] bg-gray-1500 relative h-full overflow-x-auto md:p-6 p-4"
      >
        <Link onClick={() => setIsOpen(false)} href={"#"} className="flex items-center justify-center shadow-71xl rounded w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
      </Modal>

      {/* Onboard new partner modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={closeAddModal}
        panelClassName="max-w-[512px] bg-white relative overflow-y-auto md:p-6 p-4"
      >
        <button onClick={closeAddModal} className="flex items-center justify-center shadow-71xl rounded w-6 h-6 absolute top-4 right-4 hover:bg-gray-100 transition-all">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="Close" />
        </button>
        <OnboardPartnerModal />
      </Modal>
    </>
  );
}