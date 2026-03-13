import { create } from "zustand";
import { toast } from "sonner";

export type SafetyStatus = "Safe" | "At Risk" | "Unknown" | "SOS Active";

export interface TrustedContact {
  id: string;
  name: string;
  role: string;
  phone: string;
  badge: string;
  badgeStyle: "primary" | "secondary";
  isPrimary: boolean;
}

export interface CheckIn {
  id: string;
  location: string;
  time: string;
}

export interface CoverageItem {
  id: string;
  title: string;
  icon: string;
  statusLabel: string;
  provider?: string;
  policyNumber?: string;
  validUntil?: string;
  coverage?: string;
  description?: string;
  hotline?: string;
  variant: "coverage" | "accident" | "legal";
}

type ModalType =
  | "freezeWallet"
  | "convertCrypto"
  | "welfareCheck"
  | "lockAssets"
  | "shareProfile"
  | "viewPolicy"
  | "contactLegal"
  | "callContact"
  | "smsContact"
  | "impersonateUser"
  | "freezeAccount"
  | "adjustLimits"
  | "sendEmail"
  | "sendPush"
  | null;

interface StudentInfo {
  name: string;
  initials: string;
  studentId: string;
  location: string;
}

interface SafetyState {
  student: StudentInfo;
  safetyStatus: SafetyStatus;
  lastUpdated: string;
  checkIns: CheckIn[];
  sosHistory: string;
  trustedContacts: TrustedContact[];
  coverageItems: CoverageItem[];

  activeModal: ModalType;
  isSubmitting: boolean;

  contactTarget: TrustedContact | null;

  convertAsset: string;
  convertAmount: string;

  emailSubject: string;
  emailBody: string;
  pushTitle: string;
  pushBody: string;

  openModal: (modal: ModalType) => void;
  closeModal: () => void;

  confirmFreezeWallet: () => void;
  confirmWelfareCheck: () => void;
  confirmLockAssets: () => void;
  confirmShareProfile: () => void;

  setContactTarget: (contact: TrustedContact) => void;
  callContact: (contact: TrustedContact) => void;
  smsContact: (contact: TrustedContact) => void;

  setConvertAsset: (asset: string) => void;
  setConvertAmount: (amount: string) => void;
  isConvertValid: () => boolean;
  confirmConvert: () => void;

  confirmImpersonate: () => void;
  confirmFreezeAccount: () => void;

  setEmailSubject: (subject: string) => void;
  setEmailBody: (body: string) => void;
  submitEmail: () => void;

  setPushTitle: (title: string) => void;
  setPushBody: (body: string) => void;
  submitPush: () => void;
}

export const useSafetyStore = create<SafetyState>((set, get) => ({
  student: {
    name: "Jane Doe",
    initials: "JD",
    studentId: "STU-2024-78234",
    location: "Dublin, Ireland",
  },

  safetyStatus: "Safe",
  lastUpdated: "Today, 2:30 PM",

  checkIns: [
    { id: "ci-1", location: "University Library, Dublin", time: "2 hours ago" },
    { id: "ci-2", location: "Student Residence, Block A", time: "Yesterday, 10:45 PM" },
    { id: "ci-3", location: "Dublin Airport, Terminal 2", time: "3 days ago" },
  ],

  sosHistory: "No SOS triggers recorded",

  trustedContacts: [
    {
      id: "tc-1",
      name: "Michael O'Brien",
      role: "Father",
      phone: "+353 87 123 4567",
      badge: "Primary Contact",
      badgeStyle: "primary",
      isPrimary: true,
    },
    {
      id: "tc-2",
      name: "Dr. Sarah Murphy",
      role: "University Coordinator",
      phone: "+353 1 234 5678",
      badge: "Local Contact",
      badgeStyle: "secondary",
      isPrimary: false,
    },
  ],

  coverageItems: [
    {
      id: "cov-1",
      title: "Active Coverage",
      icon: "/icons/file-blue-dark.svg",
      statusLabel: "Active Coverage",
      provider: "StudProtect International",
      policyNumber: "SP-2024-IE-78234",
      validUntil: "August 31, 2025",
      variant: "coverage",
    },
    {
      id: "cov-2",
      title: "Personal Accident Cover",
      icon: "/icons/sheild-dark-blue2.svg",
      statusLabel: "Included",
      coverage: "€50,000",
      variant: "accident",
    },
    {
      id: "cov-3",
      title: "Legal Assistance",
      icon: "/icons/legal-icon.svg",
      statusLabel: "",
      description: "24/7 access to StudPay's legal help partner for students facing legal issues abroad.",
      hotline: "+353 1 800 LEGAL",
      variant: "legal",
    },
  ],

  activeModal: null,
  isSubmitting: false,

  contactTarget: null,

  convertAsset: "",
  convertAmount: "",

  emailSubject: "",
  emailBody: "",
  pushTitle: "",
  pushBody: "",

  openModal: (modal) =>
    set({
      activeModal: modal,
      isSubmitting: false,
      convertAsset: "",
      convertAmount: "",
      emailSubject: "",
      emailBody: "",
      pushTitle: "",
      pushBody: "",
    }),

  closeModal: () =>
    set({
      activeModal: null,
      isSubmitting: false,
      contactTarget: null,
      convertAsset: "",
      convertAmount: "",
      emailSubject: "",
      emailBody: "",
      pushTitle: "",
      pushBody: "",
    }),

  confirmFreezeWallet: () => {
    set({ isSubmitting: true });
    setTimeout(() => {
      set({ activeModal: null, isSubmitting: false });
      toast.success("Wallet Frozen", {
        description: "All crypto withdrawals have been blocked. Pending transactions cancelled.",
      });
    }, 1500);
  },

  confirmWelfareCheck: () => {
    set({ isSubmitting: true });
    setTimeout(() => {
      set({ activeModal: null, isSubmitting: false });
      toast.success("Welfare Check Sent", {
        description: "Push notification sent to Jane Doe requesting safety confirmation.",
      });
    }, 1000);
  },

  confirmLockAssets: () => {
    set({ isSubmitting: true });
    setTimeout(() => {
      set({ activeModal: null, isSubmitting: false });
      toast.success("Assets Locked", {
        description: "All digital assets (cards, crypto, accounts) have been frozen.",
      });
    }, 1500);
  },

  confirmShareProfile: () => {
    set({ isSubmitting: true });
    setTimeout(() => {
      set({ activeModal: null, isSubmitting: false });
      toast.success("Secure Link Generated", {
        description: "Profile link created and copied to clipboard. Valid for 24 hours.",
      });
    }, 1000);
  },

  setContactTarget: (contact) => set({ contactTarget: contact }),

  callContact: (contact) => {
    set({ contactTarget: contact, activeModal: "callContact" });
  },

  smsContact: (contact) => {
    set({ contactTarget: contact, activeModal: "smsContact" });
  },

  setConvertAsset: (asset) => set({ convertAsset: asset }),
  setConvertAmount: (amount) => set({ convertAmount: amount }),

  isConvertValid: () => {
    const { convertAsset, convertAmount } = get();
    return convertAsset !== "" && convertAsset !== "Select Asset" && convertAmount !== "" && !isNaN(Number(convertAmount)) && Number(convertAmount) > 0;
  },

  confirmConvert: () => {
    if (!get().isConvertValid()) return;
    const { convertAsset, convertAmount } = get();

    set({ isSubmitting: true });
    setTimeout(() => {
      set({ activeModal: null, isSubmitting: false, convertAsset: "", convertAmount: "" });
      toast.success("Conversion Initiated", {
        description: `Converting ${convertAmount} ${convertAsset} to EUR. Settlement in ~2 minutes.`,
      });
    }, 1500);
  },

  confirmImpersonate: () => {
    set({ isSubmitting: true });
    setTimeout(() => {
      set({ activeModal: null, isSubmitting: false });
      toast.info("Impersonation Active", {
        description: "You are now viewing the platform as Jane Doe. Actions will be logged.",
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

  setEmailSubject: (subject) => set({ emailSubject: subject }),
  setEmailBody: (body) => set({ emailBody: body }),

  submitEmail: () => {
    const { emailSubject, emailBody } = get();
    if (!emailSubject.trim() || !emailBody.trim()) return;
    set({ isSubmitting: true });
    setTimeout(() => {
      set({ activeModal: null, isSubmitting: false, emailSubject: "", emailBody: "" });
      toast.success("Email Sent", { description: `Email "${emailSubject}" sent to Jane Doe.` });
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
      toast.success("Push Sent", { description: `"${pushTitle}" delivered to device.` });
    }, 1000);
  },
}));