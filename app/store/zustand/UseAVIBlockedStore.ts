import { create } from "zustand";

export type PipelineStatus =
  | "Payment Pending"
  | "Funds Received"
  | "Locked"
  | "AVI Issued";

export type VerificationStatus =
  | "Verified"
  | "Pending Review"
  | "Rejected"
  | "Requires Documents";

export interface Student {
  id: number;
  name: string;
  studentId: string;
  university: string;
  country: string; 
  amount: string;
  pipeline: PipelineStatus;
  verification: VerificationStatus;
  sla: {
    icon: string;
    time: string;
  };
  modified: {
    icon: string;
    name: string;
    date: string;
  };
}

export interface RefundForm {
  reason: string;
  justification: string;
  file: File | null;
}

export interface BlockedState {
  sidebarCollapsed: boolean;
  search: string;
  statusFilter: string;
  countryFilter: string; 
  currentPage: number;
  itemsPerPage: number;
  sortField: keyof Student | null;
  sortDirection: "asc" | "desc";
  detailModalOpen: boolean;
  detailStudent: Student | null;
  approveModalOpen: boolean;
  approveStudent: Student | null;
  refundModalOpen: boolean;
  refundStudent: Student | null;
  refundForm: RefundForm;
  refundErrors: Partial<Record<keyof RefundForm, string>>;

  openDetailModal: (s: Student) => void;
  closeDetailModal: () => void;
  toggleSidebar: () => void;

  setSearch: (v: string) => void;
  setStatusFilter: (v: string) => void;
  setCountryFilter: (v: string) => void; 

  setCurrentPage: (p: number) => void;
  setSorting: (f: keyof Student) => void;

  openApproveModal: (s: Student) => void;
  closeApproveModal: () => void;

  openRefundModal: (s: Student) => void;
  closeRefundModal: () => void;

  setRefundField: <K extends keyof RefundForm>(k: K, v: RefundForm[K]) => void;

  validateRefundForm: () => boolean;

  resetFilters: () => void;
  exportCSV: () => void;
}

const emptyRefund: RefundForm = { reason: "", justification: "", file: null };

export const STUDENTS: Student[] = [
  { id: 1, name: "Adaora Nnamdi", studentId: "STU_78234", university: "University of Lagos", country: "Nigeria", amount: "10.332,00 €", pipeline: "Payment Pending", verification: "Verified", sla: { icon: "/images/clock-gray.svg", time: "21h 59m" }, modified: { icon: "/images/user-icon3.svg", name: "Sarah Chen", date: "Jan 29, 15:04" } },
  { id: 2, name: "Blessing Okoro", studentId: "STU_67234", university: "University of Lagos", country: "Nigeria", amount: "10.332,00 €", pipeline: "Payment Pending", verification: "Pending Review", sla: { icon: "/images/clock-gray.svg", time: "19h 59m" }, modified: { icon: "/images/user-icon3.svg", name: "Sarah Chen", date: "Jan 29, 15:04" } },
  { id: 3, name: "Ifeanyi Chukwu", studentId: "STU_12890", university: "Nnamdi Azikiwe University", country: "Nigeria", amount: "10.332,00 €", pipeline: "Payment Pending", verification: "Rejected", sla: { icon: "/images/clock-gray.svg", time: "22h 59m" }, modified: { icon: "/images/user-icon3.svg", name: "Fatima Ibrahim", date: "Jan 29, 16:04" } },
  { id: 4, name: "Oluwaseun Adebayo", studentId: "STU_91456", university: "Lagos State University", country: "Nigeria", amount: "10.332,00 €", pipeline: "Funds Received", verification: "Verified", sla: { icon: "/images/clock-gray.svg", time: "17h 59m" }, modified: { icon: "/images/user-icon3.svg", name: "Emmanuel Adeyemi", date: "Jan 29, 11:04" } },
  { id: 5, name: "Tunde Bakare", studentId: "STU_89012", university: "Obafemi Awolowo University", country: "Nigeria", amount: "10.332,00 €", pipeline: "Funds Received", verification: "Requires Documents", sla: { icon: "/images/clock-gray.svg", time: "11h 59m" }, modified: { icon: "/images/user-icon3.svg", name: "Emmanuel Adeyemi", date: "Jan 29, 05:04" } },
  { id: 6, name: "Chukwuemeka Adekunle", studentId: "STU_90123", university: "Federal University of Tech…", country: "Nigeria", amount: "10.332,00 €", pipeline: "Funds Received", verification: "Verified", sla: { icon: "/images/clock-gray.svg", time: "20h 59m" }, modified: { icon: "/images/user-icon3.svg", name: "Emmanuel Adeyemi", date: "Jan 29, 14:04" } },
  { id: 7, name: "Chidinma Okafor", studentId: "STU_45678", university: "University of Nigeria", country: "Nigeria", amount: "10.332,00 €", pipeline: "Locked", verification: "Verified", sla: { icon: "/images/clock-yellow.svg", time: "0h 14m" }, modified: { icon: "/images/user-icon3.svg", name: "Michael Okonkwo", date: "Jan 28, 17:04" } },
  { id: 8, name: "Amaka Eze", studentId: "STU_34567", university: "University of Benin", country: "Nigeria", amount: "10.332,00 €", pipeline: "Locked", verification: "Verified", sla: { icon: "/images/clock-gray.svg", time: "3h 59m" }, modified: { icon: "/images/user-icon3.svg", name: "Michael Okonkwo", date: "Jan 29, 09:04" } },
  { id: 9, name: "Emeka Ugochukwu", studentId: "STU_23891", university: "Ahmadu Bello University", country: "Nigeria", amount: "10.332,00 €", pipeline: "AVI Issued", verification: "Verified", sla: { icon: "/images/checkgreendark.svg", time: "Complete" }, modified: { icon: "/images/user-icon3.svg", name: "Fatima Ibrahim", date: "Jan 27, 17:04" } },
  { id: 10, name: "Ngozi Obi", studentId: "STU_56789", university: "University of Ibadan", country: "Nigeria", amount: "10.332,00 €", pipeline: "AVI Issued", verification: "Verified", sla: { icon: "/images/checkgreendark.svg", time: "Complete" }, modified: { icon: "/images/user-icon3.svg", name: "Sarah Chen", date: "Jan 25, 17:04" } },
];

export const useBlockedStore = create<BlockedState>((set, get) => ({
  sidebarCollapsed: false,
  search: "",
  statusFilter: "All",
  countryFilter: "All Countries", 
  currentPage: 1,
  itemsPerPage: 10,
  sortField: null,
  sortDirection: "asc",
  detailModalOpen: false,
  detailStudent: null,
  approveModalOpen: false,
  approveStudent: null,
  refundModalOpen: false,
  refundStudent: null,
  refundForm: { ...emptyRefund },
  refundErrors: {},

  openDetailModal: (s) => set({ detailModalOpen: true, detailStudent: s }),
  closeDetailModal: () => set({ detailModalOpen: false, detailStudent: null }),

  toggleSidebar: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),

  setSearch: (v) => set({ search: v, currentPage: 1 }),

  setStatusFilter: (v) => set({ statusFilter: v, currentPage: 1 }),

  setCountryFilter: (v) => set({ countryFilter: v, currentPage: 1 }),

  setCurrentPage: (p) => set({ currentPage: p }),

  setSorting: (f) =>
    set((s) => ({
      sortField: f,
      sortDirection: s.sortField === f && s.sortDirection === "asc" ? "desc" : "asc",
    })),

  openApproveModal: (s) => set({ approveModalOpen: true, approveStudent: s }),
  closeApproveModal: () => set({ approveModalOpen: false, approveStudent: null }),

  openRefundModal: (s) =>
    set({ refundModalOpen: true, refundStudent: s, refundForm: { ...emptyRefund }, refundErrors: {} }),

  closeRefundModal: () =>
    set({ refundModalOpen: false, refundStudent: null, refundForm: { ...emptyRefund }, refundErrors: {} }),

  setRefundField: (k, v) =>
    set((s) => ({
      refundForm: { ...s.refundForm, [k]: v },
      refundErrors: { ...s.refundErrors, [k]: undefined },
    })),

  validateRefundForm: () => {
    const { refundForm } = get();
    const errors: Partial<Record<keyof RefundForm, string>> = {};

    if (!refundForm.reason || refundForm.reason === "Select rejection reason...")
      errors.reason = "Please select a rejection reason";

    if (!refundForm.justification.trim())
      errors.justification = "Justification is required";
    else if (refundForm.justification.trim().length < 10)
      errors.justification = "Must be at least 10 characters";

    if (!refundForm.file)
      errors.file = "Visa rejection letter is required";

    set({ refundErrors: errors });
    return Object.keys(errors).length === 0;
  },

  resetFilters: () =>
    set({
      search: "",
      statusFilter: "All",
      countryFilter: "All Countries", 
      currentPage: 1,
    }),

  exportCSV: () => {
    const { search, statusFilter, countryFilter } = get();
    let data = [...STUDENTS];

    if (search) {
      const q = search.toLowerCase();
      data = data.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.studentId.toLowerCase().includes(q) ||
          r.university.toLowerCase().includes(q)
      );
    }

    if (statusFilter !== "All") {
      data = data.filter((r) => r.pipeline === statusFilter);
    }

    if (countryFilter !== "All Countries") {
      data = data.filter((r) => r.country === countryFilter);
    }

    const headers = [
      "Student ID",
      "Name",
      "University",
      "Country",
      "Amount",
      "Pipeline Status",
      "Verification",
      "SLA Timer",
      "Modified By",
      "Modified Date",
    ];

    const rows = data.map((s) => [
      s.studentId,
      s.name,
      s.university,
      s.country,
      s.amount,
      s.pipeline,
      s.verification,
      s.sla.time,
      s.modified.name,
      s.modified.date,
    ]);

    const escape = (v: string) =>
      v.includes(",") || v.includes('"') || v.includes("\n")
        ? `"${v.replace(/"/g, '""')}"`
        : v;

    const csv = [headers, ...rows].map((r) => r.map(escape).join(",")).join("\n");

    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `avi-blocked-export-${new Date().toISOString().slice(0, 10)}.csv`;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  },
}));