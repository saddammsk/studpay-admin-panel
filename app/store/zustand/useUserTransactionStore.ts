import { create } from "zustand";
import { RangeValue } from "@react-types/shared";
import { DateValue } from "@internationalized/date";

export interface Transaction {
  id: number;
  date: string;
  time: string;
  description: {
    icon: string;
    name: string;
    subDescription?: string;
  };
  account: string;
  amount: string;
  fee?: string;
  status: "Completed" | "Pending" | "Failed" | "Reversed";
}

export type StatusFilter =
  | "All Status"
  | "Completed"
  | "Pending"
  | "Failed"
  | "Reversed";

export type AccountFilter = "All Accounts" | string;
export type TypeFilter = "All Types" | string;

interface TransactionDetail {
  transactionId: string;
  grossAmount: string;
  netSettlement: string;
  feeAmount: string;
  feePercentage: string;
  fxRate: string;
  merchant: string;
  paymentMethod: string;
  traceId: string;
  arn: string;
  mcc: string;
  timeline: { label: string; date: string }[];
  status: "Success" | "Pending" | "Failed" | "Reversed";
}

interface TransactionState {
  transactions: Transaction[];
  selectedTransaction: Transaction | null;
  transactionDetail: TransactionDetail | null;

  search: string;
  statusFilter: StatusFilter;
  accountFilter: AccountFilter;
  typeFilter: TypeFilter;

  dateRange: RangeValue<DateValue> | null;

  isModalOpen: boolean;
  internalNote: string;

  totalInflow: string;
  totalOutflow: string;
  netBalance: string;

  setSearch: (search: string) => void;
  setStatusFilter: (status: StatusFilter) => void;
  setAccountFilter: (account: AccountFilter) => void;
  setTypeFilter: (type: TypeFilter) => void;
  setDateRange: (range: RangeValue<DateValue> | null) => void;

  openTransactionModal: (transaction: Transaction) => void;
  closeTransactionModal: () => void;
  setInternalNote: (note: string) => void;

  filteredTransactions: () => Transaction[];
}

const initialTransactions: Transaction[] = [
  {
    id: 1,
    date: "2024-01-15",
    time: "14:32:00",
    description: {
      icon: "/icons/amazon-bag.svg",
      name: "Amazon Purchase",
      subDescription: "Amazon EU",
    },
    account: "Main EUR Account",
    amount: "€89,99",
    fee: "€0.45",
    status: "Completed",
  },
  {
    id: 2,
    date: "2024-01-14",
    time: "09:15:00",
    description: {
      icon: "/icons/amazon-bag.svg",
      name: "Salary Deposit",
      subDescription: "TechCorp GmbH",
    },
    account: "Main EUR Account",
    amount: "+€3.500,00",
    status: "Completed",
  },
  {
    id: 3,
    date: "2024-01-13",
    time: "16:45:00",
    description: {
      icon: "/icons/card-black.svg",
      name: "Currency Exchange",
      subDescription: "StudPay FX",
    },
    account: "Main EUR Account",
    amount: "€500,00",
    fee: "€2.50",
    status: "Completed",
  },
  {
    id: 4,
    date: "2024-01-12",
    time: "11:20:00",
    description: {
      icon: "/icons/amazon-bag.svg",
      name: "Restaurant Payment",
      subDescription: "Café Milano",
    },
    account: "Main EUR Account",
    amount: "€45,50",
    fee: "€0.23",
    status: "Failed",
  },
  {
    id: 5,
    date: "2024-01-11",
    time: "08:00:00",
    description: {
      icon: "/icons/transfer-icon.svg",
      name: "AVI Transfer",
      subDescription: "French Embassy Blocked",
    },
    account: "AVI Blocked Pot",
    amount: "€7.380,00",
    status: "Pending",
  },
  {
    id: 6,
    date: "2024-01-10",
    time: "13:30:00",
    description: {
      icon: "/icons/building.svg",
      name: "Monthly Fee",
      subDescription: "StudPay",
    },
    account: "Main EUR Account",
    amount: "€4,99",
    status: "Completed",
  },
  {
    id: 7,
    date: "2024-01-09",
    time: "17:45:00",
    description: {
      icon: "/icons/amazon-bag.svg",
      name: "Refund - Zalando",
      subDescription: "Zalando SE",
    },
    account: "Main EUR Account",
    amount: "+€129,00",
    status: "Reversed",
  },
];

const mockTransactionDetail: TransactionDetail = {
  transactionId: "#TXN-998877",
  grossAmount: "€1,250.00",
  netSettlement: "€1,231.25",
  feeAmount: "- €18.75",
  feePercentage: "1.5% processing fee",
  fxRate: "1 USD = 0.92 EUR",
  merchant: "TechStore Berlin GmbH",
  paymentMethod: "Visa ending in 4242",
  traceId: "tr_8f7g6h5j4k3l2m1n",
  arn: "74927560182749382615",
  mcc: "5411 - Electronics Stores",
  timeline: [
    { label: "Initiated", date: "Jan 29, 2026 at 14:32:05" },
    { label: "Authorized", date: "Jan 29, 2026 at 14:32:05" },
    { label: "Settled", date: "Jan 29, 2026 at 14:32:08" },
  ],
  status: "Success",
};

export const useTransactionStore = create<TransactionState>((set, get) => ({
  transactions: initialTransactions,
  selectedTransaction: null,
  transactionDetail: null,

  search: "",
  statusFilter: "All Status",
  accountFilter: "All Accounts",
  typeFilter: "All Types",
  dateRange: null,

  isModalOpen: false,
  internalNote: "",

  totalInflow: "+€3.500,00",
  totalOutflow: "-€3.500,00",
  netBalance: "+€3.500,00",

  setSearch: (search) => set({ search }),
  setStatusFilter: (statusFilter) => set({ statusFilter }),
  setAccountFilter: (accountFilter) => set({ accountFilter }),
  setTypeFilter: (typeFilter) => set({ typeFilter }),
  setDateRange: (dateRange) => set({ dateRange }),

  openTransactionModal: (transaction) =>
    set({
      selectedTransaction: transaction,
      transactionDetail: mockTransactionDetail,
      isModalOpen: true,
      internalNote: "",
    }),

  closeTransactionModal: () =>
    set({
      isModalOpen: false,
      selectedTransaction: null,
      transactionDetail: null,
      internalNote: "",
    }),

  setInternalNote: (internalNote) => set({ internalNote }),

  filteredTransactions: () => {
    const {
      transactions,
      search,
      statusFilter,
      accountFilter,
      dateRange,
    } = get();

    return transactions.filter((txn) => {
      const searchLower = search.toLowerCase();

      const matchesSearch =
        !search ||
        txn.description.name.toLowerCase().includes(searchLower) ||
        txn.description.subDescription?.toLowerCase().includes(searchLower) ||
        txn.account.toLowerCase().includes(searchLower) ||
        txn.amount.toLowerCase().includes(searchLower) ||
        txn.date.toLowerCase().includes(searchLower);

      const matchesStatus =
        statusFilter === "All Status" || txn.status === statusFilter;

      const matchesAccount =
        accountFilter === "All Accounts" || txn.account === accountFilter;

      const matchesDate =
        !dateRange ||
        (() => {
          const txnDate = new Date(txn.date);
          const start = new Date(dateRange.start.toString());
          const end = new Date(dateRange.end.toString());
          return txnDate >= start && txnDate <= end;
        })();

      return matchesSearch && matchesStatus && matchesAccount && matchesDate;
    });
  },
}));