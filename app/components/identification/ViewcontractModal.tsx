'use client';

import { useContractStore } from '@/app/store/zustand/Usecontractstore';
import { X } from 'lucide-react';

export const ViewContractModal = () => {
  const { selectedContract, isViewModalOpen, closeViewModal } = useContractStore();

  if (!isViewModalOpen || !selectedContract) return null;

  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-99 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-1000 p-6 flex items-center justify-between">
          <h2 className="text-xl font-segoe font-semibold text-black13">
            {selectedContract.name}
          </h2>
          <button
            onClick={closeViewModal}
            className="p-1 hover:bg-gray-100 rounded-md transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Contract Name
              </label>
              <p className="text-gray-1200">{selectedContract.name}</p>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-1700 block mb-2">
                Status
              </label>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  selectedContract.status === 'signed'
                    ? 'bg-green-1200 text-green-1100'
                    : selectedContract.status === 'pending'
                    ? 'bg-yellow1200 text-brown-1000'
                    : 'bg-lightred1200 text-red1200'
                }`}
              >
                {selectedContract.status}
              </span>
            </div>

            {selectedContract.createdDate && (
              <div>
                <label className="text-sm font-semibold text-gray-1700 block mb-2">
                  Created Date
                </label>
                <p className="text-gray-1200">{selectedContract.createdDate}</p>
              </div>
            )}

            {selectedContract.signedDate && (
              <div>
                <label className="text-sm font-semibold text-gray-1700 block mb-2">
                  Signed Date
                </label>
                <p className="text-gray-1200">{selectedContract.signedDate}</p>
              </div>
            )}

            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-1200 mb-4">Contract Preview</p>
              <div className="bg-white border-2 border-dashed border-gray-1000 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-1400 text-sm">📄 Contract Document</p>
                  <p className="text-gray-1200 text-xs mt-2">
                    (PDF preview would load here)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-1000 p-6 flex gap-3 justify-end">
          <button
            onClick={closeViewModal}
            className="px-4 py-2 text-sm font-medium border border-gray-1000 rounded-md hover:bg-gray-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};