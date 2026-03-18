import { create } from "zustand";

export type CampaignType = "Cashback" | "Points" | "Voucher";
export type CampaignStatus = "Live" | "Paused";
export type TransactionStatus = "Created" | "Pending" | "Expired";
export type RewardType = "percentage" | "fixed";

export type Campaign = {
  id: string;
  campaign: string;
  type: CampaignType;
  rule: string;
  cap: string;
  status: CampaignStatus;
};

export type Transaction = {
  id: string;
  student: string;
  event: string;
  cashback: string;
  status: TransactionStatus;
};

export type ManualCredit = {
  student: string;
  rewardType: string;
  amount: string;
  reason: string;
};

export type NewCampaign = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  targetCategory: string;
  rewardType: RewardType;
  percentage: string;
  maxCap: string;
  triggerEvent: string;
};

const initialCampaigns: Campaign[] = [
  { id: "1", campaign: "Early Bird Rent",   type: "Cashback", rule: "5% on first rent payment",   cap: "€50",      status: "Live"   },
  { id: "2", campaign: "Referral Bonus",    type: "Points",   rule: "500 pts per referral",        cap: "Unlimited", status: "Live"   },
  { id: "3", campaign: "SIM Activation",    type: "Voucher",  rule: "€10 voucher on activation",   cap: "€10",      status: "Live"   },
  { id: "4", campaign: "Welcome Bundle",    type: "Cashback", rule: "3% on bundle purchase",       cap: "€30",      status: "Paused" },
  { id: "5", campaign: "Insurance Signup",  type: "Points",   rule: "1000 pts on signup",          cap: "1000 pts", status: "Live"   },
  { id: "6", campaign: "Monthly Spender",   type: "Cashback", rule: "2% on €500+ spend",           cap: "€25",      status: "Paused" },
];

const initialTransactions: Transaction[] = [
  { id: "TXN-78234", student: "Emma Schmidt",  event: "Housing Booking",  cashback: "€45.00",  status: "Created" },
  { id: "TXN-78233", student: "Liam Mueller",  event: "SIM Activation",   cashback: "€10.00",  status: "Created" },
  { id: "TXN-78232", student: "Sofia Weber",   event: "Rent Payment",     cashback: "€25.50",  status: "Pending" },
  { id: "TXN-78231", student: "Noah Fischer",  event: "Referral Bonus",   cashback: "500 pts", status: "Created" },
  { id: "TXN-78230", student: "Mia Hoffmann",  event: "Insurance Signup", cashback: "€15.00",  status: "Pending" },
  { id: "TXN-78229", student: "Elias Koch",    event: "Bundle Purchase",  cashback: "€12.00",  status: "Expired" },
  { id: "TXN-78228", student: "Anna Bauer",    event: "Housing Booking",  cashback: "€50.00",  status: "Created" },
  { id: "TXN-78227", student: "Felix Wagner",  event: "Rent Payment",     cashback: "€18.75",  status: "Pending" },
];

const emptyManualCredit: ManualCredit = {
  student: "",
  rewardType: "",
  amount: "",
  reason: "",
};

const emptyNewCampaign: NewCampaign = {
  name: "",
  description: "",
  startDate: "",
  endDate: "",
  targetCategory: "",
  rewardType: "percentage",
  percentage: "",
  maxCap: "",
  triggerEvent: "",
};

type CashbackStore = {
  // Data
  campaigns: Campaign[];
  transactions: Transaction[];

  // Modal state
  isCreditModalOpen: boolean;
  isCampaignModalOpen: boolean;
  openCreditModal: () => void;
  closeCreditModal: () => void;
  openCampaignModal: () => void;
  closeCampaignModal: () => void;

  // Manual Credit form
  manualCredit: ManualCredit;
  setManualCredit: (field: keyof ManualCredit, value: string) => void;
  resetManualCredit: () => void;
  submitManualCredit: () => void;

  // New Campaign form
  newCampaign: NewCampaign;
  setNewCampaign: (field: keyof NewCampaign, value: string) => void;
  setRewardType: (type: RewardType) => void;
  resetNewCampaign: () => void;
  saveCampaignDraft: () => void;
  launchCampaign: () => void;

  // Transaction search
  transactionSearch: string;
  setTransactionSearch: (search: string) => void;
  filteredTransactions: () => Transaction[];
};

export const useCashbackStore = create<CashbackStore>((set, get) => ({
  campaigns: initialCampaigns,
  transactions: initialTransactions,

  isCreditModalOpen: false,
  isCampaignModalOpen: false,
  openCreditModal:   () => set({ isCreditModalOpen: true }),
  closeCreditModal:  () => set({ isCreditModalOpen: false }),
  openCampaignModal:  () => set({ isCampaignModalOpen: true }),
  closeCampaignModal: () => set({ isCampaignModalOpen: false }),

  manualCredit: emptyManualCredit,

  setManualCredit: (field, value) =>
    set((state) => ({
      manualCredit: { ...state.manualCredit, [field]: value },
    })),

  resetManualCredit: () => set({ manualCredit: emptyManualCredit }),

  submitManualCredit: () => {
    const { manualCredit } = get();
    if (!manualCredit.student || !manualCredit.amount) return;
    // Add transaction to the list
    const newTx: Transaction = {
      id: `TXN-${Date.now()}`,
      student: manualCredit.student,
      event: manualCredit.reason || "Manual Credit",
      cashback: `€${manualCredit.amount}`,
      status: "Created",
    };
    set((state) => ({
      transactions: [newTx, ...state.transactions],
      manualCredit: emptyManualCredit,
      isCreditModalOpen: false,
    }));
  },

  newCampaign: emptyNewCampaign,

  setNewCampaign: (field, value) =>
    set((state) => ({
      newCampaign: { ...state.newCampaign, [field]: value },
    })),

  setRewardType: (type) =>
    set((state) => ({
      newCampaign: { ...state.newCampaign, rewardType: type },
    })),

  resetNewCampaign: () => set({ newCampaign: emptyNewCampaign }),

  saveCampaignDraft: () => {
    const { newCampaign } = get();
    if (!newCampaign.name) return;
    const draft: Campaign = {
      id: String(Date.now()),
      campaign: newCampaign.name,
      type: "Cashback",
      rule: `${newCampaign.percentage || "0"}% cashback`,
      cap: newCampaign.maxCap ? `€${newCampaign.maxCap}` : "—",
      status: "Paused",
    };
    set((state) => ({
      campaigns: [draft, ...state.campaigns],
      newCampaign: emptyNewCampaign,
      isCampaignModalOpen: false,
    }));
  },

  launchCampaign: () => {
    const { newCampaign } = get();
    if (!newCampaign.name) return;
    const live: Campaign = {
      id: String(Date.now()),
      campaign: newCampaign.name,
      type: newCampaign.rewardType === "percentage" ? "Cashback" : "Voucher",
      rule: `${newCampaign.percentage || "0"}% on trigger`,
      cap: newCampaign.maxCap ? `€${newCampaign.maxCap}` : "Unlimited",
      status: "Live",
    };
    set((state) => ({
      campaigns: [live, ...state.campaigns],
      newCampaign: emptyNewCampaign,
      isCampaignModalOpen: false,
    }));
  },

  transactionSearch: "",

  setTransactionSearch: (search) => set({ transactionSearch: search }),

  filteredTransactions: () => {
    const { transactions, transactionSearch } = get();
    if (!transactionSearch.trim()) return transactions;
    const q = transactionSearch.toLowerCase();
    return transactions.filter(
      (t) =>
        t.id.toLowerCase().includes(q) ||
        t.student.toLowerCase().includes(q) ||
        t.event.toLowerCase().includes(q)
    );
  },
}));