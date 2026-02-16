'use client';

import React, { useState, useRef, useEffect } from 'react';
import { setTwoFactorCode, setTwoFactorRequired } from '@/app/store/slices/Loginslice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useRouter } from 'next/navigation';

interface TwoFactorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const TwoFactorModal: React.FC<TwoFactorModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const dispatch = useAppDispatch();
  const { twoFactorCode, errors, isLoading } = useAppSelector(
    (state) => state.login
  );
  const [resendCountdown, setResendCountdown] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const route = useRouter();

  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCountdown]);

  if (!isOpen) return null;

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newCode = twoFactorCode.split('');
    newCode[index] = value;
    const updatedCode = newCode.join('');

    dispatch(setTwoFactorCode(updatedCode));

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Backspace' && !twoFactorCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    onClose();
    route.push('/')
    
  };

  const handleResend = async () => {
    try {
      await fetch('/api/auth/resend-2fa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      setResendCountdown(60);
    } catch (error) {
      console.error('Failed to resend 2FA code:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-[400px] w-full p-6 md:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="text-center flex flex-col items-center justify-center mb-6">
          <img src="/images/verify-icon-bg.svg" alt="" />
          <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">
            Verify Your Identity
          </h3>
          <p className="text-sm text-gray-600">
            {"We've"} sent a 6-digit code to your registered email
          </p>
          <div className="flex text-blue-1000 text-sm items-center justify-center gap-1 mb-5">
            <img src="/images/verify-email-icon-2.svg" alt="" />
            <p>a***@studpay.com</p>

          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2 justify-center">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={twoFactorCode[index] || ''}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className={`w-12 h-12 border-2 rounded-lg bg-gray-2100 text-center text-lg font-bold focus:outline-none transition-all ${
                  errors.twoFactor
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                }`}
              />
            ))}
          </div>

          {errors.twoFactor && (
            <p className="text-sm text-red-600 text-center font-medium">
              {errors.twoFactor}
            </p>
          )}

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading || twoFactorCode.length !== 6}
            className="w-full mt-4 bg-blue-1000 text-white cursor-pointer text-sm font-semibold py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors disabled:cursor-not-allowed"
          >
            {isLoading ? 'Verifying...' : 'Verify & Proceed'}
          </button>

          <div className="flex items-center justify-center gap-2 pt-3">
            <span className="text-sm text-gray-600">{"Didn't"} receive the code?</span>
            <button
              type="button"
              onClick={handleResend}
              disabled={resendCountdown > 0 || isLoading}
              className="text-sm text-blue-600 hover:text-blue-700  disabled:text-black disabled:cursor-not-allowed"
            >
              {resendCountdown > 0 ? `Resend in ${resendCountdown}s` : 'Resend'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TwoFactorModal;