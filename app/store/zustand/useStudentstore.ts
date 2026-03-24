import { create } from "zustand";

export type StudentStatus = "Verified" | "Pending" | "Unverified";

export interface Student {
  id: string;
  name: string;
  country: string;
  avatar: string;
  flag: string;
  trust: number;
  contacts: number;
  status: StudentStatus;
  safeMode: boolean;
}

const initialStudents: Student[] = [
  {
    id: "1",
    name: "Amara Diallo",
    country: "Senegal",
    avatar: "/images/avatar-1.png",
    flag: "/images/🇸🇳.png",
    trust: 92,
    contacts: 3,
    status: "Verified",
    safeMode: true,
  },
  {
    id: "2",
    name: "Yuki Tanaka",
    country: "Japan",
    avatar: "/images/avatar2.png",
    flag: "/images/🇯🇵.png",
    trust: 78,
    contacts: 2,
    status: "Verified",
    safeMode: true,
  },
  {
    id: "3",
    name: "Carlos Mendes",
    country: "Brazil",
    avatar: "/images/avatar3.png",
    flag: "/images/🇧🇷.png",
    trust: 65,
    contacts: 1,
    status: "Pending",
    safeMode: true,
  },
  {
    id: "4",
    name: "Fatima Al-Hassan",
    country: "Morocco",
    avatar: "/images/avatar-1.png",
    flag: "/images/🇲🇦.png",
    trust: 88,
    contacts: 3,
    status: "Verified",
    safeMode: false,
  },
  {
    id: "5",
    name: "Liam O'Brien",
    country: "Ireland",
    avatar: "/images/avatar2.png",
    flag: "/images/🇮🇪.png",
    trust: 45,
    contacts: 0,
    status: "Unverified",
    safeMode: true,
  },
  {
    id: "6",
    name: "Sofia Petrov",
    country: "Bulgaria",
    avatar: "/images/avatar3.png",
    flag: "/images/🇧🇬.png",
    trust: 81,
    contacts: 2,
    status: "Verified",
    safeMode: true,
  },
];

interface StudentStore {
  students: Student[];
  searchQuery: string;

  // Computed selectors
  filteredStudents: () => Student[];
  safeModeActiveCount: () => number;
  totalCount: () => number;

  // Actions
  setSafeMode: (id: string, value: boolean) => void;
  setSearchQuery: (query: string) => void;
}

export const useStudentStore = create<StudentStore>((set, get) => ({
  students: initialStudents,
  searchQuery: "",

  filteredStudents: () => {
    const { students, searchQuery } = get();
    if (!searchQuery.trim()) return students;
    const q = searchQuery.toLowerCase();
    return students.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.country.toLowerCase().includes(q) ||
        s.status.toLowerCase().includes(q)
    );
  },

  safeModeActiveCount: () =>
    get().students.filter((s) => s.safeMode).length,

  totalCount: () => get().students.length,

  setSafeMode: (id, value) =>
    set((state) => ({
      students: state.students.map((s) =>
        s.id === id ? { ...s, safeMode: value } : s
      ),
    })),

  setSearchQuery: (query) => set({ searchQuery: query }),
}));