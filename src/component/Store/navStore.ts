import { create } from "zustand";

type NavStore = {
  isOpen: boolean;
  openSideBar: () => void;
  closeSideBar: () => void;
}

export const useNav = create<NavStore>((set) => ({
  isOpen: false,
  openSideBar: () => set({ isOpen: true }),
  closeSideBar: () => set({ isOpen: false })
}))