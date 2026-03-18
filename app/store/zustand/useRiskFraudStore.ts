import { create } from "zustand";

export type RiskLevel = "High Risk" | "Medium Risk" | "Low Risk";
export type StatusType = "Critical" | "Suspicious" | "Pending" | "Cleared";

export type Alert = {
  id: string;
  initials: string;
  name: string;
  email: string;
  category: string;
  riskScore: number;
  riskLevel: RiskLevel;
  date: string;
  time: string;
  status: StatusType;
};

const initialAlerts: Alert[] = [
  {
    id: "ALT-001",
    initials: "RS",
    name: "Rahul Sharma",
    email: "rahul.sharma@email.com",
    category: "Identity Theft",
    riskScore: 95,
    riskLevel: "High Risk",
    date: "Feb 4",
    time: "02:32 PM",
    status: "Critical",
  },
  {
    id: "ALT-002",
    initials: "PP",
    name: "Priya Patel",
    email: "priya.patel@email.com",
    category: "Payment Bounce",
    riskScore: 78,
    riskLevel: "Medium Risk",
    date: "Feb 4",
    time: "12:15 PM",
    status: "Suspicious",
  },
  {
    id: "ALT-003",
    initials: "JW",
    name: "James Wilson",
    email: "james.wilson@email.com",
    category: "Multiple IPs",
    riskScore: 62,
    riskLevel: "Medium Risk",
    date: "Feb 4",
    time: "10:45 AM",
    status: "Suspicious",
  },
  {
    id: "ALT-004",
    initials: "AK",
    name: "Amit Kumar",
    email: "amit.kumar@email.com",
    category: "Document Fraud",
    riskScore: 88,
    riskLevel: "High Risk",
    date: "Feb 4",
    time: "09:20 AM",
    status: "Critical",
  },
];

type RiskFraudStore = {
  alerts: Alert[];
  search: string;
  selectedAlert: Alert | null;
  isModalOpen: boolean;

  // Actions
  setSearch: (search: string) => void;
  openModal: (alert: Alert) => void;
  closeModal: () => void;
  freezeAccount: (id: string) => void;
  clearAlert: (id: string) => void;
  escalateAlert: (id: string) => void;
  filteredAlerts: () => Alert[];

  // Derived stats
  highRiskCount: () => number;
  pendingCount: () => number;
  frozenCount: () => number;
};

export const useRiskFraudStore = create<RiskFraudStore>((set, get) => ({
  alerts: initialAlerts,
  search: "",
  selectedAlert: null,
  isModalOpen: false,

  setSearch: (search) => set({ search }),

  openModal: (alert) => set({ selectedAlert: alert, isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false, selectedAlert: null }),

  freezeAccount: (id) =>
    set((state) => ({
      alerts: state.alerts.map((a) =>
        a.id === id ? { ...a, status: "Pending" as StatusType } : a
      ),
      isModalOpen: false,
      selectedAlert: null,
    })),

  clearAlert: (id) =>
    set((state) => ({
      alerts: state.alerts.map((a) =>
        a.id === id ? { ...a, status: "Cleared" as StatusType } : a
      ),
      isModalOpen: false,
      selectedAlert: null,
    })),

  escalateAlert: (id) =>
    set((state) => ({
      alerts: state.alerts.map((a) =>
        a.id === id ? { ...a, status: "Critical" as StatusType } : a
      ),
      isModalOpen: false,
      selectedAlert: null,
    })),

  filteredAlerts: () => {
    const { alerts, search } = get();
    if (!search.trim()) return alerts;
    const q = search.toLowerCase();
    return alerts.filter(
      (a) =>
        a.id.toLowerCase().includes(q) ||
        a.name.toLowerCase().includes(q) ||
        a.email.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.status.toLowerCase().includes(q)
    );
  },

  highRiskCount: () =>
    get().alerts.filter((a) => a.riskLevel === "High Risk").length,

  pendingCount: () =>
    get().alerts.filter(
      (a) => a.status === "Suspicious" || a.status === "Pending"
    ).length,

  frozenCount: () =>
    get().alerts.filter((a) => a.status === "Pending").length,
}));