import React from "react";
import cyoa from "../data/cyoa";
import Image from "next/image";
import OptionsButton from "./options_button";

const Options = ({ currentId }) => {
  const first_option_url =
    "/images/" + cyoa.scenarios[currentId].options[0].image_path;
  const second_option_url =
    "/images/" + cyoa.scenarios[currentId].options[1].image_path;

  const third_option_url =
    "/images/" + cyoa.scenarios[currentId].options[2].image_path;

  const first_option_data = cyoa.scenarios[currentId].options[0].image_path;
  const second_option_data = cyoa.scenarios[currentId].options[1].image_path;
  const third_option_data = cyoa.scenarios[currentId].options[2].image_path;
  return (
    <div className="grid grid-rows-2 grid-flow-col">
      <OptionsButton option_id={0} currentId={currentId}></OptionsButton>
      <OptionsButton option_id={1} currentId={currentId}></OptionsButton>
      <OptionsButton option_id={2} currentId={currentId}></OptionsButton>

    </div>
  );
};

export default Options;
