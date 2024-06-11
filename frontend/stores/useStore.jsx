import { create } from "zustand";
import { useNavigate } from "react-router-dom";
import { persist, createJSONStorage } from "zustand/middleware";

const API_URL = "https://project-final-gvph.onrender.com";

export const useStore = create(
  persist(
    (set, get) => ({
      guestData: {}, // Data from API
      loading: true,
      token: "",
      isLoggedIn: false,
      guestId: "",

      // Login fetch
      login: (userInput, callback) =>
        set(async () => {
          try {
            const response = await fetch(`${API_URL}/login`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userInput),
            });
            if (!response.ok) {
              throw new Error("Error fetching data", response);
            }
            const userData = await response.json();
            set(() => ({
              token: userData.accessToken,
              guestId: userData.guestId,
              isLoggedIn: true,
            }));
            if (callback) {
              callback();
            }
          } catch (error) {
            console.log(error);
            throw new Error("Error", error);
          }
        }),

      // Authorize user
      authUser: () =>
        set(async (state) => {
          try {
            const response = await fetch(`${API_URL}/auth`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: state.token,
              },
            });
            if (!response.ok) {
              set(() => ({ isLoggedIn: false }));
              throw new Error("user not authorized");
            }
            set(() => ({
              isLoggedIn: true,
            }));
          } catch (error) {
            throw new Error("Error fetching data: ", error);
          }
        }),

      // Fetch data for logged in user
      setGuestData: () =>
        set(async (state) => {
          try {
            const response = await fetch(`${API_URL}/guests/${state.guestId}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: state.token,
              },
            });
            if (!response.ok) {
              throw new Error("Error fetching data");
            }
            const data = await response.json();
            set(() => ({
              guestData: data,
            }));
          } catch (error) {
            console.log("Error", error);
            throw new Error("Error fetching data: ", error);
          }
        }),

      // RSVP
      updateGuest: (userInput, callback) =>
        set(async (state) => {
          try {
            const response = await fetch(`${API_URL}/guests/${state.guestId}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                Authorization: state.token,
              },
              body: JSON.stringify(userInput),
            });
            if (!response.ok) {
              throw new Error("Error fetching data", response);
            }
            if (callback) {
              callback();
            }
            console.log("Patched data");
          } catch (err) {
            throw new Error("Error", err.errors);
          }
        }),

      logout: () => set({ isLoggedIn: false, token: "", guestId: "" }),

      // Set loading to true
      setLoading: (state) => set({ loading: true }),
    }),
    {
      name: "Project Wedding site",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        guestId: state.guestId,
        token: state.token,
        isLoggedIn: state.isLoggedIn,
      }),
    },
  ),
);
