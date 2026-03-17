import { create } from "zustand";

export type FxStatus = "Active" | "Suspended" | "Review";
export type FxTrend = "up" | "down" | "flat";
export type PaymentStatus = "Basic" | "Premium" | "VIP";

export interface FxRate {
  id: string;
  pair: string;
  from: string;
  to: string;
  marketRate: number;
  markup: number;
  finalRate: number;
  change24h: number;
  trend: FxTrend;
  volume24h: string;
  status: FxStatus;
  lastUpdated: string;
}

export interface Payment {
  id: number;
  currency: string;
  status: PaymentStatus;
  markup: string;
  weekendRule: boolean;
  spread: string;
  limit: string;
}

export interface EditForm {
  currency: string;
  status: PaymentStatus;
  markup: string;
  weekendRule: boolean;
  spread: string;
  limit: string;
}

export interface EditErrors {
  markup?: string;
  spread?: string;
  limit?: string;
}

interface RateFilters {
  search: string;
  status: string;
  pair: string;
}

type SortKey = keyof FxRate | null;
type SortDir = "asc" | "desc";

interface OverrideForm {
  pair: string;
  rate: string;
  reason: string;
  duration: string;
}

interface FxStoreState {
  rates: FxRate[];
  rateFilters: RateFilters;
  sortKey: SortKey;
  sortDir: SortDir;
  ratePage: number;
  ratePageSize: number;

  isEmergencyFreezeModalOpen: boolean;
  isRateOverrideModalOpen: boolean;

  overrideForm: OverrideForm;
  overrideErrors: Partial<Record<keyof OverrideForm, string>>;

  payments: Payment[];
  tablePage: number;
  tablePageSize: number;
  editingId: number | null;
  editForm: EditForm;
  editErrors: EditErrors;

  setRateFilter: (key: keyof RateFilters, value: string) => void;
  resetRateFilters: () => void;
  setSort: (key: SortKey) => void;
  setRatePage: (page: number) => void;
  openModal: (modal: "emergencyFreeze" | "rateOverride") => void;
  closeModal: (modal: "emergencyFreeze" | "rateOverride") => void;
  setOverrideField: (key: keyof OverrideForm, value: string) => void;
  submitOverride: () => boolean;
  filteredSorted: () => FxRate[];
  paginatedRates: () => FxRate[];
  totalRatePages: () => number;

  setTablePage: (page: number) => void;
  toggleWeekend: (id: number) => void;
  openEdit: (id: number) => void;
  closeEdit: () => void;
  setEditField: <K extends keyof EditForm>(key: K, value: EditForm[K]) => void;
  submitEdit: () => boolean;
  paginatedPayments: () => Payment[];
  totalTablePages: () => number;
}

const defaultRateFilters: RateFilters = { search: "", status: "All Status", pair: "All Pairs" };
const defaultOverrideForm: OverrideForm = { pair: "EUR/USD", rate: "", reason: "", duration: "1h" };
const defaultEditForm = (): EditForm => ({
  currency: "",
  status: "Basic",
  markup: "",
  weekendRule: false,
  spread: "",
  limit: "",
});

const mockRates: FxRate[] = [
  { id: "FX-001", pair: "EUR/USD", from: "EUR", to: "USD", marketRate: 1.0847, markup: 0.65, finalRate: 1.0917, change24h: 0.23,  trend: "up",   volume24h: "$842,300",   status: "Active",    lastUpdated: "Just now"   },
  { id: "FX-002", pair: "EUR/PKR", from: "EUR", to: "PKR", marketRate: 302.45, markup: 1.20, finalRate: 306.08, change24h: -0.23, trend: "down", volume24h: "$1,247,000", status: "Active",    lastUpdated: "2 min ago"  },
  { id: "FX-003", pair: "USD/GBP", from: "USD", to: "GBP", marketRate: 0.7923, markup: 0.45, finalRate: 0.7959, change24h: 0.15,  trend: "up",   volume24h: "$318,500",   status: "Active",    lastUpdated: "1 min ago"  },
  { id: "FX-004", pair: "USD/PKR", from: "USD", to: "PKR", marketRate: 278.92, markup: 1.10, finalRate: 281.99, change24h: 5.80,  trend: "up",   volume24h: "$94,200",    status: "Review",    lastUpdated: "5 min ago"  },
  { id: "FX-005", pair: "GBP/EUR", from: "GBP", to: "EUR", marketRate: 1.1628, markup: 0.55, finalRate: 1.1692, change24h: 0.08,  trend: "flat", volume24h: "$207,400",   status: "Active",    lastUpdated: "3 min ago"  },
  { id: "FX-006", pair: "EUR/AED", from: "EUR", to: "AED", marketRate: 3.9835, markup: 0.90, finalRate: 4.0193, change24h: -0.11, trend: "down", volume24h: "$64,800",    status: "Suspended", lastUpdated: "10 min ago" },
  { id: "FX-007", pair: "USD/CNY", from: "USD", to: "CNY", marketRate: 7.2345, markup: 0.75, finalRate: 7.2888, change24h: 0.04,  trend: "flat", volume24h: "$128,900",   status: "Active",    lastUpdated: "4 min ago"  },
  { id: "FX-008", pair: "EUR/CNY", from: "EUR", to: "CNY", marketRate: 7.8432, markup: 0.80, finalRate: 7.9059, change24h: -0.19, trend: "down", volume24h: "$55,300",    status: "Active",    lastUpdated: "6 min ago"  },
];

const mockPayments: Payment[] = [
  { id: 1, currency: "EUR/USD", status: "Basic",   markup: "1.50", weekendRule: true,  spread: "0.50", limit: "5000"   },
  { id: 2, currency: "EUR/USD", status: "Premium", markup: "0.80", weekendRule: true,  spread: "0.30", limit: "25000"  },
  { id: 3, currency: "EUR/USD", status: "VIP",     markup: "0.30", weekendRule: false, spread: "",     limit: "100000" },
  { id: 4, currency: "EUR/PKR", status: "Basic",   markup: "2.00", weekendRule: true,  spread: "0.80", limit: "3000"   },
  { id: 5, currency: "EUR/PKR", status: "Premium", markup: "1.20", weekendRule: true,  spread: "0.50", limit: "15000"  },
  { id: 6, currency: "EUR/PKR", status: "VIP",     markup: "0.50", weekendRule: false, spread: "",     limit: "50000"  },
  { id: 7, currency: "USD/GBP", status: "Basic",   markup: "1.20", weekendRule: true,  spread: "0.40", limit: "5000"   },
  { id: 8, currency: "USD/GBP", status: "Premium", markup: "0.60", weekendRule: true,  spread: "0.20", limit: "30000"  },
  { id: 9, currency: "USD/GBP", status: "VIP",     markup: "0.25", weekendRule: false, spread: "",     limit: "150000" },
];

const validateEditForm = (form: EditForm): EditErrors => {
  const errors: EditErrors = {};
  if (!form.markup || isNaN(Number(form.markup)) || Number(form.markup) < 0)
    errors.markup = "Enter a valid markup percentage.";
  if (form.weekendRule && (!form.spread || isNaN(Number(form.spread)) || Number(form.spread) < 0))
    errors.spread = "Enter a valid spread when weekend rule is enabled.";
  if (!form.limit || isNaN(Number(form.limit)) || Number(form.limit) <= 0)
    errors.limit = "Enter a valid daily limit.";
  return errors;
};

export const useFxStore = create<FxStoreState>()((set, get) => ({
  rates: mockRates,
  rateFilters: defaultRateFilters,
  sortKey: null,
  sortDir: "asc",
  ratePage: 1,
  ratePageSize: 6,
  isEmergencyFreezeModalOpen: false,
  isRateOverrideModalOpen: false,
  overrideForm: defaultOverrideForm,
  overrideErrors: {},

  payments: mockPayments,
  tablePage: 1,
  tablePageSize: 5,
  editingId: null,
  editForm: defaultEditForm(),
  editErrors: {},

  setRateFilter: (key, value) =>
    set((s) => ({ rateFilters: { ...s.rateFilters, [key]: value }, ratePage: 1 })),

  resetRateFilters: () => set({ rateFilters: defaultRateFilters, ratePage: 1 }),

  setSort: (key) =>
    set((s) => ({
      sortKey: key,
      sortDir: s.sortKey === key && s.sortDir === "asc" ? "desc" : "asc",
    })),

  setRatePage: (page) => set({ ratePage: page }),

  openModal: (modal) => {
    if (modal === "emergencyFreeze") set({ isEmergencyFreezeModalOpen: true });
    if (modal === "rateOverride") set({ isRateOverrideModalOpen: true, overrideForm: defaultOverrideForm, overrideErrors: {} });
  },

  closeModal: (modal) => {
    if (modal === "emergencyFreeze") set({ isEmergencyFreezeModalOpen: false });
    if (modal === "rateOverride") set({ isRateOverrideModalOpen: false });
  },

  setOverrideField: (key, value) =>
    set((s) => ({
      overrideForm: { ...s.overrideForm, [key]: value },
      overrideErrors: { ...s.overrideErrors, [key]: undefined },
    })),

  submitOverride: () => {
    const { overrideForm } = get();
    const errors: Partial<Record<keyof OverrideForm, string>> = {};
    if (!overrideForm.rate || isNaN(Number(overrideForm.rate)) || Number(overrideForm.rate) <= 0)
      errors.rate = "Enter a valid positive rate.";
    if (!overrideForm.reason.trim())
      errors.reason = "Reason is required.";
    if (Object.keys(errors).length) {
      set({ overrideErrors: errors });
      return false;
    }
    set((s) => ({
      rates: s.rates.map((r) =>
        r.pair === overrideForm.pair
          ? { ...r, finalRate: Number(overrideForm.rate), status: "Review" as FxStatus, lastUpdated: "Just now" }
          : r
      ),
      isRateOverrideModalOpen: false,
    }));
    return true;
  },

  filteredSorted: () => {
    const { rates, rateFilters, sortKey, sortDir } = get();
    let result = rates.filter((r) => {
      const q = rateFilters.search.toLowerCase();
      const matchSearch = !rateFilters.search || r.pair.toLowerCase().includes(q) || r.id.toLowerCase().includes(q);
      const matchStatus = rateFilters.status === "All Status" || r.status === rateFilters.status;
      const matchPair = rateFilters.pair === "All Pairs" || r.pair === rateFilters.pair;
      return matchSearch && matchStatus && matchPair;
    });
    if (sortKey) {
      result = [...result].sort((a, b) => {
        const av = a[sortKey], bv = b[sortKey];
        if (av === undefined || bv === undefined) return 0;
        const cmp = av < bv ? -1 : av > bv ? 1 : 0;
        return sortDir === "asc" ? cmp : -cmp;
      });
    }
    return result;
  },

  paginatedRates: () => {
    const { ratePage, ratePageSize } = get();
    return get().filteredSorted().slice((ratePage - 1) * ratePageSize, ratePage * ratePageSize);
  },

  totalRatePages: () => Math.ceil(get().filteredSorted().length / get().ratePageSize),

  setTablePage: (page) => set({ tablePage: page }),

  toggleWeekend: (id) =>
    set((s) => ({
      payments: s.payments.map((p) =>
        p.id === id ? { ...p, weekendRule: !p.weekendRule } : p
      ),
    })),

  openEdit: (id) => {
    const payment = get().payments.find((p) => p.id === id);
    if (!payment) return;
    set({
      editingId: id,
      editForm: {
        currency: payment.currency,
        status: payment.status,
        markup: payment.markup,
        weekendRule: payment.weekendRule,
        spread: payment.spread,
        limit: payment.limit,
      },
      editErrors: {},
    });
  },

  closeEdit: () => set({ editingId: null, editForm: defaultEditForm(), editErrors: {} }),

  setEditField: (key, value) =>
    set((s) => ({
      editForm: { ...s.editForm, [key]: value },
      editErrors: { ...s.editErrors, [key]: undefined },
    })),

  submitEdit: () => {
    const { editingId, editForm } = get();
    const errors = validateEditForm(editForm);
    if (Object.keys(errors).length) {
      set({ editErrors: errors });
      return false;
    }
    set((s) => ({
      payments: s.payments.map((p) =>
        p.id === editingId
          ? {
              ...p,
              status: editForm.status,
              markup: editForm.markup,
              weekendRule: editForm.weekendRule,
              spread: editForm.weekendRule ? editForm.spread : "",
              limit: editForm.limit,
            }
          : p
      ),
      editingId: null,
      editForm: defaultEditForm(),
      editErrors: {},
    }));
    return true;
  },

  paginatedPayments: () => {
    const { payments, tablePage, tablePageSize } = get();
    return payments.slice((tablePage - 1) * tablePageSize, tablePage * tablePageSize);
  },

  totalTablePages: () => Math.max(1, Math.ceil(get().payments.length / get().tablePageSize)),
}));