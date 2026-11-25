import { create } from "zustand";

export const useAudioTime = create((set) => ({
  isPlaying: false,
  currentTime: 0,
  duration: 0,

  startPlaying: () => set({ isPlaying: true }),
  stopPlaying: () => set({ isPlaying: false }),

  togglePlayState: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setCurrentTime: (time) => set({ currentTime: time }),
  setDuration: (totalTime) => set({ duration: totalTime }),
  resetTime: () => set({ currentTime: 0, isPlaying: false }),
}));
