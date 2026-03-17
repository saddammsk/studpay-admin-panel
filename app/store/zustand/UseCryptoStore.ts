import { create } from "zustand";

type ModalType = "freezeWallet" | "convertFiat" | null;

interface CryptoState {
  activeModal: ModalType;
  convertAsset: string;
  convertAmount: string;
  copiedHash: string | null;

  openModal: (modal: ModalType) => void;
  closeModal: () => void;
  setConvertAsset: (asset: string) => void;
  setConvertAmount: (amount: string) => void;
  isConvertValid: () => boolean;
  submitConvert: () => void;
  copyHash: (hash: string) => void;
}

export const useCryptoStore = create<CryptoState>((set, get) => ({
  activeModal: null,
  convertAsset: "",
  convertAmount: "",
  copiedHash: null,

  openModal: (modal) => set({ activeModal: modal }),

  closeModal: () =>
    set({
      activeModal: null,
      convertAsset: "",
      convertAmount: "",
    }),

  setConvertAsset: (asset) => set({ convertAsset: asset }),
  setConvertAmount: (amount) => set({ convertAmount: amount }),

  isConvertValid: () => {
    const { convertAsset, convertAmount } = get();
    return convertAsset !== "" && convertAmount !== "" && !isNaN(Number(convertAmount)) && Number(convertAmount) > 0;
  },

  submitConvert: () => {
    if (!get().isConvertValid()) return;
    get().closeModal();
  },

  copyHash: (hash) => {
    navigator.clipboard.writeText(hash);
    set({ copiedHash: hash });
    setTimeout(() => set({ copiedHash: null }), 2000);
  },
}));