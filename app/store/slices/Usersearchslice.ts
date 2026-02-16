import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/public/Dummydata';

interface SearchFilters {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  dateOfBirth: string;
}

interface UserSearchState {
  filters: SearchFilters;
  results: User[];
  loading: boolean;
  hasSearched: boolean;
  currentPage: number;
  itemsPerPage: number;
}

const initialState: UserSearchState = {
  filters: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    dateOfBirth: '',
  },
  results: [],
  loading: false,
  hasSearched: false,
  currentPage: 1,
  itemsPerPage: 6,
};

const userSearchSlice = createSlice({
  name: 'userSearch',
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.filters.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.filters.lastName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.filters.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.filters.phone = action.payload;
    },
    setCountry: (state, action: PayloadAction<string>) => {
      state.filters.country = action.payload;
    },
    setDateOfBirth: (state, action: PayloadAction<string>) => {
      state.filters.dateOfBirth = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setResults: (state, action: PayloadAction<User[]>) => {
      state.results = action.payload;
      state.hasSearched = true;
    },
    resetSearch: () => initialState,
    clearResults: (state) => {
      state.results = [];
      state.hasSearched = false;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setCountry,
  setDateOfBirth,
  setLoading,
  setResults,
  resetSearch,
  clearResults,
  setCurrentPage,
} = userSearchSlice.actions;

export default userSearchSlice.reducer;