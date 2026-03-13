import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type CardStatus = 'Active' | 'Frozen' | 'Blocked';
export type CardType = 'Physical' | 'Virtual';
export type CardNetwork = 'Visa' | 'Mastercard';

export interface TokenizationStatus {
  applePay: boolean;
  googlePay: boolean;
}

export interface Card {
  id: string;
  type: CardType;
  network: CardNetwork;
  lastFour: string;
  status: CardStatus;
  onlineTransactions: boolean;
  tokenization: TokenizationStatus;
  imageSrc: string;
}

export interface SpendingLimits {
  daily: { used: number; limit: number };
  monthly: { used: number; limit: number };
  atm: { used: number; limit: number };
}

export interface AdjustLimitsForm {
  daily: string;
  monthly: string;
  atm: string;
  reason: string;
}

export interface OrderPhysicalCardForm {
  cardType: string;
  cardholderName: string;
  streetAddress: string;
  city: string;
  postalCode: string;
  country: string;
  shippingMethod: string;
  reason: string;
  waiveIssuanceFee: boolean;
}

export interface CreateVirtualCardForm {
  cardPurpose: string;
  cardNickname: string;
  limitType: string;
  spendingLimit: string;
  shortTerm: boolean;
  instantActivation: boolean;
  autoTokenization: boolean;
  adminReason: string;
}
export interface FreezeCardForm {
  freezeDuration: '' | '24h' | '72h' | '7d' | 'indefinite';
  reason: string;
  internalNotes: string;
  targetCardId: string | null;
}


export interface ReportStolenForm {
  incidentType: 'Stolen' | 'Lost' | 'Damaged' | null;
  orderReplacement: boolean;
  adminNotes: string;
  identityConfirmed: boolean;
  targetCardId: string | null;
}

export interface UnblockPinForm {
  identityVerified: boolean;
  verificationMethod: string;
  adminReason: string;
  targetCardId: string | null;
}

export interface ModalState {
  adjustLimits: boolean;
  orderPhysicalCard: boolean;
  createVirtualCard: boolean;
  freezeCard: boolean;
  reportStolen: boolean;
  unblockPin: boolean;
}

interface CardStore {
  // Cards
  cards: Card[];
  spendingLimits: SpendingLimits;

  // Modal state
  modals: ModalState;

  // Forms
  adjustLimitsForm: AdjustLimitsForm;
  orderPhysicalCardForm: OrderPhysicalCardForm;
  createVirtualCardForm: CreateVirtualCardForm;
  freezeCardForm: FreezeCardForm;
  reportStolenForm: ReportStolenForm;
  unblockPinForm: UnblockPinForm;

  // Notifications
  notification: { message: string; type: 'success' | 'error' | 'info' } | null;

  // Actions - Modals
  openModal: (modal: keyof ModalState, cardId?: string) => void;
  closeModal: (modal: keyof ModalState) => void;

  // Actions - Card operations
  toggleOnlineTransactions: (cardId: string) => void;
  freezeCard: () => void;
  unfreezeCard: (cardId: string) => void;
  reportCardStolen: () => void;
  unblockPin: () => void;

  // Actions - Forms
  updateAdjustLimitsForm: (field: keyof AdjustLimitsForm, value: string) => void;
  submitAdjustLimits: () => void;
  resetAdjustLimitsForm: () => void;

  updateOrderPhysicalCardForm: (field: keyof OrderPhysicalCardForm, value: string | boolean) => void;
  submitOrderPhysicalCard: () => void;

  updateCreateVirtualCardForm: (field: keyof CreateVirtualCardForm, value: string | boolean) => void;
  submitCreateVirtualCard: () => void;

  updateFreezeCardForm: (field: keyof FreezeCardForm, value: string) => void;
  updateReportStolenForm: (field: keyof ReportStolenForm, value: string | boolean | 'Stolen' | 'Lost' | 'Damaged' | null) => void;
  updateUnblockPinForm: (field: keyof UnblockPinForm, value: string | boolean) => void;

  setNotification: (msg: string, type: 'success' | 'error' | 'info') => void;
  clearNotification: () => void;
}

const initialCards: Card[] = [
  {
    id: 'card-1',
    type: 'Physical',
    network: 'Visa',
    lastFour: '4589',
    status: 'Active',
    onlineTransactions: true,
    tokenization: { applePay: true, googlePay: true },
    imageSrc: '/images/visa-card.png',
  },
  {
    id: 'card-2',
    type: 'Virtual',
    network: 'Mastercard',
    lastFour: '7823',
    status: 'Frozen',
    onlineTransactions: true,
    tokenization: { applePay: true, googlePay: false },
    imageSrc: '/images/master-card.png',
  },
  {
    id: 'card-3',
    type: 'Physical',
    network: 'Visa',
    lastFour: '4589',
    status: 'Active',
    onlineTransactions: true,
    tokenization: { applePay: true, googlePay: true },
    imageSrc: '/images/visa-card.png',
  },
];

const defaultAdjustLimitsForm: AdjustLimitsForm = { daily: '1000', monthly: '5000', atm: '500', reason: '' };
const defaultOrderForm: OrderPhysicalCardForm = { cardType: '', cardholderName: '', streetAddress: '', city: '', postalCode: '', country: '', shippingMethod: '', reason: '', waiveIssuanceFee: true };
const defaultVirtualCardForm: CreateVirtualCardForm = { cardPurpose: '', cardNickname: '', limitType: 'Maximum Lifetime Limit', spendingLimit: '', shortTerm: false, instantActivation: true, autoTokenization: false, adminReason: '' };
const defaultFreezeForm: FreezeCardForm = { freezeDuration: '', reason: '', internalNotes: '', targetCardId: null };
const defaultReportStolenForm: ReportStolenForm = { incidentType: null, orderReplacement: false, adminNotes: '', identityConfirmed: false, targetCardId: null };
const defaultUnblockPinForm: UnblockPinForm = { identityVerified: false, verificationMethod: '', adminReason: '', targetCardId: null };

export const useCardInventoryStore = create<CardStore>()(
  devtools((set, get) => ({
    cards: initialCards,
    spendingLimits: {
      daily: { used: 850, limit: 1000 },
      monthly: { used: 4000, limit: 5000 },
      atm: { used: 50, limit: 500 },
    },
    modals: { adjustLimits: false, orderPhysicalCard: false, createVirtualCard: false, freezeCard: false, reportStolen: false, unblockPin: false },
    adjustLimitsForm: defaultAdjustLimitsForm,
    orderPhysicalCardForm: defaultOrderForm,
    createVirtualCardForm: defaultVirtualCardForm,
    freezeCardForm: defaultFreezeForm,
    reportStolenForm: defaultReportStolenForm,
    unblockPinForm: defaultUnblockPinForm,
    notification: null,

    openModal: (modal, cardId) => set((state) => {
      const updates: Partial<CardStore> = {
        modals: { ...state.modals, [modal]: true },
      };
      if (modal === 'freezeCard' && cardId) {
        updates.freezeCardForm = { ...state.freezeCardForm, targetCardId: cardId };
      }
      if (modal === 'reportStolen' && cardId) {
        updates.reportStolenForm = { ...state.reportStolenForm, targetCardId: cardId };
      }
      if (modal === 'unblockPin' && cardId) {
        updates.unblockPinForm = { ...state.unblockPinForm, targetCardId: cardId };
      }
      return updates;
    }),

    closeModal: (modal) => set((state) => ({
      modals: { ...state.modals, [modal]: false },
    })),

    toggleOnlineTransactions: (cardId) => set((state) => ({
      cards: state.cards.map((c) =>
        c.id === cardId ? { ...c, onlineTransactions: !c.onlineTransactions } : c
      ),
    })),

    freezeCard: () => {
      const { freezeCardForm, cards } = get();
      if (!freezeCardForm.targetCardId) return;
      if (!freezeCardForm.freezeDuration || !freezeCardForm.reason) {
        get().setNotification('Please fill in all required fields.', 'error');
        return;
      }
      set((state) => ({
        cards: cards.map((c) =>
          c.id === freezeCardForm.targetCardId ? { ...c, status: 'Frozen' } : c
        ),
        modals: { ...state.modals, freezeCard: false },
        freezeCardForm: defaultFreezeForm,
      }));
      get().setNotification('Card has been frozen successfully.', 'success');
    },

    unfreezeCard: (cardId) => {
      set((state) => ({
        cards: state.cards.map((c) =>
          c.id === cardId ? { ...c, status: 'Active' } : c
        ),
      }));
      get().setNotification('Card has been unfrozen.', 'success');
    },

    reportCardStolen: () => {
      const { reportStolenForm } = get();
      if (!reportStolenForm.targetCardId) return;
      if (!reportStolenForm.incidentType || !reportStolenForm.adminNotes || !reportStolenForm.identityConfirmed) {
        get().setNotification('Please complete all required fields and confirm identity.', 'error');
        return;
      }
      set((state) => ({
        cards: state.cards.map((c) =>
          c.id === reportStolenForm.targetCardId ? { ...c, status: 'Blocked' } : c
        ),
        modals: { ...state.modals, reportStolen: false },
        reportStolenForm: defaultReportStolenForm,
      }));
      get().setNotification('Card has been permanently blocked.', 'info');
    },

    unblockPin: () => {
      const { unblockPinForm } = get();
      if (!unblockPinForm.identityVerified || !unblockPinForm.verificationMethod || !unblockPinForm.adminReason) {
        get().setNotification('Please complete all required fields.', 'error');
        return;
      }
      set((state) => ({ modals: { ...state.modals, unblockPin: false }, unblockPinForm: defaultUnblockPinForm }));
      get().setNotification('PIN reset instructions sent to the student\'s device.', 'success');
    },

    updateAdjustLimitsForm: (field, value) => set((state) => ({
      adjustLimitsForm: { ...state.adjustLimitsForm, [field]: value },
    })),

    submitAdjustLimits: () => {
      const { adjustLimitsForm } = get();
      if (!adjustLimitsForm.reason) {
        get().setNotification('Please provide a reason for the limit change.', 'error');
        return;
      }
      set((state) => ({
        spendingLimits: {
          daily: { ...state.spendingLimits.daily, limit: Number(adjustLimitsForm.daily) },
          monthly: { ...state.spendingLimits.monthly, limit: Number(adjustLimitsForm.monthly) },
          atm: { ...state.spendingLimits.atm, limit: Number(adjustLimitsForm.atm) },
        },
        modals: { ...state.modals, adjustLimits: false },
        adjustLimitsForm: defaultAdjustLimitsForm,
      }));
      get().setNotification('Spending limits updated and submitted for approval.', 'success');
    },

    resetAdjustLimitsForm: () => set({ adjustLimitsForm: defaultAdjustLimitsForm }),

    updateOrderPhysicalCardForm: (field, value) => set((state) => ({
      orderPhysicalCardForm: { ...state.orderPhysicalCardForm, [field]: value },
    })),

    submitOrderPhysicalCard: () => {
      const { orderPhysicalCardForm } = get();
      if (!orderPhysicalCardForm.cardType || !orderPhysicalCardForm.reason) {
        get().setNotification('Please fill in all required fields.', 'error');
        return;
      }
      const newCard: Card = {
        id: `card-${Date.now()}`,
        type: 'Physical',
        network: 'Visa',
        lastFour: String(Math.floor(1000 + Math.random() * 9000)),
        status: 'Active',
        onlineTransactions: true,
        tokenization: { applePay: false, googlePay: false },
        imageSrc: '/images/visa-card.png',
      };
      set((state) => ({
        cards: [...state.cards, newCard],
        modals: { ...state.modals, orderPhysicalCard: false },
        orderPhysicalCardForm: defaultOrderForm,
      }));
      get().setNotification('Physical card order submitted for approval.', 'success');
    },

    updateCreateVirtualCardForm: (field, value) => set((state) => ({
      createVirtualCardForm: { ...state.createVirtualCardForm, [field]: value },
    })),

    submitCreateVirtualCard: () => {
      const { createVirtualCardForm } = get();
      if (!createVirtualCardForm.cardPurpose || !createVirtualCardForm.adminReason) {
        get().setNotification('Please fill in all required fields.', 'error');
        return;
      }
      const newCard: Card = {
        id: `card-${Date.now()}`,
        type: 'Virtual',
        network: 'Mastercard',
        lastFour: String(Math.floor(1000 + Math.random() * 9000)),
        status: createVirtualCardForm.instantActivation ? 'Active' : 'Frozen',
        onlineTransactions: true,
        tokenization: { applePay: createVirtualCardForm.autoTokenization, googlePay: createVirtualCardForm.autoTokenization },
        imageSrc: '/images/master-card.png',
      };
      set((state) => ({
        cards: [...state.cards, newCard],
        modals: { ...state.modals, createVirtualCard: false },
        createVirtualCardForm: defaultVirtualCardForm,
      }));
      get().setNotification('Virtual card created successfully.', 'success');
    },

    updateFreezeCardForm: (field, value) => set((state) => ({
      freezeCardForm: { ...state.freezeCardForm, [field]: value },
    })),

    updateReportStolenForm: (field, value) => set((state) => ({
      reportStolenForm: { ...state.reportStolenForm, [field]: value },
    })),

    updateUnblockPinForm: (field, value) => set((state) => ({
      unblockPinForm: { ...state.unblockPinForm, [field]: value },
    })),

    setNotification: (message, type) => {
      set({ notification: { message, type } });
      setTimeout(() => get().clearNotification(), 4000);
    },

    clearNotification: () => set({ notification: null }),
  }))
);