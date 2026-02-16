'use client';

import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { useContractStore } from '@/app/store/zustand/Usecontractstore';

export const SignContractModal = () => {
  const { selectedContract, isSignModalOpen, closeSignModal, signContract, isLoading } =
    useContractStore();
  const [signature, setSignature] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [signed, setSigned] = useState(false);

  if (!isSignModalOpen || !selectedContract) return null;

  const handleSign = () => {
    if (!signature.trim() || !agreed) {
      alert('Please enter signature and agree to the terms');
      return;
    }

    signContract(selectedContract.id, signature);
    setSigned(true);

    // Close after 2 seconds
    setTimeout(() => {
      setSigned(false);
      setSignature('');
      setAgreed(false);
      closeSignModal();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        <div className="bg-white border-b border-gray-1000 p-6 flex items-center justify-between">
          <h2 className="text-lg font-segoe font-semibold text-black13">
            Sign Contract
          </h2>
          <button
            onClick={closeSignModal}
            className="p-1 hover:bg-gray-100 rounded-md transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {signed ? (
            <div className="text-center py-8">
              <CheckCircle size={48} className="text-green-1100 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-black13 mb-2">Signed Successfully!</h3>
              <p className="text-gray-1200 text-sm">
                The contract has been signed and recorded.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-1700 mb-2">
                  Contract: {selectedContract.name}
                </p>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-1700 block mb-2">
                  Your Signature (Type your name)
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                  className="w-full border border-gray-1000 rounded-lg p-3 font-segoe text-black13 focus:outline-none focus:ring-2 focus:ring-blue-1000"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-1700 block mb-2">
                  Signature Preview
                </label>
                <div className="border-2 border-dashed border-gray-1000 rounded-lg p-6 text-center min-h-24 flex items-center justify-center bg-gray-1400">
                  {signature ? (
                    <p
                      className="text-2xl font-cursive text-gray-1400"
                      style={{ fontFamily: 'cursive' }}
                    >
                      {signature}
                    </p>
                  ) : (
                    <p className="text-gray-1200 text-sm">Your signature will appear here</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agree"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-4 h-4 mt-1 cursor-pointer accent-blue-1000"
                />
                <label
                  htmlFor="agree"
                  className="text-sm text-gray-1200 cursor-pointer flex-1"
                >
                  I have read and agree to the terms and conditions of this contract and
                  certify that the signature provided is my legal signature.
                </label>
              </div>
            </div>
          )}
        </div>

        {!signed && (
          <div className="border-t border-gray-1000 p-6 flex gap-3 justify-end">
            <button
              onClick={closeSignModal}
              disabled={isLoading}
              className="px-4 py-2 text-sm font-medium border border-gray-1000 rounded-md hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSign}
              disabled={isLoading || !signature.trim() || !agreed}
              className="px-4 py-2 text-sm font-medium bg-blue-1000 text-white rounded-md hover:bg-blue-1100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing...' : 'Sign Contract'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};