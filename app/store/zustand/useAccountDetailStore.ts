import { create } from "zustand";


export type LedgerStatus   = "Completed" | "Pending" | "Failed" | "Refunded";
export type LedgerType     = "Credit" | "Debit" | "Transfer" | "Refund";
export type AccountStatus  = "Active" | "Frozen" | "Pending";
export type PaymentStatus  = "Debit" | "Credit" | "Hold";


export interface LedgerEntry {
  id: string;
  date: string;
  description: string;
  reference: string;
  type: LedgerType;
  currency: string;
  amount: number;
  balance: number;
  status: LedgerStatus;
}

export interface SimpleEntry {
  id: number;
  date: string;
  time: string;
  description: string;
  subdescription: string;
  status: PaymentStatus;
  amount: string;
  amountRaw: number;
  fee: string;
  balance: string;
}

export interface CurrencyAccount {
  code: string;
  flag: string;
  symbol: string;
  available: string;
  hold: string;
  status: AccountStatus;
  isCrypto?: boolean;
}


interface LedgerFilters {
  search: string;
  type: string;
  status: string;
  currency: string;
}

interface SimpleFilters {
  search: string;
  type: string;
}


type SortDir = "asc" | "desc";


interface AccountDetailState {
  entries: LedgerEntry[];
  ledgerFilters: LedgerFilters;
  ledgerSortKey: keyof LedgerEntry | null;
  ledgerSortDir: SortDir;
  ledgerPage: number;
  ledgerPageSize: number;
  setLedgerFilter: (key: keyof LedgerFilters, value: string) => void;
  resetLedgerFilters: () => void;
  setLedgerSort: (key: keyof LedgerEntry) => void;
  setLedgerPage: (page: number) => void;
  ledgerFilteredSorted: () => LedgerEntry[];
  ledgerPaginated: () => LedgerEntry[];
  ledgerTotalPages: () => number;

  simpleEntries: SimpleEntry[];
  simpleFilters: SimpleFilters;
  simpleSortKey: keyof SimpleEntry | null;
  simpleSortDir: SortDir;
  simplePage: number;
  simplePageSize: number;
  setSimpleFilter: (key: keyof SimpleFilters, value: string) => void;
  resetSimpleFilters: () => void;
  setSimpleSort: (key: keyof SimpleEntry) => void;
  setSimplePage: (page: number) => void;
  simpleFilteredSorted: () => SimpleEntry[];
  simplePaginated: () => SimpleEntry[];
  simpleTotalPages: () => number;

  isFreezeModalOpen: boolean;
  isAdjustLimitsModalOpen: boolean;
  isManualEntryModalOpen: boolean;
  openModal: (modal: "freeze" | "adjustLimits" | "manualEntry") => void;
  closeModal: (modal: "freeze" | "adjustLimits" | "manualEntry") => void;

  manualEntryForm: {
    type: "Credit" | "Debit";
    amount: string;
    currency: string;
    description: string;
    reason: string;
  };
  manualEntryErrors: Partial<Record<"type" | "amount" | "currency" | "description" | "reason", string>>;
  setManualEntryField: (
    key: keyof AccountDetailState["manualEntryForm"],
    value: string
  ) => void;
  submitManualEntry: () => boolean;
}


const defaultLedgerFilters: LedgerFilters = {
  search: "",
  type: "All Types",
  status: "All Status",
  currency: "All Currencies",
};

const defaultSimpleFilters: SimpleFilters = {
  search: "",
  type: "All Types",
};

const defaultManualEntry = {
  type: "Credit" as const,
  amount: "",
  currency: "EUR",
  description: "",
  reason: "",
};


const mockLedgerEntries: LedgerEntry[] = [
  { id: "TXN-2024-001", date: "2024-01-15 09:30", description: "Tuition Payment – TU Berlin",  reference: "REF-78542", type: "Debit",    currency: "EUR", amount: -3200.00, balance: 12450.75, status: "Completed" },
  { id: "TXN-2024-002", date: "2024-01-14 16:20", description: "Scholarship Disbursement",      reference: "REF-78541", type: "Credit",   currency: "EUR", amount:  5000.00, balance: 15650.75, status: "Completed" },
  { id: "TXN-2024-003", date: "2024-01-13 11:00", description: "Housing Deposit Transfer",      reference: "REF-78540", type: "Transfer", currency: "EUR", amount: -1200.00, balance: 10650.75, status: "Completed" },
  { id: "TXN-2024-004", date: "2024-01-12 14:45", description: "Insurance Premium",             reference: "REF-78539", type: "Debit",    currency: "EUR", amount:  -350.00, balance: 11850.75, status: "Pending"   },
  { id: "TXN-2024-005", date: "2024-01-11 10:15", description: "Parent Transfer",               reference: "REF-78538", type: "Credit",   currency: "USD", amount:  2000.00, balance:  8320.50, status: "Completed" },
  { id: "TXN-2024-006", date: "2024-01-10 08:30", description: "Library Fee",                   reference: "REF-78537", type: "Debit",    currency: "EUR", amount:   -45.00, balance: 12800.75, status: "Completed" },
  { id: "TXN-2024-007", date: "2024-01-09 15:00", description: "Book Refund",                   reference: "REF-78536", type: "Refund",   currency: "EUR", amount:   120.00, balance: 12845.75, status: "Refunded"  },
  { id: "TXN-2024-008", date: "2024-01-08 13:20", description: "Failed Payment Reversal",       reference: "REF-78535", type: "Credit",   currency: "EUR", amount:   500.00, balance: 12725.75, status: "Failed"    },
  { id: "TXN-2024-009", date: "2024-01-07 09:00", description: "Rent – Student Housing",        reference: "REF-78534", type: "Debit",    currency: "EUR", amount:  -850.00, balance: 12225.75, status: "Completed" },
  { id: "TXN-2024-010", date: "2024-01-06 11:30", description: "PKR Conversion Credit",         reference: "REF-78533", type: "Credit",   currency: "PKR", amount:  9800.00, balance: 13075.75, status: "Completed" },
  { id: "TXN-2024-011", date: "2024-01-05 14:00", description: "Lab Equipment Deposit",         reference: "REF-78532", type: "Debit",    currency: "EUR", amount:  -280.00, balance: 13355.75, status: "Pending"   },
  { id: "TXN-2024-012", date: "2024-01-04 16:45", description: "Internship Stipend",            reference: "REF-78531", type: "Credit",   currency: "EUR", amount:  1200.00, balance: 13635.75, status: "Completed" },
];

const mockSimpleEntries: SimpleEntry[] = [
  { id: 1,  date: "2024-01-15", time: "14:32", description: "Tuition Payment - Spring 2024",    subdescription: "",                    status: "Debit",  amount: "-€4,500.00", amountRaw: -4500, fee: "€2.50", balance: "€7,950.75"  },
  { id: 2,  date: "2024-01-14", time: "09:15", description: "Bank Transfer Received",            subdescription: "",                    status: "Credit", amount: "+€5,000.00", amountRaw:  5000, fee: "—",     balance: "€12,450.75" },
  { id: 3,  date: "2024-01-13", time: "16:45", description: "Housing Deposit Hold",             subdescription: "",                    status: "Hold",   amount: "+€2,500.00", amountRaw:  2500, fee: "—",     balance: "€7,450.75"  },
  { id: 4,  date: "2024-01-12", time: "11:20", description: "Manual Adjustment - Fee Reversal", subdescription: "Adjusted by Admin John", status: "Credit", amount: "+€25.00",    amountRaw:    25, fee: "—",     balance: "€9,950.75"  },
  { id: 5,  date: "2024-01-11", time: "08:00", description: "Currency Exchange EUR→USD",        subdescription: "",                    status: "Debit",  amount: "-€1,000.00", amountRaw: -1000, fee: "€5.00", balance: "€9,925.75"  },
  { id: 6,  date: "2024-01-10", time: "15:30", description: "Scholarship Credit",               subdescription: "",                    status: "Credit", amount: "+€3,000.00", amountRaw:  3000, fee: "—",     balance: "€10,925.75" },
  { id: 7,  date: "2024-01-09", time: "10:00", description: "Library Fine Payment",             subdescription: "",                    status: "Debit",  amount: "-€15.00",    amountRaw:   -15, fee: "€0.50", balance: "€7,935.75"  },
  { id: 8,  date: "2024-01-08", time: "13:45", description: "Parental Transfer",                subdescription: "",                    status: "Credit", amount: "+€1,500.00", amountRaw:  1500, fee: "—",     balance: "€7,950.75"  },
  { id: 9,  date: "2024-01-07", time: "09:30", description: "Insurance Premium Hold",           subdescription: "",                    status: "Hold",   amount: "+€350.00",   amountRaw:   350, fee: "—",     balance: "€6,450.75"  },
  { id: 10, date: "2024-01-06", time: "17:00", description: "Book Refund",                      subdescription: "Processed via admin", status: "Credit", amount: "+€120.00",   amountRaw:   120, fee: "—",     balance: "€6,100.75"  },
];


export const useAccountDetailStore = create<AccountDetailState>()((set, get) => ({

  entries: mockLedgerEntries,
  ledgerFilters: defaultLedgerFilters,
  ledgerSortKey: null,
  ledgerSortDir: "asc",
  ledgerPage: 1,
  ledgerPageSize: 8,

  setLedgerFilter: (key, value) =>
    set((s) => ({ ledgerFilters: { ...s.ledgerFilters, [key]: value }, ledgerPage: 1 })),

  resetLedgerFilters: () => set({ ledgerFilters: defaultLedgerFilters, ledgerPage: 1 }),

  setLedgerSort: (key) =>
    set((s) => ({
      ledgerSortKey: key,
      ledgerSortDir: s.ledgerSortKey === key && s.ledgerSortDir === "asc" ? "desc" : "asc",
    })),

  setLedgerPage: (page) => set({ ledgerPage: page }),

  ledgerFilteredSorted: () => {
    const { entries, ledgerFilters, ledgerSortKey, ledgerSortDir } = get();
    let result = entries.filter((e) => {
      const q = ledgerFilters.search.toLowerCase();
      const matchSearch =
        !ledgerFilters.search ||
        e.id.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        e.reference.toLowerCase().includes(q);
      const matchType     = ledgerFilters.type     === "All Types"      || e.type     === ledgerFilters.type;
      const matchStatus   = ledgerFilters.status   === "All Status"     || e.status   === ledgerFilters.status;
      const matchCurrency = ledgerFilters.currency === "All Currencies" || e.currency === ledgerFilters.currency;
      return matchSearch && matchType && matchStatus && matchCurrency;
    });
    if (ledgerSortKey) {
      result = [...result].sort((a, b) => {
        const av = a[ledgerSortKey], bv = b[ledgerSortKey];
        if (av === undefined || bv === undefined) return 0;
        const cmp = av < bv ? -1 : av > bv ? 1 : 0;
        return ledgerSortDir === "asc" ? cmp : -cmp;
      });
    }
    return result;
  },

  ledgerPaginated: () => {
    const { ledgerPage, ledgerPageSize } = get();
    return get().ledgerFilteredSorted().slice((ledgerPage - 1) * ledgerPageSize, ledgerPage * ledgerPageSize);
  },

  ledgerTotalPages: () =>
    Math.ceil(get().ledgerFilteredSorted().length / get().ledgerPageSize),

  simpleEntries: mockSimpleEntries,
  simpleFilters: defaultSimpleFilters,
  simpleSortKey: null,
  simpleSortDir: "asc",
  simplePage: 1,
  simplePageSize: 6,

  setSimpleFilter: (key, value) =>
    set((s) => ({ simpleFilters: { ...s.simpleFilters, [key]: value }, simplePage: 1 })),

  resetSimpleFilters: () => set({ simpleFilters: defaultSimpleFilters, simplePage: 1 }),

  setSimpleSort: (key) =>
    set((s) => ({
      simpleSortKey: key,
      simpleSortDir: s.simpleSortKey === key && s.simpleSortDir === "asc" ? "desc" : "asc",
    })),

  setSimplePage: (page) => set({ simplePage: page }),

  simpleFilteredSorted: () => {
    const { simpleEntries, simpleFilters, simpleSortKey, simpleSortDir } = get();
    let result = simpleEntries.filter((e) => {
      const q = simpleFilters.search.toLowerCase();
      const matchSearch =
        !simpleFilters.search ||
        e.description.toLowerCase().includes(q) ||
        e.subdescription.toLowerCase().includes(q) ||
        e.date.includes(q);
      const matchType = simpleFilters.type === "All Types" || e.status === simpleFilters.type;
      return matchSearch && matchType;
    });
    if (simpleSortKey) {
      result = [...result].sort((a, b) => {
        const av = a[simpleSortKey], bv = b[simpleSortKey];
        if (av === undefined || bv === undefined) return 0;
        const cmp = av < bv ? -1 : av > bv ? 1 : 0;
        return simpleSortDir === "asc" ? cmp : -cmp;
      });
    }
    return result;
  },

  simplePaginated: () => {
    const { simplePage, simplePageSize } = get();
    return get().simpleFilteredSorted().slice((simplePage - 1) * simplePageSize, simplePage * simplePageSize);
  },

  simpleTotalPages: () =>
    Math.ceil(get().simpleFilteredSorted().length / get().simplePageSize),

  isFreezeModalOpen: false,
  isAdjustLimitsModalOpen: false,
  isManualEntryModalOpen: false,

  openModal: (modal) => {
    if (modal === "freeze")       set({ isFreezeModalOpen: true });
    if (modal === "adjustLimits") set({ isAdjustLimitsModalOpen: true });
    if (modal === "manualEntry")  set({ isManualEntryModalOpen: true, manualEntryForm: defaultManualEntry, manualEntryErrors: {} });
  },

  closeModal: (modal) => {
    if (modal === "freeze")       set({ isFreezeModalOpen: false });
    if (modal === "adjustLimits") set({ isAdjustLimitsModalOpen: false });
    if (modal === "manualEntry")  set({ isManualEntryModalOpen: false });
  },

  manualEntryForm: defaultManualEntry,
  manualEntryErrors: {},

  setManualEntryField: (key, value) =>
    set((s) => ({
      manualEntryForm: { ...s.manualEntryForm, [key]: value },
      manualEntryErrors: { ...s.manualEntryErrors, [key]: undefined },
    })),

  submitManualEntry: () => {
    const { manualEntryForm, entries } = get();
    const errors: AccountDetailState["manualEntryErrors"] = {};
    if (!manualEntryForm.amount || isNaN(Number(manualEntryForm.amount)) || Number(manualEntryForm.amount) <= 0)
      errors.amount = "Enter a valid positive amount.";
    if (!manualEntryForm.description.trim())
      errors.description = "Description is required.";
    if (!manualEntryForm.reason.trim())
      errors.reason = "Reason is required.";
    if (Object.keys(errors).length) {
      set({ manualEntryErrors: errors });
      return false;
    }
    const amt    = Number(manualEntryForm.amount);
    const signed = manualEntryForm.type === "Credit" ? amt : -amt;
    const newEntry: LedgerEntry = {
      id:          `TXN-${Date.now()}`,
      date:        new Date().toISOString().slice(0, 16).replace("T", " "),
      description: manualEntryForm.description,
      reference:   `REF-MAN-${Date.now()}`,
      type:        manualEntryForm.type as LedgerType,
      currency:    manualEntryForm.currency,
      amount:      signed,
      balance:     (entries[0]?.balance ?? 0) + signed,
      status:      "Pending",
    };
    set({ entries: [newEntry, ...entries], isManualEntryModalOpen: false });
    return true;
  },
}));