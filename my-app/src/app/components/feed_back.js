import cyoa from "../data/cyoa";
import Image from "next/image";
import { MdWaterDrop } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";

const FeedbackScene = () => {
  const AllFeedBack = JSON.parse(localStorage.getItem("history")).map(
    (item, index) => {
      const option_data = cyoa.scenarios[index].options[item];
      const option_image_url =
        "/images/" + cyoa.scenarios[index].options[item].image_path;

      return (
        <div
          key={index}
          className={`grid-item bg-gray-200 p-2 flex flex-row justify-between rounded-lg `}
        >
          <Image
            alt={option_data.name}
            src={option_image_url}
            width={160}
            height={90}
          />
          <div>
            <div className="font-bold text-left pl-1">{option_data.name}</div>

            <div className="flex flex-row pl-1 pr-1 items-start">
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
              <div className="pl-1">{option_data.justification}</div>
            </div>
            
          </div>
        </div>
      );
    }
  );

  return AllFeedBack;
};

export default FeedbackScene;
