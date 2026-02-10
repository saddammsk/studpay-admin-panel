import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type DocumentsStatus =
  | "Pending"
  | "Verified"
  | "Rejected";



interface Documents {
    id: number;
    name: string;
    email: string;
    document: string;
    date: string;
    status: DocumentsStatus;

}

interface FiltersState {
    search: string;
    status: string;
  }

interface DocumentsState {
    payments: Documents[];
    filters: FiltersState;
  }



  const payments: Documents[] = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@university.edu",
      document: "Passport",
      date: "Jan 15, 2024",
      status: "Pending"
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.garcia@uni.es",
      document: "Student Visa",
      date: "Jan 14, 2024",
      status: "Verified",
    },
    {
      id: 3,
      name: "David Chen",
      email: "david.chen@college.ca",
      document: "University ID",
      date: "Jan 13, 2024",
      status: "Pending",
    
    },
    {
      id: 4,
      name: "Sarah Johnson",
      email: "sarah.j@university.uk",
      document: "Passport",
      date: "Jan 12, 2024",
      status: "Rejected",
    
    },
    {
      id: 5,
      name: "Ahmed Hassan",
      email: "ahmed.hassan@uni.ae",
      document: "Student Visa",
      date: "Jan 11, 2024",
      status: "Pending",

    },
    {
      id: 6,
      name: "Lisa Wang",
      email: "lisa.wang@college.au",
      document: "Bank Statement",
      date: "Jan 10, 2024",
      status: "Verified",
      
    },
  ];

  
const initialState: DocumentsState = {
    payments: payments,
    filters: {
      search: "",
      status: "All Status",
    },
  };

  
  const KYCDocumentsSlice = createSlice({
    name: "payments",
    initialState,
    reducers: {
        setSearch(state, action: PayloadAction<string>){
            state.filters.search = action.payload
        },
        setStatusFilter(state, action: PayloadAction<string>) {
            state.filters.status = action.payload;
          },
          resetFilters(state) {
            state.filters = initialState.filters;
          },
          setPayments(state, action: PayloadAction<Documents[]>) {
            state.payments = action.payload;
          },

    }
  })


  export const {
    setSearch,
    setStatusFilter,
    resetFilters,
    setPayments
  } = KYCDocumentsSlice.actions

  export default KYCDocumentsSlice.reducer