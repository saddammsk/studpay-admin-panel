import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./slices/DashboardSlice";
import usersStudentsReducer from "./slices/UsersStudentsSlice";
import kycDocumentsReducer from "./slices/KYCDocuments";
import SignupReducer from "./slices/Signupslice";
import LoginReducer from "./slices/Loginslice";
import forgetPasswordReducer from "./slices/forgetPasswordSlice";
import userSearchReducer from './slices/Usersearchslice';
import UserKYCDocumentReducer from './slices/UserKYCDocumentslice';
import userTransactionReducer from './slices/userTransactionslice';


export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    usersStudents: usersStudentsReducer,
    kycDocuments: kycDocumentsReducer,
    signup: SignupReducer,
    login: LoginReducer,
    forgetPassword: forgetPasswordReducer,
    userSearch: userSearchReducer,
    userKYCDocument: UserKYCDocumentReducer,
    userTransaction: userTransactionReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
