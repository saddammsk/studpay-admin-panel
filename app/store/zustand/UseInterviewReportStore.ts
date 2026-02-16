import { create } from 'zustand';

export type ReportPriority = 'High Priority' | 'Medium Priority' | 'Low Priority';
export type CandidateType = 'Premium Candidate' | 'Standard Candidate' | 'Follow-up Required';

export interface InterviewReport {
  id: number;
  title: string;
  description: string;
  rating: number; // 1-5 stars
  priority: ReportPriority;
  candidateType: CandidateType;
  date: string;
  author?: string;
  tags?: string[];
}

interface InterviewReportStore {
  // Data
  reports: InterviewReport[];
  searchTerm: string;
  filterPriority: ReportPriority | 'all';
  sortBy: 'date' | 'rating';

  // UI
  isAddModalOpen: boolean;
  isEditModalOpen: boolean;
  selectedReport: InterviewReport | null;

  // Computed
  filteredReports: InterviewReport[];
  stats: {
    total: number;
    highPriority: number;
    mediumPriority: number;
    lowPriority: number;
  };

  // Actions
  setReports: (reports: InterviewReport[]) => void;
  addReport: (report: Omit<InterviewReport, 'id'>) => void;
  updateReport: (id: number, updates: Partial<InterviewReport>) => void;
  deleteReport: (id: number) => void;
  setSearchTerm: (term: string) => void;
  setFilterPriority: (priority: ReportPriority | 'all') => void;
  setSortBy: (sort: 'date' | 'rating') => void;
  openAddModal: () => void;
  closeAddModal: () => void;
  openEditModal: (report: InterviewReport) => void;
  closeEditModal: () => void;
  setSelectedReport: (report: InterviewReport | null) => void;
}

const initialReports: InterviewReport[] = [
  {
    id: 1,
    title: 'Initial Assessment Interview',
    description: 'Excellent candidate with strong academic background. Recommended for premium services.',
    rating: 5,
    priority: 'High Priority',
    candidateType: 'Premium Candidate',
    date: '12/15/2024',
    author: 'Sarah Admin',
    tags: ['excellent', 'premium', 'recommended'],
  },
  {
    id: 2,
    title: 'Mid-Level Candidate Review',
    description: 'Good potential. Needs additional documentation for enrollment.',
    rating: 4,
    priority: 'Medium Priority',
    candidateType: 'Standard Candidate',
    date: '12/14/2024',
    author: 'John Interviewer',
    tags: ['standard', 'documentation-needed'],
  },
  {
    id: 3,
    title: 'Follow-up Assessment',
    description: 'Candidate needs additional clarification on visa requirements. Schedule follow-up meeting.',
    rating: 3,
    priority: 'Medium Priority',
    candidateType: 'Follow-up Required',
    date: '12/13/2024',
    author: 'Mike Support',
    tags: ['followup', 'visa-clarification'],
  },
  {
    id: 4,
    title: 'Junior Candidate Interview',
    description: 'Entry-level candidate with good potential. Recommend mentorship program.',
    rating: 3,
    priority: 'Low Priority',
    candidateType: 'Standard Candidate',
    date: '12/12/2024',
    author: 'Emma HR',
    tags: ['junior', 'mentorship'],
  },
];

const getStats = (reports: InterviewReport[]) => {
  return {
    total: reports.length,
    highPriority: reports.filter((r) => r.priority === 'High Priority').length,
    mediumPriority: reports.filter((r) => r.priority === 'Medium Priority').length,
    lowPriority: reports.filter((r) => r.priority === 'Low Priority').length,
  };
};

const filterReports = (
  reports: InterviewReport[],
  searchTerm: string,
  filterPriority: ReportPriority | 'all',
  sortBy: 'date' | 'rating'
): InterviewReport[] => {
  let filtered = reports.filter((report) => {
    const searchMatch =
      searchTerm === '' ||
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.author?.toLowerCase().includes(searchTerm.toLowerCase());

    const priorityMatch =
      filterPriority === 'all' || report.priority === filterPriority;

    return searchMatch && priorityMatch;
  });

  // Sort
  filtered = filtered.sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return b.rating - a.rating;
  });

  return filtered;
};

export const useInterviewReportStore = create<InterviewReportStore>((set, get) => ({
  // Initial state
  reports: initialReports,
  searchTerm: '',
  filterPriority: 'all',
  sortBy: 'date',
  isAddModalOpen: false,
  isEditModalOpen: false,
  selectedReport: null,
  filteredReports: initialReports,
  stats: getStats(initialReports),

  // Actions
  setReports: (reports: InterviewReport[]) => {
    const state = get();
    const filteredReports = filterReports(
      reports,
      state.searchTerm,
      state.filterPriority,
      state.sortBy
    );
    set({
      reports,
      filteredReports,
      stats: getStats(reports),
    });
  },

  addReport: (reportData: Omit<InterviewReport, 'id'>) => {
    set((state) => {
      const newReport: InterviewReport = {
        ...reportData,
        id: Math.max(...state.reports.map((r) => r.id), 0) + 1,
      };
      const newReports = [newReport, ...state.reports];
      const filteredReports = filterReports(
        newReports,
        state.searchTerm,
        state.filterPriority,
        state.sortBy
      );
      return {
        reports: newReports,
        filteredReports,
        stats: getStats(newReports),
        isAddModalOpen: false,
      };
    });
  },

  updateReport: (id: number, updates: Partial<InterviewReport>) => {
    set((state) => {
      const newReports = state.reports.map((r) =>
        r.id === id ? { ...r, ...updates } : r
      );
      const filteredReports = filterReports(
        newReports,
        state.searchTerm,
        state.filterPriority,
        state.sortBy
      );
      return {
        reports: newReports,
        filteredReports,
        stats: getStats(newReports),
        isEditModalOpen: false,
        selectedReport: null,
      };
    });
  },

  deleteReport: (id: number) => {
    set((state) => {
      const newReports = state.reports.filter((r) => r.id !== id);
      const filteredReports = filterReports(
        newReports,
        state.searchTerm,
        state.filterPriority,
        state.sortBy
      );
      return {
        reports: newReports,
        filteredReports,
        stats: getStats(newReports),
      };
    });
  },

  setSearchTerm: (term: string) => {
    set((state) => {
      const filteredReports = filterReports(
        state.reports,
        term,
        state.filterPriority,
        state.sortBy
      );
      return {
        searchTerm: term,
        filteredReports,
      };
    });
  },

  setFilterPriority: (priority: ReportPriority | 'all') => {
    set((state) => {
      const filteredReports = filterReports(
        state.reports,
        state.searchTerm,
        priority,
        state.sortBy
      );
      return {
        filterPriority: priority,
        filteredReports,
      };
    });
  },

  setSortBy: (sort: 'date' | 'rating') => {
    set((state) => {
      const filteredReports = filterReports(
        state.reports,
        state.searchTerm,
        state.filterPriority,
        sort
      );
      return {
        sortBy: sort,
        filteredReports,
      };
    });
  },

  openAddModal: () => {
    set({ isAddModalOpen: true });
  },

  closeAddModal: () => {
    set({ isAddModalOpen: false });
  },

  openEditModal: (report: InterviewReport) => {
    set({ selectedReport: report, isEditModalOpen: true });
  },

  closeEditModal: () => {
    set({ isEditModalOpen: false, selectedReport: null });
  },

  setSelectedReport: (report: InterviewReport | null) => {
    set({ selectedReport: report });
  },
}));