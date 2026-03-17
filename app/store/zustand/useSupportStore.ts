import { create } from "zustand";
import { toast } from "sonner";

export type MessageSender = "user" | "agent";
export type MessageStatus = "sent" | "delivered" | "read";

export interface ChatMessage {
  id: number;
  sender: MessageSender;
  text: string;
  time: string;
  status?: MessageStatus;
}

export interface ChatAttachment {
  id: string;
  name: string;
  size: string;
  type: string;
}

type ModalType = "createTicket" | "escalate" | null;

interface TicketFormData {
  category: string;
  priority: string;
  subject: string;
  description: string;
  agent: string;
  file: File | null;
}

interface EscalationFormData {
  reason: string;
  level: 2 | 3;
  note: string;
  slackNotification: boolean;
  emailNotification: boolean;
}

interface SupportState {
  messages: ChatMessage[];
  inputValue: string;
  isTyping: boolean;
  isLive: boolean;
  pendingAttachment: ChatAttachment | null;

  setInputValue: (value: string) => void;
  sendMessage: () => void;
  clearInput: () => void;
  attachFile: (file: File) => void;
  removeAttachment: () => void;

  activeModal: ModalType;
  search: string;
  statusFilter: string;
  categoryFilter: string;
  priorityFilter: string;
  showAdvancedFilters: boolean;

  ticketForm: TicketFormData;
  escalationForm: EscalationFormData;

  openModal: (modal: ModalType) => void;
  closeModal: () => void;
  setSearch: (value: string) => void;
  setStatusFilter: (value: string) => void;
  setCategoryFilter: (value: string) => void;
  setPriorityFilter: (value: string) => void;
  toggleAdvancedFilters: () => void;
  resetFilters: () => void;

  setTicketForm: (data: Partial<TicketFormData>) => void;
  setTicketFile: (file: File | null) => void;
  isTicketValid: () => boolean;
  submitTicket: () => void;

  setEscalationForm: (data: Partial<EscalationFormData>) => void;
  isEscalationValid: () => boolean;
  submitEscalation: () => void;
}

const initialTicketForm: TicketFormData = {
  category: "",
  priority: "",
  subject: "",
  description: "",
  agent: "",
  file: null,
};

const initialEscalationForm: EscalationFormData = {
  reason: "",
  level: 2,
  note: "",
  slackNotification: true,
  emailNotification: true,
};

const formatTime = (): string => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const h = hours % 12 || 12;
  return `${h}:${minutes} ${ampm}`;
};

const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const AUTO_REPLIES: string[] = [
  "Thank you for that information. Let me look into this for you.",
  "I understand. Could you please provide me with more details?",
  "I've checked your account and everything looks good on our end. Let me investigate further.",
  "I appreciate your patience. I'm working on resolving this right now.",
  "That's very helpful. I'll update your ticket with this information.",
];

let nextId = 5;

export const useSupportStore = create<SupportState>((set, get) => ({
  messages: [
    {
      id: 1,
      sender: "user",
      text: "Hi, my card stopped working at the ATM today. It just says 'Card Declined'.",
      time: "10:32 AM",
      status: "read",
    },
    {
      id: 2,
      sender: "agent",
      text: "Hello Marie! I'm sorry to hear that. Let me check your card status right away.",
      time: "10:33 AM",
    },
    {
      id: 3,
      sender: "agent",
      text: "I can see your card is active. Can you tell me which ATM you tried to use?",
      time: "10:34 AM",
    },
    {
      id: 4,
      sender: "agent",
      text: "Also, were you trying to withdraw in EUR or another currency?",
      time: "10:34 AM",
    },
  ],

  inputValue: "",
  isTyping: false,
  isLive: true,
  pendingAttachment: null,

  setInputValue: (value) => set({ inputValue: value }),

  sendMessage: () => {
    const { inputValue, pendingAttachment } = get();
    const trimmed = inputValue.trim();
    if (!trimmed && !pendingAttachment) return;

    const text = pendingAttachment
      ? trimmed
        ? `📎 ${pendingAttachment.name}\n${trimmed}`
        : `📎 ${pendingAttachment.name} (${pendingAttachment.size})`
      : trimmed;

    const userMsg: ChatMessage = {
      id: nextId++,
      sender: "user",
      text,
      time: formatTime(),
      status: "sent",
    };

    set((state) => ({
      messages: [...state.messages, userMsg],
      inputValue: "",
      pendingAttachment: null,
    }));

    setTimeout(() => {
      set((state) => ({
        messages: state.messages.map((m) =>
          m.id === userMsg.id ? { ...m, status: "delivered" as MessageStatus } : m
        ),
      }));
    }, 500);

    setTimeout(() => {
      set((state) => ({
        messages: state.messages.map((m) =>
          m.id === userMsg.id ? { ...m, status: "read" as MessageStatus } : m
        ),
      }));
    }, 1200);

    set({ isTyping: true });

    const delay = 1500 + Math.random() * 2000;
    setTimeout(() => {
      const reply = AUTO_REPLIES[Math.floor(Math.random() * AUTO_REPLIES.length)];
      const agentMsg: ChatMessage = {
        id: nextId++,
        sender: "agent",
        text: reply,
        time: formatTime(),
      };

      set((state) => ({
        messages: [...state.messages, agentMsg],
        isTyping: false,
      }));
    }, delay);
  },

  clearInput: () => set({ inputValue: "" }),

  attachFile: (file) => {
    set({
      pendingAttachment: {
        id: crypto.randomUUID(),
        name: file.name,
        size: formatFileSize(file.size),
        type: file.type,
      },
    });
  },

  removeAttachment: () => set({ pendingAttachment: null }),

  activeModal: null,
  search: "",
  statusFilter: "All…",
  categoryFilter: "All…",
  priorityFilter: "All…",
  showAdvancedFilters: false,

  ticketForm: initialTicketForm,
  escalationForm: initialEscalationForm,

  openModal: (modal) => set({ activeModal: modal }),

  closeModal: () =>
    set({
      activeModal: null,
      ticketForm: initialTicketForm,
      escalationForm: initialEscalationForm,
    }),

  setSearch: (value) => set({ search: value }),
  setStatusFilter: (value) => set({ statusFilter: value }),
  setCategoryFilter: (value) => set({ categoryFilter: value }),
  setPriorityFilter: (value) => set({ priorityFilter: value }),
  toggleAdvancedFilters: () => set((s) => ({ showAdvancedFilters: !s.showAdvancedFilters })),
  resetFilters: () => set({ search: "", statusFilter: "All…", categoryFilter: "All…", priorityFilter: "All…" }),

  setTicketForm: (data) =>
    set((state) => ({
      ticketForm: { ...state.ticketForm, ...data },
    })),

  setTicketFile: (file) =>
    set((state) => ({
      ticketForm: { ...state.ticketForm, file },
    })),

  isTicketValid: () => {
    const { category, priority, subject, description, agent } = get().ticketForm;
    return category !== "" && priority !== "" && subject.trim() !== "" && description.trim() !== "" && agent !== "";
  },

  submitTicket: () => {
    if (!get().isTicketValid()) return;

    const { subject, priority, agent } = get().ticketForm;

    set({
      activeModal: null,
      ticketForm: initialTicketForm,
    });

    toast.success("Ticket Created", {
      description: `"${subject}" assigned to ${agent} (${priority} priority).`,
    });
  },

  setEscalationForm: (data) =>
    set((state) => ({
      escalationForm: { ...state.escalationForm, ...data },
    })),

  isEscalationValid: () => {
    const { reason, note } = get().escalationForm;
    return reason !== "" && note.trim().length >= 10;
  },

  submitEscalation: () => {
    if (!get().isEscalationValid()) return;

    const { reason, level, slackNotification, emailNotification } = get().escalationForm;

    const notifications: string[] = [];
    if (slackNotification) notifications.push("Slack");
    if (emailNotification) notifications.push("Email");

    set({
      activeModal: null,
      escalationForm: initialEscalationForm,
    });

    toast.success("Ticket Escalated", {
      description: `Escalated to Level ${level} — ${reason}. Notifications: ${notifications.join(", ") || "None"}.`,
    });
  },
}));