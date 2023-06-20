import React from "react";
import Image from "next/image";
import Step3 from "./Step3.png";
import marshmallow from "./image.png";
import grayfire from "./grayfire.png";
import graycoal from "./graycoal.png";
import waterbucket from "./waterbucket.png";
import shovel from "./shovel.png";

const StepThree = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[75%] text-xl pt-20">
      <Image src={Step3} />
      <div className="mt-6 flex justify-around w-full">
        <div className="flex flex-col items-center">
          <div className="flex flex-row gap-6">
            <Image src={grayfire} height={140} width={140} />
            <Image src={graycoal} height={140} width={140} />
          </div>
          <div className="text-center my-4 text-gray-400">COLLECT HEAT</div>
        </div>

        <div className="flex items-center">
          <Image
            src={marshmallow}
            height={200}
            width={200}
            alt="Marshmallow Image not available"
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-row gap-6">
            <Image src={waterbucket} height={140} width={140} />
            <Image src={shovel} height={140} width={140} />
          </div>
          <div className="text-center my-4">MANAGE YOUR ZONE</div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
