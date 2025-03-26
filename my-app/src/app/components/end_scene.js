import { useCurrentGameState, useUtilitiesTracker } from "../hooks/stats";
import { MdWaterDrop } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";
import FeedbackScene from "./feed_back";

const EndScene = () => {
  const startGame = useCurrentGameState((state) => state.setToStart);
  const hp = useUtilitiesTracker((state) => state.hp);
  const water = useUtilitiesTracker((state) => state.water);
  const electricity = useUtilitiesTracker((state) => state.electricity);

  // Player should minimize the difference between resources and HP
  const resourceScore = (water + electricity) / 2;
  const score = 100 - Math.abs(resourceScore - hp);

  let resultsImage;

  if (score <= 40) {
    resultsImage = "/images/result_bad.png";
  } else if (score <= 80) {
    resultsImage = "/images/result_avg.png";
  } else {
    resultsImage = "/images/result_good.png";
  }

  return (
    <div className="flex flex-col w-full">
      {/* Top header across both columns */}
      <div className="w-full text-center py-4">
        <div className="text-3xl font-bold">Thanks for playing!</div>
      </div>

      <div className="flex flex-col md:flex-row w-full">
        {/* Left side - Results section */}
        <div className="w-full md:w-1/2 flex flex-col items-center p-4">
          <div className="text-xl font-bold mb-2">Your Final Stats</div>
          <div className="bg-gray-800 p-4 rounded shadow-md grid grid-cols-2 gap-x-20 w-full max-w-md mb-8">
            <div className="text-lg text-gray-300">
              <MdWaterDrop className="inline-block text-blue-500" /> Water:
            </div>
            <div className="text-lg text-gray-300 text-right">{water}</div>
            <div className="text-lg text-gray-300">
              <BsLightningChargeFill className="inline-block text-yellow-500" />{" "}
              Electricity:
            </div>
            <div className="text-lg text-gray-300 text-right">{electricity}</div>
            <div className="text-lg text-gray-300">
              <GiHealthNormal className="inline-block text-red-500" /> HP:
            </div>
            <div className="text-lg text-gray-300 text-right">{hp}</div>
          </div>

          {/* Results Image - Sized to be fully visible */}
          <div className="text-xl font-bold mb-2">Your Resource Conservation Spirit Animal</div>
          <div
            className="w-full aspect-[16/9] bg-cover bg-center rounded-md mb-4"
            style={{ backgroundImage: `url(${resultsImage})` }}
          ></div>

          <button
            className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => startGame()}
          >
            Play Again!
          </button>
        </div>

        {/* Right side - Feedback section */}
        <div className="w-full md:w-1/2 p-4">
          <div className="text-xl font-bold mb-4 text-center">You Selected:</div>
          <FeedbackScene />
        </div>
      </div>
    </div>
  );
};

export default EndScene;
