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
    <div>
      Welcome!
      <button
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
