import React from 'react'
import marshmallow from "./image.png"
import Image from 'next/image'
import Step1 from "./Step1.png"

const StepOne = () => {
  return (
    <div className="w-[75%] flex flex-col items-center justify-center pt-20 ">
      <Image 
      src={Step1}
      />
      <div className="flex justify-center mt-6" >
      <Image 
        
        src={marshmallow}
        height={200}
        width={200}
        alt="Marshmallow Image not available"
      />
      </div>
    </div>
  )
}

export default StepOne