import { create } from "zustand";

export type Priority = "urgent" | "high" | "medium" | "low";
export type TicketStatus = "new" | "pending" | "resolved";
export type FilterTab = "All" | "New" | "Pending" | "Resolved";

export interface Ticket {
  id: string;
  priority: Priority;
  time: string;
  name: string;
  email: string;
  title: string;
  preview: string;
  tag: string;
  status: TicketStatus;
  hasAvatar?: boolean;
}

export interface Message {
  id: string;
  sender: string;
  role?: string;
  time: string;
  content: string;
  isSupport: boolean;
  isInternal?: boolean;
}

export interface Booking {
  id: string;
  label: string;
  amount: string;
  date: string;
  status: "pending" | "completed";
}

export interface AuditLog {
  id: string;
  label: string;
  date: string;
  type: "error" | "success";
}

export interface StudentContext {
  name: string;
  email: string;
  university: string;
  studentId: string;
  riskScore: number;
  kycVerified: boolean;
  totalSpent: string;
  memberSince: string;
  bookings: Booking[];
  auditLogs: AuditLog[];
}

const TICKETS: Ticket[] = [
  {
    id: "TKT-001",
    priority: "urgent",
    time: "5 min ago",
    name: "Ahmed Hassan",
    email: "ahmed.h@student.tu-berlin.de",
    title: "Payment failed for housing deposit",
    preview: "I tried to pay my housing deposit but the transaction failed...",
    tag: "Payment Issue",
    status: "new",
  },
  {
    id: "TKT-002",
    priority: "high",
    time: "23 min ago",
    name: "Maria Schmidt",
    email: "maria.s@student.lmu.de",
    title: "Housing booking cancellation request",
    preview: "I need to cancel my housing booking due to visa rejection...",
    tag: "Housing Dispute",
    status: "pending",
    hasAvatar: true,
  },
  {
    id: "TKT-003",
    priority: "medium",
    time: "1 hour ago",
    name: "John Chen",
    email: "j.chen@student.rwth.de",
    title: "KYC verification stuck",
    preview: "My KYC has been pending for 3 days now...",
    tag: "KYC Help",
    status: "pending",
  },
  {
    id: "TKT-004",
    priority: "medium",
    time: "2 hours ago",
    name: "Lisa Müller",
    email: "lisa.m@student.kit.de",
    title: "Insurance document not received",
    preview: "I completed insurance payment but haven't received documents...",
    tag: "Insurance",
    status: "new",
    hasAvatar: true,
  },
  {
    id: "TKT-005",
    priority: "high",
    time: "3 hours ago",
    name: "Alex Johnson",
    email: "a.johnson@student.hhu.de",
    title: "Refund request for blocked account",
    preview: "My account was blocked and I need a refund...",
    tag: "Payment Issue",
    status: "pending",
  },
  {
    id: "TKT-006",
    priority: "low",
    time: "4 hours ago",
    name: "Sophie Wang",
    email: "s.wang@student.fu-berlin.de",
    title: "How to book a house?",
    preview: "I'm new to StudPay and need help with housing booking...",
    tag: "General Inquiry",
    status: "new",
    hasAvatar: true,
  },
];

const MESSAGES_MAP: Record<string, Message[]> = {
  "TKT-001": [
    { id: "1", sender: "Ahmed Hassan", time: "10:23 AM", content: "Hello, I tried to pay my housing deposit of €500 but the transaction failed. My bank shows the amount was debited but I didn't receive any confirmation from StudPay.", isSupport: false },
    { id: "2", sender: "Sarah", role: "Support", time: "10:25 AM", content: "Hi Ahmed, I'm sorry to hear about this issue. Let me check your transaction details right away. Can you please share the last 4 digits of the card you used?", isSupport: true },
    { id: "3", sender: "Ahmed Hassan", time: "10:27 AM", content: "Yes, the card ends with 4521. The transaction was at 9:45 AM today.", isSupport: false },
    { id: "4", sender: "Sarah → Finance Team", time: "10:28 AM", content: "Hello, I need to check Stripe logs for transaction around 9:45 AM, card ending 4521. Student claims amount debited but no confirmation. Possible timeout issue?", isSupport: true, isInternal: true },
    { id: "5", sender: "Sarah", role: "Support", time: "10:32 AM", content: "Thank you, Ahmed. I can see your transaction in our system. It appears there was a timeout during processing. The payment was actually successful but the confirmation email wasn't sent. I'm processing the booking now and you'll receive confirmation within 5 minutes.", isSupport: true },
  ],
  "TKT-002": [
    { id: "1", sender: "Maria Schmidt", time: "09:10 AM", content: "Hello, I need to cancel my housing booking. My visa was rejected and I cannot travel to Germany.", isSupport: false },
    { id: "2", sender: "Tom", role: "Support", time: "09:15 AM", content: "Hi Maria, I'm sorry to hear that. I'll initiate the cancellation process. Do you have your visa rejection letter?", isSupport: true },
  ],
  "TKT-003": [
    { id: "1", sender: "John Chen", time: "08:00 AM", content: "My KYC has been stuck in verification for 3 days. I've submitted all required documents.", isSupport: false },
    { id: "2", sender: "Alice", role: "Support", time: "08:20 AM", content: "Hi John, I can see your KYC submission. It's currently under manual review. I'll escalate this for faster processing.", isSupport: true },
  ],
  "TKT-004": [
    { id: "1", sender: "Lisa Müller", time: "07:45 AM", content: "I completed my insurance payment last week but still haven't received any documents.", isSupport: false },
  ],
  "TKT-005": [
    { id: "1", sender: "Alex Johnson", time: "06:30 AM", content: "My account was blocked after a failed login attempt and now I need a refund for my last payment.", isSupport: false },
  ],
  "TKT-006": [
    { id: "1", sender: "Sophie Wang", time: "05:00 AM", content: "Hi! I'm new to StudPay and I'm not sure how to book a house. Can you guide me?", isSupport: false },
    { id: "2", sender: "Mike", role: "Support", time: "05:10 AM", content: "Hi Sophie! Welcome to StudPay. I'll walk you through the booking process step by step.", isSupport: true },
  ],
};

const STUDENT_CONTEXT_MAP: Record<string, StudentContext> = {
  "TKT-001": {
    name: "Ahmed Hassan",
    email: "ahmed.h@student.tu-berlin.de",
    university: "TU Berlin",
    studentId: "STU-2024-8821",
    riskScore: 15,
    kycVerified: true,
    totalSpent: "€2,450",
    memberSince: "Jan 15, 2024",
    bookings: [
      { id: "BK-001", label: "Housing Deposit", amount: "€500", date: "Feb 1, 2024", status: "pending" },
      { id: "BK-002", label: "Insurance Premium", amount: "€120/mo", date: "Jan 20, 2024", status: "completed" },
    ],
    auditLogs: [
      { id: "1", label: "Payment Attempted", date: "Today, 9:45 AM", type: "error" },
      { id: "2", label: "KYC Verified", date: "Jan 18, 2024", type: "success" },
      { id: "3", label: "Account Created", date: "Jan 15, 2024", type: "success" },
    ],
  },
  "TKT-002": {
    name: "Maria Schmidt",
    email: "maria.s@student.lmu.de",
    university: "LMU Munich",
    studentId: "STU-2024-4412",
    riskScore: 30,
    kycVerified: true,
    totalSpent: "€1,200",
    memberSince: "Nov 10, 2023",
    bookings: [
      { id: "BK-003", label: "Housing Booking", amount: "€800", date: "Jan 15, 2024", status: "pending" },
    ],
    auditLogs: [
      { id: "1", label: "Cancellation Requested", date: "Today, 9:10 AM", type: "error" },
      { id: "2", label: "Booking Confirmed", date: "Jan 15, 2024", type: "success" },
    ],
  },
  "TKT-003": {
    name: "John Chen",
    email: "j.chen@student.rwth.de",
    university: "RWTH Aachen",
    studentId: "STU-2024-3301",
    riskScore: 20,
    kycVerified: false,
    totalSpent: "€0",
    memberSince: "Feb 5, 2024",
    bookings: [],
    auditLogs: [
      { id: "1", label: "KYC Submitted", date: "Feb 5, 2024", type: "success" },
      { id: "2", label: "KYC Review Pending", date: "Feb 5, 2024", type: "error" },
    ],
  },
  "TKT-004": {
    name: "Lisa Müller",
    email: "lisa.m@student.kit.de",
    university: "KIT Karlsruhe",
    studentId: "STU-2024-7712",
    riskScore: 10,
    kycVerified: true,
    totalSpent: "€360",
    memberSince: "Dec 1, 2023",
    bookings: [
      { id: "BK-004", label: "Insurance Premium", amount: "€120/mo", date: "Jan 28, 2024", status: "completed" },
    ],
    auditLogs: [
      { id: "1", label: "Insurance Payment", date: "Jan 28, 2024", type: "success" },
      { id: "2", label: "KYC Verified", date: "Dec 5, 2023", type: "success" },
    ],
  },
  "TKT-005": {
    name: "Alex Johnson",
    email: "a.johnson@student.hhu.de",
    university: "HHU Düsseldorf",
    studentId: "STU-2024-9920",
    riskScore: 65,
    kycVerified: true,
    totalSpent: "€950",
    memberSince: "Oct 20, 2023",
    bookings: [
      { id: "BK-005", label: "Housing Deposit", amount: "€400", date: "Jan 10, 2024", status: "pending" },
    ],
    auditLogs: [
      { id: "1", label: "Account Blocked", date: "Today, 6:20 AM", type: "error" },
      { id: "2", label: "Failed Login x3", date: "Today, 6:18 AM", type: "error" },
    ],
  },
  "TKT-006": {
    name: "Sophie Wang",
    email: "s.wang@student.fu-berlin.de",
    university: "FU Berlin",
    studentId: "STU-2024-1155",
    riskScore: 5,
    kycVerified: false,
    totalSpent: "€0",
    memberSince: "Feb 10, 2024",
    bookings: [],
    auditLogs: [
      { id: "1", label: "Account Created", date: "Feb 10, 2024", type: "success" },
    ],
  },
};

const CANNED_RESPONSES = [
  "Thank you for reaching out. Let me look into this for you.",
  "I've escalated this to our finance team and will update you shortly.",
  "Your issue has been resolved. Please confirm on your end.",
  "We'll process your refund within 3-5 business days.",
  "Your KYC is under review. Please allow 24-48 hours.",
];

interface SupportStore {
  tickets: Ticket[];
  activeTicketId: string;
  activeTab: FilterTab;
  searchQuery: string;
  replyText: string;
  replyToStudent: boolean;
  showCannedResponses: boolean;
  replyError: string;

  filteredTickets: () => Ticket[];
  activeTicket: () => Ticket | undefined;
  messages: () => Message[];
  studentContext: () => StudentContext | undefined;

  setActiveTicketId: (id: string) => void;
  setActiveTab: (tab: FilterTab) => void;
  setSearchQuery: (q: string) => void;
  setReplyText: (t: string) => void;
  toggleReplyToStudent: () => void;
  toggleCannedResponses: () => void;
  selectCannedResponse: (text: string) => void;
  sendReply: () => void;
  resolveTicket: (id: string) => void;
  escalateTicket: (id: string) => void;
}

export const UseSupportInboxStore = create<SupportStore>((set, get) => ({
  tickets: TICKETS,
  activeTicketId: "TKT-001",
  activeTab: "All",
  searchQuery: "",
  replyText: "",
  replyToStudent: false,
  showCannedResponses: false,
  replyError: "",

  filteredTickets: () => {
    const { tickets, activeTab, searchQuery } = get();
    const q = searchQuery.toLowerCase();
    return tickets.filter((t) => {
      const matchesTab =
        activeTab === "All" || t.status === activeTab.toLowerCase();
      const matchesSearch =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.id.toLowerCase().includes(q) ||
        t.title.toLowerCase().includes(q) ||
        t.tag.toLowerCase().includes(q);
      return matchesTab && matchesSearch;
    });
  },

  activeTicket: () => get().tickets.find((t) => t.id === get().activeTicketId),

  messages: () => MESSAGES_MAP[get().activeTicketId] ?? [],

  studentContext: () => STUDENT_CONTEXT_MAP[get().activeTicketId],

  setActiveTicketId: (id) => set({ activeTicketId: id, replyText: "", replyError: "", showCannedResponses: false }),
  setActiveTab: (tab) => set({ activeTab: tab }),
  setSearchQuery: (q) => set({ searchQuery: q }),
  setReplyText: (t) => set({ replyText: t, replyError: "" }),
  toggleReplyToStudent: () => set((s) => ({ replyToStudent: !s.replyToStudent })),
  toggleCannedResponses: () => set((s) => ({ showCannedResponses: !s.showCannedResponses })),
  selectCannedResponse: (text) => set({ replyText: text, showCannedResponses: false }),

  sendReply: () => {
    const { replyText, activeTicketId } = get();
    if (!replyText.trim()) {
      set({ replyError: "Reply cannot be empty." });
      return;
    }
    const newMsg: Message = {
      id: Date.now().toString(),
      sender: "Sarah",
      role: "Support",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      content: replyText.trim(),
      isSupport: true,
    };
    MESSAGES_MAP[activeTicketId] = [...(MESSAGES_MAP[activeTicketId] ?? []), newMsg];
    set({ replyText: "", replyError: "" });
  },

  resolveTicket: (id) =>
    set((s) => ({
      tickets: s.tickets.map((t) => (t.id === id ? { ...t, status: "resolved" as TicketStatus } : t)),
    })),

  escalateTicket: (id) =>
    set((s) => ({
      tickets: s.tickets.map((t) => (t.id === id ? { ...t, priority: "urgent" as Priority } : t)),
    })),
}));