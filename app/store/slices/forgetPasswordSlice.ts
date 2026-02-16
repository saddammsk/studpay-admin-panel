import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ForgetPasswordState {
  step: 1 | 2 | 3 | 4;
  email: string;
  code: string;
  password: string;
  confirmPassword: string;
  loading: boolean;
  error: string | null;
}

const initialState: ForgetPasswordState = {
  step: 1,
  email: '',
  code: '',
  password: '',
  confirmPassword: '',
  loading: false,
  error: null,
};

const forgetPasswordSlice = createSlice({
  name: 'forgetPassword',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirmPassword = action.payload;
    },
    setStep: (state, action: PayloadAction<1 | 2 | 3 | 4>) => {
      state.step = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const {
  setEmail,
  setCode,
  setPassword,
  setConfirmPassword,
  setStep,
  setLoading,
  setError,
  resetForm,
} = forgetPasswordSlice.actions;

export default forgetPasswordSlice.reducer;