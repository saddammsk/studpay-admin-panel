import { create } from "zustand";

export type LoanStatus = "Active" | "Pending Approval" | "Under Review" | "Disbursed" | "Defaulted" | "Completed";
export type RiskLevel = "Low" | "Medium" | "High";

export interface LoanEntry {
  id: number;
  loanId: string;
  studentName: string;
  university: string;
  partner: string;
  amount: string;
  amountNum: number;
  disbursedDate: string;
  maturityDate: string;
  status: LoanStatus;
  risk: RiskLevel;
  repaymentProgress: number;
  interestRate: string;
  monthlyPayment: string;
}

export interface NewApplicationForm {
  studentName: string;
  university: string;
  partner: string;
  amount: string;
  interestRate: string;
  maturityDate: string;
}

export interface FinancingState {
  activeTab: string;
  search: string;
  statusFilter: string;
  riskFilter: string;
  partnerFilter: string;
  currentPage: number;
  itemsPerPage: number;
  sortField: keyof LoanEntry | null;
  sortDirection: "asc" | "desc";
  detailModalOpen: boolean;
  detailLoan: LoanEntry | null;
  newAppModalOpen: boolean;
  newAppForm: NewApplicationForm;
  newAppErrors: Partial<Record<keyof NewApplicationForm, string>>;
  setActiveTab: (v: string) => void;
  setSearch: (v: string) => void;
  setStatusFilter: (v: string) => void;
  setRiskFilter: (v: string) => void;
  setPartnerFilter: (v: string) => void;
  setCurrentPage: (p: number) => void;
  setSorting: (f: keyof LoanEntry) => void;
  openDetailModal: (l: LoanEntry) => void;
  closeDetailModal: () => void;
  openNewAppModal: () => void;
  closeNewAppModal: () => void;
  setNewAppField: <K extends keyof NewApplicationForm>(k: K, v: NewApplicationForm[K]) => void;
  validateNewApp: () => boolean;
  resetFilters: () => void;
  exportCSV: () => void;
}

const emptyForm: NewApplicationForm = { studentName: "", university: "", partner: "", amount: "", interestRate: "", maturityDate: "" };

export const LOANS: LoanEntry[] = [
  { id: 1, loanId: "LN-2025-001", studentName: "Adaora Nnamdi", university: "University of Lagos", partner: "EduFund Africa", amount: "€15,000", amountNum: 15000, disbursedDate: "2025-01-15", maturityDate: "2027-01-15", status: "Active", risk: "Low", repaymentProgress: 65, interestRate: "4.5%", monthlyPayment: "€654.17" },
  { id: 2, loanId: "LN-2025-002", studentName: "Blessing Okoro", university: "University of Lagos", partner: "StudyLoan NG", amount: "€12,500", amountNum: 12500, disbursedDate: "2025-01-20", maturityDate: "2026-07-20", status: "Active", risk: "Low", repaymentProgress: 45, interestRate: "5.0%", monthlyPayment: "€694.44" },
  { id: 3, loanId: "LN-2025-003", studentName: "Ifeanyi Chukwu", university: "Nnamdi Azikiwe University", partner: "EduFund Africa", amount: "€8,200", amountNum: 8200, disbursedDate: "2025-02-01", maturityDate: "2026-08-01", status: "Pending Approval", risk: "Medium", repaymentProgress: 0, interestRate: "5.5%", monthlyPayment: "€455.56" },
  { id: 4, loanId: "LN-2025-004", studentName: "Oluwaseun Adebayo", university: "Lagos State University", partner: "Prodigy Finance", amount: "€22,000", amountNum: 22000, disbursedDate: "2024-09-10", maturityDate: "2027-09-10", status: "Active", risk: "Low", repaymentProgress: 78, interestRate: "3.8%", monthlyPayment: "€611.11" },
  { id: 5, loanId: "LN-2025-005", studentName: "Tunde Bakare", university: "Obafemi Awolowo University", partner: "StudyLoan NG", amount: "€10,500", amountNum: 10500, disbursedDate: "2025-01-05", maturityDate: "2026-07-05", status: "Under Review", risk: "High", repaymentProgress: 12, interestRate: "6.2%", monthlyPayment: "€583.33" },
  { id: 6, loanId: "LN-2025-006", studentName: "Chukwuemeka Adekunle", university: "Federal University of Tech…", partner: "EduFund Africa", amount: "€18,750", amountNum: 18750, disbursedDate: "2024-11-15", maturityDate: "2027-05-15", status: "Disbursed", risk: "Low", repaymentProgress: 30, interestRate: "4.2%", monthlyPayment: "€625.00" },
  { id: 7, loanId: "LN-2025-007", studentName: "Chidinma Okafor", university: "University of Nigeria", partner: "Prodigy Finance", amount: "€9,800", amountNum: 9800, disbursedDate: "2024-06-20", maturityDate: "2026-06-20", status: "Active", risk: "Medium", repaymentProgress: 55, interestRate: "5.0%", monthlyPayment: "€408.33" },
  { id: 8, loanId: "LN-2025-008", studentName: "Amaka Eze", university: "University of Benin", partner: "StudyLoan NG", amount: "€14,200", amountNum: 14200, disbursedDate: "2024-08-01", maturityDate: "2026-08-01", status: "Defaulted", risk: "High", repaymentProgress: 22, interestRate: "6.0%", monthlyPayment: "€591.67" },
  { id: 9, loanId: "LN-2025-009", studentName: "Emeka Ugochukwu", university: "Ahmadu Bello University", partner: "EduFund Africa", amount: "€20,000", amountNum: 20000, disbursedDate: "2023-09-01", maturityDate: "2025-09-01", status: "Completed", risk: "Low", repaymentProgress: 100, interestRate: "4.0%", monthlyPayment: "€833.33" },
  { id: 10, loanId: "LN-2025-010", studentName: "Ngozi Obi", university: "University of Ibadan", partner: "Prodigy Finance", amount: "€11,600", amountNum: 11600, disbursedDate: "2025-02-10", maturityDate: "2027-02-10", status: "Pending Approval", risk: "Medium", repaymentProgress: 0, interestRate: "5.2%", monthlyPayment: "€483.33" },
  { id: 11, loanId: "LN-2025-011", studentName: "Yusuf Abdullahi", university: "Bayero University Kano", partner: "EduFund Africa", amount: "€7,500", amountNum: 7500, disbursedDate: "2024-12-01", maturityDate: "2026-06-01", status: "Active", risk: "Low", repaymentProgress: 40, interestRate: "4.8%", monthlyPayment: "€416.67" },
  { id: 12, loanId: "LN-2025-012", studentName: "Fatima Ibrahim", university: "University of Maiduguri", partner: "StudyLoan NG", amount: "€13,300", amountNum: 13300, disbursedDate: "2024-10-15", maturityDate: "2026-10-15", status: "Active", risk: "Medium", repaymentProgress: 58, interestRate: "5.5%", monthlyPayment: "€554.17" },
];

export const useFinancingStore = create<FinancingState>((set, get) => ({
  activeTab: "Loan Ledger",
  search: "",
  statusFilter: "All",
  riskFilter: "All",
  partnerFilter: "All",
  currentPage: 1,
  itemsPerPage: 10,
  sortField: null,
  sortDirection: "asc",
  detailModalOpen: false,
  detailLoan: null,
  newAppModalOpen: false,
  newAppForm: { ...emptyForm },
  newAppErrors: {},
  setActiveTab: (v) => set({ activeTab: v }),
  setSearch: (v) => set({ search: v, currentPage: 1 }),
  setStatusFilter: (v) => set({ statusFilter: v, currentPage: 1 }),
  setRiskFilter: (v) => set({ riskFilter: v, currentPage: 1 }),
  setPartnerFilter: (v) => set({ partnerFilter: v, currentPage: 1 }),
  setCurrentPage: (p) => set({ currentPage: p }),
  setSorting: (f) =>
    set((s) => ({ sortField: f, sortDirection: s.sortField === f && s.sortDirection === "asc" ? "desc" : "asc" })),
  openDetailModal: (l) => set({ detailModalOpen: true, detailLoan: l }),
  closeDetailModal: () => set({ detailModalOpen: false, detailLoan: null }),
  openNewAppModal: () => set({ newAppModalOpen: true, newAppForm: { ...emptyForm }, newAppErrors: {} }),
  closeNewAppModal: () => set({ newAppModalOpen: false, newAppForm: { ...emptyForm }, newAppErrors: {} }),
  setNewAppField: (k, v) =>
    set((s) => ({ newAppForm: { ...s.newAppForm, [k]: v }, newAppErrors: { ...s.newAppErrors, [k]: undefined } })),
  validateNewApp: () => {
    const { newAppForm } = get();
    const errors: Partial<Record<keyof NewApplicationForm, string>> = {};
    if (!newAppForm.studentName.trim()) errors.studentName = "Student name is required";
    if (!newAppForm.university.trim()) errors.university = "University is required";
    if (!newAppForm.partner) errors.partner = "Select a lending partner";
    if (!newAppForm.amount.trim()) errors.amount = "Amount is required";
    if (!newAppForm.maturityDate) errors.maturityDate = "Maturity date is required";
    set({ newAppErrors: errors });
    return Object.keys(errors).length === 0;
  },
  resetFilters: () => set({ search: "", statusFilter: "All", riskFilter: "All", partnerFilter: "All", currentPage: 1 }),
  exportCSV: () => {
    const { search, statusFilter, riskFilter, partnerFilter } = get();
    let data = [...LOANS];
    if (search) { const q = search.toLowerCase(); data = data.filter((r) => r.studentName.toLowerCase().includes(q) || r.loanId.toLowerCase().includes(q) || r.university.toLowerCase().includes(q)); }
    if (statusFilter !== "All") data = data.filter((r) => r.status === statusFilter);
    if (riskFilter !== "All") data = data.filter((r) => r.risk === riskFilter);
    if (partnerFilter !== "All") data = data.filter((r) => r.partner === partnerFilter);
    const headers = ["Loan ID", "Student", "University", "Partner", "Amount", "Disbursed", "Maturity", "Status", "Risk", "Repayment %", "Interest Rate", "Monthly Payment"];
    const rows = data.map((s) => [s.loanId, s.studentName, s.university, s.partner, s.amount, s.disbursedDate, s.maturityDate, s.status, s.risk, String(s.repaymentProgress), s.interestRate, s.monthlyPayment]);
    const escape = (v: string) => v.includes(",") || v.includes('"') || v.includes("\n") ? `"${v.replace(/"/g, '""')}"` : v;
    const csv = [headers, ...rows].map((r) => r.map(escape).join(",")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `loan-ledger-export-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },
}));