import { create } from "zustand";
import { toast } from "sonner";

export type InsurancePolicyStatus = "Active" | "Terminated" | "Expired" | "Pending";
export type ClaimStatus = "Paid" | "Processing" | "Denied";
export type PremiumPaymentStatus = "Paid" | "Pending" | "Overdue";
export type InsuranceDocStatus = "Verified" | "Pending";

export interface InsuranceDocument {
  id: number;
  name: string;
  subtitle: string;
  type: string;
  issueDate: string;
  expiry: string;
  status: InsuranceDocStatus;
  fileSize: string;
  fileName: string;
}

export interface InsurancePolicy {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  provider: string;
  policyNumber: string;
  status: InsurancePolicyStatus;
}

export interface InsuranceClaim {
  id: string;
  title: string;
  claimNumber: string;
  date: string;
  amount: string;
  status: ClaimStatus;
}

export interface PremiumPayment {
  id: string;
  month: string;
  date: string;
  method: string;
  amount: string;
  status: PremiumPaymentStatus;
}

type ModalType =
  | "terminatePolicies"
  | "renewPolicy"
  | "supportLiaison"
  | "uploadCertificate"
  | "impersonateUser"
  | "freezeAccount"
  | "adjustLimits"
  | "sendEmail"
  | "sendPush"
  | "viewInsuranceDoc"
  | null;

interface InsuranceState {
  policies: InsurancePolicy[];
  claims: InsuranceClaim[];
  premiumPayments: PremiumPayment[];
  insuranceDocuments: InsuranceDocument[];

  activeModal: ModalType;
  isSubmitting: boolean;

  viewingInsuranceDocId: number | null;
  openViewInsuranceDoc: (docId: number) => void;
  closeViewInsuranceDoc: () => void;
  downloadInsuranceDoc: (docId: number) => void;

  supportSubject: string;
  supportMessage: string;

  uploadFileName: string;
  uploadFileSize: string;
  uploadProgress: number;
  isUploading: boolean;

  emailSubject: string;
  emailBody: string;
  pushTitle: string;
  pushBody: string;

  openModal: (modal: ModalType) => void;
  closeModal: () => void;

  confirmTerminatePolicies: () => void;
  confirmRenewPolicy: () => void;

  setSupportSubject: (subject: string) => void;
  setSupportMessage: (message: string) => void;
  submitSupportLiaison: () => void;

  setUploadFile: (fileName: string, fileSize: string) => void;
  clearUploadFile: () => void;
  confirmUploadCertificate: () => void;

  setEmailSubject: (subject: string) => void;
  setEmailBody: (body: string) => void;
  submitEmail: () => void;

  setPushTitle: (title: string) => void;
  setPushBody: (body: string) => void;
  submitPush: () => void;

  confirmFreezeAccount: () => void;
  confirmImpersonate: () => void;
}

export const useInsuranceStore = create<InsuranceState>((set, get) => ({
  policies: [
    {
      id: "pol-1",
      title: "Health Insurance",
      subtitle: "Mutuelle",
      icon: "/icons/heart.svg",
      provider: "LMDE Mutuelle",
      policyNumber: "MUT-2024-456789",
      status: "Active",
    },
    {
      id: "pol-2",
      title: "Housing Insurance",
      subtitle: "Multirisque Habitation",
      icon: "/images/house-icon.svg",
      provider: "StudPay Assurance",
      policyNumber: "MRH-2024-98765",
      status: "Active",
    },
    {
      id: "pol-3",
      title: "Civil Liability",
      subtitle: "Responsabilité Civile",
      icon: "/images/shield-dark.svg",
      provider: "StudPay Assurance",
      policyNumber: "RC-2024-12345",
      status: "Active",
    },
  ],

  claims: [
    {
      id: "clm-1",
      title: "Medical Consultation",
      claimNumber: "CLM-2024-001",
      date: "Dec 15, 2024",
      amount: "€45",
      status: "Paid",
    },
    {
      id: "clm-2",
      title: "Prescription Medication",
      claimNumber: "CLM-2024-002",
      date: "Jan 8, 2025",
      amount: "€28",
      status: "Processing",
    },
  ],

  premiumPayments: [
    {
      id: "prm-1",
      month: "January 2025",
      date: "Jan 1, 2025",
      method: "Direct Debit",
      amount: "€42",
      status: "Paid",
    },
    {
      id: "prm-2",
      month: "December 2024",
      date: "Dec 1, 2024",
      method: "Direct Debit",
      amount: "€42",
      status: "Paid",
    },
    {
      id: "prm-3",
      month: "November 2024",
      date: "Nov 1, 2024",
      method: "Direct Debit",
      amount: "€42",
      status: "Paid",
    },
  ],

  insuranceDocuments: [
    {
      id: 1,
      name: "Rights Certificate",
      subtitle: "Attestation de Droits",
      type: "Health",
      issueDate: "Sept 1, 2024",
      expiry: "Aug 31, 2025",
      status: "Verified",
      fileSize: "1.2 MB",
      fileName: "attestation-droits.pdf",
    },
    {
      id: 2,
      name: "Insurance Card",
      subtitle: "Carte Vitale",
      type: "Health",
      issueDate: "Jan 15, 2024",
      expiry: "Permanent",
      status: "Verified",
      fileSize: "450 KB",
      fileName: "carte-vitale.pdf",
    },
    {
      id: 3,
      name: "Housing Certificate",
      subtitle: "Attestation Habitation",
      type: "Housing",
      issueDate: "Sept 1, 2024",
      expiry: "Aug 31, 2025",
      status: "Verified",
      fileSize: "890 KB",
      fileName: "attestation-habitation.pdf",
    },
    {
      id: 4,
      name: "Liability Certificate",
      subtitle: "Attestation RC",
      type: "Liability",
      issueDate: "Sept 1, 2024",
      expiry: "Aug 31, 2025",
      status: "Pending",
      fileSize: "720 KB",
      fileName: "attestation-rc.pdf",
    },
    {
      id: 5,
      name: "Payment Receipt - Q1",
      subtitle: "Quittance",
      type: "Premium",
      issueDate: "Jan 5, 2025",
      expiry: "—",
      status: "Verified",
      fileSize: "156 KB",
      fileName: "quittance-q1-2025.pdf",
    },
  ],

  viewingInsuranceDocId: null,

  openViewInsuranceDoc: (docId) =>
    set({ activeModal: "viewInsuranceDoc", viewingInsuranceDocId: docId }),

  closeViewInsuranceDoc: () =>
    set({ activeModal: null, viewingInsuranceDocId: null }),

  downloadInsuranceDoc: (docId) => {
    const doc = get().insuranceDocuments.find((d) => d.id === docId);
    if (!doc) return;

    toast.success("Download Started", {
      description: `${doc.name} (${doc.fileSize}) is being downloaded.`,
    });
  },

  activeModal: null,
  isSubmitting: false,

  supportSubject: "",
  supportMessage: "",

  uploadFileName: "",
  uploadFileSize: "",
  uploadProgress: 0,
  isUploading: false,

  emailSubject: "",
  emailBody: "",
  pushTitle: "",
  pushBody: "",

  openModal: (modal) =>
    set({
      activeModal: modal,
      isSubmitting: false,
      supportSubject: "",
      supportMessage: "",
      uploadFileName: "",
      uploadFileSize: "",
      uploadProgress: 0,
      isUploading: false,
      emailSubject: "",
      emailBody: "",
      pushTitle: "",
      pushBody: "",
    }),

  closeModal: () =>
    set({
      activeModal: null,
      isSubmitting: false,
      viewingInsuranceDocId: null,
      supportSubject: "",
      supportMessage: "",
      uploadFileName: "",
      uploadFileSize: "",
      uploadProgress: 0,
      isUploading: false,
      emailSubject: "",
      emailBody: "",
      pushTitle: "",
      pushBody: "",
    }),

  confirmTerminatePolicies: () => {
    set({ isSubmitting: true });

    setTimeout(() => {
      set((state) => ({
        policies: state.policies.map((p) => ({
          ...p,
          status: "Terminated" as InsurancePolicyStatus,
        })),
        activeModal: null,
        isSubmitting: false,
      }));

      toast.success("Policies Terminated", {
        description: "All active insurance policies have been cancelled. Premium refund is being processed.",
      });
    }, 1500);
  },

  confirmRenewPolicy: () => {
    set({ isSubmitting: true });

    setTimeout(() => {
      set({ activeModal: null, isSubmitting: false });

      toast.success("Renewal Initiated", {
        description: "Policy renewal for the next academic year has been submitted for processing.",
      });
    }, 1000);
  },

  setSupportSubject: (subject) => set({ supportSubject: subject }),
  setSupportMessage: (message) => set({ supportMessage: message }),

  submitSupportLiaison: () => {
    const { supportSubject, supportMessage } = get();
    if (!supportSubject.trim() || !supportMessage.trim()) return;

    set({ isSubmitting: true });

    setTimeout(() => {
      set({ activeModal: null, isSubmitting: false, supportSubject: "", supportMessage: "" });

      toast.success("Support Ticket Created", {
        description: "The insurance provider has been notified of your request.",
      });
    }, 1000);
  },

  setUploadFile: (fileName, fileSize) => set({ uploadFileName: fileName, uploadFileSize: fileSize }),
  clearUploadFile: () => set({ uploadFileName: "", uploadFileSize: "" }),

  confirmUploadCertificate: () => {
    const { uploadFileName } = get();
    if (!uploadFileName) return;

    set({ isUploading: true, uploadProgress: 0 });

    const interval = setInterval(() => {
      const current = get().uploadProgress;
      if (current >= 100) {
        clearInterval(interval);

        set({
          activeModal: null,
          isUploading: false,
          uploadFileName: "",
          uploadFileSize: "",
          uploadProgress: 0,
        });

        toast.success("Certificate Uploaded", {
          description: `${uploadFileName} has been uploaded successfully.`,
        });
        return;
      }
      set({ uploadProgress: Math.min(current + 20, 100) });
    }, 200);
  },

  setEmailSubject: (subject) => set({ emailSubject: subject }),
  setEmailBody: (body) => set({ emailBody: body }),

  submitEmail: () => {
    const { emailSubject, emailBody } = get();
    if (!emailSubject.trim() || !emailBody.trim()) return;

    set({ isSubmitting: true });

    setTimeout(() => {
      set({ activeModal: null, isSubmitting: false, emailSubject: "", emailBody: "" });

      toast.success("Email Sent", {
        description: `Email "${emailSubject}" has been sent to the user.`,
      });
    }, 1000);
  },

  setPushTitle: (title) => set({ pushTitle: title }),
  setPushBody: (body) => set({ pushBody: body }),

  submitPush: () => {
    const { pushTitle, pushBody } = get();
    if (!pushTitle.trim() || !pushBody.trim()) return;

    set({ isSubmitting: true });

    setTimeout(() => {
      set({ activeModal: null, isSubmitting: false, pushTitle: "", pushBody: "" });

      toast.success("Push Notification Sent", {
        description: `"${pushTitle}" has been delivered to the user's device.`,
      });
    }, 1000);
  },

  confirmFreezeAccount: () => {
    set({ isSubmitting: true });

    setTimeout(() => {
      set({ activeModal: null, isSubmitting: false });

      toast.success("Account Frozen", {
        description: "The user's account has been frozen. All transactions are suspended.",
      });
    }, 1500);
  },

  confirmImpersonate: () => {
    set({ isSubmitting: true });

    setTimeout(() => {
      set({ activeModal: null, isSubmitting: false });

      toast.info("Impersonation Active", {
        description: "You are now viewing the platform as this user. Actions will be logged.",
      });
    }, 1000);
  },
}));