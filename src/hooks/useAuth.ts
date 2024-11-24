import { create } from "zustand";
import { User } from "../types/User";

type AuthState = {
  currentUser: User | null;
  isAuthenticated: boolean;
};

type AuthActions = {
  updateUser: (user: User | null) => void;
};

export const useAuth = create<AuthState & AuthActions>((set) => ({
  currentUser: null,
  isAuthenticated: false,
  updateUser: (user) =>
    set({
      currentUser: user,
      isAuthenticated: !!user,
    }),
}));


