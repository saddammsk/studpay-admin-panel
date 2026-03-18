import { create } from "zustand";

export interface BrandAsset {
  url: string;
  name: string;
}

export interface BrandAssets {
  logoLight: BrandAsset | null;
  logoDark: BrandAsset | null;
  favicon: BrandAsset | null;
  appIcon: BrandAsset | null;
}

export type BrandAssetKey = keyof BrandAssets;

export interface PwForm {
  current: string;
  newPw: string;
  confirm: string;
}

export type PwErrors = Partial<Record<keyof PwForm, string | null>>;
export type PwTouched = Partial<Record<keyof PwForm, boolean>>;

export interface RegionalForm {
  currency: string;
  timezone: string;
  language: string;
}

export type RegionalErrors = Partial<Record<keyof RegionalForm, string | null>>;
export type RegionalTouched = Partial<Record<keyof RegionalForm, boolean>>;

export type NotificationKey =
  | "transaction_email" | "transaction_push" | "transaction_sms"
  | "kyc_email"         | "kyc_push"         | "kyc_sms"
  | "security_email"    | "security_push"    | "security_sms"
  | "marketing_email"   | "marketing_push"   | "marketing_sms";

export type Notifications = Record<NotificationKey, boolean>;

export interface SettingsState {
  primaryColor: string;
  colorPreset: string;
  setPrimaryColor: (c: string) => void;
  setColorPreset: (id: string, hex: string) => void;

  brandAssets: BrandAssets;
  setBrandAsset: (key: BrandAssetKey, data: BrandAsset | null) => void;

  pwForm: PwForm;
  pwErrors: PwErrors;
  pwTouched: PwTouched;
  pwSuccess: boolean;
  pwLoading: boolean;
  setPwField: (field: keyof PwForm, value: string) => void;
  submitPassword: () => void;

  twoFactor: boolean;
  setTwoFactor: (v: boolean) => void;

  maintenance: boolean;
  registrations: boolean;
  autoKyc: boolean;
  setMaintenance: (v: boolean) => void;
  setRegistrations: (v: boolean) => void;
  setAutoKyc: (v: boolean) => void;

  regional: RegionalForm;
  regionalErrors: RegionalErrors;
  regionalTouched: RegionalTouched;
  regionalSuccess: boolean;
  regionalLoading: boolean;
  setRegionalField: (field: keyof RegionalForm, value: string) => void;
  submitRegional: () => void;

  notifications: Notifications;
  toggleNotif: (key: NotificationKey) => void;
}

const NOTIF_INIT: Notifications = {
  transaction_email: true,  transaction_push: false, transaction_sms: true,
  kyc_email: true,          kyc_push: true,          kyc_sms: false,
  security_email: true,     security_push: true,     security_sms: true,
  marketing_email: false,   marketing_push: false,   marketing_sms: false,
};

const validateNewPw = (v: string): string | null => {
  if (!v) return "Required";
  if (v.length < 8) return "Minimum 8 characters";
  if (!/[A-Z]/.test(v)) return "Add at least one uppercase letter";
  if (!/[0-9]/.test(v)) return "Add at least one number";
  if (!/[^A-Za-z0-9]/.test(v)) return "Add at least one special character";
  return null;
};

export const useSettingsStore = create<SettingsState>((set, get) => ({
  primaryColor: "#2563EB",
  colorPreset: "blue",
  setPrimaryColor: (c) => set({ primaryColor: c }),
  setColorPreset: (id, hex) => set({ colorPreset: id, primaryColor: hex }),

  brandAssets: { logoLight: null, logoDark: null, favicon: null, appIcon: null },
  setBrandAsset: (key, data) =>
    set((s) => ({ brandAssets: { ...s.brandAssets, [key]: data } })),

  pwForm: { current: "", newPw: "", confirm: "" },
  pwErrors: {},
  pwTouched: {},
  pwSuccess: false,
  pwLoading: false,

  setPwField: (field, value) => {
    const form = { ...get().pwForm, [field]: value };
    const touched = { ...get().pwTouched, [field]: true };
    const errors: PwErrors = { ...get().pwErrors };

    if (field === "current") errors.current = value ? null : "Required";
    if (field === "newPw") {
      errors.newPw = validateNewPw(value);
      if (touched.confirm) errors.confirm = form.confirm !== value ? "Passwords do not match" : null;
    }
    if (field === "confirm") errors.confirm = value !== form.newPw ? "Passwords do not match" : null;

    set({ pwForm: form, pwErrors: errors, pwTouched: touched, pwSuccess: false });
  },

  submitPassword: () => {
    const { pwForm } = get();
    const errors: PwErrors = {
      current: pwForm.current ? null : "Required",
      newPw: validateNewPw(pwForm.newPw),
      confirm: !pwForm.confirm ? "Required" : pwForm.confirm !== pwForm.newPw ? "Passwords do not match" : null,
    };
    if (Object.values(errors).some(Boolean)) {
      set({ pwErrors: errors, pwTouched: { current: true, newPw: true, confirm: true } });
      return;
    }
    set({ pwLoading: true });
    setTimeout(() => {
      set({
        pwLoading: false,
        pwSuccess: true,
        pwForm: { current: "", newPw: "", confirm: "" },
        pwErrors: {},
        pwTouched: {},
      });
      setTimeout(() => set({ pwSuccess: false }), 4000);
    }, 1200);
  },

  twoFactor: true,
  setTwoFactor: (v) => set({ twoFactor: v }),

  maintenance: false,
  registrations: true,
  autoKyc: false,
  setMaintenance: (v) => set({ maintenance: v }),
  setRegistrations: (v) => set({ registrations: v }),
  setAutoKyc: (v) => set({ autoKyc: v }),

  regional: { currency: "EUR - Euro (€)", timezone: "Europe/London (GMT+0)", language: "English" },
  regionalErrors: {},
  regionalTouched: {},
  regionalSuccess: false,
  regionalLoading: false,

  setRegionalField: (field, value) =>
    set((s) => ({
      regional: { ...s.regional, [field]: value },
      regionalErrors: { ...s.regionalErrors, [field]: value ? null : "Required" },
      regionalTouched: { ...s.regionalTouched, [field]: true },
      regionalSuccess: false,
    })),

  submitRegional: () => {
    const { regional } = get();
    const errors: RegionalErrors = {
      currency: regional.currency ? null : "Required",
      timezone: regional.timezone ? null : "Required",
      language: regional.language ? null : "Required",
    };
    if (Object.values(errors).some(Boolean)) {
      set({ regionalErrors: errors, regionalTouched: { currency: true, timezone: true, language: true } });
      return;
    }
    set({ regionalLoading: true });
    setTimeout(() => {
      set({ regionalLoading: false, regionalSuccess: true });
      setTimeout(() => set({ regionalSuccess: false }), 4000);
    }, 1000);
  },

  notifications: NOTIF_INIT,
  toggleNotif: (key) =>
    set((s) => ({ notifications: { ...s.notifications, [key]: !s.notifications[key] } })),
}));