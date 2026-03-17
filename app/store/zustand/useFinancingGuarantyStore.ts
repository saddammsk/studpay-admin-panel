import { create } from "zustand";


export type GuarantyStatus = "Active" | "Pending" | "Expired" | "Claimed";
export type GuarantyType = "Financial" | "Rental";
export type ModalType = "claim" | "verify" | "document" | null;

export interface Guarantee {
  id: string;
  studentName: string;
  guarantorName: string;
  type: GuarantyType;
  university: string;
  country: string;
  amount: number;
  status: GuarantyStatus;
  startDate: string;
  endDate: string;
}

interface Filters {
  search: string;
  guarantyType: string;
  universityCountry: string;
  status: string;
}


interface FinancingGuarantyState {
  // Data
  guarantees: Guarantee[];

  // Filters
  filters: Filters;
  setFilter: (key: keyof Filters, value: string) => void;
  resetFilters: () => void;
  filteredGuarantees: () => Guarantee[];

  // Table UI
  openRow: string | null;
  toggleRow: (id: string) => void;
  setOpenRow: (id: string | null) => void;

  // Modals
  activeModal: ModalType;
  selectedGuarantee: Guarantee | null;
  openModal: (type: ModalType, guarantee: Guarantee) => void;
  closeModal: () => void;
}


const defaultFilters: Filters = {
  search: "",
  guarantyType: "Guaranty Type",
  universityCountry: "University/Country",
  status: "Status",
};

const mockData: Guarantee[] = [
  { id: "GR-001", studentName: "Alice Martin",    guarantorName: "John Martin",    type: "Financial", university: "TU Berlin", country: "Germany",     amount: 12000, status: "Active",  startDate: "2024-01-10", endDate: "2025-01-10" },
  { id: "GR-002", studentName: "Omar Hassan",     guarantorName: "Fatima Hassan",  type: "Rental",    university: "Sorbonne",  country: "France",      amount: 8500,  status: "Pending", startDate: "2024-03-01", endDate: "2025-03-01" },
  { id: "GR-003", studentName: "Elena Rossi",     guarantorName: "Marco Rossi",    type: "Financial", university: "Bocconi",   country: "Italy",       amount: 15000, status: "Active",  startDate: "2023-09-01", endDate: "2024-09-01" },
  { id: "GR-004", studentName: "Liam O'Brien",    guarantorName: "Sean O'Brien",   type: "Rental",    university: "UCL",       country: "UK",          amount: 11000, status: "Expired", startDate: "2022-09-01", endDate: "2023-09-01" },
  { id: "GR-005", studentName: "Sofia Müller",    guarantorName: "Klaus Müller",   type: "Financial", university: "LMU Munich",country: "Germany",     amount: 9800,  status: "Claimed", startDate: "2023-06-01", endDate: "2024-06-01" },
  { id: "GR-006", studentName: "Yuki Tanaka",     guarantorName: "Hiro Tanaka",    type: "Financial", university: "TU Delft",  country: "Netherlands", amount: 13500, status: "Active",  startDate: "2024-02-15", endDate: "2025-02-15" },
  { id: "GR-007", studentName: "Amara Diallo",    guarantorName: "Kofi Diallo",    type: "Rental",    university: "Sorbonne",  country: "France",      amount: 7200,  status: "Pending", startDate: "2024-04-01", endDate: "2025-04-01" },
];


export const useFinancingGuarantyStore = create<FinancingGuarantyState>()(
  (set, get) => ({
    guarantees: mockData,

    filters: defaultFilters,

    setFilter: (key, value) =>
      set((state) => ({ filters: { ...state.filters, [key]: value } })),

    resetFilters: () => set({ filters: defaultFilters }),

    filteredGuarantees: () => {
      const { guarantees, filters } = get();
      return guarantees.filter((g) => {
        const searchLower = filters.search.toLowerCase();

        const matchesSearch =
          !filters.search ||
          g.id.toLowerCase().includes(searchLower) ||
          g.studentName.toLowerCase().includes(searchLower) ||
          g.guarantorName.toLowerCase().includes(searchLower);

        const matchesType =
          filters.guarantyType === "Guaranty Type" ||
          g.type === filters.guarantyType;

        const matchesUniversity =
          filters.universityCountry === "University/Country" ||
          g.university.includes(filters.universityCountry) ||
          g.country.includes(filters.universityCountry);

        const matchesStatus =
          filters.status === "Status" || g.status === filters.status;

        return matchesSearch && matchesType && matchesUniversity && matchesStatus;
      });
    },

    openRow: null,

    toggleRow: (id) =>
      set((state) => ({ openRow: state.openRow === id ? null : id })),

    setOpenRow: (id) => set({ openRow: id }),

    activeModal: null,
    selectedGuarantee: null,

    openModal: (type, guarantee) =>
      set({ activeModal: type, selectedGuarantee: guarantee, openRow: null }),

    closeModal: () =>
      set({ activeModal: null, selectedGuarantee: null }),
  })
);