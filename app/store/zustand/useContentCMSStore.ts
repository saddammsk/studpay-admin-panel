import { create } from "zustand";


export type NotificationStatus = "Live" | "Draft" | "Archived";
export type NotificationCategory = "Promotion" | "Update" | "Alert" | "Announcement";
export type NotificationChannel = "Push" | "Email" | "In-App";
export type FAQCategory = "Payments" | "Account" | "Security" | "Transfers" | "Promotions";

export interface Notification {
  id: string;
  title: string;
  date: string;
  category: NotificationCategory;
  channel: NotificationChannel;
  channelIcon: string;
  targetSegment: string;
  status: NotificationStatus;
}

export interface FAQItem {
  id: string;
  category: FAQCategory;
  question: string;
  views: string;
  lastUpdated: string;
  helpfulness: number;
}

export interface ContentForm {
  title: string;
  category: NotificationCategory | "";
  channel: NotificationChannel | "";
  targetSegment: string;
  status: NotificationStatus;
  scheduledDate: string;
  body: string;
}

export interface ContentFormErrors {
  title?: string;
  category?: string;
  channel?: string;
  targetSegment?: string;
  body?: string;
}

export interface EmergencyAlertForm {
  title: string;
  message: string;
  targetSegment: string;
  channels: NotificationChannel[];
}

export interface EmergencyAlertErrors {
  title?: string;
  message?: string;
  targetSegment?: string;
  channels?: string;
}

export interface FAQForm {
  question: string;
  category: FAQCategory | "";
}

export interface FAQFormErrors {
  question?: string;
  category?: string;
}


const INITIAL_NOTIFICATIONS: Notification[] = [
  { id: "CNT-001", title: "Winter Semester Cashback Offer", date: "Jan 15, 2026", category: "Promotion", channel: "Push", channelIcon: "/images/push-icon.svg", targetSegment: "TU Munich Students", status: "Live" },
  { id: "CNT-002", title: "New Payment Method Available", date: "Jan 12, 2026", category: "Update", channel: "Email", channelIcon: "/images/mail-icon.svg", targetSegment: "All Users", status: "Live" },
  { id: "CNT-003", title: "Valentine's Day Special", date: "Feb 10, 2026", category: "Promotion", channel: "In-App", channelIcon: "/images/globe-icon2.svg", targetSegment: "Active Users", status: "Draft" },
  { id: "CNT-004", title: "System Maintenance Notice", date: "Dec 28, 2025", category: "Alert", channel: "Push", channelIcon: "/images/push-icon.svg", targetSegment: "All Users", status: "Archived" },
  { id: "CNT-005", title: "Student ID Verification Reminder", date: "Jan 20, 2026", category: "Alert", channel: "Email", channelIcon: "/images/mail-icon.svg", targetSegment: "Unverified Users", status: "Live" },
  { id: "CNT-006", title: "Referral Program Launch", date: "Feb 01, 2026", category: "Announcement", channel: "Push", channelIcon: "/images/globe-icon2.svg", targetSegment: "University Partners", status: "Draft" },
  { id: "CNT-007", title: "End of Year Bonus", date: "Dec 31, 2025", category: "Promotion", channel: "Email", channelIcon: "/images/mail-icon.svg", targetSegment: "All Users", status: "Archived" },
  { id: "CNT-008", title: "New Partner Onboarded", date: "Feb 05, 2026", category: "Announcement", channel: "In-App", channelIcon: "/images/globe-icon2.svg", targetSegment: "Students", status: "Live" },
  { id: "CNT-009", title: "App Update Required", date: "Jan 30, 2026", category: "Update", channel: "Push", channelIcon: "/images/push-icon.svg", targetSegment: "Older App Versions", status: "Live" },
  { id: "CNT-010", title: "Spring Housing Deals", date: "Mar 01, 2026", category: "Promotion", channel: "Email", channelIcon: "/images/mail-icon.svg", targetSegment: "Active Users", status: "Draft" },
  { id: "CNT-011", title: "Security Patch Notice", date: "Jan 25, 2026", category: "Alert", channel: "In-App", channelIcon: "/images/globe-icon2.svg", targetSegment: "All Users", status: "Live" },
  { id: "CNT-012", title: "Q1 Newsletter", date: "Jan 1, 2026", category: "Announcement", channel: "Email", channelIcon: "/images/mail-icon.svg", targetSegment: "All Users", status: "Archived" },
];

const INITIAL_FAQS: FAQItem[] = [
  { id: "FAQ-001", category: "Payments", question: "How do I add money to my StudPay wallet?", views: "1,250 views", lastUpdated: "2 days ago", helpfulness: 94 },
  { id: "FAQ-002", category: "Account", question: "How can I verify my student ID?", views: "980 views", lastUpdated: "5 days ago", helpfulness: 89 },
  { id: "FAQ-003", category: "Security", question: "How do I enable two-factor authentication?", views: "756 views", lastUpdated: "1 week ago", helpfulness: 92 },
  { id: "FAQ-004", category: "Transfers", question: "What are the fees for international transfers?", views: "542 views", lastUpdated: "3 days ago", helpfulness: 78 },
  { id: "FAQ-005", category: "Promotions", question: "How do I apply a discount code?", views: "423 views", lastUpdated: "1 day ago", helpfulness: 85 },
  { id: "FAQ-006", category: "Payments", question: "Can I use StudPay for recurring payments?", views: "310 views", lastUpdated: "4 days ago", helpfulness: 91 },
  { id: "FAQ-007", category: "Account", question: "How do I change my registered email?", views: "280 views", lastUpdated: "6 days ago", helpfulness: 87 },
];

const EMPTY_CONTENT_FORM: ContentForm = { title: "", category: "", channel: "", targetSegment: "", status: "Draft", scheduledDate: "", body: "" };
const EMPTY_EMERGENCY_FORM: EmergencyAlertForm = { title: "", message: "", targetSegment: "All Users", channels: [] };
const EMPTY_FAQ_FORM: FAQForm = { question: "", category: "" };

const PAGE_SIZE = 6;


interface ContentCMSStore {
  notifications: Notification[];
  ledgerSearch: string;
  channelFilter: NotificationChannel | "All Channels";
  statusFilter: NotificationStatus | "All Status";
  currentPage: number;

  isCreateModalOpen: boolean;
  contentForm: ContentForm;
  contentFormErrors: ContentFormErrors;
  contentSaveSuccess: boolean;

  isEmergencyModalOpen: boolean;
  emergencyForm: EmergencyAlertForm;
  emergencyFormErrors: EmergencyAlertErrors;
  emergencySentSuccess: boolean;

  faqs: FAQItem[];
  editingFAQId: string | null;
  faqForm: FAQForm;
  faqFormErrors: FAQFormErrors;
  faqSaveSuccess: boolean;

  openRowMenuId: string | null;

  filteredNotifications: () => Notification[];
  pagedNotifications: () => Notification[];
  totalPages: () => number;
  activePushCampaigns: () => number;
  pendingReviews: () => number;

  setLedgerSearch: (q: string) => void;
  setChannelFilter: (v: NotificationChannel | "All Channels") => void;
  setStatusFilter: (v: NotificationStatus | "All Status") => void;
  setCurrentPage: (p: number) => void;
  setOpenRowMenuId: (id: string | null) => void;
  updateNotificationStatus: (id: string, status: NotificationStatus) => void;
  deleteNotification: (id: string) => void;

  openCreateModal: () => void;
  closeCreateModal: () => void;
  setContentField: (field: keyof ContentForm, value: string) => void;
  submitContent: () => void;

  openEmergencyModal: () => void;
  closeEmergencyModal: () => void;
  setEmergencyField: (field: keyof Omit<EmergencyAlertForm, "channels">, value: string) => void;
  toggleEmergencyChannel: (channel: NotificationChannel) => void;
  submitEmergency: () => void;

  startEditFAQ: (id: string) => void;
  cancelEditFAQ: () => void;
  setFAQField: (field: keyof FAQForm, value: string) => void;
  saveFAQ: () => void;
}

function validateContent(form: ContentForm): ContentFormErrors {
  const errors: ContentFormErrors = {};
  if (!form.title.trim()) errors.title = "Title is required.";
  if (!form.category) errors.category = "Category is required.";
  if (!form.channel) errors.channel = "Channel is required.";
  if (!form.targetSegment.trim()) errors.targetSegment = "Target segment is required.";
  if (!form.body.trim()) errors.body = "Content body is required.";
  return errors;
}

function validateEmergency(form: EmergencyAlertForm): EmergencyAlertErrors {
  const errors: EmergencyAlertErrors = {};
  if (!form.title.trim()) errors.title = "Alert title is required.";
  if (!form.message.trim()) errors.message = "Message is required.";
  if (!form.targetSegment.trim()) errors.targetSegment = "Target segment is required.";
  if (form.channels.length === 0) errors.channels = "Select at least one channel.";
  return errors;
}

function validateFAQ(form: FAQForm): FAQFormErrors {
  const errors: FAQFormErrors = {};
  if (!form.question.trim()) errors.question = "Question is required.";
  if (!form.category) errors.category = "Category is required.";
  return errors;
}

export const useContentCMSStore = create<ContentCMSStore>((set, get) => ({
  notifications: INITIAL_NOTIFICATIONS,
  ledgerSearch: "",
  channelFilter: "All Channels",
  statusFilter: "All Status",
  currentPage: 1,

  isCreateModalOpen: false,
  contentForm: EMPTY_CONTENT_FORM,
  contentFormErrors: {},
  contentSaveSuccess: false,

  isEmergencyModalOpen: false,
  emergencyForm: EMPTY_EMERGENCY_FORM,
  emergencyFormErrors: {},
  emergencySentSuccess: false,

  faqs: INITIAL_FAQS,
  editingFAQId: null,
  faqForm: EMPTY_FAQ_FORM,
  faqFormErrors: {},
  faqSaveSuccess: false,

  openRowMenuId: null,

  filteredNotifications: () => {
    const { notifications, ledgerSearch, channelFilter, statusFilter } = get();
    const q = ledgerSearch.toLowerCase();
    return notifications.filter((n) => {
      const matchSearch = !q || n.title.toLowerCase().includes(q) || n.id.toLowerCase().includes(q) || n.targetSegment.toLowerCase().includes(q);
      const matchChannel = channelFilter === "All Channels" || n.channel === channelFilter;
      const matchStatus = statusFilter === "All Status" || n.status === statusFilter;
      return matchSearch && matchChannel && matchStatus;
    });
  },

  pagedNotifications: () => {
    const { currentPage } = get();
    const all = get().filteredNotifications();
    const start = (currentPage - 1) * PAGE_SIZE;
    return all.slice(start, start + PAGE_SIZE);
  },

  totalPages: () => Math.max(1, Math.ceil(get().filteredNotifications().length / PAGE_SIZE)),

  activePushCampaigns: () => get().notifications.filter((n) => n.status === "Live" && n.channel === "Push").length,

  pendingReviews: () => get().notifications.filter((n) => n.status === "Draft").length,

  setLedgerSearch: (q) => set({ ledgerSearch: q, currentPage: 1 }),
  setChannelFilter: (v) => set({ channelFilter: v, currentPage: 1 }),
  setStatusFilter: (v) => set({ statusFilter: v, currentPage: 1 }),
  setCurrentPage: (p) => set({ currentPage: p }),
  setOpenRowMenuId: (id) => set({ openRowMenuId: id }),

  updateNotificationStatus: (id, status) =>
    set((s) => ({ notifications: s.notifications.map((n) => n.id === id ? { ...n, status } : n), openRowMenuId: null })),

  deleteNotification: (id) =>
    set((s) => ({ notifications: s.notifications.filter((n) => n.id !== id), openRowMenuId: null })),

  openCreateModal: () => set({ isCreateModalOpen: true, contentForm: EMPTY_CONTENT_FORM, contentFormErrors: {}, contentSaveSuccess: false }),
  closeCreateModal: () => set({ isCreateModalOpen: false, contentFormErrors: {} }),

  setContentField: (field, value) =>
    set((s) => ({ contentForm: { ...s.contentForm, [field]: value }, contentFormErrors: { ...s.contentFormErrors, [field]: undefined } })),

  submitContent: () => {
    const { contentForm, notifications } = get();
    const errors = validateContent(contentForm);
    if (Object.keys(errors).length > 0) { set({ contentFormErrors: errors }); return; }
    const channelIconMap: Record<NotificationChannel, string> = {
      Push: "/images/push-icon.svg",
      Email: "/images/mail-icon.svg",
      "In-App": "/images/globe-icon2.svg",
    };
    const newItem: Notification = {
      id: `CNT-${String(notifications.length + 1).padStart(3, "0")}`,
      title: contentForm.title,
      date: contentForm.scheduledDate || new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      category: contentForm.category as NotificationCategory,
      channel: contentForm.channel as NotificationChannel,
      channelIcon: channelIconMap[contentForm.channel as NotificationChannel],
      targetSegment: contentForm.targetSegment,
      status: contentForm.status,
    };
    set({ notifications: [newItem, ...notifications], contentSaveSuccess: true });
    setTimeout(() => set({ isCreateModalOpen: false, contentSaveSuccess: false }), 1300);
  },

  openEmergencyModal: () => set({ isEmergencyModalOpen: true, emergencyForm: EMPTY_EMERGENCY_FORM, emergencyFormErrors: {}, emergencySentSuccess: false }),
  closeEmergencyModal: () => set({ isEmergencyModalOpen: false, emergencyFormErrors: {} }),

  setEmergencyField: (field, value) =>
    set((s) => ({ emergencyForm: { ...s.emergencyForm, [field]: value }, emergencyFormErrors: { ...s.emergencyFormErrors, [field]: undefined } })),

  toggleEmergencyChannel: (channel) =>
    set((s) => {
      const exists = s.emergencyForm.channels.includes(channel);
      return {
        emergencyForm: { ...s.emergencyForm, channels: exists ? s.emergencyForm.channels.filter((c) => c !== channel) : [...s.emergencyForm.channels, channel] },
        emergencyFormErrors: { ...s.emergencyFormErrors, channels: undefined },
      };
    }),

  submitEmergency: () => {
    const { emergencyForm, notifications } = get();
    const errors = validateEmergency(emergencyForm);
    if (Object.keys(errors).length > 0) { set({ emergencyFormErrors: errors }); return; }
    const newAlerts: Notification[] = emergencyForm.channels.map((ch, i) => ({
      id: `CNT-${String(notifications.length + i + 1).padStart(3, "0")}`,
      title: emergencyForm.title,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      category: "Alert",
      channel: ch,
      channelIcon: ch === "Push" ? "/images/push-icon.svg" : ch === "Email" ? "/images/mail-icon.svg" : "/images/globe-icon2.svg",
      targetSegment: emergencyForm.targetSegment,
      status: "Live",
    }));
    set({ notifications: [...newAlerts, ...notifications], emergencySentSuccess: true });
    setTimeout(() => set({ isEmergencyModalOpen: false, emergencySentSuccess: false }), 1300);
  },

  startEditFAQ: (id) => {
    const faq = get().faqs.find((f) => f.id === id);
    if (!faq) return;
    set({ editingFAQId: id, faqForm: { question: faq.question, category: faq.category }, faqFormErrors: {}, faqSaveSuccess: false });
  },

  cancelEditFAQ: () => set({ editingFAQId: null, faqFormErrors: {} }),

  setFAQField: (field, value) =>
    set((s) => ({ faqForm: { ...s.faqForm, [field]: value }, faqFormErrors: { ...s.faqFormErrors, [field]: undefined } })),

  saveFAQ: () => {
    const { faqForm, editingFAQId, faqs } = get();
    const errors = validateFAQ(faqForm);
    if (Object.keys(errors).length > 0) { set({ faqFormErrors: errors }); return; }
    set({
      faqs: faqs.map((f) => f.id === editingFAQId ? { ...f, question: faqForm.question, category: faqForm.category as FAQCategory, lastUpdated: "Just now" } : f),
      faqSaveSuccess: true,
    });
    setTimeout(() => set({ editingFAQId: null, faqSaveSuccess: false }), 1000);
  },
}));