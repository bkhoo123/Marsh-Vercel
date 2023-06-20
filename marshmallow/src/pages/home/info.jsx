import React, {useState} from 'react'
import { useRouter } from 'next/router'
import StepOne from '<prefix>/components/HomeSteps/StepOne'
import StepTwo from '<prefix>/components/HomeSteps/StepTwo'
import StepThree from '<prefix>/components/HomeSteps/StepThree'
import StepFour from '<prefix>/components/HomeSteps/StepFour'
import StepFive from '<prefix>/components/HomeSteps/StepFive'
import StepSix from '<prefix>/components/HomeSteps/StepSix'
import StepSeven from '<prefix>/components/HomeSteps/StepSeven'
import StepEight from '<prefix>/components/HomeSteps/StepEight'

const Info = () => {
  const router = useRouter()
  const [step, setStep] = useState(0)

  const steps = {
    0: StepOne,
    1: StepTwo,
    2: StepThree,
    3: StepFour,
    4: StepFive,
    5: StepSix,
    6: StepSeven,
    7: StepEight,
  }

  return (
    <div className="flex justify-center  h-auto flex-col items-center">
      {steps[step]()}
      <div className="flex gap-4 mt-6" >
        <button className={step > 0 ? "mt-8 bg-orange-600 p-3 rounded-md drop-shadow-dark text-white hover:scale-105": "hidden"} onClick={() => setStep(step - 1)}>Back</button>
        <button className={step === 6 ? "hidden" : "mt-8 bg-orange-600 p-3 rounded-md drop-shadow-dark text-white hover:scale-105"} onClick={() => setStep(step + 1)}>Next</button>
      </div>
      <div>
        <button 
          onClick={() => router.push('/home')}
          className="mt-4 bg-[#4E9AD0] text-white p-3 rounded-md drop-shadow-dark hover:scale-105 ">
          Go to Home Page
        </button>
      </div>
    </div>
  )
}

export default Info