/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import InputField from '@/app/components/InputField';
import Button from '@/app/components/ui/Button';
import {
  setEmail,
  setCode,
  setPassword,
  setConfirmPassword,
  setStep,
  setLoading,
  setError,
  resetForm,
} from '@/app/store/slices/forgetPasswordSlice';
import { AppDispatch, RootState } from '@/app/store/store';

export const validateEmail = (email: string): string | null => {
  if (!email.trim()) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Invalid email';
  return null;
};

export const validateCode = (code: string): string | null => {
  if (!code.trim()) return 'Code is required';
  if (code.length !== 6) return 'Code must be 6 digits';
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) return 'Password is required';
  if (password.length < 8) return 'Password must be 8+ characters';
  return null;
};

export const validateMatch = (pwd: string, confirm: string): string | null => {
  if (pwd !== confirm) return 'Passwords do not match';
  return null;
};


const ForgetPasswordPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { step, email, code, password, confirmPassword, loading, error } =
    useSelector((state: RootState) => state.forgetPassword);

  const handleSendCode = async () => {
    const err = validateEmail(email);
    if (err) {
      dispatch(setError(err));
      return;
    }

    dispatch(setLoading(true));
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(setError(null));
      dispatch(setStep(2));
    } catch {
      dispatch(setError('Failed to send code'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleVerifyCode = async () => {
    const err = validateCode(code);
    if (err) {
      dispatch(setError(err));
      return;
    }

    dispatch(setLoading(true));
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(setError(null));
      dispatch(setStep(3));
    } catch {
      dispatch(setError('Invalid code'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleResetPassword = async () => {
    const err = validatePassword(password);
    if (err) {
      dispatch(setError(err));
      return;
    }

    const matchErr = validateMatch(password, confirmPassword);
    if (matchErr) {
      dispatch(setError(matchErr));
      return;
    }

    dispatch(setLoading(true));
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(setError(null));
      dispatch(setStep(4));
    } catch {
      dispatch(setError('Failed to reset password'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleBack = () => {
    if (step > 1) dispatch(setStep((step - 1) as 1 | 2 | 3 | 4));
    dispatch(setError(null));
  };

  return (
    <div className="h-screen overflow-auto scroll-hide pb-4">
      <div className="flex md:min-h-[calc(100vh-40px)] min-h-[calc(100vh-80px)] items-center justify-center">
        <div className="max-w-md px-4 w-full mx-auto">
          <div className="text-center">
            <img src="/images/logo-2.svg" className="inline-block" alt="" />
            <p className="text-base font-normal leading-6 text-gray-1900">
              Admin Portal
            </p>
          </div>

          {/* Card */}
          <div className="bg-white my-6 rounded-2xl shadow-7xl p-8">
            <ul className="flex items-center justify-center gap-2 mb-8">
              {[1, 2, 3, 4].map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <li
                    className={`w-2 h-2 rounded-full ${
                      s <= step ? 'bg-blue-1500' : 'bg-gray-2000'
                    }`}
                  ></li>
                  {i < 3 && (
                    <li
                      className={`w-8 h-0.5 rounded-full ${
                        s < step ? 'bg-blue-1500' : 'bg-gray-2000'
                      }`}
                    ></li>
                  )}
                </div>
              ))}
            </ul>

            {/* Form */}
            <form className="mt-8">
              {/* Step 1: Email */}
              {step === 1 && (
                <div>
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-medium text-black-1300 mb-2">
                      Reset your password
                    </h4>
                    <p className="text-sm text-gray-1200">
                      Enter your email address
                    </p>
                  </div>
                  <div className="mb-5">
                    <InputField
                      label="Email address"
                      ClassName="bg-white rounded-lg! h-12"
                      type="email"
                      placeholder="you@company.com"
                      iconSrc="/images/msg-icon.svg"
                      value={email}
                      onChange={(e: any) => dispatch(setEmail(e.target.value))}
                    />
                      {error && (
                      <p className="text-xs text-red-600 mt-0.5">{error}</p>
                      )}
                  </div>
                
                  <Button
                    label={loading ? 'Sending...' : 'Send code'}
                    className="text-white w-full justify-center bg-blue-1500"
                    onClick={handleSendCode}
                    disabled={loading}
                  />
                </div>
              )}

              {/* Step 2: Code */}
              {step === 2 && (
                <div>
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-medium text-black-1300 mb-2">
                      Verify code
                    </h4>
                    <p className="text-sm text-gray-1200">
                      Enter the 6-digit code sent to {email}
                    </p>
                  </div>
                  <div className="mb-5">
                    <InputField
                      label="Verification Code"
                      ClassName="bg-white rounded-lg! h-12 pl-5!"
                      type="text"
                      placeholder="000000"
                      value={code}
                      onChange={(e: any) => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, 6);
                        dispatch(setCode(val));
                      }}
                    />
                      {error && (
                      <p className="text-xs text-red-600 mt-0.5">{error}</p>
                      )}
                  </div>
               
                  <Button
                    label={loading ? 'Verifying...' : 'Next'}
                    className="text-white w-full justify-center bg-blue-1500"
                    onClick={handleVerifyCode}
                    disabled={loading}
                  />
                </div>
              )}

              {/* Step 3: Password */}
              {step === 3 && (
                <div>
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-medium text-black-1300 mb-2">
                      Create new password
                    </h4>
                    <p className="text-sm text-gray-1200">
                      Minimum 8 characters
                    </p>
                  </div>
                  <div className="mb-5">
                    <InputField
                      label="New Password"
                      ClassName="bg-white rounded-lg! h-12 pl-5!"
                      type="text"
                      placeholder="usman@@xxx"
                      value={password}
                      onChange={(e: any) =>
                        dispatch(setPassword(e.target.value))
                      }
                    />
                  </div>
                  <div className="mb-5">
                    <InputField
                      label="Confirm Password"
                      ClassName="bg-white rounded-lg! h-12 pl-5!" 
                      type="text"
                      placeholder="usman@@xxx"
                      value={confirmPassword}
                      onChange={(e: any) =>
                        dispatch(setConfirmPassword(e.target.value))
                      }
                    />
                    {error && (
                      <p className="text-xs text-red-600 mt-0.5">{error}</p>
                      )}
                  </div>
             
                  <Button
                    label={loading ? 'Resetting...' : 'Reset'}
                    className="text-white w-full justify-center bg-blue-1500"
                    onClick={handleResetPassword}
                    disabled={loading}
                  />
                </div>
              )}

              {/* Step 4: Success */}
              {step === 4 && (
                <div className="text-center">
                  <img
                    src="/images/star-img.svg"
                    className="mb-7 inline-block"
                    alt=""
                  />
                  <h4 className="text-[30px] font-medium text-blue-1300 mb-7">
                    {"You're"} all set!
                  </h4>
                  <p className="text-sm text-gray-1900 mb-7">
                    Your password has been reset.
                  </p>
                  <Link href="/auth/login">
                    <Button
                      label="Go to Login"
                      className="text-white w-full justify-center bg-blue-1000"
                    />
                  </Link>
                </div>
              )}

              {step < 4 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-sm text-gray-1900 flex items-center justify-center gap-2 w-full mt-6"
                >
                  <img src="/images/left-arrow4.svg" alt="" /> Back
                </button>
              )}
            </form>
          </div>

          <div className="bg-white rounded-lg flex items-center mb-6 justify-center py-3.75 gap-3 text-xs text-gray-1200">
            <img src="/images/shield-blue.svg" alt="" />
            256-bit SSL encrypted
          </div>

          <h6 className="text-sm text-center text-gray-1900">
            Need help?{' '}
            <Link href="/support" className="text-blue-1400">
              Contact support
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;