import React from "react";
import cyoa from "../data/cyoa";
import Image from "next/image";
import OptionsButton from "./options_button";

const Options = ({ currentId }) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <OptionsButton option_id={0} currentId={currentId}></OptionsButton>
      <OptionsButton option_id={1} currentId={currentId}></OptionsButton>
      <OptionsButton option_id={2} currentId={currentId}></OptionsButton>

    </div>
  );
};

export default Options;
