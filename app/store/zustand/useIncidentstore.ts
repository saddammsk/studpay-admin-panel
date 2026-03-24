import { create } from "zustand";

export type Severity = "P1 Critical" | "P2 High" | "P3 Normal";
export type Status = "New" | "In Progress" | "Resolved" | "Closed";

export interface Incident {
  id: string;
  severity: Severity;
  studentName: string;
  studentCountry: string;
  studentAvatar: string;
  studentFlag: string;
  trigger: string;
  location: string;
  time: string;
  assignee: string;
  status: Status;
}

export type TimelineItem = {
  time: string;
  text: string;
};

const timelineMap: Record<string, TimelineItem[]> = {
  "INC-2401": [
    { time: "08:00", text: "SOS Triggered by student" },
    { time: "08:01", text: "Automated push notification sent" },
    { time: "08:02", text: "Trust contact notified via SMS" },
  ],
  "INC-2402": [
    { time: "08:10", text: "SOS Triggered by student" },
    { time: "08:11", text: "Automated push notification sent" },
    { time: "08:13", text: "Agent alerted via dashboard" },
  ],
  "INC-2398": [
    { time: "07:20", text: "Inactivity timeout detected" },
    { time: "07:22", text: "Push notification sent to student" },
    { time: "07:25", text: "Agent Dupont assigned to case" },
    { time: "07:30", text: "Student check-in attempted" },
  ],
  "INC-2395": [
    { time: "07:00", text: "Geofence exit detected" },
    { time: "07:01", text: "Alert triggered automatically" },
    { time: "07:03", text: "Agent Laurent assigned" },
  ],
  "INC-2388": [
    { time: "05:00", text: "Geofence exit detected" },
    { time: "05:02", text: "Student confirmed safe via app" },
    { time: "05:10", text: "Incident closed by Agent Dupont" },
  ],
};

const initialIncidents: Incident[] = [
  {
    id: "INC-2401",
    severity: "P1 Critical",
    studentName: "Amara Diallo",
    studentCountry: "Senegal",
    studentAvatar: "/images/avatar-1.png",
    studentFlag: "/images/🇸🇳.png",
    trigger: "SOS Manual",
    location: "Lyon, France",
    time: "3 min ago",
    assignee: "Agent Moreau",
    status: "New",
  },
  {
    id: "INC-2402",
    severity: "P1 Critical",
    studentName: "Yuki Tanaka",
    studentCountry: "Japan",
    studentAvatar: "/images/avatar2.png",
    studentFlag: "/images/🇯🇵.png",
    trigger: "SOS Manual",
    location: "Marseille, France",
    time: "7 min ago",
    assignee: "Unassigned",
    status: "New",
  },
  {
    id: "INC-2398",
    severity: "P2 High",
    studentName: "Carlos Mendes",
    studentCountry: "Brazil",
    studentAvatar: "/images/avatar3.png",
    studentFlag: "/images/🇧🇷.png",
    trigger: "Inactivity Timeout",
    location: "Paris, France",
    time: "45 min ago",
    assignee: "Agent Dupont",
    status: "In Progress",
  },
  {
    id: "INC-2395",
    severity: "P2 High",
    studentName: "Fatima Al-Hassan",
    studentCountry: "Morocco",
    studentAvatar: "/images/avatar-1.png",
    studentFlag: "/images/🇲🇦.png",
    trigger: "Geofence Exit",
    location: "Toulouse, France",
    time: "1 hr ago",
    assignee: "Agent Laurent",
    status: "In Progress",
  },
  {
    id: "INC-2388",
    severity: "P3 Normal",
    studentName: "Sofia Petrov",
    studentCountry: "Bulgaria",
    studentAvatar: "/images/avatar2.png",
    studentFlag: "/images/🇧🇬.png",
    trigger: "Geofence Exit",
    location: "Nice, France",
    time: "3 hr ago",
    assignee: "Agent Dupont",
    status: "Closed",
  },
];

interface IncidentStore {
  incidents: Incident[];
  selectedIncident: Incident | null;
  isModalOpen: boolean;

  // Derived / computed helpers
  criticalIncidents: () => Incident[];
  activeCount: () => number;
  p1Count: () => number;

  // Actions
  openIncident: (incident: Incident) => void;
  closeModal: () => void;
  resolveIncident: (id: string) => void;
  getTimeline: (id: string) => TimelineItem[];
}

export const useIncidentStore = create<IncidentStore>((set, get) => ({
  incidents: initialIncidents,
  selectedIncident: null,
  isModalOpen: false,

  criticalIncidents: () =>
    get().incidents.filter(
      (i) => i.severity === "P1 Critical" && i.status === "New"
    ),

  activeCount: () =>
    get().incidents.filter(
      (i) => i.status === "New" || i.status === "In Progress"
    ).length,

  p1Count: () =>
    get().incidents.filter((i) => i.severity === "P1 Critical").length,

  openIncident: (incident) =>
    set({ selectedIncident: incident, isModalOpen: true }),

  closeModal: () => set({ isModalOpen: false, selectedIncident: null }),

  resolveIncident: (id) =>
    set((state) => ({
      incidents: state.incidents.map((inc) =>
        inc.id === id ? { ...inc, status: "Resolved" as Status } : inc
      ),
      isModalOpen: false,
      selectedIncident: null,
    })),

  getTimeline: (id) => timelineMap[id] ?? [],
}));