import { create } from 'zustand';

interface AppState {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
}

export const useStore = create<AppState>((set) => ({
  theme: 'light',
  setTheme: (theme: string) => set({ theme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' }))
})); 