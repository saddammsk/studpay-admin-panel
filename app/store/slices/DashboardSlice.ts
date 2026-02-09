import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DashboardState {
  searchQuery: string;
}

const initialState: DashboardState = {
  searchQuery: "",
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


