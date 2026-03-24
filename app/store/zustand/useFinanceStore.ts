import { create } from "zustand";
import { devtools } from "zustand/middleware";


export type Status = "excellent" | "good" | "average" | "poor";
export type SortDir = "asc" | "desc";
export type CountryVariant = "green" | "amber" | "gray";

export interface CashFlowRow {
  month: string;
  inflow: number;
  outflow: number;
  forecast?: boolean;
}

export interface DonutRow {
  name: string;
  value: number;
  color: string;
}

export interface UniversityRow {
  university: string;
  country: string;
  students: number;
  ltv: number;
  cac: number;
  ratio: string;
  churn: string;
  revenue: string;
  revenueNum: number;
  status: Status;
}

export interface FinanceStore {
  forecastEnabled: boolean;
  tableSearch: string;
  tableStatusFilter: string;
  tableSortKey: keyof UniversityRow;
  tableSortDir: SortDir;
  tablePage: number;
  activeNav: string;
  exportModalOpen: boolean;
  selectedDate: string;

  setForecast: (v: boolean) => void;
  setTableSearch: (v: string) => void;
  setTableStatusFilter: (v: string) => void;
  setTableSort: (key: keyof UniversityRow) => void;
  setTablePage: (p: number) => void;
  setActiveNav: (v: string) => void;
  setExportModalOpen: (v: boolean) => void;
  setSelectedDate: (v: string) => void;
}


export const useFinanceStore = create<FinanceStore>()(
  devtools(
    (set, get) => ({
      forecastEnabled: false,
      tableSearch: "",
      tableStatusFilter: "all",
      tableSortKey: "revenueNum",
      tableSortDir: "desc",
      tablePage: 1,
      activeNav: "Analytics",
      exportModalOpen: false,
      selectedDate: "",

      setForecast: (v) =>
        set({ forecastEnabled: v }, false, "setForecast"),

      setTableSearch: (v) =>
        set({ tableSearch: v, tablePage: 1 }, false, "setTableSearch"),

      setTableStatusFilter: (v) =>
        set({ tableStatusFilter: v, tablePage: 1 }, false, "setTableStatusFilter"),

      setTableSort: (key) => {
        const { tableSortKey, tableSortDir } = get();
        if (tableSortKey === key) {
          set(
            { tableSortDir: tableSortDir === "asc" ? "desc" : "asc", tablePage: 1 },
            false,
            "toggleSortDir"
          );
        } else {
          set(
            { tableSortKey: key, tableSortDir: "desc", tablePage: 1 },
            false,
            "setTableSort"
          );
        }
      },

      setTablePage: (p) => set({ tablePage: p }, false, "setTablePage"),

      setActiveNav: (v) => set({ activeNav: v }, false, "setActiveNav"),

      setExportModalOpen: (v) =>
        set({ exportModalOpen: v }, false, "setExportModalOpen"),

      setSelectedDate: (v) =>
        set({ selectedDate: v }, false, "setSelectedDate"),
    }),
    { name: "FinanceStore" }
  )
);