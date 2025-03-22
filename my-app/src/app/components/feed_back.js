import cyoa from "../data/cyoa";
import Image from "next/image";
import { MdWaterDrop, MdExpandMore, MdExpandLess } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";
import { useState } from "react";

const FeedbackScene = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const history = JSON.parse(localStorage.getItem("history") || "[]");

  const AllFeedBack = history.map((selectedOptionIndex, scenarioIndex) => {
    const scenario = cyoa.scenarios[scenarioIndex];
    const selectedOption = scenario.options[selectedOptionIndex];
    const selectedOptionImageUrl = "/images/" + selectedOption.image_path;

    return (
      <div key={scenarioIndex} className="mb-4">
        <div
          className="rounded-lg transform transition-all duration-200 hover:scale-102 hover:shadow-lg"
          onClick={() => toggleExpand(scenarioIndex)}
        >
          <div className="flex justify-between items-center p-2 bg-gray-200 rounded-t-lg cursor-pointer hover:bg-gray-300 transition-colors">
            <h3 className="font-bold">Scenario {scenarioIndex + 1}: Your Choice</h3>
            {expandedItems[scenarioIndex] ?
              <MdExpandLess className="text-2xl text-blue-600" /> :
              <MdExpandMore className="text-2xl text-blue-600" />
            }
          </div>

          <div className="bg-white p-2 rounded-b-lg shadow-sm group cursor-pointer hover:bg-blue-50 transition-colors">
            {/* First row: Image, name, and costs */}
            <div className="flex flex-row items-center">
              <div className="w-24 sm:w-32 md:w-40 h-auto relative flex-shrink-0" style={{ aspectRatio: '16/9' }}>
                <Image
                  alt={selectedOption.name}
                  src={selectedOptionImageUrl}
                  fill={true}
                  style={{ objectFit: 'contain' }}
                  className="rounded-md transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="ml-2 sm:ml-3 flex-1">
                <div className="font-medium group-hover:text-blue-700 transition-colors">{selectedOption.name}</div>
                <div className="text-xs sm:text-sm flex flex-row items-center flex-wrap gap-1 sm:gap-2">
                  <div>Cost: </div>
                  <div className="flex items-center">
                    {selectedOption.cost.water}
                    <MdWaterDrop className="inline-block text-blue-500" />
                  </div>
                  <div className="flex items-center">
                    {selectedOption.cost.electricity}
                    <BsLightningChargeFill className="inline-block text-yellow-500" />
                  </div>
                  <div className="flex items-center">
                    {selectedOption.cost.hp}
                    <GiHealthNormal className="inline-block text-red-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Second row: Description */}
            <div className="mt-2 text-sm text-gray-800 transition-colors">
              {selectedOption.justification}
            </div>
          </div>
        </div>

        {/* Dropdown with alternative options */}
        {expandedItems[scenarioIndex] && (
          <div className="mt-2 ml-4 border-l-2 border-blue-400 pl-4">
            <h3 className="font-semibold text-gray-700 mb-2">Other options you could have chosen:</h3>
            {scenario.options.map((option, optionIndex) => {
              if (optionIndex === selectedOptionIndex) return null; // Skip the selected option
              const optionImageUrl = "/images/" + option.image_path;

              return (
                <div key={optionIndex} className="bg-white p-2 mb-2 rounded-lg shadow-sm">
                  {/* First row: Image, name, and costs */}
                  <div className="flex flex-row items-center">
                    <div className="w-24 sm:w-32 md:w-40 h-auto relative flex-shrink-0" style={{ aspectRatio: '16/9' }}>
                      <Image
                        alt={option.name}
                        src={optionImageUrl}
                        fill={true}
                        style={{ objectFit: 'contain' }}
                        className="rounded-md"
                      />
                    </div>
                    <div className="ml-2 sm:ml-3 flex-1">
                      <div className="font-medium">{option.name}</div>
                      <div className="text-xs sm:text-sm flex flex-row items-center flex-wrap gap-1 sm:gap-2">
                        <div>Cost: </div>
                        <div className="flex items-center">
                          {option.cost.water}
                          <MdWaterDrop className="inline-block text-blue-500" />
                        </div>
                        <div className="flex items-center">
                          {option.cost.electricity}
                          <BsLightningChargeFill className="inline-block text-yellow-500" />
                        </div>
                        <div className="flex items-center">
                          {option.cost.hp}
                          <GiHealthNormal className="inline-block text-red-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Second row: Description */}
                  <div className="mt-2 text-sm text-gray-800">
                    {option.justification}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="feedback-container">
      {AllFeedBack.length > 0 ?
        AllFeedBack :
        <div className="text-center text-gray-500">No history available</div>
      }
    </div>
  );
};

export default FeedbackScene;
