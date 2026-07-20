"use client";

import { create } from "zustand";

interface UiStoreState {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}

export const useUiStore = create<UiStoreState>((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (value) => set({ mobileMenuOpen: value }),
}));
