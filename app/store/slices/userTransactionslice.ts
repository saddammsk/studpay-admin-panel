import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

interface TransactionState {
  payments: Payment[];
  filterType: string;
  filterDate: string;
  searchTerm: string;
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

const initialState: TransactionState = {
  payments: initialPayments,
  filterType: 'All Types',
  filterDate: 'Last 30 days',
  searchTerm: '',
};

const userTransactionslice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setFilterType: (state, action: PayloadAction<string>) => {
      state.filterType = action.payload;
    },
    setFilterDate: (state, action: PayloadAction<string>) => {
      state.filterDate = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    addPayment: (state, action: PayloadAction<Payment>) => {
      state.payments.unshift(action.payload);
    },
    updatePaymentStatus: (
      state,
      action: PayloadAction<{ id: number; status: PaymentStatus }>
    ) => {
      const payment = state.payments.find((p) => p.id === action.payload.id);
      if (payment) {
        payment.status = action.payload.status;
      }
    },
  },
});

export const {
  setFilterType,
  setFilterDate,
  setSearchTerm,
  addPayment,
  updatePaymentStatus,
} = userTransactionslice.actions;

export default userTransactionslice.reducer;