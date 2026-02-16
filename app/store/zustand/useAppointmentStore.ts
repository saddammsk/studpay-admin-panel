import { create } from 'zustand';

export type AppointmentStatus = 'completed' | 'scheduled' | 'cancelled';

export interface Appointment {
  id: number;
  name: string;
  date: string; // MM/DD/YYYY
  time: string; // HH:MM
  type: 'video' | 'phone' | 'in-person';
  status: AppointmentStatus;
  description?: string;
  attendee?: string;
}

interface AppointmentStore {
  // Data
  appointments: Appointment[];
  searchTerm: string;
  filterStatus: AppointmentStatus | 'all';

  // UI
  isAddModalOpen: boolean;
  isEditModalOpen: boolean;
  selectedAppointment: Appointment | null;

  // Computed
  filteredAppointments: Appointment[];
  stats: {
    total: number;
    completed: number;
    scheduled: number;
    cancelled: number;
  };

  // Actions
  setAppointments: (appointments: Appointment[]) => void;
  addAppointment: (appointment: Omit<Appointment, 'id'>) => void;
  updateAppointment: (id: number, updates: Partial<Appointment>) => void;
  deleteAppointment: (id: number) => void;
  setSearchTerm: (term: string) => void;
  setFilterStatus: (status: AppointmentStatus | 'all') => void;
  openAddModal: () => void;
  closeAddModal: () => void;
  openEditModal: (appointment: Appointment) => void;
  closeEditModal: () => void;
  setSelectedAppointment: (appointment: Appointment | null) => void;
}

const initialAppointments: Appointment[] = [
  {
    id: 1,
    name: 'KYC Document Review',
    date: '12/20/2024',
    time: '14:00',
    type: 'video',
    status: 'scheduled',
    description: 'Review of KYC documents',
    attendee: 'Sarah Admin',
  },
  {
    id: 2,
    name: 'Financial Planning Session',
    date: '12/18/2024',
    time: '10:30',
    type: 'phone',
    status: 'completed',
    description: 'Financial planning discussion',
    attendee: 'John Advisor',
  },
  {
    id: 3,
    name: 'Visa Consultation',
    date: '12/25/2024',
    time: '16:00',
    type: 'in-person',
    status: 'scheduled',
    description: 'Visa application guidance',
    attendee: 'Mike Consultant',
  },
  {
    id: 4,
    name: 'Enrollment Interview',
    date: '12/10/2024',
    time: '09:00',
    type: 'video',
    status: 'completed',
    description: 'University enrollment discussion',
    attendee: 'Emma Admin',
  },
];

const getStats = (appointments: Appointment[]) => {
  return {
    total: appointments.length,
    completed: appointments.filter((a) => a.status === 'completed').length,
    scheduled: appointments.filter((a) => a.status === 'scheduled').length,
    cancelled: appointments.filter((a) => a.status === 'cancelled').length,
  };
};

const filterAppointments = (
  appointments: Appointment[],
  searchTerm: string,
  filterStatus: AppointmentStatus | 'all'
): Appointment[] => {
  let filtered = appointments.filter((appointment) => {
    const searchMatch =
      searchTerm === '' ||
      appointment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.attendee?.toLowerCase().includes(searchTerm.toLowerCase());

    const statusMatch =
      filterStatus === 'all' || appointment.status === filterStatus;

    return searchMatch && statusMatch;
  });

  // Sort by date and time
  filtered = filtered.sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`).getTime();
    const dateB = new Date(`${b.date} ${b.time}`).getTime();
    return dateB - dateA; // Newest first
  });

  return filtered;
};

export const useAppointmentStore = create<AppointmentStore>((set, get) => ({
  // Initial state
  appointments: initialAppointments,
  searchTerm: '',
  filterStatus: 'all',
  isAddModalOpen: false,
  isEditModalOpen: false,
  selectedAppointment: null,
  filteredAppointments: initialAppointments,
  stats: getStats(initialAppointments),

  // Actions
  setAppointments: (appointments: Appointment[]) => {
    const state = get();
    const filteredAppointments = filterAppointments(
      appointments,
      state.searchTerm,
      state.filterStatus
    );
    set({
      appointments,
      filteredAppointments,
      stats: getStats(appointments),
    });
  },

  addAppointment: (appointmentData: Omit<Appointment, 'id'>) => {
    set((state) => {
      const newAppointment: Appointment = {
        ...appointmentData,
        id: Math.max(...state.appointments.map((a) => a.id), 0) + 1,
      };
      const newAppointments = [newAppointment, ...state.appointments];
      const filteredAppointments = filterAppointments(
        newAppointments,
        state.searchTerm,
        state.filterStatus
      );
      return {
        appointments: newAppointments,
        filteredAppointments,
        stats: getStats(newAppointments),
        isAddModalOpen: false,
      };
    });
  },

  updateAppointment: (id: number, updates: Partial<Appointment>) => {
    set((state) => {
      const newAppointments = state.appointments.map((a) =>
        a.id === id ? { ...a, ...updates } : a
      );
      const filteredAppointments = filterAppointments(
        newAppointments,
        state.searchTerm,
        state.filterStatus
      );
      return {
        appointments: newAppointments,
        filteredAppointments,
        stats: getStats(newAppointments),
        isEditModalOpen: false,
        selectedAppointment: null,
      };
    });
  },

  deleteAppointment: (id: number) => {
    set((state) => {
      const newAppointments = state.appointments.filter((a) => a.id !== id);
      const filteredAppointments = filterAppointments(
        newAppointments,
        state.searchTerm,
        state.filterStatus
      );
      return {
        appointments: newAppointments,
        filteredAppointments,
        stats: getStats(newAppointments),
      };
    });
  },

  setSearchTerm: (term: string) => {
    set((state) => {
      const filteredAppointments = filterAppointments(
        state.appointments,
        term,
        state.filterStatus
      );
      return {
        searchTerm: term,
        filteredAppointments,
      };
    });
  },

  setFilterStatus: (status: AppointmentStatus | 'all') => {
    set((state) => {
      const filteredAppointments = filterAppointments(
        state.appointments,
        state.searchTerm,
        status
      );
      return {
        filterStatus: status,
        filteredAppointments,
      };
    });
  },

  openAddModal: () => {
    set({ isAddModalOpen: true });
  },

  closeAddModal: () => {
    set({ isAddModalOpen: false });
  },

  openEditModal: (appointment: Appointment) => {
    set({ selectedAppointment: appointment, isEditModalOpen: true });
  },

  closeEditModal: () => {
    set({ isEditModalOpen: false, selectedAppointment: null });
  },

  setSelectedAppointment: (appointment: Appointment | null) => {
    set({ selectedAppointment: appointment });
  },
}));