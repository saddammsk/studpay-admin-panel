/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';

export type PaymentStatus = 'Active' | 'Pending';

export interface Payment {
  id: number;
  account: {
    icon: string;
    name: string;
    number: string;
  };
  ibanAddress: string;
  balance: string;
  status: PaymentStatus;
  change: {
    icon: string;
    type: string;
    direction: string;
  };
  timestamp: string;
}

const initialPayments: Payment[] = [
  {
    id: 1,
    account: { icon: '/images/wallet-black.svg', name: 'Main Checking Account', number: 'ACC-001' },
    ibanAddress: 'DE89 3704 0044 0532 0130 00',
    balance: '€4.523,67',
    status: 'Active',
    change: { icon: '/images/price-arrow-green.svg', type: '+12.5%', direction: 'up' },
    timestamp: '2024-01-28 09:15',
  },
  {
    id: 2,
    account: { icon: '/images/card-black.svg', name: 'Emergency Fund', number: 'ACC-002' },
    ibanAddress: 'DE89 3704 0044 0532 0130 01',
    balance: '€15.280,00',
    status: 'Active',
    change: { icon: '/images/price-arrow-green.svg', type: '+3.2%', direction: 'up' },
    timestamp: '2024-01-25 14:30',
  },
  {
    id: 3,
    account: { icon: '/images/price-arrow-gray.svg', name: 'Investment Portfolio', number: 'ACC-003' },
    ibanAddress: 'DE89 3704 0044 0532 0130 02',
    balance: '€8.945,32',
    status: 'Active',
    change: { icon: '/images/price-arrow-red.svg', type: '-2.1%', direction: 'down' },
    timestamp: '2024-01-27 11:45',
  },
  {
    id: 4,
    account: { icon: '/images/wallet-black.svg', name: 'Crypto Wallet', number: 'ACC-004' },
    ibanAddress: '0x742d...3a4F',
    balance: '€2.156,89',
    status: 'Pending',
    change: { icon: '/images/price-arrow-green.svg', type: '+8.7%', direction: 'up' },
    timestamp: '2024-01-26 16:20',
  },
];

interface AccountsStore {
  payments: Payment[];
  openDropdownId: number | null;
  editingPayment: Payment | null;
  viewingPayment: Payment | null;

  setOpenDropdown: (id: number | null) => void;
  toggleStatus: (id: number) => void;
  deletePayment: (id: number) => void;
  setEditingPayment: (payment: Payment | null) => void;
  setViewingPayment: (payment: Payment | null) => void;
  updatePayment: (updated: Payment) => void;
}

export const useAccountsStore = create<AccountsStore>((set) => ({
  payments: initialPayments,
  openDropdownId: null,
  editingPayment: null,
  viewingPayment: null,

  setOpenDropdown: (id) => set({ openDropdownId: id }),

  toggleStatus: (id) =>
    set((state) => ({
      payments: state.payments.map((p) =>
        p.id === id
          ? { ...p, status: p.status === 'Active' ? 'Pending' : 'Active' }
          : p
      ),
      openDropdownId: null,
    })),

  deletePayment: (id) =>
    set((state) => ({
      payments: state.payments.filter((p) => p.id !== id),
      openDropdownId: null,
    })),

  setEditingPayment: (payment) => set({ editingPayment: payment, openDropdownId: null }),
  setViewingPayment: (payment) => set({ viewingPayment: payment, openDropdownId: null }),

  updatePayment: (updated) =>
    set((state) => ({
      payments: state.payments.map((p) => (p.id === updated.id ? updated : p)),
      editingPayment: null,
    })),
}));