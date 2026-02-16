/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  updateFormField,
  setErrors,
} from '@/app/store/slices/Loginslice';
import { useBiometric } from '@/app/hooks/useBiometric';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import InputField from '@/app/components/InputField';
import TwoFactorModal from '@/app/components/TwoFactorModal';

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { formData, errors, isLoading, successMessage, biometricStatus } =
    useAppSelector((state) => state.login);
  const { authenticate } = useBiometric();
  const [showTwoFactorModal, setShowTwoFactorModal] = useState(false);

  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      dispatch(updateFormField({ field: 'email', value: rememberedEmail }));
    }
  }, [dispatch]);



const handleInputChange = <K extends keyof typeof formData>(
  field: K,
  value: typeof formData[K]
) => {
  dispatch(updateFormField({ field, value }));
};


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  dispatch(setErrors({}));

  const newErrors: Record<string, string> = {};

  if (!formData.email) {
    newErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Email is invalid';
  }

  if (!formData.password) {
    newErrors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters';
  }

  if (Object.keys(newErrors).length > 0) {
    dispatch(setErrors(newErrors));
    return;
  }


  try {


    const loginSuccess = true; // pretend API response

    if (loginSuccess) {
      setShowTwoFactorModal(true)
     
    } else {
      dispatch(setErrors({ submit: 'Invalid email or password' }));
    }
  } catch (err: any) {
    dispatch(setErrors({ submit: err.message || 'Login failed' }));
  } 
};


  const handleBiometricLogin = async () => {
    try {
      const authenticated = await authenticate();
      if (authenticated) {
        const success = await loginWithBiometric(() => {
          setTimeout(() => {
            router.push('/dashboard');
          }, 1500);
        });
      } else {
        dispatch(setErrors({ biometric: 'Biometric authentication failed' }));
      }
    } catch (error) {
      dispatch(
        setErrors({
          biometric: 'Biometric authentication is not available',
        })
      );
    }
  };

  return (
    <div className="h-screen overflow-auto scroll-hide pb-4">
      <div className="flex md:min-h-[calc(100vh-40px)] min-h-[calc(100vh-80px)] items-center justify-center">
        <div className="max-w-md px-4 w-full mx-auto">
          {successMessage ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-green-100">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                {successMessage}
              </h4>
              <p className="text-sm text-gray-600">
                Redirecting to your dashboard...
              </p>
            </div>
          ) : (
            <>
              <h4 className="text-3xl font-bold leading-9 mb-2 text-blue-1000">
                Welcome Back
              </h4>
              <p className="text-base font-normal leading-6 text-gray-700">
                Sign in to access your admin dashboard
              </p>

              <form onSubmit={handleSubmit} className="mt-8">
                <div className="space-y-6.75">
                  <InputField
                    label="Admin Email"
                    type="email"
                    placeholder="admin@studpay.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    iconSrc="/images/msg-icon.svg"
                    ClassName="rounded-2xl border-2 bg-white h-14.75"
                  />
                    {errors.email && (
                    <p className="text-xs font-normal leading-4 text-red-600 -mt-6 mb-4">
                      {errors.email}
                    </p>
                  )}

                  <InputField
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    iconSrc="/images/lock-icon.svg"
                    passwordToggleIconSrc={{
                      show: '/images/eye-icon.svg',
                      hide: '/images/eye-icon.svg',
                    }}
                    ClassName="rounded-2xl border-2 bg-white h-14.75"
                  />
                    {errors.password && (
                    <p className="text-xs font-normal leading-4 text-red-600 -mt-6 mb-4">
                      {errors.password}
                    </p>
                  )}
                </div>

                  <button
                    type="button"
                    // onClick={handleBiometricLogin}
                    disabled={isLoading}
                    className="text-sm cursor-pointer font-normal leading-5 text-gray-700 gap-3 flex items-center my-6 justify-center rounded-2xl py-3.5 border-dotted border-2 border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full"
                  >
                    <img src="/images/finger-print.svg" alt="Biometric" />
                    Use Biometric Authentication
                  </button>

                {errors.biometric && (
                  <p className="text-xs text-red-600 mb-4">{errors.biometric}</p>
                )}

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="secure-session"
                      name="session"
                      checked={formData.secureSession}
                      onChange={(e) =>
                        handleInputChange('secureSession', e.target.checked)
                      }
                      className="appearance-none cursor-pointer w-4 h-4 rounded-full checked:border-4 border-2 border-gray-1400  checked:border-blue-1000 focus:outline-none"
                    />
                    <label
                      htmlFor="secure-session"
                      className="text-sm font-normal leading-5 text-gray-700 block cursor-pointer"
                    >
                      Secure Session (24h)
                    </label>
                  </div>

                  <Link
                    href="/auth/forget"
                    className="text-sm hover:underline leading-5 text-blue-1000 block"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {errors.submit && (
                  <div className="text-xs text-red-700">
                    {errors.submit}
                  </div>
                )}

                  <button
                   onClick={handleSubmit}
                  type="submit"
                  disabled={isLoading}
                  className="text-white cursor-pointer flex items-center gap-2 py-3 rounded-2xl w-full justify-center bg-blue-1000 hover:bg-blue-700 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed transition-all"
                >Sign In Securely
                  <img src="/images/right-arrow-white.svg" alt="" />
                </button>

                <h6 className="text-sm font-normal leading-5 mt-8 text-center text-gray-700">
                  {"Don't"} have an account?{' '}
                  <Link
                    href="/contact-admin"
                    className="text-blue-1000 font-semibold hover:text-blue-1000"
                  >
                    Admin access is invite-only
                  </Link>
                </h6>
              </form>
            </>
          )}
        </div>
      </div>

      <div className="flex items-center flex-wrap justify-center xl:gap-12 gap-4 px-4">
        <div className="flex items-center gap-1.5">
          <img src="/images/globe-icon2.svg" alt="Globe" className="w-4 h-4" />
          <h6 className="text-xs font-normal leading-4 text-gray-700">
            Your IP (192.168.1.45) is being logged for security purposes
          </h6>
        </div>
        <div className="flex items-center gap-1.5">
          <img src="/images/sheild-block.svg" alt="Shield" className="w-4 h-4" />
          <h6 className="text-xs font-normal leading-4 text-gray-700">
            256-bit SSL Encrypted
          </h6>
        </div>
      </div>

      <TwoFactorModal
        isOpen={showTwoFactorModal}
        onClose={() => setShowTwoFactorModal(false)}
      />
    </div>
  );
};

export default LoginPage;

function loginWithBiometric(arg0: () => void) {
  throw new Error('Function not implemented.');
}
