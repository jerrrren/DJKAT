import { create } from "zustand";

const useUtilitiesTracker = create((set) => ({
  electricity: 100,
  water: 100,
  hp: 100,
  setElectricity: (value) => set((state) => ({ electricity: state.electricity - value })),
  setWater: (value) => set((state) => ({ water: state.water - value })),
  setHp: (value) => set((state) => ({ hp: state.hp - value })),
  reset: () => set((state) => ({ water: 100, electricity: 100, hp: 100 })),
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
