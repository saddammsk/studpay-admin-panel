/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Image from 'next/image';

interface AdjustLimitsModalProps {
  isOpen: boolean;
  onClose: () => void;
  data?: any;
}

const AdjustLimitsModal: React.FC<AdjustLimitsModalProps> = ({ isOpen, onClose, data }) => {
  const [limits, setLimits] = useState({
    daily: '1000',
    monthly: '30000',
    transaction: '500'
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-4xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-black-1600">Adjust Limits</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <Image src="/images/close-icon.svg" width={20} height={20} alt="Close" />
          </button>
        </div>
        
        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-sm text-yellow-800 flex items-center gap-2">
            <span className="font-medium">4-Eyes Principle:</span> This change requires approval from another administrator.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Daily Transaction Limit (€)</label>
            <input
              type="number"
              value={limits.daily}
              onChange={(e) => setLimits({...limits, daily: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Transaction Limit (€)</label>
            <input
              type="number"
              value={limits.monthly}
              onChange={(e) => setLimits({...limits, monthly: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Single Transaction Limit (€)</label>
            <input
              type="number"
              value={limits.transaction}
              onChange={(e) => setLimits({...limits, transaction: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Cancel</button>
          <button className="px-4 py-2 bg-yellow-1100 text-white rounded-md hover:bg-yellow-1100/90">Request Approval</button>
        </div>
      </div>
    </div>
  );
};

export default AdjustLimitsModal;