
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface RecentActivityState {
  transactions: Transaction[];
  documents: DocumentItem[];
}


export interface Transaction {
  name: string;
  description: string;
  amount: string;
  time: string;
  status: "completed" | "pending" | "failed";
}

export interface DocumentItem {
  id: number;
  name: string;
  document: string;
  time: string;
  bgColor: string;
}

export interface RevenueChartItem {
  month: string;
  revenue: number;
}

export interface VerificationChartItem {
  month: string;
  thisMonth: number;
  lastMonth: number;
}


interface AnalyticsState {
  revenueChart: RevenueChartItem[];
  verificationChart: VerificationChartItem[];
}



interface DashboardState {
  searchQuery: string;
  RecentActivityState: RecentActivityState;
    analytics: AnalyticsState;
}



const initialState: DashboardState = {
  searchQuery: "",
   RecentActivityState: {
    transactions: [
      { name: "John Smith", description: "Tuition Payment", amount: "€2,450", time: "2 hours ago", status: "completed" },
      { name: "Maria Garcia", description: "Living Allowance", amount: "€1,200", time: "4 hours ago", status: "pending" },
      { name: "David Chen", description: "Book Allowance", amount: "€850", time: "6 hours ago", status: "completed" },
      { name: "Sarah Johnson", description: "Semester Fee", amount: "€3,200", time: "8 hours ago", status: "failed" },
      { name: "Ahmed Hassan", description: "Lab Fee", amount: "€500", time: "12 hours ago", status: "completed" },
    ],
    documents: [
      { id: 1, name: "Emma Wilson", document: "Bank Statement", time: "2 days ago", bgColor: "bg-red-1100" },
      { id: 2, name: "Emma Wilson", document: "Bank Statement", time: "2 days ago", bgColor: "bg-yellow-1000" },
      { id: 3, name: "Emma Wilson", document: "Bank Statement", time: "2 days ago", bgColor: "bg-white-1000" },
      { id: 4, name: "Emma Wilson", document: "Bank Statement", time: "2 days ago", bgColor: "bg-red-1100" },
      { id: 5, name: "Emma Wilson", document: "Bank Statement", time: "2 days ago", bgColor: "bg-red-1100" },
    ],
  },
   analytics: {
    revenueChart: [
      { month: "Jan", revenue: 62000 },
      { month: "Feb", revenue: 75000 },
      { month: "Mar", revenue: 78000 },
      { month: "Apr", revenue: 70000 },
      { month: "May", revenue: 90000 },
      { month: "Jun", revenue: 95000 },
      { month: "Jul", revenue: 110000 },
    ],
    verificationChart: [
      { month: "Jan", thisMonth: 120, lastMonth: 40 },
      { month: "Feb", thisMonth: 150, lastMonth: 30 },
      { month: "Mar", thisMonth: 190, lastMonth: 50 },
      { month: "Apr", thisMonth: 140, lastMonth: 20 },
      { month: "May", thisMonth: 200, lastMonth: 35 },
      { month: "Jun", thisMonth: 230, lastMonth: 30 },
      { month: "Jul", thisMonth: 260, lastMonth: 25 },
    ],
  },

  
};


const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = dashboardSlice.actions;
export default dashboardSlice.reducer;


