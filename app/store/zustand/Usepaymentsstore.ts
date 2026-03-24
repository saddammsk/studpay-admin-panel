import { create } from "zustand";

export type PaymentStatus = "Completed" | "Pending" | "On Hold" | "Failed" | "Refunded";
export type RiskLevel = "Low" | "Medium" | "High";
export type TransactionType = "Card" | "P2P" | "FX" | "Fee";
export type Provider = "Stripe" | "Adyen";
export type Currency = "EUR" | "USD";
export type SortField = "txnId" | "amountRaw" | "datetime" | "status" | "risk";
export type SortDir = "asc" | "desc";

export interface Transaction {
  id: number;
  txnId: string;
  student: { name: string; email: string };
  type: TransactionType;
  amount: string;
  amountRaw: number;
  currency: Currency;
  datetime: string;
  status: PaymentStatus;
  risk: RiskLevel;
  lastAdminAction: string;
  provider: Provider;
  selected: boolean;
}

export const initialTransactions: Transaction[] = [
  { id: 1, txnId: "TXN-2024-001847", student: { name: "Emma Rodriguez", email: "emma.r@tum.edu" }, type: "Card", amount: "€450.00", amountRaw: 450, currency: "EUR", datetime: "2024-01-15 14:32:18", status: "Completed", risk: "Low", lastAdminAction: "Auto-approved", provider: "Stripe", selected: false },
  { id: 2, txnId: "TXN-2024-001846", student: { name: "Lucas Müller", email: "l.mueller@lmu.de" }, type: "P2P", amount: "€125.50", amountRaw: 125.5, currency: "EUR", datetime: "2024-01-15 14:28:45", status: "Pending", risk: "Medium", lastAdminAction: "Manual review by Sarah C.", provider: "Adyen", selected: false },
  { id: 3, txnId: "TXN-2024-001845", student: { name: "Sophie Weber", email: "s.weber@fu-berlin.de" }, type: "FX", amount: "€890.00", amountRaw: 890, currency: "EUR", datetime: "2024-01-15 14:15:02", status: "Completed", risk: "Low", lastAdminAction: "Auto-approved", provider: "Stripe", selected: false },
  { id: 4, txnId: "TXN-2024-001844", student: { name: "Marco Bianchi", email: "m.bianchi@polimi.it" }, type: "Card", amount: "€2,340.00", amountRaw: 2340, currency: "EUR", datetime: "2024-01-15 13:58:33", status: "On Hold", risk: "High", lastAdminAction: "Held by James M. - AML r...", provider: "Stripe", selected: false },
  { id: 5, txnId: "TXN-2024-001843", student: { name: "Anna Kowalski", email: "a.kowalski@uw.edu.pl" }, type: "Fee", amount: "€15.00", amountRaw: 15, currency: "EUR", datetime: "2024-01-15 13:45:12", status: "Completed", risk: "Low", lastAdminAction: "Auto-approved", provider: "Adyen", selected: false },
  { id: 6, txnId: "TXN-2024-001842", student: { name: "Pierre Dubois", email: "p.dubois@sorbonne.fr" }, type: "Card", amount: "€675.00", amountRaw: 675, currency: "EUR", datetime: "2024-01-15 13:32:08", status: "Failed", risk: "Medium", lastAdminAction: "Declined - Insufficient fund", provider: "Stripe", selected: false },
  { id: 7, txnId: "TXN-2024-001841", student: { name: "Elena Popov", email: "e.popov@msu.ru" }, type: "P2P", amount: "$200.00", amountRaw: 200, currency: "USD", datetime: "2024-01-15 13:18:55", status: "Refunded", risk: "Low", lastAdminAction: "Refunded by Anna W.", provider: "Adyen", selected: false },
  { id: 8, txnId: "TXN-2024-001840", student: { name: "Jan Novak", email: "j.novak@cuni.cz" }, type: "FX", amount: "$1,120.00", amountRaw: 1120, currency: "USD", datetime: "2024-01-15 12:55:41", status: "Completed", risk: "Low", lastAdminAction: "Auto-approved", provider: "Stripe", selected: false },
];

interface PaymentsState {
  transactions: Transaction[];
  page: number;
  pageSize: number;
  sortField: SortField;
  sortDir: SortDir;
  search: string;
  filterProvider: string;
  filterCurrency: string;
  filterRisk: string;
  filterStatus: string;
  openMenu: number | null;

  setPage: (page: number) => void;
  setSort: (field: SortField) => void;
  setSearch: (v: string) => void;
  setFilterProvider: (v: string) => void;
  setFilterCurrency: (v: string) => void;
  setFilterRisk: (v: string) => void;
  setFilterStatus: (v: string) => void;
  setOpenMenu: (id: number | null) => void;
  toggleRow: (id: number) => void;
  toggleAll: (filteredIds: number[], allSelected: boolean) => void;
}

export const usePaymentsStore = create<PaymentsState>((set) => ({
  transactions: initialTransactions,
  page: 1,
  pageSize: 8,
  sortField: "datetime",
  sortDir: "desc",
  search: "",
  filterProvider: "All Providers",
  filterCurrency: "All Currencies",
  filterRisk: "All Levels",
  filterStatus: "Status",
  openMenu: null,

  setPage: (page) => set({ page }),

  setSort: (field) =>
    set((state) => ({
      sortField: field,
      sortDir: state.sortField === field ? (state.sortDir === "asc" ? "desc" : "asc") : "asc",
      page: 1,
    })),

  setSearch: (search) => set({ search, page: 1 }),
  setFilterProvider: (filterProvider) => set({ filterProvider, page: 1 }),
  setFilterCurrency: (filterCurrency) => set({ filterCurrency, page: 1 }),
  setFilterRisk: (filterRisk) => set({ filterRisk, page: 1 }),
  setFilterStatus: (filterStatus) => set({ filterStatus, page: 1 }),
  setOpenMenu: (openMenu) => set({ openMenu }),

  toggleRow: (id) =>
    set((state) => ({
      transactions: state.transactions.map((t) =>
        t.id === id ? { ...t, selected: !t.selected } : t
      ),
    })),

  toggleAll: (filteredIds, allSelected) =>
    set((state) => {
      const idSet = new Set(filteredIds);
      return {
        transactions: state.transactions.map((t) =>
          idSet.has(t.id) ? { ...t, selected: !allSelected } : t
        ),
      };
    }),
}));