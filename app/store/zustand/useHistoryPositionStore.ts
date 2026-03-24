import { create } from "zustand";

export type GPSSource = "Satellite" | "Cell Tower" | "WiFi";
export type SignalStrength = "Strong" | "Moderate" | "Weak";
export type SortField = "name" | "lastSeen" | "battery";
export type SortOrder = "asc" | "desc";
export type ActiveTab = "map" | "list";
export type RetentionPeriod = "7 days" | "14 days" | "30 days" | "90 days";

export interface PositionRecord {
  id: string;
  userId: string;
  userName: string;
  timestamp: string;
  lat: number;
  lng: number;
  battery: number;
  signal: SignalStrength;
  gpsSource: GPSSource;
  address: string;
}

export interface UserRecord {
  id: string;
  name: string;
  avatar: string;
  country: string;
  lastSeen: string;
  battery: number;
  signal: SignalStrength;
  gpsSource: GPSSource;
  lat: number;
  lng: number;
  address: string;
  positions: PositionRecord[];
}

const mockUsers: UserRecord[] = [
  {
    id: "USR-1042",
    name: "Marie Dupont",
    avatar: "/images/avatar-1.png",
    country: "France",
    lastSeen: "2026-02-12 14:32:07",
    battery: 72,
    signal: "Strong",
    gpsSource: "Satellite",
    lat: 48.8566,
    lng: 2.3522,
    address: "Notre-Dame, Paris",
    positions: [
      { id: "p1", userId: "USR-1042", userName: "Marie Dupont", timestamp: "2026-02-12 12:20:00", lat: 48.851, lng: 2.341, battery: 85, signal: "Strong", gpsSource: "Satellite", address: "Louvre, Paris" },
      { id: "p2", userId: "USR-1042", userName: "Marie Dupont", timestamp: "2026-02-12 13:22:00", lat: 48.853, lng: 2.349, battery: 79, signal: "Strong", gpsSource: "Satellite", address: "Châtelet, Paris" },
      { id: "p3", userId: "USR-1042", userName: "Marie Dupont", timestamp: "2026-02-12 14:32:07", lat: 48.8566, lng: 2.3522, battery: 72, signal: "Strong", gpsSource: "Satellite", address: "Notre-Dame, Paris" },
    ],
  },
  {
    id: "USR-1043",
    name: "Amara Diallo",
    avatar: "/images/avatar2.png",
    country: "Senegal",
    lastSeen: "2026-02-12 11:15:42",
    battery: 45,
    signal: "Moderate",
    gpsSource: "Cell Tower",
    lat: 45.764,
    lng: 4.8357,
    address: "Bellecour, Lyon",
    positions: [
      { id: "p4", userId: "USR-1043", userName: "Amara Diallo", timestamp: "2026-02-12 09:00:00", lat: 45.748, lng: 4.846, battery: 60, signal: "Strong", gpsSource: "Satellite", address: "Part-Dieu, Lyon" },
      { id: "p5", userId: "USR-1043", userName: "Amara Diallo", timestamp: "2026-02-12 11:15:42", lat: 45.764, lng: 4.8357, battery: 45, signal: "Moderate", gpsSource: "Cell Tower", address: "Bellecour, Lyon" },
    ],
  },
  {
    id: "USR-1044",
    name: "Yuki Tanaka",
    avatar: "/images/avatar3.png",
    country: "Japan",
    lastSeen: "2026-02-12 08:55:10",
    battery: 91,
    signal: "Strong",
    gpsSource: "Satellite",
    lat: 43.2965,
    lng: 5.3698,
    address: "Cours Julien, Marseille",
    positions: [
      { id: "p6", userId: "USR-1044", userName: "Yuki Tanaka", timestamp: "2026-02-12 07:30:00", lat: 43.289, lng: 5.375, battery: 95, signal: "Strong", gpsSource: "Satellite", address: "Vieux-Port, Marseille" },
      { id: "p7", userId: "USR-1044", userName: "Yuki Tanaka", timestamp: "2026-02-12 08:55:10", lat: 43.2965, lng: 5.3698, battery: 91, signal: "Strong", gpsSource: "Satellite", address: "Cours Julien, Marseille" },
    ],
  },
  {
    id: "USR-1045",
    name: "Carlos Mendes",
    avatar: "/images/avatar3.png",
    country: "Brazil",
    lastSeen: "2026-02-12 16:10:00",
    battery: 28,
    signal: "Weak",
    gpsSource: "WiFi",
    lat: 43.6047,
    lng: 1.4442,
    address: "Capitole, Toulouse",
    positions: [
      { id: "p8", userId: "USR-1045", userName: "Carlos Mendes", timestamp: "2026-02-12 15:00:00", lat: 43.598, lng: 1.451, battery: 35, signal: "Moderate", gpsSource: "Cell Tower", address: "Saint-Cyprien, Toulouse" },
      { id: "p9", userId: "USR-1045", userName: "Carlos Mendes", timestamp: "2026-02-12 16:10:00", lat: 43.6047, lng: 1.4442, battery: 28, signal: "Weak", gpsSource: "WiFi", address: "Capitole, Toulouse" },
    ],
  },
];

interface HistoryPositionStore {
  users: UserRecord[];
  selectedUser: UserRecord | null;
  searchQuery: string;
  historyRange: string;
  retentionPeriod: RetentionPeriod;
  activeTab: ActiveTab;
  playbackIndex: number;
  isPlaying: boolean;
  sortField: SortField;
  sortOrder: SortOrder;
  isPurgeModalOpen: boolean;
  isExportModalOpen: boolean;
  purgeConfirmText: string;
  purgeError: string;

  filteredUsers: () => UserRecord[];
  currentPosition: () => PositionRecord | null;

  setSearchQuery: (v: string) => void;
  setHistoryRange: (v: string) => void;
  setRetentionPeriod: (v: RetentionPeriod) => void;
  setActiveTab: (v: ActiveTab) => void;
  selectUser: (user: UserRecord) => void;
  setPlaybackIndex: (i: number) => void;
  stepPlayback: (dir: "prev" | "next") => void;
  togglePlay: () => void;
  toggleSort: (f: SortField) => void;
  openPurgeModal: () => void;
  closePurgeModal: () => void;
  setPurgeConfirmText: (v: string) => void;
  confirmPurge: () => void;
  openExportModal: () => void;
  closeExportModal: () => void;
}

export const useHistoryPositionStore = create<HistoryPositionStore>((set, get) => ({
  users: mockUsers,
  selectedUser: mockUsers[0],
  searchQuery: "",
  historyRange: "Last 24 hours",
  retentionPeriod: "14 days",
  activeTab: "map",
  playbackIndex: 0,
  isPlaying: false,
  sortField: "lastSeen",
  sortOrder: "desc",
  isPurgeModalOpen: false,
  isExportModalOpen: false,
  purgeConfirmText: "",
  purgeError: "",

  filteredUsers: () => {
    const { users, searchQuery, sortField, sortOrder } = get();
    const q = searchQuery.toLowerCase();
    const filtered = q
      ? users.filter(
          (u) =>
            u.name.toLowerCase().includes(q) ||
            u.id.toLowerCase().includes(q) ||
            u.country.toLowerCase().includes(q)
        )
      : users;
    return [...filtered].sort((a, b) => {
      let cmp = 0;
      if (sortField === "name") cmp = a.name.localeCompare(b.name);
      else if (sortField === "battery") cmp = a.battery - b.battery;
      else cmp = a.lastSeen.localeCompare(b.lastSeen);
      return sortOrder === "asc" ? cmp : -cmp;
    });
  },

  currentPosition: () => {
    const { selectedUser, playbackIndex } = get();
    return selectedUser?.positions[playbackIndex] ?? null;
  },

  setSearchQuery: (v) => set({ searchQuery: v }),
  setHistoryRange: (v) => set({ historyRange: v }),
  setRetentionPeriod: (v) => set({ retentionPeriod: v }),
  setActiveTab: (v) => set({ activeTab: v }),
  selectUser: (user) => set({ selectedUser: user, playbackIndex: 0, isPlaying: false }),
  setPlaybackIndex: (i) => set({ playbackIndex: i }),

  stepPlayback: (dir) => {
    const { selectedUser, playbackIndex } = get();
    if (!selectedUser) return;
    const max = selectedUser.positions.length - 1;
    const next = dir === "next" ? Math.min(playbackIndex + 1, max) : Math.max(playbackIndex - 1, 0);
    set({ playbackIndex: next });
  },

  togglePlay: () => set((s) => ({ isPlaying: !s.isPlaying })),

  toggleSort: (f) => {
    const { sortField, sortOrder } = get();
    if (sortField === f) set({ sortOrder: sortOrder === "asc" ? "desc" : "asc" });
    else set({ sortField: f, sortOrder: "asc" });
  },

  openPurgeModal: () => set({ isPurgeModalOpen: true, purgeConfirmText: "", purgeError: "" }),
  closePurgeModal: () => set({ isPurgeModalOpen: false, purgeConfirmText: "", purgeError: "" }),
  setPurgeConfirmText: (v) => set({ purgeConfirmText: v, purgeError: "" }),

  confirmPurge: () => {
    const { purgeConfirmText } = get();
    if (purgeConfirmText !== "PURGE") {
      set({ purgeError: 'Type "PURGE" to confirm data deletion.' });
      return;
    }
    set({ isPurgeModalOpen: false, purgeConfirmText: "", purgeError: "" });
  },

  openExportModal: () => set({ isExportModalOpen: true }),
  closeExportModal: () => set({ isExportModalOpen: false }),
}));