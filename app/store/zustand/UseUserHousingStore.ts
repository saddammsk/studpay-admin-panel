import { create } from "zustand";
import { toast } from "sonner";

export type LeaseStatus = "Active Lease" | "Terminated" | "Pending Termination";

export type DocumentVerification = "verified" | "pending" | "expired";

export interface HousingDocument {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  fileSize: string;
  verification: DocumentVerification;
}

export type PaymentStatus = "Paid" | "Pending" | "Overdue" | "Scheduled";

export interface PaymentRecord {
  id: string;
  month: string;
  amount: string;
  status: PaymentStatus;
  paidDate?: string;
}

interface HousingInfo {
  propertyName: string;
  address: string;
  room: string;
  leaseStart: string;
  leaseEnd: string;
  monthlyRent: string;
  leaseStatus: LeaseStatus;
  securityDeposit: string;
  coverageAmount: string;
  guaranteeProvider: string;
  policyNumber: string;
  coverageType: string;
  annualPremium: string;
}

interface HousingState {
  housing: HousingInfo;
  documents: HousingDocument[];
  payments: PaymentRecord[];

  isTerminateModalOpen: boolean;
  isTerminating: boolean;
  openTerminateModal: () => void;
  closeTerminateModal: () => void;
  confirmTerminate: () => void;

  isRecordPaymentModalOpen: boolean;
  recordPaymentMonth: string;
  recordPaymentAmount: string;
  isRecordingPayment: boolean;
  openRecordPaymentModal: () => void;
  closeRecordPaymentModal: () => void;
  setRecordPaymentMonth: (month: string) => void;
  setRecordPaymentAmount: (amount: string) => void;
  confirmRecordPayment: () => void;

  isContactLandlordModalOpen: boolean;
  contactSubject: string;
  contactMessage: string;
  isSendingMessage: boolean;
  openContactLandlordModal: () => void;
  closeContactLandlordModal: () => void;
  setContactSubject: (subject: string) => void;
  setContactMessage: (message: string) => void;
  confirmContactLandlord: () => void;

  isViewDocumentModalOpen: boolean;
  viewingDocumentId: string | null;
  openViewDocumentModal: (documentId: string) => void;
  closeViewDocumentModal: () => void;
  downloadDocument: (documentId: string) => void;

  isInsurancePolicyModalOpen: boolean;
  openInsurancePolicyModal: () => void;
  closeInsurancePolicyModal: () => void;
}

export const useHousingStore = create<HousingState>((set, get) => ({
  housing: {
    propertyName: "Student Residence Lyon",
    address: "45 Rue de la République, 69002 Lyon, France",
    room: "Room 402",
    leaseStart: "Sept 1, 2024",
    leaseEnd: "Aug 31, 2025",
    monthlyRent: "€650",
    leaseStatus: "Active Lease",
    securityDeposit: "1,200",
    coverageAmount: "€15,600",
    guaranteeProvider: "StudPay Guarantee",
    policyNumber: "MRH-2024-98765",
    coverageType: "Comprehensive",
    annualPremium: "€89.00",
  },

  documents: [
    {
      id: "hdoc-1",
      title: "Lease Agreement",
      subtitle: "Bail",
      date: "Sept 1, 2024",
      fileSize: "2.4 MB",
      verification: "verified",
    },
    {
      id: "hdoc-2",
      title: "Inventory Report",
      subtitle: "État des Lieux",
      date: "Sept 1, 2024",
      fileSize: "8.1 MB",
      verification: "verified",
    },
    {
      id: "hdoc-3",
      title: "Rent Receipt - January",
      subtitle: "Quittance",
      date: "Jan 5, 2025",
      fileSize: "156 KB",
      verification: "verified",
    },
    {
      id: "hdoc-4",
      title: "Rent Receipt - December",
      subtitle: "Quittance",
      date: "Dec 5, 2024",
      fileSize: "154 KB",
      verification: "verified",
    },
    {
      id: "hdoc-5",
      title: "Insurance Certificate",
      subtitle: "Attestation d'Assurance",
      date: "Sept 15, 2024",
      fileSize: "342 KB",
      verification: "pending",
    },
  ],

  payments: [
    { id: "pay-1", month: "September 2024", amount: "€650", status: "Paid", paidDate: "2024-09-01" },
    { id: "pay-2", month: "October 2024", amount: "€650", status: "Paid", paidDate: "2024-10-01" },
    { id: "pay-3", month: "November 2024", amount: "€650", status: "Paid", paidDate: "2024-11-01" },
    { id: "pay-4", month: "December 2024", amount: "€650", status: "Paid", paidDate: "2024-12-01" },
    { id: "pay-5", month: "January 2025", amount: "€650", status: "Paid", paidDate: "2025-01-05" },
    { id: "pay-6", month: "February 2025", amount: "€650", status: "Pending" },
    { id: "pay-7", month: "March 2025", amount: "€650", status: "Scheduled" },
  ],

  isTerminateModalOpen: false,
  isTerminating: false,

  openTerminateModal: () => set({ isTerminateModalOpen: true, isTerminating: false }),

  closeTerminateModal: () => set({ isTerminateModalOpen: false, isTerminating: false }),

  confirmTerminate: () => {
    set({ isTerminating: true });

    setTimeout(() => {
      set((state) => ({
        housing: { ...state.housing, leaseStatus: "Terminated" },
        isTerminateModalOpen: false,
        isTerminating: false,
      }));

      toast.success("Lease Terminated", {
        description: "The lease termination process has been initiated. Security deposit review is pending.",
      });
    }, 1500);
  },

  isRecordPaymentModalOpen: false,
  recordPaymentMonth: "",
  recordPaymentAmount: "€650",
  isRecordingPayment: false,

  openRecordPaymentModal: () => {
    const { payments } = get();
    const nextPending = payments.find((p) => p.status === "Pending" || p.status === "Scheduled");
    set({
      isRecordPaymentModalOpen: true,
      recordPaymentMonth: nextPending?.month ?? "",
      recordPaymentAmount: nextPending?.amount ?? "€650",
      isRecordingPayment: false,
    });
  },

  closeRecordPaymentModal: () =>
    set({
      isRecordPaymentModalOpen: false,
      recordPaymentMonth: "",
      recordPaymentAmount: "",
      isRecordingPayment: false,
    }),

  setRecordPaymentMonth: (month) => set({ recordPaymentMonth: month }),

  setRecordPaymentAmount: (amount) => set({ recordPaymentAmount: amount }),

  confirmRecordPayment: () => {
    const { recordPaymentMonth } = get();
    if (!recordPaymentMonth) return;

    set({ isRecordingPayment: true });

    setTimeout(() => {
      const now = new Date().toISOString().split("T")[0];

      set((state) => ({
        payments: state.payments.map((p) =>
          p.month === recordPaymentMonth
            ? { ...p, status: "Paid" as PaymentStatus, paidDate: now }
            : p
        ),
        isRecordPaymentModalOpen: false,
        recordPaymentMonth: "",
        recordPaymentAmount: "",
        isRecordingPayment: false,
      }));

      toast.success("Payment Recorded", {
        description: `Rent for ${recordPaymentMonth} has been marked as paid.`,
      });
    }, 1000);
  },

  isContactLandlordModalOpen: false,
  contactSubject: "",
  contactMessage: "",
  isSendingMessage: false,

  openContactLandlordModal: () =>
    set({
      isContactLandlordModalOpen: true,
      contactSubject: "",
      contactMessage: "",
      isSendingMessage: false,
    }),

  closeContactLandlordModal: () =>
    set({
      isContactLandlordModalOpen: false,
      contactSubject: "",
      contactMessage: "",
      isSendingMessage: false,
    }),

  setContactSubject: (subject) => set({ contactSubject: subject }),

  setContactMessage: (message) => set({ contactMessage: message }),

  confirmContactLandlord: () => {
    const { contactSubject, contactMessage } = get();
    if (!contactSubject.trim() || !contactMessage.trim()) return;

    set({ isSendingMessage: true });

    setTimeout(() => {
      set({
        isContactLandlordModalOpen: false,
        contactSubject: "",
        contactMessage: "",
        isSendingMessage: false,
      });

      toast.success("Message Sent", {
        description: "Your support ticket has been created. The landlord will be notified.",
      });
    }, 1000);
  },

  isViewDocumentModalOpen: false,
  viewingDocumentId: null,

  openViewDocumentModal: (documentId) =>
    set({ isViewDocumentModalOpen: true, viewingDocumentId: documentId }),

  closeViewDocumentModal: () =>
    set({ isViewDocumentModalOpen: false, viewingDocumentId: null }),

  downloadDocument: (documentId) => {
    const doc = get().documents.find((d) => d.id === documentId);
    if (!doc) return;

    toast.success("Download Started", {
      description: `${doc.title} (${doc.fileSize}) is being downloaded.`,
    });
  },

  isInsurancePolicyModalOpen: false,

  openInsurancePolicyModal: () => set({ isInsurancePolicyModalOpen: true }),

  closeInsurancePolicyModal: () => set({ isInsurancePolicyModalOpen: false }),
}));