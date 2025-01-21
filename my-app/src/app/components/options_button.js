import cyoa from "../data/cyoa";
import Image from "next/image";
import {
  useCurrentGameState,
  useUtilitiesTracker,
  useCurrentScene,
} from "../hooks/stats";
import { use } from "react";

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
      className="grid-item"
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
      <div className="border border-black p-2 flex flex-row items-center">
        <Image
          alt={option_data.name}
          src={option_image_url}
          width={160}
          height={90}
        />
        {option_data.name} -{option_data.cost.water} water -{option_data.cost.electricity} electricity -{option_data.cost.hp} hp
      </div>
    </button>
  );
};

export default OptionsButton;
