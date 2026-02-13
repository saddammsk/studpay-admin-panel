import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./slices/DashboardSlice";
import usersStudentsReducer from "./slices/UsersStudentsSlice";
import kycDocumentsReducer from "./slices/KYCDocuments";
import SignupReducer from "./slices/Signupslice";
import LoginReducer from "./slices/Loginslice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    usersStudents: usersStudentsReducer,
    kycDocuments: kycDocumentsReducer,
    signup: SignupReducer,
    login: LoginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
