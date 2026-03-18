import { create } from "zustand";

export type PolicyType = "Health" | "Travel" | "Liability";
export type PolicyStatus = "Active" | "Pending" | "Expired" | "Cancelled";

export type Policy = {
  id: string;
  student: string;
  type: PolicyType;
  provider: string;
  startDate: string;
  endDate: string;
  status: PolicyStatus;
  source: string;
};

const initialPolicies: Policy[] = [
  {
    id: "POL-2024-001",
    student: "Emma Thompson",
    type: "Health",
    provider: "Allianz",
    startDate: "Jan 15, 2024",
    endDate: "Jan 14, 2025",
    status: "Active",
    source: "University of Munich",
  },
  {
    id: "POL-2024-002",
    student: "Emma Thompson",
    type: "Travel",
    provider: "AXA",
    startDate: "Feb 01, 2024",
    endDate: "Aug 01, 2024",
    status: "Active",
    source: "Direct Signup",
  },
  {
    id: "POL-2024-003",
    student: "Emma Thompson",
    type: "Liability",
    provider: "HanseMerkur",
    startDate: "Jan 20, 2024",
    endDate: "Jan 19, 2025",
    status: "Pending",
    source: "TU Berlin Referral",
  },
  {
    id: "POL-2024-004",
    student: "Emma Thompson",
    type: "Health",
    provider: "TK",
    startDate: "Sep 01, 2023",
    endDate: "Feb 28, 2024",
    status: "Expired",
    source: "University of Heidelberg",
  },
];

type Filters = {
  search: string;
  provider: string;
};

type InsuranceStore = {
  policies: Policy[];
  filters: Filters;
  setSearch: (search: string) => void;
  setProviderFilter: (provider: string) => void;
  resetFilters: () => void;
  filteredPolicies: () => Policy[];
  getPolicyById: (id: string) => Policy | null;
  addPolicy: (policy: Policy) => void;
};

export const useInsuranceHubStore = create<InsuranceStore>((set, get) => ({
  policies: initialPolicies,
  filters: {
    search: "",
    provider: "",
  },

  setSearch: (search) =>
    set((state) => ({ filters: { ...state.filters, search } })),

  setProviderFilter: (provider) =>
    set((state) => ({ filters: { ...state.filters, provider } })),

  resetFilters: () =>
    set({ filters: { search: "", provider: "" } }),

  filteredPolicies: () => {
    const { policies, filters } = get();
    return policies.filter((p) => {
      const matchesSearch =
        !filters.search ||
        p.id.toLowerCase().includes(filters.search.toLowerCase()) ||
        p.student.toLowerCase().includes(filters.search.toLowerCase());
      const matchesProvider =
        !filters.provider ||
        filters.provider === "All Providers" ||
        p.provider === filters.provider;
      return matchesSearch && matchesProvider;
    });
  },

  getPolicyById: (id) => {
    return get().policies.find((p) => p.id === id) ?? null;
  },

  addPolicy: (policy) =>
    set((state) => ({ policies: [policy, ...state.policies] })),
}));