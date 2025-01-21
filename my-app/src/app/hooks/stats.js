import { create } from "zustand";

const useUtilitiesTracker = create((set) => ({
  electricity: 10,
  water: 10,
  setElectricity: (value) =>
    set((state) => ({ electricity: state.electricty - value })),
  setWater: (value) => set((state) => ({ water: state.water - value })),
  reset: () => set((state) => ({ water: 10, electricity: 10 })),
}));

const useCurrentScene = create((set) => ({
  sceneId: 0,
  incrementSceneId: () => set((state) => ({ sceneId: state.sceneId + 1 })),
  resetSceneId: () => set((state) => ({ sceneId: 0 })),
}));

const useCurrentGameState = create((set) => ({
  gameState: 0,
  setToStart: () => set(() => ({ gameState: 0 })),
  setToEnd: () => set(() => ({ gameState: 1 })),
  setToPlay: () => set(() => ({ gameState: 2 })),
}));

export { useUtilitiesTracker, useCurrentScene, useCurrentGameState };
