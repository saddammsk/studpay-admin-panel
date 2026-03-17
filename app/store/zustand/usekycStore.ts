import { create } from "zustand";
import { toast } from "sonner";

export type DocumentTab = "passport" | "poa" | "selfie";
export type KycOverallStatus = "pending" | "approved" | "rejected";
export type TimelineEntryStatus = "PENDING" | "APPROVED" | "UPDATED" | "REJECTED" | "SUBMITTED" | "WATCHLIST_CLEAR" | "OVERRIDE";
export type WatchlistItemStatus = "clear" | "pending" | "hit";
export type AuditAction = "FIRST_APPROVAL" | "SECOND_APPROVAL" | "REJECTION" | "WATCHLIST_CLEAR" | "OVERRIDE" | "RE_UPLOAD_REQUEST" | "RE_SCREEN";

export interface WatchlistItem {
  id: string;
  name: string;
  source: string;
  status: WatchlistItemStatus;
  lastChecked: string;
}

export interface TimelineEntry {
  id: string;
  status: TimelineEntryStatus;
  timestamp: string;
  title: string;
  author?: string;
}

export interface AuditLogEntry {
  id: string;
  admin: {
    initials: string;
    name: string;
  };
  action: AuditAction;
  notes: string;
  timestamp: string;
}

export interface BiometricData {
  matchPercentage: number;
  lastChecked: string;
}

export interface PersonalInfo {
  gender: string;
  maritalStatus: string;
  profession: string;
  sourceOfWealth: string;
  employer: string;
  nationality: string;
}

export interface OcrField {
  id: string;
  label: string;
  extracted: string;
  userInput: string;
  validated: boolean;
}

interface KycState {
  activeDocumentTab: DocumentTab;
  zoomLevel: number;
  kycStatus: KycOverallStatus;
  userId: string;
  firstApprovalBy: string | null;

  watchlistItems: WatchlistItem[];
  isRescreening: boolean;

  timelineEntries: TimelineEntry[];
  auditLog: AuditLogEntry[];

  biometric: BiometricData;
  personalInfo: PersonalInfo;
  ocrFields: OcrField[];

  isOverrideModalOpen: boolean;
  overrideReason: string;

  isRejectModalOpen: boolean;
  rejectReason: string;

  isApproveModalOpen: boolean;

  setActiveDocumentTab: (tab: DocumentTab) => void;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;

  rescreenWatchlist: () => void;

  openOverrideModal: () => void;
  closeOverrideModal: () => void;
  setOverrideReason: (reason: string) => void;
  confirmOverride: () => void;

  openRejectModal: () => void;
  closeRejectModal: () => void;
  setRejectReason: (reason: string) => void;
  confirmReject: () => void;

  openApproveModal: () => void;
  closeApproveModal: () => void;
  confirmApprove: () => void;

  toggleOcrValidation: (fieldId: string) => void;
}

const now = () => {
  const d = new Date();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} at ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
};

const shortNow = () => {
  const d = new Date();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
};

export const useKycStore = create<KycState>((set, get) => ({
  activeDocumentTab: "passport",
  zoomLevel: 100,
  kycStatus: "pending",
  userId: "USR-2024-00847",
  firstApprovalBy: "Sarah Chen",

  watchlistItems: [
    { id: "wl-1", name: "PEP (Politically Exposed Person)", source: "World-Check", status: "clear", lastChecked: "2 mins ago" },
    { id: "wl-2", name: "OFAC Sanctions List", source: "OFAC SDN", status: "clear", lastChecked: "2 mins ago" },
    { id: "wl-3", name: "UN Sanctions List", source: "UN Security Council", status: "clear", lastChecked: "2 mins ago" },
    { id: "wl-4", name: "EU Consolidated List", source: "EU External Action", status: "pending", lastChecked: "Checking..." },
  ],
  isRescreening: false,

  timelineEntries: [
    { id: "tl-1", status: "PENDING", timestamp: "Jan 18, 2024 at 09:15", title: "Awaiting second admin approval", author: "System" },
    { id: "tl-2", status: "APPROVED", timestamp: "Jan 17, 2024 at 16:42", title: "First approval granted - documents verified", author: "Sarah Chen" },
    { id: "tl-3", status: "UPDATED", timestamp: "Jan 17, 2024 at 14:20", title: "User resubmitted proof of address" },
    { id: "tl-4", status: "REJECTED", timestamp: "Jan 16, 2024 at 18:30", title: "Proof of address was blurry and unreadable", author: "Michael Adeyemi" },
    { id: "tl-5", status: "SUBMITTED", timestamp: "Jan 16, 2024 at 14:38", title: "Initial KYC documents submitted" },
  ],

  auditLog: [
    { id: "al-1", admin: { initials: "SC", name: "Sarah Chen" }, action: "FIRST_APPROVAL", notes: "All documents verified. Biometric mat…", timestamp: "Jan 17, 2024 16:42" },
    { id: "al-2", admin: { initials: "MA", name: "Michael Adeyemi" }, action: "REJECTION", notes: "POA document too blurry. Requested…", timestamp: "Jan 16, 2024 18:30" },
    { id: "al-3", admin: { initials: "S", name: "System" }, action: "WATCHLIST_CLEAR", notes: "Automated screening complete. No …", timestamp: "Jan 16, 2024 14:40" },
  ],

  biometric: { matchPercentage: 94, lastChecked: "2 mins ago" },

  personalInfo: {
    gender: "Male",
    maritalStatus: "Single",
    profession: "Software Engineer",
    sourceOfWealth: "Employment Income",
    employer: "Tech Startup Inc.",
    nationality: "Nigerian",
  },

  ocrFields: [
    { id: "ocr-1", label: "Full Name", extracted: "ADEBAYO OKONKWO", userInput: "Adebayo Okonkwo", validated: true },
    { id: "ocr-2", label: "Date of Birth", extracted: "1995-03-15", userInput: "1995-03-15", validated: true },
    { id: "ocr-3", label: "Document Number", extracted: "A12345678", userInput: "A12345678", validated: true },
    { id: "ocr-4", label: "Expiry Date", extracted: "2029-03-14", userInput: "2029-03-14", validated: false },
    { id: "ocr-5", label: "Issuing Country", extracted: "NIGERIA", userInput: "Nigeria", validated: false },
    { id: "ocr-6", label: "Nationality", extracted: "NIGERIAN", userInput: "Nigerian", validated: false },
  ],

  isOverrideModalOpen: false,
  overrideReason: "",

  isRejectModalOpen: false,
  rejectReason: "",

  isApproveModalOpen: false,

  setActiveDocumentTab: (tab) => set({ activeDocumentTab: tab }),

  zoomIn: () =>
    set((state) => ({ zoomLevel: Math.min(state.zoomLevel + 25, 200) })),

  zoomOut: () =>
    set((state) => ({ zoomLevel: Math.max(state.zoomLevel - 25, 25) })),

  resetZoom: () => set({ zoomLevel: 100 }),

  rescreenWatchlist: () => {
    set({
      isRescreening: true,
      watchlistItems: get().watchlistItems.map((item) => ({
        ...item,
        status: "pending" as WatchlistItemStatus,
        lastChecked: "Checking...",
      })),
    });

    const items = get().watchlistItems;
    items.forEach((item, index) => {
      setTimeout(() => {
        set((state) => ({
          watchlistItems: state.watchlistItems.map((wi) =>
            wi.id === item.id
              ? { ...wi, status: "clear" as WatchlistItemStatus, lastChecked: "Just now" }
              : wi
          ),
        }));

        if (index === items.length - 1) {
          set({ isRescreening: false });

          const currentAudit = get().auditLog;
          set({
            auditLog: [
              {
                id: `al-${Date.now()}`,
                admin: { initials: "S", name: "System" },
                action: "RE_SCREEN" as AuditAction,
                notes: "Watchlist re-screening completed. All clear.",
                timestamp: shortNow(),
              },
              ...currentAudit,
            ],
          });

          toast.success("Watchlist Screening Complete", {
            description: "All checks passed — no matches found.",
          });
        }
      }, 800 * (index + 1));
    });
  },

  openOverrideModal: () => set({ isOverrideModalOpen: true, overrideReason: "" }),
  closeOverrideModal: () => set({ isOverrideModalOpen: false, overrideReason: "" }),
  setOverrideReason: (reason) => set({ overrideReason: reason }),

  confirmOverride: () => {
    const { overrideReason } = get();
    if (!overrideReason.trim()) return;

    const ts = now();
    const tsShort = shortNow();

    set((state) => ({
      kycStatus: "approved",
      isOverrideModalOpen: false,
      overrideReason: "",
      timelineEntries: [
        { id: `tl-${Date.now()}`, status: "OVERRIDE" as TimelineEntryStatus, timestamp: ts, title: `Status overridden — ${overrideReason.trim()}`, author: "Admin" },
        ...state.timelineEntries,
      ],
      auditLog: [
        { id: `al-${Date.now()}`, admin: { initials: "AD", name: "Admin" }, action: "OVERRIDE" as AuditAction, notes: overrideReason.trim(), timestamp: tsShort },
        ...state.auditLog,
      ],
    }));

    toast.success("Status Overridden", { description: overrideReason.trim() });
  },

  openRejectModal: () => set({ isRejectModalOpen: true, rejectReason: "" }),
  closeRejectModal: () => set({ isRejectModalOpen: false, rejectReason: "" }),
  setRejectReason: (reason) => set({ rejectReason: reason }),

  confirmReject: () => {
    const { rejectReason } = get();
    if (!rejectReason.trim()) return;

    const ts = now();
    const tsShort = shortNow();

    set((state) => ({
      kycStatus: "rejected",
      isRejectModalOpen: false,
      rejectReason: "",
      timelineEntries: [
        { id: `tl-${Date.now()}`, status: "REJECTED" as TimelineEntryStatus, timestamp: ts, title: rejectReason.trim(), author: "Admin" },
        ...state.timelineEntries,
      ],
      auditLog: [
        { id: `al-${Date.now()}`, admin: { initials: "AD", name: "Admin" }, action: "RE_UPLOAD_REQUEST" as AuditAction, notes: rejectReason.trim(), timestamp: tsShort },
        ...state.auditLog,
      ],
    }));

    toast.error("KYC Rejected", { description: "Re-upload request sent to user." });
  },

  openApproveModal: () => set({ isApproveModalOpen: true }),
  closeApproveModal: () => set({ isApproveModalOpen: false }),

  confirmApprove: () => {
    const ts = now();
    const tsShort = shortNow();

    set((state) => ({
      kycStatus: "approved",
      isApproveModalOpen: false,
      timelineEntries: [
        { id: `tl-${Date.now()}`, status: "APPROVED" as TimelineEntryStatus, timestamp: ts, title: "Second approval granted — identity verified (4-Eyes)", author: "Admin" },
        ...state.timelineEntries,
      ],
      auditLog: [
        { id: `al-${Date.now()}`, admin: { initials: "AD", name: "Admin" }, action: "SECOND_APPROVAL" as AuditAction, notes: "4-Eyes approval complete. Identity verified.", timestamp: tsShort },
        ...state.auditLog,
      ],
    }));

    toast.success("Identity Approved", { description: "4-Eyes verification complete." });
  },

  toggleOcrValidation: (fieldId) =>
    set((state) => ({
      ocrFields: state.ocrFields.map((f) =>
        f.id === fieldId ? { ...f, validated: !f.validated } : f
      ),
    })),
}));