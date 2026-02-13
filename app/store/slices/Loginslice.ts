import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoginFormData {
  email: string;
  password: string;
  secureSession: boolean;
  useBiometric: boolean;
}

export interface BiometricStatus {
  isAvailable: boolean;
  isSupported: boolean;
  error?: string;
}

export interface LoginState {
  formData: LoginFormData;
  errors: Record<string, string>;
  isLoading: boolean;
  isSubmitted: boolean;
  successMessage: string | null;
  biometricStatus: BiometricStatus;
  rememberEmail: boolean;
  twoFactorRequired: boolean;
  twoFactorCode: string;
}

const initialState: LoginState = {
  formData: {
    email: '',
    password: '',
    secureSession: true,
    useBiometric: false,
  },
  errors: {},
  isLoading: false,
  isSubmitted: false,
  successMessage: null,
  biometricStatus: {
    isAvailable: false,
    isSupported: false,
  },
  rememberEmail: false,
  twoFactorRequired: false,
  twoFactorCode: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
   updateFormField: <K extends keyof LoginFormData>(
        state: LoginState,
        action: PayloadAction<{ field: K; value: LoginFormData[K] }>
      ) => {
        state.formData[action.payload.field] = action.payload.value;
      },
    setErrors: (state, action: PayloadAction<Record<string, string>>) => {
      state.errors = action.payload;
    },
    clearErrors: (state) => {
      state.errors = {};
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSubmitted: (state, action: PayloadAction<boolean>) => {
      state.isSubmitted = action.payload;
    },
    setSuccessMessage: (state, action: PayloadAction<string | null>) => {
      state.successMessage = action.payload;
    },
    setBiometricStatus: (state, action: PayloadAction<BiometricStatus>) => {
      state.biometricStatus = action.payload;
    },
    setRememberEmail: (state, action: PayloadAction<boolean>) => {
      state.rememberEmail = action.payload;
    },
    setTwoFactorRequired: (state, action: PayloadAction<boolean>) => {
      state.twoFactorRequired = action.payload;
    },
    setTwoFactorCode: (state, action: PayloadAction<string>) => {
      state.twoFactorCode = action.payload;
    },
    resetForm: (state) => {
      state.formData = {
        ...initialState.formData,
        secureSession: true,
      };
      state.errors = {};
      state.isLoading = false;
      state.isSubmitted = false;
      state.successMessage = null;
      state.twoFactorRequired = false;
      state.twoFactorCode = '';
    },
  },
});

export const {
  updateFormField,
  setErrors,
  clearErrors,
  setLoading,
  setSubmitted,
  setSuccessMessage,
  setBiometricStatus,
  setRememberEmail,
  setTwoFactorRequired,
  setTwoFactorCode,
  resetForm,
} = loginSlice.actions;

export default loginSlice.reducer;