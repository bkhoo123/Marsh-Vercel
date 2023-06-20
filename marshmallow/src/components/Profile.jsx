import React, { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import images from "../../public/images/images";
import Edit from "../../public/images/edit.png";
import axios from "axios";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import { 
  getUserInfo, 
  logout,
  changeProfileIcon
} from "../state/userSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const { email, name, icon } = useSelector((state) => state.user);

  const { user, error, isLoading } = useUser();
  const [profileIcon, setProfileIcon] = useState(0);
  const [modal, setModal] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const handleClick = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  const handleProfile = async (e, index) => {
    e.preventDefault();
    await setProfileIcon(index);
    await dispatch(changeProfileIcon(images[index]))
    setModal(!modal);
  };

  useEffect(() => {
    
    if (user) {
      let payload = {
        name: user.name,
        email: user.email,
      
      };
      dispatch(getUserInfo(payload));
    }
  }, [user, profileIcon]); // eslint-disable-line react-hooks/exhaustive-deps

  console.log( icon, 'icon');

  return (
    user && (
      <>
        <div className="flex flex-col items-center mt-16">
          <Image src={images[profileIcon]} width={100} height={100} />
          <div className="mt-6 text-2xl">Account Info</div>
          <div className="mt-6 border-2 p-4 rounded-md border-sky-400">
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
          </div>
          <button
            onClick={handleClick}
            className="flex mt-6 border-2 p-2 rounded-md border-sky-400 hover:bg-orange-200"
          >

            <Image src={Edit} alt="ICON UNAVAILABLE" className="mr-2" />
            Change Profile Picture
          </button>
        </div>

        <div
          className={
            modal
              ? "flex flex-wrap absolute top-[20%]  gap-4 mx-12 justify-center z-20 bg-slate-300 p-10 items-center justify-items-center rounded-md"
              : "hidden"
          }
        >
          {images.map((image, index) => (
            <div className="p-2">
              <button onClick={(e) => handleProfile(e, index)}>
                <Image
                  src={image}
                  key={index}
                  width={120}
                  height={120}
                  className="hover:bg-emerald-200 rounded-md cursor-pointer p-4"
                  alt=""
                />
              </button>
            </div>
          ))}
          <button
            onClick={handleClick}
            className="ml-20 p-3 bg-cyan-500 text-white rounded-md"
          >
            Exit
          </button>
        </div>
      </>
    )
  );
}
