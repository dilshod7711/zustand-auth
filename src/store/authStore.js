import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuth: false,
      token: null,

      login: (user, token) =>
        set({
          user,
          token,
          isAuth: true,
        }),

      logOut: () =>
        set({
          user: null,
          isAuth: false,
          token: null,
        }),
    }),
    {
      name: "auth-store",
    }
  )
);

export default useAuthStore;
