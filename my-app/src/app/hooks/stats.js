import { create } from "zustand";

const useUtilitiesTracker = create((set) => ({
  electricity: 1000,
  water: 1000,
  setElectricity: (value) =>
    set((state) => ({ electricity: state.electricty - value })),
  setWater: (value) => set((state) => ({ water: state.water - value })),
}));

const useCurrentScene = create((set) => ({
  sceneId: 0,
  incrementSceneId: () => set((state) => ({ sceneId: state.sceneId + 1 })),
  resetSceneId: () => set((state) => ({ sceneId: 0 })),
}));


const useCurrentGameState = create((set) => ({
    gameState:0,
    setToStart: () => set(() => ({ gameState: 0 })),
    setToEnd: () => set(() => ({ gameState: 1 })),
    setToPlay: () => set(() => ({ gameState: 2 })),
}))

export { useUtilitiesTracker, useCurrentScene, useCurrentGameState };
