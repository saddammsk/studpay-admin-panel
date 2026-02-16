import { create } from 'zustand';

export type ContractStatus = 'signed' | 'pending' | 'rejected';

export interface Contract {
  id: number;
  name: string;
  pdf: string;
  status: ContractStatus;
  eyesImg: string;
  downloadImg: string;
  createdDate?: string;
  signedDate?: string;
  content?: string;
}

interface ContractStore {
  // Data
  contracts: Contract[];
  selectedContract: Contract | null;
  searchTerm: string;
  filterStatus: ContractStatus | 'all';

  // UI
  isViewModalOpen: boolean;
  isSignModalOpen: boolean;
  isLoading: boolean;

  // Computed
  filteredContracts: Contract[];
  stats: {
    signed: number;
    pending: number;
    rejected: number;
    total: number;
  };

  // Actions
  setContracts: (contracts: Contract[]) => void;
  addContract: (contract: Contract) => void;
  updateContractStatus: (id: number, status: ContractStatus) => void;
  deleteContract: (id: number) => void;
  setSearchTerm: (term: string) => void;
  setFilterStatus: (status: ContractStatus | 'all') => void;
  setSelectedContract: (contract: Contract | null) => void;
  openViewModal: (contract: Contract) => void;
  closeViewModal: () => void;
  openSignModal: (contract: Contract) => void;
  closeSignModal: () => void;
  signContract: (id: number, signature: string) => void;
  setLoading: (loading: boolean) => void;
}

const initialContracts: Contract[] = [
  {
    id: 1,
    name: 'Terms of Service Agreement',
    pdf: 'Signed: 12/1/2024',
    status: 'signed',
    eyesImg: '/images/eyes-icon.svg',
    downloadImg: '/images/download-icon.svg',
    signedDate: '12/1/2024',
    createdDate: '11/15/2024',
  },
  {
    id: 2,
    name: 'AVI Disbursement Contract',
    pdf: 'Signed: 12/5/2024',
    status: 'signed',
    eyesImg: '/images/eyes-icon.svg',
    downloadImg: '/images/download-icon.svg',
    signedDate: '12/5/2024',
    createdDate: '11/20/2024',
  },
  {
    id: 3,
    name: 'Privacy Policy Agreement',
    pdf: 'Pending: 12/16/2024',
    status: 'pending',
    eyesImg: '/images/eyes-icon.svg',
    downloadImg: '/images/download-icon.svg',
    createdDate: '12/10/2024',
  },
  {
    id: 4,
    name: 'Data Processing Agreement',
    pdf: 'Rejected: 12/8/2024',
    status: 'rejected',
    eyesImg: '/images/eyes-icon.svg',
    downloadImg: '/images/download-icon.svg',
    createdDate: '11/25/2024',
  },
];

const getStats = (contracts: Contract[]) => {
  return {
    signed: contracts.filter((c) => c.status === 'signed').length,
    pending: contracts.filter((c) => c.status === 'pending').length,
    rejected: contracts.filter((c) => c.status === 'rejected').length,
    total: contracts.length,
  };
};

const filterContracts = (
  contracts: Contract[],
  searchTerm: string,
  filterStatus: ContractStatus | 'all'
): Contract[] => {
  return contracts.filter((contract) => {
    const searchMatch =
      searchTerm === '' ||
      contract.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contract.pdf.toLowerCase().includes(searchTerm.toLowerCase());

    const statusMatch =
      filterStatus === 'all' || contract.status === filterStatus;

    return searchMatch && statusMatch;
  });
};

export const useContractStore = create<ContractStore>((set, get) => ({
  contracts: initialContracts,
  selectedContract: null,
  searchTerm: '',
  filterStatus: 'all',
  isViewModalOpen: false,
  isSignModalOpen: false,
  isLoading: false,
  filteredContracts: initialContracts,
  stats: getStats(initialContracts),

  setContracts: (contracts: Contract[]) => {
    const filteredContracts = filterContracts(
      contracts,
      get().searchTerm,
      get().filterStatus
    );
    set({
      contracts,
      filteredContracts,
      stats: getStats(contracts),
    });
  },

  addContract: (contract: Contract) => {
    set((state) => {
      const newContracts = [contract, ...state.contracts];
      const filteredContracts = filterContracts(
        newContracts,
        state.searchTerm,
        state.filterStatus
      );
      return {
        contracts: newContracts,
        filteredContracts,
        stats: getStats(newContracts),
      };
    });
  },

  updateContractStatus: (id: number, status: ContractStatus) => {
    set((state) => {
      const newContracts = state.contracts.map((c) =>
        c.id === id
          ? {
              ...c,
              status,
              pdf:
                status === 'signed'
                  ? `Signed: ${new Date().toLocaleDateString()}`
                  : status === 'pending'
                  ? `Pending: ${new Date().toLocaleDateString()}`
                  : `Rejected: ${new Date().toLocaleDateString()}`,
              signedDate:
                status === 'signed'
                  ? new Date().toISOString().split('T')[0]
                  : c.signedDate,
            }
          : c
      );
      const filteredContracts = filterContracts(
        newContracts,
        state.searchTerm,
        state.filterStatus
      );
      return {
        contracts: newContracts,
        filteredContracts,
        stats: getStats(newContracts),
      };
    });
  },

  deleteContract: (id: number) => {
    set((state) => {
      const newContracts = state.contracts.filter((c) => c.id !== id);
      const filteredContracts = filterContracts(
        newContracts,
        state.searchTerm,
        state.filterStatus
      );
      return {
        contracts: newContracts,
        filteredContracts,
        stats: getStats(newContracts),
      };
    });
  },

  setSearchTerm: (term: string) => {
    set((state) => {
      const filteredContracts = filterContracts(
        state.contracts,
        term,
        state.filterStatus
      );
      return {
        searchTerm: term,
        filteredContracts,
      };
    });
  },

  setFilterStatus: (status: ContractStatus | 'all') => {
    set((state) => {
      const filteredContracts = filterContracts(
        state.contracts,
        state.searchTerm,
        status
      );
      return {
        filterStatus: status,
        filteredContracts,
      };
    });
  },

  setSelectedContract: (contract: Contract | null) => {
    set({ selectedContract: contract });
  },

  openViewModal: (contract: Contract) => {
    set({ selectedContract: contract, isViewModalOpen: true });
  },

  closeViewModal: () => {
    set({ isViewModalOpen: false, selectedContract: null });
  },

  openSignModal: (contract: Contract) => {
    set({ selectedContract: contract, isSignModalOpen: true });
  },

  closeSignModal: () => {
    set({ isSignModalOpen: false, selectedContract: null });
  },

  signContract: (id: number, signature: string) => {
    set((state) => {
      const newContracts = state.contracts.map((c) =>
        c.id === id
          ? {
              ...c,
              status: 'signed' as const,
              pdf: `Signed: ${new Date().toLocaleDateString()}`,
              signedDate: new Date().toISOString().split('T')[0],
            }
          : c
      );
      const filteredContracts = filterContracts(
        newContracts,
        state.searchTerm,
        state.filterStatus
      );
      return {
        contracts: newContracts,
        filteredContracts,
        stats: getStats(newContracts),
        isSignModalOpen: false,
        selectedContract: null,
      };
    });
  },

  setLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },
}));