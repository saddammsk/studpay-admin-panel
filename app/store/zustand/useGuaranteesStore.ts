import { create } from "zustand";

export type RiskLevel = "Low" | "Medium" | "High";
export type StudentStatus = "Approved" | "Pending" | "Under Review";
export type StudentType = "Rental" | "Financial";

export interface Student {
  id: string;
  name: string;
  email: string;
  type: StudentType;
  coverage: string;
  risk: RiskLevel;
  status: StudentStatus;
  source: string;
  flagged?: boolean;
}

export interface StudentFilters {
  search: string;
  type: string;
  risk: string;
  source: string;
}

const initialStudents: Student[] = [
  { id: "STU-2024-001", name: "Anna Müller",       email: "anna.mueller@stud.tu-munich.de",  type: "Rental",    coverage: "3.500 €", risk: "Low",    status: "Approved",     source: "TU Munich"           },
  { id: "STU-2024-002", name: "Marco Rossi",        email: "m.rossi@student.hu-berlin.de",    type: "Financial", coverage: "5.000 €", risk: "Medium", status: "Under Review", source: "Humboldt University",  flagged: true },
  { id: "STU-2024-003", name: "Sophie Laurent",     email: "s.laurent@rwth-aachen.de",        type: "Rental",    coverage: "4.200 €", risk: "Low",    status: "Approved",     source: "RWTH Aachen"         },
  { id: "STU-2024-004", name: "Erik Johansson",     email: "erik.j@direct.studpay.com",       type: "Financial", coverage: "8.000 €", risk: "High",   status: "Pending",      source: "Direct Application",  flagged: true },
  { id: "STU-2024-005", name: "Lena Fischer",       email: "l.fischer@uni-hamburg.de",        type: "Rental",    coverage: "2.800 €", risk: "Low",    status: "Approved",     source: "Uni Hamburg"         },
  { id: "STU-2024-006", name: "Carlos Mendez",      email: "c.mendez@fau.de",                 type: "Financial", coverage: "6.500 €", risk: "High",   status: "Under Review", source: "FAU Erlangen",         flagged: true },
  { id: "STU-2024-007", name: "Yuki Tanaka",        email: "y.tanaka@kit.edu",                type: "Rental",    coverage: "3.900 €", risk: "Low",    status: "Approved",     source: "KIT Karlsruhe"       },
  { id: "STU-2024-008", name: "Priya Sharma",       email: "p.sharma@tum.de",                 type: "Financial", coverage: "4.700 €", risk: "Medium", status: "Pending",      source: "TU Munich"           },
  { id: "STU-2024-009", name: "Ahmed El-Sayed",     email: "a.elsayed@uni-frankfurt.de",      type: "Rental",    coverage: "3.100 €", risk: "Low",    status: "Approved",     source: "Uni Frankfurt"       },
  { id: "STU-2024-010", name: "Klara Novak",        email: "k.novak@fu-berlin.de",            type: "Financial", coverage: "5.500 €", risk: "Medium", status: "Under Review", source: "FU Berlin"           },
  { id: "STU-2024-011", name: "James O'Brien",      email: "j.obrien@direct.studpay.com",     type: "Rental",    coverage: "7.200 €", risk: "High",   status: "Pending",      source: "Direct Application",  flagged: true },
  { id: "STU-2024-012", name: "Fatima Al-Hassan",   email: "f.alhassan@uni-koeln.de",         type: "Financial", coverage: "4.000 €", risk: "Low",    status: "Approved",     source: "Uni Köln"            },
];

const defaultFilters = (): StudentFilters => ({ search: "", type: "", risk: "", source: "" });

interface StudentsState {
  students: Student[];
  filters: StudentFilters;
  page: number;
  pageSize: number;

  setSearch: (q: string) => void;
  setTypeFilter: (v: string) => void;
  setRiskFilter: (v: string) => void;
  setSourceFilter: (v: string) => void;
  resetFilters: () => void;
  setPage: (p: number) => void;

  filteredStudents: () => Student[];
  paginatedStudents: () => Student[];
  totalPages: () => number;
}

export const useGuaranteesStore = create<StudentsState>()((set, get) => ({
  students: initialStudents,
  filters: defaultFilters(),
  page: 1,
  pageSize: 8,

  setSearch:       (q) => set((s) => ({ filters: { ...s.filters, search: q  }, page: 1 })),
  setTypeFilter:   (v) => set((s) => ({ filters: { ...s.filters, type:   v  }, page: 1 })),
  setRiskFilter:   (v) => set((s) => ({ filters: { ...s.filters, risk:   v  }, page: 1 })),
  setSourceFilter: (v) => set((s) => ({ filters: { ...s.filters, source: v  }, page: 1 })),
  resetFilters:    ()  => set({ filters: defaultFilters(), page: 1 }),
  setPage:         (p) => set({ page: p }),

  filteredStudents: () => {
    const { students, filters } = get();
    return students.filter((s) => {
      if (filters.type   && s.type   !== filters.type)   return false;
      if (filters.risk   && s.risk   !== filters.risk)   return false;
      if (filters.source && s.source !== filters.source) return false;
      if (filters.search) {
        const q = filters.search.toLowerCase();
        if (
          !s.name.toLowerCase().includes(q) &&
          !s.email.toLowerCase().includes(q) &&
          !s.id.toLowerCase().includes(q)
        ) return false;
      }
      return true;
    });
  },

  paginatedStudents: () => {
    const { page, pageSize } = get();
    const all = get().filteredStudents();
    return all.slice((page - 1) * pageSize, page * pageSize);
  },

  totalPages: () =>
    Math.max(1, Math.ceil(get().filteredStudents().length / get().pageSize)),
}));