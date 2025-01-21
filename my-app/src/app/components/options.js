import React from "react";
import cyoa from "../data/cyoa";
import Image from "next/image";
import OptionsButton from "./options_button";

const Options = ({ currentId }) => {

  return (
    <div className="grid grid-rows-2 grid-flow-col">
      <OptionsButton option_id={0} currentId={currentId}></OptionsButton>
      <OptionsButton option_id={1} currentId={currentId}></OptionsButton>
      <OptionsButton option_id={2} currentId={currentId}></OptionsButton>

    </div>
  );
};

export default Options;
