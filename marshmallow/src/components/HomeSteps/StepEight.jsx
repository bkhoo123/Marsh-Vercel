import React from "react";
import HowtoPlay from "../../../public/images/howtoplay.png";
import Cards from "../../../public/images/cardicon.png";
import Play from "../../../public/images/playbutton.png";
import Image from "next/image";
import Friends from "../../../public/images/friendsicon.png";
import Syncrinity from "../../../public/images/profilebutton.png";
import Step8 from "./Step8.png";
import marshmallow from "./image.png";
import arrowhow from "./arrowhow.png";

const StepEight = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#4E9AD0" }}
        className="w-[100%] h-[250px] flex flex-row justify-between items-center px-10 pt-4"
      >
        <div className="flex flex-row items-center gap-16">
          <div className="flex flex-col gap-2 hover:scale-105 ">
            <Image
              src={HowtoPlay}
              className="h-[120px] w-[130px] opacity-30"
              alt="How to Play"
            />
            <div className="text-white drop-shadow-dark text-center opacity-30">
              How to Play
            </div>
          </div>

          <div className="flex flex-col gap-4  hover:scale-105">
            <Image
              src={Cards}
              className="h-[110px] w-[120px] opacity-30"
              alt="cards"
            />
            <div className="text-white drop-shadow-dark text-center opacity-30">
              Cards
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4  hover:scale-105 relative">
          <Image
            src={Play}
            className="h-[120px] w-[160px] "
            alt="play"
          />
          <div className="text-white drop-shadow-dark text-center">
            Play
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6">
            <Image src={arrowhow} alt="arrow image missing" />
          </div>
        </div>

        <div className="flex flex-row items-center gap-16">
          <div className="flex flex-col gap-4  hover:scale-105">
            <Image
              src={Friends}
              className="h-[120px] w-[160px] opacity-30"
              alt="Friends"
            />
            <div className="text-white drop-shadow-dark text-center opacity-30">
              Friends
            </div>
          </div>

          <div className="flex flex-col gap-4 hover:scale-105">
            <Image
              src={Syncrinity}
              className="h-[120px] w-[160px] opacity-30"
              alt="profile"
            />
            <div className="text-white drop-shadow-dark text-center opacity-30">
              Synchrinity
            </div>
          </div>
        </div>
      </div>

      <div className="h-full pt-20 flex flex-col justify-center items-center">
        <Image src={Step8} alt="Marshmallow Image not available" />
        <Image
          src={marshmallow}
          alt="Marshmallow Image not available"
          height={200}
          width={200}
        />
      </div>
    </>
  );
};

export default StepEight;
