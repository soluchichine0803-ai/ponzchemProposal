import { create } from "zustand";

export const useWalletStore = create((set) => ({
  balance: 0,
  bonusBalance: 0,
  transactions: [],
  setBalance: (balance) => set({ balance }),
  setBonusBalance: (bonusBalance) => set({ bonusBalance }),
  setTransactions: (transactions) => set({ transactions }),
}));
