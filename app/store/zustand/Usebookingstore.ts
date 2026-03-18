import { create } from "zustand";

export type StepStatus = "complete" | "active" | "pending";
export type EvidenceCategory = "All" | "Documents" | "Keys" | "Utility Meters" | "Room Condition";
export type ConfirmationStatus = "RECEIVED" | "DELIVERED" | "PENDING";
export type EvidenceIcon = "document" | "key" | "meter" | "room";
export type ChecklistIcon = "document" | "eye" | "pen";
export type PipelineStatus = "Completed" | "Move-in Scheduled" | "Contract Signed" | "Documents Pending" | "Fee Paid (€299)";

export interface BookingStep {
  id: string;
  label: string;
  sublabel: string;
  status: StepStatus;
}

export interface ChecklistItem {
  id: string;
  label: string;
  checked: boolean;
  icon: ChecklistIcon;
}

export interface EvidenceItem {
  id: string;
  category: Exclude<EvidenceCategory, "All">;
  title: string;
  date: string;
  time: string;
  icon: EvidenceIcon;
}

export interface Confirmation {
  id: string;
  role: "student" | "landlord";
  name: string;
  person: string;
  date: string;
  status: ConfirmationStatus;
}

export type DisputeReason =
  | "Payment not received"
  | "Contract dispute"
  | "Property condition"
  | "Other";

export interface DisputeForm {
  reason: DisputeReason | "";
  details: string;
}

export interface DisputeErrors {
  reason?: string;
  details?: string;
}

export type ModalType = "dispute" | "confirm_payment" | "release_rent" | "reject_handover" | null;

const initialSteps: BookingStep[] = [
  { id: "fee_paid",        label: "Fee Paid",        sublabel: "Booking fee received", status: "complete" },
  { id: "contract_signed", label: "Contract Signed", sublabel: "Agreement executed",   status: "active"   },
  { id: "key_handover",    label: "Key Handover",    sublabel: "Keys transferred",      status: "pending"  },
  { id: "funds_released",  label: "Funds Released",  sublabel: "Payment to landlord",   status: "pending"  },
];

const initialChecklist: ChecklistItem[] = [
  { id: "1", label: "Documents match the student's ID?",              checked: false, icon: "document" },
  { id: "2", label: "Utility meter readings are clearly visible?",    checked: false, icon: "eye"      },
  { id: "3", label: "Digital signature of the landlord is present?",  checked: false, icon: "pen"      },
];

const initialEvidence: EvidenceItem[] = [
  { id: "1", category: "Documents",       title: "Signed Check-in Report",   date: "Feb 10, 2026", time: "14:32", icon: "document" },
  { id: "2", category: "Keys",            title: "Front Door Keys",           date: "Feb 10, 2026", time: "14:35", icon: "key"      },
  { id: "3", category: "Utility Meters",  title: "Electric Meter Reading",    date: "Feb 10, 2026", time: "14:38", icon: "meter"    },
  { id: "4", category: "Utility Meters",  title: "Gas Meter Reading",         date: "Feb 10, 2026", time: "14:40", icon: "meter"    },
  { id: "5", category: "Room Condition",  title: "Living Room Condition",     date: "Feb 10, 2026", time: "14:42", icon: "room"     },
  { id: "6", category: "Room Condition",  title: "Bathroom Condition",        date: "Feb 10, 2026", time: "14:44", icon: "room"     },
];

const initialConfirmations: Confirmation[] = [
  { id: "1", role: "student",  name: "Student Confirmation",  person: "Ahmed Khan",    date: "Feb 10, 2026", status: "RECEIVED"  },
  { id: "2", role: "landlord", name: "Landlord Confirmation", person: "Mr. Rashid Ali", date: "Feb 10, 2026", status: "DELIVERED" },
];

const defaultDisputeForm = (): DisputeForm => ({ reason: "", details: "" });

const validateDispute = (f: DisputeForm): DisputeErrors => {
  const e: DisputeErrors = {};
  if (!f.reason)         e.reason  = "Please select a reason.";
  if (!f.details.trim()) e.details = "Please provide details.";
  return e;
};

interface BookingState {
  currentPage: 1 | 2 | 3;
  steps: BookingStep[];
  paymentConfirmed: boolean;
  contractVerified: boolean;

  activeEvidenceCategory: EvidenceCategory;
  evidenceItems: EvidenceItem[];
  checklist: ChecklistItem[];
  confirmations: Confirmation[];
  handoverApproved: boolean;
  handoverRejected: boolean;
  handoverActionLoading: "approve" | "reject" | null;

  fundsReleaseLoading: boolean;
  fundsReleased: boolean;

  activeModal: ModalType;
  disputeForm: DisputeForm;
  disputeErrors: DisputeErrors;
  disputeSubmitted: boolean;

  rejectReason: string;
  rejectReasonError: string;

  goToPage: (page: 1 | 2 | 3) => void;

  confirmPayment: () => void;
  verifyContract: () => void;

  setEvidenceCategory: (cat: EvidenceCategory) => void;
  toggleChecklist: (id: string) => void;
  filteredEvidence: () => EvidenceItem[];
  checkedCount: () => number;
  allChecked: () => boolean;

  approveHandover: () => void;
  rejectHandover: () => void;

  releaseRent: () => void;

  openModal: (type: ModalType) => void;
  closeModal: () => void;

  setDisputeField: <K extends keyof DisputeForm>(key: K, value: DisputeForm[K]) => void;
  submitDispute: () => boolean;

  setRejectReason: (r: string) => void;
  submitRejectHandover: () => boolean;
}

const advanceSteps = (steps: BookingStep[], completedId: string, nextActiveId?: string): BookingStep[] =>
  steps.map((s) => {
    if (s.id === completedId) return { ...s, status: "complete" };
    if (nextActiveId && s.id === nextActiveId) return { ...s, status: "active" };
    return s;
  });

export const useBookingStore = create<BookingState>()((set, get) => ({
  currentPage: 1,
  steps: initialSteps,
  paymentConfirmed: false,
  contractVerified: false,

  activeEvidenceCategory: "All",
  evidenceItems: initialEvidence,
  checklist: initialChecklist,
  confirmations: initialConfirmations,
  handoverApproved: false,
  handoverRejected: false,
  handoverActionLoading: null,

  fundsReleaseLoading: false,
  fundsReleased: false,

  activeModal: null,
  disputeForm: defaultDisputeForm(),
  disputeErrors: {},
  disputeSubmitted: false,

  rejectReason: "",
  rejectReasonError: "",

  goToPage: (page) => set({ currentPage: page }),

  confirmPayment: () =>
    set((s) => ({
      paymentConfirmed: true,
      steps: advanceSteps(s.steps, "fee_paid", "contract_signed"),
      activeModal: null,
    })),

  verifyContract: () =>
    set((s) => ({
      contractVerified: true,
      currentPage: 2,
      steps: advanceSteps(s.steps, "contract_signed", "key_handover"),
    })),

  setEvidenceCategory: (cat) => set({ activeEvidenceCategory: cat }),

  toggleChecklist: (id) =>
    set((s) => ({
      checklist: s.checklist.map((i) => (i.id === id ? { ...i, checked: !i.checked } : i)),
    })),

  filteredEvidence: () => {
    const { evidenceItems, activeEvidenceCategory } = get();
    return activeEvidenceCategory === "All"
      ? evidenceItems
      : evidenceItems.filter((i) => i.category === activeEvidenceCategory);
  },

  checkedCount: () => get().checklist.filter((i) => i.checked).length,

  allChecked: () => get().checklist.every((i) => i.checked),

  approveHandover: () => {
    set({ handoverActionLoading: "approve" });
    setTimeout(() =>
      set((s) => ({
        handoverApproved: true,
        handoverActionLoading: null,
        currentPage: 3,
        steps: advanceSteps(s.steps, "key_handover", "funds_released"),
      })), 1500);
  },

  rejectHandover: () => {
    const { rejectReason } = get();
    if (!rejectReason.trim()) {
      set({ rejectReasonError: "Please provide a reason for rejection." });
      return;
    }
    set({ handoverActionLoading: "reject" });
    setTimeout(() =>
      set({ handoverRejected: true, handoverActionLoading: null, activeModal: null, rejectReason: "", rejectReasonError: "" }),
      1500);
  },

  releaseRent: () => {
    set({ fundsReleaseLoading: true });
    setTimeout(() =>
      set((s) => ({
        fundsReleaseLoading: false,
        fundsReleased: true,
        steps: advanceSteps(s.steps, "funds_released"),
        activeModal: null,
      })), 1800);
  },

  openModal: (type) =>
    set({
      activeModal: type,
      disputeForm: defaultDisputeForm(),
      disputeErrors: {},
      rejectReason: "",
      rejectReasonError: "",
    }),

  closeModal: () =>
    set({
      activeModal: null,
      disputeForm: defaultDisputeForm(),
      disputeErrors: {},
      rejectReason: "",
      rejectReasonError: "",
    }),

  setDisputeField: (key, value) =>
    set((s) => ({
      disputeForm:   { ...s.disputeForm,   [key]: value     },
      disputeErrors: { ...s.disputeErrors, [key]: undefined },
    })),

  submitDispute: () => {
    const { disputeForm } = get();
    const errors = validateDispute(disputeForm);
    if (Object.keys(errors).length) { set({ disputeErrors: errors }); return false; }
    set({ disputeSubmitted: true, activeModal: null, disputeForm: defaultDisputeForm(), disputeErrors: {} });
    return true;
  },

  setRejectReason: (r) => set({ rejectReason: r, rejectReasonError: "" }),

  submitRejectHandover: () => {
    const { rejectReason } = get();
    if (!rejectReason.trim()) {
      set({ rejectReasonError: "Please provide a reason." });
      return false;
    }
    set({ handoverActionLoading: "reject" });
    setTimeout(() =>
      set({ handoverRejected: true, handoverActionLoading: null, activeModal: null, rejectReason: "", rejectReasonError: "" }),
      1500);
    return true;
  },
}));