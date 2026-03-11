/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Image from 'next/image';

interface ImpersonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  data?: any;
}

const ImpersonateModal: React.FC<ImpersonateModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-4xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-black-1600">Impersonate User</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <Image src="/images/close-icon.svg" width={20} height={20} alt="Close" />
          </button>
        </div>
        <p className="text-gray-600 mb-4">
          You are about to impersonate this user. You will have access to their account until you switch back.
        </p>
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue1400 text-white rounded-md hover:bg-blue1400/90">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImpersonateModal;