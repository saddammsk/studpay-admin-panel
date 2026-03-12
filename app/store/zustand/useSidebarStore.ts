import { create } from "zustand";

type SidebarState = {
  isOpen: boolean;
  collapsed: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  setCollapsed: () => void;
};

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: false,
  collapsed: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  setCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
}));

