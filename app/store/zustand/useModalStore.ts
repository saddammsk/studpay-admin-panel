/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';

type ModalName = 'impersonate' | 'freeze' | 'adjustLimits' | 'email' | 'push' | 'campaign' | null;

interface ModalStore {
  activeModal: ModalName;
  modalData: any;
  isOpen: boolean;
  selectedStudent: any;
  openModal: (modal: ModalName | any, data?: any) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  activeModal: null,
  modalData: null,
  isOpen: false,
  selectedStudent: null,

  openModal: (modal, data = null) => {

    if (modal !== null && typeof modal === 'object') {
      set({
        activeModal: 'campaign',
        modalData: modal,
        isOpen: true,
        selectedStudent: modal,
      });
    } else {
      set({
        activeModal: modal as ModalName,
        modalData: data,
        isOpen: true,
        selectedStudent: data,
      });
    }
  },

  closeModal: () =>
    set({
      activeModal: null,
      modalData: null,
      isOpen: false,
      selectedStudent: null,
    }),
}));