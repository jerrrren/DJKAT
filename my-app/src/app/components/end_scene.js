import { useCurrentGameState } from "../hooks/stats";


const EndScene = () => {
  const startGame = useCurrentGameState((state) => state.setToStart);

  return (
    <div>
      Thanks for playing!
      <button onClick={() => startGame()}>Click to Restart</button>
    </div>
  );
};

export default EndScene;
