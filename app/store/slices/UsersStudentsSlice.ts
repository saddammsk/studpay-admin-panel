import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type StudentStatus =
  | "Verified"
  | "Pending"
  | "Subscribed"
  | "Not Subscribed"
  | "Under Review"
  | "Approved"
  | "Rejected";

export interface Student {
  id: number;
  name: string;
  email: string;
  country: string;
  status: StudentStatus;
  avistatus: StudentStatus;
  kycstatus: StudentStatus;
}

interface FiltersState {
  search: string;
  country: string;
  status: string;
}

interface UsersStudentsState {
  students: Student[];
  filters: FiltersState;
}

const initialStudents: Student[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@university.edu",
    country: "Country",
    status: "Verified",
    avistatus: "Subscribed",
    kycstatus: "Approved",
  },
  {
    id: 2,
    name: "Maria Garcia",
    email: "maria.garcia@uni.es",
    country: "Spain",
    status: "Pending",
    avistatus: "Not Subscribed",
    kycstatus: "Pending",
  },
  {
    id: 3,
    name: "David Chen",
    email: "david.chen@college.ca",
    country: "Canada",
    status: "Verified",
    avistatus: "Subscribed",
    kycstatus: "Approved",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    email: "sarah.j@university.uk",
    country: "UK",
    status: "Verified",
    avistatus: "Not Subscribed",
    kycstatus: "Under Review",
  },
  {
    id: 5,
    name: "Ahmed Hassan",
    email: "ahmed.hassan@uni.ae",
    country: "UAE",
    status: "Pending",
    avistatus: "Subscribed",
    kycstatus: "Rejected",
  },
  {
    id: 6,
    name: "Lisa Wang",
    email: "lisa.wang@college.au",
    country: "Australia",
    status: "Verified",
    avistatus: "Subscribed",
    kycstatus: "Approved",
  },
];

const initialState: UsersStudentsState = {
  students: initialStudents,
  filters: {
    search: "",
    country: "All Countries",
    status: "All Status",
  },
};

const usersStudentsSlice = createSlice({
  name: "usersStudents",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.filters.search = action.payload;
    },
    setCountryFilter(state, action: PayloadAction<string>) {
      state.filters.country = action.payload;
    },
    setStatusFilter(state, action: PayloadAction<string>) {
      state.filters.status = action.payload;
    },
    resetFilters(state) {
      state.filters = initialState.filters;
    },
    setStudents(state, action: PayloadAction<Student[]>) {
      state.students = action.payload;
    },
  },
});

export const {
  setSearch,
  setCountryFilter,
  setStatusFilter,
  resetFilters,
  setStudents,
} = usersStudentsSlice.actions;

export default usersStudentsSlice.reducer;

