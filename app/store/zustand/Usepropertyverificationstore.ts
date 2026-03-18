import { create } from "zustand";

export type DocStatus = "verified" | "pending" | "invalid";
export type PropertyStatus = "pending" | "approved" | "rejected" | "info_requested";

export interface PropertyDocument {
  name: string;
  status: DocStatus;
}

export interface HistoryItem {
  label: string;
  by: string;
  date: string;
  color: string;
}

export type ModalType =
  | "verify_doc"
  | "invalidate_doc"
  | "approve"
  | "reject"
  | "request_info"
  | null;

export interface RejectForm {
  reason: string;
  details: string;
}

export interface RejectErrors {
  reason?: string;
  details?: string;
}

export interface RequestInfoForm {
  message: string;
}

export interface RequestInfoErrors {
  message?: string;
}

const initialDocuments: PropertyDocument[] = [
  { name: "Government ID (Passport)",  status: "verified" },
  { name: "Proof of Ownership",         status: "pending"  },
  { name: "Property Registration",      status: "pending"  },
  { name: "Tax Certificate",            status: "verified" },
];

const initialHistory: HistoryItem[] = [
  { label: "ID Verified",               by: "Sarah M.", date: "Jan 28, 2026", color: "bg-green-500" },
  { label: "Tax Certificate Uploaded",  by: "Landlord", date: "Jan 27, 2026", color: "bg-green-500" },
  { label: "Property Submitted",        by: "Landlord", date: "Jan 25, 2026", color: "bg-blue-500"  },
];

const todayLabel = () => {
  const d = new Date();
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
};

const defaultRejectForm  = (): RejectForm      => ({ reason: "", details: "" });
const defaultRequestForm = (): RequestInfoForm => ({ message: "" });

const validateReject = (f: RejectForm): RejectErrors => {
  const e: RejectErrors = {};
  if (!f.reason.trim())  e.reason  = "Please select a reason.";
  if (!f.details.trim()) e.details = "Please provide additional details.";
  return e;
};

const validateRequest = (f: RequestInfoForm): RequestInfoErrors => {
  const e: RequestInfoErrors = {};
  if (!f.message.trim()) e.message = "Please enter a message.";
  return e;
};

interface PropertyVerificationState {
  currentImage: number;
  totalImages: number;

  documents: PropertyDocument[];
  history: HistoryItem[];
  propertyStatus: PropertyStatus;

  activeModal: ModalType;
  pendingDocName: string | null;

  rejectForm: RejectForm;
  rejectErrors: RejectErrors;

  requestInfoForm: RequestInfoForm;
  requestInfoErrors: RequestInfoErrors;

  setImage: (index: number) => void;
  prevImage: () => void;
  nextImage: () => void;

  openModal: (type: ModalType, docName?: string) => void;
  closeModal: () => void;

  confirmVerifyDoc: () => void;
  confirmInvalidateDoc: () => void;

  setRejectField: <K extends keyof RejectForm>(key: K, value: RejectForm[K]) => void;
  submitReject: () => boolean;

  setRequestInfoField: <K extends keyof RequestInfoForm>(key: K, value: RequestInfoForm[K]) => void;
  submitRequestInfo: () => boolean;

  submitApprove: () => void;

  verifiedCount: () => number;
}

export const usePropertyVerificationStore = create<PropertyVerificationState>()((set, get) => ({
  currentImage: 0,
  totalImages: 4,

  documents: initialDocuments,
  history: initialHistory,
  propertyStatus: "pending",

  activeModal: null,
  pendingDocName: null,

  rejectForm: defaultRejectForm(),
  rejectErrors: {},

  requestInfoForm: defaultRequestForm(),
  requestInfoErrors: {},

  setImage: (index) => set({ currentImage: index }),

  prevImage: () =>
    set((s) => ({ currentImage: s.currentImage === 0 ? s.totalImages - 1 : s.currentImage - 1 })),

  nextImage: () =>
    set((s) => ({ currentImage: s.currentImage === s.totalImages - 1 ? 0 : s.currentImage + 1 })),

  openModal: (type, docName) =>
    set({ activeModal: type, pendingDocName: docName ?? null }),

  closeModal: () =>
    set({
      activeModal: null,
      pendingDocName: null,
      rejectForm: defaultRejectForm(),
      rejectErrors: {},
      requestInfoForm: defaultRequestForm(),
      requestInfoErrors: {},
    }),

  confirmVerifyDoc: () => {
    const { pendingDocName, documents, history } = get();
    if (!pendingDocName) return;
    set({
      documents: documents.map((d) =>
        d.name === pendingDocName ? { ...d, status: "verified" } : d
      ),
      history: [
        { label: `${pendingDocName} Verified`, by: "Admin", date: todayLabel(), color: "bg-green-500" },
        ...history,
      ],
      activeModal: null,
      pendingDocName: null,
    });
  },

  confirmInvalidateDoc: () => {
    const { pendingDocName, documents, history } = get();
    if (!pendingDocName) return;
    set({
      documents: documents.map((d) =>
        d.name === pendingDocName ? { ...d, status: "invalid" } : d
      ),
      history: [
        { label: `${pendingDocName} Marked Invalid`, by: "Admin", date: todayLabel(), color: "bg-red-500" },
        ...history,
      ],
      activeModal: null,
      pendingDocName: null,
    });
  },

  setRejectField: (key, value) =>
    set((s) => ({
      rejectForm:   { ...s.rejectForm,   [key]: value     },
      rejectErrors: { ...s.rejectErrors, [key]: undefined },
    })),

  submitReject: () => {
    const { rejectForm, history } = get();
    const errors = validateReject(rejectForm);
    if (Object.keys(errors).length) { set({ rejectErrors: errors }); return false; }
    set({
      propertyStatus: "rejected",
      history: [
        { label: `Property Rejected — ${rejectForm.reason}`, by: "Admin", date: todayLabel(), color: "bg-red-500" },
        ...history,
      ],
      activeModal: null,
      rejectForm: defaultRejectForm(),
      rejectErrors: {},
    });
    return true;
  },

  setRequestInfoField: (key, value) =>
    set((s) => ({
      requestInfoForm:   { ...s.requestInfoForm,   [key]: value     },
      requestInfoErrors: { ...s.requestInfoErrors, [key]: undefined },
    })),

  submitRequestInfo: () => {
    const { requestInfoForm, history } = get();
    const errors = validateRequest(requestInfoForm);
    if (Object.keys(errors).length) { set({ requestInfoErrors: errors }); return false; }
    set({
      propertyStatus: "info_requested",
      history: [
        { label: "Additional Info Requested", by: "Admin", date: todayLabel(), color: "bg-amber-500" },
        ...history,
      ],
      activeModal: null,
      requestInfoForm: defaultRequestForm(),
      requestInfoErrors: {},
    });
    return true;
  },

  submitApprove: () => {
    const { history } = get();
    set({
      propertyStatus: "approved",
      history: [
        { label: "Property Approved", by: "Admin", date: todayLabel(), color: "bg-green-500" },
        ...history,
      ],
      activeModal: null,
    });
  },

  verifiedCount: () => get().documents.filter((d) => d.status === "verified").length,
}));