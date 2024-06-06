import { create } from "zustand";
import { useNavigate } from "react-router-dom";
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
      guestId: "",

      // Functions
      // Login fetch
      login: (userInput) =>
        set(async () => {
          try {
            const response = await fetch(`${API_URL}/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: API_KEY,
              },
              body: JSON.stringify(userInput),
            });
            if (!response.ok) {
              throw new Error("Error fetching data", response.message);
            }
            const userData = await response.json();
            set(() => ({
              token: userData.accessToken,
              guestId: userData.guestId,
              isLoggedIn: true,
            }));
            useNavigate("/");
          } catch (error) {
            console.log(error);
            throw new Error("Error", error);
          }
        }),

      // Fetch logged in user
      fetchUser: () =>
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
            console.log(response);
            set(() => ({
              guestData: data,
            }));
          } catch (error) {
            throw new Error("Error fetching data: ", error);
          }
        }),

      // Set loading to true
      setLoading: () => set({ loading: true }),
    }),
    {
      name: "Project Wedding site",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        guestId: state.guestId,
        isLoggedIn: state.isLoggedIn,
      }),
    },
  ),
);
