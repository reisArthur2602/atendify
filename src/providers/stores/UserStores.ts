import { create } from "zustand";
import { User } from "../../types/User";

type UserState = {
  currentUser: User | null;
};

type UserActions = {
  updateUser: (user: User | null) => void;
};

export const UserStore = create<UserState & UserActions>((set) => ({
  currentUser: null,
  updateUser: (user) =>
    set({
      currentUser: user,
    }),
}));
