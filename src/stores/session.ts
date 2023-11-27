import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SessionState {
  jwt: string | null;
  username: string | null;
  login: (sessionInfo: { jwt: string; username: string }) => void;
  logout: () => void;
}

export const useSessionStore = create<SessionState>()(
  persist(
    (set) => ({
      jwt: null,
      username: null,
      login: ({ jwt, username }) =>
        set({
          jwt,
          username,
        }),
      logout: () => set({ jwt: null, username: null }),
    }),
    { name: 'session-storage' },
  ),
);
