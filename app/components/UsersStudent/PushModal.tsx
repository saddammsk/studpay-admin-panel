/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Image from 'next/image';

interface PushModalProps {
  isOpen: boolean;
  onClose: () => void;
  data?: any;
}

const PushModal: React.FC<PushModalProps> = ({ isOpen, onClose, data }) => {
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-4xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-black-1600">Send Push Notification</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <Image src="/images/close-icon.svg" width={20} height={20} alt="Close" />
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Notification Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue1400"
            placeholder="Type notification message..."
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Cancel</button>
          <button className="px-4 py-2 bg-blue1400 text-white rounded-md hover:bg-blue1400/90">Send Notification</button>
        </div>
      </div>
    </div>
  );
};

export default PushModal;