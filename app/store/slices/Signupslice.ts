import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SignupFormData {
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  agreeToTerms: boolean;
}

export interface SignupState {
  formData: SignupFormData;
  errors: Record<string, string>;
  isLoading: boolean;
  isSubmitted: boolean;
  successMessage: string | null;
}

const initialState: SignupState = {
  formData: {
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    agreeToTerms: false,
  },
  errors: {},
  isLoading: false,
  isSubmitted: false,
  successMessage: null,
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
reducers: {
 updateFormField: <K extends keyof SignupFormData>(
      state: SignupState,
      action: PayloadAction<{ field: K; value: SignupFormData[K] }>
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

  resetForm: (state) => {
    state.formData = initialState.formData;
    state.errors = {};
    state.isLoading = false;
    state.isSubmitted = false;
    state.successMessage = null;
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
  resetForm,
} = signupSlice.actions;

export default signupSlice.reducer;