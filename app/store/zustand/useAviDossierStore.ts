import { create } from "zustand";
import { toast } from "sonner";

export type DocumentStatus = "Approved" | "Action Required" | "Missing";

export interface AviDocument {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  iconBg: string;
  status: DocumentStatus;
  actions: ("view" | "upload" | "approve" | "reject")[];
  fileName?: string;
  fileSize?: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: "completed" | "upcoming" | "pending";
  badge?: string;
}

export type ScheduleStatus = "Paid" | "Scheduled" | "On Hold";
export type ScheduleAction = "Hold" | "Resume";

export interface ScheduleEntry {
  id: number;
  month: string;
  scheduledDate: string;
  amount: string;
  status: ScheduleStatus;
  iban: string;
  action?: ScheduleAction;
}

export interface MonthRelease {
  month: string;
  amount: string;
  status: "Released" | "Scheduled" | "Pending";
}

interface StudentInfo {
  name: string;
  dossierId: string;
  university: string;
  statusLabel: string;
  totalBlocked: string;
  monthlyRelease: string;
}

interface SummaryCard {
  label: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: string;
  iconBg: string;
}

interface AviDossierState {
  student: StudentInfo;
  summaryCards: SummaryCard[];
  documents: AviDocument[];
  timeline: TimelineEvent[];
  releasedAmount: string;
  remainingAmount: string;
  scheduleEntries: ScheduleEntry[];

  isRejectModalOpen: boolean;
  rejectingDocumentId: string | null;
  rejectionReason: string;
  openRejectModal: (documentId: string) => void;
  closeRejectModal: () => void;
  setRejectionReason: (reason: string) => void;
  confirmRejection: () => void;

  isViewModalOpen: boolean;
  viewingDocument: AviDocument | null;
  openViewModal: (documentId: string) => void;
  closeViewModal: () => void;

  isApproveModalOpen: boolean;
  approvingDocumentId: string | null;
  openApproveModal: (documentId: string) => void;
  closeApproveModal: () => void;
  confirmApproval: () => void;

  isUploadModalOpen: boolean;
  uploadingDocumentId: string | null;
  uploadFileName: string;
  uploadFileSize: string;
  uploadProgress: number;
  isUploading: boolean;
  openUploadModal: (documentId: string) => void;
  closeUploadModal: () => void;
  setUploadFile: (fileName: string, fileSize: string) => void;
  confirmUpload: () => void;

  holdEntry: (id: number) => void;
  resumeEntry: (id: number) => void;
  copyIban: (iban: string) => void;
}

const initialScheduleEntries: ScheduleEntry[] = [
  { id: 1, month: "September 2024", scheduledDate: "2024-09-01", amount: "€863", status: "Paid", iban: "DE89 3704 0044 0532 0138 00" },
  { id: 2, month: "October 2024", scheduledDate: "2024-10-01", amount: "€863", status: "Paid", iban: "DE89 3704 0044 0532 0138 00" },
  { id: 3, month: "November 2024", scheduledDate: "2024-11-01", amount: "€863", status: "Paid", iban: "DE89 3704 0044 0532 0138 00" },
  { id: 4, month: "December 2024", scheduledDate: "2024-12-01", amount: "€863", status: "Scheduled", iban: "DE89 3704 0044 0532 0138 00", action: "Hold" },
  { id: 5, month: "January 2025", scheduledDate: "2025-01-01", amount: "€863", status: "Scheduled", iban: "DE89 3704 0044 0532 0138 00", action: "Hold" },
  { id: 6, month: "February 2025", scheduledDate: "2025-02-01", amount: "€863", status: "On Hold", iban: "DE89 3704 0044 0532 0138 00", action: "Resume" },
  { id: 7, month: "March 2025", scheduledDate: "2025-03-01", amount: "€863", status: "Scheduled", iban: "DE89 3704 0044 0532 0138 00", action: "Hold" },
  { id: 8, month: "April 2025", scheduledDate: "2025-04-01", amount: "€863", status: "Scheduled", iban: "DE89 3704 0044 0532 0138 00", action: "Hold" },
  { id: 9, month: "May 2025", scheduledDate: "2025-05-01", amount: "€863", status: "Scheduled", iban: "DE89 3704 0044 0532 0138 00", action: "Hold" },
  { id: 10, month: "June 2025", scheduledDate: "2025-06-01", amount: "€863", status: "Scheduled", iban: "DE89 3704 0044 0532 0138 00", action: "Hold" },
  { id: 11, month: "July 2025", scheduledDate: "2025-07-01", amount: "€863", status: "Scheduled", iban: "DE89 3704 0044 0532 0138 00", action: "Hold" },
  { id: 12, month: "August 2025", scheduledDate: "2025-08-01", amount: "€863", status: "Scheduled", iban: "DE89 3704 0044 0532 0138 00", action: "Hold" },
];

export const useAviDossierStore = create<AviDossierState>((set, get) => ({
  student: {
    name: "Marie Dubois",
    dossierId: "AVI-2024-0892",
    university: "Technical University of Munich",
    statusLabel: "Action Required",
    totalBlocked: "€10,356",
    monthlyRelease: "€863/mo",
  },

  summaryCards: [
    {
      label: "Total AVI Value",
      value: "€2.4M",
      change: "+12.5% from last month",
      changeType: "positive",
      icon: "/images/price-arrow-green.svg",
      iconBg: "bg-green53/10",
    },
    {
      label: "Active Dossiers",
      value: "234",
      change: "+18 new this week",
      changeType: "positive",
      icon: "/images/user-blue2.svg",
      iconBg: "bg-blue1400/10",
    },
    {
      label: "Pending Reviews",
      value: "12",
      change: "3 urgent",
      changeType: "negative",
      icon: "/images/file-check-icon.svg",
      iconBg: "bg-yellow-1100/10",
    },
    {
      label: "Compliance Alerts",
      value: "2",
      change: "Action required",
      changeType: "negative",
      icon: "/images/warning.svg",
      iconBg: "bg-red2100/10",
    },
  ],

  documents: [
    {
      id: "doc-1",
      title: "Attestation de Blocage",
      subtitle: "Attestation de Blocage",
      icon: "/icons/sheild-greendark.svg",
      iconBg: "bg-green53/10",
      status: "Approved",
      actions: ["view", "upload"],
      fileName: "attestation-blocage.pdf",
      fileSize: "1.2 MB",
    },
    {
      id: "doc-2",
      title: "Passport Copy",
      subtitle: "Uploaded 2024-08-10",
      icon: "/icons/card-green.svg",
      iconBg: "bg-green53/10",
      status: "Approved",
      actions: ["view", "upload"],
      fileName: "passport-marie-dubois.pdf",
      fileSize: "3.4 MB",
    },
    {
      id: "doc-3",
      title: "Source of Funds",
      subtitle: "Uploaded 2024-08-20",
      icon: "/images/wallet-icon.svg",
      iconBg: "bg-lighrgrey36",
      status: "Action Required",
      actions: ["view", "approve", "reject", "upload"],
      fileName: "source-of-funds.pdf",
      fileSize: "890 KB",
    },
    {
      id: "doc-4",
      title: "Visa Grant",
      subtitle: "",
      icon: "/icons/palne-icon.svg",
      iconBg: "bg-red2100/10",
      status: "Missing",
      actions: ["upload"],
    },
  ],

  timeline: [
    {
      id: "tl-1",
      date: "Aug 15, 2024",
      title: "Funds Received",
      description: "Initial deposit of €10,356 received from student",
      type: "completed",
    },
    {
      id: "tl-2",
      date: "Aug 20, 2024",
      title: "Account Activated",
      description: "Blocked account successfully activated",
      type: "completed",
    },
    {
      id: "tl-3",
      date: "Sep 1, 2024",
      title: "First Payout",
      description: "First monthly release of €863 processed",
      type: "completed",
    },
    {
      id: "tl-4",
      date: "Dec 1, 2024",
      title: "Next Payout",
      description: "Upcoming monthly release scheduled",
      type: "upcoming",
      badge: "Next",
    },
    {
      id: "tl-5",
      date: "Aug 1, 2025",
      title: "Account Closure",
      description: "Final payout and account closure",
      type: "pending",
    },
  ],

  releasedAmount: "€2,589",
  remainingAmount: "€7,767",

  scheduleEntries: initialScheduleEntries,

  isRejectModalOpen: false,
  rejectingDocumentId: null,
  rejectionReason: "",

  openRejectModal: (documentId) =>
    set({
      isRejectModalOpen: true,
      rejectingDocumentId: documentId,
      rejectionReason: "",
    }),

  closeRejectModal: () =>
    set({
      isRejectModalOpen: false,
      rejectingDocumentId: null,
      rejectionReason: "",
    }),

  setRejectionReason: (rejectionReason) => set({ rejectionReason }),

  confirmRejection: () => {
    const { rejectingDocumentId, rejectionReason } = get();
    if (!rejectingDocumentId || !rejectionReason.trim()) return;

    const doc = get().documents.find((d) => d.id === rejectingDocumentId);

    set((state) => ({
      documents: state.documents.map((d) =>
        d.id === rejectingDocumentId
          ? {
              ...d,
              status: "Missing" as DocumentStatus,
              icon: "/icons/palne-icon.svg",
              iconBg: "bg-red2100/10",
              actions: ["upload"] as AviDocument["actions"],
              fileName: undefined,
              fileSize: undefined,
            }
          : d
      ),
      isRejectModalOpen: false,
      rejectingDocumentId: null,
      rejectionReason: "",
    }));

    toast.success("Document Rejected", {
      description: `${doc?.title ?? "Document"} — ${rejectionReason.trim()}`,
    });
  },

  isViewModalOpen: false,
  viewingDocument: null,

  openViewModal: (documentId) => {
    const doc = get().documents.find((d) => d.id === documentId);
    if (!doc) return;
    set({ isViewModalOpen: true, viewingDocument: { ...doc } });
  },

  closeViewModal: () =>
    set({ isViewModalOpen: false, viewingDocument: null }),

  isApproveModalOpen: false,
  approvingDocumentId: null,

  openApproveModal: (documentId) =>
    set({ isApproveModalOpen: true, approvingDocumentId: documentId }),

  closeApproveModal: () =>
    set({ isApproveModalOpen: false, approvingDocumentId: null }),

  confirmApproval: () => {
    const { approvingDocumentId } = get();
    if (!approvingDocumentId) return;

    const doc = get().documents.find((d) => d.id === approvingDocumentId);

    set((state) => ({
      documents: state.documents.map((d) =>
        d.id === approvingDocumentId
          ? {
              ...d,
              status: "Approved" as DocumentStatus,
              icon: "/icons/sheild-greendark.svg",
              iconBg: "bg-green53/10",
              actions: ["view", "upload"] as AviDocument["actions"],
            }
          : d
      ),
      isApproveModalOpen: false,
      approvingDocumentId: null,
    }));

    toast.success("Document Approved", {
      description: `${doc?.title ?? "Document"} has been approved.`,
    });
  },

  isUploadModalOpen: false,
  uploadingDocumentId: null,
  uploadFileName: "",
  uploadFileSize: "",
  uploadProgress: 0,
  isUploading: false,

  openUploadModal: (documentId) =>
    set({
      isUploadModalOpen: true,
      uploadingDocumentId: documentId,
      uploadFileName: "",
      uploadFileSize: "",
      uploadProgress: 0,
      isUploading: false,
    }),

  closeUploadModal: () =>
    set({
      isUploadModalOpen: false,
      uploadingDocumentId: null,
      uploadFileName: "",
      uploadFileSize: "",
      uploadProgress: 0,
      isUploading: false,
    }),

  setUploadFile: (fileName, fileSize) =>
    set({ uploadFileName: fileName, uploadFileSize: fileSize }),

  confirmUpload: () => {
    const { uploadingDocumentId, uploadFileName, uploadFileSize } = get();
    if (!uploadingDocumentId || !uploadFileName) return;

    set({ isUploading: true, uploadProgress: 0 });

    const interval = setInterval(() => {
      const current = get().uploadProgress;
      if (current >= 100) {
        clearInterval(interval);

        const doc = get().documents.find((d) => d.id === uploadingDocumentId);
        const now = new Date();
        const formatted = now.toISOString().split("T")[0];

        set((state) => ({
          documents: state.documents.map((d) =>
            d.id === uploadingDocumentId
              ? {
                  ...d,
                  status: "Action Required" as DocumentStatus,
                  subtitle: `Uploaded ${formatted}`,
                  icon: "/images/wallet-icon.svg",
                  iconBg: "bg-lighrgrey36",
                  actions: ["view", "approve", "reject", "upload"] as AviDocument["actions"],
                  fileName: uploadFileName,
                  fileSize: uploadFileSize,
                }
              : d
          ),
          isUploadModalOpen: false,
          uploadingDocumentId: null,
          uploadFileName: "",
          uploadFileSize: "",
          uploadProgress: 0,
          isUploading: false,
        }));

        toast.success("Document Uploaded", {
          description: `${doc?.title ?? "Document"} — ${uploadFileName}`,
        });

        return;
      }
      set({ uploadProgress: Math.min(current + 20, 100) });
    }, 200);
  },

  holdEntry: (id) =>
    set((state) => ({
      scheduleEntries: state.scheduleEntries.map((entry) =>
        entry.id === id
          ? { ...entry, status: "On Hold" as ScheduleStatus, action: "Resume" as ScheduleAction }
          : entry
      ),
    })),

  resumeEntry: (id) =>
    set((state) => ({
      scheduleEntries: state.scheduleEntries.map((entry) =>
        entry.id === id
          ? { ...entry, status: "Scheduled" as ScheduleStatus, action: "Hold" as ScheduleAction }
          : entry
      ),
    })),

  copyIban: (iban) => {
    navigator.clipboard
      .writeText(iban.replace(/\s/g, ""))
      .then(() => {
        toast.success("IBAN Copied", {
          description: iban,
        });
      })
      .catch(() => {
        toast.error("Failed to copy IBAN");
      });
  },
}));