import { create } from "zustand";


export type Permission = "readDossiers" | "writeDecisions" | "manageKeys" | "viewAnalytics";
export type UserRole = "Officer" | "Auditor" | "Admin";

export interface AccessUser {
  id: string;
  initials: string;
  name: string;
  role: UserRole;
  email: string;
  bank: string;
  lastLogin: string;
  permissions: Record<Permission, boolean>;
}


export const PERMISSION_LABELS: Record<Permission, string> = {
  readDossiers: "Read Dossiers",
  writeDecisions: "Write Decisions",
  manageKeys: "Manage Keys",
  viewAnalytics: "View Analytics",
};

export const PERMISSION_KEYS = Object.keys(PERMISSION_LABELS) as Permission[];


interface AccessControlStore {
  users: AccessUser[];
  togglePermission: (userId: string, permission: Permission) => void;
}

const SEED_USERS: AccessUser[] = [
  {
    id: "1",
    initials: "AK",
    name: "Ahmed Khan",
    role: "Officer",
    email: "ahmed@db.pk",
    bank: "Deutsche Bank",
    lastLogin: "5 min ago",
    permissions: {
      readDossiers: true,
      writeDecisions: true,
      manageKeys: false,
      viewAnalytics: true,
    },
  },
  {
    id: "2",
    initials: "SA",
    name: "Sara Ali",
    role: "Auditor",
    email: "sara@hbl.pk",
    bank: "HBL",
    lastLogin: "2 hours ago",
    permissions: {
      readDossiers: true,
      writeDecisions: false,
      manageKeys: false,
      viewAnalytics: true,
    },
  },
  {
    id: "3",
    initials: "BM",
    name: "Bilal Malik",
    role: "Admin",
    email: "bilal@mcb.pk",
    bank: "MCB",
    lastLogin: "1 day ago",
    permissions: {
      readDossiers: true,
      writeDecisions: true,
      manageKeys: true,
      viewAnalytics: true,
    },
  },
];

export const useAccessControlStore = create<AccessControlStore>((set) => ({
  users: SEED_USERS,

  togglePermission: (userId, permission) =>
    set((state) => ({
      users: state.users.map((u) =>
        u.id === userId
          ? { ...u, permissions: { ...u.permissions, [permission]: !u.permissions[permission] } }
          : u
      ),
    })),
}));