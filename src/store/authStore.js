import { create } from "zustand";

export const useAuthStore = create((set) => ({
    accessToken: null,
    refreshToken: null,
    setToken: (accessToken, refreshToken) => {
        localStorage.setItem('access', accessToken);
        localStorage.setItem('refresh', refreshToken);
        set({ accessToken, refreshToken });
    },
    clearToken: () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        set({});
    }
}))