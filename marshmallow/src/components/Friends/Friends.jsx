import React, { useState } from "react";
import friendmarshmallows from "./friendmarshmallows.png";
import Image from "next/image";
import Online from "./online.png";
import AddFriends from "./AddFriends.png";
import FriendsText from "./addfriendtext.png";

export default function Friends() {
  const [modal, setModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault()
    setModal(true)
  }

  const handleExit = (e) => {
    e.preventDefault()
    setModal(false)
  }

  const FriendsModal = () => {
    return (
      <>
        <div className={modal ? "absolute inset-0 bg-black opacity-50 z-10" : "hidden"} />
        <div
          className={
            modal
              ? "absolute z-20 left-[30%] top-[25%] rounded-md w-[40%] bg-slate-100 h-[auto]"
              : "hidden"
          }
        >
          <div className="bg-[#4E9AD0] rounded-md w-full h-[100px] p-10 text-center text-white text-3xl">
            Search for Friends
          </div>
          <div className="flex flex-col p-4">
            <input
              className="p-4 text-center"
              type="text"
              placeholder="Search by Username or Email"
            />
            <div className="flex justify-center mt-6">
              {/* <button className='text-white bg-[#4E9AD0] p-2 rounded-md hover:bg-gray-500' >Submit</button> */}
              <button onClick={handleExit}  className='text-white bg-[#4E9AD0] p-2 rounded-md hover:bg-gray-500' >Exit</button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="py-16 px-16 flex justify-between">
        <div className="flex flex-col items-center justify-center">
          <Image className="mb-8" src={friendmarshmallows} />
          {/* <Image src={Online} /> */}
          <p className="text-2xl">Friends Online</p>
        </div>
        <div onClick={handleClick} className="flex flex-col items-center cursor-pointer transform transition duration-500 hover:scale-110">
          <Image className="mb-6" src={AddFriends} />
          {/* <Image className=""  src={FriendsText} /> */}
          <p className="text-2xl">Add Friends</p>
        </div>
      </div>

      <div className="border-4 border-black mx-20 h-[auto] p-8 rounded-md">
        adsfasdfsadf
      </div>

      <FriendsModal />
    </>
  );
}
