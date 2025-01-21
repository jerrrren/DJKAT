import {
  useCurrentGameState,
  useUtilitiesTracker,
  useCurrentScene,
} from "../hooks/stats";

const StartScene = () => {
  const playGame = useCurrentGameState((state) => state.setToPlay);

  const resetUtilities = useUtilitiesTracker((state) => state.reset);

  const resetSceneId = useCurrentScene((state) => state.resetSceneId);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col text-lg leading-relaxed max-w-3xl mx-auto text-center bg-white rounded-lg shadow-lg gap-2 p-2">
        <p>
          In this immersive simulation, you'll navigate a day in a resource-constrained world, making critical decisions about water and electricity usage that affects your health.
        </p>
        <p>
          Every choice matters - from your morning shower to your evening routine.
        </p>
        <p>
          Will you prioritize personal comfort or resource conservation?
        </p>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 rounded mt-8 text-4xl"
        onClick={() => {
          playGame();
          resetUtilities();
          resetSceneId();
        }}
      >
        Click to Start
      </button>
    </div>
  );
};

export default StartScene;
