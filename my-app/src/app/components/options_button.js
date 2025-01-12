import cyoa from "../data/cyoa";
import Image from "next/image";
import { useUtilitiesTracker } from "../hooks/stats";
import { use } from "react";

const OptionsButton = ({ option_id, currentId }) => {
  const option_data = cyoa.scenarios[currentId].options[option_id];
  const option_image_url =
    "/images/" + cyoa.scenarios[currentId].options[option_id].image_path;

  const updateElectricity = useUtilitiesTracker(
    (state) => state.setElectricity
  );
  const updateWater = useUtilitiesTracker((state) => state.setWater);
  const water = useUtilitiesTracker((state) => state.water);

  return (
    <button
      className="grid-item"
      onClick={() => {
        updateElectricity(option_data.cost.electricity);
        updateWater(option_data.cost.water);
        console.log(water);
      }}
    >
      <div className="border border-black p-2 flex flex-row items-center">
        <Image
          alt={option_data.name}
          src={option_image_url}
          width={160}
          height={90}
        />
        {option_data.name}
      </div>
    </button>
  );
};

export default OptionsButton;
