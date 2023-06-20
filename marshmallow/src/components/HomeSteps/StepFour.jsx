import React from 'react'
import marshmallow from "./image.png"
import Image from 'next/image';
import grayfire from "./grayfire.png";
import graycoal from "./graycoal.png";
import graywaterbucket from "./graywaterbucket.png";
import grayshovel from "./grayshovel.png";
import Step4 from './Step4.png'
import Mini from "./Mini.png"
import RoastText from "./RoastText.png"

const StepFour = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[75%] text-xl pt-20">
      <Image src={Step4} />
      <div className="mt-6 flex justify-around w-full">
        <div className="flex flex-col items-center">
          <div className="flex flex-row gap-6">
            <Image src={graycoal} height={140} width={140} />
            <Image src={grayfire} height={140} width={140} />
          </div>
          <div className="text-center my-4 text-gray-400">COLLECT HEAT</div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <Image
            src={marshmallow}
            height={200}
            width={200}
            alt="Marshmallow Image not available"
          />
          <Image 
            src={Mini}
            alt="Marshmallow Image not available"
          />
          <Image 
            src={RoastText}
            alt="Marshmallow Image not available"
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-row gap-6">
            <Image src={graywaterbucket} height={140} width={140} />
            <Image src={grayshovel} height={140} width={140} />
          </div>
          <div className="text-center my-4 text-gray-400">MANAGE YOUR ZONE</div>
        </div>
      </div>
    </div>
  );
}

export default StepFour