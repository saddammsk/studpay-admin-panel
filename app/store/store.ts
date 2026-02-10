import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./slices/DashboardSlice";
import usersStudentsReducer from "./slices/UsersStudentsSlice";
import kycDocumentsReducer from "./slices/KYCDocuments";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    usersStudents: usersStudentsReducer,
    kycDocuments: kycDocumentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
