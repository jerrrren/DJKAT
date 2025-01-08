import React from "react";
import cyoa from "../data/cyoa";
import Image from "next/image";

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
      <button className="grid-item">
        <div>
          <Image
            alt="first option"
            src={first_option_url}
            width={160}
            height={90}
          />
        </div>
      </button>
      <button className="grid-item">
        <div>
          <Image
            alt="second option"
            src={second_option_url}
            width={160}
            height={90}
          />
        </div>
      </button>
      <button className="grid-item">
        <div>
          <Image
            alt="third option"
            src={third_option_url}
            width={160}
            height={90}
          />
        </div>
      </button>
    </div>
  );
};

export default Options;
