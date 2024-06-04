import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const API_KEY = import.meta.env.API_KEY;
const API_URL = "http://localhost:8080";

export const useStore = create(
  persist(
    (set) => ({
      guestData: {}, // Data from API
      loading: true,
      token: "",
      isLoggedIn: false,
      userId: "",

      // Functions
      // Fetch logged in user
      fetch: () =>
        set(async (state) => {
          try {
            const response = await fetch(`${API_URL}/${state.userId}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: API_KEY,
              },
            });
            if (!response.ok) {
              throw new Error("Error fetching data");
            }
            const data = await res.json();
            set(() => ({
              guestData: data,
            }));
          } catch (error) {
            throw new Error("Error fetching data: ", error);
          }
        }),

      // Set loading to true
      setLoading: () => set({ loading: true }),

      // Set accessToken
      setToken: (authData) => {
        set({ token: authData });
      },

      // Set isLoggedIn
      setIsLoggedIn: () => set({ isLoggedIn: true }),
    }),
    {
      name: "Project Wedding site",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        token: state.token,
      }),
    },
  ),
);
