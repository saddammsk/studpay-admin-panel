import { useCallback } from 'react';
import {
  setLoading,
  setSuccessMessage,
  setErrors,
  setTwoFactorRequired,
} from '@/app/store/slices/Loginslice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { formData, isLoading, twoFactorCode } = useAppSelector(
    (state) => state.login
  );

  const login = useCallback(
    async (onSuccess?: () => void) => {

      dispatch(setLoading(true));

      try {
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            secureSession: formData.secureSession,
          }),
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || 'Login failed');
        }

        const data = await response.json();

        if (data.requiresTwoFactor) {
          dispatch(setTwoFactorRequired(true));
          dispatch(
            setSuccessMessage('Check your email or authenticator app for 2FA code')
          );
          return 'TWO_FACTOR_REQUIRED';
        }

        dispatch(setSuccessMessage('Login successful! Redirecting...'));

        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }

        if (formData.email) {
          localStorage.setItem('rememberedEmail', formData.email);
        }

        onSuccess?.();
        return true;
      } catch (error) {
        dispatch(
          setErrors({
            submit: error instanceof Error ? error.message : 'Failed to login',
          })
        );
        return false;
      } finally {
        dispatch(setLoading(false));
      }
    },
    [formData, dispatch]
  );

  const verifyTwoFactor = useCallback(
    async (code: string, onSuccess?: () => void) => {

      dispatch(setLoading(true));

      try {
        const response = await fetch('/api/auth/verify-2fa', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.email,
            code,
          }),
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || '2FA verification failed');
        }

        const data = await response.json();

        dispatch(setSuccessMessage('Login successful! Redirecting...'));

        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }

        onSuccess?.();
        return true;
      } catch (error) {
        dispatch(
          setErrors({
            twoFactor:
              error instanceof Error ? error.message : '2FA verification failed',
          })
        );
        return false;
      } finally {
        dispatch(setLoading(false));
      }
    },
    [formData.email, dispatch]
  );

  const loginWithBiometric = useCallback(
    async (onSuccess?: () => void) => {
      dispatch(setLoading(true));

      try {
        const response = await fetch('/api/auth/biometric-login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.email,
            biometricData: true,
          }),
        });

        if (!response.ok) {
          throw new Error('Biometric login failed');
        }

        const data = await response.json();

        dispatch(setSuccessMessage('Biometric login successful!'));

        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }

        onSuccess?.();
        return true;
      } catch (error) {
        dispatch(
          setErrors({
            biometric:
              error instanceof Error ? error.message : 'Biometric login failed',
          })
        );
        return false;
      } finally {
        dispatch(setLoading(false));
      }
    },
    [formData.email, dispatch]
  );

  return { login, verifyTwoFactor, loginWithBiometric };
};