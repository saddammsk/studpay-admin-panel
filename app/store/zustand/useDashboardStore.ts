import { create } from "zustand";

export interface CountryData {
  id: string;
  name: string;
  flag: string;
  accounts: number;
  revenue: string;
  x: number;
  y: number;
}

interface MapState {
  selectedCountry: string | null;
  timeFilter: string;
  setSelectedCountry: (id: string | null) => void;
  setTimeFilter: (value: string) => void;
  toggleCountry: (id: string) => void;
}

export const useDashboardStore = create<MapState>((set, get) => ({
  selectedCountry: null,
  timeFilter: "This Month",

  setSelectedCountry: (id) => set({ selectedCountry: id }),
  setTimeFilter: (value) => set({ timeFilter: value }),
  toggleCountry: (id) => {
    const current = get().selectedCountry;
    set({ selectedCountry: current === id ? null : id });
  },
}));