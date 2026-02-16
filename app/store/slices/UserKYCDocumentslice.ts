import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PaymentStatus = 'approved' | 'Pending' | 'rejected';

export interface Payment {
  id: number;
  Mainicon: string;
  name: string;
  pdf: string;
  date: string;
  status: PaymentStatus;
  eyesImg: string;
  downloadImg: string;
  quality: string;
}

interface DocumentState {
  documents: Payment[];
  filteredStatus: PaymentStatus | 'all';
  loading: boolean;
  selectedDocument: Payment | null;
}

const initialDocuments: Payment[] = [
  {
    id: 1,
    Mainicon: '/images/checkgreendark.svg',
    name: 'Passport',
    pdf: 'passport_scan.pdf',
    date: 'Uploaded: 12/10/2024',
    status: 'approved',
    eyesImg: '/images/eyes-icon.svg',
    downloadImg: '/images/download-icon.svg',
    quality: '',
  },
  {
    id: 2,
    Mainicon: '/images/checkgreendark.svg',
    name: 'Student Visa',
    pdf: 'student_visa.pdf',
    date: 'Uploaded: 12/10/2024',
    status: 'Pending',
    eyesImg: '/images/eyes-icon.svg',
    downloadImg: '/images/download-icon.svg',
    quality: '',
  },
  {
    id: 3,
    Mainicon: '/images/info-red.svg',
    name: 'Enrollment Letter',
    pdf: 'enrollment_letter.pdf',
    date: 'Uploaded: 12/8/2024',
    status: 'rejected',
    eyesImg: '/images/eyes-icon.svg',
    downloadImg: '/images/download-icon.svg',
    quality: 'Document quality too low',
  },
];

const initialState: DocumentState = {
  documents: initialDocuments,
  filteredStatus: 'all',
  loading: false,
  selectedDocument: null,
};

const UserKYCDocumentslice = createSlice({
  name: 'documents',
  initialState,
  reducers: {
    setFilterStatus: (state, action: PayloadAction<PaymentStatus | 'all'>) => {
      state.filteredStatus = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSelectedDocument: (state, action: PayloadAction<Payment | null>) => {
      state.selectedDocument = action.payload;
    },
    updateDocumentStatus: (
      state,
      action: PayloadAction<{ id: number; status: PaymentStatus }>
    ) => {
      const doc = state.documents.find((d) => d.id === action.payload.id);
      if (doc) {
        doc.status = action.payload.status;
      }
    },
    deleteDocument: (state, action: PayloadAction<number>) => {
      state.documents = state.documents.filter((d) => d.id !== action.payload);
    },
    addDocument: (state, action: PayloadAction<Payment>) => {
      state.documents.push(action.payload);
    },
  },
});

export const {
  setFilterStatus,
  setLoading,
  setSelectedDocument,
  updateDocumentStatus,
  deleteDocument,
  addDocument,
} = UserKYCDocumentslice.actions;

export default UserKYCDocumentslice.reducer;