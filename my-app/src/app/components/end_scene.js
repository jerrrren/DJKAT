import { useCurrentGameState, useUtilitiesTracker } from "../hooks/stats";


const EndScene = () => {
  const startGame = useCurrentGameState((state) => state.setToStart);
  const hp = useUtilitiesTracker((state) => state.hp);
  const water = useUtilitiesTracker((state) => state.water);
  const electricity = useUtilitiesTracker((state) => state.electricity);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="text-3xl font-bold">Thanks for playing!</div>
      <div className="text-xl font-bold mt-4">Your Results</div>
      <div className="bg-gray-800 p-4 rounded shadow-md w-1/2">
        <div className="flex items-center justify-between w-full">
          <div className="text-lg text-gray-300">Water:</div>
          <div className="text-lg text-white">{water}</div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="text-lg text-gray-300">Electricity:</div>
          <div className="text-lg text-white">{electricity}</div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="text-lg text-gray-300">HP:</div>
          <div className="text-lg text-white">{hp}</div>
        </div>
      </div>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => startGame()}
      >
        Play Again
      </button>
    </div>
  );
};

export default EndScene;
