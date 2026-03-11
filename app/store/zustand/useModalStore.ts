/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';

type ModalName = 'impersonate' | 'freeze' | 'adjustLimits' | 'email' | 'push' | null;

interface ModalStore {
  activeModal: ModalName;
  modalData: any;
  isOpen: boolean;
  selectedStudent: any;
  openModal: (modal: ModalName, data?: any) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  activeModal: null,
  modalData: null,

  // Legacy fields — kept for backwards compatibility
  isOpen: false,
  selectedStudent: null,

  openModal: (modal, data = null) =>
    set({
      activeModal: modal,
      modalData: data,
      isOpen: true,
      selectedStudent: data,
    }),

  closeModal: () =>
    set({
      activeModal: null,
      modalData: null,
      isOpen: false,
      selectedStudent: null,
    }),
}));