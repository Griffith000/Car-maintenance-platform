import { create } from 'zustand';

interface UserState {
  userId: number | null;
  name: string | null;
  email: string | null;
}

interface UserActions {
  setUserData: (userId: number | null, name: string | null, email: string | null) => void;
  clearUserData: () => void;
}

type UserStore = UserState & UserActions;


export const useUserStore = create<UserStore>((set) => ({

  userId: null,
  name: null,
  email: null,

  setUserData: (userId, name, email) => set({
    userId,
    name,
    email
  }),
  
  clearUserData: () => set({
    userId: null,
    name: null,
    email: null
  })
}));