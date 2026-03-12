import { create } from "zustand";


export type PaymentStatus = "Verified" | "Pending" | "Rejected";
export type PlanStatus = "Premium" | "Free";

export interface UserInfo {
  info: string;
  name: string;
  mail: string;
}

export interface RouteInfo {
  arrowicon: string;
  pkimg: string;
  ausimg: string;
}

export interface Student {
  id: number;
  userid: string;
  userinfo: UserInfo;
  route: RouteInfo;
  status: PaymentStatus;
  risk: number;
  onboardingPercent: number;
  ltv: string;
  plan: PlanStatus;
  actions: string;
}

export interface Filters {
  search: string;
  country: string;
  status: string;
  score: string;
  plan: string;
  source: string;
  bulkAction: string;
}

interface UsersStudentsState {
  filters: Filters;
  pageSize: number;

  setSearch: (search: string) => void;
  setCountryFilter: (country: string) => void;
  setStatusFilter: (status: string) => void;
  setScoreFilter: (score: string) => void;
  setPlanFilter: (plan: string) => void;
  setSourceFilter: (source: string) => void;
  setBulkAction: (bulkAction: string) => void;
  setPageSize: (size: number) => void;
  resetFilters: () => void;
}


const defaultFilters: Filters = {
  search: "",
  country: "All Destinations",
  status: "All Status",
  score: "All Scores",
  plan: "All Plans",
  source: "All Sources",
  bulkAction: "Bulk Actions",
};


export const useUsersStudentsStore = create<UsersStudentsState>((set) => ({
  filters: defaultFilters,
  pageSize: 6,

  setSearch: (search) =>
    set((state) => ({ filters: { ...state.filters, search } })),

  setCountryFilter: (country) =>
    set((state) => ({ filters: { ...state.filters, country } })),

  setStatusFilter: (status) =>
    set((state) => ({ filters: { ...state.filters, status } })),

  setScoreFilter: (score) =>
    set((state) => ({ filters: { ...state.filters, score } })),

  setPlanFilter: (plan) =>
    set((state) => ({ filters: { ...state.filters, plan } })),

  setSourceFilter: (source) =>
    set((state) => ({ filters: { ...state.filters, source } })),

  setBulkAction: (bulkAction) =>
    set((state) => ({ filters: { ...state.filters, bulkAction } })),

  setPageSize: (pageSize) => set({ pageSize }),

  resetFilters: () => set({ filters: defaultFilters }),
}));