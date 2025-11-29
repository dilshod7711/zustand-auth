import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuth: false,

      login: (user) =>
        set({
          user,
          isAuth: true,
        }),

      logOut: () =>
        set({
          user: null,
          isAuth: false,
        }),
    }),
    {
      name: "auth-store",
    }
  )
);

export default useAuthStore;
