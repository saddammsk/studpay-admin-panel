import { create } from "zustand";

export type PaymentStatus = "Active" | "Pending" | "Frozen";
export type RiskStatus = "Low" | "Medium" | "High";

export interface Payment {
  id: number;
  userid: string;
  student: { name: string; email: string };
  currency: { flag: string; name: string };
  balance: string;
  available: string;
  hold: string;
  status: PaymentStatus;
  risk: RiskStatus;
  reconciliation: string;
}

interface Filters {
  search: string;
  currency: string;
  status: string;
  risk: string;
}

type SortKey = keyof Payment | null;
type SortDir = "asc" | "desc";

interface MasterAccountsState {
  payments: Payment[];
  filters: Filters;
  sortKey: SortKey;
  sortDir: SortDir;
  page: number;
  pageSize: number;
  setFilter: (key: keyof Filters, value: string) => void;
  resetFilters: () => void;
  setSort: (key: SortKey) => void;
  setPage: (page: number) => void;
  filteredSorted: () => Payment[];
  paginated: () => Payment[];
  totalPages: () => number;
}

const defaultFilters: Filters = {
  search: "",
  currency: "All Countries",
  status: "All Status",
  risk: "All Risk",
};

const mockPayments: Payment[] = [
  { id: 1, userid: "USR-2024-78542", student: { name: "Mohammed Ahmed Khan", email: "m.ahmed@student.edu.pk" }, currency: { flag: "/icons/eur-icon.svg", name: "EUR" }, balance: "€12,450.75", available: "€11,250.75", hold: "€1,200.00", status: "Active",  risk: "Low",    reconciliation: "2024-01-15 09:30" },
  { id: 2, userid: "USR-2024-78541", student: { name: "Sarah Johnson",        email: "s.johnson@uni.edu"       }, currency: { flag: "/icons/usd.svg",      name: "USD" }, balance: "$8,325.50",  available: "$8,325.50",  hold: "—",          status: "Active",  risk: "Low",    reconciliation: "2024-01-15 08:45" },
  { id: 3, userid: "USR-2024-78540", student: { name: "Li Wei Chen",          email: "l.chen@student.cn"       }, currency: { flag: "/icons/eur-icon.svg", name: "EUR" }, balance: "€45,200.00", available: "€35,200.00", hold: "€10,000.00", status: "Frozen",  risk: "High",   reconciliation: "2024-01-14 16:20" },
  { id: 4, userid: "USR-2024-78539", student: { name: "Emma Müller",          email: "e.muller@stud.de"        }, currency: { flag: "/icons/eur-icon.svg", name: "EUR" }, balance: "€3,450.25",  available: "€3,450.25",  hold: "—",          status: "Active",  risk: "Low",    reconciliation: "2024-01-15 10:15" },
  { id: 5, userid: "USR-2024-78538", student: { name: "Ahmed Al-Rashid",      email: "a.rashid@edu.ae"         }, currency: { flag: "/icons/usd.svg",      name: "USD" }, balance: "$28,750.00", available: "$23,750.00", hold: "$5,000.00",  status: "Pending", risk: "Medium", reconciliation: "2024-01-13 14:00" },
  { id: 6, userid: "USR-2024-78537", student: { name: "Maria Garcia",         email: "m.garcia@uni.es"         }, currency: { flag: "/icons/eur-icon.svg", name: "EUR" }, balance: "€6,780.90",  available: "€6,780.90",  hold: "—",          status: "Active",  risk: "Low",    reconciliation: "2024-01-15 07:30" },
  { id: 7, userid: "USR-2024-78536", student: { name: "James O'Connor",       email: "j.oconnor@student.ie"   }, currency: { flag: "/icons/eur-icon.svg", name: "EUR" }, balance: "€15,420.00", available: "€12,420.00", hold: "€3,000.00",  status: "Active",  risk: "Medium", reconciliation: "2024-01-14 11:45" },
  { id: 8, userid: "USR-2024-78535", student: { name: "Fatima Hassan",        email: "f.hassan@uni.eg"         }, currency: { flag: "/icons/usd.svg",      name: "USD" }, balance: "$9,200.50",  available: "$9,200.50",  hold: "—",          status: "Frozen",  risk: "High",   reconciliation: "2024-01-12 09:00" },
  { id: 9, userid: "USR-2024-78534", student: { name: "Yuki Tanaka",          email: "y.tanaka@student.jp"     }, currency: { flag: "/icons/eur-icon.svg", name: "EUR" }, balance: "€9,800.00",  available: "€9,800.00",  hold: "—",          status: "Active",  risk: "Low",    reconciliation: "2024-01-15 11:00" },
  { id: 10, userid: "USR-2024-78533", student: { name: "Amara Diallo",        email: "a.diallo@uni.sn"         }, currency: { flag: "/icons/usd.svg",      name: "USD" }, balance: "$14,200.00", available: "$10,200.00", hold: "$4,000.00",  status: "Pending", risk: "High",   reconciliation: "2024-01-11 15:30" },
  { id: 11, userid: "USR-2024-78532", student: { name: "Lucas Bernard",       email: "l.bernard@uni.fr"        }, currency: { flag: "/icons/eur-icon.svg", name: "EUR" }, balance: "€7,600.00",  available: "€7,600.00",  hold: "—",          status: "Active",  risk: "Low",    reconciliation: "2024-01-15 06:15" },
  { id: 12, userid: "USR-2024-78531", student: { name: "Ingrid Larsen",       email: "i.larsen@uni.no"         }, currency: { flag: "/icons/usd.svg",      name: "USD" }, balance: "$5,400.00",  available: "$5,400.00",  hold: "—",          status: "Active",  risk: "Medium", reconciliation: "2024-01-14 13:00" },
];

export const useMasterAccountsStore = create<MasterAccountsState>()((set, get) => ({
  payments: mockPayments,
  filters: defaultFilters,
  sortKey: null,
  sortDir: "asc",
  page: 1,
  pageSize: 8,

  setFilter: (key, value) =>
    set((state) => ({ filters: { ...state.filters, [key]: value }, page: 1 })),

  resetFilters: () => set({ filters: defaultFilters, page: 1 }),

  setSort: (key) =>
    set((state) => ({
      sortKey: key,
      sortDir: state.sortKey === key && state.sortDir === "asc" ? "desc" : "asc",
    })),

  setPage: (page) => set({ page }),

  filteredSorted: () => {
    const { payments, filters, sortKey, sortDir } = get();
    let result = payments.filter((p) => {
      const q = filters.search.toLowerCase();
      const matchSearch =
        !filters.search ||
        p.userid.toLowerCase().includes(q) ||
        p.student.name.toLowerCase().includes(q) ||
        p.student.email.toLowerCase().includes(q);
      const matchCurrency =
        filters.currency === "All Countries" || p.currency.name === filters.currency;
      const matchStatus =
        filters.status === "All Status" || p.status === filters.status;
      const matchRisk =
        filters.risk === "All Risk" || p.risk === filters.risk;
      return matchSearch && matchCurrency && matchStatus && matchRisk;
    });

    if (sortKey) {
      result = [...result].sort((a, b) => {
        const av = a[sortKey as keyof Payment];
        const bv = b[sortKey as keyof Payment];
        if (av === undefined || bv === undefined) return 0;
        const cmp = String(av).localeCompare(String(bv), undefined, { numeric: true });
        return sortDir === "asc" ? cmp : -cmp;
      });
    }
    return result;
  },

  paginated: () => {
    const { page, pageSize } = get();
    const all = get().filteredSorted();
    return all.slice((page - 1) * pageSize, page * pageSize);
  },

  totalPages: () => {
    const { pageSize } = get();
    return Math.ceil(get().filteredSorted().length / pageSize);
  },
}));