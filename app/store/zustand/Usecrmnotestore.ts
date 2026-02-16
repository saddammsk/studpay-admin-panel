import { create } from 'zustand';

export type NoteCategory = 'general' | 'support';

export interface CRMNote {
  id: number;
  name: string;
  dic: string;
  status: NoteCategory;
  date: string;
  EditIcon: string;
  content?: string;
  author?: string;
  tags?: string[];
}

interface CRMNoteStore {
  // Data
  notes: CRMNote[];
  searchTerm: string;
  filterCategory: NoteCategory | 'all';
  sortBy: 'date' | 'name';

  // UI
  isAddModalOpen: boolean;
  isEditModalOpen: boolean;
  selectedNote: CRMNote | null;

  // Computed
  filteredNotes: CRMNote[];
  stats: {
    total: number;
    general: number;
    support: number;
  };

  // Actions
  setNotes: (notes: CRMNote[]) => void;
  addNote: (note: Omit<CRMNote, 'id'>) => void;
  updateNote: (id: number, updates: Partial<CRMNote>) => void;
  deleteNote: (id: number) => void;
  setSearchTerm: (term: string) => void;
  setFilterCategory: (category: NoteCategory | 'all') => void;
  setSortBy: (sort: 'date' | 'name') => void;
  openAddModal: () => void;
  closeAddModal: () => void;
  openEditModal: (note: CRMNote) => void;
  closeEditModal: () => void;
  setSelectedNote: (note: CRMNote | null) => void;
}

const initialNotes: CRMNote[] = [
  {
    id: 1,
    name: 'Admin User',
    dic: 'Student contacted regarding visa documentation. All documents approved.',
    status: 'general',
    date: '12/15/2024',
    EditIcon: '/images/edit-icon.svg',
    author: 'Sarah Admin',
    tags: ['visa', 'documentation', 'approved'],
  },
  {
    id: 2,
    name: 'Support Team',
    dic: 'Wallet recharge issue resolved. Student satisfied with service.',
    status: 'support',
    date: '12/15/2024',
    EditIcon: '/images/edit-icon.svg',
    author: 'John Support',
    tags: ['wallet', 'payment', 'resolved'],
  },
  {
    id: 3,
    name: 'Admin User',
    dic: 'Enrollment documents submitted. Waiting for university verification.',
    status: 'general',
    date: '12/14/2024',
    EditIcon: '/images/edit-icon.svg',
    author: 'Sarah Admin',
    tags: ['enrollment', 'pending'],
  },
  {
    id: 4,
    name: 'Support Team',
    dic: 'Student inquiry about scholarship status answered with details.',
    status: 'support',
    date: '12/13/2024',
    EditIcon: '/images/edit-icon.svg',
    author: 'Mike Support',
    tags: ['scholarship', 'inquiry'],
  },
];

const getStats = (notes: CRMNote[]) => {
  return {
    total: notes.length,
    general: notes.filter((n) => n.status === 'general').length,
    support: notes.filter((n) => n.status === 'support').length,
  };
};

const filterNotes = (
  notes: CRMNote[],
  searchTerm: string,
  filterCategory: NoteCategory | 'all',
  sortBy: 'date' | 'name'
): CRMNote[] => {
  let filtered = notes.filter((note) => {
    const searchMatch =
      searchTerm === '' ||
      note.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.dic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.author?.toLowerCase().includes(searchTerm.toLowerCase());

    const categoryMatch =
      filterCategory === 'all' || note.status === filterCategory;

    return searchMatch && categoryMatch;
  });

  // Sort
  filtered = filtered.sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return a.name.localeCompare(b.name);
  });

  return filtered;
};

export const useCRMNoteStore = create<CRMNoteStore>((set, get) => ({
  // Initial state
  notes: initialNotes,
  searchTerm: '',
  filterCategory: 'all',
  sortBy: 'date',
  isAddModalOpen: false,
  isEditModalOpen: false,
  selectedNote: null,
  filteredNotes: initialNotes,
  stats: getStats(initialNotes),

  // Actions
  setNotes: (notes: CRMNote[]) => {
    const state = get();
    const filteredNotes = filterNotes(
      notes,
      state.searchTerm,
      state.filterCategory,
      state.sortBy
    );
    set({
      notes,
      filteredNotes,
      stats: getStats(notes),
    });
  },

  addNote: (noteData: Omit<CRMNote, 'id'>) => {
    set((state) => {
      const newNote: CRMNote = {
        ...noteData,
        id: Math.max(...state.notes.map((n) => n.id), 0) + 1,
      };
      const newNotes = [newNote, ...state.notes];
      const filteredNotes = filterNotes(
        newNotes,
        state.searchTerm,
        state.filterCategory,
        state.sortBy
      );
      return {
        notes: newNotes,
        filteredNotes,
        stats: getStats(newNotes),
        isAddModalOpen: false,
      };
    });
  },

  updateNote: (id: number, updates: Partial<CRMNote>) => {
    set((state) => {
      const newNotes = state.notes.map((n) =>
        n.id === id ? { ...n, ...updates } : n
      );
      const filteredNotes = filterNotes(
        newNotes,
        state.searchTerm,
        state.filterCategory,
        state.sortBy
      );
      return {
        notes: newNotes,
        filteredNotes,
        stats: getStats(newNotes),
        isEditModalOpen: false,
        selectedNote: null,
      };
    });
  },

  deleteNote: (id: number) => {
    set((state) => {
      const newNotes = state.notes.filter((n) => n.id !== id);
      const filteredNotes = filterNotes(
        newNotes,
        state.searchTerm,
        state.filterCategory,
        state.sortBy
      );
      return {
        notes: newNotes,
        filteredNotes,
        stats: getStats(newNotes),
      };
    });
  },

  setSearchTerm: (term: string) => {
    set((state) => {
      const filteredNotes = filterNotes(
        state.notes,
        term,
        state.filterCategory,
        state.sortBy
      );
      return {
        searchTerm: term,
        filteredNotes,
      };
    });
  },

  setFilterCategory: (category: NoteCategory | 'all') => {
    set((state) => {
      const filteredNotes = filterNotes(
        state.notes,
        state.searchTerm,
        category,
        state.sortBy
      );
      return {
        filterCategory: category,
        filteredNotes,
      };
    });
  },

  setSortBy: (sort: 'date' | 'name') => {
    set((state) => {
      const filteredNotes = filterNotes(
        state.notes,
        state.searchTerm,
        state.filterCategory,
        sort
      );
      return {
        sortBy: sort,
        filteredNotes,
      };
    });
  },

  openAddModal: () => {
    set({ isAddModalOpen: true });
  },

  closeAddModal: () => {
    set({ isAddModalOpen: false });
  },

  openEditModal: (note: CRMNote) => {
    set({ selectedNote: note, isEditModalOpen: true });
  },

  closeEditModal: () => {
    set({ isEditModalOpen: false, selectedNote: null });
  },

  setSelectedNote: (note: CRMNote | null) => {
    set({ selectedNote: note });
  },
}));