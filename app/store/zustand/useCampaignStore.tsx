import { create } from 'zustand';

export interface CampaignTarget {
  studentId: string;
  studentName: string;
  product: string;
  offer: string;
}

interface CampaignStore {
  isOpen: boolean;
  targetData: CampaignTarget | null;
  openCampaignModal: (data: CampaignTarget) => void;
  closeCampaignModal: () => void;
}

export const useCampaignStore = create<CampaignStore>((set) => ({
  isOpen: false,
  targetData: null,
  openCampaignModal: (data) => set({ isOpen: true, targetData: data }),
  closeCampaignModal: () => set({ isOpen: false, targetData: null }),
}));