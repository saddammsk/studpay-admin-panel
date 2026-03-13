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
    dossierId: "AVI-2024- 0892",
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
    },
    {
      id: "doc-2",
      title: "Passport Copy",
      subtitle: "Uploaded 2024-08-10",
      icon: "/icons/card-green.svg",
      iconBg: "bg-green53/10",
      status: "Approved",
      actions: ["view", "upload"],
    },
    {
      id: "doc-3",
      title: "Source of Funds",
      subtitle: "Uploaded 2024-08-20",
      icon: "/images/wallet-icon.svg",
      iconBg: "bg-lighrgrey36",
      status: "Action Required",
      actions: ["view", "approve", "reject", "upload"],
    },
    {
      id: "doc-4",
      title: "Visa Grant",
      subtitle: "",
      icon: "/icons/palne-icon.svg",
      iconBg: "bg-red2100/10",
      status: "Missing",
      actions: ["approve", "reject", "upload"],
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

    console.log(
      `Rejecting document ${rejectingDocumentId}: ${rejectionReason}`
    );

    set({
      isRejectModalOpen: false,
      rejectingDocumentId: null,
      rejectionReason: "",
    });
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
    navigator.clipboard.writeText(iban.replace(/\s/g, "")).then(() => {
      toast.success("IBAN Copied", {
        description: iban,
      });
    }).catch(() => {
      toast.error("Failed to copy IBAN");
    });
  },
}));