import { create } from "zustand";
import { toast } from "sonner";

export type ComplianceDocStatus = "Approved" | "Pending" | "Rejected" | "Missing";

export interface ComplianceDocument {
  id: number;
  title: string;
  date: string;
  status: ComplianceDocStatus;
  fileSize: string;
  fileName: string;
}

type ModalType =
  | "creditReport"
  | "applyPenalty"
  | "gracePeriod"
  | "restructureLoan"
  | "viewDocument"
  | null;

type ExtensionDays = 7 | 14 | 30;

interface FinancingState {
  documents: ComplianceDocument[];

  activeModal: ModalType;
  viewingDocumentId: number | null;

  penaltyReason: string;
  penaltyAmount: string;

  gracePeriodWaiver: boolean;
  extensionDays: ExtensionDays;
  accrueInterest: boolean;
  gracePeriodConfirmed: boolean;

  openModal: (modal: ModalType) => void;
  closeModal: () => void;

  openViewModal: (documentId: number) => void;
  closeViewModal: () => void;
  downloadDocument: (documentId: number) => void;

  setPenaltyReason: (reason: string) => void;
  setPenaltyAmount: (amount: string) => void;
  isPenaltyValid: () => boolean;
  submitPenalty: () => void;

  toggleGracePeriodWaiver: () => void;
  setExtensionDays: (days: ExtensionDays) => void;
  toggleAccrueInterest: () => void;
  toggleGracePeriodConfirmed: () => void;
  isGracePeriodValid: () => boolean;
  submitGracePeriod: () => void;
}

export const useFinancingStore = create<FinancingState>((set, get) => ({
  documents: [
    {
      id: 1,
      title: "Signed Loan Contract",
      date: "Aug 20, 2024",
      status: "Approved",
      fileSize: "1.8 MB",
      fileName: "signed-loan-contract.pdf",
    },
    {
      id: 2,
      title: "Proof of Income/Guarantee",
      date: "Aug 18, 2024",
      status: "Approved",
      fileSize: "2.1 MB",
      fileName: "proof-of-income.pdf",
    },
    {
      id: 3,
      title: "University Enrollment Letter",
      date: "Aug 22, 2024",
      status: "Pending",
      fileSize: "945 KB",
      fileName: "enrollment-letter.pdf",
    },
  ],

  activeModal: null,
  viewingDocumentId: null,

  penaltyReason: "",
  penaltyAmount: "",

  gracePeriodWaiver: false,
  extensionDays: 7,
  accrueInterest: false,
  gracePeriodConfirmed: false,

  openModal: (modal) => set({ activeModal: modal }),

  closeModal: () =>
    set({
      activeModal: null,
      viewingDocumentId: null,
      penaltyReason: "",
      penaltyAmount: "",
      gracePeriodWaiver: false,
      extensionDays: 7,
      accrueInterest: false,
      gracePeriodConfirmed: false,
    }),

  openViewModal: (documentId) =>
    set({ activeModal: "viewDocument", viewingDocumentId: documentId }),

  closeViewModal: () =>
    set({ activeModal: null, viewingDocumentId: null }),

  downloadDocument: (documentId) => {
    const doc = get().documents.find((d) => d.id === documentId);
    if (!doc) return;

    toast.success("Download Started", {
      description: `${doc.title} (${doc.fileSize}) is being downloaded.`,
    });
  },

  setPenaltyReason: (reason) => set({ penaltyReason: reason }),

  setPenaltyAmount: (amount) => set({ penaltyAmount: amount }),

  isPenaltyValid: () => {
    const { penaltyReason, penaltyAmount } = get();
    return (
      penaltyReason !== "" &&
      penaltyAmount !== "" &&
      !isNaN(Number(penaltyAmount))
    );
  },

  submitPenalty: () => {
    const state = get();
    if (!state.isPenaltyValid()) return;

    toast.success("Penalty Applied", {
      description: `€${state.penaltyAmount} penalty for: ${state.penaltyReason}`,
    });

    state.closeModal();
  },

  toggleGracePeriodWaiver: () =>
    set((s) => ({ gracePeriodWaiver: !s.gracePeriodWaiver })),

  setExtensionDays: (days) => set({ extensionDays: days }),

  toggleAccrueInterest: () =>
    set((s) => ({ accrueInterest: !s.accrueInterest })),

  toggleGracePeriodConfirmed: () =>
    set((s) => ({ gracePeriodConfirmed: !s.gracePeriodConfirmed })),

  isGracePeriodValid: () => get().gracePeriodConfirmed,

  submitGracePeriod: () => {
    const state = get();
    if (!state.isGracePeriodValid()) return;

    toast.success("Grace Period Granted", {
      description: `${state.extensionDays}-day extension${state.gracePeriodWaiver ? " with late fee waiver" : ""}${state.accrueInterest ? ", interest accruing" : ""}`,
    });

    state.closeModal();
  },
}));