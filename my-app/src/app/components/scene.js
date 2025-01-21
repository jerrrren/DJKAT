// Greeting.js
import React from "react";
import cyoa from "../data/cyoa";
import Options from "./options";
import Image from "next/image";

import { useCurrentScene, useUtilitiesTracker } from "../hooks/stats";

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
    <>
      <h1>Water: {water}</h1>
      <h1>Electricity: {electricity}</h1>
      <h1>HP: {hp}</h1>
      <div className="flex flex-col items-center justify-center h-[40vh] relative py-12 px-4 sm:px-6 lg:px-8 m-4">
        <Image
          alt="scene"
          src={sceneImagePath}
          fill
          className="object-contain"
        ></Image>
      </div>
      <h1>{cyoa.scenarios[currentId].title}</h1>
      <h1>{cyoa.scenarios[currentId].description}</h1>
      <h1>{cyoa.scenarios[currentId].time}</h1>
      <Options handleClick = {handleClick} currentId={currentId}></Options>
    </>
  );
};

export default Scene;
