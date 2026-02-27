/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  updateFormField,
  setErrors,
  setLoading,
  setSubmitted,
  setSuccessMessage,
  resetForm,
} from '@/app/store/slices/Signupslice';
import InputField from '@/app/components/InputField';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';

const SignUpPage = () => {
  const dispatch = useAppDispatch();
  const { formData, errors, isLoading, successMessage } = useAppSelector(
    (state) => state.signup
  );

  const handleInputChange = <K extends keyof typeof formData>(
  field: K,
  value: typeof formData[K]
) => {
  dispatch(updateFormField({ field, value }));

  if (errors[field]) {
    dispatch(
      setErrors({
        ...errors,
        [field]: '',
      })
    );
  }
};



const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const newErrors: any = {};

  if (!formData.password || formData.password.length < 12) {
    newErrors.password = 'Password must be at least 12 characters';
  }

  if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = 'Passwords do not match';
  }

   if (!formData.phoneNumber) {
    newErrors.phoneNumber = 'Phone number is required';
  }
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  if (!phoneRegex.test(formData.phoneNumber.replace(/[\s\-()]/g, ''))) {
    newErrors.phoneNumber = 'Please enter a valid phone number (e.g., +92 300 1234567)';
  }
  
  if (!formData.phoneNumber) {
    newErrors.agreeToTerms = 'You must agree to the terms';
  }

  if (!formData.agreeToTerms) {
    newErrors.agreeToTerms = 'You must agree to the terms';
  }

  if (Object.keys(newErrors).length > 0) {
    dispatch(setErrors(newErrors));
    return;
  }

  dispatch(setLoading(true));

  try {
    dispatch(setSubmitted(true));
    dispatch(
      setSuccessMessage('Account activated successfully! Redirecting...')
    );

    setTimeout(() => {
      dispatch(resetForm());
    }, 2000);
  } catch (error) {
    dispatch(
      setErrors({ submit: 'Failed to create account. Please try again.' })
    );
  } finally {
    dispatch(setLoading(false));
  }
};


const isFormIncomplete = 
  !formData.password ||
  !formData.confirmPassword ||
  !formData.phoneNumber ||
  !formData.agreeToTerms;


  return (
    <div className="h-screen overflow-auto scroll-hide pb-4">
      <div className="flex md:min-h-[calc(100vh_-_40px)] min-h-[calc(100vh_-_80px)] items-center justify-center">
        <div className="max-w-[556px] px-4 w-full mx-auto">
          <div className="bg-white my-6 rounded-2xl shadow-lg md:p-8 p-4 border border-gray-100">
            <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
              <img
                src="/images/shield-icon4.svg"
                alt="Security"
                className="w-7 h-7"
              />
            </div>

            {successMessage ? (
              <div className="mt-6 text-center py-8">
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
                  Your account is now secure and ready to use.
                </p>
              </div>
            ) : (
              <form className="mt-4 w-full" onSubmit={handleSubmit}>
                <div className="w-full">
                  <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold leading-8 text-gray-900 mb-2">
                      Welcome to the Team,{' '}
                      <span className="bg-gradient-to-r from-blue-1600 to-blue-1600 bg-clip-text text-transparent">
                        Sarah Ahmed
                      </span>
                      !
                    </h4>
                    <p className="text-sm font-normal leading-5 text-gray-600">
                      {"Let's"} set up your secure account
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="text-xs uppercase mb-1.5 font-semibold leading-4 text-gray-2300 block">
                        Assigned Role
                      </label>
                      <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl py-3.5 px-4 transition-colors">
                        <div className="flex items-center gap-2.5 text-sm font-bold leading-5 text-blue-1600">
                          <img
                            src="/images/user-tick.svg"
                            alt="User"
                            className="w-5 h-5"
                          />
                          Finance Manager
                        </div>
                        <div className="text-xs font-medium leading-4 text-gray-600 px-2.5 py-1 bg-white rounded-full border border-gray-200">
                          Set by Super Admin
                        </div>
                      </div>
                    </div>

                    <InputField
                      label="Set Secure Password"
                      type="password"
                      placeholder="Minimum 12 characters"
                      ClassName='pl-5! bg-gray-2100 border border-gray-2200 rounded-xl! h-11'
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      passwordToggleIconSrc={{
                        show: '/images/eye-icon.svg',
                        hide: '/images/eye-off-icon.svg',
                      }}
                    />

                    {errors.password && (
                    <p className="text-xs font-normal leading-4 text-red-600 -mt-4 mb-4">
                      {errors.password}
                    </p>
                     )}

                    <InputField
                      label="Confirm Password"
                      type="password"
                      placeholder="Re-enter your password"
                      ClassName='pl-5! bg-gray-2100 border border-gray-2200 rounded-xl! h-11' 
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      passwordToggleIconSrc={{
                        show: '/images/eye-icon.svg',
                        hide: '/images/eye-off-icon.svg',
                      }}
                    />

                      {errors.confirmPassword && (
                    <p className="text-xs font-normal leading-4 text-red-600 -mt-4 mb-4">
                      {errors.confirmPassword}
                    </p>
                     )}
                    

                    <InputField
                      label="Phone Number (for 2FA setup)"
                      type="text"
                      ClassName='bg-gray-2100 border border-gray-2200 rounded-xl! h-11'
                      placeholder="+92 300 1234567"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      iconSrc="/images/phone-icon3.svg"
                    />
                      {errors.phoneNumber && (
                    <p className="text-xs font-normal leading-4 text-red-600 -mt-4 mb-4">
                      {errors.phoneNumber}
                    </p>
                  )}
                  </div>

                  <div className="flex items-start gap-3 my-6">
                    <input
                      type="checkbox"
                      id="secure-session"
                      name="session"
                      checked={formData.agreeToTerms}
                       onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                      className="peer mt-0.5 cursor-pointer w-4 h-4 appearance-none rounded-full border-2 border-gray-300 bg-white checked:border-blue-1600 checked:bg-blue-1600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                    />
                    <label
                      htmlFor="secure-session"
                      className="text-sm font-normal leading-5 text-gray-700 cursor-pointer flex-1"
                    >
                      I agree to the{' '}
                      <Link
                        href="/"
                        className="text-blue-1600 underline hover:text-blue-1600"
                      >
                        internal data privacy
                      </Link>{' '}
                      and{' '}
                      <Link
                        href="/"
                        className="text-blue-1600 underline hover:text-blue-1600"
                      >
                        audit policies
                      </Link>
                    </label>
                  </div>

                  {errors.agreeToTerms && (
                    <p className="text-xs font-normal leading-4 text-red-600 -mt-4 mb-4">
                      {errors.agreeToTerms}
                    </p>
                  )}

                  {errors.submit && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                      {errors.submit}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading || isFormIncomplete}
                    className="w-full cursor-pointer group text-sm font-bold leading-5 flex items-center justify-center py-3.5 gap-2 rounded-xl bg-blue-1000 text-white hover:bg-blue-1600 hover:text-white disabled:bg-gray-2100 disabled:text-gray-2300 transition-all disabled:cursor-not-allowed shadow-md hover:shadow-lg active:shadow-sm"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                      <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3332 8.66664C13.3332 12 10.9998 13.6666 8.2265 14.6333C8.08128 14.6825 7.92353 14.6802 7.77984 14.6266C4.99984 13.6666 2.6665 12 2.6665 8.66664V3.99997C2.6665 3.82316 2.73674 3.65359 2.86177 3.52857C2.98679 3.40355 3.15636 3.33331 3.33317 3.33331C4.6665 3.33331 6.33317 2.53331 7.49317 1.51997C7.63441 1.39931 7.81407 1.33301 7.99984 1.33301C8.1856 1.33301 8.36527 1.39931 8.5065 1.51997C9.67317 2.53997 11.3332 3.33331 12.6665 3.33331C12.8433 3.33331 13.0129 3.40355 13.1379 3.52857C13.2629 3.65359 13.3332 3.82316 13.3332 3.99997V8.66664Z"
                        stroke="currentColor"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                        Activate Account & Login
                      </>
                    )}
                  </button>

                  <p className="text-xs font-normal mt-6 text-center leading-4 text-gray-2300">
                    This invitation link is unique to you and expires in{' '} 24 hours.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center flex-wrap justify-center xl:gap-12 gap-4 px-4">
        <div className="flex items-center gap-2">
          <img src="/images/globe-icon2.svg" alt="Globe" className="w-4 h-4" />
          <h6 className="text-xs font-normal leading-4 text-gray-600">
            Your IP (192.168.1.45) is being logged for security purposes
          </h6>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/images/sheild-block.svg"
            alt="Shield"
            className="w-4 h-4"
          />
          <h6 className="text-xs font-normal leading-4 text-gray-600">
            256-bit SSL Encrypted
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;