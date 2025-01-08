// Greeting.js
import React from "react";
import cyoa from "../data/cyoa";
import Options from "./options";
import Image from "next/image";

const Scene = ({}) => {
  const currentId = 0;
  const sceneImagePath = "/images/" + cyoa.scenarios[currentId].image_path;

  return (
    <div className="text-black">
      <div className="flex flex-col items-center justify-center h-[40vh] relative py-12 px-4 sm:px-6 lg:px-8 m-4">
        <Image alt="scene" src={sceneImagePath} fill className="object-contain"></Image>
      </div>
      <h1>{cyoa.scenarios[currentId].title}</h1>
      <h1>{cyoa.scenarios[currentId].description}</h1>
      <h1>{cyoa.scenarios[currentId].time}</h1>
      <Options currentId={currentId}></Options>
    </div>
  );
};

export default Scene;
