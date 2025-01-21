"use client";

import Scene from "../components/scene";
import EndScene from "../components/end_scene";
import StartScene from "../components/start_scene";

import { useCurrentGameState } from "../hooks/stats";

const Page = () => {
  const currentGameState = useCurrentGameState((state) => state.gameState);



  
  switch (currentGameState) {
    case 0:
      return (
        <div className="min-h-screen bg-gray-400 py-4 px-4 sm:px-6 lg:px-8">
          <StartScene></StartScene>
        </div>
      );
    case 1:
      return (
        <div className="min-h-screen bg-gray-400 py-4 px-4 sm:px-6 lg:px-8">
          <EndScene></EndScene>
        </div>
      );
    case 2:
      return (
        <div className="min-h-screen bg-gray-400 py-4 px-4 sm:px-6 lg:px-8">
          <Scene></Scene>
        </div>
      );
  }


};

export default Page;
