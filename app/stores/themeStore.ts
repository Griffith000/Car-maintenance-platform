// appearently useless since i can get the theme frm setTheme from next-themes

import { create } from 'zustand'

interface ThemeState {
  theme: string
  setTheme: (theme: string) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),
}))
