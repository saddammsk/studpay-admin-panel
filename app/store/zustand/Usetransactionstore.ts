import { create } from 'zustand';

export type PaymentStatus = 'completed' | 'pending';
export type TransactionType = 'Recharge' | 'Payment' | 'Withdrawal';

export interface Payment {
  id: number;
  transaction: string;
  date: string;
  type: TransactionType;
  description: string;
  amount: string;
  status: PaymentStatus;
}

interface TransactionStore {
  payments: Payment[];
  
  filterType: string;
  filterDate: string;
  searchTerm: string;
  
  filteredPayments: Payment[];
  totalAmount: string;
  stats: {
    completed: number;
    pending: number;
    total: number;
  };
  
  setFilterType: (type: string) => void;
  setFilterDate: (date: string) => void;
  setSearchTerm: (term: string) => void;
  addPayment: (payment: Payment) => void;
  updatePaymentStatus: (id: number, status: PaymentStatus) => void;
  setPayments: (payments: Payment[]) => void;
}

const initialPayments: Payment[] = [
  {
    id: 1,
    transaction: 'TXN001',
    date: '12/15/2024',
    type: 'Recharge',
    description: 'Wallet top-up',
    amount: '+$500.00',
    status: 'completed',
  },
  {
    id: 2,
    transaction: 'TXN002',
    date: '12/14/2024',
    type: 'Payment',
    description: 'Tuition fee payment',
    amount: '$150.00',
    status: 'completed',
  },
  {
    id: 3,
    transaction: 'TXN003',
    date: '12/13/2024',
    type: 'Withdrawal',
    description: 'Bank transfer',
    amount: '$200.00',
    status: 'pending',
  },
  {
    id: 4,
    transaction: 'TXN004',
    date: '12/12/2024',
    type: 'Payment',
    description: 'Application fee',
    amount: '$50.00',
    status: 'completed',
  },
  {
    id: 5,
    transaction: 'TXN005',
    date: '12/11/2024',
    type: 'Recharge',
    description: 'Account credit',
    amount: '+$1000.00',
    status: 'pending',
  },
  {
    id: 6,
    transaction: 'TXN006',
    date: '11/20/2024',
    type: 'Withdrawal',
    description: 'Refund',
    amount: '$100.00',
    status: 'completed',
  },
];

const filterDateRange = (dateStr: string, rangeStr: string): boolean => {
  const [month, day, year] = dateStr.split('/').map(Number);
  const paymentDate = new Date(year, month - 1, day);
  const today = new Date();

  const daysDifference = Math.floor(
    (today.getTime() - paymentDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  switch (rangeStr) {
    case 'Last 7 days':
      return daysDifference <= 7;
    case 'Last 30 days':
      return daysDifference <= 30;
    case 'Last 90 days':
      return daysDifference <= 90;
    case 'All Time':
      return true;
    default:
      return true;
  }
};

const filterTransactions = (
  payments: Payment[],
  filterType: string,
  filterDate: string,
  searchTerm: string
): Payment[] => {
  return payments.filter((payment) => {
    const typeMatch =
      filterType === 'All Types' ||
      payment.type === filterType ||
      (filterType === 'Approved' && payment.status === 'completed') ||
      (filterType === 'Rejected' && payment.status === 'pending');

    const dateMatch = filterDateRange(payment.date, filterDate);

    const searchMatch =
      searchTerm === '' ||
      payment.transaction.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.type.toLowerCase().includes(searchTerm.toLowerCase());

    return typeMatch && dateMatch && searchMatch;
  });
};

const calculateTotalAmount = (payments: Payment[]): string => {
  const total = payments.reduce((sum, payment) => {
    const amount = parseFloat(payment.amount.replace(/[+$,]/g, ''));
    return sum + amount;
  }, 0);
  return `$${Math.abs(total).toFixed(2)}`;
};

const getTransactionStats = (payments: Payment[]) => {
  return {
    completed: payments.filter((p) => p.status === 'completed').length,
    pending: payments.filter((p) => p.status === 'pending').length,
    total: payments.length,
  };
};

export const useTransactionStore = create<TransactionStore>((set, get) => ({
  payments: initialPayments,
  filterType: 'All Types',
  filterDate: 'Last 30 days',
  searchTerm: '',
  filteredPayments: initialPayments,
  totalAmount: calculateTotalAmount(initialPayments),
  stats: getTransactionStats(initialPayments),

  setFilterType: (type: string) => {
    set((state) => {
      const filteredPayments = filterTransactions(
        state.payments,
        type,
        state.filterDate,
        state.searchTerm
      );
      return {
        filterType: type,
        filteredPayments,
        totalAmount: calculateTotalAmount(filteredPayments),
        stats: getTransactionStats(filteredPayments),
      };
    });
  },

  setFilterDate: (date: string) => {
    set((state) => {
      const filteredPayments = filterTransactions(
        state.payments,
        state.filterType,
        date,
        state.searchTerm
      );
      return {
        filterDate: date,
        filteredPayments,
        totalAmount: calculateTotalAmount(filteredPayments),
        stats: getTransactionStats(filteredPayments),
      };
    });
  },

  setSearchTerm: (term: string) => {
    set((state) => {
      const filteredPayments = filterTransactions(
        state.payments,
        state.filterType,
        state.filterDate,
        term
      );
      return {
        searchTerm: term,
        filteredPayments,
        totalAmount: calculateTotalAmount(filteredPayments),
        stats: getTransactionStats(filteredPayments),
      };
    });
  },

  addPayment: (payment: Payment) => {
    set((state) => {
      const newPayments = [payment, ...state.payments];
      const filteredPayments = filterTransactions(
        newPayments,
        state.filterType,
        state.filterDate,
        state.searchTerm
      );
      return {
        payments: newPayments,
        filteredPayments,
        totalAmount: calculateTotalAmount(filteredPayments),
        stats: getTransactionStats(filteredPayments),
      };
    });
  },

  updatePaymentStatus: (id: number, status: PaymentStatus) => {
    set((state) => {
      const newPayments = state.payments.map((p) =>
        p.id === id ? { ...p, status } : p
      );
      const filteredPayments = filterTransactions(
        newPayments,
        state.filterType,
        state.filterDate,
        state.searchTerm
      );
      return {
        payments: newPayments,
        filteredPayments,
        totalAmount: calculateTotalAmount(filteredPayments),
        stats: getTransactionStats(filteredPayments),
      };
    });
  },

  setPayments: (payments: Payment[]) => {
    set((state) => {
      const filteredPayments = filterTransactions(
        payments,
        state.filterType,
        state.filterDate,
        state.searchTerm
      );
      return {
        payments,
        filteredPayments,
        totalAmount: calculateTotalAmount(filteredPayments),
        stats: getTransactionStats(filteredPayments),
      };
    });
  },
}));