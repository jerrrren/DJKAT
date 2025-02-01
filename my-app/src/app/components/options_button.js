import cyoa from "../data/cyoa";
import Image from "next/image";
import {
  useCurrentGameState,
  useUtilitiesTracker,
  useCurrentScene,
} from "../hooks/stats";
import { use } from "react";
import { MdWaterDrop } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";

const MAX_SCENE_ID = 4;

const OptionsButton = ({ option_id, currentId }) => {
  const option_data = cyoa.scenarios[currentId].options[option_id];
  const option_image_url =
    "/images/" + cyoa.scenarios[currentId].options[option_id].image_path;

  const water = useUtilitiesTracker((state) => state.water);
  const updateWater = useUtilitiesTracker((state) => state.setWater);
  const electricity = useUtilitiesTracker((state) => state.electricity);
  const updateElectricity = useUtilitiesTracker((state) => state.setElectricity);
  const hp = useUtilitiesTracker((state) => state.hp);
  const updateHp = useUtilitiesTracker((state) => state.setHp);

  const incrementScene = useCurrentScene((state) => state.incrementSceneId);

  const endGame = useCurrentGameState((state) => state.setToEnd);

  return (
    <button
      className="grid-item bg-gray-200 hover:bg-gray-300 p-2 flex flex-row items-center rounded-lg"
      onClick={() => {
        updateElectricity(option_data.cost.electricity);
        updateWater(option_data.cost.water);
        updateHp(option_data.cost.hp);
        incrementScene();
        console.log(water)
        console.log(currentId);
        if ((water < 0) | (electricity < 0)) {
          console.log("endGame")
          endGame();
        }
        if (currentId >= MAX_SCENE_ID) {
          endGame();
        }
      }}
    >
      <Image
        alt={option_data.name}
        src={option_image_url}
        width={160}
        height={90}
      />
      <div className="flex flex-col pl-2">
        <div className="font-bold text-left">{option_data.name}</div>
        <div className="text-sm flex flex-row items-center space-x-2 ">
          <div>Cost: </div>
          <div>
            {option_data.cost.water}
            <MdWaterDrop className="inline-block text-blue-500" />
          </div>
          <div>
            {option_data.cost.electricity}
            <BsLightningChargeFill className="inline-block text-yellow-500" />
          </div>
          <div>
            {option_data.cost.hp}
            <GiHealthNormal className="inline-block text-red-500" />
          </div>
        </div>
      </div>
    </button>
  );
};

export default OptionsButton;
