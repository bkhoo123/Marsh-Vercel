import React from 'react'
import marshmallow from "./image.png"
import Image from 'next/image'
import fire from './fire.png'
import coal from './coal.png'
import Step2 from "./Step2.png"

const StepTwo = () => {
  return (
    <div className="w-[75%] flex flex-col items-center justify-center text-xl pt-20 ">
      {/* <div className="border-8 p-16 border-black rounded-lg">
        <p className="mt-4">
          Marshmallow Party is a marshmallow roasting card game where you compete to{' '} 
          <span className="underline inline-block">collect heat,</span>
        </p>
      </div> */}
      <Image 
        src={Step2}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }} className="mt-6">

        <div className="absolute left-[17%] top-[25%]">
          <div className="flex flex-row gap-6">
            <Image 
              src={fire}
              height={140}
              width={140}
            />
            <Image 
              src={coal}
              height={140}
              width={140}
            />
          </div>
          <div className="text-center mt-4" >COLLECT HEAT</div>
        </div>
        

        <Image 
        src={marshmallow}
        height={200}
        width={200}
        alt="Marshmallow Image not available"
      />
      </div>
    </div>
  );
};

export default StepTwo