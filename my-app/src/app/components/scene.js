// Greeting.js
import React from "react";
import cyoa from "../data/cyoa";
import Options from "./options";
import Image from "next/image";

import { useCurrentScene, useUtilitiesTracker } from "../hooks/stats";
import { MdWaterDrop } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";

const Scene = () => {
  const currentId = useCurrentScene((state) => state.sceneId);
  const water = useUtilitiesTracker((state) => state.water);
  const electricity = useUtilitiesTracker((state) => state.electricity);
  const hp = useUtilitiesTracker((state) => state.hp);

  const sceneImagePath = "/images/" + cyoa.scenarios[currentId].image_path;

  const handleClick = (water_usage, electricity_usage) => {
    setMessage("Button clicked!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center relative">
      <div className="flex justify-center gap-4 py-2 px-4 sm:px-6 lg:px-8 items-center">
        <div className="flex-col bg-white rounded-lg shadow-lg p-4 self-center">
          <p className="text-lg"><MdWaterDrop className="inline-block text-blue-500" /> Water: {water}</p>
          <p className="text-lg"><BsLightningChargeFill className="inline-block text-yellow-500" /> Electricity: {electricity}</p>
          <p className="text-lg"><GiHealthNormal className="inline-block text-red-500" /> HP: {hp}</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 self-center">
          <Image
            alt="scene"
            src={sceneImagePath}
            className="object-contain mx-auto"
            width={600}
            height={400}
          ></Image>
        </div>
      </div>
      <div className="bg-white p-4 rounded-b-lg">
        <h1 className="text-2xl font-bold">{cyoa.scenarios[currentId].title}</h1>
        <h2 className="text-lg font-light">{cyoa.scenarios[currentId].time}</h2>
        <p className="text-lg">{cyoa.scenarios[currentId].description}</p>
        <Options handleClick={handleClick} currentId={currentId}></Options>
      </div>
    </div>
  );
};

export default Scene;
