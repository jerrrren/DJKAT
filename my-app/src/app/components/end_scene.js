import { useCurrentGameState, useUtilitiesTracker } from "../hooks/stats";
import { MdWaterDrop } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";

const EndScene = () => {
  const startGame = useCurrentGameState((state) => state.setToStart);
  const hp = useUtilitiesTracker((state) => state.hp);
  const water = useUtilitiesTracker((state) => state.water);
  const electricity = useUtilitiesTracker((state) => state.electricity);

  const score = (water + electricity + hp) / 3;
  return (
    <div className="flex flex-col items-center w-full">
      <div className="text-3xl font-bold">Thanks for playing!</div>
      <div className="text-xl font-bold mt-4">Your Results</div>
      <div className="bg-gray-800 p-4 rounded shadow-md grid grid-cols-2 gap-x-20">
        <div className="text-lg text-gray-300"><MdWaterDrop className="inline-block text-blue-500" /> Water:</div>
        <div className="text-lg text-gray-300 text-right">{water}</div>
        <div className="text-lg text-gray-300"><BsLightningChargeFill className="inline-block text-yellow-500" /> Electricity:</div>
        <div className="text-lg text-gray-300 text-right">{electricity}</div>
        <div className="text-lg text-gray-300"><GiHealthNormal className="inline-block text-red-500" /> HP:</div>
        <div className="text-lg text-gray-300 text-right">{hp}</div>
        <div className="text-2xl text-white">Score:</div>
        <div className="text-2xl text-white text-right">{score.toFixed()}/100</div>
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
