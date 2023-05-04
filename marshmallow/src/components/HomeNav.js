import React, {useState} from 'react'
import HowtoPlay from '../../public/images/howtoplay.png'
import Cards from '../../public/images/cardicon.png'
import Play from '../../public/images/playbutton.png'
import Image from 'next/image'
import Friends from '../../public/images/friendsicon.png'
import Syncrinity from '../../public/images/profilebutton.png'
import { useRouter } from 'next/router'

export default function HomeNav({active}) {
  const [current, setCurrent] = useState('')
    
  return (
    <div style={{backgroundColor: '#4E9AD0'}} className="w-[100%] h-[200px] flex flex-row justify-between items-center px-10 pt-4">
        <div className="flex flex-row items-center gap-16">
            <div onClick={() => {active("How to Play"); setCurrent("How to Play");}} className="flex flex-col gap-2 cursor-pointer  hover:scale-105 ">
            <Image 
            src={HowtoPlay}
            className="h-[120px] w-[130px]"
            />
            <div className={current === "How to Play" ? "text-amber-500 drop-shadow-dark text-center" : 'text-white drop-shadow-dark text-center'}>How to Play</div>
            </div>

            <div onClick={() => {active("Cards"); setCurrent("Cards");}} className="flex flex-col gap-4 cursor-pointer hover:scale-105">
            <Image src={Cards} className="h-[110px] w-[120px]"/>
            <div className={current === "Cards" ? "text-amber-500 drop-shadow-dark text-center" : 'text-white drop-shadow-dark text-center'}>Cards</div>
            </div>


        </div>

            <div onClick={() => {active("Play"); setCurrent("Play");}} className="flex flex-col gap-4 cursor-pointer hover:scale-105">
                <Image src={Play} className="h-[120px] w-[160px]" />
                <div className={current === "Play" ? "text-amber-500 drop-shadow-dark text-center" : 'text-white drop-shadow-dark text-center'}>Play</div>
            </div>

        
            <div className="flex flex-row items-center gap-16">
            <div onClick={() => {active("Friends"); setCurrent("Friends");}} className="flex flex-col gap-4 cursor-pointer hover:scale-105">
            <Image 
            src={Friends}
            className="h-[120px] w-[160px]"
            />
            <div className={current === "Friends" ? "text-amber-500 drop-shadow-dark text-center" : 'text-white drop-shadow-dark text-center'}>
                Friends
            </div>
            </div>

            <div onClick={() => {active("Profile"); setCurrent("Profile");}} className="flex flex-col gap-4 cursor-pointer hover:scale-105">
            <Image src={Syncrinity} className="h-[120px] w-[160px]" />
            <div className={current === "Profile" ? "text-amber-500 drop-shadow-dark text-center" : 'text-white drop-shadow-dark text-center'}>Synchrinity</div>
            </div>
        </div>

    </div>
  )
}
