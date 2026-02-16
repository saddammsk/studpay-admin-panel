/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Image from 'next/image';
import { ContractStatus, useContractStore } from '@/app/store/zustand/Usecontractstore';
import { ViewContractModal } from '@/app/components/identification/ViewcontractModal';
import { SignContractModal } from '@/app/components/identification/Signcontractmodal';


const statusConfig: Record<ContractStatus, { classes: string }> = {
  signed: {
    classes: 'bg-green-1200 text-green-1100',
  },
  pending: {
    classes: 'bg-yellow1200 text-brown-1000',
  },
  rejected: {
    classes: 'bg-lightred1200 text-red1200',
  },
};

export default function ContractsPage() {
  const {
    filteredContracts,
    openViewModal,
    openSignModal,
  } = useContractStore();

  return (
    <div className="flex-1 mt-2">

      <div className="bg-white border border-solid border-gray-1000 rounded-lg shadow-4xl md:p-6.25 p-4">
        <h4 className="text-black13 flex items-center gap-2 mb-6 font-segoe sm:text-2xl text-xl font-normal leading-6 tracking-[-0.6px]">
          <Image
            src="/images/contracts-icon.svg"
            width="20"
            height="20"
            alt=""
            className="brightness-0"
          />
          Contracts & E-signatures
        </h4>

        {filteredContracts.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-1200">No contracts found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredContracts.map((item) => (
              <div
                key={item.id}
                className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between border border-solid border-gray-1000 rounded-lg p-4.25 hover:bg-gray-50 transition-colors"
              >
                <div className="">
                  <h4 className="text-black13 font-segoe font-normal text-base leading-6">
                    {item.name}
                  </h4>
                  <span className="text-gray-1200 font-segoe font-normal text-sm leading-5">
                    {item.pdf}
                  </span>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <span
                    className={`px-2 h-6 inline-flex items-center justify-center rounded-full font-segoe text-[11.63px] font-normal leading-4 whitespace-nowrap ${
                      statusConfig[item.status].classes
                    }`}
                  >
                    {item.status}
                  </span>
                  <ul className="flex items-center gap-2">
                    <li>
                      <button
                        onClick={() => openViewModal(item)}
                        className="flex items-center justify-center border border-solid border-gray1600 rounded-md w-10.5 h-9 hover:bg-gray-100 transition-colors"
                        title="View contract"
                      >
                        <Image
                          src={item.eyesImg}
                          width="16"
                          height="16"
                          alt="View"
                        />
                      </button>
                    </li>

                    <li>
                      <button
                        onClick={() => {
                          alert(`Downloading ${item.name}...`);
                        }}
                        className="flex items-center justify-center border border-solid border-gray1600 rounded-md w-10.5 h-9 hover:bg-gray-100 transition-colors"
                        title="Download contract"
                      >
                        <Image
                          src={item.downloadImg}
                          width="16"
                          height="16"
                          alt="Download"
                          className="brightness-0"
                        />
                      </button>
                    </li>

                    {item.status === 'pending' && (
                      <li>
                        <button
                          onClick={() => openSignModal(item)}
                          className="flex items-center justify-center border border-solid border-blue-1000 rounded-md w-10.5 h-9 hover:bg-blue-50 transition-colors text-blue-1000 font-bold"
                          title="Sign contract"
                        >
                          ✓
                        </button>
                      </li>
                    )}

                    {/* <li>
                      <button
                        onClick={() => {
                          if (
                            confirm(
                              `Are you sure you want to delete "${item.name}"?`
                            )
                          ) {
                            deleteContract(item.id);
                          }
                        }}
                        className="flex items-center justify-center border border-solid border-gray1600 rounded-md w-10.5 h-9 hover:bg-red-50 hover:border-red-300 transition-colors"
                        title="Delete contract"
                      >
                        <Trash2 size={16} className="text-red-500" />
                      </button>
                    </li> */}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

     
      </div>

      {/* Modals */}
      <ViewContractModal />
      <SignContractModal />
    </div>
  );
}